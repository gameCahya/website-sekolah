import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'tinkers',
  title: 'The Tinkers',
  type: 'document',
  fields: [
    defineField({
name: 'topProjects',
      title: 'Top Student Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'project',
          title: 'Project',
          fields: [
            defineField({
              name: 'projectName',
              title: 'Nama Projek',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'studentName',
              title: 'Nama Murid',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'class',
              title: 'Kelas',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Deskripsi Singkat',
              type: 'text',
            }),
            defineField({
              name: 'docLink',
              title: 'Link Dokumentasi',
              type: 'url',
            }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Completed', value: 'Completed' },
                  { title: 'In Development', value: 'In Development' },
                  { title: 'Beta Testing', value: 'Beta Testing' },
                ],
              },
            }),
            defineField({
              name: 'type',
              title: 'Tipe',
              type: 'string',
              options: {
                list: [
                  { title: 'Kurikulum', value: 'kurikulum' },
                  { title: 'Personal', value: 'personal' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'projectName',
              subtitle: 'studentName',
            },
          },
        },
      ],
    }),
  ],
})




