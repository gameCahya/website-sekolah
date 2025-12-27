import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'berita',
  title: 'Berita & Kegiatan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Klik "Generate" untuk auto-generate dari judul',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'date',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      description: 'Ringkasan singkat untuk preview (max 200 karakter)',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Konten Berita',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Gambar Utama',
      type: 'image',
      description: 'Gambar thumbnail untuk preview',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Akademik', value: 'akademik' },
          { title: 'Prestasi', value: 'prestasi' },
          { title: 'Kegiatan', value: 'kegiatan' },
          { title: 'Pengumuman', value: 'pengumuman' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gradientFrom',
      title: 'Gradient From (untuk card)',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Teal)', value: 'from-primary-400' },
          { title: 'Secondary (Yellow)', value: 'from-secondary-400' },
          { title: 'Tertiary (Green)', value: 'from-tertiary-400' },
        ],
      },
      initialValue: 'from-primary-400',
    }),
    defineField({
      name: 'gradientTo',
      title: 'Gradient To (untuk card)',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'to-primary-600' },
          { title: 'Secondary', value: 'to-secondary-500' },
          { title: 'Tertiary', value: 'to-tertiary-600' },
        ],
      },
      initialValue: 'to-primary-600',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Tampilkan di Homepage?',
      type: 'boolean',
      description: 'Maksimal 3 berita akan ditampilkan di homepage',
      initialValue: false,
    }),
    defineField({
      name: 'isPublished',
      title: 'Publikasikan?',
      type: 'boolean',
      description: 'Hanya berita yang dipublikasikan yang akan tampil',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage',
      date: 'publishedAt',
    },
    prepare({ title, subtitle, media, date }) {
      return {
        title: title,
        subtitle: `${subtitle} • ${new Date(date).toLocaleDateString('id-ID')}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: 'Tanggal Publikasi (Terbaru)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});