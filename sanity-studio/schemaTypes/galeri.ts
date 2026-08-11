import { validation } from "sanity";

export default {
    name: 'galeri',
    title: 'Galeri',
    type: 'document',
    fields: [
        {
            name: 'judul',
            title: 'Judul',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'judul',
                maxLength: 96
            }
        },
        {
            name: 'tanggal',
            title: 'Tanggal Kegiatan',
            type: 'date',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'kategori',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    {title: 'Kegiatan Sekolah', value: 'kegiatan'},
                    {title: 'Lomba & Prestasi', value: 'lomba'},
                    {title: 'Ekstrakulikuler', value: 'ekskul'},
                    {title: 'Upacara & Peringatan', value: 'upacara'},
                    {title: 'Fasilitas', value: 'fasilitas'},
                    {title: 'Lainnya', value: 'lainnya'}
                ]
            }
        },
        {
            name: 'deskripsi',
            title: 'Deskripsi',
            type: 'text',
            rows: 3
        },
        {
            name: 'gambar',
            title: 'Foto-foto',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'string'
                        }
                    ]
                }
            ],
            validation: (Rule:any) => Rule.required().min(1)
        },
        {
            name: 'featured',
            title: 'Tampilkan di Homepage',
            type: 'boolean',
            initialValue: false
        }
    ],
    preview: {
        select: {
            title: 'judul',
            subtitle: 'kategori',
            media: 'gambar.0'
        }
    }
}