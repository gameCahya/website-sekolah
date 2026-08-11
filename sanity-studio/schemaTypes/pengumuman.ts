import { useInitialValue } from "sanity";

export default {
    name: 'pengumuman',
    title: 'Pengumuman',
    type: 'document',
    fields:[
        {
            name: 'judul',
            title: 'Judul Pengumuman',
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
            name:'tanggal',
            title: 'Tanggal Dibuat',
            type: 'datetime',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'kategori',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    {title: 'Umum', value:'umum'},
                    {title: 'Akademik', value: 'akademik'},
                    {title: 'Pendaftaran', value: 'pendaftaran'},
                    {title: 'Ujian', value: 'ujian'},
                    {title: 'Penting', value: 'penting'}
                ]
            }
        },
        {
            name: 'prioritas',
            title: 'Prioritas',
            type: 'string',
            options: {
                list: [
                    {title: 'Normal' , value: 'normal'},
                    {title: 'Penting', value: 'penting'},
                    {title: 'Mendesak', value: 'medesak'}
                ]
            },
            useInitialValue: 'normal'
        },
        {
            name:'ringkasan',
            title: 'Ringkasan',
            type: 'text',
            rows: 3
        },
        {
            name: 'konten',
            title: 'Konten Pengumuman',
            type: 'array',
            of: [ { type: 'block'}]
        },
        {
            name:'lampiran',
            title: 'File Lampiran',
            type: 'file',
            options: {
                accept: '.pdf, doc, odt, .docx, ods, xls, xlsx'
            }
        },
        {
            name: 'berlakuSampai',
            title: 'Berlaku Sampai',
            type: 'date',
            description: 'Kosonkan jika tidak ada batas waktu'
        },
        {
            name: 'tmapilkanDiHomepage',
            title: 'Tampilkan di Homepage',
            type: 'boolean',
            initialValue: false
        },
    ],
    preview: {
        select: {
            title: 'judul',
            subtitle: 'kategori'
        }
    }
}