import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { jobs } from './CareersPage';

type FormState = {
  name: string;
  email: string;
  linkedin_or_portfolio: string;
  message: string;
  uses_canva: string;
  twitter: string;
  instagram: string;
  github: string;
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') ?? '';
  const job = jobs.find((j) => j.title === role);

  const isMarketingIntern = role === 'Marketing Intern';

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    linkedin_or_portfolio: '',
    message: '',
    uses_canva: '',
    twitter: '',
    instagram: '',
    github: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('job_applications').insert({
      role,
      name: form.name.trim(),
      email: form.email.trim(),
      linkedin_or_portfolio: form.linkedin_or_portfolio.trim() || null,
      message: form.message.trim(),
      uses_canva: isMarketingIntern ? form.uses_canva || null : null,
      twitter: form.twitter.trim() || null,
      instagram: form.instagram.trim() || null,
      github: form.github.trim() || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    } else {
      setStatus('success');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden w-full blueprint-grid-light">
      {/* Header */}
      <header className="w-full py-4 fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <nav className="mx-auto max-w-5xl px-4 w-full pointer-events-auto">
          <div className="bg-surface-light backdrop-blur-md bg-opacity-80 border border-gray-200 rounded-full px-6 py-3 shadow-soft flex items-center justify-between">
            <Link to="/">
              <img src="/KroweLogo.png" alt="Krowe Logo" width={100} height={100} />
            </Link>
            <Link
              to="/careers"
              className="text-sm font-medium text-text-muted-light hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>←</span>
              <span>Back to careers</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="h-20" />
      <div className="glow-line-light" />

      <section className="max-w-2xl mx-auto px-6 pt-16 pb-24">
        {/* Role info */}
        {job && (
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
              {job.type}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-3">{job.title}</h1>
            <p className="text-sm text-text-muted-light leading-relaxed">{job.description}</p>
          </div>
        )}

        {!job && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy mb-2">Apply</h1>
            <p className="text-sm text-text-muted-light">Role: {role || 'Unknown'}</p>
          </div>
        )}

        {/* Form card */}
        <div className="glass-panel rounded-2xl p-8 shadow-card">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 mb-4">
                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-navy mb-2">Application submitted!</h2>
              <p className="text-sm text-text-muted-light mb-6">
                Thanks for applying for <span className="font-medium text-navy">{role}</span>. We'll review your application and be in touch soon.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center bg-primary text-white text-sm font-semibold py-2.5 px-6 rounded-xl hover:opacity-90 transition-opacity"
              >
                Back to careers
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2 className="text-lg font-bold text-navy">Your application</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-muted-light" htmlFor="name">
                    Full name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-text-muted-light" htmlFor="email">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-text-muted-light" htmlFor="linkedin_or_portfolio">
                  LinkedIn or portfolio URL
                </label>
                <input
                  id="linkedin_or_portfolio"
                  name="linkedin_or_portfolio"
                  type="url"
                  value={form.linkedin_or_portfolio}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/..."
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium text-text-muted-light">
                  Social profiles <span className="font-normal opacity-60">(optional)</span>
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition">
                    <span className="text-xs font-medium text-text-muted-light w-20 flex-shrink-0">Twitter / X</span>
                    <input
                      name="twitter"
                      type="text"
                      value={form.twitter}
                      onChange={handleChange}
                      placeholder="@handle"
                      className="flex-1 text-sm text-navy placeholder:text-gray-400 bg-transparent focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition">
                    <span className="text-xs font-medium text-text-muted-light w-20 flex-shrink-0">Instagram</span>
                    <input
                      name="instagram"
                      type="text"
                      value={form.instagram}
                      onChange={handleChange}
                      placeholder="@handle"
                      className="flex-1 text-sm text-navy placeholder:text-gray-400 bg-transparent focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition">
                    <span className="text-xs font-medium text-text-muted-light w-20 flex-shrink-0">GitHub</span>
                    <input
                      name="github"
                      type="text"
                      value={form.github}
                      onChange={handleChange}
                      placeholder="@username"
                      className="flex-1 text-sm text-navy placeholder:text-gray-400 bg-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {isMarketingIntern && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium text-text-muted-light">
                    Do you use Canva? <span className="text-primary">*</span>
                  </p>
                  <div className="flex flex-col gap-2">
                    {["Yes, I'm a pro", 'Yes, not a lot', "No, but I'm open to learning", 'No, I prefer other tools'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition ${
                          form.uses_canva === option
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="uses_canva"
                          value={option}
                          checked={form.uses_canva === option}
                          onChange={handleChange}
                          required={isMarketingIntern}
                          className="accent-primary"
                        />
                        <span className="text-sm text-navy">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-text-muted-light" htmlFor="message">
                  Why Krowe? <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us why you're excited about this role and what you'd bring to the team..."
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-xs text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center bg-primary text-white text-sm font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === 'loading' ? 'Submitting…' : 'Submit application'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
