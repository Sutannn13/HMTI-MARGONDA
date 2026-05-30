-- =====================================================
-- HMTI UBSI Margonda - Supabase Schema
-- Database: collaboration_requests
-- =====================================================

-- Enable UUID extension
create extension if not exists "pgcrypto";

-- Create collaboration_requests table
create table if not exists public.collaboration_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  institution text not null,
  email text not null,
  whatsapp text,
  collaboration_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.collaboration_requests enable row level security;

-- Create policy for public INSERT only
-- This allows anonymous users to INSERT but not SELECT, UPDATE, or DELETE
drop policy if exists "Allow public collaboration insert" on public.collaboration_requests;

create policy "Allow public collaboration insert"
on public.collaboration_requests
for insert
to anon
with check (true);

-- Create index for faster queries
create index if not exists idx_collaboration_requests_created_at
on public.collaboration_requests (created_at desc);

create index if not exists idx_collaboration_requests_collaboration_type
on public.collaboration_requests (collaboration_type);

-- =====================================================
-- Verification Query
-- Run this to verify the table was created correctly:
--
-- SELECT * FROM public.collaboration_requests LIMIT 10;
-- =====================================================

-- Grant permissions for authenticated users (optional, for admin access)
-- Uncomment if you need admin access later
-- grant all on public.collaboration_requests to authenticated;
-- grant all on public.collaboration_requests to service_role;