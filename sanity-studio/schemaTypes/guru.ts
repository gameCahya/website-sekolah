export default {
    name: 'guru',
    title: 'Guru & Staff',
    type: 'document',
    fields: [
        {
            name: 'nama',
            title: 'Nama Lengkap',
            type: 'string',
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'foto',
            title: 'Foto',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'jabatan',
            title: 'Jabatan',
            type: 'string',
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'kategori',
            title: 'Kategori',
            type: 'string',
            options: {
                list:[
                    {title: 'Kepala Sekolah', value: 'kepala_sekolah'},
                    {title: 'Wakil Kepala Sekolah', value: 'wakil_kepala'},
                    {title: 'Guru', value: 'guru'},
                    {title: 'Staff TU', value: 'staff_tu'},
                    {title: 'Staff Lainnya', value: 'staff_lainnya'}
                ]
            },
            validation: (Rule:any) => Rule.required()
        },
        {
            name: 'mataPelajaran',
            title: 'Mata Pelajaran',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Kosongkan jika bukan guru'
        },
        {
            name: 'pendidikan',
            title: 'Pendidikan Terakhir',
            type: 'string',
        },
        {
            name: 'urutan',
            title: 'Urutan Tampil',
            type: 'number',
            description: 'Nomor urut untuk menampilkan'
        }
    ],
    preview:{
        select: {
            title: 'nama',
            subtitle: 'jabatan',
            media: 'foto'
        }
    }
}