import { validation } from "sanity";

export default {
    name: 'program',
    title: 'Program/Jurusan',
    type: 'document',
    fields: [
        {
            name: 'nama',
            title: 'Nama Program/Jurusan',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nama',
                maxLength: 96
            }
        },
        {
            name: 'logo',
            title: 'Logo/Icon',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'deskripsiSingkat',
            title: 'Dskripsi Singkat',
            type: 'text',
            rows: 3,
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'deskripsiLengkap',
            title: 'Deskripsi Lengkap',
            type: 'array',
            of: [{type:'block'}]
        },
        {
            name: 'visi',
            title: 'Visi Program',
            type: 'text',
            rows: 3
        },
        {
            name: 'misi',
            title: 'Misi Program',
            type: 'array',
            of: [{type: 'string'}]
        },

    ],
    preview: {
    select: {
      title: 'nama',
      media: 'logo'
    }
  }

}