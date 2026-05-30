'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';

const collaborationTypes = [
  { value: 'seminar', label: 'Seminar' },
  { value: 'workshop', label: 'Workshop' },
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
      newErrors.message = 'Pesan minimal 20 karakter';
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
      <div className="glass rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-yellow-600" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Konfigurasi Kolaborasi Belum Aktif
        </h3>
        <p className="text-muted-foreground">
          Form kolaborasi saat ini tidak dapat digunakan karena konfigurasi Supabase
          belum diatur. Silakan hubungi administrator untuk mengaktifkan fitur ini.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 md:p-8"
    >
      {submitStatus === 'success' ? (
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Pengajuan Berhasil Terkirim!
          </h3>
          <p className="text-muted-foreground mb-6">
            Terima kasih telah mengajukan kolaborasi dengan HMTI UBSI Margonda.
            Tim kami akan segera menghubungi Anda.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitStatus('idle')}
          >
            Ajukan Kolaborasi Lainnya
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitStatus === 'error' && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-800 font-medium">Gagal mengirim</p>
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Nama Lengkap <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Masukkan nama lengkap"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={cn(errors.name && 'border-red-500')}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">
                Instansi/Brand/Organisasi <span className="text-red-500">*</span>
              </Label>
              <Input
                id="institution"
                placeholder="Masukkan nama instansi"
                value={formData.institution}
                onChange={(e) => handleChange('institution', e.target.value)}
                className={cn(errors.institution && 'border-red-500')}
              />
              {errors.institution && (
                <p className="text-xs text-red-500">{errors.institution}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@contoh.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={cn(errors.email && 'border-red-500')}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">Nomor WhatsApp (opsional)</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="08xxxxxxxxxx"
                value={formData.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="collaboration_type">
              Jenis Kolaborasi <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.collaboration_type}
              onValueChange={(value) => handleChange('collaboration_type', value)}
            >
              <SelectTrigger className={cn(errors.collaboration_type && 'border-red-500')}>
                <SelectValue placeholder="Pilih jenis kolaborasi" />
              </SelectTrigger>
              <SelectContent>
                {collaborationTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.collaboration_type && (
              <p className="text-xs text-red-500">{errors.collaboration_type}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Pesan / Proposal <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Jelaskan rencana kerja sama Anda..."
              rows={5}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={cn(errors.message && 'border-red-500')}
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
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
        </form>
      )}
    </motion.div>
  );
}