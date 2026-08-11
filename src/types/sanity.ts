import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updateAt: string
  _rev: string
}

export interface Guru extends SanityDocument{
  _type: 'guru'
  nama: string
  nik?: string
  jabatan: string
  mataPelajaran?: string
  foto?: SanityImageSource
  email?: string
  telepon?: string
  bio?: any[]
}

export interface Galeri extends SanityDocument{
  _type:'galeri'
  judul: string
  deskripsi?: string
  foto: SanityImageSource
  tanggal?: string
  kategori?: string
}

export interface Berita extends SanityDocument {
  _type: 'berita'
  judul: string
  slug: {
    current: string
  }
  tanggalPublikasi: string
  kategori?: string
  penulis?: string
  gambarUtama?: SanityImageSource
  ringkasan?: string
  konten?: any[]
  tags?: string[]
}

export interface Pengumuman extends SanityDocument {
  _type: 'pengumuman'
  judul: string
  isi: string
  tanggal: string
  prioritas?: 'rendah' | 'sedang' | 'tinggi'
  aktif: boolean
}

export interface Program extends SanityDocument{
  _type: 'program'
  nama: string
  slug: {
    current: string
  }
  deskripsi?: any[]
  gambar?: SanityImageSource
  durasi?: string
  targetPeserta?: string
}

export interface TinkersProject {
  projectName: string
  studentName: string
  class: string
  description?: string
  docLink?: string
  status?: 'Completed' | 'In Development' | 'Beta Testing'
  tags?: string[]
  type: 'kurikulum' | 'personal'
}

export interface Tinkers extends SanityDocument {
  _type: 'tinkers'
}
