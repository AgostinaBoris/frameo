-- Run this once in the Supabase SQL Editor.

create table if not exists public.watchlist (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  movie_id text not null,
  type text not null default 'movie',
  title text not null,
  poster_url text,
  img_class text,
  match text,
  genre text,
  platform text,
  watch_url text,
  description text,
  why_match text,
  created_at timestamptz not null default now(),
  unique (user_id, movie_id)
);

alter table public.watchlist enable row level security;

create policy "Users can view their own watchlist"
  on public.watchlist for select
  using (auth.uid() = user_id);

create policy "Users can add to their own watchlist"
  on public.watchlist for insert
  with check (auth.uid() = user_id);

create policy "Users can remove from their own watchlist"
  on public.watchlist for delete
  using (auth.uid() = user_id);
