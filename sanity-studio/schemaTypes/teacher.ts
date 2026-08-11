// schemas/teacher.ts (di Sanity Studio project)
import { defineType, defineField } from 'sanity';

export default defineType ({
  name: 'teacher',
  title: 'Guru & Karyawan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'position',
      title: 'Jabatan',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'subject',
      title: 'Mata Pelajaran',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      description: 'Untuk mengatur urutan tampil'
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'photo',
      order: 'order',
    },
    prepare({ title, subtitle, order, media }) {
      return {
        media: media,
        title: `${order}. ${title}`,
        subtitle: subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})