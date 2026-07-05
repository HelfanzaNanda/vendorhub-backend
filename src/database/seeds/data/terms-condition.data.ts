import { TermsConditionItemApprovalMode } from '@modules/master/terms-condition-item/entities/terms-condition-item.entity';

export const TERMS_CONDITION_ITEMS_DATA_SEED = [
    {
        chapter: 'Pasal 1',
        title: 'Definisi',
        content:
            '<b>Dalam Syarat dan Ketentuan ini:</b><br><ul><li>“Perusahaan” adalah badan hukum yang menyediakan layanan.</li><li>“Pengguna” adalah pihak yang menggunakan layanan Perusahaan.</li><li>“Layanan” adalah seluruh produk, sistem, aplikasi, maupun fasilitas yang disediakan Perusahaan.</li><li>“Perjanjian” adalah dokumen ini beserta perubahan yang sah di kemudian hari.</li><li>“Force Majeure” adalah keadaan kahar sebagaimana diatur dalam Pasal 13.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 2',
        title: 'Ruang Lingkup',
        content:
            'Ketentuan ini mengatur <b>hak, kewajiban, serta tanggung jawab hukum</b> antara Perusahaan dan Pengguna dalam penggunaan Layanan, baik secara daring maupun luring, termasuk namun tidak terbatas pada akses sistem, transaksi, dan komunikasi elektronik.',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 3',
        title: 'Efektivitas',
        content:
            'Perjanjian ini berlaku efektif sejak tanggal <b>effectiveAt</b> yang ditetapkan oleh Perusahaan.<br>Segala penggunaan Layanan setelah tanggal tersebut dianggap sebagai <b>persetujuan penuh</b> atas ketentuan ini.',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 4',
        title: 'Pendaftaran dan Validasi',
        content:
            '<ul><li>Pengguna wajib menyampaikan data yang <b>benar, lengkap, dan dapat dipertanggungjawabkan</b>.</li><li>Perusahaan berhak melakukan verifikasi atas data tersebut.</li><li>Perusahaan berhak menolak pendaftaran apabila ditemukan ketidaksesuaian atau indikasi pelanggaran hukum.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 5',
        title: 'Hak Pengguna',
        content:
            'Pengguna berhak:<br><ul><li>Mengakses Layanan sesuai ketentuan yang berlaku.</li><li>Mendapatkan informasi yang jelas mengenai biaya, fitur, dan kebijakan.</li><li>Mengajukan keberatan atau pengaduan melalui mekanisme resmi yang ditetapkan Perusahaan.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 6',
        title: 'Kewajiban Pengguna',
        content:
            'Pengguna berkewajiban:<br><ul><li>Menjaga kerahasiaan akun dan kredensial.</li><li>Tidak menyalahgunakan Layanan untuk tujuan yang bertentangan dengan hukum.</li><li>Mematuhi seluruh ketentuan hukum, peraturan internal, serta kebijakan privasi Perusahaan.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 7',
        title: 'Hak Perusahaan',
        content:
            'Perusahaan berhak:<br><ul><li>Melakukan perubahan, pembatasan, penangguhan, atau penghentian Layanan.</li><li>Mengambil tindakan hukum atas pelanggaran yang dilakukan Pengguna.</li><li>Menetapkan kebijakan tambahan yang dianggap perlu demi kepentingan operasional.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 8',
        title: 'Pembayaran dan Kewajiban Finansial',
        content:
            '<ul><li>Apabila Layanan dikenakan biaya, Pengguna wajib melaksanakan pembayaran sesuai ketentuan.</li><li>Keterlambatan atau kelalaian pembayaran dapat mengakibatkan penghentian akses.</li><li>Perusahaan berhak mengenakan denda atau biaya tambahan atas keterlambatan.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 9',
        title: 'Perubahan Ketentuan',
        content:
            '<ul><li>Perusahaan berhak melakukan perubahan atas Syarat dan Ketentuan ini dengan pemberitahuan terlebih dahulu.</li><li>Versi terbaru akan menggantikan seluruh versi sebelumnya.</li><li>Pengguna dianggap menyetujui perubahan apabila tetap menggunakan Layanan setelah perubahan berlaku.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 10',
        title: 'Batasan Tanggung Jawab',
        content:
            '<ul><li>Perusahaan tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan Layanan di luar kendali wajar Perusahaan.</li><li>Perusahaan tidak bertanggung jawab atas kerugian yang timbul akibat kelalaian Pengguna.</li><li>Tanggung jawab Perusahaan terbatas pada hal-hal yang secara tegas diatur dalam Perjanjian ini.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 11',
        title: 'Penyelesaian Sengketa',
        content:
            '<ul><li>Segala perselisihan akan diselesaikan terlebih dahulu melalui <b>musyawarah mufakat</b>.</li><li>Apabila tidak tercapai, sengketa akan diselesaikan melalui jalur hukum sesuai yurisdiksi yang berlaku.</li><li>Putusan pengadilan yang berkekuatan hukum tetap akan mengikat kedua belah pihak.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 12',
        title: 'Ketentuan Penutup',
        content:
            '<ul><li>Syarat dan Ketentuan ini merupakan <b>perjanjian yang mengikat</b> antara Perusahaan dan Pengguna.</li><li>Hal-hal yang belum diatur dalam Perjanjian ini akan mengikuti peraturan perundang-undangan yang berlaku.</li><li>Perjanjian ini tidak dapat ditafsirkan secara parsial; seluruh pasal merupakan satu kesatuan yang utuh.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 13',
        title: 'Force Majeure',
        content:
            '<ul><li>Force Majeure meliputi kejadian di luar kendali Perusahaan, termasuk namun tidak terbatas pada bencana alam, kebakaran, banjir, perang, huru-hara, pemogokan, gangguan sistem telekomunikasi, dan kebijakan pemerintah.</li><li>Dalam hal terjadi Force Majeure, Perusahaan dibebaskan dari kewajiban untuk sementara waktu hingga keadaan kembali normal.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 14',
        title: 'Kerahasiaan Data',
        content:
            '<ul><li>Perusahaan berkewajiban menjaga kerahasiaan data Pengguna sesuai ketentuan hukum yang berlaku.</li><li>Pengguna menyetujui bahwa data dapat digunakan untuk kepentingan operasional, analisis, dan peningkatan layanan, sepanjang tidak melanggar hukum.</li><li>Perusahaan tidak akan mengungkapkan data kepada pihak ketiga tanpa persetujuan, kecuali diwajibkan oleh hukum.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.AUTO,
    },
    {
        chapter: 'Pasal 15',
        title: 'Pemutusan Kontrak',
        content:
            '<ul><li>Perusahaan berhak memutuskan kontrak secara sepihak apabila Pengguna melanggar ketentuan yang berlaku.</li><li>Pengguna berhak mengakhiri kontrak dengan pemberitahuan tertulis sesuai jangka waktu yang ditentukan.</li><li>Pemutusan kontrak tidak membebaskan Pengguna dari kewajiban finansial yang telah timbul sebelum tanggal pemutusan.</li></ul>',
        approvalMode: TermsConditionItemApprovalMode.REVIEW,
    },
];
