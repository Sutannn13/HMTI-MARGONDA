'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { isSupabaseConfigured, submitCollaboration } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';
import { Loader2, CheckCircle, AlertCircle, Send, Sparkles, MessageSquare, Mail, User, Building } from 'lucide-react';

const collaborationTypes = [
  { value: 'seminar', label: 'Seminar & Talkshow' },
  { value: 'workshop', label: 'Workshop & Pelatihan' },
  { value: 'sponsorship', label: 'Sponsorship' },
  { value: 'media-partner', label: 'Media Partner' },
  { value: 'community-event', label: 'Community Event' },
  { value: 'social-impact', label: 'Social Impact Program' },
  { value: 'technology', label: 'Technology Collaboration' },
  { value: 'other', label: 'Lainnya' },
];

interface FormData {
  name: string;
  institution: string;
  email: string;
  whatsapp: string;
  collaboration_type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  institution?: string;
  email?: string;
  collaboration_type?: string;
  message?: string;
}

export function CollaborationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    institution: '',
    email: '',
    whatsapp: '',
    collaboration_type: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    }

    if (!formData.institution.trim()) {
      newErrors.institution = 'Nama instansi/brand/organisasi wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.collaboration_type) {
      newErrors.collaboration_type = 'Jenis kolaborasi wajib dipilih';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan/proposal wajib diisi';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Minimal 20 karakter untuk deskripsi yang jelas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitCollaboration({
        name: formData.name,
        institution: formData.institution,
        email: formData.email,
        whatsapp: formData.whatsapp || undefined,
        collaboration_type: formData.collaboration_type,
        message: formData.message,
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        institution: '',
        email: '',
        whatsapp: '',
        collaboration_type: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Terjadi kesalahan saat mengirim data. Silakan coba lagi.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isSupabaseConfigured) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-amber-200/50 bg-gradient-to-br from-amber-50/50 to-orange-50/50 p-8 text-center shadow-sm">
        {/* Decorative */}
        <div className="absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-amber-100/50 blur-2xl" />

        <div className="relative">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/50 bg-white shadow-sm">
            <AlertCircle className="h-8 w-8 text-amber-500" />
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-900">
            Konfigurasi Belum Aktif
          </h3>
          <p className="mx-auto max-w-sm text-sm text-slate-600">
            Form kolaborasi saat ini dalam mode pengembangan. Hubungi administrator
            untuk mengaktifkan fitur submission.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-medium text-amber-700">
            <MessageSquare className="h-3.5 w-3.5" />
            Demo Mode - Data tidak akan tersimpan
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-8"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-blue-50/50 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-24 w-24 translate-y-12 -translate-x-12 rounded-full bg-blue-100/30 blur-2xl" />

      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative text-center py-12"
          >
            {/* Success Icon */}
            <div className="relative mx-auto mb-6 inline-flex">
              <div className="absolute inset-0 rounded-full bg-emerald-100 blur-xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-200 bg-emerald-50">
                <CheckCircle className="h-10 w-10 text-emerald-500" />
              </div>
            </div>

            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Pengajuan Terkirim!
            </h3>
            <p className="mx-auto mb-8 max-w-sm text-slate-600">
              Terima kasih telah mengajukan kolaborasi dengan HMTI UBSI Margonda.
              Tim kami akan meninjau proposal Anda dan menghubungi via email.
            </p>

            <Button
              variant="outline"
              onClick={() => setSubmitStatus('idle')}
              className="border-slate-300 hover:bg-slate-50"
            >
              Ajukan Kolaborasi Lainnya
            </Button>
          </motion.div>
        ) : (
          <motion.div key="form">
            {/* Form Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                Form Pengajuan Kolaborasi
              </h3>
              <p className="text-sm text-slate-500">
                Isi form di bawah untuk mengajukan kerja sama dengan HMTI
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-5">
              {/* Error Alert */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-red-200/50 bg-red-50/80 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <p className="font-medium text-red-800">Gagal mengirim</p>
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Name & Institution Row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      Nama Lengkap
                      <span className="text-red-500">*</span>
                    </span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={cn(
                      'border-slate-200 bg-white/80 transition-all focus:bg-white',
                      errors.name && 'border-red-400 bg-red-50/50 focus:border-red-400 focus:bg-red-50/50'
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-sm font-medium text-slate-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Building className="h-3.5 w-3.5 text-slate-400" />
                      Instansi
                      <span className="text-red-500">*</span>
                    </span>
                  </Label>
                  <Input
                    id="institution"
                    placeholder="Nama perusahaan/brand/institusi"
                    value={formData.institution}
                    onChange={(e) => handleChange('institution', e.target.value)}
                    className={cn(
                      'border-slate-200 bg-white/80 transition-all focus:bg-white',
                      errors.institution && 'border-red-400 bg-red-50/50 focus:border-red-400 focus:bg-red-50/50'
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.institution && (
                    <p className="flex items-center gap-1 text-xs text-red-500">
                      {errors.institution}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & WhatsApp Row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-slate-400" />
                      Email
                      <span className="text-red-500">*</span>
                    </span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={cn(
                      'border-slate-200 bg-white/80 transition-all focus:bg-white',
                      errors.email && 'border-red-400 bg-red-50/50 focus:border-red-400 focus:bg-red-50/50'
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-sm font-medium text-slate-700">
                    WhatsApp (opsional)
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    className="border-slate-200 bg-white/80 transition-all focus:bg-white"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Collaboration Type */}
              <div className="space-y-2">
                <Label htmlFor="collaboration_type" className="text-sm font-medium text-slate-700">
                  Jenis Kolaborasi <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.collaboration_type}
                  onValueChange={(value) => handleChange('collaboration_type', value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger className={cn(
                    'border-slate-200 bg-white/80 transition-all focus:bg-white',
                    errors.collaboration_type && 'border-red-400 bg-red-50/50'
                  )}>
                    <SelectValue placeholder="Pilih jenis kolaborasi" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {collaborationTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.collaboration_type && (
                  <p className="flex items-center gap-1 text-xs text-red-500">
                    {errors.collaboration_type}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Pesan / Proposal <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan rencana kerja sama Anda: jenis kegiatan, target peserta, timeline, dan expected outcome..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={cn(
                    'resize-none border-slate-200 bg-white/80 transition-all focus:bg-white',
                    errors.message && 'border-red-400 bg-red-50/50 focus:border-red-400 focus:bg-red-50/50'
                  )}
                  disabled={isSubmitting}
                />
                <div className="flex items-center justify-between">
                  {errors.message ? (
                    <p className="flex items-center gap-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  ) : (
                    <span className="text-xs text-slate-400">Minimal 20 karakter</span>
                  )}
                  <span className="text-xs text-slate-400">
                    {formData.message.length} karakter
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className={cn(
                  'w-full transition-all',
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20'
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Pengajuan
                  </>
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-center text-xs text-slate-400">
                Data Anda akan digunakan hanya untuk keperluan pengajuan kolaborasi
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}