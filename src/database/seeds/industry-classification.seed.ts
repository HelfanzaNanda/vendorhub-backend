import { IndustryClassification } from "@modules/master/industry-classification/entities/industry-classification.entity";
import { DataSource } from "typeorm";

export async function seedIndustryClassification(dataSource: DataSource) {

    const arr = [
        {
          "number": "1111",
          "name": "PERTANIAN JAGUNG",
          "description": "Kelompok ini mencakup usaha pertanian komoditas jagung mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman jagung. Termasuk kegiatan pembibitan dan pembenihan tanaman jagung.",
          
        },
        {
          "number": "1112",
          "name": "PERTANIAN GANDUM",
          "description": "Kelompok ini mencakup usaha pertanian gandum mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman serealia gandum, seperti sorgum\\/cantel, gandum (wheat\\/oats), jelai (barley), gandum hitam (rye), jawawut (millet) dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman gandum.",
          
        },
        {
          "number": "1113",
          "name": "PERTANIAN KEDELAI",
          "description": "Kelompok ini mencakup usaha pertanian kedelai mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman kedelai (kacang palawija). Termasuk kegiatan pembibitan dan pembenihan tanaman kedelai.",
          
        },
        {
          "number": "1114",
          "name": "PERTANIAN KACANG TANAH",
          "description": "Kelompok ini mencakup usaha pertanian kacang tanah mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman kacang tanah (kacang palawija). Termasuk kegiatan pembibitan dan pembenihan tanaman kacang tanah.",
          
        },
        {
          "number": "1115",
          "name": "PERTANIAN KACANG HIJAU",
          "description": "Kelompok ini mencakup usaha pertanian kacang hijau mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman kacang hijau (kacang palawija). Termasuk kegiatan pembibitan dan pembenihan tanaman kacang hijau.",
          
        },
        {
          "number": "1116",
          "name": "PERTANIAN ANEKA KACANG HORTIKULTURA",
          "description": "Kelompok ini mencakup usaha pertanian aneka kacang hortikultura mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman aneka kacang hortikultura, seperti buncis, buncis besar, kacang panjang, kacang merah, gude, kara, kapri, kecipir, cow peas, miju-miju, lupin, kacang polong, pigeon peas dan tanaman aneka kacang lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman aneka kacang hortikultura.",
          
        },
        {
          "number": "1117",
          "name": "PERTANIAN BIJI-BIJIAN PENGHASIL MINYAK MAKAN",
          "description": "Kelompok ini mencakup usaha pertanian biji-bijian penghasil minyak makan mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman biji-bijian penghasil minyak makan, seperti biji wijen, biji bunga matahari dan tanaman biji-bijian penghasil minyak makan lainnya.Termasuk kegiatan pembibitan dan pembenihan tanaman biji-bijian penghasil minyak makan.",
          
        },
        {
          "number": "1118",
          "name": "PERTANIAN BIJI-BIJIAN PENGHASIL BUKAN MINYAK MAKAN",
          "description": "Kelompok ini mencakup usaha pertanian biji-bijian penghasil bukan minyak makan mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman biji-bijian penghasil bukan minyak makan, seperti biji kapas, biji rami, biji mustard, niger seeds, biji jarak pohon dan tanaman biji-bijian penghasil bukan minyak makan lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman biji-bijian penghasil bukan minyak makan.",
          
        },
        {
          "number": "1119",
          "name": "PERTANIAN SEREALIA LAINNYA, ANEKA KACANG DAN BIJI-BIJIAN PENGHASIL MINYAK LAINNYA",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman serealia lainnya bukan padi, jagung dan gandum, tanaman aneka kacang palawija lainnya dan pertanian tanaman lainnya yang belum diklasifikasikan pada kelompok 01111 s.d. 01118. Termasuk kegiatan pembibitan dan pembenihan tanaman serealia dan biji-bijian penghasil minyak lainnya.",
          
        },
        {
          "number": "1121",
          "name": "PERTANIAN PADI HIBRIDA",
          "description": "Kelompok ini mencakup usaha pertanian padi hibrida mulai dari kegiatan pengolahan lahan, penyemaian, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan sampai dengan dihasilkan komoditas gabah kering panen (GKP). Termasuk kegiatan pembibitan dan pembenihan tanaman padi hibrida. Padi hibrida adalah keturunan pertama (F1) yang dihasilkan dari persilangan antara dua galur atau lebih tetua pembentuknya dan\\/atau galur\\/inbrida homozigot. Contohnya: Bernas Super, Bernas Prima, Sembada B3, SL 11 SHS. Turunan dari padi hibrida tidak termasuk sebagai padi hibrida.",
          
        },
        {
          "number": "1122",
          "name": "PERTANIAN PADI INBRIDA",
          "description": "Kelompok ini mencakup usaha pertanian inbrida (bukan hibrida) mulai dari kegiatan pengolahan lahan, penyemaian, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan sampai dengan dihasilkan komoditas gabah kering panen (GKP). Termasuk kegiatan pembibitan dan pembenihan tanaman padi in hibrida. Padi in hibrida adalah padi yang produksi benihnya dilakukan melalui penyerbukan sendiri atau terjadi secara alami. Terdiri dari Padi varietas Unggul Non Hibrida seperti Memberamo, Menkongga, Ciherang, IR-6, Inpari, Inpara, Inpago dan Padi Varietas Lokas yang telah ada dan dibudidayakan secara turun temurun oleh petani.",
          
        },
        {
          "number": "1131",
          "name": "PERTANIAN HORTIKULTURA SAYURAN DAUN",
          "description": "Kelompok ini mencakup usaha pertanian hortikultura dan sayuran daun mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan, dan pasca panen jika menjadi satu kesatuan kegiatan tanaman hortikultura sayuran yang dipanen sekali, seperti petsai\\/sawi, asparagus, kubis\\/kol, kembang kol dan brokoli, selada dan seledri\\/chicory, daun bawang, bayam, kangkung, tumbuhan yang bunganya dimakan sebagai sayur dan sayuran daun dan batang lainnya. Bayam dan kangkung yang dipanen dengan akarnya juga dimasukkan dalam kelompok ini. Termasuk kegiatan pembibitan dan pembenihan tanaman hortikultura sayuran daun.",
          
        },
        {
          "number": "1132",
          "name": "PERTANIAN HORTIKULTURA BUAH",
          "description": "Kelompok ini mencakup usaha pertanian hortikultura buah mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman hortikultura buah, seperti semangka, belewah, melon, timun suri dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman hortikultura buah.",
          
        },
        {
          "number": "1133",
          "name": "PERTANIAN HORTIKULTURA SAYURAN BUAH",
          "description": "Kelompok ini mencakup usaha pertanian hortikultura sayuran buah mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman hortikultura buah yang dipakai sebagai sayuran (labu), seperti mentimun, terung, tomat, belimbing sayur dan labu sayur (siam), waluh\\/labu kuning, gambas\\/oyong dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman hortikultura sayuran buah.",
          
        },
        {
          "number": "1134",
          "name": "PERTANIAN HORTIKULTURA SAYURAN UMBI",
          "description": "Kelompok ini mencakup usaha pertanian hortikultura sayuran umbi mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, pemanenan, dan pasca panen jika menjadi satu kesatuan kegiatan tanaman umbi- umbian hortikultura, seperti kentang, kentang manis, wortel, lobak cina, rebung, bawang putih, bawang bombay atau bawang merah, bawang perai dan sayuran alliaceous lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman hortikultura sayuran umbi.",
          
        },
        {
          "number": "1467",
          "name": "PEMBIBITAN DAN BUDIDAYA BURUNG MERPATI",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan burung merpati, untuk menghasilkan ternak bibit burung merpati dan atau telur tetas dan peternakan yang menyelenggarakan budidaya burung merpati untuk menghasilkan burung merpati potong atau untuk keperluan lainnya.",
          
        },
        {
          "number": "1468",
          "name": "PEMBIBITAN AYAM RAS",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan ayam ras pedaging dan ayam ras petelur untuk menghasilkan ayam bibit, telur tetas, bibit niaga (final stock) day old chick (DOC) dari ayam ras pedaging dan ayam ras petelur.",
          
        },
        {
          "number": "1469",
          "name": "PEMBIBITAN DAN BUDIDAYA TERNAK UNGGAS LAINNYA",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan ternak unggas lainnya, seperti kalkun, angsa, unggas persilangan dan unggas lainnya untuk menghasilkan bibit dan atau telur tetas dan peternakan yang melakukan kegiatan budidaya unggas tersebut untuk menghasilkan, unggas pedaging, unggas petelur dan telur.",
          
        },
        {
          "number": "1491",
          "name": "PEMBIBITAN DAN BUDIDAYA BURUNG UNTA",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan burung unta, untuk menghasilkan ternak bibit burung unta dan atau telur tetas dan peternakan yang menyelenggarakan budidaya burung unta konsumsi untuk menghasilkan burung unta potong, telur dan atau lainnya.",
          
        },
        {
          "number": "1492",
          "name": "PENGUSAHAAN KOKON\\/KEPOMPONG ULAT SUTERA",
          "description": "Kelompok ini mencakup usaha penanaman, pemeliharaan, pemungutan hasil, pengolahan dan pemasaran kokon\\/kepompong ulat sutera.",
          
        },
        {
          "number": "1493",
          "name": "PEMBIBITAN DAN BUDIDAYA LEBAH",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan dan budidaya lebah, termasuk pengusahaan madu.",
          
        },
        {
          "number": "1494",
          "name": "PEMBIBITAN DAN BUDIDAYA RUSA",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan dan budidaya ternak rusa\\/kijang, baik untuk menghasilkan bibit dan daging, kulit dan lainnya.",
          
        },
        {
          "number": "1495",
          "name": "PEMBIBITAN DAN BUDIDAYA KELINCI",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan dan budidaya ternak kelinci, baik untuk menghasilkan bibit dan daging, kulit dan lainnya.",
          
        },
        {
          "number": "1496",
          "name": "PEMBIBITAN DAN BUDIDAYA CACING",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan dan budidaya ternak cacing, baik untuk menghasilkan bibit dan daging, dan lainnya.",
          
        },
        {
          "number": "1497",
          "name": "PEMBIBITAN DAN BUDIDAYA BURUNG WALET",
          "description": "Kelompok ini mencakup usaha pembibitan dan budidaya burung walet untuk menghasilkan burung dan sarang burung walet, termasuk pengusahaan pembersihan, pencucian, pengolahan dan pengemasan sarang burung walet.",
          
        },
        {
          "number": "1499",
          "name": "PEMBIBITAN DAN BUDIDAYA ANEKA TERNAK LAINNYA",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan aneka ternak, seperti marmut, anjing, kucing, kera\\/primata lainnya, ulat, jangkrik dan aneka ternak lainnya, untuk menghasilkan bibit dan peternakan yang menyelenggarakan budidaya aneka ternak untuk menghasilkan daging, kulit dan lainnya.",
          
        },
        {
          "number": "1611",
          "name": "JASA PENGOLAHAN LAHAN",
          "description": "Kelompok ini mencakup usaha pengolahan lahan pertanian tanaman pangan dan perkebunan atas dasar balas jasa (fee) atau kontrak dengan tujuan untuk persiapan penanaman, baik di lahan sawah maupun di lahan kering.",
          
        },
        {
          "number": "1612",
          "name": "JASA PEMUPUKAN, PENANAMAN BIBIT\\/BENIH DAN PENGENDALIAN HAMA DAN GULMA",
          "description": "Kelompok ini mencakup usaha yang bergerak dalam pemupukan lahan pertanian, penanaman bibit\\/benih dan pengendalian hama penyakit dan tanaman pengganggu (gulma) tanaman pangan dan perkebunan atas dasar balas jasa (fee) atau kontrak.",
          
        },
        {
          "number": "1613",
          "name": "JASA PEMANENAN",
          "description": "Kelompok ini mencakup usaha pemanenan tanaman atas dasar balas jasa (fee) atau kontrak.",
          
        },
        {
          "number": "1614",
          "name": "JASA PENYEMPROTAN DAN PENYERBUKAN MELALUI UDARA",
          "description": "Kelompok ini mencakup usaha penyemprotan dan penyerbukan melalui udara dengan pesawat udara khusus berdasarkan keadaan tertentu.",
          
        },
        {
          "number": "1619",
          "name": "JASA PENUNJANG PERTANIAN LAINNYA",
          "description": "Kelompok ini mencakup jasa penunjang pertanian lainnya yang belum termasuk dalam kelompok jasa penunjang pertanian di atas, seperti penyelenggaraan pengairan\\/penyiraman serta penyediaan alat pertanian berikut operatornya, pemeliharaan dan perawatan alat pertanian atas dasar balas jasa (fee) atau kontrak. Penyewaan khusus alat pertanian tanpa operatornya dimasukkan dalam 77305.",
          
        },
        {
          "number": "1621",
          "name": "JASA PELAYANAN KESEHATAN TERNAK",
          "description": "Kelompok ini mencakup usaha yang bergerak dalam bidang pelayanan kesehatan\\/pengobatan ternak atas dasar balas jasa (fee) atau kontrak.",
          
        },
        {
          "number": "1622",
          "name": "JASA PERKAWINAN TERNAK",
          "description": "Kelompok ini mencakup usaha yang bergerak dalam bidang perkawinan ternak atas dasar balas jasa (fee) atau kontrak, seperti inseminasi buatan, transfer embrio, pemeriksaan kebuntingan, pelayanan kuda biak.",
          
        },
        {
          "number": "1623",
          "name": "JASA PENETASAN TELUR",
          "description": "Kelompok ini mencakup usaha yang bergerak dalam bidang penetasan telur atas dasar balas jasa (fee) atau kontrak.",
          
        },
        {
          "number": "1629",
          "name": "JASA PENUNJANG PETERNAKAN LAINNYA",
          "description": "Kelompok ini mencakup usaha yang bergerak dalam jasa penunjang peternakan lainnya atas dasar balas jasa (fee) atau kontrak, seperti pencukuran bulu ternak, pemasangan dan pemberian identitas ternak, pembersihan kandang ternak, termasuk juga usaha pelayanan pencari rumput, pemeliharaan dan perawatan hewan dan penggembalaan ternak. Termasuk juga kegiatan farrier (tukang tapal kuda) dan pengebirian hewan.",
          
        },
        {
          "number": "1630",
          "name": "JASA PASCA PANEN",
          "description": "Kelompok ini mencakup usaha pasca panen meliputi usaha penyiapan hasil panen pertanian untuk dijual, seperti pembersihan, sortasi, pengupasan, pengeringan dengan sinar matahari dan pengepakan dari macam-macam hasil pertanian atas dasar balas jasa (fee) atau kontrak. Termasuk usaha disinfektan hasil panen, pemisahan biji kapas, penyiapan daun tembakau, penyiapan biji cokelat dan pemberian lilin pada buah-buahan.",
          
        },
        {
          "number": "1135",
          "name": "PERTANIAN ANEKA UMBI PALAWIJA",
          "description": "Kelompok ini mencakup usaha pertanian aneka umbi palawija mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, dan juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman aneka umbi palawija, seperti ubi kayu, ubi jalar, talas, ganyong dan irut, gembili dan tanaman palawija, iles-iles, porang dan umbi-umbian palawija lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman aneka umbi palawija.",
          
        },
        {
          "number": "1136",
          "name": "PERTANIAN JAMUR",
          "description": "Kelompok ini mencakup usaha pertanian jamur mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman jamur dan truffle, seperti jamur merang, jamur tiram, jamur shitake, jamur kuping dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman jamur.",
          
        },
        {
          "number": "1137",
          "name": "PERTANIAN BIT GULA DAN TANAMAN PEMANIS BUKAN TEBU",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman bit gula dan tanaman pemanis lainnya bukan tebu, seperti stevia dan sorgum manis. Termasuk kegiatan pembibitan dan pembenihan tanaman bit gula dan tanaman pemanis bukan tebu.",
          
        },
        {
          "number": "1139",
          "name": "PERTANIAN SAYURAN, BUAH DAN ANEKA UMBI LAINNYA",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penanaman, pemeliharaan, juga pemanenan dan pasca panen jika menjadi satu kesatuan kegiatan tanaman sayuran, buah dan aneka umbi lainnya yang dipanen lebih dari sekali; dan pertanian sayuran lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman sayuran lainnya, kecuali bibit tanaman bit.",
          
        },
        {
          "number": "1140",
          "name": "PERKEBUNAN TEBU",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan jika menjadi satu kesatuan kegiatan tanaman tebu. Termasuk kegiatan pembibitan dan pembenihan tebu.",
          
        },
        {
          "number": "1150",
          "name": "PERKEBUNAN TEMBAKAU",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan jika menjadi satu kesatuan kegiatan tanaman tembakau. Termasuk kegiatan pembersihan dan perajangan tembakau yang tidak dapat dipisahkan dari kegiatan perkebunannya. Kegiatan pembibitan dan pembenihan tanaman tembakau juga tercakup dalam kelompok ini.",
          
        },
        {
          "number": "1160",
          "name": "PERTANIAN TANAMAN BERSERAT",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, dan pemanenan jika menjadi satu kesatuan kegiatan tanaman berserat sebagai bahan baku tekstil, seperti kapuk, kapas, rosela, rami, yute, linen, agave, abaca dan kenaf, pertanian sisal dan tanaman bahan baku tekstil lainnya termasuk genus agave dan pertanian tanaman serat lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman berserat.",
          
        },
        {
          "number": "1191",
          "name": "PERTANIAN TANAMAN PAKAN TERNAK",
          "description": "Kelompok ini mencakup bidang usaha produksi hijauan pakan ternak mulai dari kegiatan penyiapan dan pengolahan lahan, penyemaian, penanaman, pemeliharaan, pemanenan dan pengolahan pasca panen. Meliputi rumput pakan ternak dan leguminosa\\/kacang-kacangan tanaman pakan ternak seperti Rumput Gajah, Rumput Raja, Rumput Odot, Rumput Setaria, Alfalfa, Kaliandra, Gamal, Lamtoro, Indigofera Zollingeriana dll.",
          
        },
        {
          "number": "1192",
          "name": "PERBENIHAN TANAMAN PAKAN TERNAK DAN PEMBIBITAN BIT (BUKAN BIT GULA)",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan penyiapan dan pengolahan lahan, penyemaian, penanaman, pemeliharaan, pemanenan dan pengolahan pascapanen, perbenihan tanaman pakan ternak dan pembibitan bit (bukan bit gula). Perbenihan tanaman pakan ternak meliputi rumput pakan ternak dan leguminosa\\/kacang-kacangan tanaman pakan ternak seperti Rumput Gajah, Rumput Raja, Rumput Odot, Rumput Setaria, Alfalfa, Kaliandra, Gamal, Lamtoro, Indigofera Zollingeriana dll.",
          
        },
        {
          "number": "1193",
          "name": "PERTANIAN TANAMAN BUNGA",
          "description": "Kelompok ini mencakup pertanian tanaman bunga, yang produksinya adalah bunga potong dan kuncup bunga. Tanaman bunga pada kelompok ini misalnya anggrek, anyelir, gerbera\\/hebras, gladiol, krisan, mawar, melati, sedap malam dan tanaman bunga lainnya. Termasuk tanaman bunga lainnya yang diambil bunganya. Pertanian tanaman bunga yang hasilnya adalah tanaman bunga hidup masuk ke golongan 013.",
          
        },
        {
          "number": "1194",
          "name": "PERTANIAN PEMBIBITAN TANAMAN BUNGA",
          "description": "Kelompok ini mencakup usaha pertanian pembibitan tanaman bunga.",
          
        },
        {
          "number": "1199",
          "name": "PERTANIAN TANAMAN SEMUSIM LAINNYA YTDL",
          "description": "Kelompok ini mencakup pertanian tanaman semusim lainnya yang belum terklasifikasi di tempat lain dan kegiatan pembibitannya.",
          
        },
        {
          "number": "1210",
          "name": "PERTANIAN BUAH ANGGUR",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan penyiapan atau pelaksanaan, penanaman, pembibitan, pemeliharaan, pemanenan dan pasca panen buah anggur. Termasuk kegiatan pembibitan dan pembenihan tanaman buah anggur.",
          
        },
        {
          "number": "1220",
          "name": "PERTANIAN BUAH-BUAHAN TROPIS DAN SUBTROPIS",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan penyiapan\\/pelaksanaan, penanaman, pembibitan, pemeliharaan, pemanenan dan pasca panen buah-buahan tropis dan subtropis, seperti rambutan, alpukat, durian, duku, pisang dan pisang raja, kurma, buah ara, pepaya, jambu biji, jambu air, lengkeng, nangka, nenas, mangga, manggis, sawo, belimbing, salak, sirsak, buah naga dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman buat tropis dan subtropis.",
          
        },
        {
          "number": "1230",
          "name": "PERTANIAN BUAH JERUK",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan penyiapan\\/pelaksanaan, penanaman, pembibitan, pemeliharaan, pemanenan dan pasca panen buah jeruk besar dan jeruk keprok atau jeruk siam, seperti jeruk bali, jeruk lemon dan limau, jeruk orange, jeruk keprok, jeruk tangerin, jeruk mandarin dan clementine, dan buah jeruk lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman buah jeruk.",
          
        },
        {
          "number": "1240",
          "name": "PERTANIAN BUAH APEL DAN BUAH BATU (POME AND STONE FRUITS)",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan penyiapan\\/pelaksanaan, penanaman, pembibitan, pemeliharaan, pemanenan dan pasca panen buah apel dan buah batu, seperti apel, aprikot, cherry, peach dan nectarine, pear dan quince, plum dan sloe, markisa, kepel, terong Belanda dan buah delima, dan buah batu lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman buah apel dan buah batu.",
          
        },
        {
          "number": "1251",
          "name": "PERTANIAN BUAH BERI",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan penyiapan atau pelaksanaan, penanaman, pembibitan, pemeliharaan, pemanenan dan pasca panen buah beri, seperti blueberry, gooseberry, kiwi, raspberry, strawberry dan beri lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman buah beri.",
          
        },
        {
          "number": "1252",
          "name": "PERTANIAN BUAH BIJI KACANG-KACANGAN",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, dan pemanenan tanaman buah biji kacang-kacangan yang dapat dimakan, seperti almond, kacang mede, chestnut, kenari, walnut dan kacang- kacangan yang lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman buah biji kacang-kacangan.",
          
        },
        {
          "number": "1253",
          "name": "PERTANIAN SAYURAN TAHUNAN",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan tanaman sayuran tahunan, seperti kluwih atau timbul, sukun, nangka sayur, petai, jengkol, melinjo dan sejenisnya. Kegiatan pembibitan dan pembenihan tanaman sayuran tahunan.",
          
        },
        {
          "number": "1259",
          "name": "PERTANIAN BUAH SEMAK LAINNYA",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan tanaman buah semak lainnya, termasuk locust beans. Termasuk kegiatan pembibitan dan pembenihan tanaman buah semak lainnya.",
          
        },
        {
          "number": "1261",
          "name": "PERKEBUNAN BUAH KELAPA",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan buah kelapa. Termasuk kegiatan pembibitan dan pembenihan tanaman buah kelapa.",
          
        },
        {
          "number": "1262",
          "name": "PERKEBUNAN BUAH KELAPA SAWIT",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan buah kelapa sawit. Termasuk kegiatan pembibitan dan pembenihan tanaman buah kelapa sawit.",
          
        },
        {
          "number": "1269",
          "name": "PERKEBUNAN BUAH OLEAGINOUS LAINNYA",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan tanaman buah oleaginous lain, seperti buah zaitun dan lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman buah oleoginous lainnya.",
          
        },
        {
          "number": "1270",
          "name": "PERTANIAN TANAMAN UNTUK BAHAN MINUMAN",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan tanaman untuk bahan minuman, seperti tanaman kopi, teh, mate dan kakao. Termasuk kegiatan pembibitan dan pembenihan tanaman untuk bahan minuman.",
          
        },
        {
          "number": "1281",
          "name": "PERKEBUNAN LADA",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan lada atau merica (piper spp). Termasuk kegiatan pembibitan dan pembenihan tanaman lada.",
          
        },
        {
          "number": "1282",
          "name": "PERKEBUNAN CENGKEH",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan cengkeh. Termasuk kegiatan pembibitan dan pembenihan tanaman cengkeh.",
          
        },
        {
          "number": "1283",
          "name": "PERTANIAN CABAI",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, pemanenan dan pasca panen sayuran cabai (capsicum spp), seperti cabai besar, cabai rawit dan paprika. Termasuk kegiatan pembibitan dan pembenihan tanaman cabai.",
          
        },
        {
          "number": "1284",
          "name": "PERKEBUNAN TANAMAN AROMATIK\\/PENYEGAR",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan tanaman perkebunan minyak atsiri, seperti sereh wangi, nilam, menthol, kenanga, ilang-ilang, gandapura, lawang. Termasuk kegiatan pembibitan dan pembenihan tanaman aromatik\\/penyegar.",
          
        },
        {
          "number": "1285",
          "name": "PERTANIAN TANAMAN OBAT ATAU BIOFARMAKA RIMPANG",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, dan pemanenan tanaman obat atau biofarmaka rimpang (termasuk pula tanaman bahan insektisida dan fungisida dan yang sejenis), seperti jahe, kunyit, temulawak, temugiring, temuireng, temukunci, kencur, lengkuas, lempuyang, dlingo dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman obat atau biofarmaka rimpang.",
          
        },
        {
          "number": "1286",
          "name": "PERTANIAN TANAMAN OBAT ATAU BIOFARMAKA NON RIMPANG",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, dan pemanenan tanaman obat atau biofarmaka non rimpang (termasuk pula tanaman bahan insektisida dan fungisida dan yang sejenis), seperti kina, adas, kapulaga, orang-aring, iles-iles, pinang, gambir, lidah buaya, kejibeling, sambiloto, kumis kucing, mengkudu atau pace, mahkota dewa dan sejenisnya. Termasuk kegiatan pembibitan dan pembenihan tanaman obat atau biofarmaka non rimpang.",
          
        },
        {
          "number": "1287",
          "name": "PERTANIAN TANAMAN NARKOTIKA DAN TANAMAN OBAT TERLARANG",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, dan pemanenan tanaman narkotika dan tanaman obat terlarang.",
          
        },
        {
          "number": "1289",
          "name": "PERTANIAN TANAMAN REMPAH-REMPAH, AROMATIK\\/PENYEGAR, DAN OBAT LAINNYA",
          "description": "Kelompok ini mencakup usaha pertanian mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan, dan pemanenan tanaman rempah lainnya, seperti kemiri, panili, kayu manis dan pala. Termasuk kegiatan pembibitan dan pembenihannya.",
          
        },
        {
          "number": "1291",
          "name": "PERKEBUNAN KARET DAN TANAMAN PENGHASIL GETAH LAINNYA",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan tanaman karet dan tanaman penghasil getah lainnya, seperti getah perca dan kemenyan. Termasuk pengolahan hasil tanaman karet yang tidak dapat dipisahkan dari kegiatan perkebunan. Termasuk kegiatan pembibitan dan pembenihan tanaman karet dan tanaman penghasil getah lainnya.",
          
        },
        {
          "number": "1299",
          "name": "PERTANIAN CEMARA DAN TANAMAN TAHUNAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perkebunan mulai dari kegiatan pengolahan lahan, penyemaian, pembibitan, penanaman, pemeliharaan dan pemanenan pohon cemara, tanaman jarak pagar dan tanaman tahunan lainnya. Termasuk kegiatan pembibitan dan pembenihan tanaman cemara dan tanaman tahunan lainnya.",
          
        },
        {
          "number": "1301",
          "name": "PERTANIAN TANAMAN HIAS",
          "description": "Kelompok ini mencakup pertanian atau budidaya tanaman hias daun dan tanaman hias bunga hidup, seperti bonsai, suplir, kuping gajah, heliconia (pisang-pisangan), dracaena, phylodendrom, monstera, cordyline, anthurium daun, pakis, aglonema, difenbacia, sansifera (lidah mertua), caladium (keladi), palem dan tanaman hias bunga, seperti anggrek, mawar, adenium (kaboja jepang, anthurium bunga, euphorbia, ixora (soka) dan tanaman bunga lainnya. Termasuk penanaman tumbuhan untuk tujuan ornamen dan tanah berumput untuk transplantasi.",
          
        },
        {
          "number": "1302",
          "name": "PERTANIAN PENGEMBANGBIAKAN TANAMAN",
          "description": "Kelompok ini mencakup produksi semua bibit tanaman secara vegetatif termasuk batang stek, potongan dan pembibitan untuk kelangsungan pengembangbiakan tanaman atau membuat batang okulasi tanaman pada keturunannya terpilih yang diokulasi yang pada akhirnya ditanam untuk menghasilkan tanaman. Termasuk kegiatan penanaman tumbuhan untuk ditanam kembali, penanaman tumbuhan hidup untuk umbi-umbian, akar- akaran; pemotongan, stek dan cangkokan; spawn jamur dan kebun bibit tanaman, kecuali kebun bibit tanaman hutan.",
          
        },
        {
          "number": "1411",
          "name": "PEMBIBITAN DAN BUDIDAYA SAPI POTONG",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan sapi potong, untuk menghasilkan ternak bibit sapi potong, semen dan embrio, dan kegiatan budidaya sapi potong berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan penggemukan untuk menghasilkan calon sapi siap potong.",
          
        },
        {
          "number": "1412",
          "name": "PEMBIBITAN DAN BUDIDAYA SAPI PERAH",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan sapi perah untuk menghasilkan ternak bibit sapi perah, semen dan embrio dan usaha budidaya sapi perah berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan untuk menghasilkan susu dan penggemukan.",
          
        },
        {
          "number": "1413",
          "name": "PEMBIBITAN DAN BUDIDAYA KERBAU POTONG",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan kerbau potong untuk menghasilkan ternak bibit kerbau potong, semen dan embrio dan usaha budidaya kerbau potong berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan penggemukan untuk menghasilkan calon kerbau siap potong.",
          
        },
        {
          "number": "1414",
          "name": "PEMBIBITAN DAN BUDIDAYA KERBAU PERAH",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan pembibitan kerbau perah untuk menghasilkan ternak bibit kerbau perah, semen dan embrio dan usaha budidaya kerbau perah yang menyelenggarakan pengembangbiakan untuk menghasilkan anak atau calon indukan dan untuk menghasilkan susu.",
          
        },
        {
          "number": "1420",
          "name": "PETERNAKAN KUDA DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan kuda dan sejenisnya, untuk menghasilkan ternak bibit kuda dan sejenisnya, semen dan embrio dan usaha budidaya kuda yang melakukan kegiatan pengembangbiakan untuk menghasilkan kuda potong, kuda perah, kuda pacu, kuda tunggang, kuda tarik, kuda kavaleri, kuda polo, dan kuda kesayangan, bagal, hinni dan sejenisnyaKelompok ini mencakup :-Produksi Susu Kuda dan Sejenisnya",
          
        },
        {
          "number": "1430",
          "name": "PETERNAKAN UNTA DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan unta dan sejenisnya untuk menghasilkan ternak bibit unta dan sejenisnya, semen dan embrio dan melakukan kegiatan budidaya unta berupa pengembangbiakan untuk menghasilkan unta potong, unta perah dan sejenisnya seperti llama, alpacas, vicunas dan guanacos.Kelompok ini mencakup :- Produksi susu unta dan sejenisnya",
          
        },
        {
          "number": "1441",
          "name": "PEMBIBITAN DAN BUDIDAYA DOMBA POTONG",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan domba potong untuk menghasilkan ternak bibit domba potong, semen dan embrio dan kegiatan budidaya domba potong berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan penggemukan untuk menghasilkan calon domba siap potong.",
          
        },
        {
          "number": "1442",
          "name": "PEMBIBITAN DAN BUDIDAYA KAMBING POTONG",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan kambing potong untuk menghasilkan ternak bibit kambing potong, semen dan embrio dan kegiatan budidaya kambing potong berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan penggemukan untuk menghasilkan calon kambing siap potong.",
          
        },
        {
          "number": "1443",
          "name": "PEMBIBITAN DAN BUDIDAYA KAMBING PERAH",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan kambing perah, untuk menghasilkan ternak bibit kambing perah, semen dan embrio; dan kegiatan budidaya kambing perah berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan untuk menghasilkan susu. (sama dengan sapi perah)",
          
        },
        {
          "number": "1444",
          "name": "PEMBIBITAN DAN BUDIDAYA DOMBA PERAH",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan domba perah untuk menghasilkan ternak bibit domba perah, semen dan embrio; dan kegiatan budidaya domba perah berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan untuk menghasilkan susu.",
          
        },
        {
          "number": "1445",
          "name": "PRODUKSI BULU DOMBA MENTAH\\/RAW WOOL",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan produksi bulu domba (wool) mentah.",
          
        },
        {
          "number": "1450",
          "name": "PETERNAKAN BABI",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan babi, untuk menghasilkan ternak bibit babi, semen dan embrio dan usaha budidaya babi berupa pengembangbiakan untuk menghasilkan anak atau calon indukan dan penggemukan untuk menghasilkan calon babi siap potong.",
          
        },
        {
          "number": "1461",
          "name": "BUDIDAYA AYAM RAS PEDAGING",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan budidaya ayam ras untuk menghasilkan ayam pedaging.",
          
        },
        {
          "number": "1462",
          "name": "BUDIDAYA AYAM RAS PETELUR",
          "description": "Kelompok ini mencakup usaha peternakan yang menyelenggarakan budidaya ayam ras untuk menghasilkan telur konsumsi dan lainnya.",
          
        },
        {
          "number": "1463",
          "name": "PEMBIBITAN AYAM LOKAL DAN PERSILANGANNYA",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan ayam lokal dan persilangannya,untuk menghasilkan ternak bibit ayam dan telur tetas ayam lokal petelur dan pedaging,dan persilangannya.",
          
        },
        {
          "number": "1464",
          "name": "BUDIDAYA AYAM LOKAL DAN PERSILANGANNYA",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan budidaya ayam lokal dan persilangannya, untuk menghasilkan pullet, ayam lokal pedaging siap potong dan telur konsumsi.",
          
        },
        {
          "number": "1465",
          "name": "PEMBIBITAN DAN BUDIDAYA ITIK DAN\\/ATAU BEBEK",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan itik dan\\/atau bebek, untuk menghasilkan telur tetas, ternak bibit itik dan\\/atau bebek dan peternakan yang menyelenggarakan budidaya itik dan\\/atau bebek untuk menghasilkan itik dan\\/atau bebek pedaging, itik dan\\/atau bebek petelur, telur konsumsi dan lainnya.",
          
        },
        {
          "number": "1466",
          "name": "PEMBIBITAN DAN BUDIDAYA BURUNG PUYUH",
          "description": "Kelompok ini mencakup usaha peternakan yang melakukan kegiatan pembibitan burung puyuh, untuk menghasilkan ternak bibit burung puyuh dan atau telur tetas dan peternakan yang menyelenggarakan budidaya burung puyuh untuk menghasilkan burung puyuh potong, burung puyuh petelur atau telur konsumsi.",
          
        },
        {
          "number": "3117",
          "name": "PENANGKAPAN COELENTERATA DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan ikan dengan alat penangkapan ikan anemon laut, karang laut, terumbu karang, polip, ubur-ubur, dan lainnya dengan alat penangkapan ikan jaring lingkar (surrounding nets), termasuk pukat cincin pelagis besar dengan satu kapal; jaring angkat (lift nets), termasuk bagan tancap (shore-operated stationary lift net); penggaruk (dredges) termasuk penggaruk tanpa kapal (hand dredge); alat yang ditebarkan (falling gears), termasuk jala tebar; jaring insang (gillnets and endtangling nets), termasuk jaring insang berpancang; perangkap (traps), termasuk pukat labuh; alat penangkapan ikan lainnya (miscellaneous gears), termasuk ladung, seser dll di laut, muara sungai, laguna, dan tempat lain yang dipengaruhi pasang surut.",
          
        },
        {
          "number": "3118",
          "name": "PENANGKAPAN IKAN HIAS LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan\\/pengambilan ikan hias laut, seperti kuda laut (hippocampus), angel fish, clown fish, lion fish, ikan sekar taji layar lurik, ikan buntel pasir, ikan kalong, dan ikan hias lainnya di laut, muara sungai, laguna, dan tempat lain yang dipengaruhi pasang surut dengan alat penangkapan ikan bubu; alat penangkapan ikan lainnya (miscellaneous gears), termasuk seser dan panah; penggaruk (dredges), baik penggaruk berkapal (towed dredge) atau penggaruk tanpa kapal (hand dredge).",
          
        },
        {
          "number": "3119",
          "name": "PENANGKAPAN BIOTA AIR LAINNYA DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan dan pengumpulan biota laut lainnya seperti cacing laut, siput laut di laut, muara sungai, laguna, dan tempat lain yang dipengaruhi pasang surut dengan alat tangkap penggaruk (dredges), baik penggaruk berkapal (towed dredge) atau penggaruk tanpa kapal (hand dredge).",
          
        },
        {
          "number": "3121",
          "name": "PENANGKAPAN PISCES\\/IKAN BERSIRIP DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan pisces\\/ikan bersirip air tawar dengan alat penangkapan ikan: alat yang dijatuhkan atau ditebarkan (falling gears) yang meliputi jala jatuh berkapal (cast net) dan jala tebar (falling gear not specified), menangkap jenis ikan betok, sepat, bilih, depik, genggehek, kancera, kendia, lalang, mas, lukas, repang, lampan, tawes,seren, tontong tebu, tambakan, tempe, sumpit, dll; jaring angkat (lift nets) termasuk anco, menangkap jenis ikan betok, sepat rawa, berukung, depik, jelawat, kendia, lalang, lukas, parang, teri, lampan, seren, tontong tebu, tambakan, tempe, bentilak, lais, sumpit, dll; alat penangkapan ikan lainnya (miscellaneous gears), termasuk seser, menangkap jenis ikan betok, sepat siam, lalang, teri, betutu, jenis bilih, dll; pancing (hooks and lines), menangkap jenis ikan gurame, betok, sidat, baung, keting, sepat, gabus, toman, lele, berukung, hampal, lalawak, mas, nilem, parang, teri, semah, tawes, betutu, silih, belida, siluk\\/arwana, patin, tempe, bentilak, lais, lempuk, sumpit, dll5. perangkap (traps), termasuk bubu (pot), sero, menangkap jenis ikan sidat, gabus, mujair, nila, jelawat, bentilak, lais, ikan bersirip, dll; Jaring Insang (gillnets and entangling nets), menangkap jenis ikan baung, keting, sepat siam, gabus, mujair, nila, berukung, beunteur, bilih, depik, genggehek, hampal, jelawat, kendia, koan, lalawak, lukas, mas, nilem, parang, repang, lampan, semah, seren, tawes, totong tebu, betutu, silih, patin, tempe, lempuk, sumpit, dlldi perairan darat, seperti di danau, sungai, waduk, rawa dan genangan air lainnya.",
          
        },
        {
          "number": "3122",
          "name": "PENANGKAPAN CRUSTACEA DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan crustacea air tawar, seperti udang grago (Athya spp.), udang galah (Macrobrachium rosenbergii), udang tawar (Palaemon spp), dll dengan alat penangkapan ikan: alat yang di jatuhkan atau ditebarkan (falling gears), meliputi jala jatuh berkapal (cast net) dan jala tebar (falling gear not specified); perangkap (traps), termasuk bubu, jermal, pengerih; alat penangkapan ikan lainnya (miscleeaneous gears) termasuk seser, dll; di perairan darat, seperti di danau, sungai, waduk, rawa dan genangan air lainnya.",
          
        },
        {
          "number": "3123",
          "name": "PENANGKAPAN MOLLUSCA DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan mollusca air tawar seperti remis (Meretrix spp.), siput (Philalanka sp) dll dengan alat penangkapan ikan penggaruk (dredges) di perairan darat, seperti di danau, sungai, waduk, rawa dan genangan air lainnya.",
          
        },
        {
          "number": "3124",
          "name": "PENANGKAPAN\\/PENGAMBILAN TUMBUHAN AIR DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan\\/pengambilan semua jenis tumbuhan air, seperti ganggang, eceng gondok, lumut, dan tumbuhan hias di perairan darat seperti di danau, sungai, waduk, rawa, dan genangan air lainnya dengan alat penangkapana ikan penggaruk (dredges).",
          
        },
        {
          "number": "3125",
          "name": "PENANGKAPAN\\/PENGAMBILAN INDUK\\/BENIH IKAN DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan induk\\/benih ikan sidat, arwana, baung dengan alat penangkapan ikan : pancing (hooks and lines) termasuk pancing berjoran; perangkap (traps) termasuk bubu (pot); jaring angkat (lift nets) termasuk anco (portable lift net), dan; alat penangkapan ikan lainnya (miscellaneous gears) termasuk seser: di perairan darat seperti di danau, sungai, waduk, rawa, dan genangan air lainnya.",
          
        },
        {
          "number": "3126",
          "name": "PENANGKAPAN IKAN HIAS DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan ikan hias di perairan darat seperti di danau, sungai, waduk, rawa, dan genangan air lainnya, seperti ikan pelangi dan botia dengan alat penangkapan ikan lainnya (miscellaneous gears) termasuk seser, perangkat (traps) termasuk bubu (pot).",
          
        },
        {
          "number": "3129",
          "name": "PENANGKAPAN BIOTA AIR LAINNYA DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan\\/ pengambilan hewan atau biota air tawar seperti katak, bulus, labi-labi, belut, dan lainnya di perairan darat seperti di danau, sungai, waduk, rawa, dan genangan air lainnya dengan alat penangkapan ikan : perangkap (traps) termasuk bubu (pot); penggaruk (dredges); dan alat penangkapan ikan lainnya (miscellaneous gears) termasuk seser.",
          
        },
        {
          "number": "3131",
          "name": "JASA SARANA PRODUKSI PENANGKAPAN IKAN DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha penyiapan sarana penangkapan ikan dan biota laut yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa penyediaan alat tangkap, jasa penyediaan armada penangkapan, jasa rumpon, jasa perbengkelan, jasa perbaikan alat tangkap, slipway\\/docking, dan lainnya.",
          
        },
        {
          "number": "3132",
          "name": "JASA PRODUKSI PENANGKAPAN IKAN DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha produksi penangkapan ikan dan biota laut yang dilakukan atas dasar balas jasa (fee) atau kontrak seperti jasa penyediaan logistik kapal, dan lainnya.",
          
        },
        {
          "number": "3133",
          "name": "JASA PASCA PANEN PENANGKAPAN IKAN DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha pasca panen penangkapan ikan dan biota laut yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa persiapan lelang, jasa sortasi dan gradasi, jasa uji mutu dan sebagainya.",
          
        },
        {
          "number": "3141",
          "name": "JASA SARANA PRODUKSI PENANGKAPAN IKAN DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha penyiapan sarana penangkapan ikan air tawar di perairan darat yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pengolahan lahan, alat tangkap, jasa penyediaan logistik kapal, jasa perbengkelan, jasa perbaikan alat tangkap, dan sebagainya.",
          
        },
        {
          "number": "3142",
          "name": "JASA PRODUKSI PENANGKAPAN IKAN DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha produksi penangkapan ikan air tawar di perairan darat yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa perubahan benih, jasa penebaran benih, jasa pengendalian jasad pengganggu, jasa pemantauan dan sebagainya.",
          
        },
        {
          "number": "3143",
          "name": "JASA PASCA PANEN PENANGKAPAN IKAN DI PERAIRAN DARAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha pasca panen penangkapan ikan air tawar di perairan darat yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pemanenan, jasa persiapan lelang, jasa sortasi dan gradasi, jasa uji mutu, jasa pengeringan, jasa pemberian es, jasa pengepakan dan penyimpanan dan sebagainya.",
          
        },
        {
          "number": "3151",
          "name": "PENANGKAPAN\\/PENGAMBILAN IKAN BERSIRIP (PISCES) YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan jenis ikan taksa ikan bersirip (Pisces) yang dilindungi dan\\/atau Appendiks CITES sesuai ketentuan perlindungannya, yang hidup di perairan laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan komersial, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria, pertukaran dan pemeliharaan untuk kesenangan. Contoh ikan bersirip yang termasuk kelompok ini: Ikan Napoleon, Ikan Capungan Banggai, Ikan Hiu Lanjaman, Ikan Hiu Martil, Ikan Pari Mobula, dll.Kelompok ini tidak mencakup penangkapan untuk tujuan perdagangan jenis ikan bersirip yang dilindungi penuh, dilarang peredarannya berdasarkan regulasi nasional dan\\/atau tercantum dalam daftar Appendiks I CITES, seperti Ikan Arwana Merah dan Ikan Pari Gergaji.",
          
        },
        {
          "number": "3152",
          "name": "PENANGKAPAN\\/PENGAMBILAN CRUSTACEA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan jenis ikan taksa Crustacea yang dilindungi dan\\/atau Appendiks CITES sesuai ketentuan perlindungannya, yang hidup di perairan laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan komersial, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria, pertukaran dan pemeliharaan untuk kesenangan.Kelompok ini tidak mencakup penangkapan jenis ikan taksa CRUSTACEA yang dilindungi penuh, dilarang peredarannya berdasarkan regulasi nasional dan\\/atau tercantum dalam daftar Appendiks I CITES, seperti Tachypleus gigas, Tachypleus tridentatus dan Carcinoscorpius rotundicauda.",
          
        },
        {
          "number": "3153",
          "name": "PENANGKAPAN\\/PENGAMBILAN MOLLUSCA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan jenis ikan taksa Mollusca yang dilindungi dan\\/atau Appendiks CITES sesuai ketentuan perlindungannya, yang hidup di perairan laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan komersial, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria, pertukaran dan pemeliharaan untuk kesenangan. Contoh Mollusca yang masuk dalam kelompok ini: Tridacna spp., (Kima) dan Strombus gigas (Keong Ratu).Kelompok ini tidak mencakup penangkapan untuk tujuan perdagangan jenis ikan taksa Mollusca yang dilindungi penuh, dilarang peredarannya berdasarkan regulasi nasional dan\\/atau tercantum dalam daftar Appendiks I CITES, seperti: Nautilus spp., Hippopus hippopus, Hippopus porcellanus, Cassis cornuta dan Charonia tritonis.",
          
        },
        {
          "number": "3154",
          "name": "PENANGKAPAN\\/PENGAMBILAN COELENTERATA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pemanfaatan yang mengambil Coelenterata yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Daftar Coelenterata yang masuk dalam kelompok ini dapat mengalami perubahan sesuai dengan perubahan regulasi dan\\/atau keputusan Konvensi CITES.Kelompok ini tidak mencakup pengambilan jenis Coelenterata yang dilindungi penuh berdasarkan regulasi nasional, termasuk dalam daftar Appendiks I CITES dan\\/atau dilarang penangkapan\\/ pengambilannya berdasarkan kebijakan Pemerintah. Contoh: karang keras Ordo Scleractinia.",
          
        },
        {
          "number": "3155",
          "name": "PENANGKAPAN\\/PENGAMBILAN ECHINODERMATA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pemanfaatan yang mengambil echinodermata yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Echinodermata yang masuk dalam kelompok ini: Holothoria fuscogilva, Holothuria nobilis, dan Holothuria whitmaei.Kelompok ini tidak mencakup pengambilan jenis Echinodermata yang dilindungi penuh berdasarkan regulasi nasional, termasuk dalam daftar Appendiks I CITES dan\\/atau dilarang penangkapan\\/pengambilannya berdasarkan kebijakan Pemerintah.",
          
        },
        {
          "number": "3156",
          "name": "PENANGKAPAN\\/PENGAMBILAN AMPHIBIA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pemanfaatan yang mengambil Amphibia yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Amphibia yang masuk dalam kelompok ini: Amyda cartiliginea (Labi-Labi) dan Orlitia borneensis (Kura-Kura Sungai Kalimantan).Kelompok ini tidak mencakup pengambilan jenis Amphibia yang dilindungi penuh berdasarkan regulasi nasional, termasuk dalam daftar Appendiks I CITES dan\\/atau dilarang penangkapan\\/pengambilannya berdasarkan kebijakan Pemerintah.",
          
        },
        {
          "number": "3157",
          "name": "PENANGKAPAN\\/PENGAMBILAN REPTILIA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pemanfaatan yang mengambil reptilia yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran.Kelompok ini tidak mencakup pengambilan jenis reptilia yang dilindungi penuh berdasarkan regulasi nasional, termasuk dalam daftar Appendiks I CITES dan\\/atau dilarang penangkapan\\/pengambilannya berdasarkan kebijakan Pemerintah, seperti: Penyu.",
          
        },
        {
          "number": "3158",
          "name": "PENANGKAPAN\\/PENGAMBILAN MAMALIA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pemanfaatan yang mengambil mamalia yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran.Kelompok ini tidak mencakup pengambilan jenis mamalia yang dilindungi penuh berdasarkan regulasi nasional, termasuk dalam daftar Appendiks I CITES dan\\/atau dilarang penangkapan\\/pengambilannya berdasarkan kebijakan pemerintah seperti: paus, lumba-lumba, dan dugong.",
          
        },
        {
          "number": "3159",
          "name": "PENANGKAPAN\\/PENGAMBILAN ALGAE DAN BIOTA PERAIRAN LAINNYA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pemanfaatan yang mengambil Algae dan biota perairan lainnya yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran.Kelompok ini tidak mencakup pengambilan jenis Algae danbiota perairan lainnya yang dilindungi penuh berdasarkan regulasi nasional, termasuk dalam daftar Appendiks I CITES dan\\/atau dilarang penangkapan\\/pengambilannya berdasarkan kebijakan Pemerintah.",
          
        },
        {
          "number": "3211",
          "name": "PEMBESARAN PISCES\\/ IKAN BERSIRIP LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan pemeliharaan dan pembesaran serta pemanenan pisces\\/ikan bersirip di laut, muara sungai, laguna, tempat lain yang dipengaruhi pasang surut dan fasilitas buatan lainnya, seperti ikan kerapu, kakap putih, cobia, bawal bintang, ikan bubara. Tidak termasuk kegiatan budidaya ikan hias air laut.",
          
        },
        {
          "number": "3212",
          "name": "PEMBENIHAN IKAN LAUT",
          "description": "Kelompok ini mencakup usaha pembenihan (produksi induk, telur, larva sampai dengan benih siap tebar) ikan bersirip, mollusca, crustacea, echinodermata dan biota air laut lainnya dengan media air laut, seperti benih ikan kerapu, benih kakap putih, benih bawal bintang, benih lobster, benih abalone, benih kerang mutiara, benih kerang darah, benih teripang, dan bibit rumput laut (mencakup semua jenis rumput laut). Termasuk pembibitan algae untuk menghasilkan bioenergi dan non-pangan lainnya. Tidak termasuk kegiatan pembenihan ikan hias air laut.",
          
        },
        {
          "number": "3213",
          "name": "BUDIDAYA IKAN HIAS AIR LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembenihan, pemeliharaan, dan pembesaran serta pemanenan ikan hias air laut dengan menggunakan lahan perairan dan fasilitas buatan lainnya, seperti kuda laut, clownfish, cardinal fish, angel piyama, blue devil dan lainnya.",
          
        },
        {
          "number": "3214",
          "name": "BUDIDAYA KARANG (CORAL)",
          "description": "Kelompok ini mencakup usaha atau kegiatan budidaya\\/pemeliharaan dan pembesaran serta pemanenan karang (coral) dan pemanfaatannya, seperti pembesaran ornamental coral, pembesaran sponge, dan pembesaran karang (soft coral maupun sel). Termasuk juga kegiatan transplantasinya.",
          
        },
        {
          "number": "3215",
          "name": "PEMBESARAN MOLLUSCA LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan pemeliharaan dan pembesaran serta pemanenan mollusca di laut, muara sungai, laguna, tempat lain yang dipengaruhi pasang surut dan fasilitas buatan lainnya, seperti kerang darah, kerang hijau, kerang mutiara, dan abalone.",
          
        },
        {
          "number": "3216",
          "name": "PEMBESARAN CRUSTACEA LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan pemeliharaan dan pembesaran serta pemanenan crustacea di laut, muara sungai, laguna, tempat lain yang dipengaruhi pasang surut dan fasilitas buatan lainnya, seperti lobster, udang barong",
          
        },
        {
          "number": "3217",
          "name": "PEMBESARAN TUMBUHAN AIR LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan pemeliharaan dan pembesaran serta pemanenan tumbuhan laut di laut, muara sungai, laguna, tempat lain yang dipengaruhi pasang surut dan fasilitas buatan lainnya, seperti rumput laut (makro algae penghasil karaginan, agar dan alginat). Termasuk pembesaran algae untuk menghasilkan bioenergi dan non-pangan lainnya.",
          
        },
        {
          "number": "3219",
          "name": "BUDIDAYA BIOTA AIR LAUT LAINNYA",
          "description": "Kelompok ini mencakup usaha atau kegiatan budidaya biota air laut lainnya di laut, muara sungai, laguna, tempat lain yang dipengaruhi pasang surut dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3221",
          "name": "PEMBESARAN IKAN AIR TAWAR DI KOLAM",
          "description": "Kelompok ini mencakup usaha atau kegiatan pemeliharaan dan pembesaran serta pemanenan ikan bersirip, mollusca, crustacea, katak dan biota air tawar lainnya seperti buaya, labi-labi, kura-kura, sidat, patin, ikan mas, nila, gurame, lele, lobster air tawar, dan udang galah di kolam tanah\\/kolam semen\\/kolam terpal. Termasuk pembesaran ikan tawar di bak, tong atau drum.",
          
        },
        {
          "number": "3222",
          "name": "PEMBESARAN IKAN AIR TAWAR DI KARAMBA JARING APUNG",
          "description": "Kelompok ini mencakup usaha pembesaran ikan bersirip, mollusca, crustacea, dan biota air tawar lainnya di karamba jaring apung dengan menggunakan lahan, perairan dan fasilitas buatan lainnya. Contohnya nila, patin, ikan mas, bandeng, dan lainnya.",
          
        },
        {
          "number": "3223",
          "name": "PEMBESARAN IKAN AIR TAWAR DI KARAMBA",
          "description": "Kelompok ini mencakup usaha pembesaran ikan bersirip, crustacea, mollusca, dan pembesaran biota air tawar lainnya di karamba dengan menggunakan lahan, perairan dan fasilitas buatanlainnya. Contohnya nila, patin, ikan mas.",
          
        },
        {
          "number": "3224",
          "name": "PEMBESARAN IKAN AIR TAWAR DI SAWAH",
          "description": "Kelompok ini mencakup usaha pembesaran ikan bersirip , crustacea, mollusca, dan biota air tawar lainnya di sawah. Contohnya udang galah, nila, ikan mas, lele.",
          
        },
        {
          "number": "3225",
          "name": "BUDIDAYA IKAN HIAS AIR TAWAR",
          "description": "Kelompok ini mencakup usaha pembenihan, pemeliharaan, pembesaran dan pemanenan ikan hias air tawar dengan menggunakan lahan, perairan dan fasilitas buatan lainnya seperti ikan diskus, botia, mas koki, mas koi, arwana, black ghost, cupang, silver dollar, palmas, rainbow, tetra, diamond tetra, barnabus fish dan manfish. Termasuk juga budidaya tanaman hias air tawar, seperti cabomba, egeria densa, cryptocoryne longicauda, anubias.",
          
        },
        {
          "number": "3226",
          "name": "PEMBENIHAN IKAN AIR TAWAR",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembenihan (produksi induk, telur, larva sampai dengan benih siap tebar), ikan bersirip, mollusca, crustacea dan biota air tawar lainnya di air tawar. Contohnya patin, ikan mas, lele, gurame, lobster air tawar, nila, katak, dan buaya.",
          
        },
        {
          "number": "3227",
          "name": "PEMBESARAN IKAN AIR TAWAR DI KARAMBA JARING TANCAP",
          "description": "Kelompok ini mencakup usaha pembesaran ikan bersirip, mollusca, crustacea, dan biota air tawar lainnya di karamba jaring tancap dengan menggunakan lahan, perairan dan fasilitas buatan lainnya. Contohnya nila, patin, ikan mas, bandeng, dan lainnya.",
          
        },
        {
          "number": "3229",
          "name": "BUDIDAYA IKAN AIR TAWAR DI MEDIA LAINNYA",
          "description": "Kelompok ini mencakup usaha atau kegiatan budidaya biota air tawar di media lainnya, seperti bekas galian tambang dan pasir, saluran irigasi (sariban) dan lainnya. Contohnya ikan lele, patin, nila dan ikan mas.",
          
        },
        {
          "number": "3231",
          "name": "JASA SARANA PRODUKSI BUDIDAYA IKAN LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha penyiapan sarana budidaya ikan yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pengikatan bibit rumput laut, pembuatan jaring, pelampung, pakan\\/alami, karamba dan jaring apung dan sebagainya.",
          
        },
        {
          "number": "3232",
          "name": "JASA PRODUKSI BUDIDAYA IKAN LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha produksi budidaya ikan yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa sortir, pemberian pakan\\/pakan alami, pemantauan, pengendalian lingkungan dan penyakit, dan sebagainya. Contohnya KSO (kerjasama operasional)",
          
        },
        {
          "number": "3233",
          "name": "JASA PASCA PANEN BUDIDAYA IKAN LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha pasca panen budidaya ikan yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pemanenan, jasa sortasi dan gradasi, jasa uji mutu dan sebagainya.",
          
        },
        {
          "number": "3241",
          "name": "JASA SARANA PRODUKSI BUDIDAYA IKAN AIR TAWAR",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha penyiapan sarana budidaya ikan air tawar yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa penyediaan terpal, jaring, pakan, probiotik, vaksin, kapur, pupuk, pengolahan lahan, pembuatan kolam, karamba jaring apung, jasa penampungan hasil budidaya, dan sebagainya.",
          
        },
        {
          "number": "3242",
          "name": "JASA PRODUKSI BUDIDAYA IKAN AIR TAWAR",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha produksi budidaya ikan air tawar yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa sortasi, pemberian pakan, jasa pengendalian jasad pengganggu, jasa pemantauan dan sebagainya.",
          
        },
        {
          "number": "3243",
          "name": "JASA PASCA PANEN BUDIDAYA IKAN AIR TAWAR",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha pasca panen budidaya ikan air tawar yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pemanenan, jasa sortasi dan gradasi, jasa uji mutu, jasa pengeringan, jasa pemberian es, jasa pengepakan dan penyimpanan, dan sebagainya.",
          
        },
        {
          "number": "3251",
          "name": "PEMBESARAN PISCES\\/IKAN BERSIRIP AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembesaran pisces\\/ikan bersirip air payau (ikan bandeng, patin, nila, ikan mas dan kakap putih dan kerapu), di air payau dengan menggunakan lahan, perairan dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3252",
          "name": "PEMBENIHAN IKAN AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembenihan (produksi induk, telur, larva sampai dengan benih siap tebar), ikan air payau (bandeng dan kakap putih), udang galah, udang windu, udang putih dan biota air payau lainnya (kepiting dan rumput laut\\/Gracilaria) di air payau dengan menggunakan lahan, perairan dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3253",
          "name": "PEMBESARAN MOLLUSCA AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembesaran mollusca air payau dengan menggunakan lahan, perairan dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3254",
          "name": "PEMBESARAN CRUSTACEA AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembesaran crustacea air payau seperti, udang galah, udang windu, udang putih, di air payau dengan menggunakan lahan, perairan dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3255",
          "name": "PEMBESARAN TUMBUHAN AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan pembesaran tumbuhan air payau seperti rumput laut\\/Gracilaria dengan menggunakan lahan, perairan dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3259",
          "name": "BUDIDAYA BIOTA AIR PAYAU LAINNYA",
          "description": "Kelompok ini mencakup usaha atau kegiatan budaidaya biota air payau lainnya dengan menggunakan lahan, perairan dan fasilitas buatan lainnya.",
          
        },
        {
          "number": "3261",
          "name": "JASA SARANA PRODUKSI BUDIDAYA IKAN AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha penyiapan sarana budidaya ikan air payau yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pembuatan tambak, dan sebagainya",
          
        },
        {
          "number": "3262",
          "name": "JASA PRODUKSI BUDIDAYA IKAN AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha produksi budidaya ikan air payau yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa penebaran benih, jasa pengendalian jasad pengganggu, jasa pengendalian lingkungan dan penyakit, jasa pemberian pakan, jasa pemantauan dan sebagainya.",
          
        },
        {
          "number": "3263",
          "name": "JASA PASCA PANEN BUDIDAYA IKAN AIR PAYAU",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha pasca panen budidaya ikan air payau yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa pemanenan, jasa sortasi dan gradasi, jasa uji mutu, jasa pengeringan, jasa pemberian es, jasa pengepakan dan penyimpanan, dan sebagainya.",
          
        },
        {
          "number": "3271",
          "name": "PENGEMBANGBIAKAN IKAN BERSIRIP (PISCES) YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan ikan bersirip (Pisces) yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh ikan bersirip yang termasuk kelompok ini: Ikan Napoleon, Ikan Capungan Banggai, Ikan Hiu Lanjaman, Ikan Hiu Martil, Ikan Pari Mobula, Kuda Laut, Ikan Arwana, dll.",
          
        },
        {
          "number": "3272",
          "name": "PENGEMBANGBIAKAN CRUSTACEA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Custacea yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Crustacea yang masuk dalam kelompok ini: Tachypleus gigas, Tachypleus tridentatus dan Carcinoscorpius rotundicauda.",
          
        },
        {
          "number": "3273",
          "name": "PENGEMBANGBIAKAN MOLLUSCA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Mollusca yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Mollusca yang masuk dalam kelompok ini: Tridacna spp., (Kima) dan Strombus gigas (Keong Ratu).",
          
        },
        {
          "number": "3274",
          "name": "PENGEMBANGBIAKAN COELENTERATA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Coelenterata yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Coelenterata yang masuk dalam kelompok ini: Antipatharia spp., Helioporidae spp., Sclerectinia spp., Tubiporidae spp., dan Milleporidae spp.",
          
        },
        {
          "number": "3275",
          "name": "PENGEMBANGBIAKAN ECHINODERMATA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Echinodermata yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Ceolenterata yang masuk dalam kelompok ini: Holothoria fuscogilva., Holothuria nobilis., dan Holothoria whitmaei.",
          
        },
        {
          "number": "3276",
          "name": "PENGEMBANGBIAKAN AMPHIBIA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Amphibia yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran.",
          
        },
        {
          "number": "3277",
          "name": "PENGEMBANGBIAKAN REPTILIA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Reptilia yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh Reptilia yang masuk dalam kelompok ini: Amyda cartilaginea, Chitra chitra, dan Carettochelys insculpta.",
          
        },
        {
          "number": "3278",
          "name": "PENGEMBANGBIAKAN MAMALIA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan mamalia yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran. Contoh mamalia yang masuk dalam kelompok ini: lumba-lumba.",
          
        },
        {
          "number": "3279",
          "name": "PENGEMBANGBIAKAN ALGAE DAN BIOTA PERAIRAN LAINNYA YANG DILINDUNGI DAN\\/ATAU TERMASUK DALAM APPENDIKS CITES",
          "description": "Kelompok ini mencakup usaha pengembangbiakan Algae dan biota perairan lainnya yang dilindungi dan\\/atau Appendiks CITES terbatas diluar ketentuan perlindungannya dan\\/atau yang dibatasi pemanfaatannya sesuai ketentuan konvensi internasional yang diratifikasi yang hidup di habitat laut, perairan tawar dan perairan payau untuk kegiatan penelitian dan pengembangan, pengembangbiakan, perdagangan dalam negeri, perdagangan luar negeri, aquaria dan pertukaran.",
          
        },
        {
          "number": "5100",
          "name": "PERTAMBANGAN BATU BARA",
          "description": "Kelompok ini mencakup usaha operasi pertambangan, pengeboran berbagai kualitas batu bara seperti antrasit, bituminous dan subbitominous baik pertambangan di permukaan tanah atau bawah tanah, termasuk pertambangan dengan cara pencairan (liquefaction). Operasi pertambangan tersebut meliputi penggalian, penghancuran, pencucian, penyaringan dan pencampuran serta pemadatan untuk meningkatkan kualitas atau memudahkan pengangkutan dan penyimpanan\\/penampungan. Termasuk pencarian batu bara dari kumpulan tepung bara (culm bank).",
          
        },
        {
          "number": "1640",
          "name": "PEMILIHAN BENIH TANAMAN UNTUK PENGEMBANGBIAKAN",
          "description": "Kelompok ini mencakup semua kegiatan pasca panen yang ditujukan untuk meningkatkan perkembangan kualitas benih melalui pemilahan material non benih, benih berukuran terlalu kecil, benih yang rusak secara mekanik atau kerusakan benih karena serangga dan benih yang belum matang, dan juga menjaga kelembaban benih ke kondisi aman untuk penyimpanan benih. Kegiatan ini mencakup pengeringan, pembersihan, sortasi dan lainnya sampai benih dipasarkan. Pemeliharaan benih yang telah dimodifikasi juga termasuk di sini.",
          
        },
        {
          "number": "1711",
          "name": "PERBURUAN DAN PENANGKAPAN PRIMATA",
          "description": "Kelompok ini mencakup usaha perburuan dan penangkapan primata dalam rangka pengendalian populasi dan pelestarian. Termasuk perburuan dan penangkapan primata dengan perangkap, penangkapan primata (mati atau hidup) untuk makanan, bulu, kulit atau untuk penelitian, untuk ditempatkan dalam kebun binatang atau sebagai hewan peliharaan. Termasuk perburuan dan penangkapan primata untuk diambil organnya. Contohnya kera, monyet dan primata lainnya.",
          
        },
        {
          "number": "1712",
          "name": "PERBURUAN DAN PENANGKAPAN MAMALIA",
          "description": "Kelompok ini mencakup usaha perburuan dan penangkapan mamalia dalam rangka pengendalian populasi dan pelestarian. Termasuk perburuan dan penangkapan mamalia dengan perangkap, penangkapan mamalia (mati atau hidup) untuk makanan, bulu, kulit atau untuk penelitian, untuk ditempatkan dalam kebun binatang atau sebagai hewan peliharaan. Termasuk perburuan dan penangkapan mamalia untuk diambil organnya. Contohnya rusa, babi, kelinci, dan mamalia lainnya.",
          
        },
        {
          "number": "1713",
          "name": "PERBURUAN DAN PENANGKAPAN REPTIL",
          "description": "Kelompok ini mencakup usaha perburuan dan penangkapan reptil dalam rangka pengendalian populasi dan pelestarian. Termasuk perburuan dan penangkapan reptil dengan perangkap, penangkapan reptil (mati atau hidup) untuk makanan, bulu, kulit atau untuk penelitian, untuk ditempatkan dalam kebun binatang atau sebagai hewan peliharaan.Termasuk perburuan dan penangkapan reptil untuk diambil organnya. Contohnya buaya, ular, dan reptil lainnya.",
          
        },
        {
          "number": "1714",
          "name": "PERBURUAN DAN PENANGKAPAN BURUNG",
          "description": "Kelompok ini mencakup usaha perburuan dan penangkapan segala jenis burung dalam rangka pengendalian populasi dan pelestarian. Termasuk perburuan dan penangkapan burung dengan perangkap, penangkapan burung (mati atau hidup) untuk makanan, bulu, kulit atau untuk penelitian, untuk ditempatkan dalam kebun binatang atau sebagai hewan peliharaan. Termasuk perburuan dan penangkapan burung untuk diambil organnya.",
          
        },
        {
          "number": "1715",
          "name": "PERBURUAN DAN PENANGKAPAN INSEKTA",
          "description": "Kelompok ini mencakup usaha perburuan dan penangkapan insekta dalam rangka pengendalian populasi dan pelestarian. Termasuk perburuan dan penangkapan insekta dengan perangkap, penangkapan insekta (mati atau hidup) untuk makanan, kulit atau untuk penelitian, untuk ditempatkan dalam kebun binatang atau sebagai hewan peliharaan. Termasuk perburuan dan penangkapan insekta untuk diambil organnya. Contohnya kupu-kupu, dan insekta lainnya.",
          
        },
        {
          "number": "1719",
          "name": "PERBURUAN DAN PENANGKAPAN SATWA LIAR LAINNYA",
          "description": "Kelompok ini mencakup usaha perburuan dan penangkapan satwa liar lainnya dalam rangka pengendalian populasi dan pelestarian. Termasuk perburuan dan penangkapan satwa liar lainnya dengan perangkap, penangkapan satwa liar lainnya (mati atau hidup) untuk makanan, kulit atau untuk penelitian, untuk ditempatkan dalam kebun binatang atau sebagai hewan peliharaan. Termasuk perburuan dan penangkapan satwa liar lainnya untuk diambil organnya. Termasuk dalam kelompok ini adalah satwa liar yang belum tercakup dalam kelompok 01711 s.d. 01715.",
          
        },
        {
          "number": "1721",
          "name": "PENANGKARAN PRIMATA",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian orang utan, beruk, bekantan, kera ekor panjang, dan primata lainnya.",
          
        },
        {
          "number": "1722",
          "name": "PENANGKARAN MAMALIA",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian mamalia, seperti hariamau, badak, anoa, dan mamalia lainnya.",
          
        },
        {
          "number": "1723",
          "name": "PENANGKARAN REPTIL",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian reptil, seperti komodo, buaya, dan reptil lainnya.",
          
        },
        {
          "number": "1724",
          "name": "PENANGKARAN BURUNG",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian burung, seperti kakatua, cendrawasih, rangkong, dan burung lainnya.",
          
        },
        {
          "number": "1725",
          "name": "PENANGKARAN INSEKTA",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian insekta, seperti kupu-kupu, lebah, dan insekta lainnya.",
          
        },
        {
          "number": "1726",
          "name": "PENANGKARAN ANGGREK",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian jenis anggrek, seperti anggrek hitam, dan jenis anggrek lainnya yang dilindungi.",
          
        },
        {
          "number": "1727",
          "name": "PENANGKARAN IKAN DAN CORAL\\/KARANG",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian berbagai jenis ikan dan coral\\/karang, seperti ikan arwana (super red, golden, green, banjar, jardini\\/payang Irian), kima, dan jenis lainnya.",
          
        },
        {
          "number": "1729",
          "name": "PENANGKARAN TUMBUHAN\\/SATWA LIAR LAINNYA",
          "description": "Kelompok ini mencakup usaha penangkaran, pembesaran, pembiakan dan penelitian untuk pelestarian tumbuhan\\/satwa liar lainnya, baik yang hidup di darat maupun di laut.",
          
        },
        {
          "number": "2111",
          "name": "PEMANFAATAN KAYU HUTAN TANAMAN PADA HUTAN PRODUKSI",
          "description": "Kelompok ini mencakup usaha pemanfaatan kayu yang meliputi penanaman atau pengayaan, pemeliharaan, pemanenan atau penebangan hasil yang berasal dari hutan tanaman pada hutan produksi. Jenis tanaman kayu kehutanan seperti jati, pinus, mahoni, sonokeling, sengon\\/albasia\\/jeunjing, jabon, akasia, ekalitus, cendana, dan tanaman kayu kehutanan lainnya.",
          
        },
        {
          "number": "2112",
          "name": "PEMANFAATAN KAYU HUTAN TANAMAN HASIL REHABILITASI PADA HUTAN PRODUKSI",
          "description": "Kelompok ini mencakup usaha pemanfaatan kayu yang meliputi penanaman atau pengayaan, pemeliharaan, pemanenan atau penebangan hasil yang berasal dari hutan tanaman yang dibangun melalui kegiatan merehabilitasi lahan dan hutan pada hutan produksi. Jenis tanaman kayu kehutanan seperti jati, pinus, mahoni, sonokeling, sengon\\/albasia\\/jeunjing, jabon, akasia, ekalitus, cendana, dan tanaman kayu kehutanan lainnya.",
          
        },
        {
          "number": "2113",
          "name": "PEMANFAATAN KAYU HUTAN TANAMAN RAKYAT",
          "description": "Kelompok ini mencakup usaha pemanfaatan kayu yang meliputi penanaman atau pengayaan, pemeliharaan, pemanenan atau penebangan hasil yang berasal dari hutan tanaman rakyat yang dibangun oleh kelompok masyarakat untuk meningkatkan potensi dan kualitas hutan produksi dengan menerapkan silvikultur dalam rangka menjamin kelestarian sumber daya hutan. Jenis tanaman kayu kehutanan seperti jati, pinus, mahoni, sonokeling, sengon\\/albasia\\/jeunjing, jabon, akasia, ekalitus, cendana, dan tanaman kayu kehutanan lainnya.",
          
        },
        {
          "number": "2119",
          "name": "PEMANFAATAN KAYU HUTAN TANAMAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pemanfaatan hasil hutan kayu yang berasal dari hutan tanaman lainnya yang tidak termasuk dalam kelompok diatas yang merupakan hasil inovasi pemanfaatan hasil hutan tanaman. Contoh hutan rakyat seperti tanaman kehutanan yang dikelola oleh masyarakat yang berada di luar hutan.",
          
        },
        {
          "number": "2121",
          "name": "PEMANFAATAN KAYU HUTAN ALAM",
          "description": "Kelompok ini mencakup usaha pemanfaatan hutan alam melalui kegiatan pemanenan atau penebangan dengan batas diameter, pengayaan, dan pemeliharaan. Kegiatan pemanenan\\/penebangan\\/pengayaan\\/penanaman dilakukan terhadap jenis-jenis pohon yang dikelompokan ke dalam kelompok jenis meranti, kelompok rimba campuran, kelompok kayu indah dan kelompok kayu jenis lainnya yang berlaku di seluruh indonesia, tidak termasuk jenis kayu yang dilindungi.",
          
        },
        {
          "number": "2122",
          "name": "PEMANFAATAN KAYU HASIL RESTORASI EKOSISTEM PADA HUTAN ALAM",
          "description": "Kelompok ini mencakup usaha untuk membangun kawasan dalam hutan alam yang memiliki ekosistem penting sehingga dapat dipertahankan fungsi dan keterwakilannya melalui kegiatan pemeliharaan, perlindungan dan pemulihan ekosistem hutan termasuk penanaman, pengayaan, penjarangan, penangkaran satwa, pelepasliaran flora dan fauna untuk mengembalikan unsur hayati (flora dan fauna) dan unsur non hayati (tanah, iklim, dan tofografi) pada suatu kawasan kepada jenis yang asli, sehingga tercapai keseimbangan ekosistemnya, serta usaha pemanfaatan kayu hasil restorasi ekosistem yang sudah tercapai keseimbangan ekosistemnya.",
          
        },
        {
          "number": "2130",
          "name": "PEMANFAATAN HASIL HUTAN BUKAN KAYU",
          "description": "Kelompok ini mencakup pemanfaatan hasil hutan bukan kayu yang meliputi penanaman atau pengayaan, pemeliharaan, pemanenan atau penebangan hasil hutan bukan kayu (rotan, getah pinus, daun kayu putih, bambu, damar, gaharu, dan lainnya).",
          
        },
        {
          "number": "2140",
          "name": "PENGUSAHAAN PERBENIHAN TANAMAN KEHUTANAN",
          "description": "Kelompok ini mencakup usaha pengadaan benih dan\\/atau pembuatan bibit tanaman hutan dan pemeliharaannya sampai dengan umur tertentu untuk ditanam dengan tujuan komersil. Jenis benih\\/bibit tanaman kayu kehutanan seperti jati, pinus, mahoni, sonokeling, sengon\\/albasia\\/jeunjing, jabon, akasia, ekalitus, cendana, dan tanaman kayu kehutanan lainnya.",
          
        },
        {
          "number": "2201",
          "name": "PEMANENAN KAYU",
          "description": "Kelompok ini mencakup kegiatan poduksi kayu gelondongan untuk industri pengolahan dan produksi kayu gelondongan digunakan dalam bentuk yang tidak diolah, seperti pit-props, tonggak pagar dan tiang listrik atau telepon.",
          
        },
        {
          "number": "2202",
          "name": "USAHA PEMUNGUTAN KAYU",
          "description": "Kelompok ini mencakup usaha pemungutan hasil kayu dengan batas diameter tertentu yang terpisah dari usaha pengusahaan kayu. Termasuk kegiatan pengumpulan dan produksi kayu bakar.",
          
        },
        {
          "number": "2209",
          "name": "USAHA KEHUTANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha di bidang kehutanan yang tidak tercakup dalam kelompok manapun, seperti produksi arang di hutan dengan cara tradisional.",
          
        },
        {
          "number": "2301",
          "name": "PEMUNGUTAN GETAH KARET",
          "description": "Kelompok ini mencakup usaha pemungutan getah tanaman karet dan tanaman penghasil getah lainnya, seperti pemungutan getah tanaman karet hutan, getah perca, jelutung dan kemenyan.",
          
        },
        {
          "number": "2302",
          "name": "PEMUNGUTAN ROTAN",
          "description": "Kelompok ini mencakup usaha pemungutan jenis tanaman rotan.",
          
        },
        {
          "number": "2303",
          "name": "PEMUNGUTAN GETAH PINUS",
          "description": "Kelompok ini mencakup usaha pemungutan getah pinus.",
          
        },
        {
          "number": "2304",
          "name": "PEMUNGUTAN DAUN KAYU PUTIH",
          "description": "Kelompok ini mencakup usaha pemungutan daun tanaman kayu putih.",
          
        },
        {
          "number": "2305",
          "name": "PEMUNGUTAN KOKON\\/KEPOMPONG ULAT SUTERA",
          "description": "Kelompok ini mencakup usaha pemungutan kokon\\/kepompong ulat sutera.",
          
        },
        {
          "number": "2306",
          "name": "PEMUNGUTAN DAMAR",
          "description": "Kelompok ini mencakup usaha pemungutan damar.",
          
        },
        {
          "number": "2307",
          "name": "PEMUNGUTAN MADU",
          "description": "Kelompok ini mencakup usaha pemungutan madu.",
          
        },
        {
          "number": "2308",
          "name": "PEMUNGUTAN BAMBU",
          "description": "Kelompok ini mencakup usaha pemungutan bambu.",
          
        },
        {
          "number": "2309",
          "name": "PEMUNGUTAN BUKAN KAYU LAINNYA",
          "description": "Kelompok ini mencakup usaha pemungutan hasil bukan kayu yang tidak dicakup dalam 02301 s.d. 02308 yang terpisah dari usaha pengusahaan hasil hutan bukan kayu, misalnya pemungutan gumpalan shellak, jernang, daun ekaliptus, kulit kayu lawang dan kayu manis, kenanga, daun\\/kulit\\/ranting cendana, kopal, pandan, purun, jamur, berry, lumut, dan lainnya. Termasuk pemungutan hasil hutan bukan kayu seperti gaharu dan sarang burung walet.",
          
        },
        {
          "number": "2401",
          "name": "JASA PENGGUNAAN KAWASAN HUTAN DI LUAR SEKTOR KEHUTANAN",
          "description": "Kelompok ini mencakup jasa kehutanan bidang penggunaan kawasan hutan\\/planologi dalam rangka penyiapan data dasar pengelolaan hutan di kawasan untuk usaha di luar sektor kehutanan.",
          
        },
        {
          "number": "2402",
          "name": "JASA PERLINDUNGAN HUTAN DAN KONSERVASI ALAM",
          "description": "Kelompok ini mencakup usaha dalam rangka menunjang Pemantauan Informasi Lingkungan (PIL)\\/ ANDAL, Usaha Kelola Lingkungan (UKL), Usaha Pemantauan Lingkungan (UPL). Termasuk didalamnya usaha pemanfaatan jasa penyimpanan dan penyerapan karbon.",
          
        },
        {
          "number": "2403",
          "name": "JASA REHABILITASI DAN RESTORASI KEHUTANAN SOSIAL",
          "description": "Kelompok ini mencakup usaha dalam rangka rehabilitasi lahan dan kehutanan sosial baik di dalam maupun kawasan hutan.",
          
        },
        {
          "number": "2404",
          "name": "JASA KEHUTANAN BIDANG PERENCANAAN KEHUTANAN",
          "description": "Kelompok ini mencakup usaha jasa kehutanan dalam rangka penyiapan data dasar seperti inventarisasi hutan, pengukuran dan penataan batas, dan penafsiran citra indra jarak jauh.",
          
        },
        {
          "number": "2409",
          "name": "JASA PENUNJANG KEHUTANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha jasa di bidang kehutanan lainnya yang tidak tercakup dalam kelompok 02401 s.d. 02404, seperti kegiatan pengevaluasian kayu, pemadaman kebakaran hutan dan pengendalian hama dan jasa penebangan kayu, serta jasa pengangkutan kayu di dalam hutan.",
          
        },
        {
          "number": "3111",
          "name": "PENANGKAPAN PISCES\\/IKAN BERSIRIP DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan pisces\\/ikan bersirip dengan alat penangkapan ikan: jaring lingkar (surrounding nets) termasuk pukat cincin pelagis besar dengan satu kapal, pukat cincin pelagis kecil dengan satu kapal, pukat cincin teri, pukat cincin pelagis besar dengan dua kapal, pukat cincin pelagis kecil dengan dua kapal, yang menangkap jenis ikan cakalang, madidihang, tongkol krai, tongkol komo, pelagis besar lainya, layang, kembung, selar, lemuru, kembang, pelagis kecil lainnya, dll); pukat tarik (seine nets) termasuk pukat tarik pantai (beach seine), dogol (danish seine), payang, cantrang, yang menangkap jenis ikan kakap putih, kakap merah, kuwe, manyung, cucut, kerapu, pari, kurisi, remang, layang, kembung, selar, lemuru, tembang, siro, dll; pukat hela (trawls) berupa pukat hela dasar udang, yang menangkap jenisikan pelagis kecil, pelagis besar, demersal, dll; jaring angkat (lift nets) termasuk anco (portable lift net), bagan berperahu, bouke ami, bagan tancap, yang menangkap jenis ikan tongkol krai, tongkol komo, madidihang, cakalang, kembung, pelagis besar lainnya, pelagis kecil lainnya, dll; alat yang dijatuhkan atau ditebarkan (falling gears), termasuk jala jatuh berkapal (cast net) dan jala tebar (falling gear not specified) menangkap jenis ikan beronang, biji nangka, pelagis kecil lainya, dll; jaring insang (gillnets and entangling nets), termasuk jaring insang tetap (set gillnet (anchored)), jaring insang hanyut (drift gillnet), jaring insang lingkar (encircling gillnets), jaring insang berpancang (fixed gillnet (on stakes)), jaring insang berlapis (trammel net), combined gillnets-trammel net, yang menangkap jenis ikan cucut, pari, demersal lainya, cakalang, tongkol krai, tongkol komo, madidihang, tenggiri bulat, cucut, pelagis besar lainnya, pelagis kecil lainnya, dll; perangkap (traps), termasuk set net, bubu (pot), bubu bersayap (fyke net), pukat labuh (long bag set net), togo, ambai, jermal, pengerih, sero, yang menangkap jenis ikan Belanak, kuwe, julung- julung, pelagis kecil lainnya dll; pancing (hooks and lines), termasuk pancing ulur nontuna, pancing ulur tuna, pancing berjoran, huhate, pancing cumi, pancing cumi mekanis (squid jigging), huhate mekanis, rawai dasar (set longline), rawai tuna, tonda, pancing layang-layang, yang menangkap jenis ikan cakalang, tongkol krai, tongkol komo, tuna lainnya, tenggiri, pelagis besar lainnya, ikan tuna mata besar, madidihang, albacora, marlin, meka, kakap putih, kakap merah, kuwe, manyung, cucut, kerapu, pari, kurisi, remang, demersal lainya, karang lainnya, kerapu, kurisi, lencam, dll; alat penangkapan ikan lainnya (miscellaneous gears), termasuk tombak (harpoon), ladung, panah, pukat dorong (pushnet), muro ami (drive-in net), seser, yang menangkap jenis ikan ekor kuning, pisang-pisang, kapas- kapas, ikan karang dan ikan demersal, dll di laut, muara sungai, laguna dan tempat lain yang dipengaruhi pasang surut. Termasuk pula kegiatan kapal yang digunakan baik untuk menangkap ikan maupun pengolahan dan pengawetan ikan.",
          
        },
        {
          "number": "3112",
          "name": "PENANGKAPAN CRUSTACEA DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan crustacea dengan alat penangkapan ikan: pukat hela (trawls) berupa pukat hela dasar udang; pukat tarik (seine nets), termasuk pukat tarik pantai, dogol (danish seine), payang, cantrang; penggaruk (dredges), berupa penggaruk tanpa kapal (hand dredge); jaring angkat (lift nets), termasuk bagan berperahu, bagan tancap; alat yang dijatuhkan atau ditebarkan (falling gears), berupa jala tebar (falling gear not specified); jaring insang (gillnets and entangling nets), termasuk jaring insang berpancang (fixed gillnet (on stakes)), jaring insang tetap (set gillnet (anchored)); perangkap (traps), termasuk bubu (pot), pukat labuh (long bag set net), ambai, pengerih; pancing (hooks and lines), termasuk pancing berjoran, pancing ulur; alat penangkap ikan lainnya (miscellaneous gears), termasuk seser, ladung, dll yang menangkap jenis ikan udang (udang windu, udang putih, udang dogol), lobster dan crustacea laut lainnya (kepiting dan rajungan) di laut, muara sungai, laguna dan tempat lain yang dipengaruhi pasang surut.",
          
        },
        {
          "number": "3113",
          "name": "PENANGKAPAN MOLLUSCA DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan mollusca dengan alat penangkapan ikan: pancing (hooks and lines) termasuk pancing cumi, yang menangkap jenis ikan cumi-cumi, sotong, gurita, dll; alat yang dijatuhkan atau ditebarkan (falling gear), termasuk Jala jatuh berkapal, yang menangkap jenis ikan cumi-cumi, sotong, gurita, dll; jaring angkat (lift nets), termasuk bouke ami, yang menangkap jenis ikan cumi- cumi, dll; penggaruk (dredges), yang menangkap jenis kekerangan, seperti remis, simping, kerang darah, kerang hijau dan tiram,di laut, muara sungai, laguna dan tempat lain yang dipengaruhi pasang surut.",
          
        },
        {
          "number": "3114",
          "name": "PENANGKAPAN\\/PENGAMBILAN TUMBUHAN AIR DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan\\/pengambilan semua jenis tumbuhan air, seperti algae, rumput laut, ganggang laut, dan tumbuhan hias di laut, muara sungai, laguna dan tempat lain yang dipengaruhi pasang surut dengan alat penangkapan ikan penggaruk (dredges) berupa penggaruk tanpa kapal (hand dredge).",
          
        },
        {
          "number": "3115",
          "name": "PENANGKAPAN\\/PENGAMBILAN INDUK\\/BENIH IKAN DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan\\/pengambilan induk\\/benih ikan seperti induk\\/benih ikan bersirip, induk\\/benih udang, induk\\/benih kerang, induk\\/benih kepiting, dan induk\\/benih biota lainnya di laut, muara sungai, laguna dan tempat lain yang dipengaruhi pasang surut dengan alat penangkapan ikan : perangkap (traps) berupa bubu (induk\\/benih ikan); alat penangkapan ikan lainnya (miscellaneous gears) berupa seser (induk\\/benih ikan); penggaruk (dregdes) (induk\\/benih kerang, induk\\/benih kepiting, dan induk\\/benih biota lainnya); jaring angkat (lift nets) berupa anco (induk\\/benih ikan).",
          
        },
        {
          "number": "3116",
          "name": "PENANGKAPAN ECHINODERMATA DI LAUT",
          "description": "Kelompok ini mencakup usaha atau kegiatan penangkapan\\/pengambilan jenis hewan laut seperti bintang laut, teripang, bulu babi, lili laut , dan lainnya, dengan alat penangkapan ikan penggaruk (dredges) termasuk penggaruk tanpa kapal dan alat penangkapan ikan lainnya (miscellaneous gears) termasuk tombak, ladung, dll di laut, muara sungai, laguna, dan tempat lain yang dipengaruhi pasang surut.",
          
        },
        {
          "number": "8109",
          "name": "PENGGALIAN BATU, PASIR DAN TANAH LIAT LAINNYA",
          "description": "Kelompok ini mencakup usaha penggalian batu, pasir dan tanah liat lainnya, yang tidak terklasifikasikan di kelompok 08101 - 08108. Kegiatan penggalian yang masuk dalam kelompok ini seperti penggalian diorit, basalt, breksi, dan lainnya. Termasuk disini kegiatan pemecahan, penghancuran, pemisahan, penyaringan, dan penghalusannya.",
          
        },
        {
          "number": "8911",
          "name": "PERTAMBANGAN BELERANG",
          "description": "Kelompok ini mencakup usaha pertambangan bijih belerang. Termasuk juga kegiatan penghancuran, dan pembersihan terhadap mineral belerang. Pengolahan lanjutan dari mineral belerang dimasukkan dalam kelompok 20114.",
          
        },
        {
          "number": "8912",
          "name": "PERTAMBANGAN FOSFAT",
          "description": "Kelompok ini mencakup usaha pertambangan bahan galian fosfat. Termasuk disini kegiatan sortasi, penghancuran, pembersihan dan peningkatan kadar bahan galian fosfat.",
          
        },
        {
          "number": "8913",
          "name": "PERTAMBANGAN NITRAT",
          "description": "Kelompok ini mencakup usaha pertambangan bahan galian nitrat. Termasuk disini kegiatan pembersihan, pemecahan, dan sortasi dengan cara lain terhadap bahan galian nitrat.",
          
        },
        {
          "number": "8914",
          "name": "PERTAMBANGAN YODIUM",
          "description": "Kelompok ini mencakup usaha pertambangan ekstraksi air tanah yang mengandung yodium. Termasuk disini kegiatan distilasi dari ekstraksi mineral tersebut.",
          
        },
        {
          "number": "8915",
          "name": "PERTAMBANGAN POTASH (KALIUM KARBONAT)",
          "description": "Kelompok ini mencakup usaha pertambangan potash dalam bentuk garam, feldpar dan leusit analeum. Termasuk disini kegiatan penghancuran dan pembersihan terhadap mineral tersebut.",
          
        },
        {
          "number": "8919",
          "name": "PERTAMBANGAN MINERAL, BAHAN KIMIA DAN BAHAN PUPUK LAINNYA",
          "description": "Kelompok ini mencakup usaha pertambangan mineral bahan kimia dan bahan pupuk lainnya yang belum tercakup dalam kelompok 08911 s.d. 08915. Misalnya pertambangan barium sulfat alam dan karbonat (barite dan witherit), borat alam, magnesium sulfat alam (kiserit), pertambangan earth coulor, flour, bentonite, dolomit, magnesit, phiroplit, tawas, diatomea, dan mineral lain yang utamanya sebagai bahan kimia dan pertambangan guano (bahan pupuk dari kotoran burung atau kelelawar). Termasuk disini kegiatan pembersihan, pemisahan dan sortasi.",
          
        },
        {
          "number": "8920",
          "name": "EKSTRAKSI TANAH GEMUK (PEAT)",
          "description": "Kelompok ini mencakup usaha operasi ekstraksi dan penggalian tanah gemuk, aglomerasi tanah gemuk dan pencampuran tanah gemuk (peat) untuk meningkatkan kualitas atau memudahkan pengangkutan atau penyimpanan. Operasi ekstraksi tersebut meliputi penggalian, penghancuran, pencucian, penyaringan, serta penampungannya.",
          
        },
        {
          "number": "8930",
          "name": "EKSTRAKSI GARAM",
          "description": "Kelompok ini mencakup usaha ekstraksi garam yaitu pengambilan garam dari bawah tanah termasuk dengan pelarutan dan pemompaan, serta produksi garam dengan penguapan air laut atau air garam lainnya di tambak\\/empang\\/media lainnya, dan penghancuran, pemisahan dan penyulingan garam oleh petani garam.",
          
        },
        {
          "number": "8991",
          "name": "PERTAMBANGAN BATU MULIA",
          "description": "Kelompok ini mencakup usaha pertambangan dan penggalian batu mulia\\/batu permata, seperti intan. Termasuk kegiatan pemisahan\\/sortasi, dan pembersihannya dengan cara lain terhadap batu mulia\\/batu permata.",
          
        },
        {
          "number": "8992",
          "name": "PENGGALIAN FELDSPAR DAN KALSIT",
          "description": "Kelompok ini mencakup usaha penggalian feldspar dan kalsit, serta batu tulis\\/sabak. Termasuk disini kegiatan pemecahan, penghancuran, penyaringan dan penghalusannya.",
          
        },
        {
          "number": "8993",
          "name": "PERTAMBANGAN ASPAL ALAM",
          "description": "Kelompok ini mencakup usaha pertambangan aspal alam, batu beraspal dan bitumen padat alam. Termasuk disini kegiatan pemisahan dan penuangan terhadap mineral tersebut.",
          
        },
        {
          "number": "8994",
          "name": "PENGGALIAN ASBES",
          "description": "Kelompok ini mencakup usaha penggalian asbes dalam bentuk serabut maupun tidak. Termasuk disini kegiatan pembersihan dan pemisahannya.",
          
        },
        {
          "number": "8995",
          "name": "PENGGALIAN KUARSA\\/PASIR KUARSA",
          "description": "Kelompok ini mencakup usaha penggalian kuarsa\\/pasir kuarsa\\/pasir silika. Termasuk disini kegiatan pemecahan, penghancuran, penyaringan dan penghalusannya.",
          
        },
        {
          "number": "8999",
          "name": "PERTAMBANGAN DAN PENGGALIAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pertambangan dan penggalian lainnya yang belum termasuk dalam golongan manapun. Termasuk kegiatan pemisahan\\/sortasi, dan pembersihan dengan cara lain terhadap bahan tambang\\/galian tersebut. Pertambangan dan penggalian ini antara lain mika, leusit, yarosit, zeolit, batu penggosok, grafit alam, steatite (talc), tepung fosil siliceous, oker, toseki dan mineral logam tanah jarang lainnya.",
          
        },
        {
          "number": "9100",
          "name": "AKTIVITAS PENUNJANG PERTAMBANGAN MINYAK BUMI DAN GAS ALAM",
          "description": "Kelompok ini mencakup kegiatan jasa yang berkaitan dengan pertambangan minyak dan gas bumi yang dilakukan atas dasar balas jasa (fee) atau kontrak, seperti jasa eksplorasi pengambilan minyak atau gas dengan cara tradisional yaitu membuat observasi geologi, pemasangan alat pengeboran, perbaikan dan pembongkaran penyemenan sumur minyak dan sumur gas, pembuatan saluran sumur, pemompaan sumur produksi, penyumbatan dan penutupan sumur produksi, pengujian produksi, dismantling, pencairan dan regasifikasi gas alam untuk kebutuhan transportasi di lokasi pertambangan, pengeboran percobaan dalam rangka penyulingan minyak bumi dan gas alam dan jasa pemadam kebakaran ladang minyak bumi dan gas alam.",
          
        },
        {
          "number": "9900",
          "name": "AKTIVITAS PENUNJANG PERTAMBANGAN DAN PENGGALIAN LAINNYA",
          "description": "Kelompok ini mencakup jasa penunjang atas dasar balas jasa atau kontrak, yang dibutuhkan dalam kegiatan pertambangan golongan pokok 05, 07, dan 08, seperti jasa eksplorasi misalnya dengan cara tradisional seperti mengambil contoh bijih dan membuat observasi geologi, jasa pemompaan dan penyaluran hasil tambang dan jasa percobaan penggalian dan pengeboran ladang atau sumur tambang.",
          
        },
        {
          "number": "10110",
          "name": "KEGIATAN RUMAH POTONG DAN PENGEPAKAN DAGING BUKAN UNGGAS",
          "description": "Kelompok ini mencakup kegiatan operasional rumah potong hewan yang berkaitan dengan kegiatan pemotongan, pengulitan, pembersihan dan pengepakan daging, seperti daging sapi, babi, biri-biri, kelinci, domba, unta dan daging segar lainnya bukan unggas, kegiatan pengurusan hasil sampingan, seperti produksi kulit dan jangat dari tempat pemotongan hewan termasuk fellmongery, penjemuran tulang, pengolahan sisaan atau kotoran hewan, penyortiran wol dan bulu dan pembersihan lemak. Termasuk kegiatan pemotongan dan pengolahan paus di darat atau di kapal khusus. Pemotongan yang dilakukan oleh pedagang dimasukkan dalam golongan 462, 472 dan 478.",
          
        },
        {
          "number": "10120",
          "name": "KEGIATAN RUMAH POTONG DAN PENGEPAKAN DAGING UNGGAS",
          "description": "Kelompok ini mencakup kegiatan operasional rumah potong unggas dan pengepakan daging unggas, termasuk kegiatan pengurusan hasil sampingan, seperti pemrosesan sisa atau kotoran unggas, pementangan kulit, penyortiran bulu dan pembersihan lemak. Pemotongan yang dilakukan oleh pedagang dimasukkan dalam golongan 462, 472 dan 478.",
          
        },
        {
          "number": "10130",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN PRODUK DAGING DAN DAGING UNGGAS",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan produk daging dan daging unggas dengan cara pengalengan, pengasapan, penggaraman, pembekuan, pemanisan, pengiradiasian (dengan iradiator) dan sebagainya. Kegiatannya mencakup produksi daging beku dalam bentuk carcase, produksi daging beku yang telah dipotong, produksi daging beku dalam porsi tersendiri, produksi daging yang dikeringkan, daging yang diasinkan atau daging yang diasapkan, produksi produk-produk daging, seperti sosis, salami, puding, &quot;andovillettes&quot;, saveloy, bologna, patc, rillet, dan daging ham. Termasuk kegiatan pengolahan daging paus di darat atau di kapal khusus.",
          
        },
        {
          "number": "10211",
          "name": "INDUSTRI PENGGARAMAN\\/PENGERINGAN IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) melalui proses penggaraman\\/pengeringan, seperti ikan tembang asin, ikan teri asin, dan ikan kering tawar.",
          
        },
        {
          "number": "10212",
          "name": "INDUSTRI PENGASAPAN\\/PEMANGGANGAN IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) melalui proses pengasapan\\/pemanggangan seperti ikan bandeng asap, ikan julung-julung\\/roa asap, ikan fufu\\/asar asap, ikan lele asap, dan ikan patin asap.",
          
        },
        {
          "number": "10213",
          "name": "INDUSTRI PEMBEKUAN IKAN",
          "description": "Kelompok ini mencakup usaha pengawetan ikan (bersirip\\/pisces) melalui proses pembekuan, seperti ikan bandeng beku, ikan tuna\\/cakalang beku dan kakap beku. Termasuk juga ikan utuh maupun dipotong (fillet, loin, saku, steak, chunk, brown meat) yang dibekukan. Kegiatan ini tidak termasuk usaha pendinginan ikan dengan es yang dimaksud untuk mempertahankan kesegaran ikan tersebut (10217).",
          
        },
        {
          "number": "10214",
          "name": "INDUSTRI PEMINDANGAN IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) melalui proses pemindangan, seperti pindang bandeng\\/paso, pindang tongkol, pindang cuwe, pindang naya, pindang lemuru\\/tembang, pindang layang, dan pindang cakalang.",
          
        },
        {
          "number": "10215",
          "name": "INDUSTRI PERAGIAN\\/FERMENTASI IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) melalui proses peragian\\/fermentasi, seperti peragian\\/fermentasi peda, ikan kayu, dan kecap ikan.",
          
        },
        {
          "number": "10216",
          "name": "INDUSTRI BERBASIS DAGING LUMATAN DAN SURIMI",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) melalui proses pelumatan daging ikan\\/ penggilingan. Termasuk industri daging lumat yang dicampur bahan tambahan melalui proses pemasakan atau tidak dimasak kemudian dibekukan. Contoh berbasis daging lumatan dan surimi: mata goyang, kurisi, dll. Berbasis surimi: baso, nuget, otak-otak, kamaboko, sosis, pempek, siomay, dimsum, chikuwa, imitation crab.",
          
        },
        {
          "number": "10217",
          "name": "INDUSTRI PENDINGINAN\\/PENGESAN IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) melalui proses pendinginan\\/pengesan.",
          
        },
        {
          "number": "10219",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN LAINNYA UNTUK IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan (bersirip\\/pisces) dengan cara selain yang tercakup dalam kelompok 10211 s.d. 10217. Termasuk kegiatan kapal yang digunakan hanya untuk pengolahan dan pengawetan ikan dan biota air lainnya (dalam hal ini tidak termasuk pengalengannya), produksi tepung ikan untuk konsumsi manusia dan makanan hewan dan produksi daging dan bagian dari ikan bukan untuk konsumsi manusia, konsentrat tepung ikan. Termasuk dalam kelompok ini adalah industri pengolahan dan pengawetan ikan dengan menggunakan radiasi (dengan iradiator).",
          
        },
        {
          "number": "10221",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN IKAN DAN BIOTA AIR (BUKAN UDANG) DALAM KALENG",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan ikan dan biota perairan lainnya kecuali udang melalui proses pengalengan, seperti ikan sardencis dalam kaleng, kerang dalam kaleng, lemuru dalam kaleng, mackarel dalam kaleng, cephalopoda (cumi\\/gurita\\/sotong) dalam kaleng, tuna dalam kaleng, rajungan\\/kepiting dalam kaleng. Kegiatan kapal pengolah ikan yang hanya melakukan pengolahan dan pengawetan dalam kaleng (tanpa melakukan kegiatan penangkapan) termasuk dalam kelompok ini.",
          
        },
        {
          "number": "10222",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN UDANG DALAM KALENG",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan udang melalui proses pengalengan (udang dalam kaleng). Kegiatan kapal pengolah udang yang hanya melakukan pengolahan dan pengawetan dalam kaleng (tanpa melakukan kegiatan penangkapan) termasuk dalam kelompok ini.",
          
        },
        {
          "number": "10291",
          "name": "INDUSTRI PENGGARAMAN\\/PENGERINGAN BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya melalui proses penggaraman\\/pengeringan, seperti udang asin, cumi-cumi asin, ebi, ubur- ubur asin, sotong asin, teripang kering, sotong kering, dan lainnya.",
          
        },
        {
          "number": "10292",
          "name": "INDUSTRI PENGASAPAN\\/PEMANGGANGAN BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya melalui proses pengasapan\\/pemanggangan, seperti sotong asap\\/panggang, teripang asap\\/panggang.",
          
        },
        {
          "number": "10293",
          "name": "INDUSTRI PEMBEKUAN BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya melalui proses pembekuan, seperti udang beku, paha kodok beku, cephalopoda (cumi\\/sotong\\/gurita) beku, kepiting\\/rajungan beku, dan kerang beku. Kegiatan ini tidak termasuk usaha pendinginan crustacea, mollusca dan biota air lainnya dengan es yang dimaksud untuk mempertahankan kesegarannya (10297).",
          
        },
        {
          "number": "10294",
          "name": "INDUSTRI PEMINDANGAN BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya melalui proses pemindangan.",
          
        },
        {
          "number": "10295",
          "name": "INDUSTRI PERAGIAN\\/FERMENTASI BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya melalui proses peragian\\/fermentasi seperti terasi udang.",
          
        },
        {
          "number": "10296",
          "name": "INDUSTRI BERBASIS LUMATAN BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan biota air lainnya melalui proses pelumatan daging\\/penggilingan\\/pencampuran bahan tambahan\\/pengukusan, seperti lumatan cumi, lumatan udang, baso udang, baso cumi, baso kepiting, dan kaki naga udang.",
          
        },
        {
          "number": "10297",
          "name": "INDUSTRI PENDINGINAN\\/PENGESAN BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya melalui proses pendinginan\\/pengesan, seperti cumi segar, kerang segar, teripang segar, dan kepiting segar.",
          
        },
        {
          "number": "10298",
          "name": "INDUSTRI PENGOLAHAN RUMPUT LAUT",
          "description": "Kelompok ini mencakup usaha pengolahan rumput laut menjadi rumput laut kering dan olahan (alkali treated caragenan chips), gelatin, agar-agar, karagenan dan lainnya.",
          
        },
        {
          "number": "10299",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN LAINNYA UNTUK BIOTA AIR LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan crustacea, mollusca, echinodermata dan biota perairan lainnya dengan cara selain yang tercakup dalam kelompok 10291 s.d. 10298, seperti tepung udang, tepung kerang, dan tepung kodok. Termasuk dalam kelompok ini adalah industri pengolahan dan pengawetan untuk biota air lainnya dengan menggunakan radiasi (dengan iradiator).",
          
        },
        {
          "number": "10311",
          "name": "INDUSTRI PENGASINAN BUAH-BUAHAN DAN SAYURAN",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran dengan proses pengasinan, baik dalam bentuk kemasan ataupun tidak, seperti asinan kedondong, asinan wortel.",
          
        },
        {
          "number": "10312",
          "name": "INDUSTRI PELUMATAN BUAH-BUAHAN DAN SAYURAN",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran dengan proses pelumatan, baik dalam bentuk kemasan ataupun tidak, seperti selai mangga, jelly murbai, dan cabe giling.",
          
        },
        {
          "number": "10313",
          "name": "INDUSTRI PENGERINGAN BUAH-BUAHAN DAN SAYURAN",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran dengan cara pengeringan, baik dalam bentuk kemasan ataupun tidak, seperti kismis (anggur), bawang merah, bawang putih, cabe kering, rebung kering dan jamur kering. Termasuk Industri keripik dari buah dan sayuran.",
          
        },
        {
          "number": "10314",
          "name": "INDUSTRI PEMBEKUAN BUAH-BUAHAN DAN SAYURAN",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran dengan proses pembekuan, seperti buah-buahan beku dan sayur-sayuran beku.",
          
        },
        {
          "number": "10320",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN BUAH-BUAHAN DAN SAYURAN DALAM KALENG",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan buah-buahan dan sayuran melalui proses pengalengan, seperti nanas dalam kaleng, rambutan dalam kaleng, kacang dalam kaleng dan wortel dalam kaleng. Yang dimaksud pengalengan di sini merupakan proses pengawetan dan bukan hanya pengemasan.",
          
        },
        {
          "number": "10330",
          "name": "INDUSTRI PENGOLAHAN SARI BUAH DAN SAYURAN",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran dengan cara pengolahan sari buah-buahan dan sayuran, seperti bubuk sari buah-buahan, air\\/sari pekat buah-buahan dan air\\/sari pekat sayuran (konsentrat), nektar buah dan atau sayuran.",
          
        },
        {
          "number": "10391",
          "name": "INDUSTRI TEMPE KEDELAI",
          "description": "Kelompok ini mencakup usaha pembuatan tempe dari kedelai. Usaha pembuatan tempe yang bahan bakunya selain kedelai (dari kacang tanah\\/kacang-kacangan lainnya), seperti tempe bongkrek, dimasukkan dalam kelompok 10393.",
          
        },
        {
          "number": "10392",
          "name": "INDUSTRI TAHU KEDELAI",
          "description": "Kelompok ini mencakup usaha pembuatan tahu dari kedelai. Usaha pembuatan tahu yang bahan bakunya selain kedelai (dari kacang tanah\\/kacang-kacangan lainnya) dimasukkan dalam kelompok 10393.",
          
        },
        {
          "number": "10393",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN KEDELAI DAN KACANG- KACANGAN LAINNYA SELAIN TAHU DAN TEMPE",
          "description": "Kelompok ini mencakup usaha pengolahan dan pengawetan kedelai dan kacang-kacangan lainnya selain tahu dan tempe seperti natto, yuba\\/kembang tahu, fu zhu, dan douchi. Termasuk tempe gembus dan tempe bongkrek.",
          
        },
        {
          "number": "10399",
          "name": "INDUSTRI PENGOLAHAN DAN PENGAWETAN LAINNYA BUAH-BUAHAN DAN SAYURAN BUKAN KACANG-KACANGAN",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran dengan cara selain yang tercakup dalam subgolongan 10391 s.d. 10393, seperti industri pengupasan kentang, produk buah-buahan dan sayuran yang diproses dengan pasteurisasi atau sterilisasi dan dikemas dalam kemasan selain kaleng.",
          
        },
        {
          "number": "10411",
          "name": "INDUSTRI MINYAK MENTAH DAN LEMAK NABATI",
          "description": "Kelompok ini mencakup usaha pengolahan bahan-bahan dari nabati menjadi minyak mentah (crude oil) yang masih perlu diolah lebih lanjut dan biasanya produk ini dipakai oleh industri lain (kecuali minyak mentah kelapa sawit (crude plam oil) dan minyak mentah kelapa) termasuk juga industri hasil lemak dari nabati yang dapat digunakan sebagai bahan makanan, seperti minyak bunga matahari.",
          
        },
        {
          "number": "10412",
          "name": "INDUSTRI MARGARINE",
          "description": "Kelompok ini mencakup usaha pembuatan margarine dari minyak makan nabati.",
          
        },
        {
          "number": "10413",
          "name": "INDUSTRI MINYAK MENTAH DAN LEMAK HEWANI SELAIN IKAN",
          "description": "Kelompok ini mencakup usaha pengolahan bahan-bahan dari hewani selain ikan menjadi minyak mentah dan lemak hewani, seperti minyak\\/lemak babi, lemak sapi dan lemak unggas.",
          
        },
        {
          "number": "10414",
          "name": "INDUSTRI MINYAK IKAN",
          "description": "Kelompok ini mencakup usaha pembuatan minyak yang berbahan baku dari badan ikan yang berlemak tinggi, seperti lemuru, atau dari organ badan ikan seperti hati cucut. Mencakup juga industri minyak yang dihasilkan dari hasil sampingan pengalengan ikan, seperti hasil pengalengan sarden. Pengolahan minyak ikan\\/biota perairan lainnya yang digunakan untuk bahan farmasi ataupun kosmetik dimasukkan dalam subgolongan 2101 dan 2102.",
          
        },
        {
          "number": "10415",
          "name": "INDUSTRI MINYAK GORENG BUKAN MINYAK KELAPA DAN MINYAK KELAPA SAWIT",
          "description": "Kelompok ini mencakup usaha pembuatan minyak goreng lainnya, bukan minyak goreng kelapa dan minyak goreng kelapa sawit, seperti minyak bekatul, minyak goreng babi dan minyak goreng unggas.",
          
        },
        {
          "number": "10421",
          "name": "INDUSTRI KOPRA",
          "description": "Kelompok ini mencakup usaha pembuatan kopra.",
          
        },
        {
          "number": "10422",
          "name": "INDUSTRI MINYAK MENTAH KELAPA",
          "description": "Kelompok ini mencakup usaha pengolahan kelapa menjadi minyak mentah (crude oil) yang masih perlu diolah lebih lanjut dan biasanya produk ini dipakai oleh industri lain.",
          
        },
        {
          "number": "10423",
          "name": "INDUSTRI MINYAK GORENG KELAPA",
          "description": "Kelompok ini mencakup usaha pengolahan lebih lanjut (pemurnian, pemucatan dan penghilangan bau yang tidak dikehendaki) dari minyak mentah kelapa menjadi minyak goreng kelapa.",
          
        },
        {
          "number": "10424",
          "name": "INDUSTRI PELET KELAPA",
          "description": "Kelompok ini mencakup usaha pengolahan lebih lanjut kelapa, seperti pelet kelapa.",
          
        },
        {
          "number": "10431",
          "name": "INDUSTRI MINYAK MENTAH KELAPA SAWIT (CRUDE PALM OIL)",
          "description": "Kelompok ini mencakup usaha pengolahan kelapa sawit menjadi minyak mentah (crude palm oil\\/CPO) yang masih perlu diolah lebih lanjut dan biasanya produk ini dipakai oleh industri lain.",
          
        },
        {
          "number": "10432",
          "name": "INDUSTRI MINYAK MENTAH INTI KELAPA SAWIT (CRUDE PALM KERNEL OIL)",
          "description": "Kelompok ini mencakup usaha pengolahan inti kelapa sawit menjadi minyak mentah inti (crude palm kernel oil\\/CPKO) yang masih perlu diolah lebih lanjut dan biasanya produk ini dipakai oleh industri lain.",
          
        },
        {
          "number": "10433",
          "name": "INDUSTRI PEMISAHAN\\/FRAKSINASI MINYAK MENTAH KELAPA SAWIT DAN MINYAK MENTAH INTI KELAPA SAWIT",
          "description": "Kelompok ini mencakup pemisahan fraksi padat dan fraksi cair dari minyak mentah kelapa sawit menjadi minyak mentah kelapa sawit olein (Crude Palm Olein) dan minyak mentah kelapa sawit stearin (Crude Palm Stearin) atau dari minyak mentah inti kelapa sawit menjadi minyak mentah inti kelapa sawit olein (Crude Palm Kernel Olein) dan minyak mentah inti kelapa sawit stearin (Crude Palm Kernel Stearin) yang masih perlu diolah lebih lanjut.",
          
        },
        {
          "number": "10774",
          "name": "INDUSTRI PENGOLAHAN GARAM",
          "description": "Kelompok ini mencakup usaha pengolahan garam dapur\\/konsumsi.",
          
        },
        {
          "number": "10779",
          "name": "INDUSTRI PRODUK MASAK LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan petis, saus tiram, terasi, khitin\\/khitosan, atau yang sejenisnya, dengan bahan baku utamanya ikan dan udang ataupun bagian-bagiannya, industri madu dan karamel buatan, industri ekstraksi dan jus dari daging dan ikan, industri konsentrat buatan\\/pembuatan macam-macam makanan yang belum tercakup dalam golongan manapun, seperti cincau, gist, baking powder, essence dan cuka makan. Usaha pembuatan terasi udang tercakup dalam kelompok 10295.",
          
        },
        {
          "number": "10791",
          "name": "INDUSTRI MAKANAN BAYI",
          "description": "Kelompok ini mencakup usaha pembuatan makanan bayi, seperti formula bayi, susu lanjutan dan makanan lanjutan lainnya, makanan bayi dan makanan yang mengandung bahan yang dihomogenisasi. Termasuk pembuatan pangan diet dan keperluan medis khusus bayi dan anak, seperti formula pertumbuhan, makanan pendamping ASI, dan makanan selingan untuk anak.",
          
        },
        {
          "number": "10792",
          "name": "INDUSTRI KUE BASAH",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam makanan kue basah, yaitu sejenis kue yang relatif tidak tahan lama, seperti wajik, lemper, kue lapis, lumpia, dan martabak (termasuk pembuatan tape dan lempok).",
          
        },
        {
          "number": "10793",
          "name": "INDUSTRI MAKANAN DARI KEDELE DAN KACANG-KACANGAN LAINNYA BUKAN KECAP, TEMPE DAN TAHU",
          "description": "Kelompok ini mencakup usaha pembuatan makanan dari kedele\\/kacang- kacangan lainnya bukan kecap dan tempe, seperti keripik\\/peyek dari kacang-kacangan, daging sintetis, kacang kapri, kacang asin, kacang telur, kacang sukro, kacang bogor, kacang atom, kacang mete dan enting-enting. Termasuk produk protein kedelai dan texturized vegetable protein.",
          
        },
        {
          "number": "10794",
          "name": "INDUSTRI KERUPUK, KERIPIK, PEYEK DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha industri berbagai macam kerupuk, keripik, peyek dan sejenisnya, seperti kerupuk udang, kerupuk ikan dan kerupuk pati (kerupuk terung). Dan usaha pembuatan berbagai macam makanan sejenis kerupuk, seperti macam-macam emping, kecimpring, karak, gendar, opak, keripik paru, keripik bekicot dan keripik kulit, peyek teri, peyek udang. Kegiatan atau usaha pembuatan keripik\\/peyek dari kacang kacangan dimasukkan dalam kelompok 10793",
          
        },
        {
          "number": "10795",
          "name": "INDUSTRI KRIMER NABATI",
          "description": "Kelompok ini mencakup usaha pembuatan krimer nabati emulsi lemak nabati yang berasal dari kelapa atau kelapa sawit yang digunakan sebagai campuran makanan atau minuman.",
          
        },
        {
          "number": "10796",
          "name": "INDUSTRI DODOL",
          "description": "Kelompok ini mencakup usaha pembuatan dodol yang terbuat diperoleh dari bahan utama tepung beras atau tepung beras ketan, santan kelapa dan gula, dengan atau tanpa bahan tambahan lain yang dimasak hingga mencapai tekstur yang diinginkan.Pembuatan lempok masuk kedalam kelompok 10792",
          
        },
        {
          "number": "10799",
          "name": "INDUSTRI PRODUK MAKANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan produk makanan lainnya yang tidak diklasifikasikan di tempat lain, seperti telur asin, soup dan kaldu, makanan yang tidak tahan lama, seperti sandwich, pizza mentah, selongsong sosis dari kolagen, selulosa, usus hewan, dan lainnya. Termasuk industri ragi, susu dan keju pengganti dari selain susu dan produk telur dan albumin telur, pangan diet khusus dewasa dan pangan keperluan medis khusus dewasa, seperti minuman untuk ibu hamil dan menyusui, makanan untuk penderita penyakit tertentu, pangan protein produk seperti Hydrolised Vegetable Protein (HVP).",
          
        },
        {
          "number": "10801",
          "name": "INDUSTRI RANSUM MAKANAN HEWAN",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam ransum pakan ternak, unggas, ikan dan hewan lainnya.",
          
        },
        {
          "number": "10802",
          "name": "INDUSTRI KONSENTRAT MAKANAN HEWAN",
          "description": "Kelompok ini mencakup usaha pembuatan konsentrat pakan ternak, unggas dan hewan lainnya. Pengolahan konsentrat pakan ternak, unggas dan hewan lainnya yang tidak dapat di pisahkan dari usaha peternakan dimasukkan dalam golongan 014(Peternakan).",
          
        },
        {
          "number": "11010",
          "name": "INDUSTRI MINUMAN BERALKOHOL HASIL DESTILASI",
          "description": "Kelompok ini mencakup industri pengolahan minuman yang menggunakan bahan baku alkohol (ethyl alcohol) dengan proses destilasi seperti whisky, brandy, rum, gin, liqueurs, tidak termasuk residu sulphite dari pabrik pulp dan pencampuran minuman beralkohol, termasuk produk minuman beralkohol netral (tanpa rasa\\/flavor) dan produk minuman beralkohol hasil destilasi yang dibuat secara tradisional. Industri alkohol murni dimasukkan dalam kelompok 20115.",
          
        },
        {
          "number": "11020",
          "name": "INDUSTRI MINUMAN BERALKOHOL HASIL FERMENTASI ANGGUR DAN HASIL PERTANIAN LAINNYA",
          "description": "Kelompok ini mencakup industri pengolahan minuman secara fermentasi dengan bahan baku anggur, apel, buah-buahan lain atau hasil pertanian lainnya, seperti beras, sayuran, daun, batang dan akar (kecuali malt). Kegiatan yang tercakup adalah industri minuman anggur, sparkling wine, minuman anggur dari sari anggur, fermentasi tanpa destilasi minuman beralkohol, seperti sake, sari buah apel, perry, mead, minuman anggur dari buah lain dan minuman campuran yang mengandung alkohol, minuman anggur putih dan sejenisnya, fermentasi tanpa destilasi minuman beralkohol yang dibuat secara tradisional, pencampuran minuman anggur dan minuman anggur beralkohol rendah atau tidak beralkohol.",
          
        },
        {
          "number": "11031",
          "name": "INDUSTRI MINUMAN BERALKOHOL HASIL FERMENTASI MALT",
          "description": "Kelompok ini mencakup industri minuman beralkohol dari malt, seperti bir, ale, porter dan stout. Termasuk Industri bir beralkohol rendah atau tanpa alkohol.",
          
        },
        {
          "number": "11032",
          "name": "INDUSTRI MALT",
          "description": "Kelompok ini mencakup industri pembuatan malt (kecambah barley atau sereal lainnya yang dikeringkan).",
          
        },
        {
          "number": "11040",
          "name": "INDUSTRI MINUMAN RINGAN",
          "description": "Kelompok ini mencakup usaha industri minuman yang tidak mengandung alkohol, kecuali bir dan anggur tanpa alkohol. Termasuk industri minuman ringan beraroma tanpa alkohol dan atau rasa manis, seperti lemonade, orangeade, cola, minuman buah, air tonik, limun, air soda, krim soda dan air anggur, minuman yang dikarbonasi maupun tidak, dan minuman yang mengandung konsentrat, dan minuman serbuk.",
          
        },
        {
          "number": "10434",
          "name": "INDUSTRI PEMURNIAN MINYAK MENTAH KELAPA SAWIT DAN MINYAK MENTAH INTI KELAPA SAWIT",
          "description": "Kelompok ini mencakup pemurnian minyak mentah dari kelapa sawit menjadi minyak murni kelapa sawit (Refined Bleached Deodorized Palm Oil) atau dari minyak inti kelapa sawit menjadi minyak murni inti kelapa sawit (Refined Bleached Deodorized Palm Kernel Oil) yang masih perlu diolah lebih lanjut.",
          
        },
        {
          "number": "10435",
          "name": "INDUSTRI PEMISAHAN\\/FRAKSINASI MINYAK MURNI KELAPA SAWIT",
          "description": "Kelompok ini mencakup usaha pemisahan fraksi padat dan fraksi cair dari minyak murni kelapa sawit menjadi miyak murni kelapa sawit olein (Refined Bleached Deodorized Palm Olein) dan minyak murni kelapa sawit stearin (Refined Bleached Deodorized Palm Stearin).",
          
        },
        {
          "number": "10436",
          "name": "INDUSTRI PEMISAHAN\\/FRAKSINASI MINYAK MURNI INTI KELAPA SAWIT",
          "description": "Kelompok ini mencakup usaha pemisahan fraksi padat dan fraksi cair dari minyak murni inti kelapa sawit menjadi minyak murni inti kelapa sawit olein (Refined Bleached Deodorized Palm Kernel Olein) dan miyak murni inti kelapa sawit stearin (Refined Bleached Deodorized Palm Kernel Stearin).",
          
        },
        {
          "number": "10437",
          "name": "INDUSTRI MINYAK GORENG KELAPA SAWIT",
          "description": "Kelompok ini mencakup usaha pengolahan lebih lanjut (pemurnian, pemucatan dan penghilangan bau yang tidak dikehendaki) dari minyak mentah kelapa sawit (CPO) menjadi minyak goreng kelapa sawit yang siap dikonsumsi. Termasuk pengolahan minyak merah kelapa sawit (red palm oil) dan\\/atau aktivitas penambahan zat tertentu pada minyak goreng untuk meningkatkan kualitas\\/nilai tambah.",
          
        },
        {
          "number": "10490",
          "name": "INDUSTRI MINYAK MENTAH DAN LEMAK NABATI DAN HEWANI LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan lainnya untuk minyak dan lemak, yang belum tercakup pada subgolongan 1041 s.d. 1043, seperti industri shorterning (minyak roti), industri minyak dan lemak dari binatang yang tidak dapat dimakan, produksi (linter) sisaan kapas, bungkil atau ampas dan hasil sisaan lainnya dari produksi minyak dan penyulingan minyak dari ikan dan mamalia laut.",
          
        },
        {
          "number": "10510",
          "name": "INDUSTRI PENGOLAHAN SUSU SEGAR DAN KRIM",
          "description": "Kelompok ini mencakup usaha industri pengolahan susu cair segar, susu dipasteurisasi, disterilisasi, homogenisasi dan atau pemanasan ultra (UHT) dan industri pengolahan krim dari susu cair segar, pasteurisasi, sterilisasi dan homogenisasi, dalam bentuk cair atau semi cair dan produk sejenis lainnya.",
          
        },
        {
          "number": "10520",
          "name": "INDUSTRI PENGOLAHAN SUSU BUBUK DAN SUSU KENTAL",
          "description": "Kelompok ini mencakup usaha industri pengolahan susu bubuk atau susu kental atau krimer kental, susu evaporasi, dengan pemanis atau tidak dan industri pengolahan susu atau krim dalam bentuk yang padat, dan produk sejenis lainnya.",
          
        },
        {
          "number": "10531",
          "name": "INDUSTRI PENGOLAHAN ES KRIM",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam es krim yang bahan utamanya dari susu. Pembuatan es krim yang bahan utamanya bukan dari susu dimasukkan dalam kelompok 10532.",
          
        },
        {
          "number": "10532",
          "name": "INDUSTRI PENGOLAHAN ES SEJENISNYA YANG DAPAT DIMAKAN (BUKAN ES BATU DAN ES BALOK)",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam es yang bahan utamanya bukan dari susu, seperti sorbet, es lilin, ice drop, es dengan berbagai rasa lainnya, es mambo dan es puter, premiks es rasa dan produk sejenis es untuk dimakan lainnya. Usaha es kering (dry ice) dimasukkan dalam kelompok 20112.",
          
        },
        {
          "number": "10590",
          "name": "INDUSTRI PENGOLAHAN PRODUK DARI SUSU LAINNYA",
          "description": "Kelompok ini mencakup usaha pengolahan produk dari susu lainnya, seperti mentega, yoghurt, keju dan dadih, air dadih, kaseinatau laktosa (susu manis), premiks es krim bubuk (bubuk es krim), premiks es krim cair, susu fermentasi, whey, dan produk-produk olahan susu sejenis lainnya. Pembuatan es krim yang bahan utamanya dari susu dimasukkan dalam kelompok 10531",
          
        },
        {
          "number": "10611",
          "name": "INDUSTRI PENGGILINGAN GANDUM DAN SERELIA LAINNYA",
          "description": "Kelompok ini mencakup usaha penggilingan gandum dan serelia lainnya menjadi tepung dan pelet , seperti gandum dan sorghum, rye, oat dan serelia lainnya.",
          
        },
        {
          "number": "10612",
          "name": "INDUSTRI PENGGILINGAN ANEKA KACANG (TERMASUK LEGUMINOUS)",
          "description": "Kelompok ini mencakup usaha pembuatan tepung dari aneka kacang melalui proses penggilingan, seperti tepung tepung kacang hijau, tepung kacang kedelai dan tepung lainnya (seperti dari kacang tanah, kacang merah dan tanaman leguminous lainnya).",
          
        },
        {
          "number": "10613",
          "name": "INDUSTRI PENGGILINGAN ANEKA UMBI DAN SAYURAN (TERMASUK RHIZOMA)",
          "description": "Kelompok ini mencakup usaha pembuatan tepung dari aneka umbi dan sayuran termasuk rhizoma melalui proses penggilingan, seperti tepung dari ubi kayu (gaplek), ubi jalar, talas, irut, jahe, temulawak, kunyit dan kapulaga dan sayuran.",
          
        },
        {
          "number": "10614",
          "name": "INDUSTRI TEPUNG CAMPURAN DAN ADONAN TEPUNG",
          "description": "Kelompok ini mencakup usaha pembuatan tepung campuran dan adonan tepung yang sudah dicampur untuk roti, kue, biskuit, kue dadar, termasuk tepung untuk adonan, misalnya untuk melapisi permukaan ikan atau daging ayam, seperti tepung pelapis, tepung bumbu, tepung bakwan, tepung bakso, premiks untuk makanan pencuci mulut berbasis serealia dan pati dan tepung custard tanpa telur.",
          
        },
        {
          "number": "10615",
          "name": "INDUSTRI MAKANAN SEREAL",
          "description": "Kelompok ini mencakup usaha pembuatan makanan sereal termasuk semua jenis produk sereal siap santap, instan dan sereal panas. Contoh rolled sereal, granola sereal, oatmeal instan, corn flakes, puffed gandum atau beras, muesli,produk sereal dari kedelai dan produk sereal dari tepung serealia dengan menggunakan proses ekstrusi.",
          
        },
        {
          "number": "10616",
          "name": "INDUSTRI TEPUNG TERIGU",
          "description": "Kelompok ini mencakup usaha pembuatan tepung terigu.",
          
        },
        {
          "number": "10631",
          "name": "INDUSTRI PENGGILINGAN PADI DAN PENYOSOHAN BERAS",
          "description": "Kelompok ini mencakup usaha penggilingan padi menjadi beras, termasuk penyosohan beras yang terpisah dengan usaha penggilingan padi.",
          
        },
        {
          "number": "10632",
          "name": "INDUSTRI PENGGILINGAN DAN PEMBERSIHAN JAGUNG",
          "description": "Kelompok ini mencakup usaha penggilingan dan pembersihan jagung.",
          
        },
        {
          "number": "10633",
          "name": "INDUSTRI TEPUNG BERAS DAN TEPUNG JAGUNG",
          "description": "Kelompok ini mencakup usaha pembuatan tepung beras dan tepung jagung.",
          
        },
        {
          "number": "10634",
          "name": "INDUSTRI PATI BERAS DAN JAGUNG",
          "description": "Kelompok ini mencakup usaha pembuatan pati beras dan pati jagung (maizena).",
          
        },
        {
          "number": "10635",
          "name": "INDUSTRI PEMANIS DARI BERAS DAN JAGUNG",
          "description": "Kelompok ini mencakup usaha pembuatan pemanis dari beras dan jagung seperti fructosa, glucosa, maltosa, sacharosa dan dextrosa.",
          
        },
        {
          "number": "10636",
          "name": "INDUSTRI MINYAK DARI JAGUNG DAN BERAS",
          "description": "Kelompok ini mencakup usaha pembuatan minyak dari dan jagung dan beras.",
          
        },
        {
          "number": "10621",
          "name": "INDUSTRI PATI UBI KAYU",
          "description": "Kelompok ini mencakup usaha pembuatan pati ubi kayu melalui ekstraksi, seperti tepung tapioka.",
          
        },
        {
          "number": "10622",
          "name": "INDUSTRI BERBAGAI MACAM PATI PALMA",
          "description": "Kelompok ini mencakup usaha pembuatan pati dari berbagai macam tanaman suku palma, seperti pati sagu\\/pati mutiara dan pati aren.",
          
        },
        {
          "number": "10623",
          "name": "INDUSTRI GLUKOSA DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pembuatan gula glukosa, selain yang termasuk dalam kelompok 10721 dan 10722, seperti glucosa, fructosa, lactosa, maltosa, sacharosa, dan sediaan pemanis lainnya. Termasuk pemanis buatan.",
          
        },
        {
          "number": "10629",
          "name": "INDUSTRI PATI DAN PRODUK PATI LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam pati melalui proses ekstraksi yang belum termasuk kelompok 10621 s.d. 10623, seperti pati kentang, pati bengkoang, pati temulawak, pati irut dan pati biji mangga.",
          
        },
        {
          "number": "10710",
          "name": "INDUSTRI PRODUK ROTI DAN KUE",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam roti, kue dan produk bakeri lainnya seperti industri roti tawar dan roti kadet; industri kue, pie, tart; industri biskuit dan produk roti kering lainnya; industri pengawetan kue kering dan cake; industri produk makanan ringan baik yang manis atau asin; industri tortillas; dan industri produk roti yang dibekukan, seperti pancake, waffle dan roti kadet.",
          
        },
        {
          "number": "10721",
          "name": "INDUSTRI GULA PASIR",
          "description": "Kelompok ini mencakup usaha pembuatan gula yang berbentuk kristal (pasir), bahan utamanya dari tebu, bit ataupun lainnya.",
          
        },
        {
          "number": "10722",
          "name": "INDUSTRI GULA MERAH",
          "description": "Kelompok ini mencakup usaha pembuatan gula merah baik berbentuk cetakan, serbuk\\/granul maupun cair, yang murni dari nira sebagai bahan baku baik berasal dari tebu maupun tanaman palma (aren, kelapa dan sejenisnya).",
          
        },
        {
          "number": "10723",
          "name": "INDUSTRI SIROP",
          "description": "Kelompok ini mencakup usaha pengolahan gula menjadi sirop, seperti industri sirup gula dan produksi sirup dan gula maple. Kegiatan pembuatan sirop yang tergabung dengan pabrik gula dan tidak dapat dipisahkan tersendiri dimasukkan dalam kelompok 10721 atau 10722.",
          
        },
        {
          "number": "10729",
          "name": "INDUSTRI PENGOLAHAN GULA LAINNYA BUKAN SIROP",
          "description": "Kelompok ini mencakup usaha pengolahan gula ke dalam bentuk lain, termasuk pembuatan gula batu, gula cair, tepung gula, gula pengganti dari jus tebu, bit, maple gula cair, gula stevia, kelapa, nira, aren dan molasse (harum manis), toping (non-buah) saus manis, dan gula merah yang tidak murni dari nira sebagai bahan baku utamanya dan yang tidak termasuk dalam kelompok 10721 sd. 10723.",
          
        },
        {
          "number": "10731",
          "name": "INDUSTRI KAKAO",
          "description": "Kelompok ini mencakup usaha pengolahan biji kakao menjadi bubuk kakao, lemak kakao, pasta kakao, bungkil kakao dan produk kakao lainnya.",
          
        },
        {
          "number": "10732",
          "name": "INDUSTRI MAKANAN DARI COKELAT DAN KEMBANG GULA DARI COKLAT",
          "description": "Kelompok ini mencakup usaha pembuatan segala macam makanan yang bahan utamanya dari cokelat seperti cokelat, cokelat compound, coklat couverture, cokelat imitasi, coklat putih, gula-gula dari cokelat, olesan dan isian berbasis kakao. Termasuk industri minuman dari cokelat dalam bentuk bubuk maupun cair.",
          
        },
        {
          "number": "10733",
          "name": "INDUSTRI MANISAN BUAH-BUAHAN DAN SAYURAN KERING",
          "description": "Kelompok ini mencakup usaha pengawetan buah-buahan dan sayuran baik buah, kacang, kulit buah dan bagian lain dari tumbuhan dengan proses pemanisan dan pengeringan, baik dalam bentuk kemasan ataupun tidak, seperti manisan pala dan manisan mangga kering, sayuran dan buah- buahan kering lainnya.",
          
        },
        {
          "number": "10734",
          "name": "INDUSTRI KEMBANG GULA",
          "description": "Kelompok ini mencakup usaha pembuatan kembang gula termasuk seluruh kembang gula keras, kembang gula lunak, kembang gula karet, caramel, cachous, nougat, foundant, dan marzipan, yang bahan utamanya bukan dari coklat.",
          
        },
        {
          "number": "10739",
          "name": "INDUSTRI KEMBANG GULA LAINNYA",
          "description": "Kelompok ini mencakup usaha industri kembang gula lainnya, yang tidak termasuk pada kategori 10731 sd. 10734 seperti permen karet dan permen obat batuk dan pastilles.",
          
        },
        {
          "number": "10740",
          "name": "INDUSTRI MAKARONI, MIE DAN PRODUK SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pembuatan makaroni, mie, spagheti, bihun, so\\&#039;un dan sejenisnya, baik dimasak atau tidak dalam bentuk basah maupun kering. Termasuk industri couscous dan industri produk pasta yang dibekukan atau dikalengkan.",
          
        },
        {
          "number": "10750",
          "name": "INDUSTRI MAKANAN DAN MASAKAN OLAHAN",
          "description": "Kelompok ini mencakup industri makanan siap saji (diolah, dibumbui dan dimasak) diolah untuk tujuan diawetkan dalam kaleng atau dibekukan dan biasanya dikemas dan dilabel untuk dijual kembali. Mencakup juga industri masakan daging atau unggas, industri masakan ikan (kecuali masakan ikan dan udang dalam kaleng), industri masakan sayuran siap saji, industri masakan rebusan dalam kaleng dan makanan di dalam wadah hampa udara dan industri masakan siap saji yang lain. Termasuk industri pizza beku, pepes, presto, dendeng ikan, baby fish goreng\\/crispy ikan, udang tepung dan ikan tepung.",
          
        },
        {
          "number": "10761",
          "name": "INDUSTRI PENGOLAHAN KOPI",
          "description": "Kelompok ini mencakup usaha penyangraian, penggilingan dan pensarian (ekstraksi) kopi menjadi berbagai macam bubuk atau cairan, seperti kopi sangrai, kopi bubuk, kopi instan, ekstrak dan sari kopi. Termasuk industri pengganti kopi. Penggilingan kopi bubuk di tempat pedagang kopi dimasukkan dalam kelompok 47222 dan 47823.",
          
        },
        {
          "number": "10762",
          "name": "INDUSTRI PENGOLAHAN HERBAL (HERB INFUSION)",
          "description": "Kelompok ini mencakup usaha pengolahan herbal (mint, vervain, chamomil). Termasuk industri seduhan herbal.",
          
        },
        {
          "number": "10763",
          "name": "INDUSTRI PENGOLAHAN TEH",
          "description": "Kelompok ini mencakup usaha pengolahan daun teh menjadi teh. Termasuk kegiatan pencampuran teh dan mate, industri ekstraksi dan olahan berbahan dasar teh dan mate.",
          
        },
        {
          "number": "10771",
          "name": "INDUSTRI KECAP",
          "description": "Kelompok ini mencakup usaha pembuatan kecap dari kedele\\/kacang- kacangan lainnya, dan pembuatan tauco (baik dari kedelai\\/kacang- kacangan lainnya yang masih segar, maupun dari hasil sisa pembuatan kecap). Usaha pembuatan kecap ikan tercakup dalam kelompok 10215.",
          
        },
        {
          "number": "10772",
          "name": "INDUSTRI BUMBU MASAK DAN PENYEDAP MASAKAN",
          "description": "Kelompok ini mencakup usaha pembuatan bumbu masak dalam keadaan sudah diramu atau belum, baik berbentuk bubuk ataupun lainnya, seperti bumbu gulai, bumbu kari, bumbu merica, bubuk jahe, bubuk jinten, bubuk pala, bubuk cabe dan bubuk kayu manis. Termasuk usaha industri penyedap masakan baik yang asli, natura maupun sintesa khemis, seperti vetsin dan serbuk panili dan industri bumbu-bumbu, saus dan rempah- rempah, seperti mayonais, tepung mustar, mustar olahan, sauce tomat, sauce selada, dan pengganti garam yang digunakan sebagai bumbu pada produk pangan.",
          
        },
        {
          "number": "10773",
          "name": "INDUSTRI PRODUK MASAK DARI KELAPA",
          "description": "Kelompok ini mencakup usaha pembuatan produk masak dari kelapa yang belum tercakup dalam golongan manapun, seperti santan pekat dan santan cair, kecap kelapa, sari kelapa (nata de coco), kelapa parut kering (dicicated coconut), krim kelapa dan tepung kelapa.",
          
        },
        {
          "number": "5200",
          "name": "PERTAMBANGAN LIGNIT",
          "description": "Kelompok ini mencakup usaha operasi pertambangan, pengeboran berbagai kualitas lignit, seperti pertambangan lignit di permukaan tanah atau bawah tanah, termasuk pertambangan dengan cara pencairan (liquefaction). Operasi pertambangan tersebut meliputi penggalian, penghancuran, pencucian, penyaringan dan pencampuran serta pemadatan lignit untuk meningkatkan kualitas dan memudahkan pengangkutan dan penyimpanan\\/penampungan.",
          
        },
        {
          "number": "6100",
          "name": "PERTAMBANGAN MINYAK BUMI",
          "description": "Kelompok ini mencakup usaha atau kegiatan pertambangan minyak bumi mentah termasuk usaha pencarian kandungan minyak bumi, pengeboran, penambangan, pemisahan serta penampungan, produksi minyak bumi mentah kondensat, pemrosesan untuk menghasilkan minyak mentah dengan cara penampungan, penyaringan, pengeringan, stabilisasi dan lain- lain. Hasil pertambangan minyak bumi antara lain minyak mentah atau crude oil dan kondensat.Kelompok ini juga mencakup usaha operasi penambangan pasir bituminous atau oil shale (serpihan minyak) dan pasir aspal. Kegiatan pertambangan tersebut meliputi penggalian, pengeboran, penghancuran, pencucian, penyaringan dan pencampuran serta penampungan. Termasuk kegiatan produksi minyak bumi mentah dari serpihan minyak dan pasir bituminous jika terkait dengan pertambangannya. Pengolahan lanjut dari hasil minyak bumi dimasukkan dalam kelompok 19211.",
          
        },
        {
          "number": "6201",
          "name": "PERTAMBANGAN GAS ALAM",
          "description": "Kelompok ini mencakup usaha pencarian kandungan gas alam, pengeboran, penambangan, pemisahan serta penampungan. Hasil pertambangan gas alam antara lain gas alam. Pencairan gas alam menjadi LNG sampai ke pengapalannya masih termasuk kegiatan pertambangan. Termasuk kegiatan CBM (Coalbed Methane).",
          
        },
        {
          "number": "6202",
          "name": "PENGUSAHAAN TENAGA PANAS BUMI",
          "description": "Kelompok ini mencakup usaha pencarian dan pengeboran tenaga panas bumi termasuk lokasi di kawasan hutan. Termasuk kegiatan lain yang berhubungan dengan pengusahaan tenaga panas bumi sampai ke tempat pemanfaatannya. Kegiatan pengubahan tenaga panas bumi menjadi tenaga listrik termasuk golongan pokok 35.",
          
        },
        {
          "number": "7101",
          "name": "PERTAMBANGAN PASIR BESI",
          "description": "Kelompok ini mencakup usaha pertambangan pasir besi. Termasuk kegiatan sortasi, pemisahan, dan pembersihannya.",
          
        },
        {
          "number": "7102",
          "name": "PERTAMBANGAN BIJIH BESI",
          "description": "Kelompok ini mencakup usaha pertambangan bijih besi termasuk kegiatan peningkatan mutu dan aglomerasi bijih besi serta konsentratnya.",
          
        },
        {
          "number": "7210",
          "name": "PERTAMBANGAN BIJIH URANIUM DAN TORIUM",
          "description": "Kelompok ini mencakup usaha pertambangan bijih uranium dan torium. Termasuk kegiatan pengkonsentratan uranium dan torium dan produksi yellow cake.",
          
        },
        {
          "number": "7291",
          "name": "PERTAMBANGAN BIJIH TIMAH",
          "description": "Kelompok ini mencakup usaha pertambangan bijih timah.",
          
        },
        {
          "number": "7292",
          "name": "PERTAMBANGAN BIJIH TIMAH HITAM",
          "description": "Kelompok ini mencakup usaha pertambangan bijih timah hitam.",
          
        },
        {
          "number": "7293",
          "name": "PERTAMBANGAN BIJIH BAUKSIT",
          "description": "Kelompok ini mencakup usaha pertambangan dan penampungan bijih bauksit.",
          
        },
        {
          "number": "7294",
          "name": "PERTAMBANGAN BIJIH TEMBAGA",
          "description": "Kelompok ini mencakup usaha pertambangan bijih tembaga, yang terdiri dari kalkosit serta batuan berupa campuran monticellit dan skarnyakut.",
          
        },
        {
          "number": "7295",
          "name": "PERTAMBANGAN BIJIH NIKEL",
          "description": "Kelompok ini mencakup usaha pertambangan bijih nikel.",
          
        },
        {
          "number": "7296",
          "name": "PERTAMBANGAN BIJIH MANGAN",
          "description": "Kelompok ini mencakup usaha pertambangan bijih mangan.",
          
        },
        {
          "number": "7299",
          "name": "PERTAMBANGAN BAHAN GALIAN LAINNYA YANG TIDAK MENGANDUNG BIJIH BESI",
          "description": "Kelompok ini mencakup usaha pertambangan bahan galian lainnya yang tidak mengandung bijih besi yang belum termasuk kelompok 07291 s.d. 07296, seperti bijih seng platinum dan silicon, serta litium, berilium, magnesium, kalium, kalsium, bismuth, molibdenum, raksa, wolfram, titanium, vanadium, kromit, antimoni, kobalt, tantalum, cadmium, galium, indium, yitrium, magnetit, niobium, zirkonium, ilmenit, khrom, cesium, niobium, hafnium, scandium, ruthenium, selenium, telluride, stronium, germanium, zenotin, dan sejenisnya.",
          
        },
        {
          "number": "7301",
          "name": "PERTAMBANGAN EMAS DAN PERAK",
          "description": "Kelompok ini mencakup usaha pertambangan, pembersihan, dan pemisahan bijih emas dan perak.",
          
        },
        {
          "number": "7309",
          "name": "PERTAMBANGAN BIJIH LOGAM MULIA LAINNYA",
          "description": "Kelompok ini mencakup usaha pertambangan, dan pembersihan bijih logam mulia lainnya, selain bijih logam emas dan perak, seperti bijih platina.",
          
        },
        {
          "number": "8101",
          "name": "PENGGALIAN BATU HIAS DAN BATU BANGUNAN",
          "description": "Kelompok ini mencakup usaha penggalian batu hias dan batu bangunan seperti batu pualam atau marmer, batu andesit (batu gajah, base course), paras, obsidian, dan granit. Termasuk disini kegiatan pemecahan, pemisahan dan pembersihannya.",
          
        },
        {
          "number": "8102",
          "name": "PENGGALIAN BATU KAPUR\\/GAMPING",
          "description": "Kelompok ini mencakup usaha penggalian batu kapur atau gamping. Termasuk disini kegiatan pemecahan, penghancuran, penyaringan dan penghalusannya.",
          
        },
        {
          "number": "8103",
          "name": "PENGGALIAN KERIKIL\\/SIRTU",
          "description": "Kelompok ini mencakup usaha penggalian, pembersihan dan pemisahan kerikil. Hasil dari penggalian kerikil antara lain batu pasir, bongkah keras dan pasir kerikil.",
          
        },
        {
          "number": "8104",
          "name": "PENGGALIAN PASIR",
          "description": "Kelompok ini mencakup usaha penggalian, pembersihan dan pemisahan pasir. Hasil dari penggalian pasir berupa pasir beton, pasir pasang (sedikit mengandung tanah), pasir uruk (banyak mengandung tanah) dan lainnya.",
          
        },
        {
          "number": "8105",
          "name": "PENGGALIAN TANAH DAN TANAH LIAT",
          "description": "Kelompok ini mencakup usaha penggalian tanah dan tanah liat. Kegiatan pembentukan, penghancuran dan penggilingan tanah dan tanah liat dimasukkan dalam kelompok ini. Hasil dari penggalian tanah dan tanah liat\\/lempung antara lain kaolin (china clay), ball clay (firing clay), abu bumi, serpih dan tanah urug.",
          
        },
        {
          "number": "8106",
          "name": "PENGGALIAN GIPS",
          "description": "Kelompok ini mencakup usaha penggalian gips. Termasuk disini kegiatan pembersihan, dan penghalusannya.",
          
        },
        {
          "number": "8107",
          "name": "PENGGALIAN TRAS",
          "description": "Kelompok ini mencakup usaha penggalian tras (batuan gunung api yang mengalami perubahan kimia karena pelapukan dan kondisi air bawah tanah). Termasuk disini kegiatan pembersihannya.",
          
        },
        {
          "number": "8108",
          "name": "PENGGALIAN BATU APUNG",
          "description": "Kelompok ini mencakup usaha penggalian batu apung (jenis batuan yang berwarna terang, mengandung buih yang terbuat dari gelembung berdinding gelas, dan biasanya disebut juga sebagai batuan gelas vulkanik silikat). Termasuk disini kegiatan pembersihannya.",
          
        },
        {
          "number": "16221",
          "name": "INDUSTRI BARANG BANGUNAN DARI KAYU",
          "description": "Kelompok ini mencakup industri komponen bahan bangunan dari kayu yang digunakan utamanya untuk industri konstruksi, seperti balok, kaso, rangka atap yang dihaluskan keempat sisinya; tiang penopang yang dibuat dari kayu secara bilah sambung (finger joint) dengan perekat atau dihubungkan dengan logam (metal); profil dan moulding kayu, daun pintu\\/jendela dan rangkanya (kusen), tangga dan susuran tangga, manik-manik dari kayu dan papan penghias tembok dan papan nama; atap sirap, lantai kayu siap pasang yang terbuat dari kayu solid (solid wood) atau engineering wood; serta pengerjaan kayu untuk bahan bangunan lainnya.",
          
        },
        {
          "number": "16222",
          "name": "INDUSTRI BANGUNAN PRAFABRIKASI DARI KAYU",
          "description": "Kelompok ini mencakup usaha pengerjaan kayu untuk bangunan prafabrikasi. Termasuk industri rumah bergerak dan partisi kayu (tidak termasuk penyekat ruangan yang berdiri sendiri\\/furnitur)",
          
        },
        {
          "number": "16230",
          "name": "INDUSTRI WADAH DARI KAYU",
          "description": "Kelompok ini mencakup usaha pembuatan segala macam wadah atau peti\\/kotak dari kayu untuk pengemasan, seperti kotak kemas, boks, peti kayu, drum kayu dan kemasan sejenisnya dari kayu; palet (pallets), kotak palet dan papan muat dari kayu lainnya; barel, tong, ember dan produk dari kayu lainnya; dan gulungan kawat dari kayu.",
          
        },
        {
          "number": "16291",
          "name": "INDUSTRI BARANG ANYAMAN DARI ROTAN DAN BAMBU",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam tikar, webbing, lampit, tas, topi, tampah, kukusan, bakul, kipas, tatakan, bilik\\/gedek dan sejenisnya yang bahan utamanya dari rotan atau bambu.",
          
        },
        {
          "number": "16292",
          "name": "INDUSTRI BARANG ANYAMAN DARI TANAMAN BUKAN ROTAN DAN BAMBU",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam tikar, keset, tas, topi, tatakan dan kerajinan tangan lainnya yang bahan utamanya bukan rotan dan bambu, seperti pandan, mendong, serat, rumput dan sejenisnya.",
          
        },
        {
          "number": "16293",
          "name": "INDUSTRI KERAJINAN UKIRAN DARI KAYU BUKAN MEBELLER",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang kerajinan dan ukir-ukiran dari kayu, seperti relief, topeng, patung, wayang, vas bunga, pigura dan kap lampu.",
          
        },
        {
          "number": "16294",
          "name": "INDUSTRI ALAT DAPUR DARI KAYU, ROTAN DAN BAMBU",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang kerajinan dan ukir-ukiran dari kayu, seperti relief, topeng, patung, wayang, vas bunga, pigura dan kap lampu.",
          
        },
        {
          "number": "16295",
          "name": "INDUSTRI KAYU BAKAR DAN PELET KAYU",
          "description": "Kelompok ini mencakup industri kayu bakar dan pelet kayu yang dibuat dari serbuk kayu atau bahan substitusi seperti ampas kopi atau biji kedelai yang dipres.",
          
        },
        {
          "number": "16299",
          "name": "INDUSTRI BARANG DARI KAYU, ROTAN, GABUS LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari kayu, rotan dan gabus lainnya yang belum tercakup sebelumnya. Barang-barang dari kayu misalnya alat tenun, gantungan baju, chopstik, tusuk gigi, sempoa (alat hitung), penggaris dan papan tulis. Termasuk juga pembuatan alat- alat kerja dari kayu, seperti plesteran, palu, rumah serutan kayu, gagang pegangan perkakas, palet, papan cucian dan sejenisnya. Barang dari gabus misalnya gabus lembaran, sumbat, piringan, cincin, pelapis, pelampung dan lainnya.",
          
        },
        {
          "number": "17011",
          "name": "INDUSTRI BUBUR KERTAS (PULP)",
          "description": "Kelompok ini mencakup usaha pembuatan bubur kertas dengan bahan dari kayu atau serat lainnya dan atau kertas bekas. Kegiatannya mencakup industri bubur kertas yang diputihkan, separuh putihkan atau yang tidak diputihkan baik melalui proses mekanis, kimia (pelarutan atau non pelarutan), maupun semi kimia, industri bubur kertas cotton-linters dan penghilangan tinta dan industri bubur kertas dari kertas bekas.",
          
        },
        {
          "number": "17012",
          "name": "INDUSTRI KERTAS BUDAYA",
          "description": "Kelompok ini mencakup usaha pembuatan kertas koran dan kertas tulis cetak.",
          
        },
        {
          "number": "17013",
          "name": "INDUSTRI KERTAS BERHARGA",
          "description": "Kelompok ini mencakup usaha pembuatan kertas bandrol, bank notes, cheque paper, security paper, watermark paper, meterai, perangko dan sejenisnya.",
          
        },
        {
          "number": "17014",
          "name": "INDUSTRI KERTAS KHUSUS",
          "description": "Kelompok ini mencakup usaha pembuatan kertas khusus, seperti cardiopan, kertas litmus\\/lakmus, metalic paper, acid proof paper, kertas pola, kertas tersalut, kertas celopan dan sejenisnya. Pengerjaan kertas yang melapisi dengan segala cara, seperti coating, glazing, gumming, dan laminating serta pembuatan kertas karbon dan stensil dimasukkan dalam kelompok 17099, jika dalam bentuk potongan siap dijual ke konsumen. Pembuatan kertas fotografi dimasukkan dalam kelompok 20299. Pembuatan kertas penggosok\\/amplas (abrasive paper) dimasukkan dalam kelompok 23990.",
          
        },
        {
          "number": "17019",
          "name": "INDUSTRI KERTAS LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan kertas magnetik, kertas kerut (crep) dan gumpalan selulosa dan webs serat selulosa.",
          
        },
        {
          "number": "17021",
          "name": "INDUSTRI KERTAS DAN PAPAN KERTAS BERGELOMBANG",
          "description": "Kelompok ini mencakup usaha pembuatan kertas konstruksi (kertas isolasi, condensor, roofing board, building board dan lain-lain), kertas bungkus dan pengepakan (kraftliner, medium liner\\/corrugating medium, ribbed kraft paper\\/kertas payung, kraft paper), board (post card karthotek, kertas londen, triplex, multiplex, bristol, straw board, chip board, duplex).",
          
        },
        {
          "number": "17022",
          "name": "INDUSTRI KEMASAN DAN KOTAK DARI KERTAS DAN KARTON",
          "description": "Kelompok ini mencakup usaha pembuatan segala macam kemasan dan kotak dari kertas\\/karton yang digunakan untuk pembungkus\\/pengepakan, termasuk juga pembuatan kotak untuk rokok dan barang lainnya. Misalnya kemasan dan kotak dari kertas dan papan kertas bergelombang, kemasan dan kotak papan kertas yang dapat dilipat, kemasan dan kotak dari papan padat, kemasan dan kotak lain dari kertas dan papan kertas, sak dan kantong kertas dan kotak file kantor dan barang sejenisnya.",
          
        },
        {
          "number": "17091",
          "name": "INDUSTRI KERTAS TISSUE",
          "description": "Kelompok ini mencakup usaha pembuatan kertas untuk kertas rumah tangga, kertas kebersihan pribadi dan barang kertas kapas selulosa, seperti tisu pembersih, facial tissue, toilet tissue, lens tissue, sapu tangan, handuk, serbet, kertas toilet, napkin, napkin untuk bayi, sanitary napkin (pembalut wanita), tampon, popok dewasa, dan napkin untuk cangkir, piring dan baki dan usaha pembuatan kertas kapas dan barang dari kertas kapas, seperti handuk\\/lap, kertas sigaret dan cork tipping paper.",
          
        },
        {
          "number": "17099",
          "name": "INDUSTRI BARANG DARI KERTAS DAN PAPAN KERTAS LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan barang dari kertas dan papan kertas atau karton yang belum tercakup dalam subgolongan lain, seperti industri kertas tulis dan kertas cetak siap pakai, industri kertas printout komputer siap pakai, industri kertas kopi siap pakai, industri kertas tempel atau berperekat siap pakai, industri buku register, buku akuntansi, binder, album dan alat-alat tulis baik yang bersifat komersil atau untuk pendidikan sejenisnya, industri kotak, kantong, dompet dan buku catatan yang mengandung susunan kertas, industri wallpaper (kertas dinding) dan jenis pelapis dinding lainnya, termasuk wallpaper berlapis vinyl dan tekstil, industri label, industri kertas filter dan papan kertas filter, industri gulungan kertas dan papan kertas, gelendong kertas dan papan kertas dan sebagainya, industri tempat telur dan barang lainnya yang dibuat dari cetakan bubur kertas dan sebagainya, dan industri kertas kreasi baru. Termasuk di sini pengerjaan kertas dan karton dengan segala cara, seperti coating, glazing, gumming, laminating, pembuatan kertas karbon dan kertas stensil sheet dalam bentuk potongan siap dijual ke konsumen. Termasuk juga pembuatan kertas EKG dan pembuatan alat tulis kantor (stationeries) yang tidak dicetak, seperti amplop, kertas surat, kertas pembersih, dinner ware dari kertas dan sejenisnya. Pembuatan alat tulis kantor dan kartu yang dicetak dimasukkan dalam kelompok 18111.",
          
        },
        {
          "number": "18111",
          "name": "INDUSTRI PENCETAKAN UMUM",
          "description": "Kelompok ini mencakup kegiatan industri percetakan surat kabar, majalah dan periodik lainnya seperti tabloid, surat kabar, majalah, jurnal, pamflet, buku dan brosur, naskah musik, peta, atlas, poster, katalog periklanan, prospektus dan iklan cetak lainnya, buku harian, kalender, formulir bisnis dan barang-barang cetakan komersial lainnya, kertas surat atau alat tulis pribadi dan barang-barang cetakan lainnya hasil mesin cetak, offset, klise foto, fleksografi dan sejenisnya, mesin pengganda, printer komputer, huruf timbul dan sebagainya termasuk alat cetak cepat; pencetakan secara langsung tanpa adanya media perantara ke bahan tekstil, plastik, kaca, logam, kayu dan keramik, kecuali pencetakan tabir sutera pada kain dan pakaian jadi; dan pencetakan pada label atau tanda pengenal (litografi, pencetakan tulisan di makam, pencetakan fleksografi dan sebagainya). Termasuk pula mencetak ulang melalui komputer, mesin stensil dan sejenisnya. Barang cetakan ini biasanya merupakan hak cipta. Industri label kertas atau karton termasuk kelompok 17099.",
          
        },
        {
          "number": "18112",
          "name": "INDUSTRI PENCETAKAN KHUSUS",
          "description": "Kelompok ini mencakup industri pencetakan perangko pos, perangko perpajakan, dokumen, cek dan kertas rahasia lainnya, materai, uang kertas, blangko cek, giro, surat andil, obligasi surat saham, surat berharga lainnya, paspor, tiket pesawat terbang dan cetakan khusus lainnya.",
          
        },
        {
          "number": "18113",
          "name": "INDUSTRI PENCETAKAN 3D PRINTING",
          "description": "Kelompok ini mencakup industri percetakan tiga dimensi (3D Printing) untuk berbagai keperluan dari polimer, plastik, clay, bijih logam dan lainnya.",
          
        },
        {
          "number": "18120",
          "name": "KEGIATAN JASA PENUNJANG PENCETAKAN",
          "description": "Kelompok ini mencakup usaha penjilidan lembar cetakan, misalnya menjadi buku, brosur, majalah, katalog dan sebagainya, dengan melipat, memasang, menjahit, merekatkan, menyatukan, penjilidan dengan perekat, perapihan dan gold stamping; produksi composed type, plates atau cylinders, penjilidan buku; komposisi, pemasangan huruf, pemasangan foto, input data mencakup scanning dan pengenalan karakter atau huruf optik, penyusunan elektronik; pembuatan gambar mencakup pemasangan image atau gambar (untuk proses pencetakan mesin cetak dan offset); pengukiran atau sketsa cylinders untuk gravure; proses pembuatan gambar langsung di atas pelat (temasuk pelat fotopolimer); pembuatan gambar untuk pencetakan dan pengecapan relief; pembuatan cetakan untuk percobaan; pekerjaan artistik mencakup penyiapan batu litho dan woodblocks (produksi batu lithographic, untuk digunakan dalam kegiatan percetakan di unit lain); pembuatan barang reprografi; desain barang cetakan seperti sketsa, layout, barang contoh dan sebagainya; dan kegiatan grafis lainnya seperti die-sinking dan die-stamping, penggandaan huruf braille, pemukulan dan pengeboran, penyulaman timbul, pemvernisan dan pelapisan, penyisipan dan pelipatan.",
          
        },
        {
          "number": "18201",
          "name": "REPRODUKSI MEDIA REKAMAN SUARA DAN PIRANTI LUNAK",
          "description": "Kelompok ini mencakup usaha reproduksi dari kopi master pelat atau piringan gramofon, compact disk atau CD dan pita yang berisikan musik atau rekaman suara (audio) dan reproduksi dari kopi master perangkat lunak atau software dan data pada disk dan pita magnetik. Pembuatan piringan hitam kosong, pita kaset kosong, pita komputer dan disket kosong untuk merekam data dimasukkan dalam kelompok 26800. Industri rekaman suara di piringan hitam, pita kaset dan sejenisnya dimasukkan dalam kelompok 59201.",
          
        },
        {
          "number": "18202",
          "name": "REPRODUKSI MEDIA REKAMAN FILM DAN VIDEO",
          "description": "Kelompok ini mencakup usaha reproduksi dari kopi master rekaman, compact disk atau CD dan tape yang berisikan gambar bergerak atau film dan rekaman video lainnya. Penerbitan rekaman film dan video dimasukkan dalam kelompok 59131 dan 59132.",
          
        },
        {
          "number": "19100",
          "name": "INDUSTRI PRODUK DARI BATU BARA",
          "description": "Kelompok ini mencakup usaha industri pengolahan gas, kokas dari batu bara, termasuk juga destilasi batu bara yang bukan merupakan bagian pabrik gas atau besi dan baja, atau destilasi batu bara yang menjadi bagian pabrik besi dan baja yang pembukuannya dapat dipisahkan. Termasuk pengoperasian tungku kokas, produksi kokas dan semi kokas, produksi pitch kokas, produksi kokas mentah dan ter lignit dan pengaglomerasian kokas. Usaha destilasi gas oleh pabrik gas yang penyalurannya melalui pipa saluran dimasukkan dalam kelompok 35202. Usaha pembuatan gas dan kokas yang tergabung dalam kegiatan pengolahan besi dan baja dimasukkan dalam kelompok 24101 sampai dengan 24103.",
          
        },
        {
          "number": "19211",
          "name": "INDUSTRI BAHAN BAKAR DARI PEMURNIAN DAN PENGILANGAN MINYAK BUMI",
          "description": "Kelompok ini mencakup usaha pemurnian dan pengilangan minyak bumi yang menghasilkan bahan bakar seperti Avigas, Avtur, Gasoline, Minyak Tanah atau Kerosin, Minyak Solar, Minyak Diesel, Minyak Bakar atau Bensin, Solvent\\/Pelarut, termasuk LPG dari hasil pengilangan minyak bumi.",
          
        },
        {
          "number": "19212",
          "name": "INDUSTRI PEMBUATAN MINYAK PELUMAS",
          "description": "Kelompok ini mencakup usaha pembuatan minyak pelumas, oli dan gemuk yang berbahan dasar minyak.",
          
        },
        {
          "number": "19213",
          "name": "INDUSTRI PENGOLAHAN KEMBALI MINYAK PELUMAS BEKAS",
          "description": "Kelompok ini mencakup usaha pengolahan kembali minyak pelumas bekas untuk dapat digunakan sebagai minyak pelumas.",
          
        },
        {
          "number": "19214",
          "name": "INDUSTRI PENGOLAHAN MINYAK PELUMAS BEKAS MENJADI BAHAN BAKAR",
          "description": "Kelompok ini mencakup usaha pengolahan kembali minyak pelumas bekas untuk dapat digunakan sebagai bahan bakar minyak.",
          
        },
        {
          "number": "19291",
          "name": "INDUSTRI PRODUK DARI HASIL KILANG MINYAK BUMI",
          "description": "Kelompok ini mencakup usaha industri pengolahan aspal\\/ter, bitumen dan lilin (dapat digunakan untuk lapisan jalan, atap, kayu, kertas dan sebagainya) serta Petroleum Coke. Termasuk industri produk untuk industri petrokimia, industri bermacam-macam produk, seperti white spirit, vaseline, lilin parafin, jeli minyak bumi (petroleum jelly), industri briket minyak bumi dan pencampuran biofuel, seperti pencampuran alkohol dengan minyak bumi (misalnya gasohol).",
          
        },
        {
          "number": "19292",
          "name": "INDUSTRI BRIKET BATU BARA",
          "description": "Kelompok ini mencakup usaha pembuatan briket dari batu bara atau lignit, baik di lokasi penambangan maupun di luar lokasi penambangan. Termasuk pula pembuatan briket yang menggunakan batu bara atau lignit yang dibeli dari pihak lain.",
          
        },
        {
          "number": "20111",
          "name": "INDUSTRI KIMIA DASAR ANORGANIK KHLOR DAN ALKALI",
          "description": "Kelompok ini mencakup usaha industri kimia dasar yang menghasilkan bahan kimia khlor dan alkali, seperti soda kostik, soda abu, natrium khlorida, kalium hidroksida dan senyawa khlor lainnya. Termasuk juga usaha industri yang menghasilkan logam alkali, seperti lithium, natrium dan kalium, serta senyawa alkali lainnya. Industri pembuatan garam dapur\\/konsumsi dimasukkan dalam kelompok 10774.",
          
        },
        {
          "number": "20112",
          "name": "INDUSTRI KIMIA DASAR ANORGANIK GAS INDUSTRI",
          "description": "Kelompok ini mencakup usaha industri kimia dasar yang menghasilkan bahan kimia gas industri, seperti zat asam, zat lemas, zat asam arang, amoniak dan dry ice. Termasuk juga usaha industri kimia dasar yang menghasilkan gas mulia, seperti helium, neon, argon dan radon; serta jenis-jenis gas industri lainnya.",
          
        },
        {
          "number": "20113",
          "name": "INDUSTRI KIMIA DASAR ANORGANIK PIGMEN",
          "description": "Kelompok ini mencakup usaha industri kimia dasar yang menghasilkan bahan anorganik pigment, seperti meni merah, chrome yellow, zinc yellow, barium sulphate, pigmen serbuk aluminium, oker dan pigment dengan dasar titanium.",
          
        },
        {
          "number": "20114",
          "name": "INDUSTRI KIMIA DASAR ANORGANIK LAINNYA",
          "description": "Kelompok ini mencakup usaha industri kimia dasar anorganik yang belum tercakup dalam golongan industri kimia dasar anorganik di atas, seperti fosfor dengan turunannya, belerang dengan turunannya, nitrogen dengan turunannya, dan industri kimia dasar yang menghasilkan senyawa halogen dengan turunannya, logam kecuali logam alkali, senyawa oksida kecuali pigmen. Termasuk industri bahan baku untuk bahan peledak.",
          
        },
        {
          "number": "20115",
          "name": "INDUSTRI KIMIA DASAR ORGANIK YANG BERSUMBER DARI HASIL PERTANIAN",
          "description": "Kelompok ini mencakup usaha industri kimia organik yang menghasilkan bahan kimia dari hasil pertanian termasuk kayu, getah (gum), minyak nabati industri (IVO) dengan produk antara lain: asam alufamat, asam asetat, asam citrat, asam benzoat, fatty acid, fatty alcohol, glycerine, furfural, sarbitol, dan bahan kimia organik lainnya dari hasil pertanian.Kelompok ini juga mencakup pembuatan biofuel, arang kayu, arang batok kelapa dengan produk: biofuel cair (biodiesel dan bioethanol anhidrat), biohidrokarbon (minyak diesel nabati, minyak bensin nabati, minyak avtur\\/jet fuel nabati) dan bahan kimia resin\\/damar buatan berbasis bahan terbarukan (biobenzene, biotoluene dan bioxylene dan biopolymer - bioplastik dari bahan terbarukan).",
          
        },
        {
          "number": "20116",
          "name": "INDUSTRI KIMIA DASAR ORGANIK UNTUK BAHAN BAKU ZAT WARNA DAN PIGMEN, ZAT WARNA DAN PIGMEN",
          "description": "Kelompok ini mencakup usaha industri kimia dasar yang menghasilkan bahan kimia organik, zat warna dan pigment dengan hasil antara siklisnya, seperti hasil antara phenol dan turunannya, zat warna tekstil dan zat warna untuk makanan dan obat-obatan.",
          
        },
        {
          "number": "20117",
          "name": "INDUSTRI KIMIA DASAR ORGANIK YANG BERSUMBER DARI MINYAK BUMI, GAS ALAM DAN BATU BARA",
          "description": "Kelompok ini mencakup usaha industri kimia dasar organik yang menghasilkan bahan kimia, yang bahan bakunya berasal dari minyak bumi dan gas bumi maupun batu bara, seperti ethylene, propilene, benzena, toluena, caprolactam termasuk pengolahan coaltar.",
          
        },
        {
          "number": "20118",
          "name": "INDUSTRI KIMIA DASAR ORGANIK YANG MENGHASILKAN BAHAN KIMIA KHUSUS",
          "description": "Kelompok ini mencakup usaha industri kimia dasar organik yang menghasilkan bahan kimia khusus, seperti bahan kimia khusus untuk minyak dan gas bumi, pengolahan air, karet, kertas, konstruksi, otomotif, bahan tambahan makanan (food additive), tekstil, kulit, elektronik, katalis, minyak rem (brake fluid), serta bahan kimia khusus lainnya.",
          
        },
        {
          "number": "20119",
          "name": "INDUSTRI KIMIA DASAR ORGANIK LAINNYA",
          "description": "Kelompok ini mencakup usaha industri Kimia Dasar Organik yang belum tercakup dalam golongan Industri Kimia Dasar Organik, seperti plasticizer, bahan untuk bahan baku pestisida, zat aktif permukaan, bahan pengawet.",
          
        },
        {
          "number": "20121",
          "name": "INDUSTRI PUPUK ALAM\\/NON SINTETIS HARA MAKRO PRIMER",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk hara makro primer jenis pupuk alam seperti pupuk fosfat alam (pupuk alam anorganik).",
          
        },
        {
          "number": "20122",
          "name": "INDUSTRI PUPUK BUATAN TUNGGAL HARA MAKRO PRIMER",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk hara makro primer jenis pupuk buatan tunggal seperti urea, ZA, TSP, DSP dan Kalsium Sulfat. Termasuk juga pembuatan gas CO2, asam sulfat, amoniak, asam fosfat, asam nitrat dan lain-lain yang berkaitan dengan pembuatan pupuk dan tidak dapat dilaporkan secara terpisah.",
          
        },
        {
          "number": "20123",
          "name": "INDUSTRI PUPUK BUATAN MAJEMUK HARA MAKRO PRIMER",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk yang mengandung minimal 2 unsur hara makro primer melalui proses reaksi kimia seperti Mono Amonium Fosfat (pupuk buatan majemuk nitrogen fosfat), Kalium Amonium Khlorida (pupuk buatan majemuk nitrogen kalium), Kalium Metafosfat (pupuk buatan majemuk fosfat kalium) dan Amonium Kalium Fosfat (pupuk buatan majemuk nitrogen fosfat kalium). Total kandungan unsur hara makro primer minimal 10 persen sampai dengan 30 persen.",
          
        },
        {
          "number": "20124",
          "name": "INDUSTRI PUPUK BUATAN CAMPURAN HARA MAKRO PRIMER",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk yang mengandung minimal 2 unsur hara makro primer melalui pencampuran pupuk secara fisik tanpa merubah sifat kimia dan sifat pupuk aslinya. Total kandungan unsur hara makro primer minimal 10 persen.",
          
        },
        {
          "number": "20125",
          "name": "INDUSTRI PUPUK HARA MAKRO SEKUNDER",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk yang mengandung unsur hara makro sekunder jenis Ca, Mg, dan S seperti Kiserit (Mg, S), Oksida Magnio (Mg).",
          
        },
        {
          "number": "20126",
          "name": "INDUSTRI PUPUK HARA MIKRO",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk yang mengandung unsur hara mikro seperti Seng, Besi, Tembaga, Mangan, Boron dan Molybdenum.",
          
        },
        {
          "number": "20127",
          "name": "INDUSTRI PUPUK PELENGKAP",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk yang mengandung mikro organisme atau formula pupuk yang berasal dari hasil samping industri yang mempunyai kandungan hara mikro sebagai komponen utama serta mengandung total unsur hara makro primer dalam jumlah rendah sampai sedang (kurang dari 30 persen).",
          
        },
        {
          "number": "20128",
          "name": "INDUSTRI MEDIA TANAM",
          "description": "Kelompok ini mencakup usaha pembuatan media tanam dengan tanah gemuk\\/gambut sebagai unsur pokok. Termasuk juga usaha pembuatan media tanam campuran dari tanah alami, pasir, tanah liat dan mineral.",
          
        },
        {
          "number": "20129",
          "name": "INDUSTRI PUPUK LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan pupuk yang belum termasuk dalam kelompok manapun.",
          
        },
        {
          "number": "20131",
          "name": "INDUSTRI DAMAR BUATAN (RESIN SINTETIS) DAN BAHAN BAKU PLASTIK",
          "description": "Kelompok ini mencakup usaha pembuatan damar buatan dan bahan baku plastik (bijih plastik murni), seperti alkid, poliester, aminos, poliamid, epoksid, silikon, poliuretan, polietilen (PE), polipropilen (PP), polistiren, polivinil klorid, selulosa asetat dan selulosa nitrat. Pengolahan lanjutan dari damar buatan dan bahan plastik yang dibeli untuk menghasilkan barang dari bahan baku tersebut, seperti barang plastik, film dan lembaran film yang belum peka terhadap sinar dimasukkan dalam kelompok 26800.",
          
        },
        {
          "number": "20132",
          "name": "INDUSTRI KARET BUATAN",
          "description": "Kelompok ini mencakup usaha pembuatan karet buatan, seperti styrene butadiene rubber (SBR), polychloroprene (neoprene), acrylonitrile butadine rubber (nitrile rubber), silicone rubber (polysiloxane) dan isoprene rubber.",
          
        },
        {
          "number": "20211",
          "name": "INDUSTRI BAHAN BAKU PEMBERANTAS HAMA (BAHAN AKTIF)",
          "description": "Kelompok ini mencakup usaha pembuatan bahan baku untuk pestisida, seperti buthyl phenyl methyl carbamat (BPMC), methyl isopropyl carbamat (MIPC), diazinon, carbofuran, glyphosate, monocrotophos, arsentrioxyde dan copper sulphate.",
          
        },
        {
          "number": "20212",
          "name": "INDUSTRI PEMBERANTAS HAMA (FORMULASI)",
          "description": "Kelompok ini mencakup usaha pengolahan bahan aktif menjadi pemberantas hama (pestisida) dalam bentuk siap dipakai seperti insektisida, fungisida, rodentisida, herbisida, nematisida, molusida dan akarisida. Termasuk juga pembuataan disinfektan untuk pertanian dan kegunaan lainnya.",
          
        },
        {
          "number": "20213",
          "name": "INDUSTRI ZAT PENGATUR TUMBUH",
          "description": "Kelompok ini mencakup usaha pengolahan bahan kimia menjadi zat pengatur tumbuh, seperti atonik, ethrel, cepha, dekamon, mixtalol, hidrasil dan sitozim.",
          
        },
        {
          "number": "20214",
          "name": "INDUSTRI BAHAN AMELIORAN (PEMBENAH TANAH)",
          "description": "Kelompok ini mencakup usaha pembuatan bahan amelioran (pembenah tanah) seperti kapur pertanian, kapur fosfat, dolomit, zeolit dan bahan amelioran yang mengandung bahan organik.",
          
        },
        {
          "number": "20221",
          "name": "INDUSTRI CAT DAN TINTA CETAK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam cat, seperti cat dasar, cat logam, cat kayu, cat tembok, cat kapal, cat epoksi dan email dan lacquer. Termasuk Industri pigmen dan bahan celup olahan, pewarna dan opacifier (pembuat tidak jelas), industri email pengkilap dan pelapis dan preparat sejenisnya, tinta cetak dan cat untuk melukis.",
          
        },
        {
          "number": "20222",
          "name": "INDUSTRI PERNIS (TERMASUK MASTIK)",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam pernis, seperti pelarut komposit organik dan tiner dan penghapus cat atau pernis. Termasuk Mastik.",
          
        },
        {
          "number": "20223",
          "name": "INDUSTRI LAK",
          "description": "Kelompok ini mencakup usaha pembuatan lak. Termasuk industri dempul dan plamur atau senyawa dempul dan dempul non refraktori atau bahan penutup permukaan sejenis.",
          
        },
        {
          "number": "20231",
          "name": "INDUSTRI SABUN DAN BAHAN PEMBERSIH KEPERLUAN RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha pembuatan sabun (selain sabun yang tercakup dalam kelompok 20232) dalam berbagai bentuk, baik padat, bubuk, cream atau cair, industri pembuatan deterjen dan bahan pembersih rumah tangga lainnya, seperti pembersih lantai organik; kertas, gumpalan kapas, laken dan sebagainya yang dilapisi dengan sabun atau deterjen seperti tisue basah; gliserol mentah; pembersih permukaan, seperti bubuk pencuci baik padat maupun cair dan deterjen, preparat pencuci piring dan pelembut bahan pakaian; produk pembersih dan pengkilap, seperti pengharum dan deodorant ruangan, lilin buatan dan lilin olahan (wax), pengilap dan krim untuk barang dari kulit, pengilap dan krim untuk kayu, pengilap kaca dan logam, pasta dan bubuk gosok, termasuk kertas, gumpalan dan lain-lain yang dilapisi dengan pasta dan bubuk penggosok.",
          
        },
        {
          "number": "20232",
          "name": "INDUSTRI KOSMETIK UNTUK MANUSIA, TERMASUK PASTA GIGI",
          "description": "Kelompok ini mencakup usaha pembuatan kosmetik untuk manusia, seperti tata rias muka, wangi-wangian atau parfum, produk perawatan rambut (shampo, obat pengeriting dan pelurus rambut, dan lain-lain), produk perawatan kuku atau menikur dan pedikur, produk perawatan kulit (krim atau lotion pencegah terbakar sinar matahari dan krim atau lotion agar kulit terlihat cokelat setelah berjemur), produk untuk kebersihan badan (sabun kosmetik, sabun mandi, sabun antiseptik, external intimate hygiene, deodorant, garam mandi dan lain-lain), produk untuk bercukur. Kosmetik dekoratif seperti tata rias muka, tata rias mata, wangi-wangian atau parfum, tata rias kuku dan tata rias rambut termasuk pewarna rambut. Termasuk pasta gigi dan produk untuk menjaga higienitas mulut, termasuk produk kosmetik pemutih gigi.",
          
        },
        {
          "number": "20233",
          "name": "INDUSTRI KOSMETIK UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha pembuatan kosmetik untuk hewan, termasuk parfum, shampo, sabun, bedak, krim atau lotion, dan lainnya.",
          
        },
        {
          "number": "20234",
          "name": "INDUSTRI PEREKAT GIGI",
          "description": "Kelompok ini mencakup usaha pembuatan produk perekat gigi.",
          
        },
        {
          "number": "20291",
          "name": "INDUSTRI PEREKAT\\/LEM",
          "description": "Kelompok ini mencakup usaha pembuatan perekat\\/lem untuk keperluan industri atau alat rumah tangga yang berasal dari tanaman, hewan atau plastik, seperti starch, perekat dari tulang, cellulose ester dan ether, phenol formaldehyde, urea formaldehyde, melamine formaldehyde dan perekat epoksi.",
          
        },
        {
          "number": "20292",
          "name": "INDUSTRI BAHAN PELEDAK",
          "description": "Kelompok ini mencakup usaha pembuatan barang peledak, seperti mesiu, dinamit, detonator, kembang api, petasan, mercuri fulminat dan bahan pendorong roket.",
          
        },
        {
          "number": "20293",
          "name": "INDUSTRI TINTA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam tinta, seperti tinta tulis dan tinta khusus.",
          
        },
        {
          "number": "20294",
          "name": "INDUSTRI MINYAK ATSIRI",
          "description": "Kelompok ini mencakup usaha pembuatan minyak atsiri, seperti minyak jahe, minyak keningar, minyak ketumbar, minyak cengkeh, minyak kapol, minyak pala, minyak melati, minyak kenanga, minyak mawar, minyak akar wangi, minyak sereh, minyak nilam, minyak cendana, minyak kayu putih, minyak permen, minyak rempah-rempah, minyak jarak dan minyak dari rumput-rumputan\\/semak, daun dan kayu yang belum termasuk kelompok manapun.",
          
        },
        {
          "number": "20295",
          "name": "INDUSTRI KOREK API",
          "description": "Kelompok ini mencakup usaha pembuatan korek api dalam bentuk batangan (matches). Pembuatan batu korek api (flint) dimasukkan dalam kelompok 23990. Industri korek api dari logam (lighter) dimasukkan dalam kelompok 32909.",
          
        },
        {
          "number": "20296",
          "name": "INDUSTRI MINYAK ATSIRI RANTAI TENGAH",
          "description": "Kelompok ini mencakup usaha pengolahan lebih lanjut dari minyak atsiri yang masuk pada KBLI 20294 menjadi aneka produk hilir minyak atsiri untuk bahan baku produksi bahan perasa (flavour) dan produksi bahan perisa\\/wewangian (fragrance), termasuk untuk produksi aneka bahan kimia yang berbasis pengolahan hilir minyak atsiri. Termasuk didalamnya industri bioaditif bahanbakar minyak dari minyak atsiri. Contoh minyak atsiri rantai tengah\\/hilir yaitu turunan minyak cengkeh antara lain carryophyllene, eugenol, methyl eugenol, vaniline; turunan minyak sereh wangi antara lain citronellol, geraniol, citronellal, rodinol, dsb.",
          
        },
        {
          "number": "20299",
          "name": "INDUSTRI BARANG KIMIA LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan bermacam-macam bahan-bahan dan barang-barang kimia yang belum diklasifikasikan dalam kelompok manapun seperti gelatin, bahan isolasi panas selain plastik dan karet, bahan semir\\/polish. Termasuk juga pembuatan film yang peka terhadap cahaya dan kertas fotografi.",
          
        },
        {
          "number": "20301",
          "name": "INDUSTRI SERAT\\/BENANG\\/STRIP FILAMEN BUATAN",
          "description": "Kelompok ini mencakup usaha pembuatan serat, benang, atau strip filamen buatan dalam bentuk gulungan tow, seperti poliamida, poliester, polipropilena, akrilik, selulosa asetat dan sebagainya untuk diolah lebih lanjut dalam industri tekstil.",
          
        },
        {
          "number": "20302",
          "name": "INDUSTRI SERAT STAPEL BUATAN",
          "description": "Kelompok ini mencakup usaha pembuatan serat stapel buatan, seperti poliamida, poliester, rayon viskosa, akrilik, selulosa asetat dan sebagainya (kecuali serat gelas dan serat optik) untuk diolah lebih lanjut dalam industri tekstil. Serat stapel adalah serat buatan yang dipotong pendek-pendek.",
          
        },
        {
          "number": "21011",
          "name": "INDUSTRI BAHAN FARMASI UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha pembuatan dan pengolahan bahan obat, bahan pembantu dan bahan pengemas untuk manusia, yang berasal dari bahan kimia, bahan alam, hewan dan tumbuh-tumbuhan termasuk yang berasal dari hasil biologis, seperti bahan obat-obatan, seperti antisera dan fraksi darah lainnya, vaksin dan preparat homeopatik. Termasuk industri substansi aktif obat (antibiotik, vitamin, salisilik dan asam o-asetilsalsilik dan lain-lain) untuk bahan farmakologi dalam industri obat-obatan, pengolahan darah, industri gula murni kimia dan pengolahan kelenjar dan industri ekstraksi kelenjar dan lain-lain.",
          
        },
        {
          "number": "21012",
          "name": "INDUSTRI PRODUK FARMASI UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha pembuatan dan pengolahan obat-obatan, suplemen kesehatan\\/makanan, yang berbentuk jadi (sediaan) untuk manusia, misalnya dalam bentuk tablet, kapsul, salep, bubuk, larutan, larutan parenteral dan suspensi, obat kontrasepsi hormonal, industri produksi radiofarmaka, dan industri farmasi bioteknologi.",
          
        },
        {
          "number": "21013",
          "name": "INDUSTRI PRODUK FARMASI UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha pembuatan, pengolahan dan pengemasan ulang obat-obatan yang berbentuk jadi (sediaan) untuk hewan, misalnya dalam bentuk serbuk, tablet, kapsul, salep, larutan, suspensi, aerosol dan lainnya. Termasuk industri produk benang bedah, industri alat-alat diagnosa medis, industri produksi radioisotop untuk radiofarmaka, industri farmasi bioteknologi dan industri pembalut medis, perban dan sejenisnya yang dikhususkan untuk hewan.",
          
        },
        {
          "number": "21014",
          "name": "INDUSTRI BAHAN FARMASI UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha pembuatan dan pengolahan bahan obat, bahan pembantu dan bahan pengemas untuk hewan, yang berasal dari bahan kimia, bahan alam, hewan dan tumbuh-tumbuhan termasuk yang berasal dari hasil biologis, seperti bahan obat-obatan, seperti antisera dan fraksi darah lainnya, vaksin dan preparat homeopatik. Termasuk industri substansi aktif obat untuk bahan farmakologi dalam industri obat-obatan, seperti antibiotik, vitamin, salisilik dan asam o-asetilsalsilik dan lain-lain, pengolahan darah, industri gula murni kimia dan pengolahan kelenjar dan industri ekstraksi kelenjar dan lain-lain.",
          
        },
        {
          "number": "21015",
          "name": "INDUSTRI ALAT KESEHATAN DALAM SUBGOLONGAN 2101",
          "description": "Kelompok ini mencakup usaha pembuatan dan pengolahan alat kesehatan terkait diagnosa medis dan produk lainnya dalam subgolongan 2011.Kelompok ini mencakup industri produk kontrasepsi untuk penggunaan eksternal, industri alat-alat diagnosa medis seperti uji kehamilan, dan industri pembalut medis, perban dan sejenisnya dan kapas kosmetik.",
          
        },
        {
          "number": "21021",
          "name": "INDUSTRI BAHAN BAKU OBAT TRADISIONAL UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha pengolahan macam-macam ekstrak dan simplisia, sediaan galenik, bahan tambahan atau bahan lainnya, baik yang berkhasiat maupun yang tidak berkhasiat, yang berubah maupun yang tidak berubah, yang digunakan dalam pengolahan obat tradisional, walaupun tidak semua bahan tersebut masih terdapat di dalam produk ruahan.",
          
        },
        {
          "number": "21022",
          "name": "INDUSTRI PRODUK OBAT TRADISIONAL UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha pengolahan macam-macam produk obat tradisional yang bahannya berasal dari tumbuh-tumbuhan, bahan hewan, bahan mineral, sediaan sarian (galenik), atau campuran dari bahan tersebut yang berbentuk serbuk, rajangan, pil, dodol\\/jenang, pastiles, tablet, kapsul, cairan, larutan, emulsi dan suspensi, salep, krim dan gel, supositoria. Termasuk industri minuman jamu dan suplemen kesehatan\\/makanan bukan produk farmasi.",
          
        },
        {
          "number": "21023",
          "name": "INDUSTRI PRODUK OBAT TRADISIONAL UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha pengolahan macam-macam produk obat tradisional atau obat alami untuk hewan yang bahannya berasal antara lain dari tumbuh-tumbuhan, bahan hewan, bahan mineral, sediaan sarian (galenik), atau campuran dari bahan tersebut yang berbentuk serbuk, rajangan, pil, dodol\\/jenang, pastiles, tablet, kapsul, cairan, larutan, emulsi dan suspensi, salep, krim dan gel, supositoria.",
          
        },
        {
          "number": "21024",
          "name": "INDUSTRI BAHAN BAKU OBAT TRADISIONAL UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha pengolahan macam-macam ekstrak dan simplisia, sediaan galenik, bahan tambahan atau bahan lainnya, baik yang berkhasiat maupun yang tidak berkhasiat, yang berubah maupun yang tidak berubah, yang digunakan dalam pengolahan obat tradisional untuk hewan.",
          
        },
        {
          "number": "22111",
          "name": "INDUSTRI BAN LUAR DAN BAN DALAM",
          "description": "Kelompok ini mencakup usaha pembuatan ban luar dan ban dalam dengan bahan utamanya dari karet alam ataupun karet buatan untuk semua jenis kendaraan bermotor, sepeda, kendaraan angkutan lainnya dan peralatan yang memakai ban.",
          
        },
        {
          "number": "11051",
          "name": "INDUSTRI AIR KEMASAN",
          "description": "Kelompok ini mencakup usaha industri yang melakukan proses pengolahan air baku menjadi air minum yang dikemas dan siap dikonsumsi langsung, mengandung mineral ataupun tidak, dengan atau tanpa penambahan gas seperti O2 ataupun CO2, dengan atau tanpa penambahan mineral.",
          
        },
        {
          "number": "11052",
          "name": "INDUSTRI AIR MINUM ISI ULANG",
          "description": "Kelompok ini mencakup industri air minum yang dapat langsung dikonsumsi berupa depot air isi ulang baik yang dioperasikan manual oleh manusia maupun mesin pengisi otomatis (automatic tap water machine) dengan menggunakan wadah dan tutup tanpa merk yang dapat disediakan oleh depot dan\\/atau dibawa sendiri oleh konsumen.",
          
        },
        {
          "number": "11090",
          "name": "INDUSTRI MINUMAN LAINNYA",
          "description": "Kelompok ini mencakup usaha industri minuman lainnya yang tidak termasuk dalam subgolongan 1101 s.d 1105, seperti minuman penyegar, nira, air tebu, air kelapa, minuman sereal panas, serbuk sekoteng, dan serealia celup.",
          
        },
        {
          "number": "12011",
          "name": "INDUSTRI SIGARET KRETEK TANGAN",
          "description": "Kelompok ini mencakup usaha pembuatan kretek yang mengandung tembakau rajangan, krosok rajang, cengkeh rajang, dan tambahan bahan- bahan perisa, yang menghasilkan campuran beraroma khas, dilinting dengan berbagai bahan pembungkus (ambri\\/papir\\/tipping). Termasuk industri kretek tangan, kretek tangan dan kretek tangan filter.",
          
        },
        {
          "number": "12012",
          "name": "INDUSTRI ROKOK PUTIH",
          "description": "Kelompok ini mencakup usaha pembuatan rokok putih yang tidak mengandung komponen cengkeh.",
          
        },
        {
          "number": "12013",
          "name": "INDUSTRI SIGARET KRETEK MESIN",
          "description": "Kelompok ini mencakup usaha pembuatan kretek yang mengandung tembakau rajangan, krosok rajang, cengkeh rajang, dan tambahan bahan- bahan perisa, yang menghasilkan campuran beraroma khas, dilinting dengan berbagai bahan pembungkus (ambri\\/papir\\/tipping). Termasuk industri kretek mesin.",
          
        },
        {
          "number": "12019",
          "name": "INDUSTRI ROKOK LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan rokok lainnya, selain kretek atau rokok putih, seperti cerutu, rokok kelembak menyan dan rokok klobot\\/kawung, tembakau iris (TIS), cerutek, dan hasil pengolahan tembakau lainnya (HPTL). Termasuk industri tembakau pipa, tembakau yang dikunyah dan tembakau sedot (snuff).",
          
        },
        {
          "number": "12091",
          "name": "INDUSTRI PENGERINGAN DAN PENGOLAHAN TEMBAKAU",
          "description": "Kelompok ini mencakup usaha pengeringan daun tembakau dengan pengasapan atau dengan cara lain termasuk juga usaha perajangan daun tembakau.",
          
        },
        {
          "number": "12099",
          "name": "INDUSTRI BUMBU ROKOK SERTA KELENGKAPAN ROKOK LAINNYA",
          "description": "Kelompok ini mencakup industri pengolahan tembakau yang belum diklasifikasikan ditempat lain, seperti industri homogenisasi atau rekonstitusi tembakau dan tembakau bersaus. Termasuk pembuatan bumbu rokok, serta kelengkapan rokok lainnya, seperti kelembak menyan, saus rokok\\/tembakau, uwur, klobot, kawung serta pembuatan filter.",
          
        },
        {
          "number": "13111",
          "name": "INDUSTRI PERSIAPAN SERAT TEKSTIL",
          "description": "Kelompok ini mencakup usaha persiapan serat tekstil, seperti reeling (pilin\\/menggulung) dan pencucian serat sutera, degreasasi (penghilangan lemak) dan karbonisasi wol dan pencelupan bulu domba, termasuk proses penyusunan dan penyisiran (carding atau combing) dari serat rambut hewan serat tumbuhan, dan serat buatan (sintetis dan artifisial).",
          
        },
        {
          "number": "13112",
          "name": "INDUSTRI PEMINTALAN BENANG",
          "description": "Kelompok ini mencakup usaha pemintalan serat menjadi benang, kecuali benang jahit. Termasuk kegiatan penteksturan, penyimpulan, pelipatan dan pencucian benang rajutan filamen sintetis dan benang artifisial (dari bubur kayu).",
          
        },
        {
          "number": "13113",
          "name": "INDUSTRI PEMINTALAN BENANG JAHIT",
          "description": "Kelompok ini mencakup usaha pembuatan benang jahit, baik dengan bahan baku serat maupun benang. termasuk kegiatan penteksturan, penyimpulan, pelipatan dan pencucian benang jahit.",
          
        },
        {
          "number": "13121",
          "name": "INDUSTRI PERTENUNAN (BUKAN PERTENUNAN KARUNG GONI DAN KARUNG LAINNYA)",
          "description": "Kelompok ini mencakup usaha pertenunan, baik yang dibuat dengan alat gedogan, alat tenun bukan mesin (ATBM), alat tenun mesin (ATM) ataupun alat tenun lainnya, termasuk pembuatan sarung, kecuali industri kain tenun ikat. Usaha pertenunan karung goni dan karung lainnya dimasukkan dalam kelompok 13925, 13926, 13929.",
          
        },
        {
          "number": "13122",
          "name": "INDUSTRI KAIN TENUN IKAT",
          "description": "Kelompok ini mencakup usaha pembuatan kain tenun ikat dan usaha pewarnaan benang dengan cara mengikat terlebih dahulu.",
          
        },
        {
          "number": "13123",
          "name": "INDUSTRI BULU TIRUAN TENUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan bulu tiruan dengan penenunan.",
          
        },
        {
          "number": "13131",
          "name": "INDUSTRI PENYEMPURNAAN BENANG",
          "description": "Kelompok ini mencakup usaha pengelantangan, pencelupan dan penyempurnaan lainnya untuk benang maupun benang jahit.",
          
        },
        {
          "number": "13132",
          "name": "INDUSTRI PENYEMPURNAAN KAIN",
          "description": "Kelompok ini mencakup usaha pengelantangan, pencelupan dan penyempurnaan lainnya untuk kain.",
          
        },
        {
          "number": "13133",
          "name": "INDUSTRI PENCETAKAN KAIN",
          "description": "Kelompok ini mencakup usaha pencetakan kain dengan media perantara seperti kasa dan sebagainya, termasuk juga pencetakan kain motif batik.",
          
        },
        {
          "number": "13134",
          "name": "INDUSTRI BATIK",
          "description": "Kelompok ini mencakup usaha pembatikan dengan proses malam (lilin), baik yang dilakukan dengan tulis, cap maupun kombinasi antara cap dan tulis.",
          
        },
        {
          "number": "13911",
          "name": "INDUSTRI KAIN RAJUTAN",
          "description": "Kelompok ini mencakup usaha pembuatan kain yang dibuat dengan cara rajut seperti handuk, kain ihram, vitrase.",
          
        },
        {
          "number": "13912",
          "name": "INDUSTRI KAIN SULAMAN",
          "description": "Kelompok ini mencakup usaha kain sulaman dikerjakan dengan tangan.",
          
        },
        {
          "number": "13913",
          "name": "INDUSTRI BULU TIRUAN RAJUTAN",
          "description": "Kelompok ini mencakup usaha pembuatan bulu tiruan rajutan.",
          
        },
        {
          "number": "13921",
          "name": "INDUSTRI BARANG JADI TEKSTIL UNTUK KEPERLUAN RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang jadi tekstil, seperti selimut, seprei, taplak meja, sarung bantal, bed cover, gorden, handuk, sarung alas kursi, sajadah\\/penutup lantai yang dibuat dengan proses penggabungan dan\\/atau penjahitan beberapa bahan tekstil, selubung mobil dan selimut listrik dan lain-lain. Sajadah\\/penutup lantai dari karpet\\/permadani dimasukkan dalam kelompok 13930.",
          
        },
        {
          "number": "13922",
          "name": "INDUSTRI BARANG JADI TEKSTIL SULAMAN",
          "description": "Kelompok ini mencakup usaha barang jadi tekstil sulaman, baik yang dikerjakan dengan tangan maupun dengan mesin, seperti pakaian\\/barang jadi sulaman dan badge.",
          
        },
        {
          "number": "13923",
          "name": "INDUSTRI BANTAL DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pembuatan bantal dan sejenisnya, seperti bantal dan guling, selimut kapas, selimut bulu angsa, bantal kursi, kantong tidur dan lain-lain dari kapuk, dakron dan sejenisnya.",
          
        },
        {
          "number": "13924",
          "name": "INDUSTRI BARANG JADI RAJUTAN DAN SULAMAN",
          "description": "Kelompok ini mencakup usaha pembuatan barang jadi rajutan, seperti kaos lampu, deker, bando.",
          
        },
        {
          "number": "13925",
          "name": "INDUSTRI KARUNG GONI",
          "description": "Kelompok ini mencakup usaha pembuatan karung goni.",
          
        },
        {
          "number": "13926",
          "name": "INDUSTRI KARUNG BUKAN GONI",
          "description": "Kelompok ini mencakup usaha pembuatan karung bagor (karung terigu\\/gula blacu) dan karung lainnya. Kecuali pembuatan karung plastik masuk dalam kelompok 22220.",
          
        },
        {
          "number": "13929",
          "name": "INDUSTRI BARANG JADI TEKSTIL LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan barang jadi tekstil lainnya, seperti layar, tenda, bendera, terpal, parasut, pelampung\\/jaket penyelamat dan lain-lain: lap pembersih, serbet piring dan barang perlengkapan sejenisnya dan lain-lain.",
          
        },
        {
          "number": "13930",
          "name": "INDUSTRI KARPET DAN PERMADANI",
          "description": "Kelompok ini mencakup usaha pembuatan karpet, permadani, sajadah, dan sejenisnya yang terbuat dari serat, baik serat alam, sintetis maupun serat campuran, baik yang dikerjakan dengan proses tenun (woven), tufting, braiding, flocking dan needle punching. Termasuk industri penutup lantai dari lakan atau bulu kempa yang dibuat dengan jarum tenun. Karpet yang terbuat dari bahan-bahan gabus, karet atau plastik masing-masing dimasukkan dalam kelompok 16299, 22191 atau 22210. Sajadah\\/penutup lantai yang dibuat dengan proses penggabungan dan\\/atau penjahitan beberapa bahan tekstil dimasukkan dalam kelompok 13921. Kain alas lantai dengan lapisan permukaan keras dimasukkan dalam kelompok 13999.",
          
        },
        {
          "number": "13941",
          "name": "INDUSTRI TALI",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam tali, baik terbuat dari serat alam maupun serat sintetis atau serat campuran, seperti tali rami, tali goni (yute), tali sisal (agave), tali rafia dan tali nylon.",
          
        },
        {
          "number": "13942",
          "name": "INDUSTRI BARANG DARI TALI",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari tali, seperti jaring ikan, jala ikan, tali kapal, tali sepatu, sumbu kompor dan sumbu lampu, baik terbuat dari tali serat alam, tali serat sintetis atau tali serat campuran.",
          
        },
        {
          "number": "13991",
          "name": "INDUSTRI KAIN PITA (NARROW FABRIC)",
          "description": "Kelompok ini mencakup usaha pembuatan kain pita, seperti kain pita, renda, kain label, velcro, dan badges.",
          
        },
        {
          "number": "13992",
          "name": "INDUSTRI YANG MENGHASILKAN KAIN KEPERLUAN INDUSTRI",
          "description": "Kelompok ini mencakup usaha pembuatan kain dilapisi\\/ditutupi\\/diresapi dengan plastik atau karet dan selanjutnya digunakan untuk keperluan industri, seperti kain terpal, kain layar, kain tenda, kain payung, kain kanvas untuk melukis dan kulit imitasi dari media tekstil.",
          
        },
        {
          "number": "13993",
          "name": "INDUSTRI NON WOVEN (BUKAN TENUNAN)",
          "description": "Kelompok ini mencakup usaha industri kain yang dibuat tanpa dengan proses anyaman atau perajutan, seperti kain kempa, kain felting dan kain laken. Termasuk industri kain untuk keperluan pelayanan kesehatan manusia, seperti duk operasi (surgical drape); baju, masker, penutup kepala dan perlengkapan non woven lain untuk operasi; dan pembalut luka non woven.",
          
        },
        {
          "number": "13994",
          "name": "INDUSTRI KAIN BAN",
          "description": "Kelompok ini mencakup usaha pembuatan kain ban dari benang sintetik kekuatan tinggi, seperti kain ban dari nylon dan kain ban dari polyester.",
          
        },
        {
          "number": "13995",
          "name": "INDUSTRI KAPUK",
          "description": "Kelompok ini mencakup usaha pengolahan kapuk.",
          
        },
        {
          "number": "13996",
          "name": "INDUSTRI KAIN TULLE DAN KAIN JARING",
          "description": "Kelompok ini mencakup usaha pembuatan kain tulle, kain trikot, kain bordir, dan kain jaring lainnya. Jaring ikan dikelompokkan ke dalam 13942.",
          
        },
        {
          "number": "13999",
          "name": "INDUSTRI TEKSTIL LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha industri tekstil lainnya yang belum\\/tidak tercakup dalam golongan industri tekstil manapun, seperti benang karet, benang logam dan pipa\\/selang kain dan lainnya.",
          
        },
        {
          "number": "14111",
          "name": "INDUSTRI PAKAIAN JADI (KONVEKSI) DARI TEKSTIL",
          "description": "Kelompok ini mencakup usaha pembuatan pakaian jadi (konveksi) dari tekstil\\/kain (tenun maupun rajutan) dengan cara memotong dan menjahit sehingga siap dipakai, seperti kemeja, celana, kebaya, blus, rok, baju bayi, pakaian tari dan pakaian olahraga.",
          
        },
        {
          "number": "14112",
          "name": "INDUSTRI PAKAIAN JADI (KONVEKSI) DARI KULIT",
          "description": "Kelompok ini mencakup usaha pembuatan pakaian jadi (konveksi) dari kulit atau kulit imitasi, dengan cara memotong dan menjahit sehingga siap pakai, seperti jaket, mantel, rompi, celana dan rok. Termasuk pembuatan aksesori pakaian dari kulit seperti pakaian pekerja las (welder) dari kulit.",
          
        },
        {
          "number": "14120",
          "name": "PENJAHITAN DAN PEMBUATAN PAKAIAN SESUAI PESANAN",
          "description": "Kelompok ini mencakup usaha penjahitan dan pembuatan pakaian sesuai pesanan yang melayani masyarakat umum dengan tujuan komersil.",
          
        },
        {
          "number": "14131",
          "name": "INDUSTRI PERLENGKAPAN PAKAIAN DARI TEKSTIL",
          "description": "Kelompok ini mencakup usaha pembuatan perlengkapan pakaian jadi (konveksi) tekstil dan dari kain dengan cara memotong dan menjahit sehingga siap dipakai, seperti topi, peci, dasi, sarung tangan, mukena, selendang, kerudung, ikat pinggang, syal, bando, dasi tuksedo, jaring rambut, dan lain-lain, baik dari kain tenun maupun kain rajut yang dijahit. Termasuk industri alas kaki dari bahan kain tanpa sol dan bagian-bagian dari produk yang disebutkan sebelumnya.",
          
        },
        {
          "number": "14132",
          "name": "INDUSTRI PERLENGKAPAN PAKAIAN DARI KULIT",
          "description": "Kelompok ini mencakup usaha pembuatan perlengkapan pakaian jadi dari kulit atau kulit imitasi, dengan cara memotong dan menjahit sehingga siap pakai, seperti topi, sarung tangan, ikat pinggang, bando, jaring rambut, dan lain-lain. Termasuk industri penutup kepala dari kulit berbulu dan bagian-bagian dari produk yang disebutkan sebelumnya.",
          
        },
        {
          "number": "14200",
          "name": "INDUSTRI PAKAIAN JADI DAN BARANG DARI KULIT BERBULU",
          "description": "Kelompok ini mencakup usaha pembuatan pakaian jadi\\/barang jadi dari kulit berbulu dan atau perlengkapannya, seperti mantel berbulu, berbagai barang dari kulit berbulu, misalnya gambar, tikar, keset dan barang lain dari kulit berbulu, seperti permadani, pouffes tanpa isi, kain kilap industri.",
          
        },
        {
          "number": "14301",
          "name": "INDUSTRI PAKAIAN JADI RAJUTAN",
          "description": "Kelompok ini mencakup usaha pembuatan pakaian jadi, seperti sweater, kardigan, baju kaos, mantel, dan barang sejenisnya, termasuk topi yang dibuat dengan cara dirajut ataupun renda, kecuali industri rajutan kaos kaki.",
          
        },
        {
          "number": "14302",
          "name": "INDUSTRI PAKAIAN JADI SULAMAN\\/BORDIR",
          "description": "Kelompok ini mencakup usaha pakaian jadi sulaman, baik yang dikerjakan dengan tangan maupun dengan mesin.",
          
        },
        {
          "number": "14303",
          "name": "INDUSTRI RAJUTAN KAOS KAKI DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pembuatan kaos kaki yang dibuat dengan cara rajut ataupun renda, seperti kaos kaki, termasuk kaos kaki, stocking, pantyhose.",
          
        },
        {
          "number": "15111",
          "name": "INDUSTRI PENGAWETAN KULIT",
          "description": "Kelompok ini mencakup usaha pengawetan kulit yang berasal dari hewan besar, hewan kecil, reptil, ikan dan hewan lainnya, baik yang dilakukan dengan pengeringan, penggaraman, maupun pengasaman (pikel), seperti kulit hewan besar (sapi, kerbau), kulit hewan kecil (domba, kambing), kulit reptil (buaya, ular, biawak), kulit ikan (ikan pari,hiu\\/cucut, kakap, belut) dan kulit hewan lainnya.",
          
        },
        {
          "number": "15112",
          "name": "INDUSTRI PENYAMAKAN KULIT",
          "description": "Kelompok ini mencakup usaha penyamakan kulit yang berasal dari ternak besar (sapi, kerbau), ternak kecil (domba, kambing), reptil (buaya, ular, biawak), ikan (ikan pari, hiu cucut, kakap, belut) dan hewan lainnya yang dimasak dengan chrome nabati, sintetis, samak minyak dan samak kombinasi menjadi kulit tersamak, seperti wet blue, crust, sol, vache raam, kulit box, kulit beludru, kulit gelase dan kulit hiasan, kulit berbulu, kulit laminasi, kulit patent, kulit jaket, kulit sarung tangan, kulit chamois dan lainnya.",
          
        },
        {
          "number": "15113",
          "name": "INDUSTRI PENCELUPAN KULIT BULU",
          "description": "Kelompok ini mencakup usaha pemberian warna atau pencelupan pada kulit bulu yang digunakan pada barang jadi kulit.",
          
        },
        {
          "number": "15114",
          "name": "INDUSTRI KULIT KOMPOSISI",
          "description": "Kelompok ini mencakup usaha pembuatan kulit komposisi yang berasal dari potongan\\/remahan kulit hewan yang direkatkan kembali. Industri kulit buatan\\/imitasi yang berbahan utama tekstil dimasukkan dalam kelompok 13992. Industri kulit buatan\\/imitasi yang berbahan utama karet dimasukkan dalam kelompok 2219; dan industri kulit buatan\\/imitasi yang berbahan utama plastik dimasukkan dalam kelompok 2229.",
          
        },
        {
          "number": "15121",
          "name": "INDUSTRI BARANG DARI KULIT DAN KULIT KOMPOSISI UNTUK KEPERLUAN PRIBADI",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari kulit dan kulit komposisi atau bahan lain seperti plastik, tekstil, serat yang divulkanisir atau paperboard untuk keperluan pribadi, seperti koper, ransel, tas, dompet, kotak rias, sarung senjata, tempat kaca mata dan tali jam. Termasuk industri tali sepatu kulit.",
          
        },
        {
          "number": "15122",
          "name": "INDUSTRI BARANG DARI KULIT DAN KULIT KOMPOSISI UNTUK KEPERLUAN TEKNIK\\/INDUSTRI",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari kulit dan kulit komposisi untuk keperluan teknik\\/industri, seperti klep, packing, rem pickers, sarung tangan kerja, kulit pompa, kulit ban mesin (belt), kulit apron dan sisir kulit pada mesin (combing leather).",
          
        },
        {
          "number": "15123",
          "name": "INDUSTRI BARANG DARI KULIT DAN KULIT KOMPOSISI UNTUK KEPERLUAN HEWAN",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari kulit dan kulit komposisi untuk keperluan hewan, seperti ikat leher hewan, tali kekang hewan, pelana hewan, brongsong mulut hewan, cambuk dan sepatu hewan.",
          
        },
        {
          "number": "15129",
          "name": "INDUSTRI BARANG DARI KULIT DAN KULIT KOMPOSISI UNTUK KEPERLUAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari kulit dan kulit komposisi untuk keperluan yang belum terliput dalam kelompok 15121 sampai dengan 15123, seperti jok, sabuk pengaman, alat pengepak dan kerajinan tatah sungging (hiasan, wayang dan kap lampu) dan lain- lain.",
          
        },
        {
          "number": "15201",
          "name": "INDUSTRI ALAS KAKI UNTUK KEPERLUAN SEHARI-HARI",
          "description": "Kelompok ini mencakup usaha pembuatan alas kaki keperluan sehari-hari dari kulit dan kulit buatan, karet, kanvas dan kayu, seperti sepatu harian, sepatu santai (casual shoes), sepatu sandal, sandal kelom dan selop. Termasuk juga usaha pembuatan bagian-bagian dari alas kaki tersebut, seperti atasan, sol dalam, sol luar, penguat depan, penguat tengah, penguat belakang, lapisan dan aksesori dari kulit dan kulit buatan.",
          
        },
        {
          "number": "15202",
          "name": "INDUSTRI SEPATU OLAHRAGA",
          "description": "Kelompok ini mencakup usaha pembuatan sepatu untuk olahraga dari kulit dan kulit buatan, karet dan kanvas, seperti sepatu sepak bola, sepatu atletik, sepatu senam, sepatu jogging dan sepatu ballet. Termasuk juga usaha pembuatan bagian bagian dari sepatu olahraga tersebut, meliputi atasan, sol luar, sol dalam, lapisan dan aksesori.",
          
        },
        {
          "number": "15203",
          "name": "INDUSTRI SEPATU TEKNIK LAPANGAN\\/KEPERLUAN INDUSTRI",
          "description": "Kelompok ini mencakup usaha pembuatan sepatu termasuk pembuatan bagian-bagian dari sepatu untuk keperluan teknik lapangan\\/industri dari kulit, kulit buatan, karet dan plastik, seperti sepatu tahan kimia, sepatu tahan panas, sepatu pengaman.",
          
        },
        {
          "number": "15209",
          "name": "INDUSTRI ALAS KAKI LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan alas kaki lainnya yang belum termasuk golongan manapun, seperti sepatu kesehatan dan sepatu lainnya, misalnya sepatu dari gedebog (pelepah batang pisang) dan eceng gondok. Termasuk industri gaiter, legging dan barang sejenisnya.",
          
        },
        {
          "number": "16101",
          "name": "INDUSTRI PENGGERGAJIAN KAYU",
          "description": "Kelompok ini mencakup usaha penggergajian, pengirisan, pengulitan dan pemotongan kayu gelondongan menjadi balok, kaso (usuk), reng, papan dan sebagainya. Termasuk industri kayu untuk bantalan rel kereta dan bahan baku untuk pembuatan lantai kayu.",
          
        },
        {
          "number": "16102",
          "name": "INDUSTRI PENGAWETAN KAYU",
          "description": "Kelompok ini mencakup usaha pengawetan kayu dengan cara pengeringan kayu, pengolahan kimia dan perendaman kayu dengan bahan pengawet atau bahan lainnya.",
          
        },
        {
          "number": "16103",
          "name": "INDUSTRI PENGAWETAN ROTAN, BAMBU DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pengawetan rotan, bambu dan sejenisnya.",
          
        },
        {
          "number": "16104",
          "name": "INDUSTRI PENGOLAHAN ROTAN",
          "description": "Kelompok ini mencakup usaha pengolahan rotan menjadi bahan setengah jadi, seperti rotan poles, hati rotan dan kulit rotan.",
          
        },
        {
          "number": "16105",
          "name": "INDUSTRI PARTIKEL KAYU DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pembuatan partikel kayu dan sejenisnya seperti wol kayu, tepung kayu, dan irisan atau serpih kayu (woodchips).",
          
        },
        {
          "number": "16211",
          "name": "INDUSTRI KAYU LAPIS",
          "description": "Kelompok ini mencakup usaha pembuatan kayu lapis biasa, seperti kayu lapis tripleks, multipleks, kayu lapis interior, eksterior dan sejenisnya. Termasuk juga kayu lapis konstruksi, seperti kayu lapis cetak beton, kayu lapis tahan air dan sejenisnya.",
          
        },
        {
          "number": "16212",
          "name": "INDUSTRI KAYU LAPIS LAMINASI, TERMASUK DECORATIVE PLYWOOD",
          "description": "Kelompok ini mencakup usaha pembuatan kayu lapis yang dilaminasi, seperti teak wood, rose wood, polyester plywood dan sejenisnya. Termasuk juga bambu lapis yang dilaminasi.",
          
        },
        {
          "number": "16213",
          "name": "INDUSTRI PANEL KAYU LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan panel kayu lainnya, seperti particle board, chip board, fibre board, Medium Density Fibreboard (MDF) dan sejenisnya.",
          
        },
        {
          "number": "16214",
          "name": "INDUSTRI VENEER",
          "description": "Kelompok ini mencakup usaha pembuatan serutan pelapis (veneer) dengan cara pengupasan (rotary), penyayatan (slicer) dan sejenisnya.",
          
        },
        {
          "number": "16215",
          "name": "INDUSTRI KAYU LAMINASI",
          "description": "Kelompok ini mencakup industri kayu laminasi seperti barecore, blockboard, dan lamin board.",
          
        },
        {
          "number": "23111",
          "name": "INDUSTRI KACA LEMBARAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kaca lembaran, seperti kaca lembaran bening tak berwarna, kaca lembaran bening berwarna, kaca lembaran buram berwarna, kaca patri, kaca berukir dan kaca cermin.",
          
        },
        {
          "number": "23112",
          "name": "INDUSTRI KACA PENGAMAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kaca pengaman seperti kaca pengaman diperkeras, kaca pengaman berlapis, kaca pengaman isolasi dan kaca pengaman lainnya.",
          
        },
        {
          "number": "23119",
          "name": "INDUSTRI KACA LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kaca yang belum termasuk kelompok 23111 dan 23112, seperti tubes, rods, kaca batangan atau kaca pipa.",
          
        },
        {
          "number": "23121",
          "name": "INDUSTRI PERLENGKAPAN DAN PERALATAN RUMAH TANGGA DARI KACA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam perlengkapan rumah tangga dari kaca , seperti cangkir, piring, mangkok, teko, stoples, asbak dan botol susu bayi. Termasuk juga usaha pembuatan barang- barang pajangan dari kaca, seperti patung atau arca dari kaca, vas, lampu kristal, semprong lampu tekan dan semprong lampu tempel.",
          
        },
        {
          "number": "23122",
          "name": "INDUSTRI ALAT-ALAT LABORATORIUM NON KLINIS, FARMASI DAN KESEHATAN DARI KACA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam alat laboratorium selain laboratorium klinis, farmasi dan kesehatan dari gelas, seperti botol serum\\/infus, ampul, tabung uji, tabung ukur, kaca sorong mikroskop, cuvet dan dessicator.",
          
        },
        {
          "number": "23123",
          "name": "INDUSTRI KEMASAN DARI KACA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang untuk kemasan dari kaca, seperti botol dan guci. Termasuk wadah lain dari kaca atau kristal.",
          
        },
        {
          "number": "23124",
          "name": "INDUSTRI ALAT LABORATORIUM KLINIS DARI KACA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam alat laboratorium klinis, pada umumnya untuk keperluan diagnosis, seperti tabung uji untuk sampel biologis (darah, urin, saliva).",
          
        },
        {
          "number": "23129",
          "name": "INDUSTRI BARANG LAINNYA DARI KACA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang lainnya dari gelas yang belum tercakup dalam kelompok 23121 s.d. 23123 seperti tasbih, rosario, manik gelas, gelas enamel dan aquarium, serat kaca (fiberglass), termasuk produk-produk dari wol kaca dan non woven kaca, kaca jam dinding atau kaca arloji, kaca dan elemen optik yang tidak bekerja secara optis, barang kaca yang digunakan pada perhiasan imitasi dan kaca isolasi dan perlengkapan isolasi kaca. Termasuk juga usaha pembuatan bahan bangunan dari gelas seperti bata, ubin, genteng, paving blocks dan sekat dinding dari kaca.",
          
        },
        {
          "number": "23911",
          "name": "INDUSTRI BATA, MORTAR, SEMEN, DAN SEJENISNYA YANG TAHAN API",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam bata tahan api, mortar tahan api dan semen tahan api, beton dan komposit sejenisnya yang tahan api, seperti alumina, silica dan basic.",
          
        },
        {
          "number": "23919",
          "name": "INDUSTRI BARANG TAHAN API DARI TANAH LIAT\\/KERAMIK LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang tahan api, selain bata tahan api. Termasuk barang keramik penyekat panas dari tepung fossil siliceous; ubin dan balok refraktori; tabung kimia atau labu destilasi, wadah tempat melebur logam, penyaring, tabung, pipa dan sebagainya; dan barang refraktori yang mengandung magnet, dolomit atau kromit.",
          
        },
        {
          "number": "23921",
          "name": "INDUSTRI BATU BATA DARI TANAH LIAT\\/KERAMIK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam batu bata seperti bata pres, bata berongga, bata hiasan, bata bukan pres dan bata lubang. Termasuk juga pembuatan semen merah dan kerikil tanah liat.",
          
        },
        {
          "number": "23922",
          "name": "INDUSTRI GENTENG DARI TANAH LIAT\\/KERAMIK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam genteng tanah liat\\/keramik, seperti genteng pres, genteng biasa, genteng kodok dan genteng yang diglazur.",
          
        },
        {
          "number": "23923",
          "name": "INDUSTRI PERALATAN SANITER DARI PORSELEN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam peralatan saniter dari porselen seperti kloset, bidet, wastafel, urinoir, bak cuci, bak mandi dan lain-lain.",
          
        },
        {
          "number": "23929",
          "name": "INDUSTRI BAHAN BANGUNAN DARI TANAH LIAT\\/KERAMIK BUKAN BATU BATA DAN GENTENG",
          "description": "Kelompok ini mencakup usaha pembuatan barang dari tanah liat\\/keramik untuk keperluan bahan bangunan bukan batu bata, genteng dan peralatan saniter dari porselen, seperti saluran air, ubin, lubang angin dan buis (cincin untuk sumur). Termasuk tungku keramik atau ubin dinding non refraktori, kubus mosaik dan sebagainya, paving atau ubin keramik non refraktori, ubin untuk atap, cerobong asap, pipa, saluran keramik dan sebagainya dan balok lantai dari tanah liat yang dibakar.",
          
        },
        {
          "number": "23931",
          "name": "INDUSTRI PERLENGKAPAN RUMAH TANGGA DARI PORSELEN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam perlengkapan rumah tangga dari porselen, seperti piring, tatakan, cangkir, mangkok, teko, kendi, sendok , asbak, barang toilet dan toples dan barang-barang sejenis yang digunakan untuk pengangkutan atau pengepakan barang. Termasuk juga usaha pembuatan barang pajangan dari porselen seperti arca atau patung dan barang keramik ornamental lainnya, tempat bunga, kotak rokok dan guci.",
          
        },
        {
          "number": "23932",
          "name": "INDUSTRI PERLENGKAPAN RUMAH TANGGA DARI TANAH LIAT\\/KERAMIK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari tanah liat untuk perlengkapan rumah tangga, pajangan\\/hiasan dan sejenisnya, seperti piring, cangkir, mangkok, kendi, teko, periuk, tempayan, patung, vas bunga, tempat sirih, kotak sigaret, celengan, toples, dan barang-barang sejenis yang digunakan untuk pengangkutan atau pengepakan barang dan lain-lain.",
          
        },
        {
          "number": "23933",
          "name": "INDUSTRI ALAT LABORATORIUM DAN ALAT LISTRIK\\/TEKNIK DARI PORSELEN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam alat laboratorium, listrik dan teknik serta perlengkapan dari porselen seperti lumpang dan alu, piring penapis, tabung kimia, botol\\/guci, cawan, rumah sekering, insulator, isolator tegangan rendah dan isolator tegangan tinggi. Termasuk magnet ferit dan keramik dan barang-barang keramik laboratorium, kimia dan industrial.",
          
        },
        {
          "number": "23939",
          "name": "INDUSTRI BARANG TANAH LIAT\\/KERAMIK DAN PORSELEN LAINNYA BUKAN BAHAN BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari tanah liat\\/keramik dan porselen lainnya bukan bahan bangunan yang belum tercakup dalam kelompok 23931 sampai dengan 23933. Termasuk furnitur keramik dan barang-barang keramik lainnya, ytdl.",
          
        },
        {
          "number": "23941",
          "name": "INDUSTRI SEMEN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam semen (semen hidrolik dan arang atau kerak besi), seperti portland, natural, semen mengandung alumunium, semen terak dan semen superfosfat dan jenis semen lainnya.",
          
        },
        {
          "number": "23942",
          "name": "INDUSTRI KAPUR",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kapur dari batu kapur, seperti kapur tohor, kapur tembok dan kapur lepaan. Termasuk kapur slaked lime dan kapur hidrolik.",
          
        },
        {
          "number": "23943",
          "name": "INDUSTRI GIPS",
          "description": "Kelompok ini mencakup usaha pembuatan gips, yang terbentuk dari calcined gipsum atau calsium sulphate. Termasuk calcined dolomite.",
          
        },
        {
          "number": "23951",
          "name": "INDUSTRI BARANG DARI SEMEN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari semen, seperti patung, pot kembang dan lain-lain.",
          
        },
        {
          "number": "23952",
          "name": "INDUSTRI BARANG DARI KAPUR",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari kapur, seperti kapur tulis, kapur gambar, batako dan dempul.",
          
        },
        {
          "number": "23953",
          "name": "INDUSTRI BARANG DARI SEMEN DAN KAPUR UNTUK KONSTRUKSI",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari semen dan atau kapur atau batu buatan untuk keperluan konstruksi seperti ubin, bata\\/dinding, pipa beton dan beton praktekan, papan, lembaran, panel, tonggak dan sebagainya, komponen struktur prafabrik untuk gedung atau bangunan sipil dan bahan-bahan bangunan dari substansi tumbuh- tumbuhan (wol kayu, alang-alang, jerami dan lain-lain) yang disatukan dengan semen atau bahan pencampur mineral lainnya.",
          
        },
        {
          "number": "23954",
          "name": "INDUSTRI BARANG DARI GIPS UNTUK KONSTRUKSI",
          "description": "Kelompok ini mencakup pembuatan barang dari gips yang digunakan dalam konstruksi, seperti papan, lembaran, panel dan lain-lain. Termasuk Industri bahan bangunan dari substansi tumbuh-tumbuhan (wol kayu, alang-alang, jerami dan lain-lain) yang disatukan plester gips.",
          
        },
        {
          "number": "23955",
          "name": "INDUSTRI BARANG DARI ASBES UNTUK KEPERLUAN BAHAN BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari asbes untuk keperluan bahan bangunan seperti asbes gelombang, asbes rata, pipa asbes bertekanan dan asbes berlapis.",
          
        },
        {
          "number": "23956",
          "name": "INDUSTRI BARANG DARI ASBES UNTUK KEPERLUAN INDUSTRI",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari asbes untuk keperluan industri.",
          
        },
        {
          "number": "23957",
          "name": "INDUSTRI MORTAR ATAU BETON SIAP PAKAI",
          "description": "Kelompok ini mencakup usaha pembuatan mortar atau beton siap pakai (ready mixed and dry mixed concrete and mortar).",
          
        },
        {
          "number": "23959",
          "name": "INDUSTRI BARANG DARI SEMEN, KAPUR, GIPS DAN ASBES LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari semen, kapur, gips dan asbes lainnya, yang belum tercakup dalam kelompok 23951 sampai dengan 23957, seperti industri barang dari semen serat selulosa atau sejenisnya, seperti reservoir, palung atau bak, kolam, bak cuci piring, guci, mebel, rangka jendela dan lain-lain, barang lainnya dari beton, plester gips, semen atau batu buatan, seperti patung, furnitur, relief gambar timbul dan sebagainya dan mortar bubuk.",
          
        },
        {
          "number": "23961",
          "name": "INDUSTRI BARANG DARI MARMER DAN GRANIT UNTUK KEPERLUAN RUMAH TANGGA DAN PAJANGAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari marmer\\/granit untuk keperluan rumah tangga dan pajangan, seperti daun meja, ornamen dan patung. Termasuk pembuatan furnitur dari marmer dan granit.",
          
        },
        {
          "number": "23962",
          "name": "INDUSTRI BARANG DARI MARMER DAN GRANIT UNTUK KEPERLUAN BAHAN BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari marmer\\/granit untuk keperluan bahan bangunan, seperti ubin dan bak mandi.",
          
        },
        {
          "number": "23963",
          "name": "INDUSTRI BARANG DARI BATU UNTUK KEPERLUAN RUMAH TANGGA, PAJANGAN, DAN BAHAN BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari batu untuk keperluan rumah tangga, pajangan, dan bahan bangunan, seperti lumpang, cobek, batu pipisan, batu asah, batu lempengan, batu pecah- pecahan, abu batu dan kubus mozaik.",
          
        },
        {
          "number": "23969",
          "name": "INDUSTRI BARANG DARI MARMER, GRANIT DAN BATU LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari batu marmer, granit atau batu lainnya untuk keperluan lainnya yang belum tercakup dalam kelompok 23961 hingga 23963, seperti industri batu monumen.",
          
        },
        {
          "number": "23990",
          "name": "INDUSTRI BARANG GALIAN BUKAN LOGAM LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari bahan galian lainnya yang belum tercakup di tempat lain, seperti tepung kaolin, tepung gips, dan tepung talk. Termasuk juga usaha pembuatan kertas penggosok (abrasive paper) dan gerinda, penajaman dan pengilapan batu dan batu abrasi atau penggosok baik alami atau buatan, batu korek api (lighter flint); bahan friksi dan barang tak berbingkai dengan bahan pokok substansi mineral atau selulosa; bahan penyekat dari mineral, seperti wol terak, wol batu dan jenis wol lainnya; exfoliated vermiculate, tanah liat yang dikembangkan dan sejenis penyekat dengan panas, bahan penyerap suara; barang dari berbagai substansi mineral, seperti mika dan barang dari mika, barang dari tanah gemuk (peat) sebagai bahan pembakar, barang dari grafit (barang elektris); barang dari aspal atau material sejenisnya, misalnya perekat berbahan dasar aspal, aspal karet alam, ter batu bara dan sebagainya; dan karbon dan serat grafit dan barang turunannya (kecuali elektroda dan peralatan elektris).",
          
        },
        {
          "number": "24101",
          "name": "INDUSTRI BESI DAN BAJA DASAR (IRON AND STEEL MAKING)",
          "description": "Kelompok ini mencakup usaha pembuatan besi dan baja dalam bentuk dasar, seperti pellet bijih besi, besi spons, besi kasar (pig iron) dan pembuatan besi dan baja dalam bentuk baja kasar seperti ingot baja, billet baja, baja bloom dan baja slab. Termasuk juga pembuatan besi dan baja paduan. Termasuk kegiatan tungku pembakar, steel converter, pabrik penggulungan dan finishing; produksi besi kasar dalam bentuk dasar seperti balok; produksi besi campuran; produksi produk besi yang direduksi langsung dari bijih besi dan produk besi berongga lainnya; produksi besi dari hasil pemurnian dengan proses elektrolisis dan proses kimia lainnya; produksi butir besi dan bubuk besi; produksi baja batangan (ingot) atau bentuk dasar lainnya; peleburan kembali ingot sisaan besi atau baja; dan produksi baja setengah jadi.",
          
        },
        {
          "number": "24102",
          "name": "INDUSTRI PENGGILINGAN BAJA (STEEL ROLLING)",
          "description": "Kelompok ini mencakup usaha penggilingan baja, baik penggilingan panas maupun dingin, yang membuat produk-produk gilingan batang kawat baja, baja tulangan, baja profil (H-beam, I-beam dan sejenisnya), baja strip, baja rel, pelat baja, baja lembaran hasil gilingan panas (hot rolled sheet) dan baja lembaran hasil gilingan dingin (cold rolled sheet) dilapisi atau tidak dilapisi dengan logam atau non logam lainnya termasuk penggilingan baja scrap. Termasuk industri baja balok atau potongan gulungan panas, industri baja open section gulungan panas, industri baja balok dan baja solid section hasil proses cold drawing, grinding dan turning, industri baja open section hasil pembentukan dingin progresif pada mesin penggulung atau pelipatan pada mesin pres atau pada penggulungan flat baja, industri kawat baja baik kawat satuan maupun pilinan (strand) hasil proses cold drawing, tempering, dan stressing, industri lembaran tiang pancang baja atau baja las open section, industri material rel kereta api baja (rel belum terpasang).",
          
        },
        {
          "number": "24103",
          "name": "INDUSTRI PIPA DAN SAMBUNGAN PIPA DARI BAJA DAN BESI",
          "description": "Kelompok ini mencakup usaha pembuatan tabung, pipa dan sambungan pipa dari besi dan baja. Termasuk Industri tabung, pipa dan profile berongga baja tanpa kelim hasil pembentukan gulungan panas, hot drawing atau hot extruding, gulungan dingin atau cold drawing; industri tabung dan pipa baja las hasil pengelasan dan pembentukan panas atau dingin, sebagai proses lanjutan dari gulungan dingin atau cold drawing; dan industri fittings pipa baja, seperti flat flanges dan flanges with forged collar, butt-welded fittings, threaded fittings dan socket-welded fiitings.",
          
        },
        {
          "number": "24201",
          "name": "INDUSTRI PEMBUATAN LOGAM DASAR MULIA",
          "description": "Kelompok ini mencakup usaha pemurnian, peleburan, pemaduan dan penuangan logam mulia dalam bentuk dasar (ingot, billet, slab, batang, pellet, block, sheet, pig, paduan dan bubuk) seperti ingot perak, ingot emas, pellet platina dan sebagainya.",
          
        },
        {
          "number": "24202",
          "name": "INDUSTRI PEMBUATAN LOGAM DASAR BUKAN BESI",
          "description": "Kelompok ini mencakup usaha pemurnian, peleburan, pemaduan dan penuangan logam-logam bukan besi dalam bentuk dasar (ingot, billet, slab, batang, pellet, block, sheet, pig, paduan dan bubuk) seperti ingot kuningan, ingot aluminium, ingot seng, ingot tembaga, ingot timah, billet kuningan, billet aluminium, slab kuningan, slab aluminium, batang (rod) kuningan, batang aluminium, pellet kuningan, pellet aluminium, paduan perunggu, paduan nikel dan logam anti gesekan (bearing metal) serta logam tanah jarang dan paduan logam tanah jarang (15 unsur lantanida ditambah unsur scandium dan yttrium).",
          
        },
        {
          "number": "24203",
          "name": "INDUSTRI PENGGILINGAN LOGAM BUKAN BESI",
          "description": "Kelompok ini mencakup usaha penggilingan logam bukan besi, baik penggilingan panas maupun penggilingan dingin, seperti pelat tembaga, pelat aluminium, sheet (lembaran) tembaga, sheet aluminium, strip (jalur) perak, strip seng, strip aluminium, sheet tembaga, sheet magnesium, tin foil dan strip platina. Termasuk pembuatan kawat logam.",
          
        },
        {
          "number": "24204",
          "name": "INDUSTRI EKSTRUSI LOGAM BUKAN BESI",
          "description": "Kelompok ini mencakup usaha ekstrusi logam bukan besi, seperti ekstrusi tembaga dan paduannya, ekstrusi aluminium dan ekstrusi tungsten.",
          
        },
        {
          "number": "24205",
          "name": "INDUSTRI PIPA DAN SAMBUNGAN PIPA DARI LOGAM BUKAN BESI DAN BAJA",
          "description": "Kelompok ini mencakup usaha pembuatan tabung, pipa dan sambungan pipa dari logam bukan besi dan baja.",
          
        },
        {
          "number": "24206",
          "name": "INDUSTRI PENGOLAHAN URANIUM DAN BIJIH URANIUM",
          "description": "Kelompok ini mencakup pemurnian logam uranium dari bijih uranium atau bijih lainnya yang mengandung uranium, pengolahan uranium alam dan persenyawaannya, pengayaan uranium dan persenyawaannya, plutonium dan persenyawaannya, atau pemisahan dan penggabungan persenyawaan tersebut.",
          
        },
        {
          "number": "24310",
          "name": "INDUSTRI PENGECORAN BESI DAN BAJA",
          "description": "Kelompok ini mencakup usaha peleburan, pencampuran dan pengecoran atau penuangan logam besi dan baja yang menghasilkan produk-produk tuangan dalam bentuk kasar, seperti besi tuang, baja tuang dan baja tuang paduan. Termasuk pengecoran produk besi setengah jadi, pengecoran besi tuang abu-abu, pengecoran besi tuang grafit spheroid, pengecoran besi tuang yang dapat ditempa, pengecoran produk baja setengah jadi, pengecoran baja tuang, industri tabung, pipa dan profile berongga serta fittings tabung dan pipa yang terbuat dari besi tuang, industri tabung dan pipa baja tanpa kelim dari proses pengecoran sentrifugal dan industri tabung dan pipa fittings yang terbuat dari baja tuang.",
          
        },
        {
          "number": "24320",
          "name": "INDUSTRI PENGECORAN LOGAM BUKAN BESI DAN BAJA",
          "description": "Kelompok ini mencakup usaha peleburan, pemaduan dan pengecoran atau penuangan logam-logam bukan besi dalam bentuk dasar, seperti tuangan tembaga dan paduannya, tuangan aluminium dan paduannya, tuangan nikel dan paduannya. Termasuk Pengecoran produk setengah jadi dari aluminium, magnesium, titanium, seng dan lain-lain, pengecoran logam ringan tuang, pengecoran logam berat tuang, pengecoran logam mulia tuang dan die-casting logam bukan besi.",
          
        },
        {
          "number": "25111",
          "name": "INDUSTRI BARANG DARI LOGAM BUKAN ALUMINIUM SIAP PASANG UNTUK BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan bahan bangunan siap pasang dari logam bukan aluminium, seperti pagar besi, teralis, pintu\\/jendela, lubang angin, tangga dan produk-produk konstruksi ringan lainnya. Industri pembuatan bahan konstruksi berat siap pasang dari baja, seperti untuk jembatan, menara listrik tegangan tinggi, pintu air dan sejenisnya dimasukkan dalam kelompok 25113, sedangkan industri pembuatan ketel uap, bejana tekan dan sejenisnya dimasukkan dalam kelompok 25120.",
          
        },
        {
          "number": "25112",
          "name": "INDUSTRI BARANG DARI LOGAM ALUMINIUM SIAP PASANG UNTUK BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan bahan bangunan siap pasang dari logam aluminium, seperti kusen jendela, kusen pintu, teralis aluminium, atap aluminium (awning), rolling door, krei aluminium dan produk-produk konstruksi ringan lainnya.",
          
        },
        {
          "number": "25113",
          "name": "INDUSTRI KONSTRUKSI BERAT SIAP PASANG DARI BAJA UNTUK BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan bahan bangunan konstruksi berat siap pasang dari baja untuk jembatan, bangunan hanggar, menara listrik tegangan tinggi, pintu air dan sejenisnya.",
          
        },
        {
          "number": "25119",
          "name": "INDUSTRI BARANG DARI LOGAM SIAP PASANG UNTUK KONSTRUKSI LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari logam siap pasang untuk konstruksi yang belum tercakup dalam kelompok 25111 s.d. 25113.",
          
        },
        {
          "number": "25120",
          "name": "INDUSTRI TANGKI, TANDON AIR DAN WADAH DARI LOGAM",
          "description": "Kelompok ini mencakup usaha pembuatan ketel uap untuk proses pengolahan (industri boiler), ketel untuk keperluan pembangkit tenaga (utility boiler), bejana tekan (presure vessel), scrubber dan sejenisnya. Termasuk pula usaha pembuatan tangki-tangki lainnya yang bertekanan seperti autoclave, tabung gas bertekanan (tabung gas LPG), tangki-tangki silo, alat penukar panas (heat exchanger) dan berbagai jenis alat penghasil uap gas lainnya. Termasuk tandon, tangki dan wadah dari logam yang secara umum dibuat untuk perlengkapan\\/tempat penyimpanan atau untuk keperluan industri dan ketel pemanas dan radiator.",
          
        },
        {
          "number": "25130",
          "name": "INDUSTRI GENERATOR UAP, BUKAN KETEL PEMANAS",
          "description": "Kelompok ini mencakup usaha pembuatan generator uap, termasuk komponen dan perlengkapannya, seperti steam accumulatator, economizer dan sejenisnya. Termasuk industri mesin uap lainnya, mesin tambahan yang digunakan dengan generator uap (kondenser, economizer, superheater, steam collectors dan accumulators), suku cadang ketel kapal laut atau ketel tenaga, reaktor nuklir beserta komponen dan perlengkapannya kecuali pemisah isotop.",
          
        },
        {
          "number": "25200",
          "name": "INDUSTRI SENJATA DAN AMUNISI",
          "description": "Kelompok ini mencakup pembuatan senjata berat (meriam, mobile guns, peluncur roket, tabung torpedo, senjata mesin berat), pembuatan senjata ringan\\/kecil (revolver, senapan, senapan mesin ringan) baik untuk militer atau polisi, pembuatan senjata gas dan amunisinya, senapan angin atau pistol dan amunisi perang. Termasuk pembuatan senjata api untuk berburu, olahraga atau perlindungan dan amunisinya, alat peledak seperti bom, granat, torpedo, ranjau, roket dan sebagainya.",
          
        },
        {
          "number": "26512",
          "name": "INDUSTRI ALAT UKUR DAN ALAT UJI ELEKTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat pengukur, pemeriksa dan pengujian elektrik\\/listrik, baik yang ada maupun yang tidak ada hubungannya dengan penyelidikan ilmu pengetahuan, seperti meteran arus listrik. Termasuk juga perlengkapan dari peralatan-peralatan tersebut.",
          
        },
        {
          "number": "26513",
          "name": "INDUSTRI ALAT UKUR DAN ALAT UJI ELEKTRONIK",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat instrumen analitis, skala, neraca dan inkubator laboratorium serta alat laboratorium lainnya untuk pengukuran dan pengujian, alat-alat pengukur dan pemeriksa elektronik, baik yang ada maupun yang tidak ada hubungannya dengan penyelidikan ilmu pengetahuan, seperti pesawat pengatur elektronik otomatis, speedometer, argometer, elektronik sinar katoda, radar, radio kontrol dan instrumen navigasi, meteorologi, geofisika, hidrologi dan spectofotometer serta alat ukur digital (termasuk thermometer dan barometer). Termasuk juga perlengkapan dari peralatan-peralatan tersebut.Kelompok ini mencakup juga usaha pembuatan mikroskop proton dan elektron (kecuali mikroskop optis) dan timbangan digital.",
          
        },
        {
          "number": "26514",
          "name": "INDUSTRI ALAT UJI DALAM PROSES INDUSTRI",
          "description": "Kelompok ini mencakup pembuatan berbagai peralatan pengukuran dan kontrol dari barang-barang yang sedang diproses, baik alat ukur panas, tekanan, kekentalan, maupun alat ukur sifat-sifat barang.",
          
        },
        {
          "number": "26520",
          "name": "INDUSTRI ALAT UKUR WAKTU",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam jam seperti arloji tangan, arloji saku, arloji kalung, jam dinding, jam beker dan lonceng. Termasuk juga usaha pembuatan bagian-bagian dari jam\\/arloji, seperti movement part, dial plate\\/hand, pegas, batu baterai, lempeng jam, jarum dan bagian lainnya, case (badan) jam dan arloji, termasuk case (badan) dari logam mulia, alarm for watch, instrumen panel clocks, crono meter, stop watch, pencatat waktu parking, pencatat waktu datang dan pulang pegawai (pencatat waktu absen), time\\/date stamps dan pencatat waktu proses, time locks (pengunci waktu) dan lain-lain.",
          
        },
        {
          "number": "26601",
          "name": "INDUSTRI PERALATAN IRADIASI\\/SINAR X, PERLENGKAPAN DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha pembuatan peralatan dan tabung iradiasi (penyinaran) yang didasarkan pada penggunaan radiasi sinar X, Alpha, Beta, atau Gamma, baik yang digunakan pada bidang kesehatan dan industri, seperti peralatan industri, peralatan iradiasi susu dan makanan, diagnosa medis, terapi medis, penelitian dan ilmu pengetahuan, peralatan pengukuran (gauging), dan peralatan pengeboran (well logging). Misalnya peralatan radiasi sinar X, beta, gamma dan sinar lainnya. Termasuk pula pembuatan tabung sinar X, kontrol panel, screen dan yang terkait, serta peralatan sterilisasi dengan sinar ultra violet.",
          
        },
        {
          "number": "26602",
          "name": "INDUSTRI PERALATAN ELEKTROMEDIKAL DAN ELEKTROTERAPI",
          "description": "Kelompok ini mencakup pembuatan peralatan dan perlengkapan elektromedikal dan elektroterapi, seperti peralatan electrocardiograph, peralatan test mata (termasuk reflektor, endoscope dan lain-lain), ozone therapy, oxygen therapy, penangkap citra (scanner) untuk diagnosa medis, peralatan MRI (magnetic resonce imaging), peralatan ultrasound medis, peralatan endoskopi elektromedikal, peralatan laser medis, peralatan alat bantu dengar dan peralatan alat pacu jantung.",
          
        },
        {
          "number": "26710",
          "name": "INDUSTRI PERALATAN FOTOGRAFI",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kamera fotografi, seperti kamera foto biasa, kamera langsung jadi, kamera untuk micro film, kamera digital, kamera untuk still picture dan kamera untuk penelitian udara.",
          
        },
        {
          "number": "26791",
          "name": "INDUSTRI KAMERA CINEMATOGRAFI PROYEKTOR DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kamera cinematografi, proyektor, seperti kamera cinematografi, proyektor cinematografi, image proyektor, slide projector, overhead transparancy projector, aparat cahaya kilat fotografi, frame kamera, tempat film dan lensa kamera zoom. Termasuk alat pengukur cahaya untuk fotografi.",
          
        },
        {
          "number": "26792",
          "name": "INDUSTRI TEROPONG DAN INSTRUMEN OPTIK BUKAN KACA MATA",
          "description": "Kelompok ini mencakup usaha pembuatan teropong dan alat optik serta bagian-bagiannya untuk ilmu pengetahuan dan percetakan seperti teropong monoculer, teropong astronomi, elbow telescope, periscope, optik, spectroscope, spectograph, lensa berlapis diasah, lensa prisma. Termasuk mikroskop optik, binokular dan teleskop, cermin optik, peralatan kaca pembesar optik, peralatan presisi (ketepatan) masinis optik, komparator optik, peralatan pembidik senjata optik, peralatan positioning optik, peralatan dan instrumen pengukuran dan pemeriksaan optik (misalnya peralatan pengontrol api\\/fire control equipment, pengukur jarak) dan peralatan laser.Kelompok ini juga mencakup industri pelapisan, penggosokan lensa dan mounting lensa (bukan opthalmik) dan lainnya.",
          
        },
        {
          "number": "26800",
          "name": "INDUSTRI MEDIA MAGNETIK DAN MEDIA OPTIK",
          "description": "Kelompok ini mencakup usaha pembuatan media rekam magnetik dan optik untuk suara, gambar maupun data, yang bahan utamanya dari plastik, seperti pita audio dan video magnetik kosong, kaset audio dan video magnetik kosong, piringan hitam kosong, film yang belum peka terhadap cahaya, pita untuk merekam data dan disk\\/diskette kosong dan disk optik kosong dan media hard drive. Usaha pembuatan film yang peka terhadap cahaya dimasukkan dalam kelompok 20299. Usaha rekaman suara dengan media pita kaset, piringan hitam dimasukkan dalam kelompok 59201. Sedangkan rekaman gambar film dan pita video dimasukkan dalam subgolongan 5911 (Produksi gambar Bergerak, Video dan Program Televisi). Usaha rekaman data dengan pita, disk\\/diskette dan sejenisnya yang menggunakan jasa komputer dimasukkan dalam kelompok 62090.",
          
        },
        {
          "number": "27111",
          "name": "INDUSTRI MOTOR LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan motor listrik dan komponen\\/bagiannya, seperti motor AC, motor DC, stator, rotor, brush dan commutator, kecuali mesin pembakaran dalam untuk menyalakan motor.",
          
        },
        {
          "number": "27112",
          "name": "INDUSTRI MESIN PEMBANGKIT LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan generator dan komponen\\/bagiannya seperti generator arus bolak-balik, generator arus searah, generator set, stator, rotor, commutator dan rotary converter. Termasuk generator tenaga (kecuali alternator pengisi baterai untuk mesin pembakaran dalam), perangkat generator motor (kecuali perangkat generator turbin) dan perangkat generator penggerak utama.",
          
        },
        {
          "number": "25910",
          "name": "INDUSTRI PENEMPAAN, PENGEPRESAN, PENCETAKAN DAN PEMBENTUKAN LOGAM; METALURGI BUBUK",
          "description": "Kelompok ini mencakup pembuatan berbagai barang jadi dan setengah jadi dari logam baik baja, besi maupun logam bukan besi menjadi logam dalam bentuk logam tempaan, pres-an dan atau logam gulungan.",
          
        },
        {
          "number": "25920",
          "name": "JASA INDUSTRI UNTUK BERBAGAI PENGERJAAN KHUSUS LOGAM DAN BARANG DARI LOGAM",
          "description": "Kelompok ini mencakup kegiatan jasa industri untuk pelapisan, pemolesan, pewarnaan, pengukiran, pengerasan, pengkilapan, pengelasan, pemotongan dan berbagai pekerjaan khusus terhadap logam atau barang- barang dari logam. Kegiatannya termasuk industri penyepuhan logam, anodizing dan lain-lain; industri pengolahan panas logam; deburring, penyemprotan pasir (sandbalasting), perobohan (tumbling) dan pembersihan logam; industri pewarnaan dan pengukiran atau pemahatan logam; industri pelapisan bukan metalik logam, seperti pelapisan dengan plastik, email atau porselain, lak\\/pernis dan lain-lain; industri pengerasan dan pengkilapan logam; industri pengeboran, pengolahan, penggilingan, pengikisan, pembentukan, pemutaran, broaching, leveling, penggergajian, penghalusan, penajaman, penyemiran, pengelasan, penyambungan dan lain-lain bagian pekerjaan logam; dan industri pemotongan atau penulisan pada logam dengan sinar laser.",
          
        },
        {
          "number": "25931",
          "name": "INDUSTRI ALAT POTONG DAN PERKAKAS TANGAN UNTUK PERTANIAN",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat\\/perkakas tangan pertanian yang tidak digerakkan dengan tenaga dari logam, seperti cangkul, sekop, bajak, garu, sabit, ani-ani, alat perontok padi, alat pemipil jagung dan hand sprayer.",
          
        },
        {
          "number": "25932",
          "name": "INDUSTRI ALAT POTONG DAN PERKAKAS TANGAN PERTUKANGAN",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat pertukangan dari logam, seperti water pass, siku-siku, beliung, pahat, obeng, martil, serut\\/ketam, gergaji dan mata gergaji, mata gergaji bundar dan mata gergaji rantai, mata bor dan sejenisnya, kampak dan pisau pemotong kaca. Termasuk industri pisau dan mata pisau untuk mesin atau untuk peralatan mekanik, perkakas tangan (tang, obeng dan lain-lain), perkakas tangan pertanian yang tidak digerakkan dengan tenaga, alat yang dapat dipertukarkan untuk perkakas tangan, baik yang tidak digerakkan dengan tenaga atau mesin perkakas (seperti bor, pemukul, pisau penggiling dan lain-lain), perkakas pengepres, perkakas pandai besi (seperti alat tempa, landasan tempa dan lain-lain), kotak cetakan dan cetakan (kecuali cetakan ingot) dan perkakas kelim.",
          
        },
        {
          "number": "25933",
          "name": "INDUSTRI ALAT POTONG DAN PERKAKAS TANGAN YANG DIGUNAKAN DALAM RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha pembuatan bermacam-macam pisau, parang\\/golok, pisau bergerigi, pisau cukur, silet, gunting, hair clipper, gunting rambut, gunting kuku, sendok, garpu dan peralatan sejenisnya yang digunakan di dapur dan meja makan. Industri alat-alat dapur (misalnya periuk, panci, dandang dan kompor) dimasukkan dalam kelompok 25992.",
          
        },
        {
          "number": "25934",
          "name": "INDUSTRI PERALATAN UMUM",
          "description": "Kelompok ini mencakup usaha pembuatan peralatan lainnya dari logam yang belum termasuk dalam kelompok 25931 s.d. 25933, misalnya kunci, gembok, kunci pintu, engsel, gerendel dan peralatan sejenisnya untuk bangunan, furnitur dan lainnya. Termasuk industri pisau pendek atau belati, pedang, bayonet, dan lain-lain.",
          
        },
        {
          "number": "25940",
          "name": "INDUSTRI EMBER, KALENG, DRUM DAN WADAH SEJENIS DARI LOGAM",
          "description": "Kelompok ini mencakup usaha pembuatan wadah dari logam\\/kaleng, seperti kaleng makanan\\/minuman, kaleng cat\\/bahan kimia lainnya, tong, drum, ember, kotak, jerrycan dan sejenisnya. Termasuk industri metallic closure.",
          
        },
        {
          "number": "25951",
          "name": "INDUSTRI BARANG DARI KAWAT",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari kawat logam, termasuk tali kawat logam, seperti kawat berduri, pagar kawat, kasa kawat, jaring kawat dan alat pemanggang (grill). Industri kabel listrik dan komunikasi dimasukkan dalam kelompok 27310 dan 27320. Termasuk industri pegas (selain pegas jam), seperti leaf springs, helical springs, torsion bar springs dan lembaran untuk pegas dan industri rantai (kecuali power transmission chain).",
          
        },
        {
          "number": "25952",
          "name": "INDUSTRI PAKU, MUR DAN BAUT",
          "description": "Kelompok ini mencakup usaha pembuatan paku, mur, baut dan barang berulir sejenis yang terbuat dari besi, baja, tembaga, alumunium dan logam lainnya.",
          
        },
        {
          "number": "25991",
          "name": "INDUSTRI BRANKAS, FILLING KANTOR DAN SEJENISNYA",
          "description": "Kelompok ini mencakup pembuatan alat-alat kantor dari logam, seperti brankas, filling cabinet, tidak termasuk furnitur dari logam. Termasuk industri peti besi, lemari besi, pintu lapis baja dan lain-lain.",
          
        },
        {
          "number": "25992",
          "name": "INDUSTRI PERALATAN DAPUR DAN PERALATAN MEJA DARI LOGAM",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat dapur baik dari alumunium maupun dari logam bukan alumunium seperti peralatan makan, piring, piring ceper, mangkok, teko, panci, wajan ketel, periuk, dandang, ketel masak, rantang, baskom, baki, pot dan sejenisnya. Termasuk peralatan bukan listrik lainnya yang digunakan di meja atau di dapur, peralatan kecil dapur lainnya yang digerakkan dengan tangan dan aksesorinya dan alat penggosok dari logam.",
          
        },
        {
          "number": "25993",
          "name": "INDUSTRI KEPERLUAN RUMAH TANGGA DARI LOGAM BUKAN PERALATAN DAPUR DAN PERALATAN MEJA",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat untuk keperluan rumah tangga lainnya baik dari alumunium maupun dari logam bukan alumunium seperti jemuran, tangga, lemari dapur dan lain-lain. Termasuk industri bak mandi, bak cuci (piring), wastafel dan peralatan sejenis.",
          
        },
        {
          "number": "25994",
          "name": "INDUSTRI PEMBUATAN PROFIL",
          "description": "Kelompok ini mencakup usaha pembuatan baja profil dengan cara las, seperti profil H (H-Beam), profil I (I-Beam) dan sejenisnya.",
          
        },
        {
          "number": "25995",
          "name": "INDUSTRI LAMPU DARI LOGAM",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam lampu yang bahan utamanya dari logam, seperti lampu mercu suar, lampu tekan dan lampu gantung termasuk komponennya.",
          
        },
        {
          "number": "25999",
          "name": "INDUSTRI BARANG LOGAM LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang dari logam, yang belum tercakup di subgolongan manapun seperti jepitan rambut, peniti, stapless, paper clips, jarum, jarum jahit, jarum bordir dan jarum sejenisnya, kepala gesper, rantai logam, bel, bingkai (lis) gambar, papan nama logam dan berbagai barang logam yang kecil. Termasuk baling-baling, rantai kapal, jangkar kapal, lonceng, perlengkapan tetap (fixture) rel kereta api yang terpasang, kabel logam yang dijalin pembalut sejenisnya, kabel logam yang tidak terisolasi atau kabel logam terisolasi yang tidak dapat digunakan sebagai konduktor listrik, paku dan paku payung, paku sumbat\\/keling, cincing penutup dan barang-barang tidak berulir sejenis, screw machine product, kantong timah, magnet logam permanen, botol atau kendi logam hampa udara, tanda logam (bukan listrik), lencana logam dan lencana militer logam dan pengeriting rambut dan sisir logam, kerangka dan pegangan payung.",
          
        },
        {
          "number": "26110",
          "name": "INDUSTRI TABUNG ELEKTRON DAN KONEKTOR ELEKTRONIK",
          "description": "Kelompok ini mencakup pembuatan tabung gambar televisi, tabung kamera televisi, tabung dan katup amplifier dan receiver. Termasuk tabung elektron, konektor elektronik, kabel printer, kabel monitor, kabel USB, konektor dan lain-lain, katup elektronik dan tabung lampu.",
          
        },
        {
          "number": "26120",
          "name": "INDUSTRI SEMI KONDUKTOR DAN KOMPONEN ELEKTRONIK LAINNYA",
          "description": "Kelompok ini mencakup pembuatan semi konduktor dan komponen elektronik lainnya, seperti transistor dan peralatan semi konduktor yang sejenis, integrated circuits, printed circuits, induktor, resistor, kapasitor dan berbagai komponen elektronik lainnya. Termasuk industri mikroprosesor, induktor jenis komponen elektronik (misalnya cok, gulungan, trafo), kristal elektronik dan crystal assemblies, solenoida, switch dan transducer untuk aplikasi elektronik, interface cards (misalnya sound (kartu suara), video (kartu video), kontroler, kartu jaringan, modem), komponen layar (plasma, polimer, LCD), light emitting diodes (LED), IC atau integrated circuit (analog, digital, maupun hibrid) dan dioda.Termasuk juga pembuatan sel fotovoltaik dan chip smartcard.",
          
        },
        {
          "number": "26210",
          "name": "INDUSTRI KOMPUTER DAN\\/ATAU PERAKITAN KOMPUTER",
          "description": "Kelompok ini mencakup usaha pembuatan berbagai macam mesin komputasi, seperti komputer desktop, komputer laptop, komputer mainframe, komputer ukuran tangan (misal PDA), komputer tablet, dan server komputer. Termasuk kegiatan perakitan komputer.",
          
        },
        {
          "number": "26220",
          "name": "INDUSTRI PERLENGKAPAN KOMPUTER",
          "description": "Kelompok ini mencakup pembuatan perlengkapan komputer, seperti disk drive magnetik, flash drive dan alat penyimpanan lainnya, disk drive optik (misalnya CD-RW, CD-ROM, DVD-ROM, DVD-RW), printer, monitor, keyboard, mouse, joystick, dan aksesori trackball, terminal komputer, scanner, bar code scanner, smart card reader, proyektor komputer (video beamer), alat perlengkapan media imersif (virtual reality\\/augmented reality\\/mixed reality) seperti virtual reality helmets, augmented reality glasses, dan alat pendukung lainnya. Termasuk industri terminal komputer, seperti anjungan tunai mandiri (ATM), terminal point of sale (POS), yang tidak dioperasikan secara mekanis dan peralatan kantor multifungsi, seperti kombinasi faks-scanner-fotokopi.",
          
        },
        {
          "number": "26310",
          "name": "INDUSTRI PERALATAN TELEPON DAN FAKSIMILI",
          "description": "Kelompok ini mencakup pembuatan alat-alat transmisi komunikasi, seperti peralatan pesawat telepon dan faksimili, termasuk di dalamnya mesin penjawab dan lainnya.",
          
        },
        {
          "number": "26320",
          "name": "INDUSTRI PERALATAN KOMUNIKASI TANPA KABEL (WIRELESS)",
          "description": "Kelompok ini mencakup pembuatan alat-alat transmisi komunikasi, seperti peralatan pager, telepon selular, tablet seluler, dan peralatan komunikasi bergerak (mobile) dan lainnya.",
          
        },
        {
          "number": "26391",
          "name": "INDUSTRI KARTU CERDAS (SMART CARD)",
          "description": "Kelompok ini mencakup pembuatan smart card, seperti perencanaan design chip (design house), perencanaan tata letak sirkuit smart card, industri chip foundry, industri chip module packaging, pembuatan firmware dan software yang berkaitan langsung dengan smart card, chip packaging. Contoh smart card seperti simcard, Near Field Communications (NFC), dengan teknologi 2G, 3G, 4G, 5G dst, kartu perbankan, kartu akses, micro dan macro payment, kartu kredit dan semua kartu yang menggunakan pengaman data dan atau komunikasi.",
          
        },
        {
          "number": "26399",
          "name": "INDUSTRI PERALATAN KOMUNIKASI LAINNYA",
          "description": "Kelompok ini mencakup pembuatan alat-alat transmisi komunikasi lainnya, peralatan Private Branch Exchange (PBX), peralatan komunikasi data (bridge, router, gateway), pesawat telepon tanpa kabel, peralatan TV kabel, antena transmisi (pemancar) dan penerima, peralatan studio televisi dan radio dan peralatan siaran termasuk kamera televisi, modem peralatan carrier, sistem alarm kebakaran dan pencurian, transmitor radio dan televisi, peralatan infrared (misalnya remote kontrol), EDC (Electronic Data Capture) dan lainnya. Termasuk juga pembuatan set top box untuk terestrial dan satelit.",
          
        },
        {
          "number": "26410",
          "name": "INDUSTRI TELEVISI DAN\\/ATAU PERAKITAN TELEVISI",
          "description": "Kelompok ini mencakup pembuatan televisi, seperti pesawat penerima televisi dan kombinasi, monitor televisi dan pertunjukan. Termasuk perakitan televisi.",
          
        },
        {
          "number": "26420",
          "name": "INDUSTRI PERALATAN PEREKAM, PENERIMA DAN PENGGANDA AUDIO DAN VIDEO, BUKAN INDUSTRI TELEVISI",
          "description": "Kelompok ini mencakup pembuatan peralatan audio dan video elektronik untuk hiburan di rumah (home entertainment) untuk rumah tangga dan kendaraan bermotor, seperti pesawat penerima radio dan kombinasi, tape recorder dan video recorder. Termasuk industri peralatan stereo, pemutar CD dan VCD\\/DVD, kamera video jenis rumah tangga dan jukebox.",
          
        },
        {
          "number": "26490",
          "name": "INDUSTRI PERALATAN AUDIO DAN VIDEO ELEKTRONIK LAINNYA",
          "description": "Kelompok ini mencakup pembuatan peralatan elektronika untuk rumah tangga, seperti mikrofon, loudspeaker, headphone, amplifier dan sebagainya. Termasuk industri mesin karaoke, headphone (radio, stereo, komputer) dan konsol video game dan lainnya.",
          
        },
        {
          "number": "26511",
          "name": "INDUSTRI ALAT UKUR DAN ALAT UJI MANUAL",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat pengukur, pemeriksa dan pengujian manual, baik yang ada maupun yang tidak ada hubungannya dengan penyelidikan ilmu pengetahuan dan bersifat mekanis, seperti pesawat ukur, thermometer, barometer, kompas, timbangan presisi, pesawat terapi mekanis, meteran air ledeng dan gas, serta instrumen ukur tanah. Termasuk juga perlengkapan dari peralatan- peralatan tersebut.Kelompok ini mencakup juga usaha pembuatan alat- alat pengukur, pemeriksa dan pengujian manual yang berhubungan dengan kesehatan, seperti timbangan badan dan timbangan bayi.",
          
        },
        {
          "number": "22112",
          "name": "INDUSTRI VULKANISIR BAN",
          "description": "Kelompok ini mencakup usaha perbaikan ban yang telah terpakai (ban bekas) menjadi seperti ban baru, sehingga dapat digunakan lagi untuk kendaraan bermotor, sepeda, kendaraan angkutan lainnya dan peralatan yang memakai ban.",
          
        },
        {
          "number": "22121",
          "name": "INDUSTRI PENGASAPAN KARET",
          "description": "Kelompok ini mencakup usaha pengasapan karet yang dilakukan dengan tujuan mengawetkan karet, seperti Ribbed Smoked Sheet (RSS) dan brown crepe dari pengasapan.",
          
        },
        {
          "number": "22122",
          "name": "INDUSTRI REMILLING KARET",
          "description": "Kelompok ini mencakup usaha pengolahan karet dengan cara digiling sehingga menghasilkan karet dalam bentuk lembaran, seperti sheet (lembaran karet halus) dan crepe (lembaran karet yang berkeriput).",
          
        },
        {
          "number": "22123",
          "name": "INDUSTRI KARET REMAH (CRUMB RUBBER)",
          "description": "Kelompok ini mencakup usaha pengolahan karet yang menghasilkan karet remah, termasuk karet spon (busa).",
          
        },
        {
          "number": "22191",
          "name": "INDUSTRI BARANG DARI KARET UNTUK KEPERLUAN RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari karet, untuk keperluan rumah tangga, seperti karpet karet, selang karet, tabung, pipa atau selang air, benang dan tali karet, benang rajut atau tenun dan kain berlapis karet, penutup bingkai penggulung dari karet, matras karet yang bisa dipompa, balon yang bisa dipompa, sikat dari karet dan matras waterbed (kasur air) dari karet. Termasuk usaha pembuatan keset, tali timba dan pot bunga dari karet.",
          
        },
        {
          "number": "22192",
          "name": "INDUSTRI BARANG DARI KARET UNTUK KEPERLUAN INDUSTRI",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dari karet, untuk keperluan industri, seperti belt conveyor, fan belt, engine mounting, lining dari karet, karet berbentuk plat, lembaran, potongan, batangan dan bentuk profil, perkakas, cincin dan segel dari karet, batang pipa untuk uap panas dari karet keras dan bahan repair dari karet. Seal\\/segel dari karet bagian dan kelengkapan dari motor penggerak, transmisi, body, frame, suspensi, steering, axle terbuat dari karet.",
          
        },
        {
          "number": "22193",
          "name": "INDUSTRI BARANG DARI KARET UNTUK KEPERLUAN INFRASTRUKTUR",
          "description": "Kelompok ini mencakup usaha pembuatan kompon dan barang-barang dari karet untuk keperluan infrastruktur, seperti: kompon untuk aspal karet, serbuk karet alam teraktivasi (SKAT), dock fender, seismic bearing, bantalan jembatan, rubber dam, road bump, rail pad, rail guard, canal blocking, traffic cone.",
          
        },
        {
          "number": "22194",
          "name": "INDUSTRI BARANG DARI KARET UNTUK KESEHATAN",
          "description": "Kelompok ini mencakup usaha pembuatan barang dari karet untuk kebutuhan menunjang kesehatan, antara lain seperti sarung kontrasepsi (KB)\\/kondom, dot dan alat kompres, sarung tangan karet medis, dan kateter urin (folley catheter).",
          
        },
        {
          "number": "22199",
          "name": "INDUSTRI BARANG DARI KARET LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan barang lainnya dari karet, seperti pembuatan barang dari ban bekas dan sisa macam-macam barang dari karet, antara lain sarung tangan karet selain medis. Termasuk barang- barang karet untuk pakaian (jika hanya disatukan bersama, bukan dijahit), sisir, jepit rambut, rol rambut dan sejenisnya dari karet keras, kain tekstil yang diresapi, dilapisi atau dilaminasi dengan karet, di mana karet adalah bahan pokok, topi dan baju mandi dari karet, jas hujan dan pakaian menyelam dari karet dan alat-alat seks dari karet.",
          
        },
        {
          "number": "22210",
          "name": "INDUSTRI BARANG DARI PLASTIK UNTUK BANGUNAN",
          "description": "Kelompok ini mencakup usaha pembuatan barang dari plastik untuk bangunan, seperti pintu, jendela, kusin, daun penutup jendela, kerai, skirting boards dari plastik, tangki, tandon air dari plastik, penutup lantai, dinding dan langit-langit plastik dalam bentuk gulungan atau lembaran dan peralatan kebersihan dari plastik, seperti hordeng plastik, shower, wastafel, lavatory pan, bak penyiram (flushing) dan lain-lain.",
          
        },
        {
          "number": "22220",
          "name": "INDUSTRI BARANG DARI PLASTIK UNTUK PENGEMASAN",
          "description": "Kelompok ini mencakup usaha pembuatan kemasan dari plastik, seperti tas atau kantong plastik, sak atau karung plastik, kemasan kosmetik, kemasan film, kemasan obat, kemasan makanan dan kemasan lainnya dari plastik (wadah, botol, boks, kotak, rak dan lain-lain).",
          
        },
        {
          "number": "22230",
          "name": "INDUSTRI PIPA PLASTIK DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha pembuatan pipa dan selang dari plastik, seperti pipa PVC\\/PE\\/PP dan selang plastik PVC\\/PE\\/PP. Termasuk tabung plastik dan perlengkapan pipa.",
          
        },
        {
          "number": "22291",
          "name": "INDUSTRI BARANG PLASTIK LEMBARAN",
          "description": "Kelompok ini mencakup usaha pembuatan barang plastik lembaran, seperti plastik lembaran berbagai jenis PE\\/PP\\/PVC, kulit imitasi, formika, kaca plastik dan plastik lembaran lainnya. Termasuk plate plastik, lembaran plastik, balok plastik, film, foil, potongan plastik dan lain-lain (baik berperekat atau tidak).",
          
        },
        {
          "number": "22292",
          "name": "INDUSTRI PERLENGKAPAN DAN PERALATAN RUMAH TANGGA (TIDAK TERMASUK FURNITUR)",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang perlengkapan dan peralatan rumah tangga dari plastik, seperti tikar, karpet, ember, sikat gigi, vas dan peralatan rumah tangga lainnya. Termasuk industri peralatan makan, peralatan dapur dan barang-barang toilet plastik serta industri penutup lantai elastis, seperti vynil, linoleum dan sebagainya.",
          
        },
        {
          "number": "22293",
          "name": "INDUSTRI BARANG DAN PERALATAN TEKNIK\\/INDUSTRI DARI PLASTIK",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang dan peralatan teknik\\/industri dari plastik, seperti bagian-bagian mesin, bagian dan kelengkapan dari motor penggerak, transmisi, body, frame, suspensi, steering, axle terbuat dari plastik, botol-botol, pipa-pipa dan lemari plastik untuk keperluan teknik\\/industri. Termasuk industri ban berjalan pembawa barang (conveyer belt).",
          
        },
        {
          "number": "22299",
          "name": "INDUSTRI BARANG PLASTIK LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang yang belum diklasifikasikan dimanapun, seperti peralatan kantor\\/pendidikan, peralatan kesehatan\\/laboratorium dari plastik, film atau lembaran kertas kaca (cellophane), batu buatan dari plastik, tanda dari plastik (bukan listrik), berbagai barang plastik, seperti tutup kepala, peralatan penyekat, bagian dari peralatan penerangan, barang-barang kantor atau sekolah, barang-barang pakaian (jika hanya disegel atau disatukan, tidak dijahit), perlengkapan untuk furnitur, patung, tape perekat dari plastik, kertas dinding plastik, alas sepatu dari plastik, pegangan cerutu dan rokok dari plastik, sisir, pengeriting rambut dari plastik, barang kesenangan dari plastik dan sebagainya. Termasuk juga pembuatan barang dari busa plastik. Pembuatan barang-barang peralatan olahraga dimasukkan dalam kelompok 32300. Pembuatan mainan anak-anak dari plastik dimasukkan dalam kelompok 32402. Pembuatan tas, buku saku dan sejenisnya dari kulit dan kulit buatan diklasifikasikan dalam kelompok 15121.",
          
        },
        {
          "number": "28199",
          "name": "INDUSTRI MESIN UNTUK KEPERLUAN UMUM LAINNYA YTDL",
          "description": "Kelompok ini mencakup pembuatan mesin umum lainnya, seperti fire sprinklers, mesin penyaring dan pembersih cairan dan gas, unit penyulingan cairan, peralatan untuk proyeksi, penyebaran atau penyemprotan cairan atau bubuk, seperti pistol semprot, pemadam api, mesin penyemprot pasir, mesin pembersih dengan uap air dan lain-lain, mesin penyulingan atau rektifikasi untuk kilang minyak, industry kimia, industry minuman dan lain-lain, mesin penukar panas (heat exchanger), mesin untuk mencairkan udara atau gas, generator gas, mesin penggulung lainnya dan silindernya (kecuali untuk logam dan kaca) termasuk calendering machine (mesin pres), mesin sentrifugal (kecuali mesin pemisah krim dan pengering pakaian), mesin paking dan tali untuk isolasi dan sejenisnya yang terbuat dari kombinasi bahan atau lapisan bahan yang sama, mesin penjual barang otomatis, kipas ventilasi loteng (kipas gable\\/dinding, ventilasi atap dan lain-lain), meteran pita dan perkakas tangan sejenis, alat presisi masinis (bukan optik) dan peralatan patri dan solder bukan listrik. Termasuk pembuatan komponen dan peralatannya.",
          
        },
        {
          "number": "28210",
          "name": "INDUSTRI MESIN PERTANIAN DAN KEHUTANAN",
          "description": "Kelompok ini mencakup usaha pembuatan mesin-mesin untuk penyiapan dan pengolahan lahan pertanian dan kehutanan misalnya traktor dan mesin bajak; mesin-mesin penanam, pemupuk, pemeliharaan tanaman dan pemanenan hasil-hasil (misalnya mesin penabur benih, mesin penugal, mesin penabur pupuk, mesin pemanen, mesin penyemprot, mesin pemotong rumput dan mesin penuai); serta mesin-mesin untuk pengolahan awal hasil pertanian (misalnya mesin perontok, mesin pengupas, mesin penyosoh dan mesin penggilingan gabah), trailer (kereta gandeng) atau semi trailer bongkar muat secara otomatis untuk pertanian, mesin pembersih dan pemilih atau penyortir telur, buah-buahan dan hasil perkebunan, mesin pemerah susu, mesin penghangat unggas, mesin beternak lebah, peralatan untuk penyiapan makanan ternak dan mesin lainnya untuk keperluan tanaman pangan, peternakan, perkebunan dan kehutanan. Termasuk mesin pembuatan komponen dan perlengkapan\\/implement mesin-mesin pertanian.",
          
        },
        {
          "number": "28221",
          "name": "INDUSTRI MESIN DAN PERKAKAS MESIN UNTUK PENGERJAAN LOGAM",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin\\/peralatan untuk pengolahan dan pengerjaan logam, seperti mesin perkakas (misalnya mesin bubut, mesin freis, mesin gerinda, mesin gergaji, mesin press, mesin gunting), serta perlengkapan dan komponennya (seperti cutting tools, mould and dies, jig and fixture).",
          
        },
        {
          "number": "28222",
          "name": "INDUSTRI MESIN DAN PERKAKAS MESIN UNTUK PENGERJAAN KAYU",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin\\/peralatan untuk pengolahan dan pengerjaan kayu, bambu, rotan, gabus dan sejenisnya, seperti berbagai mesin\\/peralatan, baik yang sederhana maupun modern, yang digunakan untuk pabrik sawmill, plywood, pabrik pengolahan rotan dan sejenisnya. Termasuk pula usaha pembuatan komponen dan perlengkapannya.",
          
        },
        {
          "number": "28223",
          "name": "INDUSTRI MESIN DAN PERKAKAS MESIN UNTUK PENGERJAAN BAHAN BUKAN LOGAM DAN KAYU",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin\\/peralatan untuk pengolahan dan pengerjaan bahan selain logam dan kayu, seperti mesin\\/peralatan untuk pengolahan karet yang diperkeras (hardened rubber), plastik tebal (hard plastic), kaca, tulang dan lainnya.",
          
        },
        {
          "number": "28224",
          "name": "INDUSTRI MESIN DAN PERKAKAS MESIN UNTUK PENGELASAN YANG MENGGUNAKAN ARUS LISTRIK",
          "description": "Kelompok ini mencakup pembuatan mesin\\/peralatan untuk pengelasan dengan gas atau arus listrik, seperti mesin las listrik AC maupun DC. Termasuk pula pembuatan mesin sejenis yang menggunakan laser, photon beam, gelombang ultrasonic, electron beam dan magnetic pulse.",
          
        },
        {
          "number": "28230",
          "name": "INDUSTRI MESIN METALURGI",
          "description": "Kelompok ini mencakup pembuatan mesin dan perlengkapannya untuk pengerjaan logam panas, seperti mesin pengubah (converter), cetakan baja (ingot moulds), pencedok dan penuang dan mesin peleburan, mesin penggilingan penggulung logam dan penggulung untuk penggilingan sejenisnya. Termasuk pula pembuatan mesin canai logam baik panas maupun dingin.",
          
        },
        {
          "number": "28240",
          "name": "INDUSTRI MESIN PENAMBANGAN, PENGGALIAN DAN KONSTRUKSI",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin peralatan untuk kegiatan pertambangan, penggalian, dan konstruksi, seperti alat pengangkat dan alat pengangkut (misalnya conveyor), mesin untuk menyaring, mensortir, memisahkan, mencuci, menghancurkan bahan-bahan mineral, mesin pengeboran, pemotongan dan mesin terowongan dan sinking (baik untuk penggunaan di bawah tanah atau tidak), traktor yang digunakan dalam kegiatan pertambangan dan konstruksi, mesin pemindah tanah, seperti bulldozer, angle dozer, graders, scrapers, leveler, sekop, sekop pemuatan dan perlengkapannya, dan berbagai mesin untuk kegiatan konstruksi, dan mesin pencampur beton dan mortar, mesin pile-driver dan pile ekstraktor, penyebar mortar dan aspal, mesin penghalus permukaan beton dan lain- lain, traktor tracklaying dan traktor yang digunakan dalam konstruksi atau pertambangan, pisau bulldozer dan angle dozer dan truk dumping off-road.Termasuk pembuatan bagian\\/komponen dan perlengkapannya. Pembuatan traktor untuk pertanian dimasukkan dalam kelompok 28210.",
          
        },
        {
          "number": "28250",
          "name": "INDUSTRI MESIN PENGOLAHAN MAKANAN, MINUMAN DAN TEMBAKAU",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin untuk pengolahan berbagai makanan, minuman dan tembakau, seperti mesin pengolah makanan dan susu, mesin pengering pertanian, mesin pemisah krim, mesin pengolahan susu (misalnya homogenizers), mesin pengubah susu (misalnya pembuat keju, dan mesin pencetak keju) dan mesin pembuat keju (misalnya homogenizers, pencetakan, pengepresan), mesin untuk industri penggilingan padi atau biji-bjian, seperti mesin untuk membersihkan, memilih atau memilah benih padi atau biji-bijian dan sayuran kacang-kacangan yang dikeringkan (mesin penampi, lajur penyaring, pemisah, mesin penyikat biji-bijian dan lain-lain); dan mesin untuk memproduksi tepung dan bahan makanan dan lain-lain (mesin penggilingan biji-bijian, penyaring, pengayak tepung, pengisi, blender, pembersih kulit padi, penggilingan padi, pemecah kacang kapri dan lainnya), mesin pembuat minuman anggur dan juice buah, mesin pembuat roti, mie dan spaghetti dan sejenis seperti oven roti, mixer, pembuat adonan, cetakan, pemotong, mesin pembuat roti dan lain-lain, mesin pembuat rokok dan berbagai mesin pengolahan makanan yang lain. Termasuk mesin untuk industri roti atau pembuat macaroni, mesin dan peralatan untuk pengolahan berbagai makanan, seperti mesin untuk membuat gula-gula, kokoa atau coklat, mesin untuk industri gula, mesin untuk pembuatan bir, mesin untuk pengolahan daging dan unggas, mesin untuk pengolahan buah-buahan, kacang-kacangan dan sayuran, mesin untuk pengolahan ikan, kerang-kerangan dan hasil laut lainnya; mesin untuk penyulingan dan pemurnian; dan mesin lainnya untuk industri dan pengolahan makanan dan minuman; mesin pengambilan dan pengolahan minyak dan lemah hewan dan tumbuhan; mesin untuk pengolahan tembakau dan untuk pembuatan rokok dan cerutu atau untuk tembakau pipa atau tembakau kunyah atau snuff; mesin pengolahan makanan di hotel dan restoran.",
          
        },
        {
          "number": "28261",
          "name": "INDUSTRI KABINET MESIN JAHIT",
          "description": "Kelompok ini mencakup pembuatan kabinet mesin jahit, baik dari kayu, plywood, maupun dari logam.",
          
        },
        {
          "number": "28262",
          "name": "INDUSTRI MESIN JAHIT SERTA MESIN CUCI DAN MESIN PENGERING UNTUK KEPERLUAN NIAGA",
          "description": "Kelompok ini mencakup pembuatan mesin jahit dan kepala mesin jahit, baik untuk keperluan rumah tangga maupun untuk untuk keperluan niaga, termasuk pembuatan mesin obras, mesin bordir, mesin oversum dan mesin-mesin untuk penatu dan dry cleaning (mesin cuci, mesin pengering, mesin penyeterika dan lain-lain). Pembuatan mesin cuci, mesin pengering dan sejenisnya untuk keperluan rumah tangga dimasukkan dalam kelompok 27510.",
          
        },
        {
          "number": "28263",
          "name": "INDUSTRI MESIN TEKSTIL",
          "description": "Kelompok ini mencakup usaha pembuatan mesin-mesin tekstil, seperti mesin persiapan pengolahan serat, mesin pintal, mesin persiapan pembuatan kain, mesin tenun, mesin rajut, mesin pemeriksa kesalahan kain, mesin-mesin penyelesaian (finishing), mesin konveksi dan sejenisnya.",
          
        },
        {
          "number": "28264",
          "name": "INDUSTRI JARUM MESIN JAHIT, RAJUT, BORDIR DAN SEJENISNYA",
          "description": "Kelompok ini mencakup pembuatan jarum untuk mesin jahit, rajut, bordir dan sejenisnya.",
          
        },
        {
          "number": "28265",
          "name": "INDUSTRI MESIN PENYIAPAN DAN PEMBUATAN PRODUK KULIT",
          "description": "Kelompok ini mencakup pembuatan mesin produk kulit, seperti mesin untuk penyiapan, penyamakan, atau pengerjaan kulit atau kulit jangat dan mesin untuk membuat atau memperbaiki alas kaki atau produk lainnya dari kulit, kulit jangat dan kulit berbulu.",
          
        },
        {
          "number": "28291",
          "name": "INDUSTRI MESIN PERCETAKAN",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin percetakan, seperti mesin press sederhana, mesin press silinder, mesin press putar dan mesin cetak lainnya. Termasuk mesin-mesin perlengkapan percetakan dan mesin penjilid, seperti mesin jahit buku, mesin penjilid dengan menggunakan spiral dan mesin penomor halaman.",
          
        },
        {
          "number": "28292",
          "name": "INDUSTRI MESIN PABRIK KERTAS",
          "description": "Kelompok ini mencakup pembuatan mesin pabrik kertas,seperti mesin untuk pengolahan pulp, kertas dan karton misalnya mesin pembuatan bubur kertas, mesin pembuatan kertas dan papan kertas, mesin pengeringan kayu, bubur kertas, kertas atau papan kertas, dan mesin untuk pembuatan barang-barang dari kertas atau papan kertas, seperti mesin pemotong kertas, pembuat amplop, kantong kertas dan sejenisnya dan mesin-mesin lainnya",
          
        },
        {
          "number": "28299",
          "name": "INDUSTRI MESIN KEPERLUAN KHUSUS LAINNYA",
          "description": "Kelompok ini mencakup industri berbagai mesin-mesin industri khusus lainnya yang belum termasuk kelompok sebelumnya, seperti mesin untuk pengerjaan karet atau plastik lunak atau untuk pembuatan produk dari bahan tersebut, seperti mesin extrude, pencetak, mesin pembuatan ban angin (pneumatik) atau ban vulkanisir, mesin lainnya untuk pembuatan produk dari plastik atau karet khusus, mesin cetak dan penjilidan buku dan mesin untuk pendukung pencetakan pada berbagai macam bahan, mesin cetak 3 dimensi (3d printing), mesin untuk memproduksi ubin, batu bata, perekat keramik potongan, pipa, grafit elektroda, kapur tulis, cetakan besi tuang dan lain-lain, mesin pabrik semi konduktor, robot industri yang menjalankan berbagai tugas untuk keperluan khusus, mesin untuk merakit lampu listrik dan lampu elektronik, tabung atau bola lampu, mesin untuk memproduksi atau pekerjaan panas dari kaca atau barang-barang dari kaca, serat kaca atau benang dan mesin atau peralatan untuk pemisahan isotopik, peralatan meluruskan dan menyeimbangkan ban (kecuali penyeimbang roda), mesin untuk memasang dan melepas ban (termasuk ban untuk alat berat dan alat pertahanan), sistem pelumasan pusat, persneling pesawat terbang (launching gear), pelontar pembawa pesawat terbang (carrier catapult) dan peralatan yang terkait, peralatan arena bowling otomatis (pin-setter), peralatan jalan berputar (roundabouts), ayunan, galeri menembak, gelanggang hiburan atau permainan lainnya, mesin pembuat briket dari produk pertanian dan mesin-mesin khusus lainnya.",
          
        },
        {
          "number": "29101",
          "name": "INDUSTRI KENDARAAN BERMOTOR RODA EMPAT ATAU LEBIH",
          "description": "Kelompok ini mencakup usaha pembuatan atau perakitan kendaraan bermotor untuk penumpang atau barang, seperti sedan, jeep, truck, pick up, bus dan stasion wagon dan sejenisnya dengan menggunakan mesin piston pembakaran dalam bolak-balik cetus api atau berputar, mesin piston bolak balik nyala kompresi (diesel atau semi diesel), atau motor listrik untuk penggerak. Termasuk pembuatan kendaraan untuk keperluan khusus, seperti mobil pemadam kebakaran, mobil toko, mobil penyapu jalan, ambulans, mobil salju, mobil golf, kendaraan amfibi, perpustakaan mobil (travelling libraries), mobil berlapis baja, lori pencampur beton dan ATV, go cart, mobil balap dan sejenisnya.Kelompok ini juga mencakup usaha pembuatan mesin kendaraan bermotor, chasis mesin dan industri pembangunan kembali mesin kendaraan bermotor.",
          
        },
        {
          "number": "29102",
          "name": "INDUSTRI KENDARAAN MULTIGUNA PEDESAAN",
          "description": "Kelompok ini mencakup usaha pembuatan atau perakitan kendaraan multiguna pedesaan atau dikenal sebagai AMMDES (Alat Mekanis Multiguna Pedesaan) yang dilengkapi dengan komponen seperti Power Take off (PTO), differential lock dan lain-lain yang menjadikannya multifungsi, antara lain sebagai alat transportasi, alat produksi maupun menggerakkan alat bantu lainnya sehingga mampu menjalankan berbagai fungsi sebagai mesin pegolahan seperti mesin-mesin untuk pengolahan hasil pertanian (mesin perontok, mesin pengupas, mesin penyosoh dan mesin penggilingan gabah), mesin perjernih dan pengolahan air minum, dan fungsi lainnya untuk keperluan tanaman pangan, peternakan, perikanan, perkebunan, kehutanan dan lain-lain. Termasuk untuk alat bantu penunjang kebutuhan medis seperti pengumpan ambulan (ambulance feeder).",
          
        },
        {
          "number": "29200",
          "name": "INDUSTRI KAROSERI KENDARAAN BERMOTOR RODA EMPAT ATAU LEBIH DAN INDUSTRI TRAILER DAN SEMI TRAILER",
          "description": "Kelompok ini mencakup usaha pembuatan bagian-bagian mobil atau karoseri kendaraan bermotor, seperti bak truk, bodi bus, bodi pick up, bodi untuk kendaraan penumpang, dan kendaraan bermotor untuk penggunaan khusus, seperti kontainer, caravan dan mobil tangki. Termasuk pembuatan trailer, semi trailer dan bagian-bagiannya.",
          
        },
        {
          "number": "29300",
          "name": "INDUSTRI SUKU CADANG DAN AKSESORI KENDARAAN BERMOTOR RODA EMPAT ATAU LEBIH",
          "description": "Kelompok ini mencakup usaha pembuatan komponen dan suku cadang kendaraan bermotor roda empat atau lebih, seperti leaf sporing, radiator, fuel tank, muffle, rem, gearboxes\\/persnelling, AS roda, road wheel, suspension shock absorber, silencer, pipa pembuangan, kataliser pengubah, kopling, roda kemudi, sistem kolom kemudi dan kotak kemudi; suku cadang dan aksesori untuk bodi karoseri kendaraan bermotor, seperti sabuk pengaman, pintu, bamper, airbag; tempat duduk mobil; peralatan listrik kendaraan bermotor, seperti generator, alternator, busi, ignition wiring harnesses\\/starter, sistem buka tutup pintu dan jendela otomatis, pemasangan argometer ke dalam panel instrumen, pengatur voltawse; inverter untuk kendaraan bermotor roda empat atau lebih; dan lain-lain.",
          
        },
        {
          "number": "30111",
          "name": "INDUSTRI KAPAL DAN PERAHU",
          "description": "Kelompok ini mencakup usaha pembuatan atau perakitan macam-macam kapal dan perahu komersil, yang terbuat dari baja, fibre glass, kayu atau ferro cement, baik yang bermotor maupun yang tidak bermotor, seperti kapal penumpang, kapal ferry, kapal kargo, kapal tanker, kapal penyeret, kapal layar untuk komersil, kapal perang, kapal untuk penelitian, kapal penangkap ikan dan kapal untuk pabrik pengolahan ikan.",
          
        },
        {
          "number": "30112",
          "name": "INDUSTRI BANGUNAN LEPAS PANTAI DAN BANGUNAN TERAPUNG",
          "description": "Kelompok ini mencakup usaha pembuatan konstruksi atau bangunan lepas pantai dan bangunan terapung, termasuk peralatan dan perlengkapannya, seperti konstruksi platform, bangunan terapung atau penyelaman untuk kegiatan pengeboran; konstruksi bangunan terapung, seperti dok terapung, sekoci dan kran apung, jembatan apung, ponton, coffer-dam, bangunan tempat pendaratan terapung, living quarter, jacket, platform dan morring buoy, pelampung\\/buoys, tangki terapung, kapal barkas, tongkang, kapal derek, rakit yang dapat diisi udara bukan untuk rekreasi dan lain-lain. Termasuk pembuatan hovercraft, kecuali hovercraft jenis rekreasi.",
          
        },
        {
          "number": "30113",
          "name": "INDUSTRI PERALATAN, PERLENGKAPAN DAN BAGIAN KAPAL",
          "description": "Kelompok ini mencakup usaha pembuatan perlengkapan, peralatan dan bagian kapal, seperti perlengkapan lambung, akomodasi kerja mesin geladak, alat kemudi dan alat bongkar muat.",
          
        },
        {
          "number": "30120",
          "name": "INDUSTRI PEMBUATAN KAPAL DAN PERAHU UNTUK TUJUAN WISATA ATAU REKREASI DAN OLAHRAGA",
          "description": "Kelompok ini mencakup usaha pembuatan kapal pesiar dan perahu untuk santai dan olahraga, seperti perahu dan rakit karet yang dapat diisi udara, kapal atau perahu layar (yatch) dengan atau tanpa motor penggerak, motor boats, hovercraft untuk rekreasi, kendaraan air pribadi, perahu untuk olahraga dan kapal pesiar yang lain, seperti kano, kayak, perahu dayung, sampan dan lain-lain.",
          
        },
        {
          "number": "30200",
          "name": "INDUSTRI LOKOMOTIF DAN GERBONG KERETA",
          "description": "Kelompok ini mencakup usaha pembuatan atau perakitan lokomotif kereta api listrik, diesel, uap dan lainnya; gerbong kereta api self propelled (pendorong sendiri) atau gerbong kereta api listrik atau trem, vans dan truk, termasuk perawatan atau perbaikannya; gerbong keretra api atau kereta api listrik, tidak self-propelled (pendorong sendiri), seperti gerbong penumpang, gerbong barang, gerbong tangki, gerbong bengkel, gerbong mobil derek, gerbong dan kereta pembongkar, gerobak dan lain-lain; suku cadang khusus kereta api atau kereta api listrik atau gerbong, seperti bogies, as dan roda, rem dan suku cadang rem, peralatan kopling dan hook, buffer dan suku cadang buffer, sok breker, kerangka lokomotif dan gerbong; bodi karoseri, penghubung antarkoridor dan lain-lain; peralatan signal mekanik dan elektromagnetik, peralatan pengaman dan pengontrol rambu-rambu kereta api, kereta api listrik, lalu lintas air, jalan raya, fasilitas parkir, lapangan udara dan lain-lain; lokomotif tambang dan kendaraan rel tambang; dan tempat duduk kereta api.",
          
        },
        {
          "number": "30300",
          "name": "INDUSTRI PESAWAT TERBANG DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha pembuatan atau perakitan dan modifikasi pesawat terbang untuk penumpang atau barang, seperti pesawat terbang bermesin jet, pesawat terbang propeller, helikopter, balon udara dan pesawat layang.Kelompok ini juga mencakup usaha pembuatan pesawat terbang untuk angkatan bersenjata, olahraga atau tujuan lain, pesawat peluncur dan pesawat peluncur gantung, wahana terbang tanpa awak (drone), kapal seplin\\/balon berkemudi dan balon udara panas, suku cadang dan aksesori pesawat terbang, seperti rakitan utama seperti badan pesawat terbang, sayap, pintu, pengontrol permukaan, roda gigi untuk mendarat, tanki bahan bakar, nacelles dan lain-lain; baling-baling, pisau rotor helikopter dan rotor pendorong; berbagai macam motor dan mesin yang terdapat di pesawat terbang; dan suku cadang jet turbo dan pendorong turbo untuk pesawat terbang, pesawat terbang latih darat, pesawat ruang angkasa dan pesawat peluncuran, satelit, satelit yang berhubungan dengan planet, stasiun orbit, shuttles dan intercontinental ballistic missiles (ICBM)\\/roket antarbenua. Termasuk pemeriksaan dan konversi pesawat atau mesin pesawat dan pembuatan tempat duduk pesawat terbang.",
          
        },
        {
          "number": "30400",
          "name": "INDUSTRI KENDARAAN PERANG",
          "description": "Kelompok ini mencakup pembuatan tank dan kendaraan lapis baja. Termasuk pembuatan kendaraan militer amfibi lapis baja dan kendaraan perang militer lainnya.",
          
        },
        {
          "number": "30911",
          "name": "INDUSTRI SEPEDA MOTOR RODA DUA DAN TIGA",
          "description": "Kelompok ini mencakup usaha pembuatan dan perakitan secara lengkap dari macam-macam kendaraan bermotor roda dua dan tiga, seperti sepeda motor, moped, skuter, bemo, a side-cars dan sejenisnya dengan menggunakan mesin piston pembakaran dalam bolak-balik cetus api atau berputar, atau motor listrik untuk penggerak. Termasuk sepeda yang dilengkapi motor.",
          
        },
        {
          "number": "30912",
          "name": "INDUSTRI KOMPONEN DAN PERLENGKAPAN SEPEDA MOTOR RODA DUA DAN TIGA",
          "description": "Kelompok ini mencakup usaha pembuatan komponen dan suku cadang kendaraan bermotor roda dua dan tiga, seperti motor pembakaran dalam, suspensi dan knalpot. Termasuk inverter untuk kendaraan bermotor roda dua dan tiga",
          
        },
        {
          "number": "30921",
          "name": "INDUSTRI SEPEDA DAN KURSI RODA TERMASUK BECAK",
          "description": "Kelompok ini mencakup usaha pembuatan dan perakitan macam-macam sepeda dan becak, seperti sepeda tanpa motor, sepeda roda tiga (pengantar), tandem (sepeda gandeng), dan sepeda anak-anak baik roda dua maupun roda tiga, termasuk pula pembuatan kereta bayi dan kendaraan difabel atau kursi roda baik bermotor maupun tidak.",
          
        },
        {
          "number": "30922",
          "name": "INDUSTRI PERLENGKAPAN SEPEDA DAN KURSI RODA TERMASUK BECAK",
          "description": "Kelompok ini mencakup usaha pembuatan suku cadang atau komponen dan aksesori sepeda, kereta bayi, kursi roda dan becak, seperti sadel, pedal, velg, rem, jari-jari, roda dan tire ventil. Usaha pembuatan ban sepeda (luar dan dalam) dimasukkan dalam kelompok 22111 dan 22112.",
          
        },
        {
          "number": "30990",
          "name": "INDUSTRI ALAT ANGKUTAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan alat angkut yang belum termasuk kelompok lainnya, baik kendaran yang didorong oleh tangan maupun kendaraan yang ditarik binatang, seperti truk barang, handcart, sledge, troli, gerobak, delman, lori, kereta dorong, wheel barrows, kereta balap (sulkies), pedati yang ditarik keledai, kereta jenazah (keranda) dan alat pengangkutan lainnya.",
          
        },
        {
          "number": "31001",
          "name": "INDUSTRI FURNITUR DARI KAYU",
          "description": "Kelompok ini mencakup usaha pembuatan furnitur dari kayu untuk rumah tangga dan kantor, seperti meja, kursi, bangku, tempat tidur, lemari, rak, kabinet, penyekat ruangan dan sejenisnya.",
          
        },
        {
          "number": "31002",
          "name": "INDUSTRI FURNITUR DARI ROTAN DAN ATAU BAMBU",
          "description": "Kelompok ini mencakup pembuatan furnitur dengan bahan utamanya dari rotan dan atau bambu, seperti meja, kursi, bangku, tempat tidur, lemari, rak, penyekat ruangan dan sejenisnya.",
          
        },
        {
          "number": "31003",
          "name": "INDUSTRI FURNITUR DARI PLASTIK",
          "description": "Kelompok ini mencakup pembuatan furnitur yang bahan utamanya dari plastik, seperti meja, kursi, rak dan sejenisnya.",
          
        },
        {
          "number": "31004",
          "name": "INDUSTRI FURNITUR DARI LOGAM",
          "description": "Kelompok ini mencakup pembuatan furnitur untuk rumah tangga dan kantor yang bahan utamanya dari logam, seperti meja, kursi, rak, spring bed dan sejenisnya.",
          
        },
        {
          "number": "31009",
          "name": "INDUSTRI FURNITUR LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan furnitur yang bahan utamanya bukan kayu, rotan, bambu, logam, plastik dan bukan barang imitasi, seperti bahan pelengkap matras atau kasur, matras atau kasur dengan per atau pegas atau yang yang diisi atau disumpal atau dilengkapi dengan bahan pelengkap lainnya (kapok, dakron) dan matras atau kasur plastik atau karet yang tidak dilapisi dan matras atau kasur sejenisnya. Termasuk kereta restoran dekorasi, seperti kereta desert, kereta makanan.",
          
        },
        {
          "number": "32111",
          "name": "INDUSTRI PERMATA",
          "description": "Kelompok ini mencakup usaha pemotongan, pengasahan dan penghalusan batu berharga atau permata dan sejenisnya, seperti berlian perhiasan, intan perhiasan, batu aji\\/ batu akik dan intan tiruan.",
          
        },
        {
          "number": "32112",
          "name": "INDUSTRI BARANG PERHIASAN DARI LOGAM MULIA UNTUK KEPERLUAN PRIBADI",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang perhiasan yang bahan utamanya dari logam mulia (emas, platina dan perak) untuk keperluan pribadi, seperti cincin, kalung, gelang, giwang, bross, ikat pinggang dan kancing, termasuk bagian dan perlengkapannya. Pembuatan perhiasan imitasi dimasukkan dalam kelompok 32120.",
          
        },
        {
          "number": "32113",
          "name": "INDUSTRI BARANG PERHIASAN DARI LOGAM MULIA BUKAN UNTUK KEPERLUAN PRIBADI",
          "description": "Kelompok ini mencakup usaha pembuatan perhiasan yang bahan utamanya dari logam mulia selain untuk keperluan pribadi, seperti peralatan makan dan minum, piring-piring ceper, wadah-wadah berongga, barang-barang toilet, barang hiasan untuk rumah tangga, barang-barang kantor atau meja, piala, medali dan noveltis atau barang-barang yang berhubungan dengan keagamaan, termasuk bagian dan perlengkapannya.",
          
        },
        {
          "number": "32114",
          "name": "INDUSTRI BARANG DARI LOGAM MULIA UNTUK KEPERLUAN TEKNIK DAN ATAU LABORATORIUM",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang untuk keperluan teknik dan atau laboratorium dari logam mulia (tidak termasuk instrument dan bagian-bagiannya), seperti spatula, crucibles, cuples, platinum grill yang digunakan sebagai katalisator dan electro-plating anodes.",
          
        },
        {
          "number": "32115",
          "name": "INDUSTRI PERHIASAN MUTIARA",
          "description": "Kelompok ini mencakup usaha pengerjaan mutiara dan pembuatan perhiasan dari mutiara atau perhiasan berbahan dasar utamanya adalah mutiara.",
          
        },
        {
          "number": "32119",
          "name": "INDUSTRI BARANG LAINNYA DARI LOGAM MULIA",
          "description": "Kelompok ini mencakup usaha pembuatan barang lainnya dari logam mulia, seperti tali jam tangan dari logam mulia, manset, ikat jam tangan dan kotak rokok. Termasuk pembuatan koin baik yang legal sebagai alat tukar maupun tidak dan jasa engraving baik pada perhiasan dari logam mulia atau bukan. Pembuatan case (badan) jam dan perhiasan jam dimasukkan dalam kelompok 26520.",
          
        },
        {
          "number": "32120",
          "name": "INDUSTRI PERHIASAN IMITASI DAN BARANG SEJENIS",
          "description": "Kelompok ini mencakup usaha pembuatan perhiasan imitasi dan sejenisnya, seperti cincin, gelang, kalung dan barang-barang sejenisnya yang dibuat dari logam dasar yang dilapisi logam mulia, perhiasan dengan batu imitasi seperti batu permata imitasi, berlian imitasi dan sejenisnya. Termasuk pembuatan tali jam tangan dari logam (kecuali logam mulia).",
          
        },
        {
          "number": "32201",
          "name": "INDUSTRI ALAT MUSIK TRADISIONAL",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat musik tradisional baik alat musik senar, tiup, pukul dan lainnya, seperti kecapi, seruling bambu, angklung, calung, kulintang, gong, gambang, gendang, terompet tradisional, rebab dan tifa. Termasuk pembuatan peluit, call horn (semacam terompet) dan alat sinyal suara yang ditiup lainnya.",
          
        },
        {
          "number": "32202",
          "name": "INDUSTRI ALAT MUSIK BUKAN TRADISIONAL",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat musik non tradisional, seperti alat musik petik (gitar, bass dan sejenisnya), alat musik tiup (terompet, saxophone, clarinet, harmonika dan sejenisnya), alat musik gesek (biola, cello dan sejenisnya), alat musik perkusi (drum set, selofon, metalofon dan sejenisnya). Termasuk usaha pembuatan piano\\/organ, pianika gamitan, akordeon dan garpu tala. Usaha pembuatan mikrofon, loudspeaker, headphone dan komponen yang sejenisnya dimasukkan dalam kelompok 26420. Sedangkan alat-alat musik untuk mainan dimasukkan dalam kelompok 32402.",
          
        },
        {
          "number": "32300",
          "name": "INDUSTRI ALAT OLAHRAGA",
          "description": "Kelompok ini mencakup usaha pembuatan alat-alat olahraga, seperti bola sepak, bola basket, bola volley, raket tenis, raket bulu tangkis, net volley, net pingpong, stik golf, stik hockey, meja pingpong, ski bindings dan poles (galah), sepatu ski, papan layar dan papan selancar, peralatan untuk olahraga memancing termasuk jaring penyerok, peralatan untuk berburu, panjat gunung, sarung tangan dan tutup kepala olahraga dari kulit, ice skate, roller skate, busur dan panah, peralatan untuk olahraga ketangkasan, peralatan gimnastik (senam), peralatan pusat kebugaran (fitness centre) atau peralatan atletik dan matras.Kelompok ini tidak termasuk usaha pembuatan layar perahu (13929), pakaian olahraga (14111), pakaian kuda (15123), sepatu olahraga (15202), senjata untuk olahraga (25200), sepeda olahraga (30921), kapal\\/sampan olahraga (30120), meja billiard\\/perlengkapan bowling (32401), cambuk dan pecut (15123).",
          
        },
        {
          "number": "32401",
          "name": "INDUSTRI ALAT PERMAINAN",
          "description": "Kelompok ini mencakup usaha pembuatan alat\\/perlengkapan seperti kartu domino, remi dan sejenisnya, kelereng, bekel, papan permainan dan permainan sejenisnya (halma, ular tangga), permainan elektronik, permainan catur, permainan yang dioperasikan dengan koin, bilyard, meja khusus untuk permainan judi dan sebagainya, fun fair, table and parlour games, meja billiard, meja casino, meja bowling dan perlengkapannya, puzzle dan mainan edukatif dan alat-alat permainan lainnya.",
          
        },
        {
          "number": "32402",
          "name": "INDUSTRI MAINAN ANAK-ANAK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam mainan, seperti boneka dari kayu, kain, karet, dan sejenisnya termasuk pakaian boneka dan aksesorinya, mainan berupa senjata, toys set, tokoh super hero seperti superman, batman dan lain-lain, binatang mainan, alat musik mainan, kartu permainan, scale model dan model rekreasional sejenisnya, kereta api listrik, permainan konstruksi, mainan beroda yang dirancang untuk dikendarai (mainan jenis kendaraan) termasuk sepeda roda dua dan sepeda roda tiga yang terbuat dari plastik. Sepeda anak-anak dimasukkan dalam kelompok 30921.",
          
        },
        {
          "number": "32501",
          "name": "INDUSTRI FURNITUR UNTUK OPERASI, PERAWATAN KEDOKTERAN DAN KEDOKTERAN GIGI",
          "description": "Kelompok ini mencakup pembuatan perabot atau furnitur untuk kegiatan operasi, perawatan, kedokteran gigi dan kedokteran hewan, seperti meja operasi, tiang infus, tempat tidur rumah sakit dengan peralatan mekanik dan kursi untuk pemeriksaan dan perawatan gigi.",
          
        },
        {
          "number": "32502",
          "name": "INDUSTRI PERALATAN KEDOKTERAN DAN KEDOKTERAN GIGI, PERLENGKAPAN ORTHOPAEDIC DAN PROSTHETIC",
          "description": "Kelompok ini mencakup pembuatan peralatan dan perlengkapan untuk pemeriksaan kesehatan, operasi, kedokteran gigi dan kedokteran hewan, seperti electrocardiograph, alat-alat bor gigi, peralatan test mata (termasuk reflektor, endoscope, dan lain-lain), jarum suntik, peralatan sterilisasi, peralatan pijat, ozone therapy, oxygen therapy, peralatan pernapasan buatan, perlengkapan orthopaedic dan prosthetic (crutches, surgical belts and trussers, orthopaedic corsets and shoes dan lain-lain), thermometer kedokteran, tungku pembakar laboratorium kedokteran gigi, mesin pembersihan ultrasonik laboratorium, peralatan destilasi laboratorium, alat sentrifugal laboratorium, pelat dan baut tulang (bone plates and screws), alat suntik, jarum suntik, kateter, cannulae dan sebagaiya, peralatan kedokteran gigi (termasuk kursi periksa dokter gigi yang tergabung dengan perlengkapan dokter gigi lainnya), gigi buatan dan sebagainya yang dibuat di laboratorium kedokteran gigi, mata buatan dari gelas dan peralatan tubuh palsu lainnya, seperti mata palsu, tengkorak palsu dan bagian- bagian dalam tubuh palsu.Kelompok ini juga mencakup pembuatan berbagai peralatan dan perlengkapan dalam bentuk instrumen bedah, antara lain seperti gunting, pinset, tang.",
          
        },
        {
          "number": "32503",
          "name": "INDUSTRI KACA MATA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam barang-barang opthalmik dan kaca mata berikut frame, seperti kaca mata pembantu penglihatan, kaca mata peredam sinar matahari\\/cahaya (sunglasses) dan safety googles (kaca mata untuk penahan debu, renang, selam, las). Termasuk juga pembuatan lensa kaca mata dan lensa kontak.",
          
        },
        {
          "number": "32509",
          "name": "INDUSTRI PERALATAN KEDOKTERAN DAN KEDOKTERAN GIGI SERTA PERLENGKAPAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan peralatan kedokteran dan kedokteran gigi serta perlengkapan lainnya yang belum tercakup dalam kelompok 32501 sampai dengan 32503, seperti kain dan benang steril\\/benang bedah dan kertas tisue untuk operasi, semen dan penambal gigi (kecuali perekat gigi palsu 20234), lilin gigi dan preparat plester gigi lainnya, semen rekonstruksi tulang, masker medis seperti surgical mask.",
          
        },
        {
          "number": "32901",
          "name": "INDUSTRI ALAT TULIS DAN GAMBAR TERMASUK PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam alat tulis dan gambar termasuk perlengkapannya, seperti pensil hitam, pensil berwarna, pulpen, pena boll point, tangkai pena, pena sablon, jangka, kuas gambar, batu tulis, meja gambar, rapido, sablon, letraset dan crayon. Termasuk pembuatan cat air dan cat minyak.",
          
        },
        {
          "number": "32902",
          "name": "INDUSTRI PITA MESIN TULIS\\/GAMBAR",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam pita mesin tulis\\/gambar, seperti pita mesin tik, pita pencetak komputer dan pita mesin tulis lainnya.",
          
        },
        {
          "number": "32903",
          "name": "INDUSTRI KERAJINAN YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang kerajinan dari bahan tumbuh-tumbuhan dan hewan, seperti kerajinan pohon kelapa, tempurung, serabut, akar-akaran, kulit, gading, tanduk, tulang, bulu, rambut, binatang yang diawetkan, kegiatan taxidermy (mengisi kulit binatang dengan kapas dan lain-lain sehingga nampak seperti binatang hidup), karangan bunga, rangkaian bunga berbentuk lingkaran dan keranjang bunga; bunga, buah-buahan dan daun-daunan buatan dan barang-barang lukisan. Termasuk usaha pembuatan barang-barang kerajinan dari kulit ikan dan kekerangan, baik dari kulit kerang mutiara seperti kerang Pinctada maxima, kerang mabe (mutiara setengah bulat), maupun kerang lainnya.",
          
        },
        {
          "number": "27113",
          "name": "INDUSTRI PENGUBAH TEGANGAN (TRANSFORMATOR), PENGUBAH ARUS (RECTIFIER) DAN PENGONTROL TEGANGAN (VOLTAGE STABILIZER)",
          "description": "Kelompok ini mencakup usaha pembuatan transformator, pengubah arus, pengontrol tegangan dan komponen\\/bagiannya, seperti transformator distribusi, transformator tenaga, pengubah arus AC ke DC , pengontrol tegangan, radiator, ring bike lite dan commutator. Termasuk transformator distribusi listrik, transformator arc-welding, flourescent ballast atau lighting ballast, transformator sub stasiun untuk distribusi tenaga listrik dan pengatur transmisi dan distribusi voltase listrik.",
          
        },
        {
          "number": "27120",
          "name": "INDUSTRI PERALATAN PENGONTROL DAN PENDISTRIBUSIAN LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan panel listrik dan switch gear serta komponen\\/bagiannya, seperti control panel otomatis, ligthing distribution board, pemutus aliran listrik, pemutus arus dan control desk, control panel dan pengaliran sakelar tertutup. Termasuk sakelar pemutus aliran listrik, angker dinamo untuk untuk pabrik, surge suppressor\\/penindas sentakan listrik (untuk distribusi tingkat voltase), panel kontrol untuk distribusi tenaga listrik, relay listrik, pipa\\/saluran peralatan papan penghubung\\/switchboard aliran listrik, sekering listrik, peralatan pemindah tenaga (power switching), saklar tenaga listrik (kecuali tombol tekan, snap, solenoida, tumbler) dan KWH meter.",
          
        },
        {
          "number": "27201",
          "name": "INDUSTRI BATU BATERAI",
          "description": "Kelompok ini mencakup usaha pembuatan segala macam batu baterai, seperti sel dan baterai listrik primer, baterai alkali, dan baterai mercury. Termasuk baterai dan sel-sel utama, baik yang mengandung mangan dioksida, merkuri dioksida, perak oksida atau lainnya, baterai asam timah, baterai Ni-Cad, baterai Ni-Mh, baterai Lithium, baterai cell kering dan baterai cell basah. Termasuk penggunaan untuk baterai HP dan baterai laptop.",
          
        },
        {
          "number": "27202",
          "name": "INDUSTRI AKUMULATOR LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam akumulator listrik, aki dan komponennya seperti aki dari 6V atau 12V dengan kekuatan 200 amper atau kurang, pelat aki, separator, wadah, penutup, pole dan jepitan aki (tipe gigi).",
          
        },
        {
          "number": "27203",
          "name": "INDUSTRI BATERAI UNTUK KENDARAAN BERMOTOR LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan segala macam baterai untuk kendaraan bermotor listrik.",
          
        },
        {
          "number": "27310",
          "name": "INDUSTRI KABEL SERAT OPTIK",
          "description": "Kelompok ini mencakup usaha pembuatan kabel serat optik.",
          
        },
        {
          "number": "27320",
          "name": "INDUSTRI KABEL LISTRIK DAN ELEKTRONIK LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam kabel listrik dan kabel elektronik yang dibalut dengan isolator atau berpenyekat dari baja, tembaga atau aluminium, seperti kabel komunikasi atau telepon, kabel listrik jaringan tegangan rendah\\/menengah\\/ tinggi. Usaha pembuatan kawat\\/kabel logam tanpa dibalut dimasukkan dalam kelompok 24202.",
          
        },
        {
          "number": "27330",
          "name": "INDUSTRI PERLENGKAPAN KABEL",
          "description": "Kelompok ini mencakup usaha pembuatan fitting, sakelar, stop kontak dan sebagainya, seperti batang penghantar, konduktor listrik (kecuali jenis switchgear), GFCI (ground fault circuit interrupter), lamp holder, penangkal petir dan koil, steker untuk untuk perangkat kawat listrik (misalnya penekan, tombol tekan, snap, tumbler switcher), outlet dan socket listrik (stop kontak), kotak untuk peralatan kawat listrik (seperti junction, outlet, switch box), kabel dan peralatan listrik, kutub transmisi dan line hardware dan plastik untuk peralatan kawat bukan pembawa arus termasuk kotak plastik junction, face plates dan sejenisnya dan peralatan pole line plastik.",
          
        },
        {
          "number": "27401",
          "name": "INDUSTRI BOLA LAMPU PIJAR, LAMPU PENERANGAN TERPUSAT DAN LAMPU ULTRA VIOLET",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam lampu pijar untuk penerangan, seperti bohlam tidak termasuk fitting dan perlengkapannya, penerangan fotografi (flash bulbs) dan penerangan untuk panggung\\/lampu sorot (spot light). Termasuk lampu ultra violet dan infra red, lampu senter, penerangan pada alat-alat kedokteran. Usaha pembuatan peralatan penerangan pada sepeda dan kendaraan bermotor dimasukkan pada kelompok 27403.",
          
        },
        {
          "number": "27402",
          "name": "INDUSTRI LAMPU TABUNG GAS (LAMPU PEMBUANG LISTRIK)",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam lampu tabung gas dan discharge, seperti lampu neon, lampu helium, lampu argon, lampu natrium dan lampu mercury. Termasuk lampu listrik serangga.",
          
        },
        {
          "number": "27403",
          "name": "INDUSTRI PERALATAN PENERANGAN UNTUK ALAT TRANSPORTASI",
          "description": "Kelompok ini mencakup pembuatan peralatan penerangan untuk alat transportasi motor, mobil, pesawat, kapal dan alat transportasi lainnya (lampu rem, lampu tanda berbelok, lampu interior dan sebagainya). Termasuk usaha pembuatan komponen dan perlengkapannya.",
          
        },
        {
          "number": "27404",
          "name": "INDUSTRI LAMPU LED",
          "description": "Kelompok ini mencakup usaha pembuatan lampu LED, baik berupa lampu LED terpisah maupun dirakit menjadi lampu untuk kebutuhan tertentu. Misalnya lampu LED lampu senter, kendaraan mauapu pencahayaan umum.",
          
        },
        {
          "number": "27409",
          "name": "INDUSTRI PERALATAN PENERANGAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan atau industri peralatan penerangan yang dipasang di langit-langit, tempat lilin (chandeliers), lampu meja, perangkat lampu hias pohon natal, batang perapian listrik, lentera (dengan bahan bakar karbit, listrik, gas, bensin, minyak tanah), peralatan lampu jalan (kecuali rambu-rambu lalu lintas) dan peralatan penerangan bukan listrik. Termasuk komponen lampu listrik seperti stater, filamen dan reflektor. Industri ballast tercakup di kelompok 27113.",
          
        },
        {
          "number": "27510",
          "name": "INDUSTRI PERALATAN LISTRIK RUMAH TANGGA",
          "description": "Kelompok ini mencakup pembuatan selimut listrik, penghisap debu (vacuum cleaners), pengkilat lantai (floor polishers), tempat sampah listrik, peralatan untuk mengolah dan mempersiapkan makanan (grinders, blenders, pembuka kaleng, juicers, dan sebagainya) dan peralatan listrik lainnya seperti sikat gigi listrik, alat-alat cukur listrik dan alat-alat perawatan tubuh listrik lainnya, pengasah pisau listrik dan sebagainya. Termasuk kulkas (refrigerator), mesin pencuci piring, mesin pencuci dan pengering pakaian, unit pembuangan\\/tempat sampah dan kap ventilasi. Pembuatan mesin cuci, mesin pengering dan sejenisnya dalam bentuk yang besar atau untuk kepentingan niaga dimasukkan dalam kelompok 28262. Pembuatan mesin jahit baik untuk keperluan rumah tangga maupun tidak dimasukkan dalam kelompok 28262.",
          
        },
        {
          "number": "27520",
          "name": "INDUSTRI PERALATAN ELEKTROTERMAL RUMAH TANGGA",
          "description": "Kelompok ini mencakup pembuatan kompor (misalnya oven, microwave oven, cookers, hot plates, toasters, pembuat kopi dan teh, frypans, roasters, penggorengan dan pemanggang listrik dan hoods dan sebagainya), alat pemanas dan alat masak dengan menggunakan arus listrik, kipas angin dan pemanas ruangan. Termasuk industri peralatan elektrotermal rumah tangga, seperti alat pemanas air listrik, selimut listrik, alat listrik untuk perawatan rambut (pengering, sisir, sikat, pengeriting), setrika listrik, alat resistor pemanas listrik dan lain-lain.",
          
        },
        {
          "number": "27530",
          "name": "INDUSTRI PERALATAN PEMANAS DAN MASAK BUKAN LISTRIK RUMAH TANGGA",
          "description": "Kelompok ini mencakup pembuatan atau industri peralatan masak dan pemanas bukan listrik rumah tangga, seperti kompor masak, panggangan, pemanas air, peralatan masak lain, penghangat makanan, penghangat piring dan lain-lain dan pemanas ruangan bukan listrik, seperti tungku atau perapian.",
          
        },
        {
          "number": "27900",
          "name": "INDUSTRI PERALATAN LISTRIK LAINNYA",
          "description": "Kelompok ini mencakup pembuatan dinamo lampu sepeda, dinamo magnetik, busi, alat-alat peringatan suara (sirine, klakson, alarm, bel, dan sebagainya), peralatan sinyal listrik seperti alat-alat pengatur lalu-lintas jalan raya, jalan kereta api, di pelabuhan laut dan udara dan sinyal untuk pejalan kaki, berbagai peralatan listrik dan elektronik yang tidak termasuk kelompok manapun, seperti charger (pengisi) baterai padat, alat pembuka dan penutup pintu listrik, mesin pembersih ultrasonik (kecuali untuk laboratorium, dokter gigi), tanning beds, peralatan solid state inverter, peralatan rektifikasi, fuel cells, penyuplai daya teregulasi dan tidak teregulasi, UPS (uninterruptible power supllies), supresor gelombang (kecuali untuk distribusi level voltase), kabel peralatan, kabel sambungan, perangkat kabel listrik lainnya yang berpenyekat dan berkonektor, karbon dan grafit elektroda, kontak dan produk karbon dan grafit listrik lainnya, akselerator partikel, kapasitor, resistor, kondenser listrik dan komponen sejenisnya, elektromagnet, papan skor listrik, reklame listrik, insulator (penyekat) listrik (kecuali penyekat kaca atau porselen), peralatan patri dan solder listrik, besi solder tangan dan pembuatan peralatan modul fotovoltaik (panel surya), rokok elektrik (vape). Termasuk usaha pembuatan komponen dan perlengkapannya.",
          
        },
        {
          "number": "28111",
          "name": "INDUSTRI MESIN UAP, TURBIN DAN KINCIR",
          "description": "Kelompok ini mencakup usaha pembuatan motor penggerak yang bukan berupa motor bakar dalam, seperti mesin uap, turbin dan bagian- bagiannya, turbin uap dan turbin sejenis lainnya, turbin hidrolik, kincir air dan regulatornya, turbin angin dan turbin gas\\/udara, kecuali turbojet atau turbo baling-baling untuk pesawat terbang; perangkat turbin-ketel (boiler- turbine), perangkat generator-turbin dan kincir angin.",
          
        },
        {
          "number": "28112",
          "name": "INDUSTRI MOTOR PEMBAKARAN DALAM",
          "description": "Kelompok ini mencakup usaha pembuatan motor penggerak mula dengan bahan pembakaran dalam, baik berupa motor bakar cetus api maupun motor bakar nyala kompresi, seperti motor diesel, motor bensin, motor bakar dalam dengan bahan bakar gas\\/alkohol, dan sejenisnya. Termasuk Industri mesin piston pembakaran dalam (kecuali mesin kendaraan bermotor, pesawat terbang dan mesin penggerak putaran), seperti mesin kapal laut dan mesin kereta api. Usaha pembuatan motor pembakaran dalam untuk kendaraan bermotor roda empat atau lebih dimasukkan dalam kelompok 29101 dan 29102. Usaha pembuatan motor pembakaran dalam untuk kendaraan bermotor roda dua dan tiga dimasukkan dalam kelompok 30912, dan motor pembakaran dalam untuk pesawat terbang dimasukan dalam kelompok 30300.",
          
        },
        {
          "number": "28113",
          "name": "INDUSTRI KOMPONEN DAN SUKU CADANG MESIN DAN TURBIN",
          "description": "Kelompok ini mencakup usaha pembuatan komponen\\/suku cadang, dari mesin-mesin penggerak mula (kelompok 28111 dan 28112), seperti engine block, piston, cincin piston, karburator cylinder head dan sejenisnya untuk semua jenis mesin pembakaran dalam, mesin diesel dan sebagainya dan inlet dan klep\\/katup pelepas gas dari mesin pembakaran dalam.",
          
        },
        {
          "number": "28120",
          "name": "INDUSTRI PERALATAN TENAGA ZAT CAIR DAN GAS",
          "description": "Kelompok ini mencakup usaha pembuatan komponen hidrolik dan pneumatik, termasuk didalamnya pompa hidrolik, motor hidrolik, silinder hidrolik dan pneumatik, klep\\/katup hidrolik dan pneumatik, perkakas dan pipa karet hidrolik dan pneumatik; peralatan pengolahan udara yang digunakan dalam sistem pneumatik; sistem tenaga zat cair dan gas; dan peralatan transmisi hidrolik.",
          
        },
        {
          "number": "28130",
          "name": "INDUSTRI POMPA LAINNYA, KOMPRESOR, KRAN DAN KLEP\\/KATUP",
          "description": "Kelompok ini mencakup usaha pembuatan kompresor udara dan gas, kompresor untuk refrigerator dan AC, kompresor untuk kendaraan bermotor, pompa laboratorium, pompa air, pompa udara, pompa vakum atau pompa udara, kompresor udara dan gas lainnya, pompa untuk zat cair baik terpasang alat pengukur ataupun tidak, pompa yang didesain untuk mesin pembakaran dalam, seperti pompa bahan bakar, oli, dan air untuk kendaraan bermotor dan sebagainya. Termasuk katup dan keran air dari logam, seperti klep\\/katup dan kran untuk keperluan industri, mencakup klep\\/katup regulasi dan kran pipa masuk; kran dan katup untuk kebersihan (sanitasi); kran dan katup untuk pemanasan; dan pompa tangan. Katup dari karet dimasukkan ke subgolongan 2219. Keran dari porselen dimasukkan ke subgolongan 23931.",
          
        },
        {
          "number": "28140",
          "name": "INDUSTRI BEARING, RODA GIGI DAN ELEMEN PENGGERAK MESIN",
          "description": "Kelompok ini mencakup usaha pembuatan bola dan bantalan poros (ball and roller bearings), termasuk bola, bantalan guling, ring dan bagian- bagian lain dari bearings. Termasuk pula pembuatan komponen dan suku cadang peralatan transmisi mekanik, antara lain cam shafts, poros engkol (crank shafts), engkol, kerangka bearing dan bearing poros sederhana, persneling, roda gigi, bantalan blok, kopling dan poros kopling, roda gendeng dan kerek\\/katrol, mata rantai bersambung, rantai transmisi tenaga (rantai keteng) dan sebagainya.",
          
        },
        {
          "number": "28151",
          "name": "INDUSTRI OVEN, PERAPIAN DAN TUNGKU PEMBAKAR SEJENIS YANG TIDAK MENGGUNAKAN ARUS LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan tungku dan alat sejenis yang tidak menggunakan arus listrik, untuk memanaskan, memanggang dan melelehkan bijih besi, logam dan sejenisnya, tungku pembakar, peralatan pemanas rumah tangga bukan listrik permanen untuk daerah pegunungan, seperti peralatan pemanas solar, pemanas uap, pemanas minyak dan peralatan pemanas dan tungku sejenisnya. Termasuk pembuatan mechanical stokers, mechanical grates, mechanical ash discharges dan sejenisnya.",
          
        },
        {
          "number": "28152",
          "name": "INDUSTRI OVEN, PERAPIAN DAN TUNGKU PEMBAKAR SEJENIS YANG MENGGUNAKAN ARUS LISTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan tungku, oven dan alat pemanas lainnya yang penggunaannya memerlukan arus listrik, misalnya peralatan induksi listrik untuk industri dan laboratorium termasuk incinerator, tungku pembakar, peralatan pemanas ruangan listrik permanen untuk daerah pegunungan, pemanas kolam renang listrik dan tungku listrik untuk rumah tangga. Alat pengatur panas untuk makanan, minuman dan tembakau termasuk pula non-electric oven untuk pembuat roti dimasukkan dalam kelompok 28250, sedangkan alat pengatur panas untuk pulp, kertas dan bahan industri lainnya dimasukkan dalam kelompok 28292 dan 28299.",
          
        },
        {
          "number": "28160",
          "name": "INDUSTRI ALAT PENGANGKAT DAN PEMINDAH",
          "description": "Kelompok ini mencakup pembuatan mesin pengangkat dan pemindah (pemuat dan pembongkar) barang dan orang yang digerakkan dengan tangan atau tenaga yang digunakan di pabrik, gudang, pelabuhan, terminal, stasiun kereta api, bandar udara dan sebagainya, seperti katrol kerek (alat kerek), winches, putaran\\/paksi jangkar dan dongkrak; derrick, crane, mobile lifting frame, staddle carriers dan lain-lain; truk kerja, baik yang memakai alat angkut dan alat angkat maupun tidak, baik yang tidak dilengkapi dengan pendorong maupun yang tidak, dan truk kerja yang digunakan dalam pabrik (termasuk alat angkut dengan tangan dan gerobak tangan); manipulator mekanik dan robot yang khusus dibuat untuk mengangkut, mengangkat, memuat dan membongkar. Termasuk alat pembawa barang, teleferics (kereta gantung) dan lain-lain, lift, eskalator dan pemindah pejalan kaki (lantai bergerak) dan bagian-bagian, conveyor, komponen dan peralatan khusus alat angkut dan alat angkat. Alat pengangkat dan pemindah seperti traktor yang digunakan di sektor pertanian dimasukkan dalam kelompok 28210. Alat pengangkut dan pemindah yang dibuat khusus untuk penggunaan di bawah tanah dimasukkan dalam kelompok 28240.",
          
        },
        {
          "number": "28171",
          "name": "INDUSTRI MESIN KANTOR DAN AKUNTANSI MANUAL",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam mesin kantor dan akuntansi secara manual, seperti mesin hitung manual, mesin tik manual, mesin stensil manual, mesin peruncing pensil, sempoa, alat timbang pos (postage meters), mesin pengelola surat (pengisi amplop, penyegel dan mesin pemberi alamat, membuka, mengurutkan, menscan), mesin pemeriksa, mesin stenografi, alat penjilid (penjilid plastik atau pita), mesin penghitung koin dan pembungkus koin, stapler dan pembersih stapler, mesin pemungutan suara, mesin isolasi (tape dispencer) dan mesin pembuat lubang kertas dan sejenisnya. Termasuk pembuatan komponen dan suku cadangnya. Jasa pemeliharaan dan perbaikannya tercakup dalam kelompok 33121.",
          
        },
        {
          "number": "28172",
          "name": "INDUSTRI MESIN KANTOR DAN AKUNTANSI ELEKTRIK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam mesin kantor dan akuntansi elektrik, seperti mesin hitung elektrik, mesin tik elektrik, mesin stensil elektrik dan sejenisnya, kalkulator, alat timbang pos (postage meters), mesin pengelola surat (pengisi amplop, penyegel dan mesin pemberi alamat, membuka, mengurutkan, menscan), mesin pemeriksa, mesin stenografi, alat penjilid (contoh penjilid plastik atau pita), mesin pemeriksa tulisan, mesin penghitung koin dan pembungkus koin, peruncing pensil, stapler dan pembersih stapler, mesin pemungutan suara, mesin pembuat lubang kertas. Termasuk usaha pembuatan komponen dan suku cadangnya. Jasa pemeliharaan dan perbaikannya tercakup dalam kelompok 33121.",
          
        },
        {
          "number": "28173",
          "name": "INDUSTRI MESIN KANTOR DAN AKUNTANSI ELEKTRONIK",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam mesin kantor dan akuntansi elektronik, seperti mesin hitung elektronik, cash register dan sejenisnya. Usaha pembuatan sub assembly dan komponen elektronik mesin komputasi dimasukkan dalam kelompok 26120.",
          
        },
        {
          "number": "28174",
          "name": "INDUSTRI MESIN FOTOCOPI",
          "description": "Kelompok ini mencakup usaha pembuatan mesin fotocopi, mesin electronic sheet, mesin lightdruk dengan sistem optik atau contact type, termasuk perlengkapan dari mesin-mesin tersebut.",
          
        },
        {
          "number": "28179",
          "name": "INDUSTRI MESIN DAN PERALATAN KANTOR LAINNYA",
          "description": "Kelompok ini mencakup usaha pembuatan macam-macam mesin kantor lainnya, seperti toner cartridge, papan tulis, seperti white board dan marker board dan mesin pendikte.",
          
        },
        {
          "number": "28180",
          "name": "INDUSTRI PERKAKAS TANGAN YANG DIGERAKKAN TENAGA",
          "description": "Kelompok ini mencakup usaha pembuatan perkakas tangan (pertukangan) yang digerakkan tenaga, baik dengan motor listrik atau motor bukan listrik atau yang digerakkan dengan tekanan udara, seperti gergaji sirkular dan reciprocating, bor dan bor palu, penabur pasir yang digerakkan dengan tangan, alat pemaku (pneumatik), penyangga (buffers), router, penggerinda, stepler, alat paku tembak, alat ketam\\/serut, gunting dan catut, kunci inggris dan alat pemaku (powder actuated).",
          
        },
        {
          "number": "28191",
          "name": "INDUSTRI MESIN UNTUK PEMBUNGKUS, PEMBOTOLAN DAN PENGALENGAN",
          "description": "Kelompok ini mencakup pembuatan mesin pembungkus, pembotolan, dan pengalengan yang berfungsi sebagai pengisi, penutup, penyegel, pembungkus dan pemberian label di botol, kaleng dan kotak. Termasuk mesin untuk pengering dan pembersih botol minuman, mesin untuk mencampur udara ke dalam minuman dan sejenisnya.",
          
        },
        {
          "number": "28192",
          "name": "INDUSTRI MESIN TIMBANGAN",
          "description": "Kelompok ini mencakup pembuatan mesin-mesin timbangan (bukan untuk laboratorium), seperti timbangan untuk keperluan toko, kantor dan rumah tangga, alat penimbang yang menyatu dengan kalkulator, timbangan stasiun, scale for continuous weighing, jembatan timbang dan timbangan lainnya, baik bergerak atau tidak. Termasuk pembuatan komponen dan perlengkapannya.",
          
        },
        {
          "number": "28193",
          "name": "INDUSTRI MESIN PENDINGIN",
          "description": "Kelompok ini mencakup pembuatan mesin pendingin dan pembeku (cold storage) untuk tujuan komersial dan perakitan komponen utamanya, seperti lemari pamer (display cases), mesin-mesin penjual (dispense cases), mesin AC (air conditioning) termasuk untuk kendaraan bermotor, kipas angin dan exhaust hood untuk keperluan industri dan laboratorium termasuk pembuatan komponen dan perlengkapannya, dan mesin pendingin produk biologis (vaksin dan darah).",
          
        },
        {
          "number": "33149",
          "name": "REPARASI PERALATAN LISTRIK LAINNYA",
          "description": "Kelompok ini mencakup reparasi dan perawatan peralatan listrik lainnya dalam golongan 273, 274 dan 279, seperti reparasi dan perawatan peralatan penerangan listrik, peralatan kawat pembawa arus dan bukan pembawa arus untuk sirkuit kabel listrik dan peralatan listrik sejenis lainnya.",
          
        },
        {
          "number": "33151",
          "name": "REPARASI KAPAL, PERAHU DAN BANGUNAN TERAPUNG",
          "description": "Kelompok ini mencakup jasa reparasi dan perawatan alat angkutan dalam golongan 301, seperti jasa reparasi dan perawatan kapal, perahu, kapal pesiar, kapal atau perahu untuk kepeluan rekreasi dan olahraga dan sejenisnya. Termasuk usaha jasa reparasi dan perawatan dan modifikasi bangunan lepas pantai.",
          
        },
        {
          "number": "33152",
          "name": "REPARASI LOKOMOTIF DAN GERBONG KERETA",
          "description": "Kelompok ini mencakup jasa reparasi dan perawatan lokomotif dan gerbong kereta api dan kendaraan jalan rel lainnya (kecuali industri pembangunan kembali dan pengubahan) dalam golongan 302.",
          
        },
        {
          "number": "33153",
          "name": "REPARASI PESAWAT TERBANG",
          "description": "Kelompok ini mencakup reparasi dan perawatan pesawat terbang (kecuali industri pengubahan, pemeriksaan, dan pembangunan kembali), mesin pesawat terbang dan perlengkapannya dalam golongan 303.",
          
        },
        {
          "number": "33159",
          "name": "REPARASI ALAT ANGKUTAN LAINNYA, BUKAN KENDARAAN BERMOTOR",
          "description": "Kelompok ini mencakup reparasi dan perawatan alat angkut lainnya bukan sepeda motor dan sepeda, seperti reparasi dan perawatan kendaraan perang, andong dan kereta yang ditarik binatang dan alat angkut sejenis lainnya.",
          
        },
        {
          "number": "33190",
          "name": "REPARASI PERALATAN LAINNYA",
          "description": "Kelompok ini mencakup reparasi peralatan lainnya, seperti reparasi jaring untuk menangkap ikan, tali jerat, tali temali, canvas dan terpal (tarp), kantong penyimpan pupuk dan bahan kimia, pallet kayu, drum pengapalan dan tong sejenisnya, mesin pinball dan mesin permainan yang dioperasikan dengan koin, orgel dan peralatan musik bersejarah lainnya.",
          
        },
        {
          "number": "33200",
          "name": "INSTALASI\\/PEMASANGAN MESIN DAN PERALATAN INDUSTRI",
          "description": "Kelompok ini mencakup instalasi\\/pemasangan mesin dan peralatan industri, seperti instalsi\\/pemasangan mesin industri dalam pabrik, peralatan kendali\\/kontrol proses industri dan peralatan industri lainnya (peralatan komunikasi, mainframe dan komputer sejenis, peralatan iradiasi, peralatan gas medis dan elektromedis dan lain-lain), pembongkaran mesin dan peralatan berskala besar, kegiatan millwright, machine rigging dan integrasi\\/perakitan mesin seperti jasa perakitan peralatan arena bowling.",
          
        },
        {
          "number": "35111",
          "name": "PEMBANGKITAN TENAGA LISTRIK",
          "description": "Kelompok ini mencakup usaha memproduksi tenaga listrik melalui pembangkitan tenaga listrik yang menggunakan berbagai jenis sumber energi. Sumber energi fosil seperti batubara, gas, bahan bakar minyak, dan diesel. Sumber energi terbarukan seperti panas bumi, angin, bioenergi, sinar matahari, aliran dan terjunan air, gerakan dan perbedaan suhu lapisan laut. Sumber energi hybrid yang menggabungankan sumber energi fosil dengan energi terbarukan, dan energi yang berasal dari teknologi energy storage.",
          
        },
        {
          "number": "35112",
          "name": "TRANSMISI TENAGA LISTRIK",
          "description": "Kelompok ini mencakup usaha pengoperasian sistem transmisi atau usaha penyaluran tenaga listrik dari pembangkit ke jaringan distribusi melalui jaringan tenaga listrik yang bertegangan tinggi (antara 35 kilovolt s.d 150 kilovolt) dan\\/atau bertegangan ekstra tinggi (antara 150 kilovolt s.d 500 kilovolt) dan\\/atau bertegangan ultra tinggi (di atas 500 kilovolt) termasuk gardu-gardu induknya, baik berasal dari produksi sendiri maupun dari produksi pihak lain.",
          
        },
        {
          "number": "35113",
          "name": "DISTRIBUSI TENAGA LISTRIK",
          "description": "Kelompok ini mencakup usaha pengoperasian sistem distribusi atau usaha penyaluran tenaga listrik melalui jaringan tenaga listrik yang bertegangan menengah ke bawah (di bawah 35 kilovolt) sampai ke konsumen atau pelanggan termasuk dengan gardu-gardu distribusinya baik berasal dari produksi sendiri maupun dari produksi pihak lain.",
          
        },
        {
          "number": "35114",
          "name": "PENJUALAN TENAGA LISTRIK",
          "description": "Kelompok ini mencakup usaha penjualan tenaga listrik kepada konsumen akhir.",
          
        },
        {
          "number": "35115",
          "name": "PEMBANGKIT, TRANSMISI, DISTRIBUSI DAN PENJUALAN TENAGA LISTRIK DALAM SATU KESATUAN USAHA",
          "description": "Kelompok ini mencakup kegiatan memproduksi tenaga listrik, penyaluran tenaga listrik melalui jaringan transmisi dan distribusi tenaga listrik, serta penjualan tenaga listrik kepada konsumen akhir yang dilaksanakan dalam satu kesatuan usaha.",
          
        },
        {
          "number": "35116",
          "name": "PEMBANGKIT, TRANSMISI, DAN PENJUALAN TENAGA LISTRIK DALAM SATU KESATUAN USAHA",
          "description": "Kelompok ini mencakup kegiatan memproduksi tenaga listrik, penyaluran tenaga listrik melalui jaringan transmisi, dan penjualan tenaga listrik kepada konsumen akhir yang dilaksanakan dalam satu kesatuan usaha.",
          
        },
        {
          "number": "35117",
          "name": "PEMBANGKIT, DISTRIBUSI, DAN PENJUALAN TENAGA LISTRIK DALAM SATU KESATUAN USAHA",
          "description": "Kelompok ini mencakup kegiatan memproduksi tenaga listrik, penyaluran tenaga listrik melalui jaringan distribusi dan penjualan tenaga listrik kepada konsumen akhir yang dilaksanakan dalam satu kesatuan usaha.",
          
        },
        {
          "number": "35118",
          "name": "DISTRIBUSI, DAN PENJUALAN TENAGA LISTRIK DALAM SATU KESATUAN USAHA",
          "description": "Kelompok ini mencakup kegiatan penyaluran tenaga listrik melalui jaringan distribusi dan penjualan tenaga listrik kepada konsumen akhir yang dilaksanakan dalam satu kesatuan usaha.",
          
        },
        {
          "number": "35121",
          "name": "PENGOPERASIAN INSTALASI PENYEDIAAN TENAGA LISTRIK",
          "description": "Kelompok ini mencakup usaha pengoperasian yang dilakukan oleh pihak lain atas fasilitas pembangkit yang menghasilkan energi listrik, fasilitas sistem transmisi tenaga listrik dan sistem distribusi tenaga listrik.",
          
        },
        {
          "number": "35122",
          "name": "PENGOPERASIAN INSTALASI PEMANFAATAN TENAGA LISTRIK",
          "description": "Kelompok ini mencakup usaha pengoperasian yang dilakukan oleh pihak lain atas fasilitas instalasi pemanfaatan tenaga listrik mencakup instalasi pemanfaatan tenaga listrik tegangan tinggi, instalasi pemanfaatan tenaga listrik tegangan menengah, dan instalasi pemanfaatan tenaga listrik tegangan rendah.",
          
        },
        {
          "number": "35129",
          "name": "AKTIVITAS PENUNJANG TENAGA LISTRIK LAINNYA",
          "description": "Kelompok ini mencakup usaha jasa lain yang secara langsung berkaitan dengan penyediaan dan pemanfaatan tenaga listrik namun tidak tercakup dalam kelompok 35121 s.d. 35122, seperti jasa pencatatan meteran, pemberian tagihan dan kegiatan perdagangan pulsa\\/token listrik serta kegiatan penunjang kelistrikan lainnya.",
          
        },
        {
          "number": "35201",
          "name": "PENGADAAN GAS ALAM DAN BUATAN",
          "description": "Kelompok ini mencakup usaha pengolahan bahan bakar gas yang dapat dimanfaatkan secara langsung sebagai bahan bakar di mana pembuatannya disertai usaha peningkatan mutu gas, seperti pemurnian, pencampuran dan proses lainnya yang dihasilkan dari gas alam (termasuk LPG), karbonasi dan gasifikasi batu bara, atau bahan hidrokarbon lain.",
          
        },
        {
          "number": "35202",
          "name": "DISTRIBUSI GAS ALAM DAN BUATAN",
          "description": "Kelompok ini mencakup usaha penyaluran gas melalui jaringan yang bertekanan ekstra tinggi (lebih dari 10 bar); yang bertekanan tinggi (antara 4 bar s.d. 10 bar); dan yang bertekanan menengah ke bawah (di bawah 4 bar) baik berasal dari produksi sendiri maupun produksi pihak lain sampai ke konsumen atau pelanggan. Penyaluran gas melalui pipa atas dasar balas jasa atau fee, dimasukkan dalam kelompok 49300. Termasuk penyaluran, distribusi dan pengadaan semua jenis bahan bakar gas melalui sistem saluran, perdagangan gas kepada konsumen melalui saluran, kegiatan agen gas yang melakukan perdagangan gas melalui sistem distribusi gas yang dioperasikan oleh pihak lain dan pengoperasian pertukaran komoditas dan kapasitas pengangkutan bahan bakar gas.",
          
        },
        {
          "number": "35203",
          "name": "PENGADAAN GAS BIO",
          "description": "Kelompok ini mencakup usaha pengolahan bahan bakar gas yang dapat dimanfaatkan secara langsung sebagai bahan bakar yang dihasilkan dari produk sampingan pertanian, perkebunan, peternakan, atau sampah\\/limbah dimana pembuatannya disertai usaha peningkatan mutu gas, seperti pemurnian, pencampuran dan proses lainnya.",
          
        },
        {
          "number": "35301",
          "name": "PENGADAAN UAP\\/AIR PANAS DAN UDARA DINGIN",
          "description": "Kelompok ini mencakup kegiatan memproduksi dan mendistribusikan uap dan air panas untuk pemanasan, pembangkit tenaga dan penggunaan lainnya. Kegiatannya seperti produksi, pengumpulan dan distribusi uap dan air panas untuk pemanas, energi dan kegunaan lain dan kegiatan produksi dan distribusi udara dingin.",
          
        },
        {
          "number": "35302",
          "name": "PRODUKSI ES",
          "description": "Kelompok ini mencakup kegiatan produksi dan distribusi air dingin\\/air es untuk kebutuhan pendinginan, dan produksi es, termasuk es untuk kebutuhan makanan atau minuman dan kegunaan lain (misal pendinginan).",
          
        },
        {
          "number": "36001",
          "name": "PENAMPUNGAN, PENJERNIHAN DAN PENYALURAN AIR MINUM",
          "description": "Kelompok ini mencakup usaha pengambilan air secara langsung dari mata air dan air tanah serta penjernihan air permukaan dari sumber air (sungai, danau, sumur dan sebagainya) dan penyaluran air minum secara langsung dari terminal air melalui saluran pipa, mobil tangki (asal mobil tangki tersebut masih dalam satu pengelolaan administratif dari perusahaan air minum tersebut) untuk dijual kepada konsumen atau pelanggan, seperti rumah tangga, instansi\\/lembaga\\/badan pemerintah, badan-badan sosial, badan usaha milik negara, perusahaan\\/usaha swasta antara lain hotel, industri pengolahan dan pertokoan.",
          
        },
        {
          "number": "36002",
          "name": "PENAMPUNGAN DAN PENYALURAN AIR BAKU",
          "description": "Kelompok ini mencakup usaha pengadaan dan penyaluran air baku untuk keperluan industri, pembangkit listrik dan lain-lain.Kelompok ini juga mencakup kegiatan pengelolaan jaringan irigasi, namun tidak mencakup pengoperasian peralatan irigasi seperti alat penyemprot untuk keperluan pertanian.",
          
        },
        {
          "number": "36003",
          "name": "AKTIVITAS PENUNJANG TREATMENT AIR",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang secara langsung berhubungan dengan usaha pengadaan dan penyaluran air bersih, seperti jasa pencatatan meteran, pemberian tagihan dan kegiatan penunjang lainnya. Kegiatan pada kelompok ini termasuk distribusi air yang dilakukan perorangan seperti pedagang air pikulan\\/dorongan\\/mobil tangki.",
          
        },
        {
          "number": "37011",
          "name": "PENGUMPULAN AIR LIMBAH TIDAK BERBAHAYA",
          "description": "Kelompok ini mencakup kegiatan pengumpulan dan pengangkutan air limbah industri atau air limbah rumah tangga yang tidak berbahaya melalui saluran dari jaringan pembuangan air limbah, pengumpul air limbah dan fasilitas pengangkutan lainnya (kendaraan pengangkutan limbah\\/kotoran).Kelompok ini juga mencakup kegiatan penyedotan dan pembersihan tangki septik (perigi jamban), bak dan lubang pembuangan limbah\\/kotoran; pengumpulan air limbah dari toilet kimia (toilet portable, toilet pesawat, toilet kereta).",
          
        },
        {
          "number": "37012",
          "name": "PENGUMPULAN AIR LIMBAH BERBAHAYA",
          "description": "Kelompok ini mencakup kegiatan pengumpulan dan pengangkutan air limbah industri atau air limbah rumah tangga yang berbahaya melalui saluran dari jaringan pembuangan air limbah, pengumpul air limbah dan fasilitas pengangkutan lainnya (kendaraan pengangkutan limbah\\/kotoran).Kelompok ini juga mencakup kegiatan penyedotan dan pembersihan tangki, bak dan lubang pembuangan air limbah berbahaya.",
          
        },
        {
          "number": "37021",
          "name": "TREATMENT DAN PEMBUANGAN AIR LIMBAH TIDAK BERBAHAYA",
          "description": "Kelompok ini mencakup kegiatan pengoperasian sistem pembuangan air limbah atau fasilitas pengolahan air limbah tidak berbahaya, pengolahan air limbah tidak berbahaya (mencakup air limbah industri dan rumah tangga, air dari kolam renang dan lain-lain) melalui saluran secara proses fisika, kimia dan biologi seperti pengenceran, penyaringan dan sedimentasi dan lain-lain.Kelompok ini juga mencakup kegiatan pengelolaan dan pembersihan saluran air limbah tidak berbahaya dan saluran pembuangannya.",
          
        },
        {
          "number": "37022",
          "name": "TREATMENT DAN PEMBUANGAN AIR LIMBAH BERBAHAYA",
          "description": "Kelompok ini mencakup kegiatan pengoperasian sistem pembuangan air limbah atau fasilitas pengolahan air limbah berbahaya, pengolahan air limbah berbahaya (mencakup air limbah industri dan rumah tangga dan lain-lain) melalui saluran secara proses fisika, kimia dan biologi seperti pengenceran, penyaringan dan sedimentasi dan lain-lain.Kelompok ini juga mencakup kegiatan treatment dan pembersihan saluran air limbah berbahaya dan saluran pembuangannya.",
          
        },
        {
          "number": "38110",
          "name": "PENGUMPULAN LIMBAH DAN SAMPAH TIDAK BERBAHAYA",
          "description": "Kelompok ini mencakup pengumpulan sampah padat yang tidak berbahaya dalam suatu daerah, misalnya pengumpulan sampah rumah tangga dan usaha dengan menggunakan tempat sampah, tempat sampah beroda, kontainer sampah dan lain-lain yang meliputi campuran bahan-bahan yang dapat dipulihkan, pengumpulan bahan-bahan yang dapat didaur ulang, pengumpulan minyak dan lemak masak bekas pakai dan pengumpulan sampah dari tempat sampah di tempat umum. Termasuk juga usaha pengumpulan sampah konstruksi dan pembongkaran bangunan, pengumpulan dan pembersihan runtuhan atau puing, pengumpulan sampah dari pabrik tekstil dan pengoperasian pos pemindah sampah untuk sampah yang tidak berbahaya.",
          
        },
        {
          "number": "38120",
          "name": "PENGUMPULAN LIMBAH BERBAHAYA",
          "description": "Kelompok ini mencakup pengumpulan limbah padat maupun tidak padat yang berbahaya serta sampah spesifik, misalnya bahan yang mudah meledak, bahan yang mudah teroksidasi, bahan yang mudah terbakar, bahan beracun, iritan, karsinogenik, korosif, bahan yang dapat menyebabkan infeksi dan substansi dan preparat lainnya yang berbahaya untuk kesehatan manusia dan lingkungan. Kegiatan ini juga memerlukan identifikasi, penanganan, pengemasan dan pelabelan limbah berbahaya dan sampah spesifik.Kelompok ini mencakup usaha pengumpulan limbah berbahaya dan sampah spesifik, seperti minyak bekas pakai dari kapal atau bengkel, sampah biologis yang berbahaya (bio-hazardous), aki dan baterai bekas pakai.",
          
        },
        {
          "number": "38211",
          "name": "TREATMENT DAN PEMBUANGAN LIMBAH DAN SAMPAH TIDAK BERBAHAYA",
          "description": "Kelompok ini mencakup usaha pengoperasian lahan untuk pembuangan limbah dan sampah yang tidak berbahaya, pembuangan limbah dan sampah yang tidak berbahaya melalui pembakaran atau metode lain dengan atau tanpa menghasilkan produk berupa listrik atau uap, bahan bakar substitusi, biogas, abu atau produk ikutan lainnya untuk kegunaan lebih lanjut, dan sebagainya dan treatment limbah dan sampah organik untuk pembuangan.",
          
        },
        {
          "number": "38212",
          "name": "PRODUKSI KOMPOS SAMPAH ORGANIK",
          "description": "Kelompok ini mencakup usaha produksi kompos dari sampah organik dan abu tanaman (pupuk alam organik).",
          
        },
        {
          "number": "38220",
          "name": "TREATMENT DAN PEMBUANGAN LIMBAH BERBAHAYA",
          "description": "Kelompok ini mencakup usaha treatment dan pembuangan yang dikelola baik oleh pemerintah dan swasta, seperti pembuangan dan treatment limbah padat atau limbah tidak padat yang berbahaya serta limbah spesifik, mencakup bahan mudah meledak, bahan mudah teroksidasi, bahan yang mudah terbakar, bahan beracun, iritan, karsinogenik, korosif atau bahan yang dapat menyebabkan infeksi dan substansi dan preparat lainnya yang berbahaya untuk kesehatan manusia dan lingkungan. Kegiatannya adalah usaha pengoperasian fasilitas untuk pembuangan limbah berbahaya dan sampah spesifik, treatment dan pembuangan binatang hidup atau mati yang beracun dan limbah terkontaminasi lainnya, pembakaran limbah berbahaya, treatment, pembuangan dan penyimpanan limbah radioaktif, seperti treatment dan pembuangan limbah radioaktif transisi, mencakup peluruhan pada masa\\/periode pembuangan limbah dan pembungkusan, penyiapan dan treatment lainnya terhadap limbah radioaktif.",
          
        },
        {
          "number": "38301",
          "name": "PEMULIHAN MATERIAL BARANG LOGAM",
          "description": "Kelompok ini mencakup usaha pengolahan barang bekas dari logam dan sisa-sisa barang logam menjadi bahan baku sekunder. Hasil dari daur ulang\\/pemulihan material barang logam adalah bahan baku sekunder berbagai bentuk seperti potongan-potongan atau serpihan logam dan lainnya. Kegiatan pada kelompok ini mencakup pemisahan dan pemilihan sampah logam, penghancuran secara mekanik sampah logam, reduksi mekanik sampah logam, pembongkaran, pemotongan dan pengirisan sampah logam, pemotongan kapal dan alat apung lainnya (ship breaking) dan lainnya. Pembuatan barang logam baru yang menggunakan bahan baku sekunder, barang logam bekas dan sisa-sisa barang logam dimasukkan dalam kelompok industri yang sesuai.",
          
        },
        {
          "number": "38302",
          "name": "PEMULIHAN MATERIAL BARANG BUKAN LOGAM",
          "description": "Kelompok ini mencakup usaha pengolahan barang bekas dari bukan logam dan sisa-sisa barang bukan logam menjadi bahan baku sekunder. Hasil dari daur ulang\\/pemulihan material barang bukan logam adalah bahan baku sekunder berbagai bentuk seperti potongan-potongan atau serpihan bukan logam dan lainnya. Kegiatan pada kelompok ini mencakup pemisahan dan pemilihan sampah bukan logam, reklamasi karet dan ban bekas, pemilihan plastik, pengolahan sampah plastik atau karet menjadi butiran, penghancuran, pembersihan dan pemilihan kaca, pengolahan minyak dan lemak bekas pakai menjadi bahan sekunder, pengolahan sampah makanan, minuman dan tembakau dan sampah bukan logam lainnya. Pembuatan barang bukan logam yang baru dari bahan baku sekunder, barang bekas bukan logam dan sisa-sisa barang bukan logam dimasukkan dalam kelompok industri yang sesuai.",
          
        },
        {
          "number": "39000",
          "name": "AKTIVITAS REMEDIASI DAN PENGELOLAAN LIMBAH DAN SAMPAH LAINNYA",
          "description": "Kelompok ini mencakup usaha jasa pembersihan dan pengelolaan limbah dan sampah lainnya oleh pemerintah dan swasta, seperti dekontaminasi tanah dan air tanah di tempat yang tercemar polusi, baik in situ dan ex situ, menggunakan metode mekanik, kimia atau biologi; dekontaminasi tempat atau pabrik industri, termasuk tempat dan penanaman nuklir; dekontaminasi dan pembersihan air permukaan akibat polusi, contoh karena terkumpulnya polutan atau karena bahan kimia lainnya; pembersihan minyak yang tumpah (oil spill) dan polusi lain pada tanah, air permukaan, di samudera dan laut, termasuk pesisir pantai; pengurangan asbes, cat dan bahan-bahan beracun lainnya; kegiatan pengontrol polusi khusus lainnya; dan penyemprotan kuman,dan usaha jasa kebersihan lainnya yang sejenis",
          
        },
        {
          "number": "41011",
          "name": "KONSTRUKSI GEDUNG HUNIAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk hunian, seperti rumah tinggal, rumah tinggal sementara, rumah susun, apartemen dan kondominium. Termasuk pembangunan gedung untuk hunian yang dikerjakan oleh perusahaan real estat dengan tujuan untuk dijual dan kegiatan perubahan dan renovasi gedung hunian.",
          
        },
        {
          "number": "41012",
          "name": "KONSTRUKSI GEDUNG PERKANTORAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk gedung perkantoran, seperti kantor dan rumah kantor (rukan). Termasuk pembangunan gedung untuk perkantoran yang dikerjakan oleh perusahaan real estat dengan tujuan untuk dijual dan kegiatan perubahan dan renovasi gedung perkantoran.",
          
        },
        {
          "number": "41013",
          "name": "KONSTRUKSI GEDUNG INDUSTRI",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk industri, seperti gedung perindustrian\\/pabrik, gedung workshop\\/bengkel kerja, bangunan pabrik untuk pengelolaan dan pemrosesan bahan nuklir. Termasuk kegiatan perubahan dan renovasi gedung industri.",
          
        },
        {
          "number": "41014",
          "name": "KONSTRUKSI GEDUNG PERBELANJAAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk perbelanjaan, seperti gedung perdagangan\\/pasar\\/mall, toserba, toko, rumah toko (ruko) dan warung. Termasuk pembangunan ruko yang dikerjakan oleh perusahaan real estat dengan tujuan untuk dijual dan kegiatan perubahan dan renovasi gedung perbelanjaan.",
          
        },
        {
          "number": "41015",
          "name": "KONSTRUKSI GEDUNG KESEHATAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk sarana kesehatan, seperti rumah sakit, poliklinik, puskesmas, balai pengobatan, gedung pelayanan kesehatan dan gedung laboratorium. Termasuk kegiatan perubahan dan renovasi gedung kesehatan.",
          
        },
        {
          "number": "41016",
          "name": "KONSTRUKSI GEDUNG PENDIDIKAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk sarana pendidikan, seperti gedung sekolah, tempat kursus, laboratorium dan bangunan penunjang pendidikan lainnya. Termasuk kegiatan perubahan dan renovasi gedung pendidikan.",
          
        },
        {
          "number": "41017",
          "name": "KONSTRUKSI GEDUNG PENGINAPAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk penginapan, seperti gedung perhotelan, hostel dan losmen. Termasuk kegiatan perubahan dan renovasi gedung penginapan.",
          
        },
        {
          "number": "41018",
          "name": "KONSTRUKSI GEDUNG TEMPAT HIBURAN DAN OLAHRAGA",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai untuk tempat hiburan, seperti bioskop, gedung kebudayaan\\/kesenian, gedung wisata dan rekreasi serta gedung olahraga. Termasuk pembangunan gedung untuk tempat hiburan yang dikerjakan oleh perusahaan real estat dengan tujuan untuk dijual dan kegiatan perubahan dan renovasi gedung tempat hiburan dan olahraga.",
          
        },
        {
          "number": "43211",
          "name": "INSTALASI LISTRIK",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemasangan, pemeliharaan, pembangunan kembali instalasi listrik pada pembangkit, transmisi, gardu induk, distribusi tenaga listrik, sistem catu daya, dan instalasi listrik pada bangunan gedung baik untuk hunian maupun non hunian, seperti pemasangan instalasi jaringan listrik tegangan rendah. Termasuk kegiatan pemasangan dan pemeliharaan instalasi listrik pada bangunan sipil, seperti jalan raya, jalan kereta api dan lapangan udara.",
          
        },
        {
          "number": "43212",
          "name": "INSTALASI TELEKOMUNIKASI",
          "description": "Kelompok ini mencakup kegiatan pemasangan instalasi telekomunikasi pada bangunan gedung baik untuk hunian maupun non hunian, seperti pemasangan antena.Kelompok ini juga mencakup kegiatan pemasangan, pemeliharaan dan perbaikan instalasi telekomunikasi pada sentral telepon\\/telegraf, stasiun pemancar radar gelombang mikro, stasiun bumi kecil\\/stasiun satelit dan sejenisnya. Termasuk kegiatan pemasangan transmisi dan jaringan telekomunikasi dan Instalasi telekomunikasi di bangunan gedung dan bangunan sipil.",
          
        },
        {
          "number": "43213",
          "name": "INSTALASI ELEKTRONIKA",
          "description": "Kelompok ini mencakup kegiatan pemasangan instalasi elektronika pada bangunan gedung baik untuk hunian maupun non hunian, dan elektronika bandara serta teknologi informasi (termasuk telekomunikasi dan sistem teknologi informasi), seperti pemasangan sistem alarm, close circuit TV dan sound system dan commercial management system (pre-paid electricity voucher). Termasuk juga instalasi access control, scoring board, timing system, perimeter pixel display, master clock dan fasilitas elektronik lainnya.",
          
        },
        {
          "number": "43214",
          "name": "JASA INSTALASI KONSTRUKSI NAVIGASI LAUT, SUNGAI, DAN UDARA",
          "description": "Kelompok ini mencakup kegiatan pemasangan dan perawatan konstruksi dan peralatan terkait dengan sarana bantu navigasi laut,sungai dan udara, telekomunikasi-pelayaran\\/penerbangan, hidrografi dan meteorologi, alur perlintasan, pemanduan, untuk kepentingan keselamatan pelayaran dan penerbangan.",
          
        },
        {
          "number": "43215",
          "name": "INSTALASI SINYAL DAN TELEKOMUNIKASI KERETA API",
          "description": "Kelompok ini mencakup pemasangan, pemeliharaan dan perbaikan instalasi sinyal dan telekomunikasi kereta api.",
          
        },
        {
          "number": "43216",
          "name": "INSTALASI SINYAL DAN RAMBU-RAMBU JALAN RAYA",
          "description": "Kelompok ini mencakup kegiatan pemasangan, pemeliharaan dan perbaikan instalasi sinyal dan rambu-rambu jalan raya. Termasuk pemasangan perlengkapan jalan dan\\/atau rambu jalan, marka jalan, marka jembatan, termasuk reflector, deliniator, papan penunjuk jalan, patok pengarah, patok kilometer, patok hektometer, kerb pracetak, median beton, guardrail, dan perlengkapan lainnya yang sejenis.",
          
        },
        {
          "number": "43221",
          "name": "INSTALASI SALURAN AIR (PLAMBING)",
          "description": "Kelompok ini mencakup kegiatan instalasi air bersih, air limbah dan saluran drainase, termasuk pekerjaan perpipaan pada bangunan gedung hunian maupun non hunian. Termasuk kegiatan pemeliharaan dan perbaikan instalasi saluran air, pipa distribusi air bersih dan instalasi Water Treatment Plant (WTP)\\/Reverse Osmosis (RO), pipa air kotor.",
          
        },
        {
          "number": "43222",
          "name": "INSTALASI PEMANAS DAN GEOTERMAL",
          "description": "Kelompok ini mencakup kegiatan pemasangan dan perawatan peralatan pemanas (heating) dan geotermal pada bangunan gedung untuk hunian maupun bukan hunian, elektrik maupun non elektrik, termasuk pekerjaan pipa, ducting dan lembaran logam; sistem pengendali pemanasan sentral, penghubung ke sistem pemanasan area, termasuk boiler domestik alat pembakar (burner). Termasuk pekerjaan isolasi panas pada pipa atau tangki, pemasangan insulasi termal kedap cuaca sebelah luar dinding, pemasangan insulasi thermal (untuk pipa air panas dan dingin, ketel uap dan saluran pembuang), insulasi kedap kebakaran, dan pemasangan sistem pelindung kebakaran.",
          
        },
        {
          "number": "43223",
          "name": "INSTALASI MINYAK DAN GAS",
          "description": "Kelompok ini mencakup kegiatan pemasangan dan pemeliharaan instalasi minyak dan gas pada bangunan gedung hunian dan non hunian serta bangunan sipil lainnya, pekerjaan inspeksi, dan perawatan fasilitas produksi minyak, gas, petrokimia dan panas bumi termasuk pekerjaan instalasi perpipaannya di darat maupun di bawah laut. Termasuk instalasi fasilitas produksi dan penyimpanan di darat dan di laut untuk minyak, gas, petrokimia dan panas bumi termasuk anjungan lepas pantai dan bawah laut.",
          
        },
        {
          "number": "43224",
          "name": "INSTALASI PENDINGIN DAN VENTILASI UDARA",
          "description": "Kelompok ini mencakup kegiatan pemasangan dan perawatan ventilasi (ventilation), lemari pendingin dan penyejuk udara (Air Conditioner\\/AC) untuk bangunan gedung baik untuk hunian maupun bukan hunian, termasuk pekerjaan pipa, ducting dan lembaran logam.",
          
        },
        {
          "number": "43291",
          "name": "INSTALASI MEKANIKAL",
          "description": "Kelompok ini mencakup kegiatan pemasangan dan pemeliharaan instalasi mekanikal alat angkut dan alat angkat pada bangunan gedung hunian dan non hunian serta bangunan sipil lainnya, seperti lift, tangga berjalan (eskalator), ban berjalan (conveyor), jalan-tapak bergerak (travelator),gondola, dan pintu otomatis termasuk pekerjaan perlengkapan tangga keselamatan dari kebakaran.",
          
        },
        {
          "number": "43292",
          "name": "INSTALASI METEOROLOGI, KLIMATOLOGI DAN GEOFISIKA",
          "description": "Kelompok ini mencakup kegiatan pemasangan instalasi meteorologi, klimatologi dan geofisika ukuran kecil, sedang atau besar.",
          
        },
        {
          "number": "43293",
          "name": "INSTALASI FASILITAS SUMBER RADIASI PENGION",
          "description": "Kelompok ini mencakup kegiatan instalasi terhadap fasilitas sumber radiasi pengion.",
          
        },
        {
          "number": "43294",
          "name": "INSTALASI NUKLIR",
          "description": "Kelompok ini mencakup kegiatan instalasi terhadap reaktor nuklir dan instalasi nuklir non reaktor.",
          
        },
        {
          "number": "43299",
          "name": "INSTALASI KONSTRUKSI LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan pemasangan instalasi gedung lainnya dan kegiatan pemasangan, pemeliharaan dan perbaikan instalasi bangunan sipil lainnya yang belum tercakup dalam kelompok 43291 s.d. 43294. Termasuk pemasangan dan pemeliharaan instalasi fasilitas pertambangan dan manufaktur seperti loading and discharging stations, winding shafts, chemical plants, iron foundaries, blast furnaces dan coke oven; pemasangan instalasi sistem pengolahan dan peralatan pemurnian air laut, air payau, air tawar menjadi air murni pada pembangkit listrik.",
          
        },
        {
          "number": "41019",
          "name": "KONSTRUKSI GEDUNG LAINNYA",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan yang dipakai penggunaan selain dalam kelompok 41011 s.d. 41018, seperti tempat ibadah (masjid, gereja katolik, gereja kristen, pura, wihara, kelenteng), gedung terminal\\/stasiun, balai yasa (kereta api), bangunan monumental, gedung negara dan pemerintah pusat\\/daerah, bangunan bandara, gedung hangar pesawat, gedung PKPPK (Pemadam Kebakaran di Bandar Udara), gedung bersejarah, gedung penjara, gedung balai pertemuan, gudang, gedung genset, rumah pompa, depo, gedung power house, gedung gardu listrik, gedung gardu sinyal, gedung tower, gedung penyimpanan termasuk penyimpanan bahan peledak dan lainnya. Termasuk kegiatan perubahan dan renovasi gedung lainnya.",
          
        },
        {
          "number": "41020",
          "name": "JASA PEKERJAAN KONSTRUKSI PRAPABRIKASI BANGUNAN GEDUNG",
          "description": "Kelompok ini mencakup kegiatan pemasangan bahan hasil produksi pabrik seperti beton pracetak, baja, plastik, karet, dan hasil produksi pabrik lainnya dengan metode pabrikasi, erection, dan\\/ atau perakitan untuk bangunan gedung.",
          
        },
        {
          "number": "42101",
          "name": "KONSTRUKSI BANGUNAN SIPIL JALAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan jalan (raya, sedang, dan kecil), jalan bebas hambatan\\/jalan tol, dan jalan landasan terbang (pacu, taksi, dan parkir), dan lapangan penyimpanan peti kemas (containers yard). Termasuk kegiatan penunjang pembangunan, peningkatan, pemeliharaan konstruksi pagar\\/tembok penahan jalan. Tidak termasuk jalan layang.",
          
        },
        {
          "number": "42102",
          "name": "KONSTRUKSI BANGUNAN SIPIL JEMBATAN, JALAN LAYANG, FLY OVER, DAN UNDERPASS",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan jembatan (termasuk jembatan rel), jalan layang, underpass, dan fly over. Termasuk kegiatan pembangunan, peningkatan, pemeliharaan penunjang, pelengkap dan perlengkapan jembatan dan jalan layang, seperti pagar\\/tembok penahan, drainase jalan, marka jalan, dan rambu-rambu.",
          
        },
        {
          "number": "42103",
          "name": "KONSTRUKSI JALAN REL",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali jalan rel. Seperti jalan rel untuk kereta api. Termasuk pekerjaan pemasangan rel dan bantalan kereta api dan penimbunan kerikil (agregat kelas A) untuk badan jalan kereta api.",
          
        },
        {
          "number": "42104",
          "name": "KONSTRUKSI TEROWONGAN",
          "description": "Kelompok ini mencakup usaha pembangunan terowongan dengan menggunakan mesin bor dan\\/atau bahan peledak, bekisting, pembesian, dan pengecoran beton; pemeliharaan dan perbaikan bangunan terowongan di bawah permukaan air, di bukit atau pegunungan dan di bawah permukaan tanah.",
          
        },
        {
          "number": "42201",
          "name": "KONSTRUKSI JARINGAN IRIGASI DAN DRAINASE",
          "description": "Kelompok ini mencakup usaha pembangunan pemeliharaan, dan\\/atau pembangunan kembali bangunan jaringan saluran air irigasi dan jaringan drainase.",
          
        },
        {
          "number": "42202",
          "name": "KONSTRUKSI BANGUNAN SIPIL PENGOLAHAN AIR BERSIH",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan penyadap dan penyalur air baku, bangunan pengolahan air baku, bangunan pengolahan air minum, bangunan menara air minum, reservoir air minum, jaringan pipa\\/penyalur distribusi air bersih, tangki air minum dan bangunan pelengkap air minum lainnya.",
          
        },
        {
          "number": "42203",
          "name": "KONSTRUKSI BANGUNAN SIPIL PRASARANA DAN SARANA SISTEM PENGOLAHAN LIMBAH PADAT, CAIR, DAN GAS",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan pengolahan limbah padat, cair, dan gas, reservoir limbah, jaringan perpipaan limbah,bangunan jaringan air limbah dalam kota (jaringan pengumpul air limbah domestik\\/manusia dan air limbah industri), bangunan tempat pembuangan dan pembakaran (incenerator) limbah, dan bangunan pelengkap limbah padat, cair, dan gas, bangunan tempat pembuangan akhir sampah beserta bangunan pelengkapnya, dan jasa pemasangan konstruksi sistem septik, konstruksi unit pengolahan limbah yang dihasilkan dari pembangkit thermal, hydro, panas bumi, energi baru dan terbarukan (EBT) lainnya.",
          
        },
        {
          "number": "42204",
          "name": "KONSTRUKSI BANGUNAN SIPIL ELEKTRIKAL",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan sipil elektrikal seperti bangunan sipil pembangkit, transmisi, distribusi dan instalasi pemanfaatan tenaga listrik, jaringan pipa listrik lokal dan jarak jauh termasuk pembangunan gardu induk dan pemasangan tiang listrik dan menara.",
          
        },
        {
          "number": "42205",
          "name": "KONSTRUKSI BANGUNAN SIPIL TELEKOMUNIKASI UNTUK PRASARANA TRANSPORTASI",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan fasilitas telekomunikasi sarana bantu navigasi laut, bangunan telekomunikasi navigasi udara, bangunan sinyal dan telekomunikasi kereta api, termasuk bangunan menara\\/tiang\\/ pipa\\/antena dan bangunan sejenisnya.",
          
        },
        {
          "number": "42206",
          "name": "KONSTRUKSI SENTRAL TELEKOMUNIKASI",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan dan perbaikan konstruksi bangunan sentral telekomunikasi beserta perlengkapannya, seperti bangunan sentral telepon, telegraf, bangunan menara pemancar, penerima radar gelombang mikro, bangunan stasiun bumi kecil dan stasiun satelit. Termasuk jaringan pipa komunikasi lokal dan jarak jauh, jaringan transmisi, dan jaringan distribusi kabel telekomunikasi\\/ telepon di atas permukaan tanah, di bawah tanah dan di dalam air.",
          
        },
        {
          "number": "42207",
          "name": "PEMBUATAN\\/PENGEBORAN SUMUR AIR TANAH",
          "description": "Kelompok ini mencakup kegiatan khusus pembuatan\\/pengeboran untuk mendapatkan air tanah, baik skala kecil, skala sedang, maupun skala besar dan tekanan tinggi sebagai bagian dari pekerjaan yang tercakup dalam konstruksi gedung. Termasuk pekerjaan pengeboran atau penggalian sumur air, pemasangan pompa dan pipanya.",
          
        },
        {
          "number": "42209",
          "name": "KONSTRUKSI JARINGAN IRIGASI, KOMUNIKASI, DAN LIMBAH LAINNYA",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan konstruksi lainnya yang belum tercakup dalam kelompok 42201 s.d. 42207. Termasuk penataan bangunan dan lingkungan, prasarana kawasan permukiman, industri, rumah sakit, dan lain-lain.",
          
        },
        {
          "number": "42911",
          "name": "KONSTRUKSI BANGUNAN PRASARANA SUMBER DAYA AIR",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan prasarana sumber daya air seperti bendungan (dam), bendung (weir), embung, pintu air, talang (viaduk), siphon, check dam, tanggul dan saluran pengendali banjir, tanggul laut, bangunan pengambilan (free intake), krib, waduk dan sejenisnya, stasiun pompa dan\\/atau prasarana sumber daya air lainnya.",
          
        },
        {
          "number": "42912",
          "name": "KONSTRUKSI BANGUNAN PELABUHAN BUKAN PERIKANAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan dermaga (jetty), trestle,sarana pelabuhan, dan sejenisnya pelabuhan bukan perikanan. Termasuk konstruksi jalan air atau terusan, pelabuhan dan sarana jalur sungai, dok (pangkalan), lock (panama canal lock, hoover dam) dan lain-lain.",
          
        },
        {
          "number": "42913",
          "name": "KONSTRUKSI BANGUNAN PELABUHAN PERIKANAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan dermaga (jetty), trestle,sarana pelabuhan, dan sejenisnya pelabuhan perikanan. Termasuk konstruksi jalan air atau terusan, pelabuhan dan sarana jalur sungai, dok (pangkalan), lock (panama canal lock, hoover dam) dan lain-lain.",
          
        },
        {
          "number": "42914",
          "name": "PENGERUKAN",
          "description": "Kelompok ini mencakup usaha pengerukan atau normalisasi dan pemeliharaan sungai, pelabuhan, rawa, danau, alur pelayaran, kolam dan kanal, baik dengan sifat pekerjaan ringan, sedang, maupun berat. Termasuk pengerukan untuk pembuatan jalur transportasi air.",
          
        },
        {
          "number": "42915",
          "name": "KONSTRUKSI BANGUNAN SIPIL MINYAK DAN GAS BUMI",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan sipil pada kegiatan usaha hulu dan hilir minyak dan gas.",
          
        },
        {
          "number": "42916",
          "name": "KONSTRUKSI BANGUNAN SIPIL PERTAMBANGAN",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan, dan\\/atau pembangunan kembali fasilitas eksplorasi dan operasi produksi pertambangan, termasuk pengendalian dampak lingkungan.",
          
        },
        {
          "number": "42917",
          "name": "KONSTRUKSI BANGUNAN SIPIL PANAS BUMI",
          "description": "Kelompok ini mencakup jasa konstruksi untuk pembangunan, pemeliharaan, dan\\/atau pembangunan kembali, fasilitas hulu panas bumi, seperti sumur dan pipa penyalur.",
          
        },
        {
          "number": "42918",
          "name": "KONSTRUKSI BANGUNAN SIPIL FASILITAS OLAH RAGA",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan fasilitas olah raga seperti bangunan stadion, olah raga lapangan (sepakbola, baseball, rugby, lintasan balap mobil dan motor), lapangan basket, hockey, lapangan tenis, lapangan golf, kolam renang termasuk kolam renang berdinding baja galvanized stainless steel standar olympic, lintasan atletik, lapangan panahan, gelanggang olahraga dan lain-lain.",
          
        },
        {
          "number": "42919",
          "name": "KONSTRUKSI BANGUNAN SIPIL LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembangunan, pemeliharaan dan perbaikan bangunan sipil lainnya yang belum tercakup dalam kelompok 42911 s.d. 42918, seperti lapangan parkir dan sarana lingkungan pemukiman (di luar gedung) lainnya.Kelompok ini mencakup pembagian lahan dengan pengembangannya (misalnya penambahan jalan, prasarana umum dan lain-lain). Termasuk pengadaan dan pelaksanaan konstruksi fasilitas mikroelektronika dan pabrik pengolahan, seperti yang memproduksi mikroprosesor, chip silikon dan wafer, mikrosirkuit, dan semikonduktor; pengadaan dan pelaksanaan konstruksi pabrik pengolahan tekstil dan pakaian; pengadaan dan pelaksanaan konstruksi pengolahan besi dan baja; dan\\/atau pengadaan dan pelaksanaan konstruksi pabrik pengolahan lainnya.",
          
        },
        {
          "number": "42921",
          "name": "KONSTRUKSI RESERVOIR PEMBANGKIT LISTRIK TENAGA AIR",
          "description": "Kelompok ini mencakup kegiatan pembangunan reservoir, intake, control gate, penstock, dan outflow pada pembangkit listrik tenaga air.",
          
        },
        {
          "number": "42922",
          "name": "JASA PEKERJAAN KONSTRUKSI PELINDUNG PANTAI",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali bangunan pelindung pantai termasuk groin, breakwater, seawall, artificial headland, beach nourishment, terumbu buatan dan pekerjaan lainnya yang sejenis.",
          
        },
        {
          "number": "42923",
          "name": "KONSTRUKSI BANGUNAN SIPIL FASILITAS PENGOLAHAN PRODUK KIMIA, PETROKIMIA, FARMASI, DAN INDUSTRI LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali pabrik pengolahan bahan kimia dasar; pengolahan pupuk; pabrik plastik dan pabrik pengolahan karet; pengolahan hasil agrokimia; pabrik pengolahan kimia lainnya termasuk pabrik pengolahan produk farmasi dan petrokimia.",
          
        },
        {
          "number": "42924",
          "name": "KONSTRUKSI BANGUNAN SIPIL FASILITAS MILITER DAN PELUNCURAN SATELIT",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali konstruksi bangunan untuk fasilitas militer seperti benteng, lubang perlindungan, pusat pengujian militer. Termasuk tempat peluncuran satelit.",
          
        },
        {
          "number": "42929",
          "name": "KONSTRUKSI KHUSUS BANGUNAN SIPIL LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan pembangunan, pemeliharaan, dan\\/atau pembangunan kembali konstruksi khusus bangunan sipil lainnya yang belum tercakup dalam kelompok 42921 s.d. 42924.",
          
        },
        {
          "number": "42930",
          "name": "JASA PEKERJAAN KONSTRUKSI PRAPABRIKASI BANGUNAN SIPIL",
          "description": "Kelompok ini mencakup kegiatan pemasangan bahan hasil produksi pabrik seperti beton pracetak, baja, plastik, karet, dan hasil produksi pabrik lainnya dengan metode pabrikasi, erection, dan\\/ atau perakitan untuk bangunan sipil.",
          
        },
        {
          "number": "43110",
          "name": "PEMBONGKARAN",
          "description": "Kelompok ini mencakup usaha pembongkaran dan penghancuran atau perataan gedung atau bangunan lainnya serta pembersihannya. Tidak termasuk penyiapan lahan untuk pertambangan minyak dan gas.",
          
        },
        {
          "number": "43120",
          "name": "PENYIAPAN LAHAN",
          "description": "Kelompok ini mencakup usaha penyiapan lahan untuk kegiatan konstruksi yang berikutnya, seperti pelaksanaan pembersihan dan pematangan lahan konstruksi, pembersihan semak belukar; pembukaan lahan\\/stabilisasi tanah, (penggalian, membuat kemiringan, pengurukan, perataan lahan konstruksi, penggalian parit, pemindahan, penghancuran atau peledakan batu dan sebagainya); pelaksanaan pekerjaan tanah dan\\/atau tanah berbatu, penggalian, membuat kemiringan, perataan tanah dengan galian dan timbunan untuk konstruksi jalan (raya, sedang, dan kecil), jalan bebas hambatan, jalan rel kereta api, dan jalan landasan terbang (pacu, taksi, dan parkir), pabrik, pembangkit, transmisi, gardu induk, dan distribusi tenaga listrik, fasilitas produksi, serta bangunan gedung dan bangunan sipil lainnya; pemasangan, pemindahan, dan perlindungan utilitas, tes\\/uji dengan sondir dan bor, pemboran, ekstraksi material, dan penyelidikan lapangan\\/pengambilan contoh untuk keperluan konstruksi, geofisika, geologi atau keperluan sejenis; dan penyiapan lahan untuk fasilitas ketenaganukliran. Kegiatan penunjang penyiapan lahan seperti pemasangan fasilitas alat bantu konstruksi (pemasangan sheet pile, papan nama proyek, dan gorong-gorong untuk pemasangan kabel, pekerjaan pembuatan kantor, basecamp, direksi kit, gudang, bengkel proyek), pengukuran kembali, pembuatan\\/pengalihan jalan sementara, perbaikan dan pemeliharaan jalan umum, dewatering\\/pengeringan, mobilisasi dan demobilisasi, dan pekerjaan sejenis lainnya.",
          
        },
        {
          "number": "32904",
          "name": "INDUSTRI PERALATAN UNTUK PELINDUNG KESELAMATAN",
          "description": "Kelompok ini mencakup usaha pembuatan peralatan untuk pelindung keselamatan, seperti pakaian pelindung dan pakaian anti api, sabuk pengaman tukang kawat dan sabuk lain untuk keperluan pekerjaan, pelampung, topi plastik yang keras (helm bangunan) dan perlengkapan keamanan lainnya yang terbuat dari plastik (helm olahraga dan segala macam helm sejenisnya), pakaian pelindung kebakaran, tutup kepala pengaman dari logam dan peralatan pengaman pribadi lain yang terbuat dari logam, penyumbat telinga dan hidung (misalnya untuk renang dan pengaman hidung) dan masker gas, masker non medis dan APD termasuk face shield.",
          
        },
        {
          "number": "32905",
          "name": "INDUSTRI SERAT SABUT KELAPA",
          "description": "Kelompok ini mencakup usaha pengolahan sabut kelapa menjadi bahan baku, seperti cocofiber (serat sabut kelapa), cocopeat (serbuk sabut kelapa), Rubberized Curl Coir (RCC)\\/ serat sabut kelapa berkaret (sebutret), dan lainnya. Contoh: cocofiber digunakan untuk pembuatan jok mobil, spring bed, dan lainnya serta cocopeat biasanya digunakan untuk media tanaman, dan lainnya.",
          
        },
        {
          "number": "32906",
          "name": "INDUSTRI PRODUKSI RADIOISOTOP",
          "description": "Kelompok ini mencakup usaha yang melakukan kegiatan pembuatan radioisotop hasil dari aktivasi akselerator (pemercepat partikel) atau iradiasi dari reaktor nuklir.",
          
        },
        {
          "number": "32907",
          "name": "INDUSTRI FABRIKASI ELEMEN BAKAR URANIUM",
          "description": "Kelompok ini mencakup usaha yang melakukan kegiatan fabrikasi elemen bakar uranium.",
          
        },
        {
          "number": "32909",
          "name": "INDUSTRI PENGOLAHAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pembuatan barang-barang yang tidak diklasifikasikan di tempat lain, seperti papan nama, papan reklame (papan atau lampu display), segala macam payung, pipa rokok, lencana, piala, medali, stempel, tongkat, kap lampu, lilin, segala macam kancing, sapu, sikat ijuk, tempat cerutu dan sirih, pipa rokok, sisir, penyemprot wangi- wangian, botol vakum dan bejana vakum untuk keperluan pribadi atau rumah tangga, wig (rambut palsu), janggut palsu, bulu mata palsu dan lainnya yang belum tercakup dalam golongan lainnya, termasuk pembuatan korek api dari logam dan pembuatan perhiasan imitasi, boneka yang digunakan oleh penjahit untuk mengenakan baju, peti jenazah. Pembuatan sumbu lampu dimasukan dalam kelompok 13942.",
          
        },
        {
          "number": "33111",
          "name": "REPARASI PRODUK LOGAM SIAP PASANG UNTUK BANGUNAN, TANGKI, TANDON AIR DAN GENERATOR UAP",
          "description": "Kelompok ini mencakup reparasi dan perawatan produk logam pabrikasi di golongan 251, seperti reparasi tangki, reservoir dan kontainer atau wadah logam, drum pengapalan baja, generator uap atau uap air lainnya, mesin tambahan yang digunakan dalam generator uap (Kondensator, pemanas, pengumpul\\/kolektor dan akumulator uap), reactor nuklir kecuali separator isotop, suku cadang mesin kapal laut atau ketel uap tenaga dan peralatan kerja dari radiator dan pemanas pusat dan sejenisnya.",
          
        },
        {
          "number": "33112",
          "name": "REPARASI PRODUK SENJATA DAN AMUNISI",
          "description": "Kelompok ini mencakup reparasi dan perawatan produk logam di golongan 252, yaitu reparasi dan perawatan senjata api dan meriam\\/artileri (termasuk reparasi senjata untuk kegiatan olahraga atau rekreasional).",
          
        },
        {
          "number": "33119",
          "name": "REPARASI PRODUK LOGAM PABRIKASI LAINNYA",
          "description": "Kelompok ini mencakup reparasi dan perawatan produk logam pabrikasi di golongan 259, seperti reparasi dan perawatan alat potong, perkakas tangan dan peralatan umum (biasa digunakan umtuk pertanian, pertukangan dan rumah tangga), wadah dari logam, barang dari kawat, brankas, filling kabinet dan barang logam lainnya. Termasuk las (keliling) yang berpindah-pindah,",
          
        },
        {
          "number": "33121",
          "name": "REPARASI MESIN UNTUK KEPERLUAN UMUM",
          "description": "Kelompok ini mencakup reparasi mesin untuk keperluan umum yang tercakup dalam golongan 281, seperti reparasi dan perawatan mesin kapal laut atau kereta api, pompa dan peralatan yang terkait, peralatan tenaga uap atau zat cair, katup atau klep, roda gigi (persneling) dan peralatan kemudi, tungku pembakar pada proses industri, alat pengangkat dan pemindah, mesin dan peralatan kantor kecuali komputer dan perlengkapannya (cash register, mesin fotokopi, kalkulator, mesin ketik), perkakas tangan yang digerakkan tenaga, peralatan pendingin dan pembersih udara, timbangan, mesin penjual otomatis dan keperluan umum lainnya.",
          
        },
        {
          "number": "33122",
          "name": "REPARASI MESIN UNTUK KEPERLUAN KHUSUS",
          "description": "Kelompok ini mencakup reparasi dan perawatan mesin untuk keperluan khusus yang tercakup dalam golongan 282, seperti reparasi dan perawatan traktor pertanian, mesin pertanian dan mesin kehutanan dan penebangan, perkakas mesin pemotong logam dan pembentuk logam dan aksesorinya, perkakas mesin lainnya, mesin metalurgi, mesin pertambangan dan penggalian termasuk mesin pada ladang minyak dan gas, mesin konstruksi, mesin pengolahan makanan dan minuman, mesin pengolahan tembakau, mesin tekstil, mesin pembuatan pakaian dan pakaian dari kulit, mesin pembuatan kertas dan mesin keperluan khusus lainnya.",
          
        },
        {
          "number": "33131",
          "name": "REPARASI ALAT UKUR, ALAT UJI DAN PERALATAN NAVIGASI DAN PENGONTROL",
          "description": "Kelompok ini mencakup reparasi dan perawatan peralatan yang diproduksi dalam golongan 265, seperti reparasi dan perawatan peralatan mesin pesawat terbang, peralatan pengujian emisi mobil, peralatan meteorologi, peralatan pengujian dan pemeriksaan perlengkapan secara fisik, listrik dan kimia, peralatan penelitian atau survei, peralatan pendeteksi dan pemantauan radiasi dan sejenisnya.",
          
        },
        {
          "number": "33132",
          "name": "REPARASI PERALATAN IRADIASI, ELEKTROMEDIS DAN ELEKTROTERAPI",
          "description": "Kelompok ini mencakup reparasi dan perawatan peralatan iradiasi, elektromedis dan elektroterapi dalam golongan 266, seperti reparasi dan perawatan peralatan penggambaran resonansi magnetik (magnetic resonance imaging\\/MRI), peralatan kesehatan ultrasound, peralatan pembuka jalan (pacemaker), peralatan bantu pendengaran (hearing aids), peralatan elektrokardiografi, peralatan endoskopis elektromedis, peralatan iradiasi dan sejenisnya.",
          
        },
        {
          "number": "33133",
          "name": "REPARASI PERALATAN FOTOGRAFI DAN OPTIK",
          "description": "Kelompok ini mencakup reparasi dan perawatan peralatan fotografi dan optik dalam golongan 267, jika utamanya digunakan secara komersial, seperti reparasi dan perawatan teropong, mikroskop (kecuali mikroskop elektron, proton), teleskop, prisma dan lensa (kecuali ophtalmik), peralatan fotografi dan sejenisnya.",
          
        },
        {
          "number": "33141",
          "name": "REPARASI MOTOR LISTRIK, GENERATOR DAN TRANSFORMATOR",
          "description": "Kelompok ini mencakup reparasi dan perawatan mesin dan peralatan yang diproduksi dalam golongan 271, seperti reparasi dan perawatan mesin tenaga, distribusi dan khususnya transformator, motor listrik, generator dan perangkat motor generator, peralatan saklar dan papan hubung, peralatan relay dan pengontrol industri.",
          
        },
        {
          "number": "33142",
          "name": "REPARASI BATERAI DAN AKUMULATOR LISTRIK",
          "description": "Kelompok ini mencakup reparasi dan perawatan baterai dan akumulator motor listrik dan lainnya yang termasuk dalam golongan 272.",
          
        },
        {
          "number": "46441",
          "name": "PERDAGANGAN BESAR OBAT FARMASI UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan besar obat farmasi untuk keperluan rumah tangga, seperti obat-obatan dan suplemen kesehatan untuk manusia.",
          
        },
        {
          "number": "46442",
          "name": "PERDAGANGAN BESAR OBAT TRADISIONAL UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan besar obat tradisional atau jamu dan suplemen kesehatan untuk manusia.",
          
        },
        {
          "number": "46443",
          "name": "PERDAGANGAN BESAR KOSMETIK UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan besar kosmetik untuk manusia seperti parfum, sabun, bedak dan lainnya.",
          
        },
        {
          "number": "46444",
          "name": "PERDAGANGAN BESAR OBAT FARMASI UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar obat farmasi untuk hewan yang meliputi kegiatan pemasukan, pengeluaran dan distribusi.",
          
        },
        {
          "number": "46445",
          "name": "PERDAGANGAN BESAR OBAT TRADISIONAL UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar obat tradisional atau obat alami untuk hewan yang meliputi kegiatan pemasukan, pengeluaran dan distribusi.",
          
        },
        {
          "number": "46446",
          "name": "PERDAGANGAN BESAR KOSMETIK UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar kosmetik untuk hewan, termasuk parfum, shampo, sabun, bedak, krim atau lotion, dan lainnya, yang meliputi kegiatan pemasukan, pengeluaran dan distribusi.",
          
        },
        {
          "number": "46447",
          "name": "PERDAGANGAN BESAR BAHAN FARMASI UNTUK MANUSIA DAN HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan baku farmasi baik untuk manusia maupun hewan.",
          
        },
        {
          "number": "46448",
          "name": "PERDAGANGAN BESAR BAHAN BAKU OBAT TRADISIONAL UNTUK MANUSIA DAN HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan baku obat tradisional baik untuk manusia maupun hewan.",
          
        },
        {
          "number": "46491",
          "name": "PERDAGANGAN BESAR PERALATAN DAN PERLENGKAPAN RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha perdagangan besar peralatan dan perlengkapan rumah tangga, seperti perabot rumah tangga (furniture), peralatan dapur dan memasak, lampu dan perlengkapannya, elektronik konsumen seperti radio, televisi, perekam dan pemutar CD dan DVD, perlengkapan stereo, konsol video game; alat penerangan, bermacam peralatan makan minum porselen dan gelas, peralatan sendok, pisau, garpu, peralatan dari kayu, barang dari anyaman dan barang dari gabus, karpet dan sebagainnya.",
          
        },
        {
          "number": "46492",
          "name": "PERDAGANGAN BESAR ALAT OLAHRAGA",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai alat olahraga (termasuk sepeda dan bagian-bagiannya serta aksesorinya).",
          
        },
        {
          "number": "46493",
          "name": "PERDAGANGAN BESAR ALAT MUSIK",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai alat musik, baik alat musik tradisional maupun alat musik modern, seperti kecapi, seruling bambu, calung, angklung, kulintang, gamelan, set, rebab, rebana, tifa, sasando, seruling (flute), saxophone, harmonika, trombone, gitar, mandolin, ukulele, harpa, bass, gambus, biola, cello, piano\\/organ, drum set dan garpu tala.",
          
        },
        {
          "number": "46494",
          "name": "PERDAGANGAN BESAR PERHIASAN DAN JAM",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai barang perhiasan dan jam.",
          
        },
        {
          "number": "46495",
          "name": "PERDAGANGAN BESAR ALAT PERMAINAN DAN MAINAN ANAK-ANAK",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai alat permainan dan mainan anak-anak baik permainan tradisional maupun modern seperti boardgame.",
          
        },
        {
          "number": "46499",
          "name": "PERDAGANGAN BESAR BERBAGAI BARANG DAN PERLENGKAPAN RUMAH TANGGA LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai barang dan perlengkapan rumah tangga lainnya, seperti barang-barang dari kulit, koper, alat-alat pembersih dan sebagainya. Termasuk rekaman suara dan video dalam kaset, CD dan DVD, barang kimia untuk rumah tangga (deterjen, pembersih lantai dan lain-lain), serta alat peraga pendidikan.",
          
        },
        {
          "number": "46511",
          "name": "PERDAGANGAN BESAR KOMPUTER DAN PERLENGKAPAN KOMPUTER",
          "description": "Kelompok ini mencakup usaha perdagangan besar komputer dan pelengkapan komputer.",
          
        },
        {
          "number": "46512",
          "name": "PERDAGANGAN BESAR PIRANTI LUNAK",
          "description": "Kelompok ini mencakup usaha perdagangan besar piranti lunak.",
          
        },
        {
          "number": "46521",
          "name": "PERDAGANGAN BESAR SUKU CADANG ELEKTRONIK",
          "description": "Kelompok ini mencakup usaha perdagangan besar katup dan tabung elektronik, peralatan semi konduktor, mikrochip dan IC dan PCB.",
          
        },
        {
          "number": "46522",
          "name": "PERDAGANGAN BESAR DISKET, FLASH DRIVE, PITA AUDIO DAN VIDEO, CD DAN DVD KOSONG",
          "description": "Kelompok ini mencakup usaha perdagangan besar disket, flash drive, pita audio dan pita video kosong, CD dan DVD kosong.",
          
        },
        {
          "number": "46523",
          "name": "PERDAGANGAN BESAR PERALATAN TELEKOMUNIKASI",
          "description": "Kelompok ini mencakup usaha perdagangan besar peralatan telekomunikasi, seperti perlengkapan telepon dan komunikasi. Termasuk peralatan penyiaran radio dan televisi.",
          
        },
        {
          "number": "46530",
          "name": "PERDAGANGAN BESAR MESIN, PERALATAN DAN PERLENGKAPAN PERTANIAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar mesin, peralatan dan perlengkapan pertanian, seperti : bajak, penyebar pupuk, penanam biji, alat panen, alat penebah, mesin pemerah susu, mesin beternak unggas dan mesin beternak lebah dan traktor yang digunakan dalam pertanian dan kehutanan. Termasuk mesin pemotong rumput.",
          
        },
        {
          "number": "46591",
          "name": "PERDAGANGAN BESAR MESIN KANTOR DAN INDUSTRI PENGOLAHAN, SUKU CADANG DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar mesin industri dan mesin kantor kecuali komputer, serta perlengkapannya, seperti mesin pengolahan kayu dan logam, macam-macam mesin untuk industri dan untuk keperluan kantor. Termasuk perdagangan besar robot-robot produksi pengolahan, mesin-mesin lain ytdl untuk keperluan industri, dan mesin yang dikendalikan komputer untuk industri tekstil serta mesin jahit dan rajut yang dikendalikan komputer.",
          
        },
        {
          "number": "46592",
          "name": "PERDAGANGAN BESAR ALAT TRANSPORTASI LAUT, SUKU CADANG DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar macam-macam alat transportasi laut bermotor ataupun tidak bermotor, termasuk usaha perdagangan besar macam-macam suku cadang dan perlengkapannya.",
          
        },
        {
          "number": "46593",
          "name": "PERDAGANGAN BESAR ALAT TRANSPORTASI DARAT (BUKAN MOBIL, SEPEDA MOTOR, DAN SEJENISNYA), SUKU CADANG DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar macam-macam alat transportasi darat, bermotor ataupun tidak bermotor (bukan mobil, sepeda motor dan sejenisnya), termasuk usaha perdagangan besar macam-macam suku cadang dan perlengkapannya.",
          
        },
        {
          "number": "46594",
          "name": "PERDAGANGAN BESAR ALAT TRANSPORTASI UDARA, SUKU CADANG DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar macam-macam alat transportasi udara, termasuk usaha perdagangan besar macam-macam suku cadang dan perlengkapannya.",
          
        },
        {
          "number": "46599",
          "name": "PERDAGANGAN BESAR MESIN, PERALATAN DAN PERLENGKAPAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar mesin dan peralatan serta perlengkapan yang belum diklasifikasikan dalam kelompok 46591 s.d. 46594, seperti mesin penggerak mula, turbin, mesin pembangkit listrik dan mesin untuk keperluan rumah tangga. Termasuk perdagangan besar robot- robot produksi selain untuk pengolahan, mesin-mesin lain ytdl untuk perdagangan dan navigasi serta jasa lainnya, perdagangan besar kabel dan sakelar serta instalasi peralatan lain, perkakas mesin berbagai jenis dan untuk berbagai bahan, perkakas mesin yang dikendalikan komputer dan peralatan dan perlengkapan pengukuran.",
          
        },
        {
          "number": "46610",
          "name": "PERDAGANGAN BESAR BAHAN BAKAR PADAT, CAIR DAN GAS DAN PRODUK YBDI",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan bakar gas, cair, dan padat serta produk sejenisnya, seperti minyak bumi mentah, minyak mentah, bahan bakar diesel, gasoline, bahan bakar oli, kerosin, premium, solar, minyak tanah, batu bara, arang, ampas arang batu, bahan bakar kayu, nafta, bahan bakar nabati (biofuels) dan bahan bakar lainnya termasuk pula bahan bakar gas (LPG, gas butana dan propana, dan lain- lain) dan minyak semir, minyak pelumas dan produk minyak bumi yang telah dimurnikan, serta bahan bakar nuklir.",
          
        },
        {
          "number": "46620",
          "name": "PERDAGANGAN BESAR LOGAM DAN BIJIH LOGAM",
          "description": "Kelompok ini mencakup usaha perdagangan besar bijih logam dan logam dasar, seperti bijih besi dan bijih bukan besi dalam bentuk dasar, seperti bijih nikel, bijih tembaga, alumunium, besi, baja dan perdagangan besar produk logam besi dan bukan besi setengah jadi ytdl dan lain-lainnya. Termasuk perdagangan besar emas dan logam mulia lain (perak, platina).",
          
        },
        {
          "number": "46631",
          "name": "PERDAGANGAN BESAR BARANG LOGAM UNTUK BAHAN KONSTRUKSI",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai macam baja\\/besi untuk bahan konstruksi seperti baja tulangan, baja profil, pelat baja, dan baja lembaran, pipa besi\\/baja, kawat tali, kawat nyamuk, paku, mur\\/baut, engsel, gerendel, kunci, anak kunci, tangki air, menara air, rolling door, awning dan seng lembaran.",
          
        },
        {
          "number": "46632",
          "name": "PERDAGANGAN BESAR KACA",
          "description": "Kelompok ini mencakup usaha perdagangan besar kaca lembaran untuk bahan konstruksi, seperti kaca lembaran bening, kaca lembaran buram, kaca lembaran bening berwarna dan kaca lembaran berukir.",
          
        },
        {
          "number": "46633",
          "name": "PERDAGANGAN BESAR GENTENG, BATU BATA, UBIN DAN SEJENISNYA DARI TANAH LIAT, KAPUR, SEMEN ATAU KACA",
          "description": "Kelompok ini mencakup usaha perdagangan besar genteng, batu bata dan ubin yang terbuat dari tanah liat, kapur, semen atau kaca untuk bahan konstruksi, seperti genteng pres, genteng kodok, batu bata pres, batu bata berongga, bata tahan api, ubin lantai, ubin dinding, ubin batako, termasuk juga lubang angin, bak mandi, kloset, eternit, pipa irigasi dan buis.",
          
        },
        {
          "number": "46634",
          "name": "PERDAGANGAN BESAR SEMEN, KAPUR, PASIR DAN BATU",
          "description": "Kelompok ini mencakup usaha perdagangan besar semen, kapur, pasir, dan batu untuk bahan konstruksi, seperti semen portland putih, semen portland abu-abu, semen posolan kapur, semen portland posolan, kapur tohor, kapur tembok, pasir, kerikil, koral, batu, batu pecahan, batu lempengan, batu pualam dan kubus mosaik.",
          
        },
        {
          "number": "46635",
          "name": "PERDAGANGAN BESAR BAHAN KONSTRUKSI DARI PORSELEN",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan konstruksi dari porselen, seperti kloset, bidet, wastafel, winoir, bak cuci, bak mandi dan ubin dinding.",
          
        },
        {
          "number": "46636",
          "name": "PERDAGANGAN BESAR BAHAN KONSTRUKSI DARI KAYU",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan konstruksi dari kayu, seperti papan, galar, papan reng, papan lis, tiang telepon, tiang listrik, balok bantalan, kusen pintu\\/jendela, daun pintu\\/jendela, ubin kayu, atap kayu (sirap), kayu lapis tripleks, kayu lapis interior, teak wood, particle board, chip board, kayu pelapis dan kayu lapis untuk cetak beton.",
          
        },
        {
          "number": "46637",
          "name": "PERDAGANGAN BESAR CAT",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai macam cat untuk bahan konstruksi, seperti cat dasar, cat logam, cat kayu dan cat tembok. Termasuk juga perdagangan eceran email, dempul dan plamir.",
          
        },
        {
          "number": "46638",
          "name": "PERDAGANGAN BESAR BERBAGAI MACAM MATERIAL BANGUNAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar macam-macam material bangunan, seperti semen, pasir, paku, cat dan lain-lain.",
          
        },
        {
          "number": "46639",
          "name": "PERDAGANGAN BESAR BAHAN KONSTRUKSI LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan konstruksi lainnya yang belum tercakup dalam kelompok 46631 s.d. 46638, seperti wallpaper, pipa dan selang dari plastik, formika, plastik lembaran bergelombang, asbes semen rata, asbes semen berlapis dan pipa saluran asbes semen. Termasuk perdagangan besar pemanas air (water heater).",
          
        },
        {
          "number": "46641",
          "name": "PERDAGANGAN BESAR MINERAL BUKAN LOGAM",
          "description": "Kelompok ini mencakup usaha perdagangan besar mineral bukan logam seperti intan, korundum, grafit, arsen, pasir kuarsa, fluorspar, kriolit, yodium, brom, klor, belerang, fosfat, halit, asbes, talk, mika, magnesit, yarosit, oker, fluorit, ball clay, zeolit, kaolin, feldspar, bentonit, gipsum,dolomit, kalsit, rijang, pirofilit, kuarsit, zirkon, wolastonit, tawas, batu kuarsa, perlit, garam batu, clay, dan batu gamping untuk semen.",
          
        },
        {
          "number": "46642",
          "name": "PERDAGANGAN BESAR MINERAL RADIOAKTIF",
          "description": "Kelompok ini mencakup usaha perdagangan besar mineral radio aktif seperti radium, torium, uranium, monasit, dan bahan galian radioaktif lainnya.",
          
        },
        {
          "number": "46643",
          "name": "PERDAGANGAN BESAR ZAT RADIOAKTIF DAN PEMBANGKIT RADIASI PENGION",
          "description": "Kelompok ini mencakup usaha perdagangan besar zat radioaktif dan pembangkit radiasi pengion.",
          
        },
        {
          "number": "46651",
          "name": "PERDAGANGAN BESAR BAHAN DAN BARANG KIMIA",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan dan barang kimia dasar atau kimia industri, seperti tinta printer, minyak esensial, gas industri, perekat kimia, pewarna, resin buatan, metanol, parafin, perasa dan pewangi, soda, garam industri, asam dan sulfur dan lain-lain.",
          
        },
        {
          "number": "46652",
          "name": "PERDAGANGAN BESAR PUPUK DAN PRODUK AGROKIMIA",
          "description": "Kelompok ini mencakup usaha perdagangan besar pupuk dan produk agrokimia atau kimia pertanian.",
          
        },
        {
          "number": "46653",
          "name": "PERDAGANGAN BESAR BAHAN BERBAHAYA (B2)",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan berbahaya (B2).",
          
        },
        {
          "number": "46654",
          "name": "PERDAGANGAN BESAR BAHAN BERBAHAYA DAN BERACUN (B3)",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan berbahaya dan beracun (B3).",
          
        },
        {
          "number": "46691",
          "name": "PERDAGANGAN BESAR ALAT LABORATORIUM, ALAT FARMASI DAN ALAT KEDOKTERAN UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan besar alat laboratorium, alat farmasi dan alat kedokteran untuk manusia.",
          
        },
        {
          "number": "46692",
          "name": "PERDAGANGAN BESAR ALAT LABORATORIUM, ALAT FARMASI DAN ALAT KEDOKTERAN UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar alat laboratorium, alat farmasi dan alat kedokteran untuk hewan yang meliputi kegiatan pemasukan, pengeluaran dan distribusi.",
          
        },
        {
          "number": "46693",
          "name": "PERDAGANGAN BESAR KARET DAN PLASTIK DALAM BENTUK DASAR",
          "description": "Kelompok ini mencakup usaha perdagangan besar karet dan bahan plastik dalam bentuk dasar.",
          
        },
        {
          "number": "46694",
          "name": "PERDAGANGAN BESAR KERTAS DAN KARTON",
          "description": "Kelompok ini mencakup usaha perdagangan besar kertas dan karton.",
          
        },
        {
          "number": "46695",
          "name": "PERDAGANGAN BESAR BARANG DARI KERTAS DAN KARTON",
          "description": "Kelompok ini mencakup usaha perdagangan besar barang dari kertas dan karton.",
          
        },
        {
          "number": "46696",
          "name": "PERDAGANGAN BESAR BARANG BEKAS DAN SISA-SISA TAK TERPAKAI (SCRAP)",
          "description": "Kelompok ini mencakup usaha perdagangan besar barang bekas dan sisa- sisa tak terpakai dan potongan logam dan non-logam bahan untuk daur ulang, termasuk pengumpulan, pengurutan, pemisahan, pelepasan barang yang masih berguna misalnya mobil agar mendapatkan bagian yang masih bisa digunakan, pengepakan dan pengepakan kembali, penyimpanan dan pengiriman, tapi tanpa proses perubahan yang nyata. Dimana pembelian dan penjualan barang sisaan masih mempunyai nilai.",
          
        },
        {
          "number": "46699",
          "name": "PERDAGANGAN BESAR PRODUK LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan besar produk lainnya yang belum tercakup dalam salah satu kelompok perdagangan besar diatas. Termasuk perdagangan besar serat atau fiber tekstil dan lain-lain, perdagangan besar batu mulia (berlian, intan, safir dan lain-lain).",
          
        },
        {
          "number": "46900",
          "name": "PERDAGANGAN BESAR BERBAGAI MACAM BARANG",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai macam barang yang tanpa mengkhususkan barang tertentu (tanpa ada kekhususan tertentu) termasuk perkulakan.",
          
        },
        {
          "number": "47111",
          "name": "PERDAGANGAN ECERAN BERBAGAI MACAM BARANG YANG UTAMANYA MAKANAN, MINUMAN ATAU TEMBAKAU DI MINIMARKET\\/SUPERMARKET\\/HYPERMARKET",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang kebutuhan yang utamanya bahan makanan\\/makanan, minuman atau tembakau dengan harga yang sudah ditentukan serta pembeli mengambil dan membayar sendiri kepada kasir (self service\\/swalayan). Disamping itu juga dapat menjual beberapa barang bukan makanan seperti perabot rumah tangga, mainan anak-anak, dan pakaian. Misalnya minimarket atau supermarket atau hypermarket.",
          
        },
        {
          "number": "47112",
          "name": "PERDAGANGAN ECERAN BERBAGAI MACAM BARANG YANG UTAMANYA MAKANAN, MINUMAN ATAU TEMBAKAU BUKAN DI MINIMARKET\\/SUPERMARKET\\/HYPERMARKET (TRADISIONAL)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang kebutuhan yang utamanya bahan makanan\\/makanan, minuman atau tembakau di dalam bangunan bukan swalayan\\/minimarket\\/supermarket\\/hypermarket. Disamping itu juga dapat menjual beberapa barang bukan makanan seperti pakaian, perabot rumah tangga, dan mainan anak. Misalnya warung atau toko bahan kebutuhan pokok.",
          
        },
        {
          "number": "47191",
          "name": "PERDAGANGAN ECERAN BERBAGAI MACAM BARANG YANG UTAMANYA BUKAN MAKANAN, MINUMAN ATAU TEMBAKAU DI TOSERBA (DEPARTMENT STORE)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang yang utamanya bukan makanan, minuman atau tembakau dalam toserba (department store), yang terintegrasi di bawah satu pengelolaan. Pada umumnya barang-barang yang diperdagangkan antara lain pakaian, mebel, perhiasan, mainan anak-anak, alat-alat olahraga dan kosmetik.",
          
        },
        {
          "number": "47192",
          "name": "PERDAGANGAN ECERAN BERBAGAI MACAM BARANG YANG UTAMANYA BUKAN MAKANAN, MINUMAN ATAU TEMBAKAU (BARANG-BARANG KELONTONG) BUKAN DI TOSERBA (DEPARTMENT STORE)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang yang utamanya bukan makanan, minuman atau tembakau bukan toserba\\/department store. Pada umumnya barang-barang yang diperdagangkan antara lain pakaian, perabot rumah tangga, perhiasan, mainan anak-anak dan kosmetik, yang terintegrasi di bawah satu pengelolaan. Misalnya toko barang kelontong.",
          
        },
        {
          "number": "47211",
          "name": "PERDAGANGAN ECERAN PADI DAN PALAWIJA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus padi dan palawija, di dalam bangunan seperti gabah, jagung, ubi jalar, ubi kayu, talas, kacang kedelai, kacang tanah, kacang hitam dan kacang polong.",
          
        },
        {
          "number": "47212",
          "name": "PERDAGANGAN ECERAN BUAH-BUAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus buah-buahan di dalam bangunan, seperti apel, anggur, alpokat, belimbing, duku, durian, jambu, jeruk, mangga, manggis, nanas, pisang, pepaya, rambutan, sawo, salak dan semangka.",
          
        },
        {
          "number": "47213",
          "name": "PERDAGANGAN ECERAN SAYURAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus sayuran di dalam bangunan, seperti bawang merah, bawang putih, kentang, wortel, terong, buncis, mentimun, labu siam, kacang panjang dan kacang merah.",
          
        },
        {
          "number": "47214",
          "name": "PERDAGANGAN ECERAN HASIL PETERNAKAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus hasil peternakan di dalam bangunan, seperti susu dan telur, termasuk pula daging ternak dan unggas.",
          
        },
        {
          "number": "47215",
          "name": "PERDAGANGAN ECERAN HASIL PERIKANAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus hasil perikanan di dalam bangunan, seperti udang segar, ikan segar, cumi-cumi segar, nener (benih bandeng), benur (benih udang), benih ikan, dan rumput laut.",
          
        },
        {
          "number": "47216",
          "name": "PERDAGANGAN ECERAN HASIL KEHUTANAN DAN PERBURUAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus komoditi hasil hutan dan perburuan, seperti kijang, buah kenari, dan bambu muda (rebung).",
          
        },
        {
          "number": "47219",
          "name": "PERDAGANGAN ECERAN HASIL PERTANIAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus komoditi hasil pertanian yang belum tercakup dalam kelompok 47211 s.d. 47216 di dalam bangunan seperti lada, pala, kunyit, kencur, temulawak, lengkuas dan madu.",
          
        },
        {
          "number": "47221",
          "name": "PERDAGANGAN ECERAN MINUMAN BERALKOHOL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus minuman beralkohol didalam bangunan yang tidak langsung diminum di tempat, seperti minuman keras (whisky, genever, brandy, gin, arak, rum, sake, tuak), minuman anggur dan minuman yang mengandung malt (bir, ale, stout, temulawak).",
          
        },
        {
          "number": "47222",
          "name": "PERDAGANGAN ECERAN MINUMAN TIDAK BERALKOHOL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus minuman tidak beralkohol di dalam bangunan yang tidak langsung diminum di tempat, seperti minuman ringan (limun, air soda, markisa, teh botol, air mineral dan beras kencur). Termasuk perdagangan eceran minuman kopi.",
          
        },
        {
          "number": "47230",
          "name": "PERDAGANGAN ECERAN KHUSUS ROKOK DAN TEMBAKAU DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus rokok dan atau tembakau di dalam bangunan seperti rokok kretek, rokok putih, rokok cerutu, rokok kelembak, tembakau krosok, tembakau susur dan tembakau pipa\\/papier.",
          
        },
        {
          "number": "47241",
          "name": "PERDAGANGAN ECERAN BERAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai jenis beras di dalam bangunan, seperti beras cianjur, beras cisadane, beras saigon dan beras ketan.",
          
        },
        {
          "number": "47242",
          "name": "PERDAGANGAN ECERAN ROTI, KUE KERING, SERTA KUE BASAH DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai jenis roti, kue kering dan kue basah di dalam bangunan, seperti roti manis, roti tawar, bolu, cake\\/tart, biskuit, wafer, kue semprong dan cookies.",
          
        },
        {
          "number": "47243",
          "name": "PERDAGANGAN ECERAN KOPI, GULA PASIR DAN GULA MERAH",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus kopi,gula pasir atau gula merah di dalam bangunan.",
          
        },
        {
          "number": "47244",
          "name": "PERDAGANGAN ECERAN TAHU, TEMPE, TAUCO DAN ONCOM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus tahu, tempe, tauco dan oncom di dalam bangunan.",
          
        },
        {
          "number": "47245",
          "name": "PERDAGANGAN ECERAN DAGING DAN IKAN OLAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai jenis produk daging olahan dan ikan, udang, kerang yang diasinkan atau dikeringkan di dalam bangunan, seperti sosis, bakso, abon, ikan teri, cucut, selar, kerapu, udang, rebon, petek, gabus, sepat, cumi-cumi, kepah, remis, dan kerang.",
          
        },
        {
          "number": "47249",
          "name": "PERDAGANGAN ECERAN MAKANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus komoditi makanan hasil industri yang belum tercakup dalam kelompok 47241 s.d 47245 di dalam bangunan seperti asinan buah-buahan dan sayuran, buah- buahan dan sayuran yang diawetkan, kerupuk dan emping\\/ceriping.",
          
        },
        {
          "number": "47301",
          "name": "PERDAGANGAN ECERAN BAHAN BAKAR MINYAK, BAHAN BAKAR GAS (BBG), DAN LIQUEFIED PETROLEUM GAS (LPG) DI SARANA PENGISIAN BAHAN BAKAR TRANSPORTASI DARAT, LAUT, DAN UDARA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bahan bakar minyak, bahan bakar gas, LPG, atau jenis bahan bakar lain di sarana pengisian bahan bakar untuk transportasi darat, laut, dan udara (seperti SPBU, SPBG dsb) untuk kendaraan bermotor seperti mobil dan sepeda motor (misalnya bensin, solar, BBG, dan LPG), termasuk pula bahan bakar untuk speed boat dan genset. Biasanya kegiatan ini dikombinasikan dengan penjualan bahan- bahan pelumas, cooling products, bahan-bahan pembersih dan barang- barang lain untuk keperluan mobil dan sepeda motor. Perdagangan besar bahan bakar dimasukkan dalam kelompok 46610. Perdagangan eceran LPG dan bahan bakar untuk keperluan memasak atau pemanas dimasukkan dalam kelompok 47772.",
          
        },
        {
          "number": "47302",
          "name": "PERDAGANGAN ECERAN BAHAN BAKAR MINYAK, BAHAN BAKAR GAS (BBG), DAN LIQUEFIED PETROLEUM GAS (LPG) SELAIN DI SARANA PENGISIAN BAHAN BAKAR TRANSPORTASI DARAT, LAUT, DAN UDARA",
          "description": "Kelompok ini mencakup perdagangan eceran bahan bakar minyak, bahan bakar gas, LPG, atau jenis bahan bakar lain selain di sarana pengisian bahan bakar untuk transportasi darat, laut, dan udara (seperti agen BBM, agen LPG dsb). Perdagangan eceran bahan bakar untuk mobil dan sepeda motor di SPBU dimasukkan dalam kelompok 47301.",
          
        },
        {
          "number": "47303",
          "name": "PERDAGANGAN ECERAN MINYAK PELUMAS DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran minyak pelumas di toko. Termasuk perdagangan eceran produk pendingin untuk mobil.",
          
        },
        {
          "number": "47411",
          "name": "PERDAGANGAN ECERAN KOMPUTER DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus macam-macam komputer, peralatan dan perlengkapannya.",
          
        },
        {
          "number": "47412",
          "name": "PERDAGANGAN ECERAN PERALATAN VIDEO GAME DAN SEJENISNYA",
          "description": "Kelompok ini mencakup perdagangan eceran peralatan video game.",
          
        },
        {
          "number": "47413",
          "name": "PERDAGANGAN ECERAN PIRANTI LUNAK (SOFTWARE)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus piranti lunak (software), seperti bermacam piranti lunak, termasuk piranti lunak untuk video game.",
          
        },
        {
          "number": "47414",
          "name": "PERDAGANGAN ECERAN ALAT TELEKOMUNIKASI",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat telekomunikasi, seperti handphone, pesawat telepon dan perlengkapannya lainnya.",
          
        },
        {
          "number": "47415",
          "name": "PERDAGANGAN ECERAN MESIN KANTOR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus mesin kantor selain komputer, seperti bermacam mesin tik, mesin hitung, cash register dan sejenisnya.",
          
        },
        {
          "number": "47420",
          "name": "PERDAGANGAN ECERAN KHUSUS PERALATAN AUDIO DAN VIDEO DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus peralatan audio dan video, seperti radio, televisi, video, tape recorder, audio amplifier dan cassete recorder. Termasuk peralatan stereo dan peralatan perekam dan pemutar CD dan DVD.",
          
        },
        {
          "number": "47511",
          "name": "PERDAGANGAN ECERAN TEKSTIL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus tekstil, seperti macam-macam kain terbuat dari serat alam, sintetis, maupun campuran, kain tenun (kain sarung katun, kain sarung polister, kain suiting sutera, kain suiting serat campuran), kain cetak (kain cetak kapas, kain cetak polyamida, kain kedap air), kain batik (kain batik tulis, kain batik cap, kain batik kombinasi tulis dan cap) dan kain rajut (kain rajut wol, kain rajut rayon, kain rajut wol\\/kapas). Termasuk perdagangan eceran bahan dasar untuk pembuatan permadani, permadani hiasan dinding dan bordiran atau sulaman.",
          
        },
        {
          "number": "47512",
          "name": "PERDAGANGAN ECERAN PERLENGKAPAN RUMAH TANGGA DARI TEKSTIL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus perlengkapan rumah tangga dari tekstil, seperti taplak meja, seprei, sarung bantal, kelambu, kain kasur, kain bantal, kain pel, linen rumah tangga dan lain- lain.",
          
        },
        {
          "number": "47513",
          "name": "PERDAGANGAN ECERAN PERLENGKAPAN JAHIT MENJAHIT",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus perlengkapan jahit menjahit, seperti benang dan jarum jahit.",
          
        },
        {
          "number": "47521",
          "name": "PERDAGANGAN ECERAN BARANG LOGAM UNTUK BAHAN KONSTRUKSI",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang logam untuk bahan konstruksi seperti baja tulangan, baja profil, pelat baja, dan baja lembaran, pipa besi\\/baja, kawat tali, kawat nyamuk, paku, mur\\/baut, engsel, gerendel, kunci, anak kunci, tangki air, menara air, rolling door, awning dan seng lembaran.",
          
        },
        {
          "number": "47522",
          "name": "PERDAGANGAN ECERAN KACA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus kaca lembaran untuk bahan konstruksi, seperti kaca lembaran bening, kaca lembaran buram, kaca lembaran bening berwarna dan kaca lembaran berukir.",
          
        },
        {
          "number": "47523",
          "name": "PERDAGANGAN ECERAN GENTENG, BATU BATA, UBIN DAN SEJENISNYA DARI TANAH LIAT, KAPUR, SEMEN ATAU KACA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus genteng, batu bata dan ubin yang terbuat dari tanah liat, kapur, semen, atau gelas untuk bahan konstruksi, seperti genteng pres, genteng kodok, batu bata pres, batu bata berongga, bata tahan api, ubin lantai, ubin dinding, ubin batako, termasuk juga lubang angin, bak mandi, kloset, eternit, pipa irigasi dan buis.",
          
        },
        {
          "number": "47524",
          "name": "PERDAGANGAN ECERAN SEMEN, KAPUR, PASIR DAN BATU",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus semen, kapur, pasir dan batu untuk bahan konstruksi, seperti semen portland putih, semen portland abu-abu, semen posolan kapur, semen portland posolan, kapur tohor, kapur tembok, pasir, kerikil, koral, batu, batu pecahan, batu lempengan, batu pualam dan kubus mosaik.",
          
        },
        {
          "number": "47525",
          "name": "PERDAGANGAN ECERAN BAHAN KONSTRUKSI DARI PORSELEN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus bahan konstruksi dari porselen, seperti kloset, bidet, wastafel, winoir, bak cuci, bak mandi dan ubin dinding.",
          
        },
        {
          "number": "47526",
          "name": "PERDAGANGAN ECERAN BAHAN KONSTRUKSI DARI KAYU",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus bahan konstruksi dari kayu, seperti papan, galar, papan reng, papan lis, tiang telepon, tiang listrik, balok bantalan, kusen pintu\\/jendela, daun pintu\\/jendela, ubin kayu, atap kayu (sirap), kayu lapis tripleks, kayu lapis interior, teak wood, particle board, chip board, kayu pelapis dan kayu lapis untuk cetak beton.",
          
        },
        {
          "number": "47527",
          "name": "PERDAGANGAN ECERAN CAT, PERNIS DAN LAK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai macam cat untuk bahan konstruksi, seperti cat dasar, cat logam, cat kayu dan cat tembok. Termasuk juga perdagangan eceran email, dempul, plamir dan pernis dan lak.",
          
        },
        {
          "number": "47528",
          "name": "PERDAGANGAN ECERAN BERBAGAI MACAM MATERIAL BANGUNAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai macam material bangunan, seperti semen, pasir , paku, cat dan lain-lain.",
          
        },
        {
          "number": "47529",
          "name": "PERDAGANGAN ECERAN BAHAN DAN BARANG KONSTRUKSI LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus bahan dan barang konstruksi lainnya yang belum tercakup dalam kelompok 47521 s.d. 47528, seperti pipa dan selang dari plastik, formika, plastik lembaran bergelombang, asbes semen rata, asbes semen berlapis dan pipa saluran asbes semen. Termasuk perdagangan eceran pemotong rumput dan alat mandi uap.",
          
        },
        {
          "number": "47530",
          "name": "PERDAGANGAN ECERAN KHUSUS KARPET, PERMADANI DAN PENUTUP DINDING DAN LANTAI DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus karpet, permadani dan penutup dinding dan lantai, termasuk keset kamar mandi, sajadah, karpet, tirai, gorden dan lain-lain.",
          
        },
        {
          "number": "47591",
          "name": "PERDAGANGAN ECERAN FURNITUR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus furniture, seperti meja, kursi, lemari, tempat tidur, rak buku, rak sepatu dan bufet. Termasuk juga usaha perdagangan eceran khusus kasur dan bantal\\/guling.",
          
        },
        {
          "number": "47592",
          "name": "PERDAGANGAN ECERAN PERALATAN LISTRIK RUMAH TANGGA DAN PERALATAN PENERANGAN DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus peralatan listrik rumah tangga dan perlengkapan penerangan, seperti mesin cuci, lemari es, kipas angin, alat pengisap debu, alat penggosok lantai, mixer, seterika listrik, blender, lampu pijar, lampu neon, starter, ballast, reflektor, kabel, sakelar, stop kontak, fiting dan sekering.",
          
        },
        {
          "number": "47593",
          "name": "PERDAGANGAN ECERAN BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR DARI PLASTIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang pecah belah dan perlengkapan dapur yang terbuat dari plastik, seperti piring, pisin, mangkok, cangkir, teko, sendok, garpu, rantang, stoples, botol susu bayi, panci, baki, ember, termos dan jerigen.",
          
        },
        {
          "number": "47594",
          "name": "PERDAGANGAN ECERAN BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR DARI BATU ATAU TANAH LIAT",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang pecah belah dan perlengkapan dapur yang terbuat dari batu atau tanah liat, seperti piring, mangkok, cangkir, teko, kendi, periuk, cobek, tempayan, lumpang, asbak dan uleg-uleg.",
          
        },
        {
          "number": "47595",
          "name": "PERDAGANGAN ECERAN BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR DARI KAYU, BAMBU ATAU ROTAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang pecah belah dan perlengkapan dapur yang terbuat dari kayu, bambu atau rotan, seperti rak bambu, alu, lesung, parutan kelapa, talenan, papan gilesan, centong, bakul, tampah, kukusan, kipas, tudung saji, tusukan sate dan gilingan daging.",
          
        },
        {
          "number": "47596",
          "name": "PERDAGANGAN ECERAN BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR BUKAN DARI PLASTIK, BATU, TANAH LIAT, KAYU, BAMBU ATAU ROTAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang pecah belah dan perlengkapan dapur yang terbuat bukan dari plastik, batu, tanah liat, kayu, bambu atau rotan, seperti piring, pisau, mangkok, cangkir, teko, sendok, garpu, rantang, stoples, botol susu bayi, panci, baki, termos, kompor gas dan kompor minyak tanah. Baik yang terbuat dari kaca atau dari logam atau bahan lainnya.",
          
        },
        {
          "number": "47597",
          "name": "PERDAGANGAN ECERAN ALAT MUSIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat musik, baik alat musik tradisional maupun alat musik modern, seperti kecapi, seruling bambu, calung, angklung, kulintang, gamelan, set, rebab, rebana, tifa, sasando, seruling (flute), saksophone, harmonika, trombone, gitar, mandolin, ukulele, harpa, bass, gambus, biola, cello, piano\\/organ, drum set dan garpu tala.",
          
        },
        {
          "number": "47599",
          "name": "PERDAGANGAN ECERAN PERALATAN DAN PERLENGKAPAN RUMAH TANGGA LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus peralatan dan perlengkapan rumah tangga lainnya dalam subgolongan 4759 yang tidak diklasifikasikan di tempat lain.",
          
        },
        {
          "number": "47611",
          "name": "PERDAGANGAN ECERAN ALAT TULIS MENULIS DAN GAMBAR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat tulis- menulis dan gambar, seperti pensil, pulpen, spidol, balpoin, sign pen, pensil mekanik, jangka, kuas gambar, rapido, crayon dan pastel, papan tulis, meja gambar, white board, alat-alat sablon, pita mesin tulis, cat air, cat minyak, karet penghapus, kayu penghapus, tip-ex, tinta, pengasah pensil, penggaris dan kapur tulis.",
          
        },
        {
          "number": "47612",
          "name": "PERDAGANGAN ECERAN HASIL PENCETAKAN DAN PENERBITAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus hasil pencetakan dan penerbitan, seperti faktur, nota, kuitansi, kartu nama, etiket, amplop, agenda, buku alamat, kartu ucapan, kartu pos, perangko, materai, album, buku tulis, buku gambar, kertas bergaris, kertas grafik, atlas, huruf braile, surat kabar, majalah, buletin, kamus, buku ilmu pengetahuan dan buku bergambar.",
          
        },
        {
          "number": "47620",
          "name": "PERDAGANGAN ECERAN KHUSUS REKAMAN MUSIK DAN VIDEO DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus rekaman musik dan video, seperti audio tape, CD dan kaset dan video tape dan DVD. Termasuk perdagangan eceran kaset dan CD\\/DVD kosong.",
          
        },
        {
          "number": "43301",
          "name": "PENGERJAAN PEMASANGAN KACA DAN ALUMUNIUM",
          "description": "Kelompok ini mencakup kegiatan pemasangan kaca, alumunium, dan bahan lainnya untuk dinding luar dan dalam dalam rangka penyelesaian bangunan gedung hunian dan non hunian serta bangunan sipil lainnya. Termasuk instalasi atau pemasangan pintu (kecuali pintu otomatis dan pintu putar), jendela, rangka pintu dan jendela dari kayu atau bahan lainnya.",
          
        },
        {
          "number": "43302",
          "name": "PENGERJAAN LANTAI, DINDING, PERALATAN SANITER DAN PLAFON",
          "description": "Kelompok ini mencakup kegiatan pengerjaan lantai, dinding, kolom, peralatan saniter dan plafon dalam rangka penyelesaian bangunan gedung hunian dan non hunian serta bangunan sipil lainnya. Termasuk aplikasi bangunan atau proyek konstruksi lainnya dari plester (pelapisan) interior dan eksterior, termasuk bahan-bahan lathing yang berkaitan, penyelesaian interior seperti langit-langit, pelapisan dinding dengan kayu, gypsum, panel penutup akustik, partisi\\/sekat yang dapat dibongkar pasang dan sebagainya, pengubinan, penggantungan atau pemasangan dalam bangunan atau proyek konstruksi lainnya dari keramik, dinding, beton atau ubin lantai, parket (lantai dari papan yang bergambar) dan pelapisan lantai dengan kayu, pelapisan lantai linoleum dan karpet, termasuk karet atau plastik, teraso, marmer, granit atau pelapisan lantai atau dinding dan wallpaper (kertas dinding) serta dinding bangunan kedap suara.",
          
        },
        {
          "number": "43303",
          "name": "PENGECATAN",
          "description": "Kelompok ini mencakup kegiatan pengecatan interior dan eksterior bangunan dalam rangka penyelesaian bangunan gedung hunian dan non hunian serta bangunan sipil lainnya. Tidak termasuk pengecatan atap bangunan.",
          
        },
        {
          "number": "43304",
          "name": "DEKORASI INTERIOR",
          "description": "Kelompok ini mencakup kegiatan pengerjaan dekorasi interior dalam rangka penyelesaian bangunan gedung hunian dan non hunian serta bangunan sipil lainnya. Kegiatan pengerjaan dekorasi interior mencakup aplikasi bangunan atau proyek konstruksi lainnya dari plester (pelapisan) interior, termasuk bahan-bahan lathing yang berkaitan, instalasi atau pemasangan pintu (kecuali pintu otomatis dan pintu putar), kusen, jendela, rangka pintu dan jendela dari kayu atau bahan lainnya, instalasi dapur (kitchen set), tangga dan sejenisnya, pagar, instalasi furnitur, penyelesaian interior seperti langit-langit, pelapisan dinding dengan kayu, partisi\\/sekat yang dapat dibongkar pasang dan sebagainya, pengubinan atau pemasangan dalam bangunan atau proyek konstruksi lainnya dari keramik, dinding beton atau ubin lantai, parket (lantai dari papan yang bergambar) dan pelapisan lantai dengan kayu, pelapisan lantai linoleum dan karpet, termasuk karet atau plastik, teraso, marmer, granit atau pelapisan lantai atau dinding dan wallpaper (kertas dinding). Termasuk pengecatan, pemasangan kaca, cermin dan pemasangan ornamen dan pekerjaan dekorasi interior seni lainnya pada permukaan dinding, kolom atau plafon dengan bahan logam, kayu dan bahan lainnya.",
          
        },
        {
          "number": "43305",
          "name": "DEKORASI EKSTERIOR",
          "description": "Kelompok ini mencakup kegiatan pengerjaan dekorasi eksterior pada bangunan gedung hunian dan non hunian serta bangunan sipil lainnya, seperti konstruksi taman. Kegiatan pengerjaan dekorasi eksterior mencakup pelapisan eksterior bangunan atau proyek konstruksi lainnya dari plester, termasuk bahan-bahan lathing yang berkaitan, pelapisan eksterior dinding dengan keramik, teraso, marmer dan granit, kaca, batu alam, dan bahan lainnya.",
          
        },
        {
          "number": "43309",
          "name": "PENYELESAIAN KONSTRUKSI BANGUNAN LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pembersihan dan perapihan gedung hunian dan non hunian serta bangunan sipil lainnya yang baru selesai dibangun, termasuk instalasi interior untuk toko, rumah bergerak, perahu, dan lain-lain dan pengerjaan penyelesaian konstruksi bangunan lainnya ytdl.",
          
        },
        {
          "number": "43901",
          "name": "PEMASANGAN PONDASI DAN TIANG PANCANG",
          "description": "Kelompok ini mencakup kegiatan khusus pemasangan berbagai pondasi dan tiang pancang termasuk pengecoran beton dan pembesian pondasi untuk gedung, jalan\\/jembatan, bangunan pengairan, dermaga, bangunan lepas pantai dan sejenisnya sebagai bagian dari pekerjaan yang tercakup dalam konstruksi gedung hunian dan non hunian serta bangunan sipil lainnya.",
          
        },
        {
          "number": "43902",
          "name": "PEMASANGAN PERANCAH (STEIGER)",
          "description": "Kelompok ini mencakup kegiatan khusus pemasangan perancah\\/steiger pada bangunan gedung, jalan\\/jembatan, bangunan pengairan, dermaga dan sejenisnya.",
          
        },
        {
          "number": "43903",
          "name": "PEMASANGAN RANGKA DAN ATAP\\/ROOF COVERING",
          "description": "Kelompok ini mencakup kegiatan khusus pemasangan kerangka dan atap bangunan gedung hunian dan non hunian sebagai bagian dari pekerjaan yang tercakup dalam konstruksi gedung. Termasuk pekerjaan talang dan pengecatan atap.",
          
        },
        {
          "number": "43904",
          "name": "PEMASANGAN KERANGKA BAJA",
          "description": "Kelompok ini mencakup kegiatan khusus pemasangan kerangka baja sebagai bagian dari pekerjaan yang tercakup dalam konstruksi gedung.",
          
        },
        {
          "number": "43905",
          "name": "PENYEWAAN ALAT KONSTRUKSI DENGAN OPERATOR",
          "description": "Kelompok ini mencakup usaha penyewaan alat atau mesin konstruksi dan perlengkapannya dengan operator. Termasuk penyewaan alat produksi dan operasional minyak, gas, petrokimia, panas bumi, komunikasi seperti SCADA (Supervisory Control and Data Acquisition), dan penyewaan derek. Penyewaan mesin konstruksi dan perlengkapannya tanpa operator dicakup dalam kelompok 77393.",
          
        },
        {
          "number": "43909",
          "name": "KONSTRUKSI KHUSUS LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan konstruksi khusus lainnya yang belum diklasifikasikan dalam kelompok 43901 s.d. 43905 yang memerlukan keahlian atau perlengkapan khusus, seperti kegiatan pengerjaan penahan lembab dan air, dehumidifikasi (pelembaban) bangunan, shaft sinking, pemasangan cerobong asap dan oven untuk keperluan industri dan pekerjaan yang memerlukan keahlian memanjat dan penggunaan perlengkapan yang berkaitan, misalnya bekerja pada gedung-gedung yang tinggi. Termasuk pekerjaan di bawah permukaan tanah, pekerjaan lapis perkerasan beton; pekerjaan perkerasan aspal; pekerjaan perkerasan berbutir; pekerjaan konstruksi pengeboran dan injeksi semen bertekanan; pekerjaan beton struktur; pekerjaan konstruksi beton pascatarik (post tensioned); pekerjaan konstruksi kedap air pada tangki penyimpanan air, minyak, gas, dan lainnya yang sejenis; serta pemasangan konstruksi tahan api (tanur, anneling, flare, incenerator) untuk bangunan gedung hunian dan non hunian serta bangunan sipil lainnya.",
          
        },
        {
          "number": "45101",
          "name": "PERDAGANGAN BESAR MOBIL BARU",
          "description": "Kelompok ini mencakup usaha perdagangan besar mobil baru, termasuk mobil khusus (seperti ambulans, karavan, mikrobus, pemadam kebakaran, dan sebagainya), lori, trailer, semi-trailer dan berbagai kendaraan pengangkut bermotor lainnya.",
          
        },
        {
          "number": "45102",
          "name": "PERDAGANGAN BESAR MOBIL BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan besar mobil bekas, termasuk mobil khusus (seperti ambulans, karavan, mikrobus, pemadam kebakaran, dan sebagainya), lori, trailer, semi-trailer dan berbagai kendaraan pengangkut bermotor lainnya.",
          
        },
        {
          "number": "45103",
          "name": "PERDAGANGAN ECERAN MOBIL BARU",
          "description": "Kelompok ini mencakup usaha penjualan eceran mobil baru, termasuk mobil khusus (seperti ambulans, karavan, mikrobus, pemadam kebakaran, dan sebagainya), lori, trailer, semi-trailer dan berbagai kendaraan pengangkut bermotor lainnya.",
          
        },
        {
          "number": "45104",
          "name": "PERDAGANGAN ECERAN MOBIL BEKAS",
          "description": "Kelompok ini mencakup usaha penjualan eceran mobil bekas, termasuk mobil khusus (seperti ambulans, karavan, mikrobus, pemadam kebakaran, dan sebagainya), lori, trailer, semi-trailer dan berbagai kendaraan pengangkut bermotor lainnya.",
          
        },
        {
          "number": "45201",
          "name": "REPARASI MOBIL",
          "description": "Kelompok ini mencakup usaha reparasi dan perawatan mobil, seperti reparasi mekanik, reparasi elektrik, reparasi sistem injeksi elektronik, servis regular, reparasi badan mobil, reparasi bagian kendaraan bermotor, penyemprotan dan pengecatan, reparasi kaca dan jendela dan reparasi tempat duduk kendaraan bermotor. Termasuk reparasi, pemasangan atau penggantian ban dan pipa, perawatan anti karat, pemasangan bagian dan aksesori yang bukan bagian dari proses pembuatan dan usaha perawatan lainnya.",
          
        },
        {
          "number": "45202",
          "name": "PENCUCIAN DAN SALON MOBIL",
          "description": "Kelompok ini mencakup usaha pencucian mobil dan salon mobil, seperti pencucian dan pemolesan dan pemasangan bagian dan aksesori yang bukan bagian dari proses pembuatan di salon mobil.",
          
        },
        {
          "number": "45301",
          "name": "PERDAGANGAN BESAR SUKU CADANG DAN AKSESORI MOBIL",
          "description": "Kelompok ini mencakup usaha perdagangan besar berbagai suku cadang, komponen dan aksesori mobil yang terpisah dari perdagangannya, seperti karet ban dan ban dalam, busi mobil, baterai (aki), perlengkapan lampu dan bagian-bagian kelistrikan.",
          
        },
        {
          "number": "45302",
          "name": "PERDAGANGAN ECERAN SUKU CADANG DAN AKSESORI MOBIL",
          "description": "Kelompok ini mencakup usaha penjualan eceran berbagai suku cadang, komponen dan aksesori mobil yang terpisah dari perdagangannya, seperti karet ban dan ban dalam, busi mobil, baterai (aki), perlengkapan lampu dan bagian-bagian kelistrikan.",
          
        },
        {
          "number": "45401",
          "name": "PERDAGANGAN BESAR SEPEDA MOTOR BARU",
          "description": "Kelompok ini mencakup usaha perdagangan besar sepeda motor baru, termasuk motor sepeda atau moped.",
          
        },
        {
          "number": "45402",
          "name": "PERDAGANGAN BESAR SEPEDA MOTOR BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan besar sepeda motor bekas, termasuk motor sepeda atau moped.",
          
        },
        {
          "number": "45403",
          "name": "PERDAGANGAN ECERAN SEPEDA MOTOR BARU",
          "description": "Kelompok ini mencakup usaha penjualan eceran sepeda motor baru, termasuk motor sepeda atau moped.",
          
        },
        {
          "number": "45404",
          "name": "PERDAGANGAN ECERAN SEPEDA MOTOR BEKAS",
          "description": "Kelompok ini mencakup usaha penjualan eceran sepeda motor bekas, termasuk motor sepeda atau moped.",
          
        },
        {
          "number": "45405",
          "name": "PERDAGANGAN BESAR SUKU CADANG SEPEDA MOTOR DAN AKSESORINYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar suku cadang sepeda motor dan aksesorinya.",
          
        },
        {
          "number": "45406",
          "name": "PERDAGANGAN ECERAN SUKU CADANG SEPEDA MOTOR DAN AKSESORINYA",
          "description": "Kelompok ini mencakup usaha penjualan eceran suku cadang sepeda motor dan aksesorinya.",
          
        },
        {
          "number": "45407",
          "name": "REPARASI DAN PERAWATAN SEPEDA MOTOR",
          "description": "Kelompok ini mencakup usaha pemeliharaan dan reparasi sepeda motor, termasuk pencucian sepeda motor dan usaha perawatan lainnya.",
          
        },
        {
          "number": "46100",
          "name": "PERDAGANGAN BESAR ATAS DASAR BALAS JASA (FEE) ATAU KONTRAK",
          "description": "Kelompok ini mencakup usaha agen yang menerima komisi, perantara (makelar), pelelangan, dan pedagang besar lainnya yang memperdagangkan barang-barang di dalam negeri, luar negeri atas nama pihak lain. Kegiatannya antara lain agen komisi, broker barang dan seluruh perdagangan besar lainnya yang menjual atas nama dan tanggungan pihak lain; kegiatan yang terlibat dalam penjualan dan pembelian bersama atau melakukan transaksi atas nama perusahaan, termasuk melalui internet; dan agen yang terlibat dalam perdagangan seperti bahan baku pertanian, binatang hidup; bahan baku tekstil dan barang setengah jadi; bahan bakar, bijih-bijihan, logam dan industri kimia, termasuk pupuk; makanan, minuman dan tembakau; tekstil, pakaian, bulu, alas kaki dan barang dari kulit; kayu-kayuan dan bahan bangunan; mesin, termasuk mesin kantor dan komputer, perlengkapan industri, kapal, pesawat; furnitur, barang keperluan rumah tangga dan perangkat keras; kegiatan perdagangan besar rumah pelelangan; agen komisi zat radioaktif dan pembangkit radiasi pengion. Termasuk penyelenggara pasar lelang komoditas. Tidak termasuk kegiatan perdagangan besar mobil dan sepeda motor, dimasukkan dalam golongan 451 s.d. 454.",
          
        },
        {
          "number": "46201",
          "name": "PERDAGANGAN BESAR PADI DAN PALAWIJA",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pertanian tanaman padi dan palawija sebagai bahan baku atau bahan dasar dari suatu kegiatan berikutnya, seperti padi, jagung, gabah, gandum dan seralia lainnya. Termasuk perdagangan besar benih dan bibit padi, palawija, dan serealia lainnya.",
          
        },
        {
          "number": "46202",
          "name": "PERDAGANGAN BESAR BUAH YANG MENGANDUNG MINYAK",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pertanian tanaman buah yang mengandung minyak, seperti kelapa dan kelapa sawit. Termasuk perdagangan besar bibit buah yang mengandung minyak.",
          
        },
        {
          "number": "46203",
          "name": "PERDAGANGAN BESAR BUNGA DAN TANAMAN HIAS",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pertanian tanaman bunga dan tanaman hias lainnya, seperti tanaman bunga mawar, melati, tanaman hias dan tumbuhan lainnya. Termasuk bibit tanaman hias, bunga dan sebagainya.",
          
        },
        {
          "number": "46204",
          "name": "PERDAGANGAN BESAR TEMBAKAU RAJANGAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pertanian tanaman tembakau, seperti daun tembakau yang belum diolah dan tembakau rajangan dan sebagainya.",
          
        },
        {
          "number": "46205",
          "name": "PERDAGANGAN BESAR BINATANG HIDUP",
          "description": "Kelompok ini mencakup usaha perdagangan besar yang berhubungan dengan binatang hidup, seperti unggas, ternak potong dan ternak atau binatang hidup lainnya. Termasuk perdagangan besar bibit binatang.",
          
        },
        {
          "number": "46206",
          "name": "PERDAGANGAN BESAR HASIL PERIKANAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil perikanan sebagai bahan baku atau bahan dasar dari kegiatan berikutnya, seperti ikan, udang, kepiting, tiram, mutiara, kerang, rumput laut, bunga karang dan kodok, termasuk ikan hidup, ikan hias, serta bibit hasil perikanan.",
          
        },
        {
          "number": "46207",
          "name": "PERDAGANGAN BESAR HASIL KEHUTANAN DAN PERBURUAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pengusahaan kehutanan, pengambilan hasil hutan dan perburuan, seperti bambu, kayu cendana, getah damar dan sejenisnya. Termasuk perdagangan besar bibit tanaman kehutanan.",
          
        },
        {
          "number": "46208",
          "name": "PERDAGANGAN BESAR KULIT DAN KULIT JANGAT",
          "description": "Kelompok ini mencakup usaha perdagangan besar kulit dan kulit jangat, termasuk kulit imitasi.",
          
        },
        {
          "number": "46209",
          "name": "PERDAGANGAN BESAR HASIL PERTANIAN DAN HEWAN HIDUP LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pertanian dan hewan hidup lainnya yang belum diklasifikasikan di tempat lain. Termasuk dalam kelompok ini perdagangan besar bahan baku pertanian, sisaan dan sampah pertanian, dan hasil ikutan pertanian yang digunakan untuk makanan hewan, serta tanaman dan bibit tanaman lainnya yang belum disebutkan di atas.",
          
        },
        {
          "number": "46311",
          "name": "PERDAGANGAN BESAR BERAS",
          "description": "Kelompok ini mencakup usaha perdagangan besar beras untuk digunakan sebagai konsumsi akhir.",
          
        },
        {
          "number": "46312",
          "name": "PERDAGANGAN BESAR BUAH-BUAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar buah-buahan untuk digunakan sebagai konsumsi akhir, seperti jeruk, apel, pear, mangga dan buah lainnya.",
          
        },
        {
          "number": "46313",
          "name": "PERDAGANGAN BESAR SAYURAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar sayur-sayuran untuk digunakan sebagai konsumsi akhir, seperti bayam, kangkung, kol dan sayuran lainnya.",
          
        },
        {
          "number": "46314",
          "name": "PERDAGANGAN BESAR KOPI, TEH DAN KAKAO",
          "description": "Kelompok ini mencakup usaha perdagangan besar kopi, teh dan kakao.",
          
        },
        {
          "number": "46315",
          "name": "PERDAGANGAN BESAR MINYAK DAN LEMAK NABATI",
          "description": "Kelompok ini mencakup usaha perdagangan besar minyak dan lemak nabati, termasuk margarin serta produk berbahan dasar lemak nabati seperti non-dairy cream, dan produk sejenis lainnya.",
          
        },
        {
          "number": "46319",
          "name": "PERDAGANGAN BESAR BAHAN MAKANAN DAN MINUMAN HASIL PERTANIAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar bahan makanan dan minuman hasil pertanian lainnya, seperti tanaman bumbu-bumbuan dan rempah-rempah.",
          
        },
        {
          "number": "46321",
          "name": "PERDAGANGAN BESAR DAGING SAPI DAN DAGING SAPI OLAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar daging sapi dan daging sapi olahan, termasuk daging sapi yang diawetkan.",
          
        },
        {
          "number": "46322",
          "name": "PERDAGANGAN BESAR DAGING AYAM DAN DAGING AYAM OLAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar daging ayam dan daging ayam olahan, termasuk daging ayam yang diawetkan.",
          
        },
        {
          "number": "46323",
          "name": "PERDAGANGAN BESAR DAGING DAN DAGING OLAHAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar daging dan daging olahan lainnya, termasuk daging lainnya yang diawetkan.",
          
        },
        {
          "number": "46324",
          "name": "PERDAGANGAN BESAR HASIL OLAHAN PERIKANAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar pengolahan hasil perikanan.",
          
        },
        {
          "number": "46325",
          "name": "PERDAGANGAN BESAR TELUR DAN HASIL OLAHAN TELUR",
          "description": "Kelompok ini mencakup usaha perdagangan besar telur dan hasil olahan telur.",
          
        },
        {
          "number": "46326",
          "name": "PERDAGANGAN BESAR SUSU DAN PRODUK SUSU",
          "description": "Kelompok ini mencakup usaha perdagangan besar susu dan produk susu.",
          
        },
        {
          "number": "46327",
          "name": "PERDAGANGAN BESAR MINYAK DAN LEMAK HEWANI",
          "description": "Kelompok ini mencakup usaha perdagangan besar minyak dan lemak hewani.",
          
        },
        {
          "number": "46329",
          "name": "PERDAGANGAN BESAR BAHAN MAKANAN DAN MINUMAN HASIL PETERNAKAN DAN PERIKANAN LAINNYA",
          "description": "Subgolongan ini mencakup perdagangan besar bahan makanan dan minuman hasil peternakan dan perikanan yang belum tercakup dalam kelompok 46321 s.d 46327, seperti perdagangan besar madu hasil peternakan lebah, dan pemungutan madu hasil hutan.",
          
        },
        {
          "number": "46331",
          "name": "PERDAGANGAN BESAR GULA, COKLAT DAN KEMBANG GULA",
          "description": "Kelompok ini mencakup usaha perdagangan besar gula, coklat, kembang gula dan sediaan pemanis.",
          
        },
        {
          "number": "46332",
          "name": "PERDAGANGAN BESAR PRODUK ROTI",
          "description": "Kelompok ini mencakup usaha perdagangan besar produk roti, kue dan bakeri lainnya.",
          
        },
        {
          "number": "46333",
          "name": "PERDAGANGAN BESAR MINUMAN BERALKOHOL",
          "description": "Kelompok ini mencakup usaha perdagangan besar minuman beralkohol, seperti minuman keras, anggur, malt, bir dan lain-lain.",
          
        },
        {
          "number": "46334",
          "name": "PERDAGANGAN BESAR MINUMAN NON ALKOHOL BUKAN SUSU",
          "description": "Kelompok ini mencakup usaha perdagangan besar minuman non alkohol, seperti sari buah, jus, minuman ringan, air mineral, air kemasan, dan produk sejenis lainnya.",
          
        },
        {
          "number": "46335",
          "name": "PERDAGANGAN BESAR ROKOK DAN TEMBAKAU",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil pengolahan tembakau dan bumbu rokok, seperti rokok kretek dan rokok putih.",
          
        },
        {
          "number": "46339",
          "name": "PERDAGANGAN BESAR MAKANAN DAN MINUMAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar makanan dan minuman lainnya, seperti tepung beras, tepung tapioka, premiks bakeri, karamel, madu olahan, kerupuk udang dan lain-lain. Termasuk pangan untuk keperluan gizi khusus (untuk bayi, anak, dan dewasa), bahan tambahan pangan (food additive), bahan penolong (processing aid), makanan ringan lainnya, serealia dan produk berbasis serealia yang belum diolah maupun telah diolah, minuman produk kedelai, makanan siap saji, serta perdagangan besar makanan untuk hewan piaraan dan makanan ternak.",
          
        },
        {
          "number": "46411",
          "name": "PERDAGANGAN BESAR TEKSTIL",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil industri tekstil, seperti bermacam-macam tekstil\\/kain, kain batik dan lain-lain. Termasuk barang linen rumah tangga (bahan kain untuk keperluan rumah tangga) dan lain-lain.",
          
        },
        {
          "number": "46412",
          "name": "PERDAGANGAN BESAR PAKAIAN",
          "description": "Kelompok ini mencakup usaha perdagangan besar pakaian, termasuk pakaian olahraga dan perdagangan besar aksesoris pakaian seperti sarung tangan, dasi dan penjepit. Termasuk perdagangan besar kaos kaki.",
          
        },
        {
          "number": "46413",
          "name": "PERDAGANGAN BESAR ALAS KAKI",
          "description": "Kelompok ini mencakup usaha perdagangan besar alas kaki, seperti sepatu, sandal, selop dan sejenisnya.",
          
        },
        {
          "number": "46414",
          "name": "PERDAGANGAN BESAR BARANG LAINNYA DARI TEKSTIL",
          "description": "Kelompok ini mencakup usaha perdagangan besar hasil industri tekstil, seperti tali-temali, karpet\\/permadani dari bahan tekstil, karung, macam- macam hasil rajutan dan barang jadi lainnya dari tekstil selain pakaian jadi.",
          
        },
        {
          "number": "46419",
          "name": "PERDAGANGAN BESAR TEKSTIL, PAKAIAN DAN ALAS KAKI LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan besar haberdashery, seperti jarum, benang jahit dan lain-lain, perdagangan besar barang dari kulit berbulu dan perdagangan besar payung.",
          
        },
        {
          "number": "46421",
          "name": "PERDAGANGAN BESAR ALAT TULIS DAN GAMBAR",
          "description": "Kelompok ini mencakup usaha perdagangan besar peralatan tulis dan gambar, seperti buku tulis, buku gambar, alat tulis dan alat gambar.",
          
        },
        {
          "number": "46422",
          "name": "PERDAGANGAN BESAR BARANG PERCETAKAN DAN PENERBITAN DALAM BERBAGAI BENTUK",
          "description": "Kelompok ini mencakup usaha perdagangan besar barang percetakan dan penerbitan dalam berbagai bentuk, seperti buku-buku, majalah, surat kabar dan lain-lain.",
          
        },
        {
          "number": "46430",
          "name": "PERDAGANGAN BESAR ALAT FOTOGRAFI DAN BARANG OPTIK",
          "description": "Kelompok ini mencakup usaha perdagangan besar alat fotografi dan barang optik (seperti kaca mata, teropong dan kaca pembesar).",
          
        },
        {
          "number": "47729",
          "name": "PERDAGANGAN ECERAN KHUSUS BARANG DAN OBAT FARMASI, ALAT KEDOKTERAN, PARFUM DAN KOSMETIK LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus lainnya yang belum tercakup dalam kelompok 47721 s.d. 47728, seperti bahan obat farmasi dan bahan baku obat tradisional (simplisia) untuk manusia dan hewan; serta alat laboratorium, alat farmasi, dan alat kesehatan untuk hewan antara lain berbagai macam alat laboratorium dari gelas (tabung uji, tabung ukur, kaca sorong mikroskop, cuvet, botol serum\\/infus); alat laboratorium dari porselen (tabung kimia, piring penapis, lumpang dan alu, cawan); alat dan perlengkapan profesi kedokteran hewan seperti (instrumen dan pesawat bedah, instrumen dan pesawat perawatan gigi, aparat elektro medis, termometer, pengukuran tekanan darah, dan lainnya), alat kesehatan hewan, dan alat-alat diagnosa medis, dan lainnya.",
          
        },
        {
          "number": "47731",
          "name": "PERDAGANGAN ECERAN ALAT FOTOGRAFI DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat fotografi dan perlengkapannya, seperti kamera foto, kamera sinematografi, proyektor sinematografi, pesawat rekam suara, pesawat reproduksi suara proyektor gambar, over head projector, aparat cahaya kilat fotografi, frame kamera, camera bodies, perlengkapan proyektor gambar dan cassete film transfer.",
          
        },
        {
          "number": "47732",
          "name": "PERDAGANGAN ECERAN ALAT OPTIK DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat optik dan perlengkapannya, seperti kaca mata pengelas, teropong monokuler, teropong binokuler, kaca pembesar, kaca pengintip, strereoskop dan mikroskop.",
          
        },
        {
          "number": "47733",
          "name": "PERDAGANGAN ECERAN KACA MATA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai macam kaca mata, seperti kaca mata pembantu penglihatan, kaca mata peredam sinar matahari\\/cahaya, lensa kontak (contact lens, soft lens) dan frame kaca mata.",
          
        },
        {
          "number": "47734",
          "name": "PERDAGANGAN ECERAN JAM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai jam, seperti arloji tangan, arloji saku, jam dinding, jam beker, lonceng dan alat ukur waktu lainnya, termasuk perdagangan eceran bagian dari arloji dan jam.",
          
        },
        {
          "number": "47735",
          "name": "PERDAGANGAN ECERAN BARANG PERHIASAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang perhiasan baik terbuat dari batu mulia, berlian, intan, batu aji, serbuk dan bubuk intan, batu permata, batu permata tiruan, logam mulia ataupun bukan logam mulia, seperti cincin, kalung, gelang, giwang (anting-anting), tusuk konde peniti, bross, ikat pinggang dan kancing dari logam mulia (platina, emas dan perak).",
          
        },
        {
          "number": "47736",
          "name": "PERDAGANGAN ECERAN PERLENGKAPAN PENGENDARA KENDARAAN BERMOTOR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran perlengkapan pengendara kendaraan bermotor, seperti helm, jaket, jas hujan, sarung tangan, masker dan lain-lainnya.",
          
        },
        {
          "number": "47737",
          "name": "PERDAGANGAN ECERAN PEMBUNGKUS DARI PLASTIK",
          "description": "Golongan ini mencakup perdagangan eceran barang pembungkus dari plastik, seperti plastik kiloan, plastik sampah, kantong plastik dan barang pembungkus dari plastik lainnya.",
          
        },
        {
          "number": "47739",
          "name": "PERDAGANGAN ECERAN KHUSUS BARANG BARU LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang baru lainnya yang tidak diklasifikasikan di tempat lain, seperti kegiatan perdagangan eceran bahan pembersih, senjata dan amunisi, perangko dan uang logam dan produk bukan makanan ytdl.",
          
        },
        {
          "number": "47741",
          "name": "PERDAGANGAN ECERAN BARANG BEKAS PERLENGKAPAN RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang bekas perlengkapan rumah tangga, seperti meja bekas, kursi bekas, lemari bekas, tempat tidur bekas, bufet bekas dan perangkat untuk makan dan minum bekas. Perdagangan eceran mobil dan sepeda motor bekas dimasukkan dalam kelompok 45104 dan 45404.",
          
        },
        {
          "number": "47742",
          "name": "PERDAGANGAN ECERAN PAKAIAN, ALAS KAKI DAN PELENGKAP PAKAIAN BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran pakaian, alas kaki dan pelengkap pakaian bekas, seperti baju bekas, celana bekas, mantel bekas, sepatu bekas, selendang dan topi bekas.",
          
        },
        {
          "number": "47743",
          "name": "PERDAGANGAN ECERAN BARANG PERLENGKAPAN PRIBADI BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang perlengkapan pribadi bekas, seperti jam tangan bekas, jam dinding bekas dan barang perhiasan bekas.",
          
        },
        {
          "number": "47744",
          "name": "PERDAGANGAN ECERAN BARANG LISTRIK DAN ELEKTRONIK BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang listrik dan elektronik bekas, seperti radio bekas, tape recorder bekas, televisi bekas, mesin cuci bekas, seterika listrik bekas dan pengering\\/pengeriting rambut bekas.",
          
        },
        {
          "number": "47745",
          "name": "PERDAGANGAN ECERAN BAHAN KONSTRUKSI DAN SANITASI BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bahan konstruksi dan sanitasi bekas, seperti wastafel bekas, kloset bekas dan bak air bekas.",
          
        },
        {
          "number": "47746",
          "name": "PERDAGANGAN ECERAN BARANG ANTIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang-barang antik, seperti guci bekas, bokor bekas, lampu gantung bekas dan meja\\/kursi marmer bekas.",
          
        },
        {
          "number": "47749",
          "name": "PERDAGANGAN ECERAN BARANG BEKAS LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang bekas lainnya yang belum tercakup dalam kelompok 47741 s.d. 47746.",
          
        },
        {
          "number": "47751",
          "name": "PERDAGANGAN ECERAN HEWAN PIARAAN (PET ANIMALS)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran hewan piaraan, seperti kucing, anjing, ular, kelinci, biawak, dan lain-lain, misalnya pet shop.",
          
        },
        {
          "number": "47752",
          "name": "PERDAGANGAN ECERAN HEWAN TERNAK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran hewan ternak, seperti sapi, kambing, dan unggas.",
          
        },
        {
          "number": "47753",
          "name": "PERDAGANGAN ECERAN IKAN HIAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran benih ikan hias dan ikan hias. Perdagangan ikan olahan dari perikanan masuk di kelompok 47245.",
          
        },
        {
          "number": "47754",
          "name": "PERDAGANGAN ECERAN PAKAN TERNAK\\/UNGGAS\\/IKAN DAN HEWAN PIARAAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus pakan ternak\\/unggas\\/ikan dan makanan hewan piaraan di dalam bangunan, seperti ransum pakan ternak\\/unggas\\/ikan, konsentrat pakan ternak\\/unggas\\/ikan, tepung tulang, tepung darah dan tepung kerang.",
          
        },
        {
          "number": "47761",
          "name": "PERDAGANGAN ECERAN BUNGA POTONG\\/FLORIST",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bunga potong\\/florist.",
          
        },
        {
          "number": "47762",
          "name": "PERDAGANGAN ECERAN TANAMAN DAN BIBIT TANAMAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus tanaman dan biji benih\\/bibit tanaman. Termasuk perdagangan eceran tanaman obat dan tanaman hias, seperti anggrek, mawar, melati, sedap malam dan bibit tanaman hias\\/obat.",
          
        },
        {
          "number": "47763",
          "name": "PERDAGANGAN ECERAN PUPUK DAN PEMBERANTAS HAMA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai macam pupuk dan pemberantas hama, seperti pupuk buatan tunggal (urea, ZA, TSP, DSP), pupuk buatan majemuk dan campuran (mono amonium fosfat, diamonium fosfat, nitrogen fosfat kalium), pupuk alam (pupuk kompos, pupuk dolomit, pupuk kapur), insektisida, fungisida, rodentisida, herbisida, nematisida dan akarisida.",
          
        },
        {
          "number": "47764",
          "name": "PERDAGANGAN ECERAN PERLENGKAPAN DAN MEDIA TANAMAN HIAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran perlengkapan tanaman hias, seperti pot, media tanam, dan lainnya.",
          
        },
        {
          "number": "47771",
          "name": "PERDAGANGAN ECERAN MINYAK TANAH",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus minyak tanah.",
          
        },
        {
          "number": "47772",
          "name": "PERDAGANGAN ECERAN GAS ELPIJI",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus gas elpiji.",
          
        },
        {
          "number": "47773",
          "name": "PERDAGANGAN ECERAN BAHAN KIMIA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus bahan kimia di dalam bangunan, seperti soda kostik, soda abu, kalium hidroksida, amoniak, argon, bahan pewarna, bahan pengawet, bahan untuk pestisida, pelarut dan eter.",
          
        },
        {
          "number": "47774",
          "name": "PERDAGANGAN ECERAN AROMATIK\\/PENYEGAR (MINYAK ATSIRI)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus aromatik\\/penyegar minyak atsiri, seperti minyak kenanga, minyak sereh, minyak kayu putih, minyak cendana, minyak lawang, minyak tengkawang, minyak gandapura, minyak jarak, minyak kapulaga, minyak pala, minyak delas dan minyak akar wangi.",
          
        },
        {
          "number": "47779",
          "name": "PERDAGANGAN ECERAN BAHAN KIMIA, DAN AROMATIK\\/PENYEGAR (MINYAK ATSIRI), DAN BAHAN BAKAR BUKAN BAHAN BAKAR UNTUK KENDARAAN BERMOTOR LAINNNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran lainnya yang tidak tercakup dalam kelompok 47771 s.d. 47774, seperti gelatin, bahan isolasi panas selain plastik dan karet, bahan semir, kapur barus.",
          
        },
        {
          "number": "47781",
          "name": "PERDAGANGAN ECERAN BARANG KERAJINAN DARI KAYU, BAMBU, ROTAN, PANDAN, RUMPUT DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang kerajinan dari kayu, bambu, rotan, pandan, rumput dan sejenisnya, seperti patung, topeng, relief, ukiran nama, wayang, pigura, kap lampu, bingkai, talam\\/baki, tas, keranjang, tikar, topi\\/tudung, kerai, hiasan dinding dan keset. Termasuk kegiatan galeri kesenian yang menjual barang kerajinan tersebut.",
          
        },
        {
          "number": "47782",
          "name": "PERDAGANGAN ECERAN BARANG KERAJINAN DARI KULIT, TULANG, TANDUK, GADING, BULU DAN BINATANG\\/HEWAN YANG DIAWETKAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang kerajinan dari kulit, tulang, tanduk, bulu dan binatang\\/hewan yang diawetkan, seperti kipas dari kulit penyu, karangan bunga dari kulit kerang, pipa rokok dari tulang, pajangan dari tanduk, pajangan dari gading, pajangan dari bulu burung merak dan binatang\\/hewan yang diawetkan. Termasuk kegiatan galeri kesenian yang menjual barang kerajinan tersebut.",
          
        },
        {
          "number": "47783",
          "name": "PERDAGANGAN ECERAN BARANG KERAJINAN DARI LOGAM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang kerajinan dari logam, seperti vas bunga, patung, tempat lilin, piala, medali dan gantungan kunci. Termasuk kegiatan galeri kesenian yang menjual barang kerajinan tersebut.",
          
        },
        {
          "number": "47784",
          "name": "PERDAGANGAN ECERAN BARANG KERAJINAN DARI KERAMIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang kerajinan dari keramik, seperti patung, vas bunga, asbak, tempat sirih, celengan dan pot bunga. Termasuk kegiatan galeri kesenian yang menjual barang kerajinan tersebut.",
          
        },
        {
          "number": "47785",
          "name": "PERDAGANGAN ECERAN LUKISAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus lukisan, seperti lukisan orang, lukisan binatang dan lukisan pemandangan. Termasuk kegiatan galeri kesenian yang menjual lukisan.",
          
        },
        {
          "number": "47789",
          "name": "PERDAGANGAN ECERAN BARANG KERAJINAN DAN LUKISAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang-barang kerajinan dan lukisan lainnya yang belum tercakup dalam kelompok 47781 s.d. 47785. Termasuk kegiatan galeri kesenian yang menjual barang kerajinan tersebut.",
          
        },
        {
          "number": "47791",
          "name": "PERDAGANGAN ECERAN MESIN PERTANIAN DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus mesin pertanian dan perlengkapannya, seperti traktor, mesin bajak, mesin pemupuk, mesin semai, mesin penanam, mesin penugal, mesin potong rumput, mesin penyemprot, mesin pengupas, mesin perontok, rice milling unit, mesin perah susu, serta komponen dan suku cadang mesin pertanian.",
          
        },
        {
          "number": "47792",
          "name": "PERDAGANGAN ECERAN MESIN JAHIT DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus mesin jahit dan perlengkapannya, seperti mesin jahit tangan\\/kaki, mesin jahit listrik, mesin obras, mesin bordir, mesin oversum, serta komponen dan suku cadang mesin jahit.",
          
        },
        {
          "number": "47793",
          "name": "PERDAGANGAN ECERAN MESIN LAINNYA DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus mesin lainnya yang belum terliput dalam kelompok 47791 dan 47792, seperti mesin pembangkit tenaga listrik\\/generator, mesin las, mesin giling kopi, mesin giling tepung, mesin gergaji, mesin bubut, turbin, kincir, mesin tenun, mesin rajut, dan mesin cetak.",
          
        },
        {
          "number": "47794",
          "name": "PERDAGANGAN ECERAN ALAT TRANSPORTASI DARAT TIDAK BERMOTOR DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat transportasi darat tidak bermotor, seperti sepeda khusus untuk orang cacat, becak, pedati, gerobak, sado, kereta dorong, serta komponen dan perlengkapannya.",
          
        },
        {
          "number": "47795",
          "name": "PERDAGANGAN ECERAN ALAT TRANSPORTASI AIR DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat transportasi air (bermotor atau tidak), seperti perahu dan sampan, beserta komponen dan perlengkapannya.",
          
        },
        {
          "number": "47796",
          "name": "PERDAGANGAN ECERAN ALAT-ALAT PERTANIAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat-alat pertanian, seperti cangkul, bajak, sabit, linggis, alat perontok padi bukan mesin.",
          
        },
        {
          "number": "47797",
          "name": "PERDAGANGAN ECERAN ALAT-ALAT PERTUKANGAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat-alat pertukangan, seperti pahat, gergaji, obeng, tang, palu, ketam, kampak.",
          
        },
        {
          "number": "47811",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI PADI DAN PALAWIJA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran padi dan palawija, yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti gabah, jagung, ubi jalar, ubi kayu, talas, kacang kedelai, kacang tanah, kacang hitam dan kacang polong.",
          
        },
        {
          "number": "47812",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI BUAH- BUAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran buah-buahan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti apel, anggur, alpokat, belimbing, duku, durian, mangga dan lain-lain.",
          
        },
        {
          "number": "47813",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI SAYUR- SAYURAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran sayur-sayuran yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti bawang merah, bawang putih, kentang, wortel, terong, buncis, mentimun, labu siam, kacang panjang dan kacang merah.",
          
        },
        {
          "number": "47814",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI HASIL PETERNAKAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran hasil peternakan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti susu dan telur, daging ternak dan unggas.",
          
        },
        {
          "number": "47815",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI HASIL PERIKANAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran hasil perikanan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti udang segar, ikan segar, cumi-cumi segar, ikan hias, nener, benur, benih ikan dan rumput laut.",
          
        },
        {
          "number": "47816",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI HASIL KEHUTANAN DAN PERBURUAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran komoditi hasil kehutanan dan perburuan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kayu bakar, bambu, kayu cendana, getah damar dan sejenisnya.",
          
        },
        {
          "number": "47819",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI TANAMAN HIAS DAN HASIL PERTANIAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran tanaman hias dan hasil pertanian lainnya yang belum tercakup dalam kelompok 47811 s.d. 47816 yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti anggrek, mawar, melati sedap malam, tanaman hias lainnya dan bibit tanaman hias, bibit buah-buahan dan obat-obatan.",
          
        },
        {
          "number": "47821",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BERAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis beras yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti beras cianjur, beras cisadane, beras saigon, beras ketan dan lain-lain.",
          
        },
        {
          "number": "47822",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ROTI, KUE KERING, KUE BASAH DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis roti, kue kering dan kue basah yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti roti manis, roti tawar, bolu, cake\\/tart, biskuit, wafer, kue semprong dan cookies.",
          
        },
        {
          "number": "47823",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOPI, GULA PASIR, GULA MERAH DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kopi, gula pasir, gula merah dan teh yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47824",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR TAHU, TEMPE, TAUCO DAN ONCOM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran tahu, tempe, tauco dan oncom yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47825",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR DAGING OLAHAN DAN IKAN OLAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis daging olahan dan ikan olahan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti abon, sosis, bakso, ikan teri, cucut, selar, kerapu dan ikan, udang, kerang yang diasinkan\\/dikeringkan.",
          
        },
        {
          "number": "47826",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR MINUMAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai minuman yang tidak langsung diminum di tempat, yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti minuman keras (whisky, genever, brandy, gin, arak, rum, sake, tuak), minuman anggur; minuman yang mengandung malt (bir, ale, stout, temulawak) dan minuman ringan (limun, air soda, markisa, teh botol, air mineral dan beras kencur).",
          
        },
        {
          "number": "47827",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ROKOK DAN TEMBAKAU",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis rokok dan tembakau yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti tembakau krosok, tembakau susur dan tembakau pipa (papier), rokok (putih atau kretek).",
          
        },
        {
          "number": "47828",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PAKAN TERNAK, PAKAN UNGGAS DAN PAKAN IKAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis pakan ternak\\/unggas\\/ikan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti ransum pakan ternak\\/unggas\\/ikan, konsentrat pakan ternak\\/unggas\\/ikan, tepung tulang, tepung darah dan tepung kerang.",
          
        },
        {
          "number": "47829",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOMODITI MAKANAN DAN MINUMAN YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis makanan dan minuman lainnya yang belum tercakup pada kelompok 47821 s.d. 47828 yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti asinan buah-buahan dan sayuran, kerupuk dan emping\\/ceriping.",
          
        },
        {
          "number": "47831",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR TEKSTIL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran macam-macam tekstil atau kain baik terbuat dari serat alam, sintetis, maupun campuran yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kain tenun (kain sarung katun, kain sarung polister, kain suiting sutera, kain suiting serat campuran), kain cetak (kain cetak kapas, kain cetak polyamida, kain kedap air), kain batik (kain batik tulis, kain batik cap, kain batik kombinasi tulis dan cap) dan kain rajut (kain rajut wol, kain rajut rayon, kain rajut wol\\/kapas).",
          
        },
        {
          "number": "47872",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ALAT TULIS MENULIS DAN GAMBAR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat tulis-menulis dan gambar yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti pensil, pulpen, spidol, balpoin, sign pen, pensil mekanik, jangka, kuas gambar, rapido, crayon dan pastel, papan tulis, meja gambar, white board, alat-alat sablon, pita mesin tulis, cat air, cat minyak, karet penghapus, kayu penghapus, tip-ex, tinta, pengasah pensil, penggaris dan kapur tulis.",
          
        },
        {
          "number": "47873",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR HASIL PENCETAKAN DAN PENERBITAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran hasil pencetakan dan penerbitan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti faktur, nota, kuitansi, kartu nama, etiket, amplop, agenda, buku alamat, kartu ucapan, kartu pos, perangko, materai, album, buku tulis, buku gambar, kertas bergaris, kertas grafik, atlas, huruf braile, surat kabar, majalah, buletin, kamus, buku ilmu pengetahuan, buku bergambar.",
          
        },
        {
          "number": "47874",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ALAT OLAHRAGA DAN ALAT MUSIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat-alat olahraga dan alat musik, baik alat musik tradisional maupun alat musik modern yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti berbagai macam bola, raket, jaring\\/net, stik, bat, peralatan panahan, peralatan pancing, peralatan anggar, peralatan terjun payung, sepatu roda (skate board), sarung tinju, halter, sepeda olahraga termasuk sepeda standar dan sepeda mini, perlengkapan catur, meja biliar, meja pingpong, perlengkapan golf, alat pengaman olahraga, matras, spring board, scoring board, dan ring tinju, kecapi, seruling bambu, calung, angklung, kulintang, gamelan, set, rebab, rebana, tifa, sasando, flute, saksofon, harmonika, trombone, gitar, mandolin, ukulele, harpa, bass, gambus, biola, cello, piano\\/organ, drum set dan garpu tala.",
          
        },
        {
          "number": "47875",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ALAT FOTOGRAFI, ALAT OPTIK DAN PERLENGKAPANNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat fotografi, alat optik dan perlengkapannya yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kamera foto, kamera sinematografi, proyektor sinematografi, pesawat rekam suara, pesawat reproduksi suara proyektor gambar, over head projector, aparat cahaya kilat fotografi, frame kamera, camera bodies, perlengkapan proyektor gambar, dan cassete film transfer, kaca mata pengelas, teropong monokuler, teropong binokuler, kaca pembesar, kaca pengintip, strereoskop dan mikroskop.",
          
        },
        {
          "number": "47876",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR MESIN KANTOR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam mesin kantor, seperti komputer, mesin tik, mesin hitung, cash register dan sejenisnya yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47877",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PERALATAN TELEKOMUNIKASI",
          "description": "Kelompok ini mencakup usaha perdagangan alat telekomunikasi, seperti handphone, pesawat telepon dan perlengkapannya yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47879",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR CAMPURAN KERTAS, KARTON, BARANG DARI KERTAS, ALAT TULIS-MENULIS, ALAT GAMBAR, HASIL PENCETAKAN, PENERBITAN DAN LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam\\/campuran dari kertas, karton, alat tulis-menulis, alat gambar, hasil pencetakan, penerbitan dan lainnya yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47881",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG KERAJINAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kaki lima barang kerajinan dari kayu, bambu, rotan, pandan, rumput dan sejenisnya, kulit, tulang, tanduk, gading, bulu dan hewan yang diawetkan, logam, keramik yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti patung, topeng, relief, ukiran nama, wayang, keranjang, tikar, topi\\/tudung, kerai, keset, pajangan dari tanduk, pipa rokok dari tulang, vas bunga, tempat lilin piala dari logam, asbak, celengan pot bunga dari keramik dan lain-lain.",
          
        },
        {
          "number": "47882",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR MAINAN ANAK-ANAK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam mainan anak-anak yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti boneka, kelereng, bekel, congklak, scrable, karambol, mainan yang berupa alat musik, mobil- mobilan, mainan berupa senjata, mainan berupa alat memasak, dan mainan berupa perabotan rumah tangga.",
          
        },
        {
          "number": "47883",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR LUKISAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran lukisan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti lukisan orang, lukisan binatang dan lukisan pemandangan.",
          
        },
        {
          "number": "47891",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR HEWAN HIDUP",
          "description": "Kelompok ini mencakup usaha perdagangan eceran hewan hidup, termasuk hewan peliharaan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47832",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PAKAIAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran macam-macam pakaian baik terbuat dari tekstil, kulit, maupun kulit buatan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kemeja, celana, jas, mantel, jaket, piyama, kebaya, blus, rok, daster, singlet, kutang\\/BH, gaun, rok dalam, baju bayi, pakaian tari, pakaian adat, mukena dan jubah.",
          
        },
        {
          "number": "47833",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR SEPATU, SANDAL DAN ALAS KAKI LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam sepatu, sandal, selop dan alas kaki lainnya baik terbuat dari kulit, kulit buatan, plastik, karet, kain ataupun kayu yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti sepatu laki- laki dewasa, sepatu perempuan dewasa, sepatu anak, sepatu olahraga, sepatu sandal, sandal, selop dan sepatu kesehatan.",
          
        },
        {
          "number": "47834",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PELENGKAP PAKAIAN DAN BENANG",
          "description": "Kelompok ini mencakup usaha perdagangan eceran pelengkap pakaian dan benang yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti selendang, kerudung, sapu tangan, ikat kepala, blangkon, peci, topi, dasi, ikat pinggang, cadar, sarung tangan, handuk, dan selimut. Termasuk juga perdagangan eceran kancing baju, risleting dan benang jahit.",
          
        },
        {
          "number": "47841",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BAHAN KIMIA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bahan kimia yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti soda kostik, soda abu, kalium hidroksida, amoniak, argon, bahan pewarna, bahan pengawet, bahan untuk pestisida, pelarut dan eter.",
          
        },
        {
          "number": "47842",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR FARMASI",
          "description": "Kelompok ini mencakup usaha perdagangan eceran farmasi atau obat- obatan yang berbentuk jadi (sediaan), misalnya dalam bentuk tablet, kapsul, salep, bubuk, larutan, larutan parenteral dan suspensi yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti obat-obat untuk penyakit kulit, mata, gigi, telinga, saluran pernapasan, saluran pencernaan, darah tinggi, kelainan hormon dan vitamin-vitamin, termasuk juga barang keperluan kesehatan dari karet, antara lain kondom, alat sedot susu ibu, dot susu, kantong darah, sarung tangan untuk pembedahan, pipet karet, alat keluarga berencana dan sumbat karet untuk botol kecil (vial) farmasi.",
          
        },
        {
          "number": "47843",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR OBAT TRADISIONAL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam jamu (obat tradisional) yang bahannya berasal dari tumbuh-tumbuhan, hewan atau mineral misalnya yang berbentuk pil, kapsul, bubuk, dan bentuk cair yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar),",
          
        },
        {
          "number": "47844",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KOSMETIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang kosmetik yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kosmetik untuk tata rias muka (eye shadow, maskara, krim wajah, lipstik, lipliner), preparat wangi-wangian (cologne, toilet water, parfum), preparat rambut (sampo, tonik rambut, minyak rambut), preparat kuku (base coat, nail polish, nail cream, cuticle remover), preparat perawat kulit (baby oil, cleansing lotion, masker, krim kaki), preparat untuk kebersihan badan (deodoran semprot, deodoran krim, douches), preparat cukur (sabun cukur, shaving cream), kosmetik tradisional (bedak, mangir, lulur) dan kosmetik lainnya antara lain bedak badan, kapas kecantikan dan baby powder.",
          
        },
        {
          "number": "47845",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PUPUK DAN PEMBERANTAS HAMA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam pupuk dan pemberantas hama yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti pupuk buatan tunggal (urea, ZA, TSP, DSP), pupuk buatan majemuk dan campuran (mono amonium fosfat, diamonium fosfat, nitrogen fosfat kalium), pupuk alam (pupuk kompos, pupuk dolomit, pupuk kapur), insektisida, fungisida, rodentisida, herbisida, nematisida dan akarisida.",
          
        },
        {
          "number": "47846",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR AROMATIK\\/PENYEGAR (MINYAK ATSIRI)",
          "description": "Kelompok ini mencakup usaha perdagangan eceran aromatik\\/penyegar (minyak atsiri) yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti minyak kenanga, minyak sereh, minyak kayu putih, minyak cendana, minyak lawang, minyak tengkawang, minyak gandapura, minyak jarak, minyak kapulaga, minyak pala, minyak delas dan minyak akar wangi.",
          
        },
        {
          "number": "47849",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BAHAN KIMIA, FARMASI, KOSMETIK DAN ALAT LABORATORIUM DAN YBDI YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kaki lima dan los pasar lainnya yang belum tercakup dalam kelompok 47841 s.d. 47846, seperti gelatin, bahan isolasi panas selain plastik dan karet, bahan semir, kapur barus dan bahan jamu (simplisia).",
          
        },
        {
          "number": "47851",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KACA MATA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam kaca mata yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kaca mata pembantu penglihatan, kaca mata peredam sinar matahari\\/cahaya, lensa kontak (contact lens, soft lens) dan frame kaca mata.",
          
        },
        {
          "number": "47852",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG PERHIASAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang perhiasan baik terbuat dari batu mulia, batu permata, batu permata tiruan, berlian, intan, batu aji, serbuk dan bubuk intan, logam mulia ataupun bukan logam mulia yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti cincin, kalung, gelang, giwang (anting-anting), tusuk konde peniti, bross, ikat pinggang dan kancing dari logam mulia (platina, emas dan perak).",
          
        },
        {
          "number": "47853",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR JAM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam jam yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti arloji tangan, arloji saku, jam dinding, jam beker, lonceng dan alat ukur waktu lainnya, termasuk juga bagian dari arloji dan jam.",
          
        },
        {
          "number": "47854",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR TAS, DOMPET, KOPER, RANSEL DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran tas, dompet, koper, ransel dan sejenisnya baik terbuat dari kulit, kulit buatan, tekstil, plastik ataupun karet yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti tas tangan, tas belanja, tas sekolah, tas surat, tas olahraga, dompet, kotak rias, sarung pedang\\/pisau, tempat kamera, tempat kaca mata dan kotak pen.",
          
        },
        {
          "number": "47855",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PERLENGKAPAN PENGENDARA SEPEDA MOTOR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kaki lima dan los pasar perlengkapan pengendara sepeda motor yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti helm, jaket, jas hujan, sarung tangan, masker dan lain-lainnya.",
          
        },
        {
          "number": "47859",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG KEPERLUAN PRIBADI LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang keperluan pribadi lainnya yang belum tercakup dalam kelompok 47851 s.d. 47855 yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47861",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG ELEKTRONIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang elektronik yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti radio, televisi, video, tape recorder, audio amplifier dan cassete recorder.",
          
        },
        {
          "number": "47862",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ALAT DAN PERLENGKAPAN LISTRIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat dan perlengkapan listrik yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti mesin cuci, lemari es, kipas angin, alat pengisap debu, alat penggosok lantai, mixer, seterika listrik, blender, lampu pijar, lampu neon, starter, ballast, reflektor, kabel, sakelar, stop kontak, fitting dan sekering.",
          
        },
        {
          "number": "47863",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR DARI PLASTIK\\/MELAMIN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang pecah belah dan perlengkapan dapur yang terbuat dari plastik atau melamin yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti piring, pisin, mangkok, cangkir, teko, sendok, garpu, rantang, stoples, botol susu bayi, panci, baki, ember, termos dan jerigen.",
          
        },
        {
          "number": "47864",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR DARI BATU ATAU TANAH LIAT",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang pecah belah dan perlengkapan dapur yang terbuat dari batu atau tanah liat yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti piring, mangkok, cangkir, teko, kendi, periuk, cobek, tempayan, lumpang, asbak dan uleg-uleg.",
          
        },
        {
          "number": "47865",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG DAN PERLENGKAPAN DAPUR DARI KAYU, BAMBU ATAU ROTAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang dan perlengkapan dapur yang terbuat dari kayu, bambu atau rotan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti rak bambu, alu, lesung, parutan kelapa, talenan, papan gilesan, centong, bakul, tampah, kukusan, kipas, tudung saji, tusukan sate, gilingan daging.",
          
        },
        {
          "number": "47866",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG PECAH BELAH DAN PERLENGKAPAN DAPUR BUKAN DARI PLASTIK, BATU, TANAH LIAT, KAYU, BAMBU ATAU ROTAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang pecah belah dan perlengkapan dapur yang terbuat bukan dari plastik, batu, tanah liat, kayu, bambu atau rotan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti piring, pisau, mangkok, cangkir, teko, sendok, garpu, rantang, stoples, botol susu bayi, panci, baki, termos, kompor gas dan kompor minyak tanah.",
          
        },
        {
          "number": "47867",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR ALAT KEBERSIHAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran alat kebersihan yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti sapu lidi, sapu ijuk, sikat, keset, alat\\/kain pel dan sejenisnya.",
          
        },
        {
          "number": "47869",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PERLENGKAPAN RUMAH TANGGA LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran perlengkapan rumah tangga dan perlengkapan dapur lainnya yang belum tercakup dalam kelompok 47861 s.d. 47867 yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti linen rumah tangga, taplak meja, seprei, kelambu, kain kasur, kain bantal, gordin, kain pel, keset kamar mandi, sajadah, permadani, karpet dan tenda.",
          
        },
        {
          "number": "47871",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR KERTAS, KARTON DAN BARANG DARI KERTAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kertas, karton dan barang dari kertas\\/karton yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti kertas HVS, kertas doorslag, kertas kraft, kertas tipis, kertas kalkir, kertas berwarna, karton manila, karton buffalo skin, karton serat (fiber board), kertas pembungkus (wrapping), karton kemasan untuk makanan\\/minuman, kantong kertas, kertas\\/karton berlapis, kertas surat (stationary), kertas stensil, kertas karbon dan kertas duplikator.",
          
        },
        {
          "number": "47630",
          "name": "PERDAGANGAN ECERAN KHUSUS PERALATAN OLAHRAGA DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus peralatan olahraga, seperti berbagai macam bola, raket, jaring\\/net, stik, bat, peralatan panahan, peralatan pancing, peralatan anggar, peralatan terjun payung, sepatu roda\\/skate board, sarung tinju, halter, sepeda olahraga, perlengkapan catur, meja biliar, meja pingpong, perlengkapan golf, alat pengaman olahraga, matras, spring board, scoring board, dan ring tinju. Termasuk perdagangan eceran peralatan untuk kemah, perahu dan sepeda standard, sepeda balap dan sepeda mini.",
          
        },
        {
          "number": "47640",
          "name": "PERDAGANGAN ECERAN KHUSUS ALAT PERMAINAN DAN MAINAN ANAK- ANAK DI TOKO",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat permainan dan mainan anak-anak, seperti boneka, kelereng, bekel, congklak, scrable, karambol, mainan yang berupa alat musik, mobil-mobilan, mainan berupa senjata, mainan berupa alat memasak dan mainan berupa perabotan rumah tangga yang terbuat dari berbagai bahan.",
          
        },
        {
          "number": "47650",
          "name": "PERDAGANGAN ECERAN KERTAS, KERTAS KARTON DAN BARANG DARI KERTAS\\/KARTON",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus kertas, karton dan barang dari kertas\\/karton, seperti kertas HVS, kertas doorslag, kertas kraft, kertas tipis, kertas kalkir, kertas berwarna, karton manila, karton buffalo skin, karton serat (fiber board), kertas pembungkus (wrapping), karton kemasan untuk makanan\\/minuman, kantong kertas, kertas\\/karton berlapis, kertas surat (stationary), stensil sheet, kertas karbon dan kertas duplikator.",
          
        },
        {
          "number": "47711",
          "name": "PERDAGANGAN ECERAN PAKAIAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus pakaian, baik terbuat dari tekstil, kulit, maupun kulit buatan, seperti kemeja, celana, jas, mantel, jaket, piyama, kebaya, blus, rok, daster, singlet, kutang\\/BH, gaun, rok dalam, baju bayi, pakaian tari, pakaian adat, mukena dan jubah.",
          
        },
        {
          "number": "47712",
          "name": "PERDAGANGAN ECERAN SEPATU, SANDAL DAN ALAS KAKI LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus sepatu, sandal dan alas kaki lainnya baik terbuat dari kulit, kulit buatan, plastik, karet, kain maupun kayu, seperti sepatu laki-laki dewasa, sepatu perempuan dewasa, sepatu anak, sepatu olahraga, sepatu sandal, sandal, selop dan sepatu kesehatan.",
          
        },
        {
          "number": "47713",
          "name": "PERDAGANGAN ECERAN PELENGKAP PAKAIAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus pelengkap pakaian, seperti selendang, kerudung, sapu tangan, ikat kepala, blangkon, peci, topi, dasi, ikat pinggang, cadar, sarung tangan, kaos kaki, handuk dan selimut. Termasuk juga perdagangan eceran kancing baju, ritsleting dan lainnya.",
          
        },
        {
          "number": "47714",
          "name": "PERDAGANGAN ECERAN TAS, DOMPET, KOPER, RANSEL DAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus tas, dompet, koper, ransel dan sejenisnya baik terbuat dari kulit, kulit buatan, tekstil, plastik ataupun karet, seperti tas tangan, tas belanja, tas sekolah, tas surat, tas olahraga, dompet, kotak rias, sarung pedang\\/pisau, tempat kamera, tempat kaca mata dan kotak pensil. Termasuk perdagangan eceran payung.",
          
        },
        {
          "number": "47721",
          "name": "PERDAGANGAN ECERAN BARANG DAN OBAT FARMASI UNTUK MANUSIA DI APOTIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang farmasi dan obat-obatan untuk manusia yang berbentuk jadi (sediaan) di apotik, misalnya dalam bentuk tablet, kapsul, salep, bubuk, larutan, larutan parenteral dan suspensi, seperti obat-obat untuk penyakit kulit, mata, gigi, telinga, saluran pernapasan, saluran pencernaan, darah tinggi, kelainan hormon dan vitamin-vitamin serta suplemen kesehatan, termasuk juga barang keperluan kesehatan dari karet, antara lain kondom, alat sedot susu ibu, dot susu, kantong darah, sarung tangan untuk pembedahan, pipet karet, alat keluarga berencana dan sumbat karet untuk botol kecil (vial) farmasi.",
          
        },
        {
          "number": "47722",
          "name": "PERDAGANGAN ECERAN BARANG DAN OBAT FARMASI UNTUK MANUSIA BUKAN DI APOTIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang farmasi dan obat-obatan untuk manusia yang berbentuk jadi (sediaan) bukan apotik, misalnya dalam bentuk tablet, kapsul, salep, larutan, larutan parenteral dan suspensi, seperti obat-obatan untuk penyakit kulit, mata, gigi, telinga, saluran pernapasan, saluran pencernaan, darah tinggi, kelainan hormon dan vitamin-vitamin serta suplemen kesehatan. Contohnya adalah toko obat.",
          
        },
        {
          "number": "47723",
          "name": "PERDAGANGAN ECERAN OBAT TRADISIONAL UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai macam jamu (obat tradisional) untuk manusia yang bahannya berasal dari tumbuh-tumbuhan, hewan atau mineral misalnya yang berbentuk pil, kapsul, bubuk dan bentuk cair di dalam bangunan.",
          
        },
        {
          "number": "47724",
          "name": "PERDAGANGAN ECERAN KOSMETIK UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang-barang kosmetik untuk manusia, seperti kosmetik untuk tata rias muka (eye shadow, maskara, krim wajah, lipstik, lipliner); preparat wangi-wangian (cologne, toilet water, parfum), preparat rambut (sampo, tonik rambut, minyak rambut); preparat kuku (base coat, nail polish, nail cream, cuticle remover); preparat perawat kulit (baby oil, cleansing lotion, masker, krim kaki); preparat untuk kebersihan badan (deodoran semprot, deodoran krim, douches); preparat cukur (sabun cukur, shaving cream); kosmetik tradisional (bedak, mangir, lulur); kosmetik lainnya antara lain bedak badan, kapas kecantikan dan baby powder. Contohnya toko kosmetik.",
          
        },
        {
          "number": "47725",
          "name": "PERDAGANGAN ECERAN ALAT LABORATORIUM, ALAT FARMASI DAN ALAT KESEHATAN UNTUK MANUSIA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus alat laboratorium, alat farmasi dan alat kesehatan untuk manusia, antara lain berbagai macam alat laboratorium dari gelas (tabung uji, tabung ukur, kaca sorong mikroskop, cuvet, botol serum\\/infus); alat laboratorium dari porselen (tabung kimia, piring penapis, lumpang dan alu, cawan); alat dan perlengkapan profesi kedokteran (instrumen dan pesawat bedah, instrumen dan pesawat perawatan gigi, aparat elektro medis, termometer, pengukuran tekanan darah).",
          
        },
        {
          "number": "47726",
          "name": "PERDAGANGAN ECERAN BARANG DAN OBAT FARMASI UNTUK HEWAN DI APOTIK DAN BUKAN DI APOTIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus barang dan obat farmasi untuk hewan seperti obat-obatan yang berbentuk jadi (sediaan), misalnya dalam serbuk, tablet, kapsul, salep, bubuk, larutan, suspensi, aerosol, dan lainnya.",
          
        },
        {
          "number": "47727",
          "name": "PERDAGANGAN ECERAN OBAT TRADISIONAL UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran khusus berbagai macam obat tradisional atau obat alami untuk hewan.",
          
        },
        {
          "number": "47728",
          "name": "PERDAGANGAN ECERAN KOSMETIK UNTUK HEWAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kosmetik untuk hewan, seperti parfum, shampo, sabun, bedak, krim atau lotion, dan lainnya.",
          
        },
        {
          "number": "50114",
          "name": "ANGKUTAN LAUT DALAM NEGERI PERINTIS UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha angkutan laut untuk penumpang yang menghubungkan daerah-daerah terpencil serta daerah yang potensial namun belum berkembang serta belum menguntungkan untuk dilayari secara komersial ke daerah-daerah yang telah berkembang. Kegiatan angkutan laut perintis dengan trayek tetap dan teratur (liner) serta penempatan kapalnya untuk mendorong pengembangan daerah terpencil. Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50121",
          "name": "ANGKUTAN LAUT LUAR NEGERI LINER DAN TRAMPER UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang melalui laut dengan menggunakan kapal laut antarpelabuhan di Indonesia dengan pelabuhan di luar negeri dengan melayari trayek secara tetap dan teratur (liner) dengan berjadwal, atau trayek tidak tetap dan tidak teratur (tramper). Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50122",
          "name": "ANGKUTAN LAUT LUAR NEGERI UNTUK WISATA",
          "description": "Kelompok ini mencakup usaha pengangkutan wisatawan melalui laut dengan menggunakan kapal laut wisata antara pelabuhan di Indonesia dan pelabuhan di luar negeri. Termasuk usaha penyewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50131",
          "name": "ANGKUTAN LAUT DALAM NEGERI UNTUK BARANG UMUM",
          "description": "Kelompok ini mencakup usaha pengangkutan barang umum melalui laut dengan menggunakan kapal laut antarpelabuhan dalam negeri dengan melayari trayek secara tetap dan teratur (liner) dengan berjadwal, atau trayek tidak tetap dan tidak teratur (tramper). Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50132",
          "name": "ANGKUTAN LAUT PERAIRAN PELABUHAN DALAM NEGERI UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha pengangkutan barang melalui laut pada pelabuhan-pelabuhan yang belum memiliki fasilitas lengkap, dengan menggunakan angkutan perairan pelabuhan (rede transport) sebagai penghubung dari dermaga (pelabuhan) ke kapal atau sebaliknya, dari kapal utama ke kapal lainnya di perairan pelabuhan atau sebaliknya, dan\\/atau dari dermaga dan\\/atau kapal ke bangunan\\/instalasi di perairan laut atau sebaliknya.",
          
        },
        {
          "number": "50133",
          "name": "ANGKUTAN LAUT DALAM NEGERI UNTUK BARANG KHUSUS",
          "description": "Kelompok ini mencakup usaha pengangkutan barang dengan menggunakan kapal laut yang dirancang secara khusus untuk mengangkut suatu jenis barang tertentu, seperti angkutan barang berbahaya, limbah bahan berbahaya dan beracun, bahan bakar minyak, minyak bumi, hasil olahan, LPG, LNG dan CNG, ikan dan sejenisnya. Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50134",
          "name": "ANGKUTAN LAUT DALAM NEGERI PERINTIS UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha angkutan laut untuk barang yang menghubungkan daerah-daerah terpencil serta daerah yang potensial namun belum berkembang serta belum menguntungkan untuk dilayari secara komersial ke daerah-daerah yang telah berkembang. Kegiatan angkutan laut perintis ditetapkan dengan trayek tetap dan teratur atau liner serta penempatan kapalnya untuk mendorong pengembangan daerah terpencil. Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50135",
          "name": "ANGKUTAN LAUT DALAM NEGERI PELAYARAN RAKYAT",
          "description": "Kelompok ini mencakup usaha angkutan laut yang ditujukan untuk mengangkut barang dan\\/atau hewan dengan menggunakan kapal layar, kapal motor tradisional dan kapal motor dengan ukuran tertentu. Perusahaan pelayaran rakyat merupakan perusahaan angkutan laut berbadan hukum Indonesia. Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50141",
          "name": "ANGKUTAN LAUT LUAR NEGERI UNTUK BARANG UMUM",
          "description": "Kelompok ini mencakup usaha pengangkutan barang melalui laut dengan menggunakan kapal laut antarpelabuhan di Indonesia dengan pelabuhan di luar negeri dengan melayari trayek secara tetap dan teratur (liner) dengan berjadwal, atau trayek tidak tetap dan tidak teratur (tramper). Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50142",
          "name": "ANGKUTAN LAUT LUAR NEGERI UNTUK BARANG KHUSUS",
          "description": "Kelompok ini mencakup usaha angkutan laut internasional untuk barang khusus, contohnya angkutan barang berbahaya, limbah bahan berbahaya dan beracun, termasuk ikan dan sejenisnya. Angkutan laut khusus dengan menggunakan kapal berbendera Indonesia dengan kondisi dan persyaratan kapalnya disesuaikan dengan jenis kegiatan usaha pokoknya serta untuk melayani trayek tidak tetap dan tidak teratur atau tramper antarpelabuhan di Indonesia dengan pelabuhan di luar negeri. Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50143",
          "name": "ANGKUTAN LAUT LUAR NEGERI PELAYARAN RAKYAT",
          "description": "Kelompok ini mencakup usaha angkutan laut yang ditujukan untuk mengangkut barang dan\\/atau hewan dengan menggunakan kapal layar, kapal motor tradisional dan kapal motor dengan ukuran tertentu antarpelabuhan di Indonesia dengan pelabuhan di luar negeri. Perusahaan pelayaran rakyat merupakan perusahaan angkutan laut berbadan hukum Indonesia. Termasuk usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50211",
          "name": "ANGKUTAN SUNGAI DAN DANAU LINER (TRAYEK TETAP DAN TERATUR) UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha angkutan penumpang pada sungai dan danau yang dilakukan dalam jaringan trayek secara tetap dan teratur, dengan jadwal tetap dan berjadwal. Menurut jenisnya terdiri dari pelayanan angkutan dalam kabupaten\\/kota, pelayanan angkutan antarkabupaten\\/kota dalam provinsi dan pelayanan lintas batas antarnegara dan antarprovinsi.",
          
        },
        {
          "number": "50212",
          "name": "ANGKUTAN SUNGAI DAN DANAU TRAMPER (TRAYEK TIDAK TETAP DAN TIDAK TERATUR) UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha angkutan penumpang pada sungai dan danau dengan trayek yang tidak tetap dan tidak berjadwal serta tidak untuk keperluan pariwisata.",
          
        },
        {
          "number": "50213",
          "name": "ANGKUTAN SUNGAI DAN DANAU UNTUK WISATA DAN YBDI",
          "description": "Kelompok ini mencakup usaha angkutan penumpang wisata di sungai dan danau, termasuk angkutan trayek untuk keperluan perorangan atau kelompok, keluarga maupun sosial.",
          
        },
        {
          "number": "50214",
          "name": "ANGKUTAN PENYEBERANGAN ANTARPROVINSI UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha angkutan penumpang dari satu provinsi ke provinsi lain dengan menggunakan kapal penyeberangan yang terikat dalam trayek.",
          
        },
        {
          "number": "50215",
          "name": "ANGKUTAN PENYEBERANGAN PERINTIS ANTARPROVINSI UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk antarprovinsi untuk penumpang yang menghubungkan daerah-daerah terpencil serta daerah yang potensial namun belum berkembang serta belum menguntungkan untuk dilayari secara komersial ke daerah-daerah yang telah berkembang. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50216",
          "name": "ANGKUTAN PENYEBERANGAN ANTARKABUPATEN\\/KOTA UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan untuk penumpang di laut, danau, selat dan teluk, antarpelabuhan penyeberangan antarkabupaten\\/kota sebagai jembatan bergerak yang menghubungkan dua tempat tertentu, yang merupakan kelanjutan dari jaringan jalan raya dan atau kereta api. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50217",
          "name": "ANGKUTAN PENYEBERANGAN PERINTIS ANTARKABUPATEN\\/KOTA UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk antarkabupaten\\/kota untuk penumpang yang menghubungkan daerah-daerah terpencil serta daerah yang potensial namun belum berkembang serta belum menguntungkan untuk dilayari secara komersial ke daerah-daerah yang telah berkembang. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50218",
          "name": "ANGKUTAN PENYEBERANGAN DALAM KABUPATEN\\/KOTA UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk, antarpelabuhan penyeberangan dalam kabupaten\\/kota sebagai jembatan bergerak yang menghubungkan dua tempat tertentu, yang merupakan kelanjutan dari jaringan jalan raya dan atau kereta api. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50219",
          "name": "ANGKUTAN PENYEBERANGAN LAINNYA UNTUK PENUMPANG TERMASUK PENYEBERANGAN ANTARNEGARA",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, selat, dan teluk, antarapelabuhan penyeberangan di Indonesia dengan pelabuhan di luar negeri sebagai jembatan bergerak yang menghubungkan dua tempat tertentu, yang merupakan kelanjutan dari jaringan jalan raya dan atau kereta api. Termasuk angkutan perairan pelabuhan untuk penumpang selain angkutan laut, serta usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50221",
          "name": "ANGKUTAN SUNGAI DAN DANAU UNTUK BARANG UMUM DAN\\/ATAU HEWAN",
          "description": "Kelompok ini mencakup usaha angkutan barang di sungai dan danau, dan barang yang diangkut bisa lebih dari satu jenis, kecuali barang berbahaya, barang khusus atau alat berat.",
          
        },
        {
          "number": "50222",
          "name": "ANGKUTAN SUNGAI DAN DANAU UNTUK BARANG KHUSUS",
          "description": "Kelompok ini mencakup usaha angkutan barang di sungai dan danau dengan kapal atau perahu barang yang dimodifikasi secara khusus dan hanya mengangkut satu jenis barang, termasuk kapal yang memenuhi persyaratan teknis\\/kelaikan, sesuai dengan barang khusus yang diangkut dan diklasifikasikan sebagai berikut, yaitu angkutan kayu gelondongan\\/logs, angkutan batangan pipa\\/besi\\/rel, angkutan barang curah, angkutan barang cair, angkutan barang yang memerlukan fasilitas pendingin, angkutan tumbuh-tumbuhan dan hewan hidup, angkutan peti kemas, angkutan alat-alat berat dan angkutan barang khusus lainnya.",
          
        },
        {
          "number": "50223",
          "name": "ANGKUTAN SUNGAI DAN DANAU UNTUK BARANG BERBAHAYA",
          "description": "Kelompok ini mencakup usaha angkutan barang di sungai dan danau yang melakukan kegiatan pengangkutan bahan berbahaya dari tempat kegiatan pemuatan sampai ke tempat pembongkaran akhir, termasuk limbah bahan berbahaya dan beracun, bahan bakar minyak, minyak bumi, hasil olahan, LPG, LNG dan CNG.",
          
        },
        {
          "number": "50224",
          "name": "ANGKUTAN PENYEBERANGAN UMUM ANTARPROVINSI UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha angkutan barang dari satu provinsi ke provinsi lain dengan menggunakan kapal penyeberangan yang terikat dalam trayek.",
          
        },
        {
          "number": "50225",
          "name": "ANGKUTAN PENYEBERANGAN PERINTIS ANTARPROVINSI UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk antarprovinsi untuk barang yang menghubungkan daerah-daerah terpencil serta daerah yang potensial namun belum berkembang serta belum menguntungkan untuk dilayari secara komersial ke daerah-daerah yang telah berkembang. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50226",
          "name": "ANGKUTAN PENYEBERANGAN UMUM ANTARKABUPATEN\\/KOTA UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk, antarpelabuhan penyeberangan antarkabupaten\\/kota sebagai jembatan bergerak yang menghubungkan dua tempat tertentu, yang merupakan kelanjutan dari jaringan jalan raya dan atau kereta api. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50227",
          "name": "ANGKUTAN PENYEBERANGAN PERINTIS ANTARKABUPATEN\\/KOTA UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk antarkabupaten\\/kota untuk barang yang menghubungkan daerah-daerah terpencil serta daerah yang potensial namun belum berkembang serta belum menguntungkan untuk dilayari secara komersial ke daerah-daerah yang telah berkembang. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50228",
          "name": "ANGKUTAN PENYEBERANGAN UMUM DALAM KABUPATEN\\/KOTA UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, danau, selat dan teluk, antarpelabuhan penyeberangan dalam kabupaten\\/kota sebagai jembatan bergerak yang menghubungkan dua tempat tertentu, yang merupakan kelanjutan dari jaringan jalan raya dan atau kereta api. Termasuk usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "50229",
          "name": "ANGKUTAN PENYEBERANGAN LAINNYA UNTUK BARANG TERMASUK PENYEBERANGAN ANTARNEGARA",
          "description": "Kelompok ini mencakup usaha pengangkutan penyeberangan di laut, selat, dan teluk, antara pelabuhan penyeberangan di Indonesia dengan pelabuhan di luar negeri sebagai jembatan bergerak yang menghubungkan dua tempat tertentu, yang merupakan kelanjutan dari jaringan jalan raya dan atau kereta api. Termasuk angkutan perairan pelabuhan untuk penumpang selain angkutan laut, serta usaha persewaan angkutan penyeberangan berikut operatornya.",
          
        },
        {
          "number": "51101",
          "name": "ANGKUTAN UDARA NIAGA BERJADWAL DALAM NEGERI UNTUK PENUMPANG ATAU PENUMPANG DAN KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang atau penumpang dan kargo dengan pesawat udara dari satu bandar udara ke bandar udara lain di dalam wilayah Negara Kesatuan Republik Indonesia pada rute dan jadwal penerbangan yang tetap dan teratur dengan membayar sejumlah tarif tertentu yang dipublikasikan.",
          
        },
        {
          "number": "51102",
          "name": "ANGKUTAN UDARA NIAGA TIDAK BERJADWAL DALAM NEGERI UNTUK PENUMPANG ATAU PENUMPANG DAN KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang atau penumpang dan kargo dengan pesawat udara dari satu bandar udara ke bandar udara lain di dalam wilayah Negara Kesatuan Republik Indonesia pada rute dan jadwal penerbangan yang tidak tetap dan tidak teratur dengan membayar tarif yang merupakan kesepakatan antara penyedia jasa dan pengguna jasa angkutan udara dan tidak dipublikasikan.",
          
        },
        {
          "number": "51103",
          "name": "ANGKUTAN UDARA NIAGA BERJADWAL LUAR NEGERI UNTUK PENUMPANG ATAU PENUMPANG DAN KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang atau penumpang dan kargo dengan pesawat udara dari satu bandar udara di dalam negeri ke bandar udara lain di luar wilayah Negara Kesatuan Republik Indonesia atau sebaliknya pada rute dan jadwal penerbangan yang tetap dan teratur dengan membayar sejumlah tarif tertentu yang dipublikasikan.",
          
        },
        {
          "number": "51104",
          "name": "ANGKUTAN UDARA NIAGA TIDAK BERJADWAL LUAR NEGERI UNTUK PENUMPANG ATAU PENUMPANG DAN KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang atau penumpang dan kargo dengan pesawat udara dari satu bandar udara di dalam negeri ke bandar udara lain di luar wilayah Negara Kesatuan Republik Indonesia atau sebaliknya pada rute dan jadwal penerbangan yang tidak tetap dan tidak teratur dengan membayar tarif yang merupakan kesepakatan antara penyedia jasa dan pengguna jasa angkutan udara dan tidak dipublikasikan.",
          
        },
        {
          "number": "51105",
          "name": "ANGKUTAN UDARA NIAGA TIDAK BERJADWAL LAINNYA",
          "description": "Kelompok ini mencakup usaha pengangkutan selain penumpang, penumpang dan kargo, kargo dengan pesawat udara untuk penerbangan dalam negeri dan\\/atau luar negeri pada rute dan jadwal penerbangan yang tidak tetap dan tidak teratur dengan membayar tarif yang merupakan kesepakatan antara penyedia jasa dan pengguna jasa angkutan udara dan tidak dipublikasikan. Kegiatan ini termasuk diantaranya jasa pesawat udara untuk penyemprotan pertanian, jasa pesawat udara untuk pemadaman kebakaran, jasa pesawat udara untuk pembuatan hujan buatan, jasa pesawat udara untuk pemotretan udara, survei dan pemetaan, jasa pesawat udara untuk pencarian dan pertolongan, jasa pesawat udara untuk kalibrasi, jasa pesawat udara untuk patroli udara, jasa pesawat udara untuk medical evacuation, dan jasa pesawat udara lainnya.",
          
        },
        {
          "number": "51106",
          "name": "ANGKUTAN UDARA UNTUK OLAHRAGA",
          "description": "Kelompok ini mencakup usaha angkutan udara untuk keperluan olahraga. Termasuk usaha persewaan angkutan udara dengan operatornya.",
          
        },
        {
          "number": "51107",
          "name": "ANGKUTAN UDARA UNTUK WISATA",
          "description": "Kelompok ini mencakup usaha pengangkutan untuk wisata dengan pesawat udara berdasarkan penerbangan tidak berjadwal yang dilakukan secara komersial pada penerbangan dalam negeri. Kegiatan penerbangan wisata ini bertujuan menghubungkan daerah-daerah pedalaman yang belum ada moda transportasi. Misalnya helicopter dan pesawat pribadi yang disewa secara khusus. Termasuk usaha penyewaan angkutan udara dengan operatornya.",
          
        },
        {
          "number": "51108",
          "name": "ANGKUTAN UDARA BUKAN NIAGA",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang, kargo, penumpang dan kargo atau angkutan lainnya dengan pesawat udara untuk penerbangan dalam negeri dan\\/atau luar negeri dan tidak memungut bayaran yang digunakan untuk melayani kepentingan sendiri atau untuk mendukung kegiatan yang usaha pokoknya selain di bidang angkutan udara. Kegiatan ini termasuk penggunaan pesawat udara untuk kepentingan sendiri\\/pendukung usaha pokoknya diantaranya angkutan udara pendidikan penerbang, penyemprotan pertanian, pemadaman kebakaran, pembuatan hujan buatan, pemotretan udara, survei dan pemetaan, pencarian dan pertolongan, kalibrasi, patroli udara, medical evacuation, misi keagamaan, dan kegiatan yang menunjang usaha pokok lainnya.",
          
        },
        {
          "number": "51109",
          "name": "ANGKUTAN UDARA UNTUK PENUMPANG LAINNYA",
          "description": "Kelompok ini mencakup usaha pengangkutan udara untuk penumpang yang tidak diklasifikasikan di tempat lain. Termasuk usaha persewaan angkutan udara dengan operatornya.512 ANGKUTAN UDARA UNTUK KARGO Golongan ini mencakup:- Angkutan barang melalui udara dengan rute dan jadwal reguler - Angkutan barang tidak terjadwal melalui udara- Peluncuran satelit dan kendaraan ruang angkasa- Angkutan luar angkasaGolongan ini juga mencakup:- Penyewaan angkutan udara dengan operatornya untuk tujuan pengangkutan barang.",
          
        },
        {
          "number": "51201",
          "name": "ANGKUTAN UDARA NIAGA BERJADWAL DALAM NEGERI UNTUK KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan kargo dengan pesawat udara dari satu bandar udara ke bandar udara lain di dalam wilayah Negara Kesatuan Republik Indonesia pada rute dan jadwal penerbangan yang tetap dan teratur dengan membayar sejumlah tarif tertentu yang dipublikasikan.",
          
        },
        {
          "number": "51202",
          "name": "ANGKUTAN UDARA NIAGA TIDAK BERJADWAL DALAM NEGERI UNTUK KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan kargo, termasuk bahan bakar minyak, minyak bumi, hasil olahan, LPG, LNG dan CNG dengan pesawat udara dari satu bandar udara ke bandar udara lain di dalam wilayah Negara Kesatuan Republik Indonesia pada rute dan jadwal penerbangan yang tidak tetap dan tidak teratur dengan membayar tarif yang merupakan kesepakatan antara penyedia jasa dan pengguna jasa angkutan udara dan tidak dipublikasikan.",
          
        },
        {
          "number": "51203",
          "name": "ANGKUTAN UDARA NIAGA BERJADWAL LUAR NEGERI UNTUK KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan kargo dengan pesawat udara dari satu bandar udara di dalam negeri ke bandar udara lain di luar wilayah Negara Kesatuan Republik Indonesia atau sebaliknya pada rute dan jadwal penerbangan yang tetap dan teratur dengan membayar sejumlah tarif tertentu yang dipublikasikan.",
          
        },
        {
          "number": "51204",
          "name": "ANGKUTAN UDARA NIAGA TIDAK BERJADWAL LUAR NEGERI UNTUK KARGO",
          "description": "Kelompok ini mencakup usaha pengangkutan kargo dengan pesawat udara dari satu bandar udara di dalam negeri ke bandar udara lain di luar wilayah Negara Kesatuan Republik Indonesia atau sebaliknya pada rute dan jadwal penerbangan yang tidak tetap dan tidak teratur dengan membayar tarif yang merupakan kesepakatan antara penyedia jasa dan pengguna jasa angkutan udara dan tidak dipublikasikan.",
          
        },
        {
          "number": "52101",
          "name": "PERGUDANGAN DAN PENYIMPANAN",
          "description": "Kelompok ini mencakup usaha yang melakukan kegiatan penyimpanan barang sementara sebelum barang tersebut di kirim ke tujuan akhir, dengan tujuan komersil.",
          
        },
        {
          "number": "52102",
          "name": "AKTIVITAS COLD STORAGE",
          "description": "Kelompok ini mencakup usaha penyimpanan barang yang memerlukan pendinginan dalam jangka waktu pengawetan tertentu atas dasar balas jasa (fee) atau kontrak, sebelum barang tersebut dikirim ke tujuan akhir. Termasuk juga di kelompok ini gudang pembekuan cepat (blast freezing).",
          
        },
        {
          "number": "52103",
          "name": "AKTIVITAS BOUNDED WAREHOUSING ATAU WILAYAH KAWASAN BERIKAT",
          "description": "Kelompok ini mencakup usaha atau kegiatan yang merupakan bagian dari wilayah pabean yang dengan peraturan pemerintah diberikan perlakuan khusus seperti berada di luar wilayah pabean dan dikelola oleh suatu badan berbentuk perusahaan yang melakukan kegiatan pergudangan, seperti Daerah Industri Pulau Batam.",
          
        },
        {
          "number": "52104",
          "name": "PENYIMPANAN MINYAK DAN GAS BUMI",
          "description": "Kelompok ini mencakup kegiatan usaha penyimpanan yang meliputi kegiatan penerimaan, pengumpulan, penampungan dan pengeluaran minyak bumi, bahan bakar minyak, bahan bakar gas, dan\\/atau hasil olahan pada lokasi di atas dan\\/atau di bawah permukaan tanah dan\\/atau permukaan air untuk tujuan komersial termasuk penyimpanan di zona perdagangan bebas.",
          
        },
        {
          "number": "52105",
          "name": "AKTIVITAS PENYIMPANAN B3",
          "description": "Kelompok ini mencakup usaha penyimpanan barang yang memerlukan tempat penyimpanan sesuai dengan sifat\\/karakteristik bahan berbahaya dan beracun.",
          
        },
        {
          "number": "52106",
          "name": "FASILITAS PENYIMPANAN SUMBER RADIASI PENGION",
          "description": "Kelompok ini mencakup usaha yang melakukan kegiatan penyimpanan sumber radiasi pengion (zat radioaktif dan pembangkit radiasi pengion).",
          
        },
        {
          "number": "52107",
          "name": "PENYIMPANAN YANG TERMASUK DALAM NATURALLY OCCURING RADIOACTIVE MATERIAL (NORM)",
          "description": "Kelompok ini mencakup usaha yang melakukan kegiatan penyimpanan zat radioaktif yang termasuk dalam Naturally Occuring Radioactive Material (NORM) yang berasal dari penambangan pengolahan minyak dan gas bumi, fosfat, timah, zirkon, dll. Termasuk dalam kelompok ini mencakup usaha terkait dengan distribusi bahan baku.",
          
        },
        {
          "number": "52108",
          "name": "PENGELOLA GUDANG SISTEM RESI GUDANG",
          "description": "Kelompok ini mencakup usaha kegiatan pengelolaan gudang yang menyediakan Gudang Sistem Resi Gudang (G-SRG) meliputi penyimpanan, pemeliharaan dan penerbitan resi gudang atas barang yang disimpan di gudang sistem resi gudang oleh pemilik\\/pihak lain.",
          
        },
        {
          "number": "52109",
          "name": "PERGUDANGAN DAN PENYIMPANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pergudangan dan penyimpanan lainnya yang belum tercakup dalam kelompok 52101 s.d. 52108. Termasuk kegiatan depo peti kemas yang melakukan penyimpanan dan\\/atau penumpukan peti kemas, dan dapat dilengkapi dengan fasilitas lain.",
          
        },
        {
          "number": "52211",
          "name": "AKTIVITAS TERMINAL DARAT",
          "description": "Kelompok ini mencakup kegiatan usaha terminal darat, seperti pelayanan parkir, penjadwalan keberangkatan kendaraan (angkutan umum) dan pelayanan naik turun penumpang.",
          
        },
        {
          "number": "52212",
          "name": "AKTIVITAS STASIUN KERETA API",
          "description": "Kelompok ini mencakup kegiatan usaha stasiun kereta api, seperti pelayanan parkir, penjadwalan keberangkatan kereta api dan pelayanan naik turun penumpang.",
          
        },
        {
          "number": "52213",
          "name": "AKTIVITAS JALAN TOL",
          "description": "Kelompok ini mencakup kegiatan usaha pelayanan lalu lintas kendaraan melalui jalan atau jembatan tol.",
          
        },
        {
          "number": "52214",
          "name": "AKTIVITAS PERPARKIRAN DI BADAN JALAN (ON STREET PARKING)",
          "description": "Kelompok ini mencakup kegiatan usaha penyelenggaraan parkir yang dilakukan di badan jalan.",
          
        },
        {
          "number": "52215",
          "name": "AKTIVITAS PERPARKIRAN DI LUAR BADAN JALAN (OFF STREET PARKING)",
          "description": "Kelompok ini mencakup kegiatan usaha penyelenggaraan parkir diluar badan jalan, seperti gedung parkir, lapangan parkir yang terdapat di gedung perkantoran, pusat perbelanjaan, rumah sakit dan jasa perpakiran di luar badan jalan lainnya.",
          
        },
        {
          "number": "52219",
          "name": "AKTIVITAS PENUNJANG ANGKUTAN DARAT LAINNYA",
          "description": "Kelompok ini mencakup kegiatan usaha penggantian (switching) dan pelangsiran (shunting), bantuan derek, pencairan gas untuk tujuan transportasi dan jasa penunjang angkutan darat lainnya.",
          
        },
        {
          "number": "52221",
          "name": "AKTIVITAS PELAYANAN KEPELABUHANAN LAUT",
          "description": "Kelompok ini mencakup kegiatan usaha pelayanan kepelabuhan laut, yang berhubungan dengan angkutan perairan untuk penumpang, hewan atau barang, seperti pengoperasian fasilitas terminal misalnya pelabuhan dan dermaga, navigasi, pemeriksaan barang muatan dalam kargo dan\\/atau peti kemas dengan menggunakan sumber radiasi pengion (zat radioaktif dan pembakit radiasi pengion), pelayaran dan kegiatan berlabuh, jasa penambatan, jasa pemanduan dan penundaan.",
          
        },
        {
          "number": "52222",
          "name": "AKTIVITAS PELAYANAN KEPELABUHANAN SUNGAI DAN DANAU",
          "description": "Kelompok ini mencakup kegiatan usaha penyelenggaraan pelabuhan sungai dan danau. Termasuk kegiatan yang berhubungan dengan angkutan perairan untuk penumpang, hewan atau barang, seperti pengoperasian fasilitas terminal misalnya pelabuhan dan dermaga, navigasi, pemeriksaan barang muatan dalam kargo dan\\/atau peti kemas dengan menggunakan sumber radiasi pengion (zat radioaktif dan pembakit radiasi pengion), pelayaran dan kegiatan berlabuh, jasa penambatan, jasa pemanduan dan penundaan.",
          
        },
        {
          "number": "52223",
          "name": "AKTIVITAS PELAYANAN KEPELABUHANAN PENYEBERANGAN",
          "description": "Kelompok ini mencakup kegiatan usaha penyelenggaraan pelabuhan penyeberangan. Termasuk kegiatan yang berhubungan dengan angkutan perairan untuk penumpang, hewan atau barang, seperti pengoperasian fasilitas terminal misalnya pelabuhan dan dermaga, navigasi, pemeriksaan barang muatan dalam kargo dan\\/atau peti kemas dengan menggunakan sumber radiasi pengion (zat radioaktif dan pembakit radiasi pengion), pelayaran dan kegiatan berlabuh, jasa penambatan, jasa pemanduan dan penundaan.",
          
        },
        {
          "number": "52224",
          "name": "AKTIVITAS PELABUHAN PERIKANAN",
          "description": "Kelompok ini mencakup kegiatan usaha pelayanan kepelabuhan perikanan, yang berhubungan dengan angkutan perairan untuk kegiatan perikanan, seperti pengoperasian fasilitas pelabuhan dan dermaga, pemeriksaan barang muatan dalam kargo dan\\/atau peti kemas dengan menggunakan sumber radiasi pengion (zat radioaktif dan pembakit radiasi pengion), pelayanan tambat dan labuh kapal perikanan dan jasa pemanduan, pelayanan bongkar muat ikan, dan lain-lain.",
          
        },
        {
          "number": "52225",
          "name": "AKTIVITAS PENGELOLAAN KAPAL",
          "description": "Kelompok ini mencakup kegiatan jasa pengelolaan kapal di bidang teknis kapal meliputi perawatan, persiapan docking, penyediaan suku cadang, perbekalan, pengawakan, pengurusan asuransi dan pengurusan sertifikasi kelautan kapal.",
          
        },
        {
          "number": "52229",
          "name": "AKTIVITAS PENUNJANG ANGKUTAN PERAIRAN LAINNYA",
          "description": "Kelompok ini mencakup kegiatan navigasi, pelayaran dan kegiatan berlabuh, kapal lighterage, kegiatan salvage\\/pekerjaan bawah air (PBA), kegiatan mercusuar, operasi penguncian jalur air dan lain-lain, termasuk kapal Floating Production, Storage and Offloading (FPSO) dan Floating, Storage and Offloading (FSO) dan jasa penunjang angkutan perairan lainnya.",
          
        },
        {
          "number": "52231",
          "name": "AKTIVITAS KEBANDARUDARAAN",
          "description": "Kelompok ini mencakup kegiatan atau usaha jasa pelayanan pesawat udara dan penumpang yang terdiri atas penyediaan dan\\/atau pengembangan fasilitas untuk kegiatan pelayanan pendaratan, lepas landas, manuver, parkir dan penyimpanan pesawat udara (PJP4U) termasuk semua fasilitas yang terdapat di landas pacu (runway), taxiway, apron serta penanganan kecelakaan pesawat udara dan pemadam kebakaran, fasilitas terminal untuk pelayanan angkutan penumpang (PJP2U) termasuk pelayanan pemakaian garbarata (aviobridge) dan pelayanan pemakaian tempat pelaporan keberangkatan (check-in counter), dan kegiatan atau usaha jasa terkait untuk menunjang kegiatan pelayanan operasi pesawat udara di bandar udara termasuk penyediaan hanggar pesawat udara, perbengkelan pesawat udara, pelayanan teknis penanganan pesawat udara di darat (ground handling), pelayanan penumpang dan bagasi, pemeriksaan barang muatan dalam kargo dan\\/atau peti kemas dengan menggunakan sumber radiasi pengion (zat radioaktif dan pembakit radiasi pengion), dan depo pengisian bahan bakar pesawat udara (DPPU).",
          
        },
        {
          "number": "52232",
          "name": "JASA PELAYANAN NAVIGASI PENERBANGAN",
          "description": "Kelompok ini mencakup kegiatan atau usaha Pelayanan Lalu Lintas Penerbangan (air traffic services\\/ATS) seperti pelayanan pemanduan lalu lintas penerbangan, informasi penerbangan dan kesiagaan, Pelayanan Telekomunikasi Penerbangan (aeronautical telecommunication\\/COM) seperti pelayanan aeronautika tetap, aeronautika bergerak dan radio navigasi aeronautika, Pelayanan informasi aeronautika (aeronautical information service\\/AIS) seperti pelayanan informasi aeronautika dan peta penerbangan, penerbitan dan penyebarluasan NOTAM (notice to airmen), pelayanan informasi aeronautika bandar udara, Pelayanan informasi meteorologi penerbangan (aeronautical meteorological service\\/MET), Pelayanan informasi pencarian dan pertolongan (search and rescue\\/SAR). Termasuk juga jasa penyediaan bangunan operasi dan bangunan penunjang kegiatan lalu lintas udara, misalnya menara pengawas, bangunan khusus penumpanan peralatan, briefing office untuk koordinasi terkait kegiatan lalu lintas penerbangan. Kegiatan yang berhubungan dengan pelayanan lalu lintas penerbangan, telekomunikasi penerbangan, konstruksi telekomunikasi navigasi penerbangan, instalasi peralatan navigasi penerbangan, dan pemberian informasi-informasi terkait penerbangan, misalnya pengoperasian fasilitas atau peralatan-peralatan navigasi penerbangan, telekomunikasi penerbangan, informasi aeronautika, informasi meteorologi penerbangan, dan informasi pencarian dan pertolongan, berikut fasilitas atau peralatan pendukungnya yaitu mekanikal, elektrikal, elektronika dan teknologi informasi.",
          
        },
        {
          "number": "52240",
          "name": "PENANGANAN KARGO (BONGKAR MUAT BARANG)",
          "description": "Kelompok ini mencakup usaha penanganan bongkar muat barang kargo dari angkutan darat, angkutan jalan, angkutan air dan angkutan atas dasar balas jasa (fee) atau kontrak. Kegiatannya mencakup kegiatan memuat dan membongkar barang kargo terlepas dari jenis angkutan yang digunakan, Kegiatan terminal kargo berikut fasilitas pendukungnya, kegiatan bongkar muat kapal dan kegiatan bongkar muat kendaraan dengan kereta gerbong barang.",
          
        },
        {
          "number": "52291",
          "name": "JASA PENGURUSAN TRANSPORTASI (JPT)",
          "description": "Kelompok ini mencakup usaha pengiriman dan atau pengepakan barang dalam volume besar, melalui angkutan kereta api, angkutan darat, angkutan laut maupun angkutan udara.",
          
        },
        {
          "number": "52292",
          "name": "AKTIVITAS EKSPEDISI MUATAN KERETA API DAN EKSPEDISI ANGKUTAN DARAT (EMKA &amp; EAD)",
          "description": "Kelompok ini mencakup usaha pengiriman dan atau pengepakan barang dalam volume besar, baik yang diangkut melalui kereta api maupun alat angkutan darat.",
          
        },
        {
          "number": "52293",
          "name": "AKTIVITAS EKSPEDISI MUATAN KAPAL (EMKL)",
          "description": "Kelompok ini mencakup usaha pengiriman dan atau pengepakan barang dalam volume besar, yang diangkut melalui angkutan laut.",
          
        },
        {
          "number": "52294",
          "name": "AKTIVITAS EKSPEDISI MUATAN PESAWAT UDARA (EMPU)",
          "description": "Kelompok ini mencakup usaha pengiriman dan atau pengepakan barang dalam volume besar, yang diangkut melalui alat angkutan udara.",
          
        },
        {
          "number": "52295",
          "name": "ANGKUTAN MULTIMODA",
          "description": "Kelompok ini mencakup angkutan barang dengan menggunakan paling sedikit 2 (dua) moda angkutan yang berbeda atas dasar 1 (satu) kontrak sebagai dokumen angkutan multimoda dari satu tempat diterimanya barang oleh badan usaha angkutan multimoda ke suatu tempat yang ditentukan untuk penyerahan barang kepada penerima barang angkutan multimoda. Badan usaha angkutan multimoda tidak semata-mata memberikan layanan angkutan barang dari tempat asal sampai ke tujuan, tetapi juga memberikan jasa tambahan berupa jasa pengurusan transportasi (freight forwarding), jasa pergudangan, jasa konsolidasi muatan, penyediaan ruang muatan, serta pengurusan kepabeanan untuk angkutan multimoda ke luar negeri dan ke dalam negeri.",
          
        },
        {
          "number": "52296",
          "name": "JASA PENUNJANG ANGKUTAN UDARA",
          "description": "Kelompok ini mencakup usaha yang secara langsung berhubungan dengan kegiatan angkutan udara niaga antara lain sistem reservasi melalui komputer (computerized reservation system), pemasaran dan penjualan tiket pesawat atau agen penjualan umum (ticket marketing and selling), pelayanan di darat untuk penumpang dan kargo (ground handling), penyewaan pesawat udara (aircraft leasing), organisasi perawatan pesawat udara (aircraft maintenance organization), agen pengurus persetujuan terbang (flight approval), regulated agent\\/known consignor.",
          
        },
        {
          "number": "52297",
          "name": "JASA KEAGENAN KAPAL\\/AGEN PERKAPALAN PERUSAHAAN PELAYARAN",
          "description": "Kelompok ini mencakup usaha untuk mengurus kepentingan kapal perusahan angkutan laut asing dan\\/atau kapal perusahaan angkutan laut nasional selama berada di Indonesia, mencakup pelaporan rencana dan realisasi kedatangan dan keberangkatan kapal, pengurusan jasa kepelabuhan, penunjukan perusahaan bongkar muat, penyelesaian dokumen kapal, pembukuan dan pencairan muatan, penerbitan konosemen untuk dan atas nama pemilik kapal, penyelesaian pengisian bunker bahan bakar minyak dan air tawar, serta pemenuhan kebutuhan perlengkapan dan perbekalan, dan pelaksanaan kegiatan lainnya yang disepakati pemiliki kapal atau operator kapal dengan pelaksana kegiatan keagenan kapal.",
          
        },
        {
          "number": "52298",
          "name": "AKTIVITAS TALLY MANDIRI",
          "description": "Kelompok ini mencakup usaha menghitung, mengukur, menimbang dan membuat catatan mengenai muatan, untuk kepentingan pemilik muatan dan atau pengangkut. Termasuk kegiatan tally mandiri di pelabuhan.",
          
        },
        {
          "number": "52299",
          "name": "AKTIVITAS PENUNJANG ANGKUTAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha pengiriman dan\\/atau pengepakan barang dalam volume besar lainnya, selain yang tercakup dalam kelompok 52291 s.d. 52298, seperti jasa pengiriman dan\\/atau pengepakan benda berharga asal muatan kapal yang tenggelam dan benda budaya lainnya. Jasa pengepakan atas dasar balas jasa (fee) atau kontrak yang tidak ada hubungannya dengan kegiatan pengangkutan dimasukkan dalam Jasa Pengepakan (82920).",
          
        },
        {
          "number": "47892",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BAHAN BAKAR MINYAK, GAS, MINYAK PELUMAS DAN BAHAN BAKAR LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bahan bakar minyak tanah, Premium, Premix dan Solar, Gas serta minyak pelumas dan bahan bakar lainnya yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47893",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG ANTIK",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang antik yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti guci antik, bokor antik, lampu gantung antik dan meja\\/kursi marmer antik.",
          
        },
        {
          "number": "47894",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG BEKAS PERLENGKAPAN RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang bekas perlengkapan rumah tangga yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti meja bekas, kursi bekas, lemari bekas, tempat tidur bekas, bufet bekas dan perangkat untuk makan dan minum bekas. Termasuk linen rumah tangga, kelambu, kain kasur, kain bantal, gordin, kain pel, keset kamar mandi, sajadah, permadani, karpet dan tenda.",
          
        },
        {
          "number": "47895",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR PAKAIAN, ALAS KAKI, PERLENGKAPAN PAKAIAN DAN BARANG PERLENGKAPAN PRIBADI BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran pakaian, alas kaki, pelengkap pakaian dan barang perlengkapan pribadi bekas yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti baju bekas, celana bekas, mantel bekas, sepatu bekas, selendang dan topi bekas, jam tangan bekas, barang perhiasan bekas.",
          
        },
        {
          "number": "47896",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG LISTRIK DAN ELEKTRONIK BEKAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang listrik dan elektronik bekas yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar), seperti radio bekas, tape recorder bekas, televisi bekas, mesin cuci bekas, seterika listrik bekas dan pengering\\/pengeriting rambut bekas.",
          
        },
        {
          "number": "47897",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG BEKAS CAMPURAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai macam barang bekas campuran yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar).",
          
        },
        {
          "number": "47899",
          "name": "PERDAGANGAN ECERAN KAKI LIMA DAN LOS PASAR BARANG LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang lainnya yang dilakukan di pinggir jalan umum (kaki lima), serambi muka (emper) toko atau tempat tetap di pasar yang dapat dipindah-pindah atau didorong (los pasar) yang belum diklasifikasikan dalam kelompok 47891 s.d. 47897.",
          
        },
        {
          "number": "47911",
          "name": "PERDAGANGAN ECERAN MELALUI MEDIA UNTUK KOMODITI MAKANAN, MINUMAN, TEMBAKAU, KIMIA, FARMASI, KOSMETIK DAN ALAT LABORATORIUM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang makanan, minuman, tembakau, kimia, farmasi, kosmetik dan alat laboratorium melalui pesanan (surat, telepon atau internet) dan barang akan dikirim kepada pembeli sesuai dengan barang yang diinginkan berdasarkan katalog, iklan, model, telepon, radio, televisi, internet, media massa dan sejenisnya.",
          
        },
        {
          "number": "47912",
          "name": "PERDAGANGAN ECERAN MELALUI MEDIA UNTUK KOMODITI TEKSTIL, PAKAIAN, ALAS KAKI DAN BARANG KEPERLUAN PRIBADI",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang tekstil, pakaian, alas kaki dan barang keperluan pribadi melalui pesanan (surat, telepon atau internet) dan barang akan dikirim kepada pembeli sesuai dengan barang yang diinginkan berdasarkan katalog, iklan, model, telepon, radio, televisi, internet, media massa dan sejenisnya.",
          
        },
        {
          "number": "47913",
          "name": "PERDAGANGAN ECERAN MELALUI MEDIA UNTUK BARANG PERLENGKAPAN RUMAH TANGGA DAN PERLENGKAPAN DAPUR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang keperluan rumah tangga dan perlengkapan dapur melalui pesanan (surat, telepon atau internet) dan barang akan dikirim kepada pembeli sesuai dengan barang yang diinginkan berdasarkan katalog, iklan, model, telepon, radio, televisi, internet, media massa dan sejenisnya.",
          
        },
        {
          "number": "47914",
          "name": "PERDAGANGAN ECERAN MELALUI MEDIA UNTUK BARANG CAMPURAN SEBAGAIMANA TERSEBUT DALAM 47911 S.D. 47913",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai jenis barang campuran sebagaimana tersebut dalam 47911 s.d. 47913 melalui pesanan (surat, telepon atau internet) dan barang akan dikirim kepada pembeli sesuai dengan barang yang diinginkan berdasarkan katalog, iklan, model, telepon, radio, televisi, internet, media massa dan sejenisnya.",
          
        },
        {
          "number": "47919",
          "name": "PERDAGANGAN ECERAN MELALUI MEDIA UNTUK BERBAGAI MACAM BARANG LAINNYA",
          "description": "Kelompok ini mencakup usaha perdagangan eceran berbagai barang lainnya melalui pesanan dan barang akan dikirim kepada pembeli sesuai dengan barang yang diinginkan berdasarkan katalog, model, telepon, tv, internet, media massa, dan sejenisnya.",
          
        },
        {
          "number": "47920",
          "name": "PERDAGANGAN ECERAN ATAS DASAR BALAS JASA (FEE) ATAU KONTRAK",
          "description": "Kelompok ini mencakup usaha pedagang perantara (makelar), seperti agen komisi perdagangan eceran yang menerima komisi dari pedagang eceran lainnya yang memperdagangkan barang-barang di dalam negeri atas nama pihak lain.",
          
        },
        {
          "number": "47991",
          "name": "PERDAGANGAN ECERAN KELILING KOMODITI MAKANAN DARI HASIL PERTANIAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran komoditi makanan dari hasil pertanian yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47992",
          "name": "PERDAGANGAN ECERAN KELILING KOMODITI MAKANAN, MINUMAN ATAU TEMBAKAU HASIL INDUSTRI PENGOLAHAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran komoditi makanan, minuman atau tembakau dari hasil industri pengolahan yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47993",
          "name": "PERDAGANGAN ECERAN KELILING BAHAN KIMIA, FARMASI, KOSMETIK DAN ALAT LABORATORIUM",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bahan kimia, farmasi, kosmetik dan alat laboratorium yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47994",
          "name": "PERDAGANGAN ECERAN KELILING TEKSTIL, PAKAIAN, ALAS KAKI DAN BARANG KEPERLUAN PRIBADI",
          "description": "Kelompok ini mencakup usaha perdagangan eceran tekstil, pakaian, alas kaki dan barang keperluan pribadi yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47995",
          "name": "PERDAGANGAN ECERAN KELILING PERLENGKAPAN RUMAH TANGGA DAN PERLENGKAPAN DAPUR",
          "description": "Kelompok ini mencakup usaha perdagangan eceran perlengkapan rumah tangga dan perlengkapan dapur yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47996",
          "name": "PERDAGANGAN ECERAN KELILING BAHAN BAKAR DAN MINYAK PELUMAS",
          "description": "Kelompok ini mencakup usaha perdagangan eceran bahan bakar dan minyak pelumas yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47997",
          "name": "PERDAGANGAN ECERAN KELILING KERTAS, BARANG DARI KERTAS, ALAT TULIS, BARANG CETAKAN, ALAT OLAHRAGA, ALAT MUSIK, ALAT FOTOGRAFI DAN KOMPUTER",
          "description": "Kelompok ini mencakup usaha perdagangan eceran kertas, barang dari kertas, alat tulis, barang cetakan, alat olahraga, alat musik, alat fotografi dan komputer yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47998",
          "name": "PERDAGANGAN ECERAN KELILING BARANG KERAJINAN, MAINAN ANAK- ANAK DAN LUKISAN",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang kerajinan, mainan anak-anak dan lukisan yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan.",
          
        },
        {
          "number": "47999",
          "name": "PERDAGANGAN ECERAN BUKAN DI TOKO, KIOS, KAKI LIMA DAN LOS PASAR LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha perdagangan eceran barang lainnya yang selain kelompok 47991 s.d. 47998 yang dilakukan dengan cara menjajakannya berkeliling dan tidak mempunyai tempat yang tetap atau menjualnya mendatangi rumah ke rumah masyarakat\\/langganan. Termasuk kegiatan perdagangan melalui sistem penjualan langsung atau pendistribusian khusus seperti single level marketing dan multi level marketing, serta agen komisi perdagangan eceran.",
          
        },
        {
          "number": "49110",
          "name": "ANGKUTAN JALAN REL UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang antarkota dengan kereta. Termasuk pengoperasian kereta tidur atau kereta makan sebagai operasi yang terpadu dari perusahaan kereta api.Kelompok ini tidak mencakup angkutan kereta untuk penumpang perkotaan (49441).",
          
        },
        {
          "number": "49120",
          "name": "ANGKUTAN JALAN REL UNTUK BARANG",
          "description": "Kelompok ini mencakup usaha pengangkutan barang melalui jalur utama jaringan rel kereta api jarak jauh maupun jalur khusus angkutan barang jarak pendek, seperti barang hasil pertanian pertambangan dan penggalian (termasuk bahan bakar minyak, minyak bumi, hasil olahan, LPG, LNG dan CNG), angkutan barang berbahaya, limbah bahan berbahaya dan beracun, serta industri dan lainnya.",
          
        },
        {
          "number": "49211",
          "name": "ANGKUTAN BUS ANTARKOTA ANTARPROVINSI (AKAP)",
          "description": "Kelompok ini mencakup usaha pengangkutan dengan menggunakan kendaraan bermotor bus umum tingkat, maxi, besar, sedang, dan\\/atau kecil berdasarkan jadwal tertentu dan dalam trayek AKAP yang ditetapkan.",
          
        },
        {
          "number": "49212",
          "name": "ANGKUTAN BUS PERBATASAN",
          "description": "Kelompok ini mencakup usaha pengangkutan pada kabupaten\\/kota yang berbatasan langsung menggunakan kendaraan bermotor bus umum tingkat, maxi, besar, sedang, dan\\/atau kecil dan belum terlayani dalam trayek AKAP\\/AKDP.",
          
        },
        {
          "number": "49213",
          "name": "ANGKUTAN BUS ANTARKOTA DALAM PROVINSI (AKDP)",
          "description": "Kelompok ini mencakup usaha pengangkutan dengan menggunakan mobil bus umum tingkat, maxi, besar, dan\\/atau sedang dengan jadwal dan dalam trayek AKDP yang ditetapkan.",
          
        },
        {
          "number": "49214",
          "name": "ANGKUTAN BUS KOTA",
          "description": "Kelompok ini mencakup usaha pengangkutan dari satu tempat ke tempat lain dalam satu daerah kota atau wilayah ibu kota kabupaten atau dalam daerah khusus ibu kota dengan menggunakan mobil bus umum (bus besar\\/sedang) yang terikat dalam trayek.",
          
        },
        {
          "number": "49215",
          "name": "ANGKUTAN BUS LINTAS BATAS NEGARA",
          "description": "Kelompok ini mencakup usaha pengangkutan dari satu kota ke kota lain yang melewati batas negara dengan menggunakan mobil bus umum (besar\\/sedang) yang terikat dalam trayek.",
          
        },
        {
          "number": "49216",
          "name": "ANGKUTAN BUS KHUSUS",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang yang mempunyai asal dan\\/atau tujuan tetap, meliputi angkutan antar jemput, angkutan karyawan, angkutan permukiman dan angkutan pemadu moda menggunakan mobil bus umum (besar\\/sedang). Termasuk pengoperasian shuttle bus.",
          
        },
        {
          "number": "49219",
          "name": "ANGKUTAN BUS DALAM TRAYEK LAINNYA",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang yang menggunakan bus dalam trayek lainnya yang tidak diklasifikasikan di tempat lain, seperti pengoperasian angkutan bus dengan jurusan kota ke bandara atau kota ke stasiun.",
          
        },
        {
          "number": "49221",
          "name": "ANGKUTAN BUS PARIWISATA",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dengan menggunakan kendaraan bus umum untuk keperluan pariwisata atau keperluan lain di luar pelayanan angkutan dalam trayek, seperti untuk keperluan perjalanan wisata perorangan atau kelompok menggunakan mobil bus umum kecil, sedang, besar, maxi, tempel, dan tingkat.",
          
        },
        {
          "number": "49229",
          "name": "ANGKUTAN BUS TIDAK DALAM TRAYEK LAINNYA",
          "description": "Kelompok ini mencakup angkutan darat bus tidak dalam trayek, selain angkutan bus pariwisata, seperti angkutan bus carter, ekskursi, dan angkutan bus berkala lainnya.",
          
        },
        {
          "number": "49300",
          "name": "ANGKUTAN MELALUI SALURAN PIPA",
          "description": "Kelompok ini mencakup usaha pengangkutan minyak dan gas bumi (minyak bumi, bahan bakar minyak, hasil olahan dan gas bumi), cairan, air, lumpur, dan komoditas lainnya dari tempat pembuat (produsen) ke tempat pemakai (konsumen) dengan saluran pipa atas dasar balas jasa (fee) atau kontrak. Termasuk pengoperasian gardu pompa.",
          
        },
        {
          "number": "49411",
          "name": "ANGKUTAN PERBATASAN BUKAN BUS, DALAM TRAYEK",
          "description": "Kelompok ini mencakup usaha pengangkutan orang pada kabupaten\\/kota yang berbatasan langsung menggunakan kendaraan bermotor bukan bus dan belum terlayani dalam trayek AKAP\\/AKDP.",
          
        },
        {
          "number": "49412",
          "name": "ANGKUTAN ANTARKOTA DALAM PROVINSI (AKDP) BUKAN BUS, DALAM TRAYEK",
          "description": "Kelompok ini mencakup usaha pengangkutan orang dengan menggunakan kendaraan bermotor bukan bus dengan jadwal dan dalam trayek AKDP yang ditetapkan.",
          
        },
        {
          "number": "49413",
          "name": "ANGKUTAN PERKOTAAN BUKAN BUS, DALAM TRAYEK",
          "description": "Kelompok ini mencakup usaha pengangkutan orang dari satu tempat ke tempat lain dalam kawasan perkotaan dengan menggunakan kendaraan bermotor bukan bus yang terikat dalam trayek.",
          
        },
        {
          "number": "49414",
          "name": "ANGKUTAN PERDESAAN BUKAN BUS, DALAM TRAYEK",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dari satu tempat ke tempat lain dalam satu daerah kabupaten, yang tidak bersinggungan dengan trayek angkutan perkotaan, dengan menggunakan kendaraan bermotor bukan bus yang terikat dalam trayek.",
          
        },
        {
          "number": "49415",
          "name": "ANGKUTAN DARAT KHUSUS BUKAN BUS",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang yang mempunyai asal dan\\/atau tujuan tetap, meliputi angkutan permukiman dan angkutan pemadu moda menggunakan kendaraan bermotor bukan bus.",
          
        },
        {
          "number": "49419",
          "name": "ANGKUTAN DARAT BUKAN BUS UNTUK PENUMPANG LAINNYA, DALAM TRAYEK",
          "description": "Kelompok ini mencakup pengangkutan darat untuk penumpang lainnya melalui sistem angkutan perkotaan atau perdesaan. Angkutan tersebut dalam trayek melalui rute normal dan menaikkan dan menurunkan penumpang pada tempat dan waktu yang tepat.",
          
        },
        {
          "number": "49421",
          "name": "ANGKUTAN TAKSI",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dengan menggunakan mobil penumpang yang diberi tanda khusus dan dilengkapi dengan argometer yang melayani angkutan dari pintu ke pintu, dengan wilayah operasi terbatas.",
          
        },
        {
          "number": "49422",
          "name": "ANGKUTAN SEWA",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dengan menggunakan mobil penumpang umum yang melayani angkutan dari pintu ke pintu, dalam wilayah operasi yang tidak dibatasi oleh wilayah administratif dan tarif berdasarkan kesepakatan antara pengguna dengan penyedia angkutan. Termasuk layanan carter, ekskursi, dan angkutan carter musiman lainnya serta penyewaan mobil atau angkutan pribadi lainnya dengan sopir.Kelompok ini juga mencakup angkutan sewa bajaj, kancil, bentor dan lain-lain.Kelompok ini tidak mencakup angkutan taksi (49421) dan angkutan ojek motor (49424).",
          
        },
        {
          "number": "49423",
          "name": "ANGKUTAN TIDAK BERMOTOR UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dengan kendaraan tidak bermotor, seperti angkutan delman\\/bendi\\/andong\\/dokar, becak dan sepeda.Kelompok ini tidak mencakup angkutan tidak bermotor untuk penumpang di kawasan wisata (49425).",
          
        },
        {
          "number": "49424",
          "name": "ANGKUTAN OJEK MOTOR",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dengan kendaraan bermotor roda dua seperti ojek sepeda motor dan ojek online.",
          
        },
        {
          "number": "49425",
          "name": "ANGKUTAN DARAT WISATA",
          "description": "Kelompok ini mencakup pengoperasian angkutan darat berupa kendaraan bermotor maupun tidak bermotor di destinasi\\/kawasan pariwisata.",
          
        },
        {
          "number": "49426",
          "name": "ANGKUTAN SEWA KHUSUS",
          "description": "Kelompok ini mencakup usaha pelayanan angkutan dari pintu ke pintu dengan pengemudi, menggunakan kendaraan bermotor umum (sedan\\/bukan sedan), memiliki wilayah operasi dalam wilayah perkotaan, dari dan ke bandar udara, pelabuhan, atau simpul transportasi lainnya serta pemesanan menggunakan aplikasi berbasis teknologi informasi, dengan besaran tarif tercantum dalam aplikasi.Kelompok ini tidak mencakup angkutan taksi (49421) dan angkutan ojek motor (49424).",
          
        },
        {
          "number": "49429",
          "name": "ANGKUTAN DARAT LAINNYA UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup pengoperasian angkutan darat lainnya untuk penumpang, seperti usaha angkutan antar jemput, angkutan karyawan, angkutan pemukiman dan angkutan pemadu moda menggunakan kendaraan bermotor bukan bus.",
          
        },
        {
          "number": "49431",
          "name": "ANGKUTAN BERMOTOR UNTUK BARANG UMUM",
          "description": "Kelompok ini mencakup operasional angkutan barang dengan kendaraan bermotor dan dapat mengangkut lebih dari satu jenis barang, seperti angkutan dengan truk, pick up, bak terbuka dan bak tertutup (box).",
          
        },
        {
          "number": "49432",
          "name": "ANGKUTAN BERMOTOR UNTUK BARANG KHUSUS",
          "description": "Kelompok ini mencakup operasional angkutan barang dengan kendaraan bermotor untuk barang yang secara khusus mengangkut satu jenis barang, seperti angkutan bahan bakar minyak, minyak bumi, hasil olahan, LPG, LNG dan CNG, angkutan barang berbahaya, limbah bahan berbahaya dan beracun, angkutan barang alat-alat berat, angkutan peti kemas, angkutan tumbuhan hidup, angkutan hewan hidup dan pengangkutan kendaraan bermotor.",
          
        },
        {
          "number": "49433",
          "name": "ANGKUTAN TIDAK BERMOTOR UNTUK BARANG UMUM",
          "description": "Kelompok ini mencakup usaha pengangkutan barang dengan kendaraan tidak bermotor, seperti gerobak, pedati dan hewan\\/ternak beban.",
          
        },
        {
          "number": "49441",
          "name": "ANGKUTAN JALAN REL PERKOTAAN",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang dengan berbagai moda angkutan jalan rel perkotaan, seperti trem, monorel, kereta listrik, kereta bawah tanah, kereta layang dan lain-lain. Mencakup juga pengoperasian kereta gantung, kereta api bukit, kereta kabel (gondola) dan lainnya apabila merupakan bagian dari sistem trayek perkotaan. Termasuk angkutan rel dengan jurusan kota ke bandara atau kota ke stasiun.",
          
        },
        {
          "number": "49442",
          "name": "ANGKUTAN JALAN REL WISATA",
          "description": "Kelompok ini mencakup pengoperasian kereta yang menggunakan jalur khusus untuk wisata seperti angkutan jalan rel di kawasan wisata, seperti kereta wisata mak itam di Sumatera Barat, kereta wisata danau Singkarak Sumatera Barat, kereta wisata lori Kaliraga Jawa Timur, kereta wisata Ambawara Jawa Tengah.",
          
        },
        {
          "number": "49450",
          "name": "ANGKUTAN JALAN REL LAINNYA",
          "description": "Kelompok ini mencakup pengoperasian kereta gantung, kereta api bukit, kereta kabel (gondola) dan lainnya apabila merupakan bukan bagian dari sistem trayek perkotaan.",
          
        },
        {
          "number": "50111",
          "name": "ANGKUTAN LAUT DALAM NEGERI LINER DAN TRAMPER UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang melalui laut dengan menggunakan kapal laut antarpelabuhan dalam negeri dengan pelayanan angkutan laut yang dilakukan dengan trayek secara tetap dan teratur (liner) dengan berjadwal dan menyebutkan pelabuhan singgah, atau trayek tidak tetap dan tidak teratur (tramper). Termasuk kegiatan kapal penumpang yang dioperasikan perusahaan pemerintah dan swasta lainnya, serta usaha persewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "50112",
          "name": "ANGKUTAN LAUT PERAIRAN PELABUHAN DALAM NEGERI UNTUK PENUMPANG",
          "description": "Kelompok ini mencakup usaha pengangkutan penumpang melalui laut pada pelabuhan-pelabuhan yang belum memiliki fasilitas lengkap, dengan menggunakan angkutan perairan pelabuhan (rede transport) sebagai penghubung dari dermaga (pelabuhan) ke kapal atau sebaliknya, dari kapal utama ke kapal lainnya di perairan pelabuhan atau sebaliknya, dan\\/atau dari dermaga dan\\/atau kapal ke bangunan\\/instalasi di perairan laut atau sebaliknya.",
          
        },
        {
          "number": "50113",
          "name": "ANGKUTAN LAUT DALAM NEGERI UNTUK WISATA",
          "description": "Kelompok ini mencakup usaha pengangkutan untuk wisata atau untuk rekreasi di laut, dan\\/atau wisata bahari. Termasuk usaha penyewaan angkutan laut berikut operatornya.",
          
        },
        {
          "number": "56109",
          "name": "RESTORAN DAN PENYEDIAAN MAKANAN KELILING LAINNYA",
          "description": "Kelompok ini mencakup kegiatan yang menyediakan jasa menyajikan makanan lainnya yang belum termasuk dalam kelompok 56101 - 56104, seperti penyediaan jasa makan siap saji di pasar, supermarket, di sebuah lokasi umum dan atau berhubungan dengan angkutan dimana aktivitas utamanya berhubungan dengan menyajikan makanan dan minuman. Termasuk usaha cake dan bakery dengan jasa pelayanan, food court, food truck, food stall.",
          
        },
        {
          "number": "56210",
          "name": "JASA BOGA UNTUK SUATU EVENT TERTENTU (EVENT CATERING)",
          "description": "Kelompok ini mencakup kegiatan yang menyediakan jasa makanan atas dasar kontrak perjanjian dengan pelanggan, lokasi ditentukan oleh pelanggan untuk suatu event tertentu.Kelompok ini mencakup usaha jasa makanan jadi (siap dikonsumsi) yang terselenggara melalui pesanan- pesanan kantor, perayaan, pesta, seminar, rapat, dan sejenisnya. Biasanya makanan saji diantar ke tempat kerja, pesta, seminar, rapat, dan sejenisnya berikut pramusaji yang akan melayani tamu-tamu\\/peserta seminar atau rapat pada saat pesta, seminar\\/kegiatan acara berlangsung.",
          
        },
        {
          "number": "56290",
          "name": "PENYEDIAAN JASA BOGA PERIODE TERTENTU",
          "description": "Kelompok ini mencakup kegiatan yang menyediakan jasa boga\\/katering yaitu jasa penyediaan makanan atas dasar kontrak perjanjian dengan pelanggan, untuk periode waktu tertentu. Kegiatannya mencakup kontraktor jasa penyedia makanan (misalnya untuk perusahaan transportasi), jasa katering berdasarkan perjanjian di fasilitas olahraga dan fasilitas sejenis, seperti kantin atau kafetaria (misalnya untuk pabrik, perkantoran, rumahsakit, atau sekolah) atas dasar konsesi atau jasa katering yang melayani rumah tangga. Termasuk dalam kelompok ini jasa katering Industri yang melayani jangka panjang tempat pengeboran minyak dan lokasi tambang, rumah sakit, jasa angkutan.",
          
        },
        {
          "number": "56301",
          "name": "BAR",
          "description": "Kelompok ini mencakup usaha yang kegiatannya menghidangkan minuman beralkohol dan nonalkohol serta makanan kecil untuk umum di tempat usahanya dan telah mendapatkan ijin dari instansi yang membinanya.",
          
        },
        {
          "number": "56302",
          "name": "KELAB MALAM ATAU DISKOTEK YANG UTAMANYA MENYEDIAKAN MINUMAN",
          "description": "Kelompok ini mencakup suatu usaha penyediaan jasa pelayanan minum sebagai kegiatan utama di mana menyediakan juga tempat dan fasilitas untuk menari dengan diiringi musik hidup, atraksi pertunjukkan lampu sebagai layanan tambahan serta pramuria.",
          
        },
        {
          "number": "56303",
          "name": "RUMAH MINUM\\/KAFE",
          "description": "Kelompok ini mencakup jenis usaha penyediaan utamanya minuman baik panas maupun dingin dikonsumsi di tempat usahanya, bertempat di sebagian atau seluruh bangunan permanen, baik dilengkapi dengan peralatan\\/perlengkapan untuk proses pembuatan dan penyimpanan maupun tidak dan baik telah mendapatkan surat keputusan sebagai rumah minum dari instansi yang membinanya maupun belum.",
          
        },
        {
          "number": "56304",
          "name": "KEDAI MINUMAN",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan minum yang utamanya menyajikan minuman siap dikonsumsi yang melalui proses pembuatan di tempat tetap yang dapat dipindah-pindahkan atau dibongkar pasang, biasanya dengan menggunakan tenda, seperti kedai kopi, kedai jus dan minuman lainnya.",
          
        },
        {
          "number": "56305",
          "name": "RUMAH\\/KEDAI OBAT TRADISIONAL",
          "description": "Kelompok ini mencakup jenis usaha yang bertempat di sebagian atau seluruh bangunan permanen yang menjual dan menyajikan minuman jamu atau obat tradisional untuk umum di tempat usahanya, baik dilengkapi dengan peralatan\\/perlengkapan untuk proses pembuatan dan penyimpanan maupun tidak dan baik telah mendapatkan surat keputusan sebagai rumah jamu dari instansi yang membinanya maupun belum.Kelompok ini juga mencakup usaha penyediaan jasa pelayanan minum yang menyajikan minuman jamu siap dikonsumsi yang melalui proses pembuatan di tempat tetap yang dapat dipindah- pindahkan atau dibongkar pasang, biasanya dengan menggunakan tenda, seperti kedai jamu.",
          
        },
        {
          "number": "56306",
          "name": "PENYEDIAAN MINUMAN KELILING\\/TEMPAT TIDAK TETAP",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan minum yang menyajikan minuman siap dikonsumsi yang didahului dengan proses pembuatan dan biasanya dijual dengan cara berkeliling, seperti penyedia minuman es doger, penyedia minuman es cincau, usaha jamu gendong dan lain-lain.",
          
        },
        {
          "number": "58110",
          "name": "PENERBITAN BUKU",
          "description": "Kelompok ini mencakup kegiatan penerbitan buku dalam bentuk cetak, elektronik (CD, CD-ROM, DVD dan lain-lain), audio atau pada internet. Kegiatan usahanya meliputi penerbitan buku, brosur, leaflet dan publikasi sejenis, termasuk penerbitan kamus dan ensiklopedia, penerbitan atlas, peta dan grafik, penerbitan buku dalam bentuk audio dan penerbitan ensiklopedia dan lain-lain dalam CD-ROM dan publikasi lainnya. Termasuk penerbitan elektroniknya.",
          
        },
        {
          "number": "58120",
          "name": "PENERBITAN DIREKTORI DAN MAILING LIST",
          "description": "Kelompok ini mencakup penerbitan daftar informasi (database). Penerbitan ini dapat dipublikasikan baik dalam bentuk elektronik atau cetak. Kegiatan usahanya meliputi penerbitan daftar alamat (mailing list), penerbitan buku telepon dan penerbitan direktori dan kompilasi lainnya, seperti perkara hukum, kompendium farmasi dan lain-lain.",
          
        },
        {
          "number": "58130",
          "name": "PENERBITAN SURAT KABAR, JURNAL DAN BULETIN ATAU MAJALAH",
          "description": "Kelompok ini mencakup usaha penerbitan surat kabar dan surat kabar iklan, jurnal, buletin, majalah umum dan teknis, komik, termasuk penerbitan jadwal siaran radio dan televisi dan sebagainya. Informasi ini dapat dipublikasikan dalam bentuk elektronik maupun cetak, termasuk di internet.",
          
        },
        {
          "number": "58190",
          "name": "AKTIVITAS PENERBITAN LAINNYA",
          "description": "Kelompok ini mencakup usaha penerbitan foto-foto, seni grafis dan kartu pos, formulir, poster, reproduksi karya seni (lukisan) dan material periklanan dan materi cetakan lainnya. Termasuk penerbitan statistik dan informasi lainnya secara online dan rekaman mikro film.",
          
        },
        {
          "number": "58200",
          "name": "PENERBITAN PIRANTI LUNAK (SOFTWARE)",
          "description": "Kelompok ini mencakup kegiatan usaha penerbitan perangkat lunak yang siap pakai (bukan atas dasar pesanan), seperti sistem operasi, aplikasi bisnis dan lainnya dan video game untuk semua platform sistem operasi.",
          
        },
        {
          "number": "59111",
          "name": "AKTIVITAS PRODUKSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH PEMERINTAH",
          "description": "Kelompok ini mencakup usaha pembuatan dan produksi gambar bergerak, film, video, animasi, program televisi atau iklan bergerak televisi yang dikelola oleh pemerintah atas dasar balas jasa juga usaha pembuatan film untuk televisi dan jasa pengiriman film dan agen pembukuan film.Kelompok ini tidak mecakup aktivitas duplikasi film dan reproduksi audio\\/video dari master copies (18202) dan animasi pascaproduksi (5912).",
          
        },
        {
          "number": "59112",
          "name": "AKTIVITAS PRODUKSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH SWASTA",
          "description": "Kelompok ini mencakup usaha pembuatan dan produksi gambar bergerak, film, video, animasi, program televisi atau iklan bergerak televisi yang dikelola oleh swasta atas dasar balas jasa juga usaha pembuatan film untuk televisi dan jasa pengiriman film dan agen pembukuan film.Kelompok ini tidak mecakup aktivitas duplikasi film dan reproduksi audio\\/video dari master copies (18202) dan animasi pascaproduksi (5912).",
          
        },
        {
          "number": "59121",
          "name": "AKTIVITAS PASCAPRODUKSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH PEMERINTAH",
          "description": "Kelompok ini mencakup kegiata usaha pascaproduksi, seperti editing, cutting, dubbing, titling dan credit film, closed captioning, pembuatan grafis komputer, animasi dan special effects dan transfer film atau tape termasuk kegiatan studio perfilman dan studio khusus film animasi yang melakukan pengembangan dan pemrosesan film dan reproduksi film untuk distribusi ke bioskop serta kegiatan dokumentasi potongan film atau gambar bergerak yang dikelola oleh pemerintah atas dasar balas jasa.",
          
        },
        {
          "number": "59122",
          "name": "AKTIVITAS PASCAPRODUKSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH SWASTA",
          "description": "Kelompok ini mencakup kegiata usaha pascaproduksi, seperti editing, cutting, dubbing, titling dan credit film, closed captioning, pembuatan grafis komputer, animasi dan special effects dan transfer film atau tape termasuk kegiatan studio perfilman dan studio khusus film animasi yang melakukan pengembangan dan pemrosesan film dan reproduksi film untuk distribusi ke bioskop serta kegiatan dokumentasi potongan film atau gambar bergerak yang dikelola oleh swasta atas dasar balas jasa.",
          
        },
        {
          "number": "59131",
          "name": "AKTIVITAS DISTRIBUSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH PEMERINTAH",
          "description": "Kelompok ini mencakup usaha pendistribusian film, video tape, DVD dan produksi sejenis untuk bioskop gambar bergerak atau film layar lebar, jaringan dan stasiun televisi dan penyelenggara pameran yang dikelola oleh pemerintah atas dasar balas jasa. Termasuk kegiatan perolehan hak distribusi gambar bergerak, film, video tape dan DVD.",
          
        },
        {
          "number": "59132",
          "name": "AKTIVITAS DISTRIBUSI FILM, VIDEO DAN PROGRAM TELEVISI OLEH SWASTA",
          "description": "Kelompok ini mencakup usaha pendistribusian film, video tape, DVD dan produksi sejenis untuk bioskop gambar bergerak atau film layar lebar, jaringan dan stasiun televisi dan penyelenggara pameran yang dikelola oleh swasta atas dasar balas jasa. Termasuk kegiatan perolehan hak distribusi gambar bergerak, film, video tape dan DVD.",
          
        },
        {
          "number": "59140",
          "name": "AKTIVITAS PEMUTARAN FILM",
          "description": "Kelompok ini mencakup usaha penyelenggara pemutaran film atau video tape di bioskop, di ruang terbuka atau di tempat pemutaran film lainnya dan kegiatan kelab cinema yang dikelola baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "59201",
          "name": "AKTIVITAS PEREKAMAN SUARA",
          "description": "Kelompok ini mencakup usaha pembuatan master rekaman suara asli di piringan hitam, pita tape, compact disc (CD) dan sejenisnya dan kegiatan jasa perekaman suara di studio atau tempat lain, termasuk hasil pemrograman radio yang direkam (tidak langsung), audio untuk film, televisi dan lain-lain. Penerbitan rekaman film dan video termasuk kelompok 59131 dan 59132. Penerbitan perangkat lunak komputer termasuk kelompok 58200.",
          
        },
        {
          "number": "59202",
          "name": "AKTIVITAS PENERBITAN MUSIK DAN BUKU MUSIK",
          "description": "Kelompok ini mencakup usaha penerbitan musik, seperti perolehan dan pencatatan hak cipta untuk gubahan musik, promosi, pengesahan dan penggunaan gubahan dalam perekaman, radio, televisi, film, pertunjukkan langsung, media cetak dan lainnya dan pendistribusian rekaman suara ke pedagang besar, eceran atau langsung ke masyarakat. Termasuk penerbitan buku musik dan buku lembaran musik.",
          
        },
        {
          "number": "60101",
          "name": "PENYIARAN RADIO OLEH PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam usaha penyelengggaraan siaran radio, seperti penyiaran sinyal suara melalui studio penyiaran radio dan fasilitas untuk transmisi pemograman sinyal suara kepada masyarakat atau pendengar; kegiatan jaringan radio, yaitu mengumpulkan dan mengirimkan program sinyal suara untuk para pendengar lewat udara, kabel atau satelit; kegiatan penyiaran radio lewat internet (stasiun radio internet); dan penyiaran data yang terintegrasi dengan penyiaran radio. Termasuk juga station relay (pemancar kembali) siaran radio. Kegiatan pemancaran radio dan televisi secara langsung atau pemancaran ulang yang didasarkan atas dasar balas jasa (fee) dan kontrak dimasukkan dalam kelompok 61991.",
          
        },
        {
          "number": "60102",
          "name": "PENYIARAN RADIO OLEH SWASTA",
          "description": "Kelompok ini mencakup kegiatan dalam usaha penyelenggaraan siaran radio yang dikelola oleh swasta, seperti penyiaran sinyal suara melalui studio penyiaran radio dan fasilitas untuk transmisi pemograman sinyal suara kepada masyarakat atau pendengar; kegiatan jaringan radio, yaitu mengumpulkan dan mengirimkan program sinyal suara untuk para pendengar lewat udara, kabel atau satelit; kegiatan penyiaran radio lewat internet (stasiun radio internet); dan penyiaran data yang terintegrasi dengan penyiaran radio. Termasuk juga station relay (pemancar kembali) siaran radio. Kegiatan pemancaran radio dan televisi secara langsung atau pemancaran ulang yang didasarkan atas dasar balas jasa (fee) dan kontrak dimasukkan dalam kelompok 61991.",
          
        },
        {
          "number": "60201",
          "name": "AKTIVITAS PENYIARAN DAN PEMROGRAMAN TELEVISI OLEH PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam usaha penyelenggaraan siaran televisi, termasuk juga station relay (pemancar kembali) siaran televisi, seperti pembuatan program saluran televisi lengkap dari komponen program yang dibeli (seperti film, dokumenter dan lain-lain), komponen program yang dihasilkan sendiri (seperti berita lokal, laporan langsung) atau kombinasi keduanya); pemograman dari saluran video atas dasar permintaan; dan penyiaran data yang diintegrasikan dengan siaran televisi. Program televisi lengkap dapat disiarkan sendiri atau melalui distribusi pihak ketiga, seperti perusahaan kabel atau provider televisi satelit. Pemograman dapat bersifat umum atau khusus (misalnya format terbatas seperti program berita, olahraga, pendidikan atau program yang ditujukan untuk anak muda), dapat dibuat dengan bebas tersedia untuk pemakai atau dapat hanya tersedia atas dasar langganan. Kegiatan pemancaran radio dan televisi secara langsung atau pemancaran ulang yang didasarkan atas dasar balas jasa (fee) dan kontrak dimasukkan dalam kelompok 61933.",
          
        },
        {
          "number": "60202",
          "name": "AKTIVITAS PENYIARAN DAN PEMROGRAMAN TELEVISI OLEH SWASTA",
          "description": "Kelompok ini mencakup kegiatan dalam usaha penyelenggaraan siaran televisi yang dikelola oleh swasta, termasuk juga station relay (pemancar kembali) siaran televisi, seperti pembuatan program saluran televisi lengkap dari komponen program yang dibeli (seperti film, dokumenter dan lain-lain), komponen program yang dihasilkan sendiri (seperti berita lokal, laporan langsung) atau kombinasi keduanya); pemrograman dari saluran video atas dasar permintaan; dan penyiaran data yang diintegrasikan dengan siaran televisi. Program televisi lengkap dapat disiarkan sendiri atau melalui distribusi pihak ketiga, seperti perusahaan kabel atau provider televisi satelit. Pemograman dapat bersifat umum atau khusus (misalnya format terbatas seperti program berita, olahraga, pendidikan atau program yang ditujukan untuk anak muda), dapat dibuat dengan bebas tersedia untuk pemakai atau dapat hanya tersedia atas dasar langganan. Kegiatan pemancaran radio dan televisi secara langsung atau pemancaran ulang yang didasarkan atas dasar balas jasa (fee) dan kontrak dimasukkan dalam kelompok 61933.",
          
        },
        {
          "number": "61100",
          "name": "AKTIVITAS TELEKOMUNIKASI DENGAN KABEL",
          "description": "Kelompok ini mencakup kegiatan pengoperasian, pemeliharaan atau penyediaan akses pada fasilitas untuk pengiriman suara, data, teks, bunyi dan video dengan menggunakan infrastruktur kabel telekomunikasi, seperti pengoperasian dan perawatan fasilitas pengubahan dan pengiriman untuk menyediakan komunikasi titik ke titik melalui saluran darat, gelombang mikro atau perhubungan saluran data dan satelit, pengoperasian sistem pendistribusian kabel (yaitu untuk pendistribusian data dan sinyal televisi) dan pelengkapan telegrap dan komunikasi non vocal lainnya yang menggunakan fasilitas sendiri. Dimana fasilitas transmisi yang melakukan kegiatan ini, bisa berdasarkan teknologi tunggal atau kombinasi dari berbagai teknologi. Termasuk pembelian akses dan jaringan kapasitas dari pemilik dan operator dari jaringan dan menyediakan jasa telekomunikasi yang menggunakan kapasitas ini untuk usaha dan rumah tangga dan penyediaan akses internet melalui operator infrastruktur dengan kabel. Kegiatan penyelenggaraan jaringan untuk telekomunikasi tetap yang dimaksudkan bagi terselenggaranya telekomunikasi publik dan sirkuitsewa. Termasuk kegiatan sambungan komunikasi data yang pengirimannya dilakukan secara paket, melalui suatu sentral atau melalui jaringan lain, seperti Public Switched Telephone Network (PSTN). Termasuk juga kegiatan penyelenggaraan jaringan teristerial yang melayani pelanggan bergerak tertentu antara lain jasa radio trunking dan jasa radio panggil untuk umum.",
          
        },
        {
          "number": "61200",
          "name": "AKTIVITAS TELEKOMUNIKASI TANPA KABEL",
          "description": "Kelompok ini mencakup kegiatan penyelenggaraan jaringan yang melayani telekomunikasi bergerak dengan teknologi seluler di permukaan bumi. Kegiatannya mencakup pengoperasian, pemeliharaan atau penyediaan akses pada fasilitas untuk mentranmisikan suara, data, teks, bunyi dan video menggunakan infrastruktur komunikasi tanpa kabel dan pemeliharaan dan pengoperasian nomor panggil (paging), seperti halnya jaringan telekomunikasi selular dan telekomunikasi tanpa kabel lainnya. Fasilitas transmisi menyediakan transmisi omni-directional melalui gelombang udara yang dapat berdasarkan teknologi tunggal atau kombinasi beberapa teknologi. Termasuk pembelian akses dan kapasitas jaringan dari pemilik dan operator jaringan serta menyediakan jasa jaringan tanpa kabel (kecuali satelit) untuk kegiatan bisnis dan rumah tangga dan penyediaan akses internet melalui operator infrastruktur jaringan tanpa kabel.",
          
        },
        {
          "number": "61300",
          "name": "AKTIVITAS TELEKOMUNIKASI SATELIT",
          "description": "Kelompok ini mencakup kegiatan penyelenggaraan jaringan yang melayani telekomunikasi bergerak melalui satelit Stasiun bumi, Sentral gerbang dan Jaringan penghubung. Kegiatan pada kelompok ini mencakup pengoperasian, perawatan atau penyediaan akses terhadap fasilitas untuk mentransmisikan suara, data, teks dan video menggunakan infrastruktur telekomunikasi satelit, pengiriman audio visual atau program teks yang diterima dari jaringan kabel, stasiun televisi lokal atau jaringan radio ke konsumen melalui sistem satelit yang langsung terhubung ke rumah (unit yang diklasifikasikan di sini umumnya tidak berasal dari materi pemrograman). Termasuk kegiatan penyediaan akses internet melalui operator infrastruktur satelit.",
          
        },
        {
          "number": "61911",
          "name": "JASA PANGGILAN PREMIUM (PREMIUM CALL)",
          "description": "Kelompok ini mencakup usaha jasa panggilan atau percakapan ke nomor tertentu yang mempunyai awalan 0809, dan diberlakukan tarif premium. Sifat akses &quot;Premium Call &quot; adalah &quot;normally closed&quot; yaitu dibuka apabila ada permintaan dari pelanggan.",
          
        },
        {
          "number": "61912",
          "name": "JASA KONTEN SMS PREMIUM",
          "description": "Kelompok ini mencakup usaha jasa untuk menyediakan konten melalui jaringan bergerak seluler yang pembebanan biayanya melalui pengurangan deposit prabayar atau tagihan telepon pascabayar pelanggan jaringan bergerak seluler. Konten yang disediakan adalah semua bentuk informasi yang dapat berupa tulisan, gambar, suara, animasi, atau kombinasi dari semuanya dalam bentuk digital, termasuk software aplikasi untuk diunduh dan SMS premium.",
          
        },
        {
          "number": "61913",
          "name": "JASA INTERNET TELEPONI UNTUK KEPERLUAN PUBLIK (ITKP)",
          "description": "Kelompok ini mencakup usaha jasa untuk mentransmisi panggilan melalui jaringan Internet Protocol (IP). Kegiatan ini menyelenggarakan internet teleponi yang bersifat komersial, dihubungkan ke jaringan telekomunikasi.",
          
        },
        {
          "number": "61914",
          "name": "JASA PANGGILAN TERKELOLA (CALLING CARD)",
          "description": "Kelompok ini mencakup usaha jasa untuk menyediakan layanan panggilan teleponi dengan tambahan fitur yang dapat mengelola panggilan dan\\/atau tagihan melalui proses tambahan autentikasi pemakai atau kode akses sebelum dilakukan panggilan teleponi.",
          
        },
        {
          "number": "61919",
          "name": "JASA NILAI TAMBAH TELEPONI LAINNYA",
          "description": "Kelompok ini mencakup kegiatan lainnya jasa nilai tambah teleponi dan termasuk jasa penunjang telekomunikasi lainnya.",
          
        },
        {
          "number": "61921",
          "name": "INTERNET SERVICE PROVIDER",
          "description": "Kelompok ini mencakup usaha jasa pelayanan yang ditawarkan suatu perusahaan kepada pelanggannya untuk mengakses internet, atau bisa disebut sebagai pintu gerbang ke internet.",
          
        },
        {
          "number": "61922",
          "name": "JASA SISTEM KOMUNIKASI DATA",
          "description": "Kelompok ini mencakup kegiatan jasa sistem komunikasi data yang dapat digunakan untuk pengiriman suara, gambar, data, informasi dan paket. Layanan ini disediakan dengan jaminan ketersambungan, kualitas dan keamanan.",
          
        },
        {
          "number": "61923",
          "name": "JASA TELEVISI PROTOKOL INTERNET (IPTV)",
          "description": "Kelompok ini mencakup usaha jasa untuk menyediakan layanan konvergen radio dan televisi, video, audio, teks, grafik dan data yang disalurkan melalui jaringan protokol internet yang dijamin kualitas layanannya, keamanannya, kehandalannya, dan mampu memberikan layanan komunikasi dengan pelanggan secara dua arah (interaktif).",
          
        },
        {
          "number": "61924",
          "name": "JASA INTERKONEKSI INTERNET (NAP)",
          "description": "Kelompok ini mencakup kegiatan menyelenggarakan akses dan atau ruting bagi penyelenggara jasa akses internet. Dalam menyelenggarakan akses bagi penyelenggara jasa akses internet, penyelenggara jasa interkoneksi internet dapat menyediakan jaringanh untuk transmisi internet. Penyelenggara jasa interkoneksi internet wajib saling terhubung melalui interkoneksi. Penyelenggara jasa interkoneksi melelkukan pengaturan trafik penyelenggaraan jasa akses internet.",
          
        },
        {
          "number": "64123",
          "name": "UNIT USAHA SYARIAH BANK UMUM",
          "description": "Kelompok ini mencakup kegiatan usaha yang dilakukan oleh unit kerja dari kantor pusat bank umum konvensional yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah, atau unit kerja di kantor cabang dari suatu bank yang berkedudukan di luar negeri yang melaksanakan kegiatan usaha secara konvensional yang berfungsi sebagai kantor induk dari kantor cabang pembantu syariah dan\\/atau unit syariah.",
          
        },
        {
          "number": "64131",
          "name": "BANK PERKREDITAN RAKYAT",
          "description": "Kelompok ini mencakup kegiatan usaha bank secara konvensional, meliputi penghimpunan dana dari masyarakat dalam bentuk simpanan berupa deposito, tabungan, dan\\/ atau bentuk lainnya yang dipersamakan dengan itu dan menyalurkannya kepada masyarakat dalam bentuk kredit, yang dalam kegiatannya tidak memberikan jasa dalam lalu lintas pembayaran.",
          
        },
        {
          "number": "64132",
          "name": "BANK PEMBIAYAAN RAKYAT SYARIAH",
          "description": "Kelompok ini mencakup kegiatan usaha bank berdasarkan prinsip syariah, meliputi penghimpunan dana dari masyarakat dalam bentuk simpanan dan\\/atau investasi serta menyalurkannya kepada masyarakat dalam bentuk pembiayaan dan\\/atau bentuk lainnya berdasarkan prinsip syariah, yang dalam kegiatannya tidak memberikan jasa dalam lalu lintas pembayaran.",
          
        },
        {
          "number": "64141",
          "name": "KOPERASI SIMPAN PINJAM PRIMER (KSP PRIMER)",
          "description": "Kelompok ini mencakup koperasi primer yang hanya melaksanakan usaha simpan pinjam. KSP Primer didirikan oleh dan beranggotakan orang seorang.",
          
        },
        {
          "number": "64142",
          "name": "UNIT SIMPAN PINJAM KOPERASI PRIMER (USP KOPERASI PRIMER)",
          "description": "Kelompok ini mencakup unit usaha koperasi primer yang bergerak di bidang usaha simpan pinjam. USP Koperasi Primer dibentuk oleh koperasi primer dan beranggotakan orang seorang.",
          
        },
        {
          "number": "64143",
          "name": "KOPERASI SIMPAN PINJAM SEKUNDER (KSP SEKUNDER)",
          "description": "Kelompok ini mencakup koperasi sekunder yang hanya melaksanakan usaha simpan pinjam. KSP Sekunder didirikan oleh dan beranggotakan koperasi yang melaksanakan usaha simpan pinjam.",
          
        },
        {
          "number": "64144",
          "name": "UNIT SIMPAN PINJAM KOPERASI SEKUNDER (USP KOPERASI SEKUNDER)",
          "description": "Kelompok ini mencakup unit usaha koperasi sekunder yang bergerak di bidang usaha simpan pinjam. USP Koperasi Sekunder dibentuk oleh koperasi sekunder dan beranggotakan koperasi yang melaksanakan usaha simpan pinjam.",
          
        },
        {
          "number": "64145",
          "name": "KOPERASI SIMPAN PINJAM DAN PEMBIAYAAN SYARIAH PRIMER (KSPPS PRIMER)",
          "description": "Kelompok ini mencakup koperasi primer yang melaksanakan usaha simpan pinjam dan pembiayaan syariah, termasuk mengelola zakat, infak, sedekah, dan wakaf (maal). KSPPS Primer didirikan oleh dan beranggotakan orang seorang.",
          
        },
        {
          "number": "64146",
          "name": "UNIT SIMPAN PINJAM DAN PEMBIAYAAN SYARIAH KOPERASI PRIMER (USPPS KOPERASI PRIMER)",
          "description": "Kelompok ini mencakup unit usaha koperasi primer yang bergerak di bidang usaha simpan pinjam dan pembiayaan syariah, termasuk mengelola zakat, infak, sedekah, dan wakaf (maal). USPPS Koperasi Primer dibentuk oleh koperasi primer dan beranggotakan orang seorang.",
          
        },
        {
          "number": "64147",
          "name": "KOPERASI SIMPAN PINJAM DAN PEMBIAYAAN SYARIAH SEKUNDER (KSPPS SEKUNDER)",
          "description": "Kelompok ini mencakup koperasi sekunder yang melaksanakan usaha simpan pinjam dan pembiayaan syariah, termasuk mengelola zakat, infak, sedekah, dan wakaf. KSPPS Sekunder didirikan oleh dan beranggotakan koperasi yang melaksanakan usaha simpan pinjam dan pembiayaan syariah.",
          
        },
        {
          "number": "64148",
          "name": "UNIT SIMPAN PINJAM DAN PEMBIAYAAN SYARIAH KOPERASI SEKUNDER (USPPS KOPERASI SEKUNDER)",
          "description": "Kelompok ini mencakup unit usaha koperasi sekunder yang bergerak di bidang usaha simpan pinjam dan pembiayaan syariah, termasuk mengelola zakat, infak, sedekah, dan wakaf (maal). USPPS Koperasi Sekunder dibentuk oleh koperasi sekunder dan beranggotakan koperasi yang melaksanakan usaha simpan pinjam dan pembiayaan syariah.",
          
        },
        {
          "number": "64151",
          "name": "LEMBAGA KEUANGAN MIKRO KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha lembaga keuangan mikro yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi jasa pengembangan usaha dan pemberdayaan masyarakat, baik melalui pinjaman dalam usaha skala mikro kepada anggota dan masyarakat, pengelolaan simpanan, maupun pemberian jasa konsultasi pengembangan usaha, yang tidak semata-mata mencari keuntungan. Lembaga keuangan mikro konvensional yang termasuk kelompok ini antara lain bank desa, lumbung desa, bank pasar, bank pegawai, Badan Kredit Desa (BKD), Badan Kredit Kecamatan (BKK), Kredit Usaha Rakyat Kecil (KURK), Lembaga Perkreditan Kecamatan (LPK), Bank Karya Produksi Desa (BKPD), Badan Usaha Kredit Pedesaan (BUKP), dan sejenisnya.",
          
        },
        {
          "number": "64152",
          "name": "LEMBAGA KEUANGAN MIKRO SYARIAH",
          "description": "Kelompok ini mencakup usaha lembaga keuangan mikro syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi jasa pengembangan usaha dan pemberdayaan masyarakat, baik melalui pembiayaan dalam usaha skala mikro kepada anggota dan masyarakat, pengelolaan simpanan, maupun pemberian jasa konsultasi pengembangan usaha, yang tidak semata-mata mencari keuntungan. Lembaga keuangan mikro syariah yang termasuk dalam kelompok ini antara lain Bank Wakaf Mikro (BWM), Baitul Maal wa Tamwil (BMT), Baitul Tamwil Muhammaddiyah (BTM), dan sejenisnya.",
          
        },
        {
          "number": "64190",
          "name": "PERANTARA MONETER LAINNYA",
          "description": "Kelompok ini mencakup penerimaan simpanan dan\\/atau penutupan simpanan dan pemberian kredit atau pinjaman dana. Bantuan kredit dapat berbagai macam bentuk, seperti pinjaman, pinjaman dengan jaminan, kartu kredit, dan lain-lain. Kegiatan ini pada umumnya dilakukan oleh lembaga keuangan selain bank sentral, seperti jasa perantara keuangan yang tidak diklasifikasikan di tempat lain, seperti rentenir, credit union, kegiatan giro pos, dan laku pandai (tabungan pos), lembaga khusus yang berwenang memberikan kredit untuk pembelian rumah dan juga mengambil deposito dan kegiatan money order (pengiriman uang).",
          
        },
        {
          "number": "61929",
          "name": "JASA MULTIMEDIA LAINNYA",
          "description": "Kelompok ini mencakup kegiatan jasa multimedia lainnya yang belum tercakup dalam kelompok 61921 sampai dengan 61924.",
          
        },
        {
          "number": "61991",
          "name": "AKTIVITAS TELEKOMUNIKASI KHUSUS UNTUK PENYIARAN",
          "description": "Kelompok ini mencakup usaha penyelenggaraan telekomunikasi yang khusus digunakan untuk keperluan penyiaran, ciri-cirinya bersifat memancar satu arah dan terus menerus; diterima langsung oleh penerima; bersifat tetap dan bergerak; menampilkan gambar dan atau suara; dan peruntukan siarannya untuk masyarakat luas. Biasanya penyelenggara kegiatan ini menyewa jaringan sebagai sarana transmisi untuk keperluan penyiaran dari penyelenggaraan jaringan telekomunikasi lain.",
          
        },
        {
          "number": "61992",
          "name": "AKTIVITAS TELEKOMUNIKASI KHUSUS UNTUK KEPERLUAN SENDIRI",
          "description": "Kelompok ini mencakup usaha penyelenggaraan telekomunikasi yang khusus digunakan untuk keperluan sendiri dalam hal pengembangan hobi dan latih diri.",
          
        },
        {
          "number": "61993",
          "name": "AKTIVITAS TELEKOMUNIKASI KHUSUS UNTUK KEPERLUAN PERTAHANAN KEAMANAN",
          "description": "Kelompok ini mencakup usaha penyelenggaraan telekomunikasi yang khusus digunakan untuk keperluan pertahanan keamanan negara.",
          
        },
        {
          "number": "61994",
          "name": "JASA JUAL KEMBALI JASA TELEKOMUNIKASI",
          "description": "Kelompok ini mencakup usaha penyelenggaraan jasa jual kembali jasa telekomunikasi, seperti warung telepon (wartel) yang menyediakan jasa telepon, faksimili, teleks, dan telegraf, jasa jual kembali akses internet seperti Warung Internet\\/Internet Caf\\u00e9 dan jasa jual kembali jasa telekomunikasi lainnya.",
          
        },
        {
          "number": "61999",
          "name": "AKTIVITAS TELEKOMUNIKASI LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha penyelenggaraan telekomunikasi lainnya yang belum dicakup di tempat lain. Termasuk dalam kelompok ini adalah kegiatan penjualan pulsa, baik voucher pulsa maupun elektronik dan penjualan kartu perdana telepon seluler.",
          
        },
        {
          "number": "62011",
          "name": "AKTIVITAS PENGEMBANGAN VIDEO GAME",
          "description": "Kelompok ini mencakup kegiatan pengembangan video game, seperi kegiatan desain konsep game, pengembangan piranti lunak video game, pembuatan aset grafis, pembuatan animasi yang berkaitan dengan video game, pembuatan suara dan musik, pengujian video game, dan dukungan lainnya untuk video game.",
          
        },
        {
          "number": "62012",
          "name": "AKTIVITAS PENGEMBANGAN APLIKASI PERDAGANGAN MELALUI INTERNET (E-COMMERCE)",
          "description": "Kelompok ini mencakup kegiatan pengembangan aplikasi perdagangan melalui internet (e-commerce). Kegiatan meliputi konsultasi, analisi dan pemograman aplikasi untuk kegiatan perdagangan melalui internet.",
          
        },
        {
          "number": "62013",
          "name": "AKTIVITAS PEMROGRAMAN DAN PRODUKSI KONTEN MEDIA IMERSIF",
          "description": "Kelompok ini mencakup konsultasi dan produksi yang berkaitan dengan analisis, desain dan pemrograman dari sistem media imersif seperti VR (Virtual Reality)\\/AR (Augmented Reality)\\/MR (Mixed Reality). Kegiatan ini biasanya menyangkut analisis kebutuhan pengguna sistem media imersif dan permasalahannya termasuk pula penulisan program sesuai kebutuhan pengguna media imersif. Pembuatan 3D visual dan video 360 serta modifikasinya khusus untuk media imersif.",
          
        },
        {
          "number": "62014",
          "name": "AKTIVITAS PENGEMBANGAN TEKNOLOGI BLOCKCHAIN",
          "description": "Kelompok ini mencakup kegiatan pengembangan teknologi blockchain, seperti kegiatan implementasi smart contract, perancangan infrastruktur blockchain publik dan blockchain privat.Kelompok ini tidak mencakup perdagangan berjangka komoditas aset kripto (6615).",
          
        },
        {
          "number": "62015",
          "name": "AKTIVITAS PEMROGRAMAN BERBASIS KECERDASAN ARTIFISIAL",
          "description": "Kelompok ini mencakup konsultasi yang dilanjutkan analisis dan pemrograman yang memanfaatkan teknologi kecerdasan artifisial (AI) termasuk subset dari AI seperti machine learning, natural language processing, expert system, dan subset AI lainnya.",
          
        },
        {
          "number": "62019",
          "name": "AKTIVITAS PEMROGRAMAN KOMPUTER LAINNYA",
          "description": "Kelompok ini mencakup konsultasi yang berkaitan dengan analisis, desain dan pemrograman dari sistem yang siap pakai lainnya (selain yang sudah dicakup di kelompok 62011 dan 62015). Kegiatan ini biasanya menyangkut analisis kebutuhan pengguna komputer dan permasalahannya, pemecahan permasalahan, dan membuat perangkat lunak berkaitan dengan pemecahan masalah tersebut. Termasuk pula penulisan program sederhana sesuai kebutuhan pengguna komputer. Perancangan struktur dan isi dari, dan\\/atau penulisan kode komputer yang diperlukan untuk membuat dan mengimplementasikan, seperti piranti lunak sistem (pemutakhiran dan perbaikan), piranti lunak aplikasi (pemutakhiran dan perbaikan), basis data dan laman web. Termasuk penyesuaian perangkat lunak, misalnya modifikasi dan penyesuaian konfigurasi aplikasi yang sudah ada sehingga berfungsi dalam lingkungan sistem informasi klien. Kegiatan penyesuaian perangkat lunak sejenis yang dilaksanakan sebagai bagian yang tak terpisahkan dari penjualan perangkat lunak dimasukkan dalam subgolongan 47413.",
          
        },
        {
          "number": "62021",
          "name": "AKTIVITAS KONSULTASI KEAMANAN INFORMASI",
          "description": "Kelompok ini mencakup kegiatan layanan konsultasi perencanaan dan pengawasan keamanan informasi, pemeriksaan atau penjaminan (assurance) keamanan informasi, dan pembangunan dan penerapan keamanan informasi.",
          
        },
        {
          "number": "62022",
          "name": "AKTIVITAS PENYEDIAAN IDENTITAS DIGITAL",
          "description": "Kelompok ini mencakup kegiatan penyediaan identitas digital yang merupakan representasi entitas di dalam sistem elektronik. Identitas digital dapat diterbitkan dalam beberapa tingkat assurance\\/kepercayaan berdasarkan risiko dalam pembuktian identitas. Kegiatan ini dapat berupa proses digital dalam hal registrasi, validasi, penyimpanan, autentikasi, termasuk manajemen atribut biografis maupun biometrik yang diasosiasikan dengan kredensial untuk suatu entitas. Kredensial dibuat dalam dalam bentuk digital, seperti unique number, user account, dan sertifikat elektronik.",
          
        },
        {
          "number": "62023",
          "name": "AKTIVITAS PENYEDIAAN SERTIFIKAT ELEKTRONIK DAN LAYANAN YANG MENGGUNAKAN SERTIFIKAT ELEKTRONIK",
          "description": "Kelompok ini mencakup kegiatan penyelenggaraan sertifikasi elektronik dan penyelenggaraan layanan yang menggunakan sertifikat elektronik, seperti tanda tangan elektronik, segel elektronik, penanda waktu elektronik, layanan pengiriman elektronik tercatat, autentikasi situs web, dan preservasi tanda tangan elektronik dan\\/atau segel elektronik.",
          
        },
        {
          "number": "62024",
          "name": "AKTIVITAS KONSULTASI DAN PERANCANGAN INTERNET OF THINGS (IOT)",
          "description": "Kelompok ini mencakup kegiatan layanan konsultasi, perancangan dan pembuatan solusi sistem terintegrasi berdasarkan pesanan (bukan siap pakai) dengan cara memodifikasi perangkat keras (hardware) yang sudah ada, seperti sensor, microcontroller, dan perangkat keras(hardware) lainnya. Modifikasi tersebut dilakukan pada perangkat keras (hardware) IoT dan\\/atau perangkat lunak (software) yang tertanam didalamnya.Kelompok ini tidak mencakup aktivitas manufaktur chip (26120) dan aktivitas penerbitan\\/pengembangan perangkat lunak IoT (58200 dan 62019).",
          
        },
        {
          "number": "62029",
          "name": "AKTIVITAS KONSULTASI KOMPUTER DAN MANAJEMEN FASILITAS KOMPUTER LAINNYA",
          "description": "Kelompok ini mencakup usaha konsultasi tentang tipe dan konfigurasi dari perangkat keras komputer dengan atau tanpa dikaitkan dengan aplikasi piranti lunak. Perencanaan dan perancangan sistem komputer yang mengintegrasikan perangkat keras, piranti lunak dan teknologi komunikasi komputer. Konsultasi biasanya menyangkut analisis kebutuhan pengguna komputer dan permasalahannya, serta memberikan jalan keluar yang terbaik. Unit yang diklasifikasikan dalam subgolongan ini dapat menyediakan komponen sistem perangkat keras dan piranti lunak sebagai bagian dari jasa yang terintegrasi atau komponen ini dapat disediakan oleh pihak ketiga atau vendor. Unit yang diklasifikasikan dalam subgolongan ini pada umumnya menginstal sistem dan melatih serta mendukung pengguna sistem. Termasuk penyediaan manajemen dan pengoperasian sistem komputer klien dan\\/atau fasilitas pengolahan data di tempat klien, demikian juga jasa pendukung terkait.",
          
        },
        {
          "number": "62090",
          "name": "AKTIVITAS TEKNOLOGI INFORMASI DAN JASA KOMPUTER LAINNYA",
          "description": "Kelompok ini mencakup kegiatan teknologi informasi dan jasa komputer lainnya yang terkait dengan kegiatan yang belum diklasifikasikan di tempat lain, seperti pemulihan kerusakan komputer, instalasi (setting up) personal komputer dan instalasi perangkat lunak. Termasuk juga kegiatan manajemen insiden dan digital forensik.Kelompok ini mencakup berbagai usaha yang berkaitan dengan komputer yang belum tercakup dalam golongan 6201-6202.",
          
        },
        {
          "number": "63111",
          "name": "AKTIVITAS PENGOLAHAN DATA",
          "description": "Kelompok ini mencakup kegiatan pengolahan dan tabulasi semua jenis data. Kegiatan ini bisa meliputi keseluruhan tahap pengolahan dan penulisan laporan dari data yang disediakan pelanggan, atau hanya sebagian dari tahapan pengolahan. Termasuk pembagian fasilitas mainframe ke klien dan penyediaan entri data dan kegiatan pengelolaan data besar (big data).",
          
        },
        {
          "number": "63112",
          "name": "AKTIVITAS HOSTING DAN YBDI",
          "description": "Kelompok ini mencakup usaha jasa pelayanan yang berkaitan dengan penyediaan infrastruktur hosting, layanan pemrosesan data dan kegiatan ybdi dan spesialisasi dari hosting, seperti web-hosting, jasa streaming dan aplikasi hosting. Termasuk di sini penyimpanan komputasi awan (cloud computing).",
          
        },
        {
          "number": "63121",
          "name": "PORTAL WEB DAN\\/ATAU PLATFORM DIGITAL TANPA TUJUAN KOMERSIAL",
          "description": "Kelompok ini mencakup pengoperasian situs web tanpa tujuan komersial yang menggunakan mesin pencari untuk menghasilkan dan memelihara basis data (database) besar dari alamat dan isi internet dalam format yang mudah dicari; pengoperasian situs web yang bertindak sebagai portal ke internet, seperti situs media yang menyediakan isi yang diperbarui secara berkala tanpa tujuan komersial; pengoperasian platform digital dan\\/atau situs\\/portal web yang melakukan transaksi elektronik berupa kegiatan usaha fasilitasi dan\\/atau mediasi pemindahan kepemilikan barang dan\\/atau jasa dan\\/atau layanan lainnya melalui internet dan\\/atau perangkat elektronik dan\\/atau cara dengan sistem elektronik lainnya tanpa tujuan komersial.",
          
        },
        {
          "number": "63122",
          "name": "PORTAL WEB DAN\\/ATAU PLATFORM DIGITAL DENGAN TUJUAN KOMERSIAL",
          "description": "Kelompok ini mencakup pengoperasian situs web dengan tujuan komersial yang menggunakan mesin pencari untuk menghasilkan dan memelihara basis data (database) besar dari alamat dan isi internet dalam format yang mudah dicari; pengoperasian situs web yang bertindak sebagai portal ke internet, seperti situs media yang menyediakan isi yang diperbarui secara berkala, baik secara langsung ataupun tidak langsung dengan tujuan komersial; pengoperasian platform digital dan\\/atau situs\\/portal web yang melakukan transaksi elektronik berupa kegiatan usaha fasilitasi dan\\/atau mediasi pemindahan kepemilikan barang dan\\/atau jasa dan\\/atau layanan lainnya melalui internet dan\\/atau perangkat elektronik dan\\/atau cara sistem elektronik lainnya yang dilakukan dengan tujuan komersial (profit) yang mencakup aktivitas baik salah satu, sebagian ataupun keseluruhan transaksi elektronik, yaitu pemesanan, pembayaran, pengiriman atas kegiatan tersebut. Termasuk dalam kelompok ini adalah situs\\/portal web dan\\/atau platform digital yang bertujuan komersial (profit) merupakan aplikasi yang digunakan untuk fasilitasi dan\\/atau mediasi layanan-layanan transaksi elektronik, seperti pengumpul pedagang (marketplace), digital advertising, dan on demand online services.Kelompok ini tidak mencakup financial technology (Fintech). Fintech Peer to Peer (P2P) Lending (6495) dan Fintech jasa pembayaran (6641).",
          
        },
        {
          "number": "63911",
          "name": "AKTIVITAS KANTOR BERITA OLEH PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam usaha mencari, mengumpulkan, mengolah dan sekaligus mempublikasikan berita melalui media cetak elektronik, dengan tujuan untuk menyampaikannya kepada masyarakat sebagai informasi, seperti Kantor Berita Antara.",
          
        },
        {
          "number": "63912",
          "name": "AKTIVITAS KANTOR BERITA OLEH SWASTA",
          "description": "Kelompok ini mencakup usaha mengumpulkan dan menyebarluaskan berita melalui media cetak maupun elektronik dengan tujuan untuk menyampaikannya kepada masyarakat sebagai informasi yang dikelola oleh swasta.",
          
        },
        {
          "number": "63990",
          "name": "AKTIVITAS JASA INFORMASI LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha jasa informasi lainnya yang tidak dapat diklasifikasikan di tempat lain, seperti jasa informasi berbasis telepon, jasa pencarian informasi atas dasar balas jasa atau kontrak dan jasa kliping berita, jasa kliping pers dan lain-lain. Termasuk dalam kelompok ini kegiatan jasa penyedia konten.",
          
        },
        {
          "number": "64110",
          "name": "BANK SENTRAL",
          "description": "Kelompok ini mencakup kegiatan bank sentral. Bank sentral adalah Bank Indonesia sebagai lembaga negara yang diamanatkan oleh Undang-Undang Dasar Negara Republik Indonesia tahun 1945 sebagai bank sentral Negara Republik Indonesia, yang memiliki tugas untuk menetapkan dan melaksanakan kebijakan moneter, menetapkan dan melaksanakan kebijakan sistem pembayaran dan pengelolaan uang rupiah, dan menetapkan dan melaksanakan kebijakan di bidang stabilitas sistem keuangan termasuk makroprudensial.",
          
        },
        {
          "number": "64121",
          "name": "BANK UMUM KONVENSIONAL",
          "description": "Kelompok ini mencakup kegiatan usaha bank secara konvensional, meliputi penghimpunan dana dari masyarakat dalam bentuk simpanan dan menyalurkannya kepada masyarakat dalam bentuk kredit dan\\/ atau bentuk-bentuk lainnya, serta menyelenggarakan kegiatan jasa dalam sistem pembayaran.",
          
        },
        {
          "number": "64122",
          "name": "BANK UMUM SYARIAH",
          "description": "Kelompok ini mencakup kegiatan usaha bank berdasarkan prinsip syariah, meliputi penghimpunan dana dari masyarakat dalam bentuk simpanan dan\\/atau investasi serta menyalurkannya kepada masyarakat dalam bentuk pembiayaan dan\\/atau bentuk lainnya berdasarkan prinsip syariah, serta memberikan jasa dalam sistem pembayaran.",
          
        },
        {
          "number": "53100",
          "name": "AKTIVITAS POS",
          "description": "Kelompok ini mencakup kegiatan layanan pos yang beroperasi di bawah kewajiban pelayanan universal, yaitu pengiriman pos jenis tertentu yang wajib dijamin oleh pemerintah untuk menjangkau seluruh wilayah NKRI yang memungkinkan masyarakat mengirimkan dan\\/atau menerima kiriman dari satu tempat ke tempat lain di dunia. Aktivitas ini dilaksanakan oleh penyelenggara pos yang ditunjuk oleh pemerintah dengan tarif layanan sebagaimana ditentukan oleh pemerintah. Kegiatan yang dilakukan meliputi penggunaan infrastruktur layanan universal, termasuk lokasi ritel, fasilitas sortir dan pengolahan, dan rute operator untuk pengambilan dan pengiriman surat. Pengiriman meliputi surat, kartu pos, barang cetakan (koran, majalah, item iklan, barang cetakan dalam kantong khusus, dll), bungkusan kecil, paket, sekogram, barang atau dokumen. Termasuk juga jasa lain yang diperlukan untuk mendukung kewajiban pelayanan universal. Kegiatan ini dapat dilakukan melalui satu atau lebih moda transportasi baik dengan angkutan milik sendiri maupun angkutan umum.",
          
        },
        {
          "number": "53201",
          "name": "AKTIVITAS KURIR",
          "description": "Kelompok ini mencakup usaha jasa pelayanan pengiriman barang yang dilakukan secara komersial selain kegiatan pengiriman pos universal. Kegiatannya mencakup pengumpulan\\/pengambilan, penyortiran\\/pemrosesan, pengangkutan dan pengantaran surat, dokumen, parsel, barang, dan paket baik domestik maupun internasional melalui perusahaan dengan menggunakan satu atau lebih jenis angkutan dan kegiatannya dapat menggunakan angkutan pribadi atau angkutan umum. Aktivitas ini meliputi seluruh kegiatan penyelenggaraan pos yang jenis dan tarif layanannya ditetapkan oleh penyelenggara pos berdasarkan formula perhitungan berbasis biaya sebagaimana ditetapkan oleh pemerintah.",
          
        },
        {
          "number": "53202",
          "name": "AKTIVITAS AGEN KURIR",
          "description": "Kelompok ini mencakup usaha jasa swasta sebagai mitra usaha penyelenggara pos yang menyelenggarakan kegiatan pengumpulan dan pemrosesan barang baik domestik maupun internasional.Kelompok ini tidak mencakup pengangkutan, dan pengantaran.",
          
        },
        {
          "number": "55110",
          "name": "HOTEL BINTANG",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan penginapan yang memenuhi ketentuan sebagai hotel bintang, serta jasa lainnya bagi umum dengan menggunakan sebagian atau seluruh bangunan.",
          
        },
        {
          "number": "55120",
          "name": "HOTEL MELATI",
          "description": "Kelompok ini mencakup usaha penyediaan jasa layanan penginapan bagi umum yang dikelola secara komersial dengan menggunakan sebagian atau seluruh bagian bangunan yang telah memenuhi ketentuan sebagai hotel melati yang ditetapkan dalam surat keputusan instansi yang membinanya.",
          
        },
        {
          "number": "55130",
          "name": "PONDOK WISATA",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan penginapan bagi umum dengan pembayaran harian yang dilakukan perseorangan dengan menggunakan bangunan rumah tinggal yang dihuni oleh pemiliknya dan dimanfaatkan sebagian untuk disewakan dengan memberikan kesempatan kepada wisatawan untuk berinteraksi dalam kehidupan sehari-hari pemiliknya.",
          
        },
        {
          "number": "55191",
          "name": "PENGINAPAN REMAJA (YOUTH HOSTEL)",
          "description": "Kelompok ini mencakup usaha penyediaan jasa penginapan yang biasanya digunakan wisatawan sebagai akomodasi dapat berupa ruangan\\/kamar yang dapat digunakan bermalam bersama-sama (sharing room) atau sendiri dalam rangka kegiatan pariwisata dengan tujuan untuk rekreasi, memperluas pengetahuan\\/pengalaman, dan perjalanan.",
          
        },
        {
          "number": "55192",
          "name": "BUMI PERKEMAHAN, PERSINGGAHAN KARAVAN DAN TAMAN KARAVAN",
          "description": "Kelompok ini mencakup usaha penyediaan tempat penginapan di alam terbuka dengan menggunakan tenda atau dengan menggunakan karavan, termasuk pula karavan (kereta gandengan) yang dibawa sendiri. Misalnya Bumi Perkemahan Cibubur, dan Persinggahan Karavan Taman Safari.",
          
        },
        {
          "number": "55193",
          "name": "VILA",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan penginapan bagi umum yang merupakan rumah-rumah pribadi yang khusus disewakan kepada wisatawan berikut fasilitasnya dan dikelola sendiri oleh pemiliknya.",
          
        },
        {
          "number": "55194",
          "name": "APARTEMEN HOTEL",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan penginapan bagi umum yang mengelola dan memfungsikan apartemen sebagai hotel untuk tempat tinggal sementara, dengan perhitungan pembayaran sesuai ketentuan. Misalnya apartemen hotel\\/kondominium hotel (apartel\\/kondotel).",
          
        },
        {
          "number": "55199",
          "name": "PENYEDIAAN AKOMODASI JANGKA PENDEK LAINNYA",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan penginapan yang belum termasuk dalam kelompok 55191 sd. 55194, seperti usaha penyediaan akomodasi jangka pendek lainnya seperti bungalo, cottage dan lain-lain. Termasuk motel dan pondok tamu (guesthouse).",
          
        },
        {
          "number": "55900",
          "name": "PENYEDIAAN AKOMODASI LAINNYA",
          "description": "Kelompok ini mencakup usaha penyediaan jasa pelayanan penginapan dalam periode waktu yang tidak singkat. Termasuk usaha penyediaan akomodasi untuk jangka yang lebih lama atau sementara baik kamar sendiri atau kamar bersama atau asrama untuk pelajar, pekerja musiman dan sejenisnya. Misalnya kegiatan penyediaan akomodasi ini mencakup tempat tinggal pelajar, asrama sekolah, asrama atau pondok pekerja dan rumah kost, baik dengan makan maupun tidak dengan makan.",
          
        },
        {
          "number": "56101",
          "name": "RESTORAN",
          "description": "Kelompok ini mencakup jenis usaha jasa menyajikan makanan dan minuman untuk dikonsumsi di tempat usahanya, bertempat di sebagian atau seluruh bangunan permanen, dilengkapi dengan jasa pelayanan meliputi memasak dan menyajikan sesuai pesanan.",
          
        },
        {
          "number": "56102",
          "name": "RUMAH\\/WARUNG MAKAN",
          "description": "Kelompok ini mencakup jenis usaha jasa penyediaan makanan dan minuman untuk dikonsumsi di tempat usahanya yang bertempat di sebagian atau seluruh bangunan tetap (tidak berpindah-pindah), yang menyajikan makanan dan minuman di tempat usahanya.",
          
        },
        {
          "number": "56103",
          "name": "KEDAI MAKANAN",
          "description": "Kelompok ini mencakup usaha jasa pangan yang menjual dan menyajikan makanan siap dikonsumsi yang melalui proses pembuatan di tempat tetap yang dapat dipindah-pindahkan atau dibongkar pasang, biasanya dengan menggunakan tenda, seperti kedai seafood, pecel ayam dan lain-lain.",
          
        },
        {
          "number": "56104",
          "name": "PENYEDIAAN MAKANAN KELILING\\/TEMPAT TIDAK TETAP",
          "description": "Kelompok ini mencakup usaha jasa pangan yang menjual dan menyajikan makanan siap dikonsumsi yang didahului dengan proses pembuatan dan biasanya dijual dengan cara berkeliling, seperti tukang bakso keliling, tukang gorengan keliling, tukang otak-otak keliling, tukang empek-empek keliling dan lain-lain.",
          
        },
        {
          "number": "65312",
          "name": "DANA PENSIUN PEMBERI KERJA SYARIAH",
          "description": "Kelompok ini mencakup usaha dana pensiun pemberi kerja yang diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pengelolaan dana pensiun yang dibentuk oleh orang atau badan yang mempekerjakan karyawan, selaku pendiri, untuk menyelenggarakan program pensiun manfaat pasti atau program pensiun iuran pasti, bagi kepentingan sebagian atau seluruh karyawannya sebagai peserta, yang menimbulkan kewajiban terhadap pemberi kerja.",
          
        },
        {
          "number": "65313",
          "name": "UNIT SYARIAH DANA PENSIUN PEMBERI KERJA",
          "description": "Kelompok ini mencakup kegiatan unit syariah yang dibentuk oleh dana pensiun pemberi kerja konvensional untuk menyelenggarakan program pensiun berdasarkan prinsip syariah.",
          
        },
        {
          "number": "65321",
          "name": "DANA PENSIUN LEMBAGA KEUANGAN KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha dana pensiun lembaga keuangan yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi penyelenggaraan program pensiun iuran pasti bagi perorangan, baik karyawan maupun pekerja mandiri yang terpisah dari dana pensiun pemberi kerja bagi karyawan bank atau perusahaan asuransi jiwa yang bersangkutan.",
          
        },
        {
          "number": "65322",
          "name": "DANA PENSIUN LEMBAGA KEUANGAN SYARIAH",
          "description": "Kelompok ini mencakup usaha dana pensiun lembaga keuangan yang diselenggarakan berdasarkan prinsip syariah, yang meliputi penyelenggaraan program pensiun iuran pasti bagi perorangan, baik karyawan maupun pekerja mandiri yang terpisah dari dana pensiun pemberi kerja bagi karyawan bank atau perusahaan asuransi jiwa yang bersangkutan.",
          
        },
        {
          "number": "66111",
          "name": "BURSA EFEK",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyelenggarakan dan menyediakan sistem dan\\/ atau sarana untuk mempertemukan penawaran (jual dan beli) efek pihak-pihak lain dengan tujuan memperdagangkan efek diantara mereka.",
          
        },
        {
          "number": "66112",
          "name": "LEMBAGA KLIRING DAN PENJAMINAN EFEK",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang menyelenggarakan jasa kliring dan penjaminan penyelesaian transaksi bursa yang teratur, wajar dan efisien. Termasuk kelompok ini adalah PT Kliring Penjaminan Efek Indonesia (KPEI).",
          
        },
        {
          "number": "66113",
          "name": "LEMBAGA PENYIMPANAN DAN PENYELESAIAN",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang menyelenggarakan kustodian sentral bagi bank kustodian, perusahaan efek dan pihak lain dan penyelesaian transaksi bursa yang teratur, wajar dan efisien. Termasuk kelompok ini adalah PT Kustodian Sentral Efek Indonesia (KSEI).",
          
        },
        {
          "number": "66114",
          "name": "LEMBAGA PENILAIAN HARGA EFEK (LPHE)",
          "description": "Kelompok ini mencakup kegiatan pihak yang telah memperoleh izin usaha dari Otoritas Jasa Keuangan untuk melakukan penilaian harga efek dalam rangka menetapkan harga pasar wajar.",
          
        },
        {
          "number": "66115",
          "name": "PENYELENGGARA DANA PERLINDUNGAN PEMODAL (PDPP)",
          "description": "Kelompok ini mencakup kegiatan pihak yang telah mendapatkan izin usaha dari Otoritas Jasa Keuangan untuk dapat menyelenggarakan dan mengelola kumpulan dana perlindungan pemodal yang dibentuk untuk melindungi pemodal dari hilangnya aset pemodal.",
          
        },
        {
          "number": "66116",
          "name": "LEMBAGA PENDANAAN EFEK",
          "description": "Kelompok ini mencakup kegiatan pihak yang telah memperoleh izin usaha dari Otoritas Jasa Keuangan untuk melakukan kegiatan usaha penyediaan fasilitas pinjaman berupa dana dan\\/atau efek yang diberikan dalam rangka transaksi efek.",
          
        },
        {
          "number": "66117",
          "name": "PENYELENGGARA PASAR ALTERNATIF",
          "description": "Kelompok ini mencakup kegiatan pihak yang menyelenggarakan dan menyediakan atau menggunakan sistem elektronik untuk mempertemukan transaksi efek atas efek bersifat utang dan\\/atau sukuk antar pengguna jasa secara terus-menerus di luar bursa efek.",
          
        },
        {
          "number": "66118",
          "name": "PENYELENGGARA PENAWARAN EFEK MELALUI LAYANAN URUN DANA BERBASIS TEKNOLOGI INFORMASI (SECURITIES CROWDFUNDING)",
          "description": "Kelompok ini mencakup kegiatan pihak yang menyediakan, mengelola, dan mengoperasikan penyelenggaraan penawaran Efek oleh Penerbit yang secara langsung kepada pemodal melalui jaringan sistem elektronik yang bersifat terbuka.",
          
        },
        {
          "number": "66119",
          "name": "PENYELENGGARA INFRASTRUKTUR PERDAGANGAN DI PASAR MODAL LAINNYA",
          "description": "Kelompok ini mencakup kegiatan badan usaha atau lembaga yang menyediakan dan menyelenggarakan infrastruktur terkait transaksi di pasar modal, selain peran sebagai berikut: menyediakan sarana pelaksanaan transaksi; menyelenggarakan kliring, dan mengelola risiko; melaksanakan penyelesaian transaksi (setelmen); menyelenggarakan penatausahaan, pencatatan, dan pelaporan transaksi; melakukan penilaian harga efek dalam rangka menetapkan harga pasar wajar; menyelenggarakan dan mengelola dana perlindungan pemodal; melakukan pendanaan transaksi efek; dan menyediakan, mengelola, dan mengoperasikan penyelenggaraan layanan penawaran efek yang dilakukan oleh penerbit untuk menjual efek secara langsung kepada pemodal melalui jaringan sistem elektronik yang bersifat terbuka.",
          
        },
        {
          "number": "66121",
          "name": "BURSA BERJANGKA",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyelenggarakan dan menyediakan sistem dan\\/atau sarana untuk kegiatan jual beli komoditi berdasarkan kontrak berjangka, kontrak derivatif syariah, dan\\/atau kontrak derivatif lainnya.",
          
        },
        {
          "number": "66122",
          "name": "LEMBAGA KLIRING DAN PENJAMINAN BERJANGKA",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyelenggarakan dan menyediakan sistem dan\\/atau sarana untuk pelaksanaan kliring dan penjaminan penyelesaian transaksi perdagangan berjangka.",
          
        },
        {
          "number": "66123",
          "name": "BURSA BERJANGKA PENYELENGGARA PASAR FISIK",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyelenggarakan dan menyediakan sistem dan\\/atau sarana untuk kegiatan jual beli komoditi dengan mekanisme pasar fisik di bursa berjangka.",
          
        },
        {
          "number": "66124",
          "name": "LEMBAGA KLIRING DAN PENJAMINAN BERJANGKA PENYELENGGARA PASAR FISIK",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyelenggarakan dan menyediakan sistem dan\\/atau sarana untuk pelaksanaan kliring dan penjaminan penyelesaian transaksi terhadap transaksi yang terjadi melalui pasar fisik di bursa berjangka dan pasar lelang komoditas.",
          
        },
        {
          "number": "66131",
          "name": "PENYELENGGARA SARANA PELAKSANAAN TRANSAKSI DI PASAR UANG DAN PASAR VALUTA ASING",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyediakan teknologi dan menyelenggarakan sarana untuk melaksanakan transaksi di pasar uang dan pasar valuta asing terhadap rupiah.Kelompok ini mencakup antara lain: perusahaan pialang pasar uang dan pasar valuta asing; dan penyedia electronic trading platform di pasar uang dan pasar valuta asing.",
          
        },
        {
          "number": "66132",
          "name": "CENTRAL COUNTERPARTY TRANSAKSI DERIVATIF SUKU BUNGA DAN NILAI TUKAR",
          "description": "Kelompok ini mencakup kegiatan lembaga yang menempatkan dirinya di antara para pihak yang melakukan transaksi derivatif suku bunga dan nilai tukar sehingga bertindak sebagai pembeli bagi penjual dan sebagai penjual bagi pembeli, yang memiliki fungsi antara lain: novasi, yaitu proses pengakhiran kontrak awal antara pembeli dengan penjual kemudian menggantikannya dengan dua kontrak baru; penyelenggaraan kliring, yaitu penyelenggaraan proses yang dilakukan setelah terjadinya transaksi; dan pengelolaan risiko, atas transaksi derivatif suku bunga dan nilai tukar.",
          
        },
        {
          "number": "66139",
          "name": "PENYELENGGARA INFRASTRUKTUR PASAR UANG DAN PASAR VALUTA ASING LAINNYA",
          "description": "Kelompok ini mencakup kegiatan penyelenggara infrastruktur untuk transaksi di pasar uang dan pasar valuta asing terhadap rupiah yang tidak diklasifikasikan di tempat lain.",
          
        },
        {
          "number": "66141",
          "name": "PENJAMIN EMISI EFEK (UNDERWRITER)",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang melakukan kegiatan penjaminan emisi efek, kegiatan lain yang berkaitan dengan aksi korporasi dari perusahaan yang akan atau telah melakukan penawaran umum, seperti pemberian nasihat dalam rangka penerbitan efek, penggabungan, peleburan, pengambilalihan, dan\\/atau restrukturisasi, serta kegiatan lain yang ditetapkan dan\\/atau disetujui oleh Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "66142",
          "name": "PERANTARA PEDAGANG EFEK (BROKER DEALER)",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang melakukan transaksi efek untuk kepentingan sendiri dan pihak lain, dan\\/atau pemasaran efek untuk kepentingan perusahaan efek lain, serta kegiatan lain yang ditetapkan dan\\/atau disetujui oleh Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "66143",
          "name": "PERUSAHAAN EFEK DAERAH (PED)",
          "description": "Kelompok ini mencakup kegiatan sebagai perusahaan efek yang telah memiliki izin usaha dari Otoritas Jasa Keuangan untuk melakukan kegiatan usaha sebagai perantara pedagang efek yang mengadministrasikan rekening efek nasabah dan khusus didirikan dalam suatu wilayah provinsi.",
          
        },
        {
          "number": "66144",
          "name": "PERANTARA PEDAGANG EFEK UNTUK EFEK BERSIFAT UTANG DAN SUKUK (PPE-EBUS)",
          "description": "Kelompok ini mencakup kegiatan pihak yang telah terdaftar di Otoritas Jasa Keuangan untuk melakukan kegiatan usaha jual beli efek bersifat utang dan sukuk untuk kepentingan sendiri dan\\/ atau nasabahnya.",
          
        },
        {
          "number": "66145",
          "name": "AGEN PERANTARA PEDAGANG EFEK",
          "description": "Kelompok ini mencakup kegiatan pihak yang telah terdaftar di Otoritas Jasa Keuangan untuk melakukan kegiatan penawaran kepada calon nasabah untuk menjadi nasabah perantara pedagang efek dengan mendapat komisi berdasarkan kontrak kerjasama dan kegiatan lain yang diatur oleh Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "66146",
          "name": "AGEN PENJUAL EFEK REKSA DANA (APERD)",
          "description": "Kelompok ini mencakup kegiatan usaha khusus untuk memasarkan efek reksa dana berdasarkan kontrak kerja sama dengan manajemen investasi pengelola reksa dana.",
          
        },
        {
          "number": "66147",
          "name": "GERAI PENJUALAN EFEK REKSA DANA",
          "description": "Kelompok ini mencakup tempat penjualan efek reksa dana, yang di buka berdasarkan kerja sama antara agen penjual efek reksa dana atau manajemen investasi dengan pihak lain yang memiliki jaringan usaha luas dalam kegiatan usahanya.",
          
        },
        {
          "number": "66149",
          "name": "PERUSAHAAN EFEK SELAIN MANAJEMEN INVESTASI LAINNYA",
          "description": "Kelompok ini mencakup kegiatan usaha perusahaan efek di pasar modal, selain kegiatan manajemen investasi, yaitu selain kegiatan sbb: kegiatan penjaminan emisi efek, kegiatan lain yang berkaitan dengan aksi korporasi dari perusahaan yang akan atau telah melakukan penawaran umum; melakukan transaksi efek untuk kepentingan sendiri dan pihak lain, dan\\/atau pemasaran efek untuk kepentingan perusahaan efek lain; melakukan kegiatan usaha jual beli efek bersifat utang dan sukuk untuk kepentingan sendiri dan\\/ atau nasabahnya; melakukan kegiatan penawaran kepada calon nasabah untuk menjadi nasabah perantara pedagang efek; memasarkan efek reksa dana berdasarkan kontrak kerja sama dengan manajemen investasi pengelola reksa dana.",
          
        },
        {
          "number": "66151",
          "name": "PEDAGANG BERJANGKA",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang telah menjadi anggota bursa berjangka dan dalam aktivitas usahanya hanya berhak melakukan transaksi kontrak berjangka, kontrak derivatif syariah, dan\\/atau kontrak derivatif lainnya di bursa berjangka untuk diri sendiri atau kelompok usahanya, termasuk pedagang berjangka kontrak berjangka dan pedagang berjangka yang menjadi market maker.",
          
        },
        {
          "number": "66152",
          "name": "PIALANG PERDAGANGAN BERJANGKA",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang melakukan kegiatan jual beli komoditi berdasarkan kontrak berjangka, kontrak derivatif syariah, dan\\/atau kontrak derivatif lainnya atas amanat nasabah dengan menarik sejumlah uang dan\\/atau surat berharga tertentu sebagai margin untuk menjamin transaksi tersebut, termasuk bagi pihak yang menjalankan fungsi sebagai wakil pialang berjangka, pembukaan kantor cabang pialang berjangka, penyaluran amanat luar negeri, dan peserta sistem perdagangan alternatif.",
          
        },
        {
          "number": "66153",
          "name": "PEDAGANG FISIK KOMODITI",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang menyediakan sarana sistem perdagangan untuk melakukan kegiatan jual beli komoditi yang telah ditetapkan sebagai komoditi yang dapat ditransaksikan melalui mekanisme pasar fisik komoditi di bursa berjangka baik atas nama diri sendiri, dan\\/atau memfasilitasi transaksi pelanggan.",
          
        },
        {
          "number": "66154",
          "name": "PERANTARA PERDAGANGAN FISIK KOMODITI",
          "description": "Kelompok ini mencakup kegiatan badan usaha yang bertindak selaku perantara untuk menyalurkan transaksi jual atau beli Komoditi atas perintah Peserta ke pasar fisik komoditi.",
          
        },
        {
          "number": "66159",
          "name": "PERANTARA PERDAGANGAN BERJANGKA KOMODITI LAINNYA",
          "description": "Kelompok usaha ini mencakup kegiatan yang belum termasuk di dalam kelompok 66151, 66152, 66153 dan 66154. Kegiatan pada kelompok ini untuk aktivitas yang sebagian besar dilakukan dengan menjalankan fungsi keperantaraan yang berkaitan dengan nasabah, klien atau pelanggan.",
          
        },
        {
          "number": "66160",
          "name": "KEGIATAN PENUKARAN VALUTA ASING (MONEY CHANGER)",
          "description": "Kelompok ini mencakup kegiatan usaha jual dan beli uang kertas asing serta pembelian cek pelawat.",
          
        },
        {
          "number": "66171",
          "name": "PENYELENGGARA SISTEM PERDAGANGAN ALTERNATIF",
          "description": "Kelompok ini mencakup bidang usaha yang melakukan kegiatan jual beli kontrak derivatif selain kontrak berjangka dan kontrak derivatif syariah, untuk dan atas nama sendiri dalam mekanisme sistem perdagangan alternatif.",
          
        },
        {
          "number": "66172",
          "name": "PENGELOLA SENTRA DANA BERJANGKA",
          "description": "Kelompok ini mencakup kegiatan usaha yang berkaitan dengan penghimpunan dan pengelolaan dana dari peserta sentra dana berjangka untuk diinvestasikan dalam kontrak berjangka, termasuk juga untuk pihak yang menjalankan fungsi sebagai wakil pengelola sentra dana berjangka.",
          
        },
        {
          "number": "66173",
          "name": "PENASIHAT BERJANGKA",
          "description": "Kelompok ini mencakup kegiatan konsultasi (penasihat) perdagangan berjangka yaitu memberikan nasihat kepada pihak lain mengenai jual beli komoditas berdasarkan kontrak berjangka, kontrak derivatif syariah, dan\\/atau kontrak derivatif lainnya dengan menerima imbalan, termasuk juga untuk pihak yang menjalankan fungsi sebagai wakil penasihat berjangka.",
          
        },
        {
          "number": "66174",
          "name": "PENGELOLA TEMPAT PENYIMPANAN FISIK KOMODITI",
          "description": "Kelompok ini mencakup kegiatan pengelolaan tempat penyimpanan, pemeliharaan, pengawasan dan\\/atau penyerahan komoditi yang telah ditetapkan sebagai komoditi yang dapat ditransaksikan melalui pasar fisik di bursa berjangka.",
          
        },
        {
          "number": "66179",
          "name": "AKTIVITAS PENUNJANG PERDAGANGAN BERJANGKA KOMODITI LAINNYA",
          "description": "Kelompok usaha ini mencakup kegiatan yang belum termasuk di dalam kelompok 66171, 66172, 66173, dan 66174. Kegiatan pada kelompok ini mencakup kegiatan usaha penunjang dan\\/atau kegiatan untuk memperoleh manfaat baik secara langsung maupun tidak langsung dari industri perdagangan berjangka komoditi dan\\/atau perdagangan fisik komoditi yang tidak diklasifikasikan di tempat lain.",
          
        },
        {
          "number": "66191",
          "name": "BIRO ADMINISTRASI EFEK",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang berdasarkan kontrak dengan emiten melaksanakan pencatatan pemilikan efek dan pembagian hak yang berkaitan dengan efek.",
          
        },
        {
          "number": "66192",
          "name": "KUSTODIAN (CUSTODIAN)",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang memberikan jasa penitipan efek dan harta lain yang berkaitan dengan efek serta jasa lain, termasuk menerima deviden, bunga, dan hak-hak lain, menyelesaikan transaksi efek, dan mewakili pemegang rekening yang menjadi nasabahnya. Seperti bank kustodian dan sebagainya.",
          
        },
        {
          "number": "66193",
          "name": "WALI AMANAT (TRUSTEE)",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang dipercayakan untuk mewakili kepentingan seluruh pemegang efek bersifat utang atau sukuk.",
          
        },
        {
          "number": "66194",
          "name": "PERUSAHAAN PEMERINGKAT EFEK",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang memeringkat efek bersifat utang, sukuk, efek beragun aset atau efek lain yang dapat diperingkat serta pihak sebagai entitas (company rating), termasuk reksa dana dan dana investasi real estat berbentuk kontrak investasi kolektif. Pemeringkatan ini dilakukan untuk memberikan informasi kepada investor untuk mengetahui kemampuan suatu pihak untuk memenuhi kewajiban pembayaran secara penuh dan tepat waktu, yang dinyatakan dengan suatu sistem peringkat yang telah ditentukan.",
          
        },
        {
          "number": "66195",
          "name": "AHLI SYARIAH PASAR MODAL (ASPM)",
          "description": "Kelompok ini mencakup kegiatan orang perseorangan yang memiliki pengetahuan dan pengalaman di bidang syariah; atau badan usaha yang pengurus dan pegawainya memiliki pengetahuan dan pengalaman di bidang syariah, yang memberikan nasihat dan\\/atau mengawasi pelaksanaan penerapan prinsip syariah di pasar modal dalam kegiatan usaha perusahaan dan\\/atau memberikan pernyataan kesesuaian syariah atas produk atau jasa syariah di pasar modal.",
          
        },
        {
          "number": "66199",
          "name": "AKTIVITAS PENUNJANG JASA KEUANGAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha kegiatan penunjang keuangan lainnya yang tidak diklasifikasikan di tempat lain, seperti penasihat keuangan, mortgage advisers and brokers.6621 AKTIVITAS PENUNJANG ASURANSI, PENJAMINAN DAN DANA PENSIUN Golongan ini mencakup usaha aktivitas:- penilaian risiko dan kerugian dengan kegiatan usaha meliputi penilai risiko asuransi dan penilai kerugian asuransi- agen, broker, pialang asuransi dan penjaminan dengan kegiatan usaha meliputi agen asuransi, pialang asuransi, pialang reasuransi, agen penjamin, broker penjaminan, dan broker penjaminan ulang.- penunjang lainnya untuk asuransi, penjaminan, dan dana pensiun lainnya dengan kegiatan usaha meliputi: konsultan aktuaria; pemeringkat usaha mikro, kecil, menengah dan koperasi; dan aktivitas penunjang asuransi, penjaminan dan dana pensiun lainnya.",
          
        },
        {
          "number": "66211",
          "name": "AKTIVITAS PENILAI RISIKO ASURANSI",
          "description": "Kelompok ini mencakup usaha penilaian risiko atau pemberian pendapat ahli terhadap objek pertanggungan yang akan diasuransikan. Kegiatan penilai risiko asuransi (risk surveyor) dilakukan sebelum penutupan asuransi, dan tidak diatur secara khusus dalam ketentuan Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "66212",
          "name": "AKTIVITAS PENILAI KERUGIAN ASURANSI",
          "description": "Kelompok ini mencakup kegiatan usaha penilaian klaim dan\\/atau jasa konsultasi atas objek asuransi. Kegiatan penilai kerugian asuransi (loss adjuster) dilakukan pada saat terjadi klaim, dan diatur sesuai dengan ketentuan Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "66221",
          "name": "AKTIVITAS AGEN ASURANSI",
          "description": "Kelompok ini mencakup kegiatan usaha yang bertindak untuk dan atas nama perusahaan asuransi atau perusahaan asuransi syariah dan memenuhi persyaratan untuk mewakili perusahaan asuransi atau perusahaan asuransi syariah memasarkan produk asuransi atau produk asuransi syariah.",
          
        },
        {
          "number": "66222",
          "name": "AKTIVITAS PIALANG ASURANSI",
          "description": "Kelompok ini mencakup kegiatan usaha jasa konsultasi dan\\/atau keperantaraan dalam penutupan asuransi atau asuransi syariah serta penanganan penyelesaian klaimnya dengan bertindak untuk dan atas nama pemegang polis, tertanggung, atau peserta.",
          
        },
        {
          "number": "66223",
          "name": "AKTIVITAS PIALANG REASURANSI",
          "description": "Kelompok ini mencakup kegiatan usaha jasa konsultasi dan\\/atau keperantaraan dalam penempatan reasuransi atau penempatan reasuransi syariah serta penanganan penyelesaian klaimnya dengan bertindak untuk dan atas nama perusahaan asuransi, perusahaan asuransi syariah, perusahaan penjaminan, perusahaan penjaminan syariah, perusahaan reasuransi, atau perusahaan reasuransi syariah yang melakukan penempatan reasuransi atau reasuransi syariah.",
          
        },
        {
          "number": "66224",
          "name": "AKTIVITAS AGEN PENJAMIN",
          "description": "Kelompok ini mencakup kegiatan usaha yang melakukan pemasaran kegiatan usaha penjaminan untuk dan atas nama perusahaan penjaminan atau perusahaan penjaminan syariah.",
          
        },
        {
          "number": "66225",
          "name": "AKTIVITAS BROKER PENJAMINAN",
          "description": "Kelompok ini mencakup kegiatan memberikan jasa konsultasi dan\\/atau keperantaraan dalam pemberian penjaminan serta penanganan penyelesaian klaimnya dengan bertindak untuk dan atas nama terjamin.",
          
        },
        {
          "number": "66226",
          "name": "AKTIVITAS BROKER PENJAMINAN ULANG",
          "description": "Kelompok ini mencakup kegiatan memberikan jasa konsultasi dan\\/atau keperantaraan dalam pemberian penjaminan ulang serta penanganan penyelesaian klaimnya dengan bertindak untuk dan atas nama terjamin.",
          
        },
        {
          "number": "66291",
          "name": "AKTIVITAS KONSULTAN AKTUARIA",
          "description": "Kelompok ini mencakup usaha aktuaria, dengan kegiatan usaha meliputi kegiatan yang menerapkan prinsip-prinsip matematika untuk menentukan atau menghitung kemungkinan-kemungkinan berdasarkan data-data statistik dalam menyusun atau merancang berbagai jenis program asuransi jiwa, dan menentukan besarnya tarif premi.",
          
        },
        {
          "number": "66292",
          "name": "AKTIVITAS PEMERINGKAT USAHA MIKRO, KECIL, MENENGAH DAN KOPERASI",
          "description": "Kelompok ini mencakup kegiatan usaha yang memberikan layanan pemeringkatan bagi usaha mikro, kecil, menengah dan koperasi.",
          
        },
        {
          "number": "66299",
          "name": "AKTIVITAS PENUNJANG ASURANSI, DAN DANA PENSIUN LAINNYA",
          "description": "Kelompok ini mencakup usaha penunjang asuransi, penjaminan, dan dana pensiun lainnya yang belum diklasifikasikan di tempat lain.",
          
        },
        {
          "number": "66311",
          "name": "MANAJER INVESTASI",
          "description": "Kelompok ini mencakup kegiatan usaha pihak yang mengelola portofolio efek untuk para nasabah atau mengelola portofolio investasi kolektif untuk sekelompok nasabah, kecuali perusahaan asuransi, dana pensiun, dan bank yang melakukan sendiri kegiatan usahanya berdasarkan peraturan perundang-undangan yang berlaku.",
          
        },
        {
          "number": "66312",
          "name": "MANAJER INVESTASI SYARIAH",
          "description": "Kelompok ini mencakup kegiatan usaha manajer investasi yang dalam anggaran dasarnya menyatakan bahwa: kegiatan dan jenis usaha; cara pengelolaan; dan\\/atau jasa yang diberikan, dilakukan berdasarkan prinsip syariah di pasar modal.",
          
        },
        {
          "number": "66321",
          "name": "PENASIHAT INVESTASI PERORANGAN",
          "description": "Kelompok ini mencakup kegiatan penasihat investasi yang dilakukan oleh perorangan yaitu memberikan nasihat kepada pihak lain mengenai penjualan atau pembelian efek dengan menerima imbalan jasa.",
          
        },
        {
          "number": "66322",
          "name": "PENASIHAT INVESTASI BERBENTUK PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan penasihat investasi yang dilakukan oleh perusahaan yaitu memberikan nasihat kepada pihak lain mengenai penjualan atau pembelian efek dengan menerima imbalan jasa.",
          
        },
        {
          "number": "66390",
          "name": "AKTIVITAS MANAJEMEN DANA LAINNYA",
          "description": "Kelompok ini mencakup kegiatan portofolio dan manajemen pendanaan atas dasar balas jasa atau kontrak, seperti manajemen dana bersama selain dana investasi dan dana pensiun di luar kegiatan manajemen investasi dan penasihat investasi.",
          
        },
        {
          "number": "66411",
          "name": "PENYEDIA JASA PEMBAYARAN (PJP)",
          "description": "Kelompok ini mencakup kegiatan yang berkaitan dengan penyediaan jasa pembayaran kepada pengguna akhir (end user) jasa layanan Sistem Pembayaran (SP) pada sisi front end, yang mencakup aktivitas antara lain: menampilkan informasi sumber dana; menginisiasi transaksi\\/acquiring (dompet elektronik, acquirer dan payment gateway); menerbitkan instrumen\\/akun pembayaran; layanan remitansi\\/transfer dana.",
          
        },
        {
          "number": "66412",
          "name": "PENYELENGGARA INFRASTRUKTUR SISTEM PEMBAYARAN (PIP)",
          "description": "Kelompok ini mencakup kegiatan yang berkaitan dengan penyelenggaraan infrastruktur sistem pembayaran yang utamanya digunakan untuk memfasilitasi transaksi Penyedia Jasa Pembayaran (PJP), baik untuk kepentingan PJP sendiri maupun kepentingan pengguna akhir, yang mencakup aktivitas antara lain penyelenggaraan fungsi sebagai prinsipal, switching, kliring, penyelesaian akhir (setelmen).",
          
        },
        {
          "number": "66413",
          "name": "PENYELENGGARA PENUNJANG SISTEM PEMBAYARAN",
          "description": "Kelompok ini mencakup kegiatan yang berkaitan dengan penyelenggaraan kegiatan yang mendukung pelaksanaan kegiatan Penyedia Jasa Pembayaran (PJP) dan\\/atau Penyelenggara Infrastruktur Sistem Pembayaran (PIP) dalam melakukan pemrosesan transaksi pembayaran. Contoh pencetakan kartu, personalisasi pembayaran, penyediaan pusat data dan\\/atau pusat pemulihan bencana, penyediaan terminal, penyediaan fitur keamanan instrumen pembayaran dan\\/atau transaksi pembayaran, penyediaan teknologi pendukung transaksi nirkontak (contactless), penyediaan penerusan (routing) data pendukung pemrosesan transaksi pembayaran.",
          
        },
        {
          "number": "66420",
          "name": "PENYELENGGARA KEGIATAN JASA PENGOLAHAN UANG RUPIAH",
          "description": "Kelompok ini mencakup kegiatan yang berkaitan dengan distribusi uang rupiah, penyimpanan uang rupiah di khazanah, pemrosesan uang rupiah dan\\/atau, pengisian, pengambilan, dan\\/atau pemantauan kecukupan uang rupiah pada Automated Teller Machine (ATM), Cash Deposit Machine (CDM), Cash Recycling Machine (CRM) dan\\/atau mesin transaksi uang rupiah tunai lain.Kelompok ini termasuk dapat melakukan kerja sama untuk kegiatan pembawaan uang kertas asing ke dalam dan ke luar daerah pabean Indonesia, melakukan penyediaan dan pemeliharaan Automated Teller Machine (ATM), Cash Deposit Machine (CDM), Cash Recycling Machine (CRM) dan\\/atau mesin transaksi uang rupiah tunai lain.",
          
        },
        {
          "number": "68111",
          "name": "REAL ESTAT YANG DIMILIKI SENDIRI ATAU DISEWA",
          "description": "Kelompok ini mencakup usaha pembelian, penjualan, persewaan dan pengoperasian real estat baik yang dimiliki sendiri maupun disewa, seperti bangunan apartemen, bangunan hunian dan bangunan non hunian (seperti fasilitas penyimpanan\\/gudang, mall, pusat perbelanjaan dan lainnya) serta penyediaan rumah dan flat atau apartemen dengan atau tanpa perabotan untuk digunakan secara permanen, baik dalam bulanan atau tahunan. Termasuk kegiatan penjualan tanah, pengembangan gedung untuk dioperasikan sendiri (untuk penyewaan ruang-ruang di gedung tersebut), pembagian real estat menjadi tanah kapling tanpa pengembangan lahan dan pengoperasian kawasan hunian untuk rumah yang bisa dipindah- pindah.",
          
        },
        {
          "number": "68112",
          "name": "PENYEWAAN VENUE PENYELENGGARAAN AKTIFITAS MICE DAN EVENT KHUSUS",
          "description": "Kelompok ini mencakup menyewakan tempat dan fasilitas untuk penyelenggaraan kegiatan pertemuan, perjalanan insentif, konvensi, dan pameran atau untuk penyelenggaraan event khusus. Penyewaan dilakukan dalam periode tertentu untuk masa persiapan, penyelenggaraan acara, dan masa pembongkaran. Tempat yang dimaksud mencakup convention center, exhibition center, special venue\\/ multi purpose venue.",
          
        },
        {
          "number": "68120",
          "name": "KAWASAN PARIWISATA",
          "description": "Kelompok ini mencakup pengusahaan lahan dengan luas sekurang- kurangnya 100 hektar dengan menata dan membagi lebih lanjut menjadi satuan-satuan simpul atau lingkungan tertentu, membangun atau menyewakan satuan-satuan simpul untuk pembangunan usaha sarana dan prasarana wisata yang diperlukan dengan persyaratan yang telah dipersiapkan sebelumnya, melaksanakan dan atau mengawasi pembangunan usaha pariwisata sesuai persyaratan yang ada serta membangun atau menyediakan tempat untuk keperluan administrasi usaha kawasan pariwisata.",
          
        },
        {
          "number": "68130",
          "name": "KAWASAN INDUSTRI",
          "description": "Kelompok ini mencakup pengusahaan lahan dengan luas sekurang- kurangnya 50 hektar dalam satu hamparan yang dijadikan kawasan tempat pemusatan kegiatan industri yang dilengkapi dengan sarana dan prasarana penunjang yang dikembangkan dan dikelola oleh perusahaan kawasan industri yang telah memiliki izin usaha kawasan industri. Termasuk pengusahaan lahan kawasan industri tertentu untuk usaha mikro, kecil, dan menengah paling rendah 5 (lima) hektar dalam satu hamparan.",
          
        },
        {
          "number": "68200",
          "name": "REAL ESTAT ATAS DASAR BALAS JASA (FEE) ATAU KONTRAK",
          "description": "Kelompok ini mencakup kegiatan penyediaan real estat atas dasar balas jasa atau kontrak, termasuk jasa yang berkaitan dengan real estat seperti kegiatan agen dan makelar real estat, perantara pembelian, penjualan dan penyewaan real estat atas dasar balas jasa atau kontrak, pengelolaan real estat atas dasar balas jasa atau kontrak, jasa penaksiran real estat dan agen pemegang wasiat real estat.",
          
        },
        {
          "number": "69101",
          "name": "AKTIVITAS PENGACARA",
          "description": "Kelompok ini mencakup kegiatan pengacara\\/penasihat hukum, lembaga bantuan hukum serta jasa hukum lainnya, dalam hal bantuan nasihat dan perwakilan dalam kasus perdata, kasus pidana, sengketa tata usaha negara, perselisihan tenaga kerja, legal audit dan kegiatan lainnya. Badan pelaksana peradilan dimasukkan dalam kelompok 84233.",
          
        },
        {
          "number": "69102",
          "name": "AKTIVITAS KONSULTAN HUKUM",
          "description": "Kelompok ini mencakup kegiatan persiapan dokumen hukum, dokumen badan hukum, perjanjian kerjasama atau dokumen yang serupa dalam kaitan dengan pembentukan perusahaan, penyiapan akta notaris, surat wasiat, trust dan sebagainya dan kegiatan lainnya",
          
        },
        {
          "number": "69103",
          "name": "AKTIVITAS KONSULTAN KEKAYAAN INTELEKTUAL",
          "description": "Kelompok ini mencakup kegiatan pengajuan dan pengurusan permohonan dan kegiatan lain yang terkait di bidang kekayaan intelektual meliputi paten, hak cipta, merek, indikasi geografis, desain industri, desain tata letak sirkuit terpadu, rahasia dagang, dan lainnya.",
          
        },
        {
          "number": "69104",
          "name": "AKTIVITAS NOTARIS DAN PEJABAT PEMBUAT AKTA TANAH",
          "description": "Kelompok ini mencakup kegiatan notaris, dan kegiatan lainnya notaris umum, notaris hukum sipil, dan kegiatan lainnya juru sita, arbiter, pemeriksa dan liperi. Termasuk dalam kelompok ini kegiatan terkait perjanjian jual beli tanah dan bangunan oleh pejabat pembuat akta tanah.",
          
        },
        {
          "number": "69109",
          "name": "AKTIVITAS HUKUM LAINNYA",
          "description": "Kelompok ini mencakup kegiatan hukum lainnya.",
          
        },
        {
          "number": "69201",
          "name": "AKTIVITAS AKUNTANSI, PEMBUKUAN DAN PEMERIKSA",
          "description": "Kelompok ini mencakup kegiatan penyediaan jasa pembukuan dan akuntansi, penyusunan dan analisis laporan keuangan, persiapan atau pemeriksaan\\/audit laporan keuangan dan pengujian laporan dna sertifikasi keakuratannya.",
          
        },
        {
          "number": "69202",
          "name": "AKTIVITAS KONSULTASI PAJAK",
          "description": "Kelompok ini mencakup kegiatan penyediaan jasa konsultasi perpajakan seperti penyiapan pengembalian pajak pendapatan usaha atau perorangan. Termasuk dalam kelompok ini penyediaan jasa bantuan nasihat dan perwakilan (selain perwakilan hukum) atas nama klien dihadapan petugas pajak.",
          
        },
        {
          "number": "70100",
          "name": "AKTIVITAS KANTOR PUSAT",
          "description": "Kelompok ini mencakup pengawasan dan pengelolaan unit-unit perusahaan yang lain atau enterprise; pengusahaan strategi atau perencanaan organisasi dan pembuatan keputusan dari peraturan perusahaan atau enterprise. Unit-unit dalam kelompok ini melakukan kontrol operasi pelaksanaan dan mengelola operasi unit-unit yang berhubungan. Kegiatan yang termasuk dalam kelompok ini antara lain kantor pusat, kantor administrasi pusat, kantor yang berbadan hukum, kantor distrik dan kantor wilayah dan kantor manajemen cabang.",
          
        },
        {
          "number": "70201",
          "name": "AKTIVITAS KONSULTANSI PARIWISATA",
          "description": "Kelompok ini mencakup kegiatan penyedia jasa konsultansi pariwisata profesional, antara lain penyampaian pandangan, saran, dan atau kajian terkait studi kelayakan, perencanaan, pengorganisasian, pengarahan, pengkoordinasian, pengawasan, pelaporan, penganggaran dan atau fungsi manajemen lainnya di bidang kepariwisataan.",
          
        },
        {
          "number": "70202",
          "name": "AKTIVITAS KONSULTANSI TRANSPORTASI",
          "description": "Kelompok ini mencakup kegiatan konsultansi transportasi, antara lain penyampaian pandangan, saran, penyusunan studi kelayakan, perencanaan, pengawasan, manajemen dan penelitian di bidang transportasi baik darat, laut, maupun udara. Termasuk manajemen keamanan pelabuhan.",
          
        },
        {
          "number": "70203",
          "name": "AKTIVITAS KEHUMASAN",
          "description": "Kelompok ini mencakup pelaksanaan aktivitas komunikasi untuk membangun dan mempertahankan hubungan yang baik dan bermanfaat antara organisasi, bisnis, atau personal dengan publik yang mempengaruhi citra organisasi maupun personal.",
          
        },
        {
          "number": "70204",
          "name": "AKTIVITAS KONSULTANSI MANAJEMEN INDUSTRI",
          "description": "Kelompok ini mencakup kegiatan bantuan nasihat, bimbingan dan operasional usaha dan permasalahan organisasi dan manajemen perusahaan industri, seperti perencanaan strategi dan organisasi; keputusan berkaitan dengan keuangan; tujuan dan kebijakan pemasaran; perencanaan, praktik dan kebijakan sumber daya manusia; perencanaan penjadwalan dan pengontrolan produksi.",
          
        },
        {
          "number": "70209",
          "name": "AKTIVITAS KONSULTASI MANAJEMEN LAINNYA",
          "description": "Kelompok ini mencakup ketentuan bantuan nasihat, bimbingan dan operasional usaha dan permasalahan organisasi dan manajemen lainnya, seperti perencanaan strategi dan organisasi; keputusan berkaitan dengan keuangan; tujuan dan kebijakan pemasaran; perencanaan, praktik dan kebijakan sumber daya manusia; perencanaan penjadwalan dan pengontrolan produksi. Penyediaan jasa usaha ini dapat mencakup bantuan nasihat, bimbingan dan operasional berbagai fungsi manajemen, konsultasi manajemen olah agronomist dan agricultural economis pada bidang pertanian dan sejenisnya, rancangan dari metode dan prosedur akuntansi, program akuntansi biaya, prosedur pengawasan anggaran belanja, pemberian nasihat dan bantuan untuk usaha dan pelayanan masyarakat dalam perencanaan, pengorganisasian, efisiensi dan pengawasan, informasi manajemen dan lain-lain. Termasuk jasa pelayanan studi investasi infrastruktur.",
          
        },
        {
          "number": "71101",
          "name": "AKTIVITAS ARSITEKTUR",
          "description": "Kelompok ini mencakup kegiatan penyediaan jasa konsultasi arsitek, seperti penyusunan studi awal arsitektur, jasa desain arsitektural, jasa nasihat dan pradesain arsitektural, jasa arsitektural lainnya, jasa penilai perawatan dan kelayakan bangunan gedung, jasa pengembangan pemanfaatan ruang, wilayah, perkotaan, lingkungan bangunan dan lanskap, perancangan bangunan gedung dan lingkungannya, pelestarian bangunan gedung dan lingkungannya, perancangan tata bangunan dan lingkungannya, penyusunan dokumen perencanaan teknis, pengawasan aspek arsitektur pada pelaksanaan konstruksi bangunan gedung dan lingkungannya, perencanaan kota dan tata guna lahan, manajemen proyek dan manajemen konstruksi, pendampingan masyarakat, konstruksi lain. Objek berdasarkan klasifikasi Bangunan Gedung sesuai dengan International Building Code: Assembly\\/Pertemuan; Bussiness\\/Bisnis; Educational\\/Pendidikan; Factory and Industrial\\/Pabrik dan Bangunan Industri; High Hazard\\/Bangunan Resiko Tinggi; Institutional\\/Kelembagaan dan Pemerintahan; Mercantile\\/Perdagangan; Residential\\/Hunian; Storage\\/Gudang; dan Utility and Miscellanous\\/Bangunan utilitas dan lain- lain. Termasuk jasa inspeksi gedung atau bangunan, gudang, dan bangunan sipil lainnya.",
          
        },
        {
          "number": "64200",
          "name": "AKTIVITAS PERUSAHAAN HOLDING",
          "description": "Kelompok ini mencakup kegiatan dari perusahaan holding (holding companies), yaitu perusahaan yang menguasai aset dari sekelompok perusahaan subsidiari dan kegiatan utamanya adalah kepemilikan kelompok tersebut. &quot;Holding Companies&quot; tidak terlibat dalam kegiatan usaha perusahaan subsidiarinya. Kegiatannya mencakup jasa yang diberikan penasihat (counsellors) dan perunding (negotiators) dalam merancang merger dan akuisisi perusahaan.",
          
        },
        {
          "number": "64300",
          "name": "TRUST, PENDANAAN DAN ENTITAS KEUANGAN SEJENIS",
          "description": "Kelompok ini mencakup entitas legal yang dibentuk untuk mengumpulkan saham atau sekuritas atau aset keuangan lainnya, tanpa pengaturan, atas nama pemegang saham atau yang memperoleh keuntungan. Portofolionya disesuaikan untuk mendapatkan karakteristik investasi yang spesifik, seperti diversifikasi, risiko, tingkat pengembalian dan perubahan harga. Entitas ini memperoleh bunga, dividen, dan pendapatan properti lain, tetapi mempunyai sedikit bahkan tidak mempunyai pekerjaan dan tidak ada pendapatan dari penjualan jasa.Kelompok ini mencakup pembiayaan investasi open-end, pembiayaan investasi closed-end, trust, estates atau perantara account, diawasi atas nama penerima keuntungan berdasarkan perjanjian trust surat wasiat atau perjanjian perantara, unit pembiayaan trust investasi.",
          
        },
        {
          "number": "64400",
          "name": "OTORITAS JASA KEUANGAN (OJK)",
          "description": "Kelompok ini mencakup kegiatan Otoritas Jasa Keuangan terkait dengan fungsi pengaturan, pengawasan, pemeriksaan, dan penyidikan terhadap: kegiatan jasa keuangan di sektor perbankan; kegiatan jasa keuangan di sektor pasar modal; dan kegiatan jasa keuangan di sektor perasuransian, dana pensiun, lembaga pembiayaan, dan lembaga jasa keuangan lainnya.",
          
        },
        {
          "number": "64500",
          "name": "LEMBAGA PENJAMIN SIMPANAN (LPS)",
          "description": "Kelompok ini mencakup kegiatan perolehan dana yang berasal dari kontribusi bank saat pertama kali menjadi peserta, pembayaran premi penjaminan, dan hasil investasi. Dalam rangka memelihara stabilitas sistem perbankan, LPS melaksanakan penanganan (resolusi) bank gagal dengan beberapa metode yaitu Purchase and Assumptions (P&amp;A), bridge bank, Penyertaan Modal Sementara (PMS), dan likuidasi bank.",
          
        },
        {
          "number": "64911",
          "name": "PERUSAHAAN PEMBIAYAAN KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha perusahaan pembiayaan yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi pembiayaan barang dan\\/atau jasa, yaitu: pembiayaan investasi; pembiayaan modal kerja; pembiayaan multiguna; dan\\/atau kegiatan usaha pembiayaan lain berdasarkan persetujuan Otoritas Jasa Keuangan. Selain kegiatan usaha tersebut, perusahaan pembiayaan konvensional dalam kelompok ini dapat melakukan sewa operasi (operating lease) dan\\/atau kegiatan berbasis imbal jasa sepanjang tidak bertentangan dengan ketentuan peraturan perundang-undangan di sektor jasa keuangan.",
          
        },
        {
          "number": "64912",
          "name": "PERUSAHAAN PEMBIAYAAN SYARIAH",
          "description": "Kelompok ini mencakup usaha perusahaan pembiayaan yang seluruh kegiatan usahanya melakukan pembiayaan syariah, meliputi pembiayaan jual beli; pembiayaan investasi; dan\\/atau pembiayaan jasa.",
          
        },
        {
          "number": "64913",
          "name": "UNIT USAHA SYARIAH PERUSAHAAN PEMBIAYAAN",
          "description": "Kelompok ini mencakup kegiatan unit kerja dari kantor pusat perusahaan pembiayaan yang melaksanakan kegiatan pembiayaan syariah dan\\/atau berfungsi sebagai kantor induk dari kantor yang melaksanakan pembiayaan syariah.",
          
        },
        {
          "number": "64921",
          "name": "PERGADAIAN KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha pergadaian yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi: penyaluran uang pinjaman dengan jaminan berdasarkan hukum gadai; penyaluran uang pinjaman dengan jaminan berdasarkan fidusia; pelayanan jasa titipan barang berharga; pelayanan jasa taksiran; kegiatan lain yang tidak terkait usaha pergadaian yang memberikan pendapatan berdasarkan komisi (fee based income) sepanjang tidak bertentangan dengan peraturan perundang- undangan di bidang jasa keuangan; dan\\/atau kegiatan usaha lain dengan persetujuan Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "64922",
          "name": "PERGADAIAN SYARIAH",
          "description": "Kelompok ini mencakup usaha pergadaian syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi: penyaluran uang pinjaman dengan jaminan berdasarkan hukum gadai; penyaluran uang pinjaman dengan jaminan berdasarkan fidusia; pelayanan jasa titipan barang berharga; pelayanan jasa taksiran; kegiatan lain yang tidak terkait usaha pergadaian yang memberikan pendapatan berdasarkan komisi (fee based income) sepanjang tidak bertentangan dengan peraturan perundang-undangan di bidang jasa keuangan; dan\\/atau kegiatan usaha lain dengan persetujuan Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "64923",
          "name": "UNIT USAHA SYARIAH PERGADAIAN",
          "description": "Kelompok ini mencakup kegiatan unit kerja dari kantor pusat perusahaan pergadaian konvensional yang melaksanakan kegiatan usaha pergadaian berdasarkan prinsip syariah atau berfungsi sebagai kantor induk dari kantor di luar kantor pusat perusahaan pergadaian konvensional yang melaksanakan kegiatan usaha pergadaian berdasar prinsip syariah.",
          
        },
        {
          "number": "64931",
          "name": "PERUSAHAAN MODAL VENTURA KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha modal ventura yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi: penyertaan saham (equity participation); penyertaan melalui pembelian obligasi konversi (quasi equity participation); pembiayaan melalui pembelian surat utang yang diterbitkan pasangan usaha pada tahap rintisan awal (start-up) dan\\/atau pengembangan usaha; dan\\/atau pembiayaan usaha produktif. Dalam melakukan usaha modal ventura, perusahaan modal ventura dapat mengelola dana ventura. Selain usaha modal ventura, perusahaan modal ventura dapat menyelenggarakan kegiatan usaha lain yaitu kegiatan jasa berbasis fee dan\\/atau kegiatan usaha lain dengan persetujuan Otoritas Jasa Keuangan. Kegiatan usaha modal ventura dapat disertai dengan pendampingan kepada pasangan usaha dan\\/atau debitur.",
          
        },
        {
          "number": "64932",
          "name": "PERUSAHAAN MODAL VENTURA SYARIAH",
          "description": "Kelompok ini mencakup badan usaha yang melakukan kegiatan usaha modal ventura syariah, pengelolaan dana ventura, dan kegiatan usaha lain dengan persetujuan Otoritas Jasa Keuangan yang seluruhnya dilaksanakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi: investasi yang terdiri dari penyertaan saham (equity participation), pembelian sukuk atau obligasi syariah konversi, pembelian sukuk atau obligasi syariah yang diterbitkan pasangan usaha pada tahap rintisan awal (start-up) dan\\/atau pengembangan usaha, dan\\/atau pembiayaan berdasarkan prinsip bagi hasil; pelayanan jasa, dan\\/atau kegiatan usaha lain berdasarkan persetujuan Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "64933",
          "name": "UNIT USAHA SYARIAH MODAL VENTURA",
          "description": "Kelompok ini mencakup unit kerja dari kantor pusat Perusahaan Modal Ventura (PMV) yang berfungsi sebagai kantor induk dari kantor yang melaksanakan kegiatan usaha modal ventura syariah.",
          
        },
        {
          "number": "64941",
          "name": "PERUSAHAAN PEMBIAYAAN INFRASTRUKTUR KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha perusahaan pembiayaan infrastruktur yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi pembiayaan dalam bentuk penyediaan dana pada proyek infrastruktur, yaitu pemberian pinjaman langsung (direct lending) untuk pembiayaan infrastruktur, refinancing atas infrastruktur yang telah dibiayai pihak lain, dan\\/atau pemberian pinjaman subordinasi (subordinated loans) yang berkaitan dengan pembiayaan infrastruktur. Untuk mendukung kegiatan usaha, perusahaan pembiayaan infrastruktur dapat pula melakukan pemberian dukungan kredit (credit enhancement), pemberian jasa konsultasi (advisory services), penyertaan modal (equity investment), upaya mencarikan swap market yang berkaitan dengan pembiayaan infrastruktur, dan\\/atau kegiatan atau pemberian fasilitas lain yang terkait dengan pembiayaan infrastruktur setelah memperoleh persetujuan dari Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "64942",
          "name": "PERUSAHAAN PEMBIAYAAN INFRASTRUKTUR SYARIAH",
          "description": "Kelompok ini mencakup usaha perusahaan pembiayaan infrastruktur syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pembiayaan dalam bentuk penyediaan dana pada proyek infrastruktur, yaitu pemberian pembiayaan langsung (direct lending) untuk pembiayaan infrastruktur, refinancing atas infrastruktur yang telah dibiayai pihak lain, dan\\/atau pemberian pembiayaan subordinasi (subordinated loans) yang berkaitan dengan pembiayaan infrastruktur. Untuk mendukung kegiatan usaha, perusahaan pembiayaan infrastruktur syariah dapat pula melakukan pemberian dukungan kredit (credit enhancement), pemberian jasa konsultasi (advisory services), penyertaan modal (equity investment), upaya mencarikan swap market yang berkaitan dengan pembiayaan infrastruktur, dan\\/atau kegiatan atau pemberian fasilitas lain yang terkait dengan pembiayaan infrastruktur setelah memperoleh persetujuan dari Otoritas Jasa Keuangan berdasarkan prinsip syariah.",
          
        },
        {
          "number": "64943",
          "name": "UNIT USAHA SYARIAH PERUSAHAAN PEMBIAYAAN INFRASTRUKTUR",
          "description": "Kelompok ini mencakup kegiatan unit kerja dari kantor pusat perusahaan pembiayaan infrastruktur konvensional yang melaksanakan kegiatan usaha pembiayaan infrastruktur berdasarkan prinsip syariah dan\\/atau yang berfungsi sebagai kantor induk dari kantor di luar kantor pusat perusahaan pembiayaan infrastruktur yang melaksanakan kegiatan usaha pembiayaan infrastruktur berdasar prinsip syariah.",
          
        },
        {
          "number": "64951",
          "name": "LAYANAN PINJAM MEMINJAM UANG BERBASIS TEKNOLOGI INFORMASI (FINTECH P2P LENDING) KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha layanan pinjam meminjam uang berbasis teknologi informasi (fintech peer to peer lending) yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi penyediaan, pengelolaan, dan pengoperasian layanan jasa keuangan untuk mempertemukan pemberi pinjaman dengan penerima pinjaman dalam rangka melakukan perjanjian pinjam meminjam dalam mata uang rupiah secara langsung melalui sistem elektronik dengan menggunakan jaringan internet.",
          
        },
        {
          "number": "64952",
          "name": "LAYANAN PINJAM MEMINJAM UANG BERBASIS TEKNOLOGI INFORMASI (FINTECH P2P LENDING) SYARIAH",
          "description": "Kelompok ini mencakup usaha layanan pinjam meminjam uang berbasis teknologi informasi (fintech peer to peer lending) yang diselenggarakan seluruhnya berdasarkan prinsip syariah, dengan kegiatan usaha meliputi penyediaan, pengelolaan, dan pengoperasian layanan jasa keuangan untuk mempertemukan pemberi pinjaman dengan penerima pinjaman dalam rangka melakukan akad pembiayaan dalam mata uang rupiah secara langsung melalui sistem elektronik dengan menggunakan jaringan internet.",
          
        },
        {
          "number": "64953",
          "name": "UNIT USAHA SYARIAH LAYANAN PINJAM MEMINJAM UANG BERBASIS TEKNOLOGI INFORMASI (FINTECH P2P LENDING)",
          "description": "Kelompok ini mencakup kegiatan unit kerja dari kantor pusat penyelenggara layanan pinjam meminjam uang berbasis teknologi informasi (fintech peer to peer lending) konvensional yang melaksanakan kegiatan usaha layanan pinjam meminjam uang berbasis teknologi informasi (fintech peer to peer lending) berdasarkan prinsip syariah dan\\/atau berfungsi sebagai kantor induk dari kantor yang melaksanakan kegiatan usaha berdasarkan prinsip syariah.",
          
        },
        {
          "number": "64991",
          "name": "LEMBAGA PEMBIAYAAN EKSPOR INDONESIA",
          "description": "Kelompok ini mencakup usaha pembiayaan ekspor nasional, dengan kegiatan usaha meliputi pembiayaan, penjaminan, dan\\/atau asuransi. Kegiatan pembiayaan ekspor nasional dapat dilaksanakan secara konvensional atau berdasarkan prinsip syariah.",
          
        },
        {
          "number": "64992",
          "name": "PERUSAHAAN PEMBIAYAAN SEKUNDER PERUMAHAN",
          "description": "Kelompok ini mencakup usaha pembiayaan sekunder perumahan, dengan kegiatan usaha meliputi sekuritisasi, penyaluran pinjaman atau penyaluran pembiayaan kepada penyalur kredit pemilikan rumah, pelaksanaan tugas khusus dari pemerintah, dan kegiatan usaha lain berdasarkan persetujuan pemegang saham.",
          
        },
        {
          "number": "64999",
          "name": "AKTIVITAS JASA KEUANGAN LAINNYA YTDL, BUKAN ASURANSI DAN DANA PENSIUN",
          "description": "Kelompok ini mencakup kegiatan jasa keuangan lainnya selain fasilitas pembiayaan, penjaminan, dan\\/atau asuransi dalam ekspor nasional, kegiatan usaha pembiayaan sekunder perumahan yang ditugaskan oleh pemerintah.",
          
        },
        {
          "number": "65111",
          "name": "ASURANSI JIWA KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha asuransi jiwa yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi penyelenggaraan jasa penanggulangan risiko yang memberikan pembayaran kepada pemegang polis, tertanggung, atau pihak lain yang berhak dalam hal tertanggung meninggal dunia atau tetap hidup, atau pembayaran lain kepada pemegang polis, tertanggung, atau pihak lain yang berhak pada waktu tertentu yang diatur dalam perjanjian, yang besarnya telah ditetapkan dan\\/atau didasarkan pada hasil pengelolaan dana.",
          
        },
        {
          "number": "65112",
          "name": "ASURANSI JIWA SYARIAH",
          "description": "Kelompok ini mencakup usaha asuransi jiwa syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pengelolaan risiko berdasarkan prinsip syariah guna saling menolong dan melindungi dengan memberikan pembayaran yang didasarkan pada meninggal atau hidupnya peserta, atau pembayaran lain kepada peserta atau pihak lain yang berhak pada waktu tertentu yang diatur dalam perjanjian, yang besarnya telah ditetapkan dan\\/atau didasarkan pada hasil pengelolaan dana.",
          
        },
        {
          "number": "65113",
          "name": "UNIT SYARIAH ASURANSI JIWA",
          "description": "Kelompok ini mencakup kegiatan unit syariah dari kantor pusat perusahaan asuransi jiwa konvensional yang berfungsi sebagai kantor induk dari kantor di luar kantor pusat yang menjalankan kegiatan usaha asuransi jiwa syariah.",
          
        },
        {
          "number": "65121",
          "name": "ASURANSI UMUM KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha asuransi umum yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi penyelenggaraan usaha jasa pertanggungan risiko yang memberikan penggantian kepada tertanggung atau pemegang polis karena kerugian, kerusakan, biaya yang timbul, kehilangan keuntungan, atau tanggung jawab hukum kepada pihak ketiga yang mungkin diderita tertanggung atau pemegang polis karena terjadinya suatu peristiwa yang tidak pasti.",
          
        },
        {
          "number": "65122",
          "name": "ASURANSI UMUM SYARIAH",
          "description": "Kelompok ini mencakup usaha asuransi umum syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pengelolaan risiko berdasarkan prinsip syariah guna saling menolong dan melindungi dengan memberikan penggantian kepada peserta atau pemegang polis karena kerugian, kerusakan, biaya yang timbul, kehilangan keuntungan, atau tanggung jawab hukum kepada pihak ketiga yang mungkin diderita peserta atau pemegang polis karena terjadinya suatu peristiwa yang tidak pasti.",
          
        },
        {
          "number": "65123",
          "name": "UNIT SYARIAH ASURANSI UMUM",
          "description": "Kelompok ini mencakup kegiatan unit kerja dari kantor pusat perusahaan asuransi umum konvensional yang berfungsi sebagai kantor induk dari kantor di luar kantor pusat yang melaksanakan kegiatan usaha asuransi umum berdasar prinsip syariah.",
          
        },
        {
          "number": "65131",
          "name": "PERUSAHAAN PENJAMINAN KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha penjaminan yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi pemberian penjaminan oleh penjamin atas pemenuhan kewajiban finansial terjamin kepada penerima jaminan yang diselenggarakan secara konvensional.Kelompok ini memiliki kegiatan usaha sebagai berikut: penjaminan kredit, pembiayaan, atau pembiayaan berdasarkan prinsip syariah yang diberikan oleh lembaga keuangan; penjaminan pinjaman yang disalurkan oleh koperasi simpan pinjam atau koperasi yang mempunyai unit usaha simpan pinjam kepada anggotanya; dan penjaminan Kredit dan\\/atau pinjaman program kemitraan yang disalurkan oleh badan usaha milik negara dalam rangka program kemitraan dan bina lingkungan. Selain ruang lingkup usaha tersebut, perusahaan penjaminan dapat melakukan kegiatan penjaminan atas surat utang, penjaminan pembelian barang secara angsuran, penjaminan transaksi dagang, penjaminan pengadaan barang dan\\/atau jasa (surety bond), penjaminan bank garansi (kontra bank garansi), penjaminan surat kredit berdokumen dalam negeri, penjaminan letter of credit, penjaminan kepabeanan (customs bond), penjaminan cukai, pemberian jasa konsultasi manajemen terkait dengan kegiatan usaha penjaminan, dan kegiatan usaha lainnya setelah mendapat persetujuan dari Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "65132",
          "name": "PERUSAHAAN PENJAMINAN SYARIAH",
          "description": "Kelompok ini mencakup usaha penjaminan syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pemberian penjaminan oleh penjamin syariah atas pemenuhan kewajiban finansial terjamin kepada penerima jaminan.Kelompok ini memiliki kegiatan usaha sebagai berikut: penjaminan pembiayaan berdasarkan prinsip syariah yang diberikan oleh lembaga keuangan; penjaminan pinjaman atau pembiayaan yang disalurkan oleh koperasi simpan pinjam atau koperasi yang mempunyai unit usaha simpan pinjam kepada anggotanya; dan penjaminan pinjaman atau pembiayaan program kemitraan yang disalurkan oleh badan usaha milik negara dalam rangka program kemitraan dan bina lingkungan, yang dilaksanakan seluruhnya berdasarkan prinsip syariah. Selain ruang lingkup usaha tersebut, perusahaan penjaminan syariah juga dapat melakukan kegiatan berdasarkan prinsip syariah penjaminan atas surat utang, penjaminan pembelian barang secara angsuran, penjaminan transaksi dagang, penjaminan pengadaan barang dan\\/atau jasa (surety bond), penjaminan bank garansi (kontra bank garansi), penjaminan surat kredit berdokumen dalam negeri, penjaminan letter of credit, penjaminan kepabeanan (customs bond), penjaminan cukai, pemberian jasa konsultasi manajemen terkait dengan kegiatan usaha penjaminan, dan kegiatan usaha lainnya setelah mendapat persetujuan dari Otoritas Jasa Keuangan.",
          
        },
        {
          "number": "65133",
          "name": "UNIT USAHA SYARIAH PERUSAHAAN PENJAMINAN",
          "description": "Kelompok ini mencakup kegiatan unit usaha syariah dari perusahaan penjaminan konvensional yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha penjaminan berdasarkan prinsip syariah.",
          
        },
        {
          "number": "65211",
          "name": "REASURANSI KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha reasuransi yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi usaha penyelenggaraan usaha jasa pertanggungan ulang terhadap risiko yang dihadapi oleh perusahaan asuransi, perusahaan penjaminan, atau perusahaan reasuransi lainnya.",
          
        },
        {
          "number": "65212",
          "name": "REASURANSI SYARIAH",
          "description": "Kelompok ini mencakup usaha reasuransi syariah yang seluruhnya diselenggarakan berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pengelolaan risiko berdasarkan prinsip syariah atas risiko yang dihadapi oleh perusahaan asuransi syariah, perusahaan penjaminan syariah, atau perusahaan reasuransi syariah lainnya, termasuk unit syariah dari perusahaan reasuransi konvensional.",
          
        },
        {
          "number": "65213",
          "name": "UNIT SYARIAH REASURANSI",
          "description": "Kelompok ini mencakup kegiatan unit kerja di kantor pusat perusahaan reasuransi konvensional yang berfungsi sebagai kantor induk dari kantor di luar kantor pusat yang melaksanakan kegiatan usaha reasuransi berdasarkan prinsip syariah.",
          
        },
        {
          "number": "65221",
          "name": "PERUSAHAAN PENJAMINAN ULANG KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha perusahaan penjaminan ulang yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi pemberian jaminan atas pemenuhan kewajiban finansial perusahaan penjaminan.",
          
        },
        {
          "number": "65222",
          "name": "PERUSAHAAN PENJAMINAN ULANG SYARIAH",
          "description": "Kelompok ini mencakup usaha penjaminan ulang syariah yang diselenggarakan seluruhnya berdasarkan prinsip syariah, dengan kegiatan usaha meliputi pemberian jaminan atas pemenuhan kewajiban finansial perusahaan penjaminan syariah.",
          
        },
        {
          "number": "65311",
          "name": "DANA PENSIUN PEMBERI KERJA KONVENSIONAL",
          "description": "Kelompok ini mencakup usaha dana pensiun pemberi kerja yang diselenggarakan secara konvensional, dengan kegiatan usaha meliputi pengelolaan dana pensiun yang dibentuk oleh orang atau badan yang mempekerjakan karyawan, selaku pendiri, untuk menyelenggarakan program pensiun manfaat pasti atau program pensiun iuran pasti, bagi kepentingan sebagian atau seluruh karyawannya sebagai peserta, yang menimbulkan kewajiban terhadap pemberi kerja.",
          
        },
        {
          "number": "71209",
          "name": "ANALISIS DAN UJI TEKNIS LAINNYA",
          "description": "Kelompok ini mencakup kegiatan jasa analisis dan uji teknis lainnya yang belum diklasifikasikan pada 71201 s.d. 71208 misalnya operasional dari keamanan dan ketertiban laboratorium. Termasuk dalam kelompok ini mencakup uji teknis dengan menggunakan sumber radiasi pengion (zat radioaktif dan pembangkit radiasi pengion) serta penyelenggara uji profisiensi dan produsen bahan acuan.",
          
        },
        {
          "number": "72101",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU PENGETAHUAN ALAM",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta berkaitan dengan ilmu pengetahuan alam, seperti penelitian dan pengembangan matematika, fisika, biologi, kimia, astronomi, geologi, botani, zoologi, dan lainnya.",
          
        },
        {
          "number": "72102",
          "name": "PENELITIAN DAN PENGEMBANGAN TEKNOLOGI DAN REKAYASA",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematik), yang diselenggarakan oleh swasta, berkaitan dengan teknologi dan rekayasa (engineering). Kegiatan yang tercakup dalam kelompok ini seperti penelitian dan pengembangan ilmu teknik dan teknologi, serta antar cabang ilmu pengetahuan terutama ilmu pengetahuan alam dan teknik.",
          
        },
        {
          "number": "72103",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU KEDOKTERAN",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematik), yang diselenggarakan oleh swasta, berkaitan dengan ilmu kedokteran.",
          
        },
        {
          "number": "72104",
          "name": "PENELITIAN DAN PENGEMBANGAN BIOTEKNOLOGI",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematik), yang diselenggarakan oleh swasta, berkaitan dengan bioteknologi.",
          
        },
        {
          "number": "72105",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU PERTANIAN, PETERNAKAN, DAN KEHUTANAN",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematik), yang diselenggarakan oleh swasta, berkaitan dengan ilmu pertanian, peternakan, dan kehutanan.",
          
        },
        {
          "number": "72106",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU PERIKANAN DAN KELAUTAN",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematik), yang diselenggarakan oleh swasta, berkaitan dengan ilmu perikanan dan kelautan.",
          
        },
        {
          "number": "72107",
          "name": "PENELITIAN DAN PENGEMBANGAN KETENAGANUKLIRAN",
          "description": "Kelompok ini mencakup penelitian dan pengembangan yang dilakukan secara teratur (sistematis) yang berkaitan dengan penggunaan teknologi nuklir.",
          
        },
        {
          "number": "72109",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU PENGETAHUAN ALAM DAN TEKNOLOGI REKAYASA LAINNYA",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematik), yang diselenggarakan oleh swasta, berkaitan dengan teknologi dan rekayasa (engineering) lainnya.",
          
        },
        {
          "number": "72201",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU PENGETAHUAN SOSIAL",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan ilmu sosial, seperti penelitian dan pengembangan ilmu ekonomi, sosiologi, antropologi, politik, hukum, pemerintahan, pendidikan, perdagangan, komunikasi, kebiasaan, adat istiadat, dan lainnya.",
          
        },
        {
          "number": "72202",
          "name": "PENELITIAN DAN PENGEMBANGAN LINGUISTIK DAN SASTRA",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan linguistik dan sastra.",
          
        },
        {
          "number": "72203",
          "name": "PENELITIAN DAN PENGEMBANGAN AGAMA",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan agama.",
          
        },
        {
          "number": "72204",
          "name": "PENELITIAN DAN PENGEMBANGAN SENI",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan seni.",
          
        },
        {
          "number": "72205",
          "name": "PENELITIAN DAN PENGEMBANGAN PSIKOLOGI",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan psikologi.",
          
        },
        {
          "number": "72206",
          "name": "PENELITIAN DAN PENGEMBANGAN SEJARAH\\/CAGAR BUDAYA",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan sejarah dan cagar budaya",
          
        },
        {
          "number": "72209",
          "name": "PENELITIAN DAN PENGEMBANGAN ILMU PENGETAHUAN SOSIAL DAN HUMANIORA LAINNYA.",
          "description": "Kelompok ini mencakup usaha penelitian dan pengembangan yang dilakukan secara teratur (sistematis), yang diselenggarakan oleh swasta, berkaitan dengan ilmu pengetahuan sosial dan humaniora lainnya.",
          
        },
        {
          "number": "73100",
          "name": "PERIKLANAN",
          "description": "Kelompok ini mencakup usaha berbagai jasa periklanan (baik dengan kemampuan sendiri atau disubkontrakkan), meliputi jasa bantuan penasihat, kreatif, produksi bahan periklanan, perencanaan dan pembelian media. Kegiatan yang termasuk seperti penciptaan dan penempatan iklan di surat kabar, majalah dan tabloid, radio, televisi, internet dan media lainnya; penciptaan dan penempatan iklan lapangan, misalnya papan pengumuman, panel-panel, jenis poster dan gambar, selebaran, pamflet, edaran, brosur dan frames, iklan jendela, desain ruang pamer, iklan mobil dan bus dan lain-lain; media penggambaran, yaitu penjualan ruang dan waktu untuk berbagai macam media iklan permohonan; iklan udara (aerial advertising), distribusi atau pengiriman materi atau contoh iklan; penyediaan ruang iklan di dalam papan pengumuman atau billboard dan lain-lain; penciptaan stan serta struktur dan tempat pamer lainnya; dan memimpin kampanye pemasaran dan jasa iklan lain yang ditujukan pada penarikan dan pempertahankan pelanggan, seperti promosi produk, pemasaran titik penjualan (point of sale), iklan surat (direct mail), konsultasi pemasaran.",
          
        },
        {
          "number": "73201",
          "name": "PENELITIAN PASAR",
          "description": "Kelompok ini mencakup usaha penelitian potensi pasar, penerimaan produk di pasar, kebiasaan dan tingkah laku konsumen, dalam kaitannya dengan promosi penjualan dan pengembangan produk baru.",
          
        },
        {
          "number": "73202",
          "name": "JAJAK PENDAPAT MASYARAKAT",
          "description": "Kelompok ini mencakup usaha penelitian mengenai opini masyarakat mengenai permasalahan politik, ekonomi, dan sosial.",
          
        },
        {
          "number": "74111",
          "name": "AKTIVITAS DESAIN ALAT TRANSPORTASI DAN PERMESINAN",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk, alat pendukung produksi dan komponen dalam industri alat transportasi dan permesinanKelompok ini mencakup: desain untuk produk sepeda dan kendaraan yang ditarik binatang; desain untuk produk kereta tangan, kereta dorong, kereta bayi, kursi roda, dan tandu; desain untuk produk kendaraan di atas rel; desain untuk produk pengangkat kursi dan ski; desain untuk produk elevator dan alat angkat; desain untuk produk kendaraan bermotor, kapal dan pesawat terbang serta pesawat luar angkasa; desain untuk produk ban dan rantai anti-slip dan komponen maupun aksesoris kendaraan; desain untuk produk mesin, pompa dan kompresor; desain untuk produk mesin pertanian dan konstruksi maupun mesin tekstil",
          
        },
        {
          "number": "74112",
          "name": "AKTIVITAS DESAIN PERALATAN RUMAH TANGGA DAN FURNITUR",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk dalam industri peraltan rumah tangga dan furniture.Kelompok ini mencakup : desain untuk produk pecah belah, peralatan makan, memasak dan menyajikan serta mennyimpan makanan; desain untuk produk perlengkapan perapian; desain untuk produk peralatan tidur, meja dan kursi; desain untuk produk perabot (alat-alat) penyimpanan; desain untuk produk cermin dan bingkai; desain untuk produk gantunagan pakaian; desain untuk produk gorden dan tirai; desain untuk produk ornamen dinding\\/meja, vas, pot; desain untuk produk medali dan sabuk; desain untuk produk bendera dan dekorasi festival; desain untuk produk bunga, buah dan tanaman buatan",
          
        },
        {
          "number": "74113",
          "name": "AKTIVITAS DESAIN TEKSTIL, FASHION DAN APPAREL",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk dalam industri tekstil, fashion dan apparelKelompok ini mencakup: desain untuk produk kain dan tenun; desain untuk produk sulaman; desain untuk produk pakaian dan pakaian dalam; desain untuk produk tutup kepala; desain untuk produk alas kaki, kaos kaki, stoking dan tali sepatu; desain untuk produk tas, koper, peti; desain untuk produk dasi, selendang, syal dan saputangan; desain untuk produk sarung tangan, payung, tongkat, kipas; desain untuk produk pita, ikat rambut, aksesoris pakaian dan hiasan lainnya; dan desain untuk produk perhiasan",
          
        },
        {
          "number": "74114",
          "name": "AKTIVITAS DESAIN INDUSTRI STRATEGIS DAN PERTAHANAN",
          "description": "Kelompok ini mencakup kegiatan usaha kreasi aktivitas desain industri untuk menghasilkan produk dalam industri strategis dan pertahanan.Kelompok ini juga mencakup: desain untuk produk pertahanan negara; desain untuk produk militer; desain untuk produk senjata; desain untuk produk pengamanan dan kepolisian; dan desain untuk produk tanggap darurat bencana.",
          
        },
        {
          "number": "74115",
          "name": "AKTIVITAS DESAIN ALAT KOMUNIKASI DAN ELEKTRONIKA",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk dalam industri alat komunikasi dan elektronikaKelompok ini mencakup: desain untuk produk teknologi informasi, alat komunikasi dan kendali; desain untuk produk perekam suara atau gambar; desain untuk produk penyimpan data; desain untuk produk pembangkit daya dan penggerak motor; desain untuk produk penyimpan daya dan penguat daya; desain untuk produk distribusi dan kontrol listrik; desain untuk produk mesin pendingin, mesin cuci, mesin pengering dan pembersih.",
          
        },
        {
          "number": "74116",
          "name": "AKTIVITAS DESAIN PERALATAN OLAHRAGA DAN PERMAINAN",
          "description": "Kelompok ini mencakup kegiatan usaha kreasi aktivitas desain industri untuk menghasilkan produk dalam industri Peralatan Olahraga dan PermainanKelompok ini mencakup: desain untuk produk mainan dan hiburan; desain untuk produk peralatan olahraga; desain untuk produk tenda dan peralatan luar ruang (outdoor).",
          
        },
        {
          "number": "74117",
          "name": "AKTIVITAS DESAIN PRODUK KESEHATAN, KOSMETIK DAN PERLENGKAPAN LABORATORIUM",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk dalam industri Kesehatan, Kosmestik dan Perlengkapan LaboratoriumKelompok ini mencakup: desain untuk produk peralatan dan bahan medis, laboratorium, rumah sakit; desain untuk produk prosthetik; desain untuk produk obat-obatan dan kosmetik; desain untuk produkperlengkapan salon kecantikan dan toilet; desain untuk produk rambut palsu dan sejenisnya.",
          
        },
        {
          "number": "74118",
          "name": "AKTIVITAS DESAIN PENGEMASAN",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk dalam industri pengemasanKelompok ini mencakup: desain untuk produk botol, tabung, kontainer, tempat sampah\\/rongsokan; desain untuk produk kaleng, drum, tong penyimpan, kotak; desain untuk produk penutup, keranjang, peti kayu, pallet, kantong, kapsul.",
          
        },
        {
          "number": "74119",
          "name": "AKTIVITAS DESAIN INDUSTRI LAINNYA",
          "description": "Kelompok ini mencakup kegiatan aktivitas desain industri untuk menghasilkan produk dalam industri yang belum tercakup dalam kelompok 74111 s.d 74118, seperti: desain untuk produk Desain Peralatan Penunjuk Waktu, Peralatan Ukur dan Peralatan Kantor; desain untuk produk untuk menyikat; desain untuk produk peralatan dan perangkat keras; desain untuk produk peralatan fotografi, sinematografi dan optikal; desain untuk produk peralatan musik; desain untuk produk peralatan dan perangkat keras; desain untuk produk peralatan fotografi, sinematografi dan optikal; desain untuk produk alat tulis kantor; desain untuk produk peralatan sales dan iklan; desain untuk produk peralatan berburu dan memancing; desain untuk produk distribusi fluida, ventilasi dan alat pendingin ruangan dan alat pemanas; desain untuk produk bahan bakar padat; desain untuk produk pencahayaan; desain untuk produk elemen konstruksi; desain untuk produk peraltan pemadam kebakaran; desain untuk produk perawatan binatang; desain untuk produk industri makanan; desain untuk produk industri tembakau dan rokok; desain untuk produk kriya.",
          
        },
        {
          "number": "74120",
          "name": "AKTIVITAS DESAIN INTERIOR",
          "description": "Kelompok ini mencakup kegiatan penyediaan jasa konsultasi Desain Interior\\/Desain Ruang Dalam, yaitu merencanakan\\/merancang ruang dalam atau interior dari bangunan atau gedung berdasarkan kegiatan manusia, fungsi ruangan dan untuk mendapatkan hasil suasana\\/atmosphere dengan mempertimbangkan unsur-unsur: Keamanan, Kesehatan, Keselamatan, Kenyamanan, Penunjang penderita disabilitas, dan Estetika. Dalam bidang Desain Interior, selain jasa perencanaan, juga mencakup jasa survey, jasa studi kelayakan, jasa drafting, jasa desain artist impression, jasa supervisi\\/pengawasan interior bangunan\\/gedung, jasa estimasi harga\\/QS dan jasa manajemen proyek di dalam konstruksi perencanaan desain interior. Termasuk Desain interior pada bangunan gedung maupun bangunan sipil lainnya.",
          
        },
        {
          "number": "74130",
          "name": "AKTIVITAS DESAIN KOMUNIKASI VISUAL\\/ DESAIN GRAFIS",
          "description": "Kelompok ini mencakup kegiatan penyediaan jasa desain komunikasi visual\\/desain grafis secara manual maupun digital, serta statis (tidak bergerak) maupun dinamis (bergerak, interaktif), pada media cetak, layar (gawai, tv, komputer, layar LED dan sejenisnya), luring, daring atau virtual, yang berhubungan dengan pembuatan materi dengan fungsi identifikasi, informasi dan persuasi yang diimplementasikan pada identitas jenama (brand), logo, desain iklan, infografik, dan stasioneri; pembuatan desain komunikasi (berupa poster, brosur, buku atau material tercetak lainnya) untuk profil, situs web, aplikasi, media sosial, materi laporan, presentasi, dan desain material promosi lainnya; desain kemasan (packaging) terutama desain permukaan kemasan; atau pada media tiga dimensi\\/desain grafis lingkungan untuk papan pameran\\/event, display produk, papan promosi (billboard), penunjuk arah (wayfinding), sistem tanda (signage), penanda bangunan\\/retail dan sebagainya.Kelompok ini juga mencakup kegiatan penyediaan jasa pembuatan tulisan huruf (lettering), perancangan rupa huruf (typeface), dan pembuatan ilustrasi.",
          
        },
        {
          "number": "74141",
          "name": "AKTIVITAS DESAIN KHUSUS FILM, VIDEO, PROGRAM TV, ANIMASI DAN KOMIK",
          "description": "Kelompok ini mencakup kegiatan perencanaan konten kreatif khusus film, video, program tv, animasi dan komik antara lain: desain cerita; desain ketokohan dan pemilihan peran; desain artistik dan visual; desain teknis produksi; dan kebutuhan penunjang lainya. Kegiatan pembuatan komik masuk dalam kelompok 90023.",
          
        },
        {
          "number": "74142",
          "name": "AKTIVITAS DESAIN KONTEN GAME",
          "description": "Kelompok ini mencakup kegiatan perencanaan konten kreatif game antara lain: desain logika mekanik permainan; desain cerita; desain artistic seperti desain visual karakter, desain user interface, desain level dan lain-lain; desain teknis terkait teknologi yang digunakan; pembuatan dokumen desain; riset dan pengembangan; dan aktivitas penunjang lainnya. Kegiatan produksi alat permainan masuk dalam kelompok 32401 dan pengembangan video game 62011.",
          
        },
        {
          "number": "74149",
          "name": "AKTIVITAS DESAIN KONTEN KREATIF LAINYA",
          "description": "Kelompok ini mencakup kegiatan perencanaan konten kreatif lainya yang belum masuk dalam kelompok 74141- 74142.",
          
        },
        {
          "number": "74201",
          "name": "AKTIVITAS FOTOGRAFI",
          "description": "Kelompok ini mencakup kegiatan fotografi atau pemotretan, baik untuk perorangan atau kepentingan bisnis, seperti fotografi untuk paspor, sekolah, pernikahan dan lain-lain; fotografi untuk tujuan komersil, publikasi, mode, real estat atau pariwisata; fotografi dari udara (pemotretan dari udara atau aerial photography) dan perekaman video untuk acara seperti pernikahan, rapat dan lain-lain. Kegiatan lain adalah pemrosesan dan pencetakan hasil pemotretan tersebut, meliputi pencucian, pencetakan dan perbesaran dari negatif film atau cine-film yang diambil klien; laboratorium pencucian film dan pencetakan foto; photo shop (tempat cuci foto) satu jam (bukan bagian dari toko kamera); mounting slide dan penggandaan dan restoring atau pengubahan sedikit tranparasi dalam hubungannya dengan fotografi. Termasuk juga kegiatan jurnalis foto dan pembuatan mikrofilm dari dokumen. Produksi film untuk bioskop dan video dan distribusinya dimasukkan dalam golongan 591.",
          
        },
        {
          "number": "74202",
          "name": "AKTIVITAS ANGKUTAN UDARA KHUSUS PEMOTRETAN, SURVEI DAN PEMETAAN",
          "description": "Kelompok ini mencakup kegiatan angkutan udara untuk kegiatan pemotretan, survei dan pemetaan khusus dengan pesawat udara berdasarkan maksud dan tujuan tertentu dengan tujuan kota-kota atau provinsi di dalam negeri.",
          
        },
        {
          "number": "74311",
          "name": "AKTIVITAS SERTIFIKASI PROFESI PIHAK 1",
          "description": "Kelompok ini mencakup kegiatan Lembaga Sertifikasi Profesi (LSP) Pihak 1 yang bersifat independen dari Kementerian\\/Lembaga\\/Industri untuk mensertifikasi kompetensi karyawan atau siswanya sendiri.",
          
        },
        {
          "number": "74312",
          "name": "AKTIVITAS SERTIFIKASI PROFESI PIHAK 2",
          "description": "Kelompok ini mencakup kegiatan Lembaga Sertifikasi Profesi (LPS) Pihak 2 yang bersifat independen dari Kementerian\\/Lembaga\\/Industri untuk mensertifikasi mitra dan pemasoknya.",
          
        },
        {
          "number": "74321",
          "name": "AKTIVITAS SERTIFIKASI PROFESI PIHAK 3",
          "description": "Kelompok ini mencakup kegiatan Lembaga Sertifikasi Profesi (LSP) Pihak 3 yang bersifat independen dari asosiasi industri\\/asosiasi profesi secara kolektif untuk mengukur dan mensertifikasi kompetensi pekerja profesional di sektor industri masing-masing.",
          
        },
        {
          "number": "74322",
          "name": "AKTIVITAS SERTIFIKASI PERSONEL INDEPENDEN",
          "description": "Kelompok ini mencakup kegiatan lembaga yang independen dan imparsial melakukan jasa sertifikasi terhadap kompetensi seseorang berdasarkan uji kompetensi selain yang tercakup dalam kelompok 74321.",
          
        },
        {
          "number": "74901",
          "name": "AKTIVITAS PENERJEMAH ATAU INTERPRETER",
          "description": "Kelompok ini mencakup kegiatan penerjemahan dari bahasa asal (source language) ke dalam bahasa tujuan (target language), termasuk didalamnya parameter kesetaraan istilah, rasa bahasa (sense of language), budaya (culture), dan lain-lain.",
          
        },
        {
          "number": "74902",
          "name": "AKTIVITAS KONSULTASI BISNIS DAN BROKER BISNIS",
          "description": "Kelompok ini mencakup usaha pemberian saran dan bantuan operasional pada dunia bisnis, seperti kegiatan broker bisnis yang mengatur pembelian dan penjualan bisnis berskala kecil dan menengah, termasuk praktik profesional, kegiatan broker hak paten (pengaturan pembelian dan penjualan hak paten), kegiatan penilaian selain real estat dan asuransi (untuk barang antik, perhiasan dan lain-lain), audit rekening dan informasi tarif barang atau muatan, kegiatan pengukuran kuantitas dan kegiatan peramalan cuaca. Tidak termasuk makelar real estat.",
          
        },
        {
          "number": "74909",
          "name": "AKTIVITAS PROFESIONAL, ILMIAH DAN TEKNIS LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan profesional, ilmiah dan teknik lainnnya yang tidak diklasifikasikan di tempat lain, seperti jasa konsultasi ilmu pertanian (agronomist), konsultasi lingkungan, konsultasi teknik lain dan kegiatan konsultan selain konsultan arsitek, teknik dan manajemen. Termasuk juga jasa penyelaman dan pengangkatan benda muatan kapal tenggelam di kapal tenggelam.Kelompok ini juga mencakup kegiatan yang dilakukan oleh agen atau perwakilan atas nama perorangan yang biasa terlibatkan dalam pembuatan gambar bergerak, produksi teater atau hiburan lainnya atau atraksi olahraga dan penempatan buku, permainan (sandiwara, musik dan lain-lain), hasil seni, fotografi dan lain-lain, dengan publiser, produser dan lain-lain.",
          
        },
        {
          "number": "75000",
          "name": "AKTIVITAS KESEHATAN HEWAN",
          "description": "Kelompok ini mencakup kegiatan perawatan dan pemeriksaan kesehatan hewan untuk hewan ternak dan hewan piaraan yang dilakukan oleh dokter hewan, kegiatan asisten dokter hewan atau pembantu pribadi dokter hewan lainnya, kegiatan klinik patologi dan diagnosis lain terhadap hewan, kegiatan ambulans hewan, kegiatan vaksinasi hewan dan laboratorium penelitian kesehatan hewan.",
          
        },
        {
          "number": "77100",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI MOBIL, BUS, TRUK DAN SEJENISNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) semua jenis alat transportasi darat tanpa operatornya seperti mobil, truk dan mobil derek. Penyewaan atau sewa guna usaha tanpa hak opsi alat transportasi darat dengan operatornya dicakup dalam golongan 492 dan 494. Penyewaan sepeda dicakup dalam kelompok 77210.",
          
        },
        {
          "number": "78200",
          "name": "AKTIVITAS PENYEDIAAN TENAGA KERJA WAKTU TERTENTU",
          "description": "Kelompok ini mencakup kegiatan penyediaan tenaga kerja untuk pemberi kerja pada jangka waktu tertentu dalam rangka penambahan tenaga kerja, di mana penyediaan tenaga kerja adalah pegawai tidak tetap atau sementara yang membantu suatu unit. Kegiatan yang diklasifikasikan di sini tidak menyediakan pengawas langsung untuk pekerja yang ditempatkan pada pemberi kerja. Kegiatannya seperti jasa penyediaan tenaga penjaga stand pameran.",
          
        },
        {
          "number": "78300",
          "name": "PENYEDIAAN SUMBER DAYA MANUSIA DAN MANAJEMEN FUNGSI SUMBER DAYA MANUSIA",
          "description": "Kelompok ini mencakup kegiatan penyediaan sumber daya manusia dan jasa manajemen sumber daya manusia untuk pemberi kerja. Kegiatan ini dikhususkan untuk menyelenggarakan sumber daya manusia dan tugas manajemen personil. Kegiatan ini menyajikan riwayat kerja pekerja dalam hal yang berhubungan dengan upah, pajak dan masalah keuangan dan sumber daya lainnya termasuk penyedia jasa pekerja\\/buruh.",
          
        },
        {
          "number": "78411",
          "name": "PELATIHAN KERJA TEKNIK PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah keterampilan\\/keahlian dalam bidang mesin produksi, instalasi pipa, kerja pelat, pengecoran logam, CNC, las industri, las SMAW, las GMAW, las GTAW, las FCAW, las OAW, las fabrikasi, las bawah air, teknik kendaraan ringan, perbaikan body kendaraan ringan, teknik sepeda motor, mekanik motor tempel, teknik alat berat, instalasi penerangan, instalasi tenaga, Programmable Logic Control (PLC), otomasi industri, mekatronika, telekomunikasi, instrumentasi dan kontrol, audio video, instalasi satelit (VSAT), fiber optik, servis telepon seluler, penyolderan, robotik, refrigerasi domestik, teknik tata udara, konstruksi batu dan beton, desain interior, desain eksterior, konstruksi kayu, gambar bangunan, furniture\\/meubelair, konstruksi baja ringan, pekerjaan gipsum, surveyor dan pemetaan, pembesian, dan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78412",
          "name": "PELATIHAN KERJA TEKNOLOGI INFORMASI DAN KOMUNIKASI PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang networking, cloud computing, website, technical support, computer engineering, programming, multimedia, database, system analyst, graphic design, office, animasi, artificial intelligence, IT governance, public relation, public speaking, IT software solution for business, dan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78413",
          "name": "PELATIHAN KERJA INDUSTRI KREATIF PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang teknik ukir logam, teknik ukir kayu, merenda, menyulam, menenun, sablon, anyaman, teknik batik tulis, teknik batik cap, penyamakan kulit, finishing kulit, pembuatan produk dari kulit, menjahit (knitting, woven), teknik bordir, teknik pola, fashion design, fashion technology, penjahit pakaian, kecantikan kulit, kecantikan rambut, terapis spa, dan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78414",
          "name": "PELATIHAN KERJA PARIWISATA DAN PERHOTELAN PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang perhotelan laundry attendant, bakery, tour leader, roti dan pattiserie, waiters, house keeping, front office, restaurant attendant, room attendant, barista, commercial cookery, tour guide, commis pastry, food and beverage service, food and beverage product, room divisiondan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78415",
          "name": "PELATIHAN KERJA BISNIS DAN MANAJEMEN PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah keterampilan\\/keahlian dalam bidang bisnis dan manajemen yang diselenggarakan oleh pemerintah. Kegiatan yang masuk dalam kelompok ini adalah pelatihan sekretaris, administrasi perkantoran, ICT for secretary, akuntansi, keuangan, tata niaga\\/penjualan, bahasa asing, promosi produktivitas, bimbingan konsultansi, pengukuran produktivitas, manajemen peningkatan produktivitas, kewirausahaan, dan lainnya.",
          
        },
        {
          "number": "78416",
          "name": "PELATIHAN KERJA PEKERJAAN DOMESTIK PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang pengurus rumah tangga, penjaga lanjut usia, pengasuh bayi\\/balita, pengasuh anak, juru masak, dan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78417",
          "name": "PELATIHAN KERJA PERTANIAN DAN PERIKANAN PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang mekanisasi pertanian, tanaman pangan, hortikultura, smart nutrition, smart farming, pengolahan tanah, konservasi lahan, budidaya tanaman, hydroponic, penangkapan ikan, budidaya ikan, permesinan perikanan, pengolahan hasil pertanian, pengolahan hasil perikanan, pengolahan hasil peternakan, agribisnis produksi tanaman, agribisnis produksi peternakan, agribisnis produksi sumber daya perairan dan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78419",
          "name": "PELATIHAN KERJA PEMERINTAH LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja lainnya yang diselenggarakan pemerintah yang belum dicakup dalam kelompok 78411 s.d. 78417, termasuk bidang metodologi pelatihan kerja, Kesehatan dan Keselamatan Kerja (K3), pelatihan motivasi, pengembangan diri, pengembangan karir, neuro language programming, dan lainnya yang diselenggarakan oleh pemerintah.",
          
        },
        {
          "number": "78421",
          "name": "PELATIHAN KERJA TEKNIK SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang mesin produksi, instalasi pipa, kerja pelat, pengecoran logam, CNC, las industri, fabrikasi, las bawah air, teknik kendaraan ringan, teknik sepeda motor, teknik alat berat, instalasi penerangan, instalasi tenaga, otomasi industri, mekatronika, telekomunikasi, instrumentasi dan kontrol, audio video, refrigerasi domestik, teknik tata udara, konstruksi batu dan beton, konstruksi kayu, gambar bangunan, furniture, konstruksi baja ringan, pekerjaan gipsum, survei dan pemetaan, pembesian, dan lainnya yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "77210",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT REKREASI DAN OLAHRAGA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) semua jenis barang untuk keperluan rekreasi dan olahraga, seperti peralatan olahraga air, perahu kano dan perahu layar, kurdi dan payung pantai, sepeda dan peralatan olahraga lainnya. Termasuk peralatan ski dan kapal pesiar. Sewa guna usaha dengan hak opsi (financial leasing) dicakup dalam 6491.",
          
        },
        {
          "number": "77220",
          "name": "AKTIVITAS PENYEWAAN KASET VIDEO, CD, VCD\\/DVD DAN SEJENISNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan barang-barang hasil perekaman, seperti video tape, kaset video, rekaman, CD, VCD\\/DVD, MP3 dan sejenisnya.",
          
        },
        {
          "number": "77291",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT PESTA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi semua jenis barang untuk keperluan pesta, seperti tenda, kursi tamu, kursi pelamin dan dekor serta kostum, peralatan makan dan saji, peralatan musik dan perlengkapan pesta lainnya.",
          
        },
        {
          "number": "77292",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI BARANG KEPERLUAN RUMAH TANGGA DAN PRIBADI",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) semua jenis barang untuk keperluan rumah tangga dan pribadi termasuk furnitur, peralatan dapur dan alat rumah tangga dari listrik, seperti tekstil, pakaian jadi, alas kaki, perhiasan, tempat tidur, lemari, panci, kompor, pisau, mesin cuci, kulkas, dispenser, dan lain- lain. Sewa guna usaha dengan hak opsi (financial leasing) dicakup pada 6491.",
          
        },
        {
          "number": "77293",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI BARANG HASIL PENCETAKAN DAN PENERBITAN",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) barang-barang hasil pencetakan dan penerbitan, seperti buku, majalah, komik, kliping koran dan lain-lain.",
          
        },
        {
          "number": "77294",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI BUNGA DAN TANAMAN HIAS",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (opeartional leasing) semua jenis bunga dan tanaman hias, seperti tanaman untuk pesta, dan lain-lain.",
          
        },
        {
          "number": "77295",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT MUSIK",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) peralatan musik, seperti gitar, drum, organ dan alat musik lainnya.",
          
        },
        {
          "number": "77299",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI BARANG KEPERLUAN RUMAH TANGGA DAN PRIBADI LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) semua jenis barang untuk keperluan rumah tangga dan pribadi yang belum diklasifikan dalam kelompok 77291 s.d. 77295, seperti peralatan elektronik rumah tangga, televisi, radio, mesin dan perkakas rumah tangga yang biasanya merupakan peralatan hobi untuk memperbaiki peralatan rumah tangga, dan lain-lain. Termasuk kegiatan penyewaan ikan hias dengan akuarium, dapat dilengkapi dengan usaha jasa perawatan dan pembersihannya.",
          
        },
        {
          "number": "77311",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT TRANSPORTASI DARAT BUKAN KENDARAAN BERMOTOR RODA EMPAT ATAU LEBIH",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) semua jenis alat transportasi darat bukan kendaraan bermotor roda empat atau lebih (mobil, bis, truk dan sejenisnya) tanpa operatornya, seperti sepeda motor, caravan, camper, railroad vehicle dan sejenisnya.Kelompok ini juga mencakup usaha persewaan peti kemas (container). Persewaan alat transportasi darat dengan operatornya dicakup dalam subgolongan 4922, 4942 dan 4943. Penyewaan alat transportasi darat kendaraan bermotor roda empat atau lebih (mobil, bus, truk dan sejenisnya) tanpa operatornya masuk dalam 77100. Penyewaan sepeda dicakup dalam 77210.",
          
        },
        {
          "number": "77312",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT TRANSPORTASI AIR",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) alat transportasi air tanpa operatornya, seperti motor boat, perahu, kapal dan sejenisnya. Penyewaan alat transportasi air dengan operatornya dicakup dalam golongan pokok 50 pada kelompok yang bersesuaian. Penyewaan kapal pesiar dicakup dalam 77210.",
          
        },
        {
          "number": "77313",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT TRANSPORTASI UDARA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) alat transportasi udara tanpa operatornya, seperti pesawat terbang, balon udara dan sejenisnya. Penyewaan alat transportasi udara dengan operatornya dicakup dalam golongan pokok 51 pada kelompok yang bersesuaian.",
          
        },
        {
          "number": "77319",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI ALAT TRANSPORTASI LAINNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) alat transportasi lainnya.",
          
        },
        {
          "number": "77321",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA TANPA HAK OPSI ALAT PEREKAMAN GAMBAR &amp; EDITING",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin, peralatan dan barang kebutuhan shooting yang mencakup sewa alat rekam gambar dan suara berupa kamera, media rekam, pencahayaan, alat editing, alat motion control dan kebutuhan alat penunjang lain yang terkait dengan aktivitas 5911 dan 5912.",
          
        },
        {
          "number": "77322",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA TANPA HAK OPSI ALAT ALAT BANTU TEKNOLOGI DIGITAL",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin, peralatan dan barang kebutuhan teknologi digital yang mencakup sewa render farm, sewa motion capture, sewa 3D scanner, dan kebutuhan penunjang lain yang terkait aktivitas 5911 dan 5912. Sewa lisensi software dicakup dalam 58200.",
          
        },
        {
          "number": "77323",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA TANPA HAK OPSI ALAT KEBUTUHAN MICE",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin, dan peralatan barang dekorasi kebutuhan Meeting, Incentive, Convention, and Exhibition (MICE) dan penunjang lainnya.",
          
        },
        {
          "number": "77329",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA TANPA HAK OPSI MESIN DAN PERALATAN INDUSTRI KREATIF LAINNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin dan peralatan industri kreatif lainnya. Sewa lisensi software termasuk kelompok 58200.",
          
        },
        {
          "number": "77391",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI MESIN DAN PERALATAN INDUSTRI PENGOLAHAN",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin dan peralatan industri tanpa operator yang secara umum digunakan sebagai barang modal oleh perusahaan, seperti mesin tekstil, mesin pengolahan atau pengerjaan logam dan kayu, mesin percetakan dan mesin las listrik. Termasuk perkakas mesin, alat untuk produksi alat pengukur dan pemeriksa dan mesin ilmiah, komersil dan industri lainnya.",
          
        },
        {
          "number": "77392",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI MESIN PERTANIAN DAN PERALATANNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin dan peralatan pertanian dan kehutanan tanpa operator termasuk perlengkapannya, seperti mesin dan peralatan yang dihasilkan oleh subgolongan 2821, sebagai contoh traktor pertanian dan sejenisnya. Penyewaan mesin dan peralatan pertanian dan kehutanan dengan operatornya termasuk perlengkapannya secara berturut-turut dimasukkan dalam subgolongan 0161 dan 0240.",
          
        },
        {
          "number": "77393",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI MESIN DAN PERALATAN KONSTRUKSI DAN TEKNIK SIPIL",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin dan peralatan konstruksi dan teknik sipil termasuk perlengkapannya tanpa operatornya, seperti lori derek (crane lorries), tangga dan panggung kerja (scaffold dan work platform) tidak termasuk pemasangan dan pemancangannya dan sejenisnya. Penyewaan mesin dan peralatan konstruksi dan teknik sipil termasuk perlengkapannya dengan operatornya dimasukkan dalam 43905.",
          
        },
        {
          "number": "77394",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI MESIN KANTOR DAN PERALATANNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) semua jenis mesin kantor dan peralatannya tanpa operator, seperti mesin tik, mesin akuntansi, mesin dan peralatan penghitung (cash register, kalkulator elektronik dan lain-lain), mesin pengolah data, mesin fotokopi, furnitur kantor dan sejenisnya. Termasuk penyewaan komputer dan perlengkapannya tanpa operatornya.",
          
        },
        {
          "number": "77395",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA TANPA HAK OPSI MESIN PERTAMBANGAN DAN ENERGI SERTA PERALATANNYA",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin dan peralatan pertambangan dan penggalian tanpa operator yang secara umum digunakan sebagai barang modal oleh perusahaan, seperti mesin pembangkit listrik. Termasuk mesin penggerak atau uap dan turbin, alat pertambangan dan perminyakan, peralatan radio dan komunikasi profesional.",
          
        },
        {
          "number": "77399",
          "name": "AKTIVITAS PENYEWAAN DAN SEWA GUNA USAHA TANPA HAK OPSI MESIN, PERALATAN DAN BARANG BERWUJUD LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan penyewaan dan sewa guna usaha tanpa hak opsi (operational leasing) mesin, peralatan dan barang berwujud ytdl dalam subgolongan 7730 yang secara umum digunakan sebagai barang modal, seperti kontainer untuk tempat tinggal atau kantor, palet (alat pengangkat kontainer) dan sejenisnya. Termasuk penyewaan alat pemindaian bagasi dengan sumber radiasi pengion dan penyewaan hewan ternak, kuda pacu dan sejenisnya.",
          
        },
        {
          "number": "77400",
          "name": "SEWA GUNA USAHA TANPA HAK OPSI INTELEKTUAL PROPERTI, BUKAN KARYA HAK CIPTA",
          "description": "Kelompok ini mencakup usaha yang kegiatan memperbolehkan pihak lain menggunakan aset non finansial di mana pembayaran royalti atau balas jasa lisensi yang dibayar ke pemegang aset. Penggunaan aset tersebut dapat berbagai macam bentuk, seperti izin reproduksi, digunakan dalam proses atau produksi berikut, pengoperasian bisnis di bawah sistem waralaba dan lain-lain. Pemilik intelektual properti dapat sekaligus pembuatnya atau juga bukan. kegiatan yang dicakup meliputi sewa guna usaha tanpa hak opsi (operational leasing) intelektual properti yang tak berwujud (bukan karya\\/hak cipta seperti buku atau piranti lunak) dan penerimaan royalti atau balas jasa lisensi untuk penggunaan, seperti entitas yang dipatenkan, trade mark dan service mark, brand name, hak eksplorasi barang tambang\\/mineral, perjanjian franchise\\/waralaba dan intelektual properti yang tak berwujud lainnya.",
          
        },
        {
          "number": "78101",
          "name": "AKTIVITAS PENYELEKSIAN DAN PENEMPATAN TENAGA KERJA DALAM NEGERI",
          "description": "Kelompok ini mencakup kegiatan pendaftaran, penyeleksian dan penempatan tenaga kerja dalam negeri di berbagai bidang usaha yang dilakukan atas dasar Perjanjian Kerja melalui aktivitas bursa kerja, mekanisme antar kerja lokal dan antar kerja antar daerah oleh Lembaga Penempatan Tenaga Kerja Swasta (LPTKS), dan perusahaan perekrutan dan penempatan awak kapal di dalam negeri berdasarkan perjanjian kerja laut dan\\/atau kesepakatan kerja bersama (colletive bargaining agreement). Termasuk pula penyediaan tenaga kerja eksekutif kepada pihak lain.",
          
        },
        {
          "number": "78102",
          "name": "AKTIVITAS PENYELEKSIAN DAN PENEMPATAN TENAGA KERJA LUAR NEGERI",
          "description": "Kelompok ini mencakup kegiatan penyampaian informasi, pendaftaran, penyeleksian dan penempatan serta pelindungan pekerja migran indonesia yang bekerja pada pemberi kerja di luar negeri di berbagai bidang usaha melalui mekanisme antar kerja antar negara oleh Perusahaan Penempatan Pekerja Migran Indonesia (P3MI) atas dasar perjanjian kerja yang disepakati antara pemberi kerja dan pekerja migran indonesia dan diketahui pejabat yang ditunjuk, dan penempatan awak kapal niaga migran dan awak kapal perikanan migran di luar negeri berdasarkan perjanjian kerja laut dan\\/atau kesepakatan kerja bersama (colletive bargaining agreement). Termasuk penyediaan tenaga kerja eksekutif kepada pihak lain.",
          
        },
        {
          "number": "78103",
          "name": "AKTIVITAS PENEMPATAN PEKERJA RUMAH TANGGA",
          "description": "Kelompok ini mencakup usaha jasa pendaftaran, pelatihan, penyeleksian dan penempatan serta pelindungan pekerja rumah tangga oleh Lembaga Penyalur Pekerja Rumah Tangga (LPPRT), seperti pekerja rumah tangga, pengasuh balita, perawat non-medis lansia, penjaga toko di dalam negeri oleh LPPRT atas dasar perjanjian kerja dan perjanjian penempatan yang mendapatkan izin dari pejabat yang ditunjuk.",
          
        },
        {
          "number": "78104",
          "name": "AKTIVITAS PENEMPATAN TENAGA KERJA DARING (JOB PORTAL)",
          "description": "Kelompok ini mencakup usaha jasa pendaftaran pencari kerja,lowongan kerja dan fasilitasi penempatan tenaga kerja yang aktivitasnya meliputi pemberian informasi lowongan kerja kepada pencari kerja dan memberikan informasi data dan kompetensi pencari kerja kepada pemberi kerja yang dilakukan secara daring oleh Pelaksana Job Portal yang beroperasi di Indonesia dan mendapat legalisasi dari pemerintah.",
          
        },
        {
          "number": "71102",
          "name": "AKTIVITAS KEINSINYURAN DAN KONSULTASI TEKNIS YBDI",
          "description": "Kelompok ini mencakup kegiatan perancangan teknik, dan konsultansi, seperti permesinan, pabrik dan proses industri; proyek yang melibatkan teknik sipil, teknik hidrolik, teknik lalu lintas; jasa nasihat dan konsultansi rekayasa teknik, jasa rekayasa konstruksi bangunan gedung hunian dan nonhunian, jasa rekayasa pekerjaan teknik sipil sumber daya air, jasa rekayasa untuk pekerjaan mekanikal dalam bangunan, jasa rekayasa bangunan fasilitas olahraga, jasa konsultansi teknik lingkungan, jasa konsultansi terkait konstruksi pekerjaan sistem kendali lalu lintas, jasa rekayasa konstruksi pembangkit jaringan transmisi, gardu induk, dan distribusi tenaga listrik serta jasa rekayasa untuk proses industrial, produksi dan fasilitas produksi, jasa rekayasa lainnya, perluasan dan realisasi proyek yang berhubungan dengan teknik listrik dan elektro, teknik pertambangan, teknik kimia, mekanik, teknik industri dan teknik sistem dan teknik keamanan; proyek manajemen air; dan kegiatan manajemen proyek dan jasa penyelidikan lapangan yang berkaitan dengan konstruksi; kegiatan perluasan proyek yang menggunakan AC, pendingin, kebersihan dan teknik pengontrolan polusi, teknik akustik dan lain-lain; kegiatan survei geofisika, geologi dan survei seismik atau gempa bumi termasuk jasa pembuatan prospektus dan jasa interpretasi geologi dan geofisika sektor konstruksi; kegiatan survei geodetik meliputi kegiatan survei batas dan tanah, survei hidrologi, survei keadaan di atas dan di bawah permukaan tanah dan kegiatan informasi spasial dan kartografi termasuk kegiatan pemetaan dan jasa pembuatan peta. Termasuk jasa rekayasa pekerjaan teknik sipil transportasi, jasa fasilitasi teknis prasarana dan sarana umum sektor konstruksi.",
          
        },
        {
          "number": "71201",
          "name": "JASA SERTIFIKASI",
          "description": "Kelompok ini mencakup kegiatan lembaga sertifikasi produk, sistem manajemen mutu, HACCP (Hazard Analysis and Critical Control Points), sistem management lingkungan, sistem manajemen keamanan pangan, ekolabel, sistem manajemen keamanan informasi, sistem manajemen keselamatan dan kesehatan kerja (SMK3), sistem sertifikasi pangan organik, sistem pengolahan hutan produksi lestari, sistem validasi dan verifikasi termasuk verifikasi legalitas kayu, dan lain-lain. Termasuk kegiatan penilaian kesesuaian sistem manajemen mutu sistem resi gudang, dan sertifikasi industri hijau.",
          
        },
        {
          "number": "71202",
          "name": "JASA PENGUJIAN LABORATORIUM",
          "description": "Kelompok ini mencakup kegiatan uji fisik, kimia, biologi, kelistrikan, mekanik dan analisis lainnya dari semua jenis material dan produk yang mencakup kegiatan pengujian di bidang kesehatan makanan, termasuk uji penyakit hewan dan kontrol yang berhubungan dengan produksi makanan; uji austik dan vibrasi (getar), uji komposisi dan kemurnian mineral dan sebagainya, uji karakteristik fisik dan kinerja material seperti kekuatan, ketebalan, daya tahan, radioaktif dan lain-lain, uji kualifikasi dan ketahanan, uji kinerja dari mesin keseluruhan seperti motor, automobil, perlengkapan elektronik, pengujian perangkat telekomunikasi, pengujian laboratorium sektor konstruksi, dan lain-lain, analisis kegagalan, uji dan pengukuran indikator lingkungan seperti polusi udara dan air, uji dengan menggunakan model atau maket seperti pesawat terbang, kapal, bendungan dan lain-lain. Termasuk kegiatan operasional laboratorium kepolisian dan penilaian kesesuaian uji mutu sistem resi gudang. Pengujian medis dimasukkan dalam kelompok 86903.",
          
        },
        {
          "number": "71203",
          "name": "JASA INSPEKSI PERIODIK",
          "description": "Kelompok ini mencakup kegiatan pemeriksaan suatu desain produk, produk, jasa dan proses. Kegiatan yang tercakup dalam kegiatan ini misalnya pemeriksaan peralatan tekan, pre-shipment, prosesproduksi, pemeliharaan atau perawatan, pemeriksaan periodik mengenai kemananan jalannya kendaraan bermotor termasuk survey tanpa merusak objek (non destructive testing). Tidak termasuk jasa inspeksi bangunan atau gedung (71101).",
          
        },
        {
          "number": "71204",
          "name": "JASA INSPEKSI TEKNIK INSTALASI",
          "description": "Kelompok ini mencakup kegiatan pemeriksaan suatu desain instalasi dan proses instalasi, misalnya pemeriksaan instalasi tenaga listrik, inspeksi instalasi teknikal sektor konstruksi dan instalasi lainnya.",
          
        },
        {
          "number": "71205",
          "name": "JASA KALIBRASI\\/METROLOGI",
          "description": "Kelompok ini mencakup kegiatan laboratorium kalibrasi untuk melakukan pengecekan\\/pengetesan suatu alat ukur atau alat kalibrasi, dan mencakup kegiatan laboratorium kalibrasi yang melakukan jasa kalibrasi alat ukur pada instansi\\/industri\\/organisasi lain sesuai permintaan, misalnya kalibrasi pressure gauge, termometer non medis, timbangan dan sebagainya. Kegiatan ini juga mencakup kalibrasi alat ukur radiasi, misalnya surveymeter, kontaminasi meter, dosimeter, dan alat ukur terkait lainnya serta pengukuran keluaran radiasi. Termasuk kegiatan pemberi tera untuk melakukan pengecekan\\/pengetesan\\/ pemeliharaan suatu alat ukur, misalnya timbangan jalan, meter pompa bensin dan sebagainya sehingga alat tersebut diyakini valid selama masa yang ditentukan.",
          
        },
        {
          "number": "71206",
          "name": "JASA COMMISSIONING PROSES INDUSTRIAL, QUALITY ASSURANCE (QA), DAN QUALITY CONTROL (QC)",
          "description": "Kelompok ini mencakup kegiatan memastikan semua komponen sesuai dengan standar dan spesifikasi owner; dilakukan oleh pihak ketiga penyedia jasa comissioning; layanan analisis serta commissioning proses industrial dan produksi pada fasilitas produksi minyak, gas, petrokimia, dan panas bumi.Kelompok ini juga mencakup kegiatan Quality Assurance (QA) dan Quality Control (QC) yang dilakukan untuk memeriksa kandungan suatu zat secara kuantitatif dalam cuplikan yang menggunakan zat radioaktif dan pembangkit radiasi pengion, seperti X-Ray Fluorosence (XRF), X-Ray Diffraction (XRD), Spectrometer.",
          
        },
        {
          "number": "71207",
          "name": "JASA KLASIFIKASI KAPAL",
          "description": "Kelompok ini mencakup kegiatan klasifikasi kapal (Ship\\&#039;s Clasification) yang dilakukan oleh badan klasifikasi kapal yang berupa pengklasifikasian kapal berdasarkan konstruksi lambung, mesin, listrik kapal, dan jaminan mutu marine kapal dengan tujuan memberikan penilaian teknis atas layak tidaknya kapal untuk berlayar termasuk survei dan sertifikasi untuk klasifikasi kapal.",
          
        },
        {
          "number": "71208",
          "name": "AKTIVITAS PENGUJIAN DAN ATAU KALIBRASI ALAT KESEHATAN DAN INSPEKSI SARANA PRASARANA KESEHATAN",
          "description": "Kelompok ini mencakup kegiatan jasa pemeliharaan, pengujian dan\\/atau kalibrasi secara berkala terhadap peralatan kesehatan dan inspeksi sarana prasarana kesehatan yang dikelola oleh pemerintah dan swasta dalam rangka pengamanan fasilitas kesehatan melalui pengujian, kalibrasi dan proteksi radiasi untuk memenuhi kualitas dan standar keselamatan serta keamanan.",
          
        },
        {
          "number": "82301",
          "name": "JASA PENYELENGGARA PERTEMUAN, PERJALANAN INSENTIF, KONFERENSI DAN PAMERAN (MICE)",
          "description": "Kelompok ini mencakup usaha pengaturan, promosi dan atau pengelolaan acara, seperti jasa pelayanan bagi suatu pertemuan sekelompok orang (negarawan, usahawan, cendekiawan, dan sebagainya). Termasuk juga dalam kelompok ini usaha jasa yang merencanakan, menyusun dan menyelenggarakan program perjalanan insentif dan usaha jasa yang melakukan perencanaan dan penyelenggaraan pameran dagang dan usaha, konvensi, konferensi dan rapat atau pertemuan. Kegiatan ini disebut juga jasa MICE (meeting, incentive, convention and exhibition).",
          
        },
        {
          "number": "82302",
          "name": "JASA PENYELENGGARA EVENT KHUSUS (SPECIAL EVENT)",
          "description": "Kelompok ini mencakup kegiatan penyelenggara event khusus yang melakukan pengaturan dan penyelenggaraan event khusus, baik atas dasar permintaan client mewujudkan tujuan yang diharapkan melalui acara yang diadakan, maupun event khusus yang dirancang sendiri, dimulai dari proses pembuatan konsep, perencanaan, persiapan, eksekusi hingga rangkaian acara selesai. Kegiatan penyelenggaraan event khusus yang dicakup kelompok ini adalah festival, karnaval, event olahraga, event musik, event budaya, event personal dan acara sejenisnya.",
          
        },
        {
          "number": "82911",
          "name": "AKTIVITAS DEBT COLLECTION",
          "description": "Kelompok ini mencakup kegiatan pungutan pembayaran klaim dan pengiriman pembayaran yang ditujukan untuk pelanggan, seperti jasa pungutan tagihan atau hutang kredit.",
          
        },
        {
          "number": "82912",
          "name": "AKTIVITAS LEMBAGA PENGELOLA INFORMASI PERKREDITAN",
          "description": "Kelompok ini juga mencakup kegiatan lembaga atau badan yang menghimpun dan mengolah data kredit dan data lain untuk menghasilkan informasi perkreditan.",
          
        },
        {
          "number": "82920",
          "name": "AKTIVITAS PENGEPAKAN",
          "description": "Kelompok ini mencakup usaha jasa pengepakan\\/pengemasan atas dasar balas jasa (fee) atau kontrak, baik menggunakan atau tidak suatu proses otomatis. Termasuk pembotolan minuman dan makanan, pengemasan benda padat (blister packaging, pembungkusan dengan alumunium foil dan lain-lain), pengemasan obat dan bahan obat-obatan, pelabelan, pembubuhan perangko dan pemberian cap, pengemasan parsel atau bingkisan dan pembungkusan hadiah. Termasuk pengalengan dan sejenisnya. Jasa pengepakan untuk kegiatan pengangkutan dimasukkan dalam kelompok 52291 s.d. 52299 yang bersesuaian.",
          
        },
        {
          "number": "82990",
          "name": "AKTIVITAS JASA PENUNJANG USAHA LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan penyedia jasa penunjang usaha lainnya yang tidak dapat diklasifikasikan di tempat lain, seperti jasa laporan pengadilan dan catatan stenotype dan jasa stenografi untuk umum, jasa siaran langsung televisi untuk acara rapat dan konferensi, jasa pengalamatan bar code, jasa pencetakan bar code, jasa organisasi pengumpulan dana atas dasar balas jasa atau kontrak, jasa sortir surat, jasa penyimpanan, jasa pungutan parkir yang menggunakan meter coin, kegiatan pelelangan independen, administrasi program loyalitas, dan kegiatan penunjang lain yang disediakan untuk usaha yang tidak diklasifikasikan di tempat lain. Termasuk kegiatan pusat registrasi sistem resi gudang.",
          
        },
        {
          "number": "84111",
          "name": "LEMBAGA LEGISLATIF",
          "description": "Kelompok ini mencakup kegiatan kelembagaan MPR, DPR dan DPRD serta kesekretariatannya, yang berfungsi utama mengambil keputusan- keputusan konstitusional yang bersifat dasar dan prinsip dalam perumusan kebijaksanaan pemerintah, yaitu membuat, merubah atau mencabut undang-undang atau peraturan pemerintah serta membina administrasi pemerintah untuk melaksanakan kebijaksanaan pemerintah dan undang- undang, peraturan pemerintah dan ketentuan-ketentuan lain yang berlaku, termasuk mengambil keputusan, penetapan dan pengesahan anggaran pendapatan dan pengeluaran, anggaran investasi serta rencana-rencana jangka panjang.",
          
        },
        {
          "number": "84112",
          "name": "PENYELENGGARAAN PEMERINTAH NEGARA DAN KESEKRETARIATAN NEGARA",
          "description": "Kelompok ini mencakup seluruh kegiatan proses penyelenggaraan pemerintah untuk mencapai tujuan negara yang telah ditetapkan oleh badan legislatif, yaitu Presiden, Wakil Presiden, Sekretariat Negara, Sekretariat Kabinet, Departemen Dalam Negeri, Gubernur, Bupati, Walikota, Camat dan Lurah\\/Kepala Desa, yang mempunyai tugas merencanakan, memimpin dan mengawasi penyelenggaraan pemerintah.",
          
        },
        {
          "number": "84113",
          "name": "LEMBAGA EKSEKUTIF KEUANGAN, PERPAJAKAN DAN BEA CUKAI",
          "description": "Kelompok ini mencakup kegiatan kelembagaan pemerintah di bidang keuangan, perpajakan dan bea cukai dalam membantu kelancaran penyelenggaraan pemerintahan, termasuk juga kegiatan-kegiatan kesekretariatannya. Misalnya lembaga pemerintahan bidang keuangan, Dirjen Pajak dan Bea Cukai.",
          
        },
        {
          "number": "84114",
          "name": "LEMBAGA EKSEKUTIF PERENCANAAN",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahanan di bidang perencanaan dalam merumuskan koordinasi kebijaksanaan pemerintah dalam menyelenggarakan pemerintahan, termasuk juga kegiatan kesekretariatannya. Misalnya lembaga pemerintahanan bidang perencanaan pembangunan nasional (BAPPENAS).",
          
        },
        {
          "number": "84115",
          "name": "LEMBAGA PEMERINTAH NON KEMENTRIAN DENGAN TUGAS KHUSUS",
          "description": "Kelompok ini mencakup kegiatan lembaga\\/badan\\/instansi pemerintah non lembaga pemerintahan bidang dengan tugas khusus serta kesekretariatannya, yang mempunyai kewajiban membantu kelancaran penyelenggaraan pemerintahan, seperti Arsip Nasional, BAKN, LAN, BKKBN, LIPI, Lembaga Sandi Negara, BPS, dan lainnya. Tidak tercakup dalam kode ini badan untuk penanggulangan bencana (84234).",
          
        },
        {
          "number": "84119",
          "name": "KEGIATAN ADMINISTRASI PEMERINTAHAN LAINNYA",
          "description": "Kelompok ini mencakup kegiatan lembaga\\/badan\\/instansi pemerintah lainnya dengan tugas khusus serta kesekretariatannya, yang mempunyai kewajiban membantu kelancaran penyelenggaraan pemerintahan yang belum tercakup dalam kelompok 84111 s.d. 84115. Misalnya Lembaga- lembaga Nonstruktural, dan lainnya.",
          
        },
        {
          "number": "84121",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG PENDIDIKAN",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan pendidikan yang mempunyai kewajiban memberikan pengarahan, pertimbangan dan mengambil keputusan dalam bidang pendidikan. Misalnya lembaga pemerintahanan bidang pendidikan, baik dasar, menengah maupun pendidikan tinggi.",
          
        },
        {
          "number": "84122",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG KESEHATAN",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan kesehatan yang mempunyai kewajiban memberikan pengarahan, pertimbangan dan mengambil keputusan dalam bidang pelayanan kesehatan, pengadaan obat-obatan, kesehatan masyarakat dan pencegahan penyakit, termasuk pembinaan penyediaan air bersih. Misalnya lembaga pemerintahanan bidang kesehatan.",
          
        },
        {
          "number": "84123",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG PERUMAHAN",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan sarana dan prasarana tempat tinggal yang memenuhi syarat perumahan, seperti kebersihan dan keindahan, dengan tujuan menjadikan masyarakat yang sehat dan sejahtera. Misalnya lembaga pemerintahan bidang perumahan rakyat.",
          
        },
        {
          "number": "84124",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG KESEJAHTERAAN SOSIAL",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan penyelenggaraan jaminan sosial, bantuan sosial dan rehabilitasi sosial. Misalnya lembaga pemerintahan bidang sosial.",
          
        },
        {
          "number": "84125",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG KEAGAMAAN",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan agama Islam, Kristen Protestan, Kristen Katholik, Hindu dan Budha, dengan tujuan untuk meningkatkan takwa kepada Tuhan Yang Maha Esa dan mencapai kerukunan umat beragama. Misalnya lembaga pemerintahan bidang keagamaan.",
          
        },
        {
          "number": "84126",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG KEBUDAYAAN\\/KESENIAN\\/REKREASI\\/OLAHRAGA",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan kebudayaan\\/kesenian\\/rekreasi\\/olahraga, seperti museum, galeri, perpustakaan, tempat\\/benda peninggalan bersejarah, cagar budaya, berbagai kesenian daerah dan penyelenggaraan rekreasi dan olahraga. Misalnya lembaga pemerintahanan bidang pemuda dan olah raga dan lembaga pemerintahanan bidang kebudayaan dan kesenian.",
          
        },
        {
          "number": "84127",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG LINGKUNGAN HIDUP",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan kelestarian lingkungan, dengan tujuan menjadikan masyarakat yang sehat dan sejahtera. Misalnya lembaga pemerintahan bidang lingkungan hidup.",
          
        },
        {
          "number": "84129",
          "name": "ADMINISTRASI PELAYANAN PEMERINTAH BIDANG SOSIAL LAINNYA BUKAN KESEHATAN, PENDIDIKAN, KEAGAMAAN DAN KEBUDAYAAN",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan pelayanan sosial lainnya bukan kesehatan, pendidikan, keagamaan dan kebudayaan yang belum termasuk dalam kelompok 84121 s.d. 84127. Misalnya lembaga pemerintahanan bidang pemberdayaan perempuan dan perlindungan anak.",
          
        },
        {
          "number": "84131",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG PERTANIAN",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang pertanian, seperti pertanian tanaman pangan\\/tanaman perkebunan, peternakan, kehutanan, perburuan dan perikanan. Misalnya lembaga pemerintahanan bidang pertanian, lembaga pemerintahanan bidang kelautan dan perikanan, dan lembaga pemerintahanan bidang kehutanan.",
          
        },
        {
          "number": "84132",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG PERTAMBANGAN DAN PENGGALIAN, LISTRIK, AIR DAN GAS",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang pertambangan, penggalian, geologi dan sumber daya mineral dan bidang kelistrikan, gas dan air. Misalnya lembaga pemerintahanan bidang energi dan sumber daya mineral.",
          
        },
        {
          "number": "84133",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG PERINDUSTRIAN",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang perindustrian. Misalnya lembaga pemerintahanan bidang perindustrian.",
          
        },
        {
          "number": "84134",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG KOMUNIKASI DAN INFORMATIKA",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pembinaan komunikasi dan informatika. Pembinaan komunikasi dan informatika meliputi pembinaan di bidang sumber daya dan perangkat pos dan informatika, penyelenggaraan pos dan informatika, aplikasi informatika, serta informasi dan komunikasi publik. Misalnya lembaga pemerintahanan bidang Komunikasi dan Informatika.",
          
        },
        {
          "number": "84135",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG KONSTRUKSI",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang konstruksi. Misalnya lembaga pemerintahanan bidang pekerjaan umum.",
          
        },
        {
          "number": "84136",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG PERDAGANGAN DAN PARIWISATA",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang perdagangan dan pariwisata. Misalnya lembaga pemerintahanan bidang perdagangan dan lembaga pemerintahanan bidang pariwisata.",
          
        },
        {
          "number": "84137",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG PERHUBUNGAN",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang perhubungan. Misalnya lembaga pemerintahanan bidang perhubungan.",
          
        },
        {
          "number": "84138",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN BIDANG KETENAGAKERJAAN",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan di bidang ketenagakerjaan. Misalnya lembaga pemerintahanan bidang ketenagakerjaan.",
          
        },
        {
          "number": "84139",
          "name": "KEGIATAN LEMBAGA PEMERINTAHAN UNTUK MENCIPTAKAN EFISIENSI PRODUKSI DAN BISNIS LAINNYA",
          "description": "Kelompok ini mencakup kegiatan lembaga pemerintahan dalam hal pembinaan, pengembangan dan penyelenggaraan untuk menciptakan efisiensi dan bisnis yang belum tercakup dalam kelompok 84131 s.d. 84138. Misalnya lembaga pemerintahanan bidang pendayagunaan aparatur negara dan lembaga pemerintahanan bidang koperasi dan usaha kecil menengah.",
          
        },
        {
          "number": "84210",
          "name": "HUBUNGAN LUAR NEGERI",
          "description": "Kelompok ini mencakup semua kegiatan yang dikelola oleh lembaga pemerintahan bidang luar negeri, antara lain kegiatan administrasi dan operasional yang ditempatkan di luar negeri (misi diplomatik dan konsuler), dan pada kantor-kantor badan organisasi internasional (PBB, ASEAN dan sebagainya). Administrasi, operasional dan bantuan untuk kebudayaan yang melewati batas negara termasuk juga bantuan ekonomi dan bantuan misi ekonomi ke luar negeri, kecuali bantuan militer dan anggota militer di luar negeri dimasukkan ke dalam kelompok 84221 sampai dengan 84224.",
          
        },
        {
          "number": "84221",
          "name": "LEMBAGA PERTAHANAN DAN ANGKATAN BERSENJATA",
          "description": "Kelompok ini mencakup seluruh kegiatan (administrasi, operasional dan lain-lain), termasuk juga pegawai sipil di lingkungan angkatan bersenjata serta usaha pengiriman bantuan anggota militernya, kecuali anggota angkatan bersenjata yang dikaryakan atau yang menjabat dalam pemerintahan. Misalnya lembaga pemerintahan bidang pertahanan dan Markas Besar Tentara Nasional Indonesia.",
          
        },
        {
          "number": "84222",
          "name": "ANGKATAN DARAT",
          "description": "Kelompok ini mencakup seluruh kegiatan (administrasi, opersional dan lain- lain), termasuk juga pegawai sipil di lingkungan angkatan darat, kecuali anggota angkatan darat yang dikaryakan atau yang menjabat dalam pemerintahan. Misalnya Markas Besar TNI Angkatan Udara.",
          
        },
        {
          "number": "84223",
          "name": "ANGKATAN UDARA",
          "description": "Kelompok ini mencakup seluruh kegiatan (administrasi, operasional dan lain-lain), termasuk juga pegawai sipil di lingkungan angkatan udara, kecuali anggota angkatan udara yang dikaryakan atau yang menjabat dalam pemerintahan. Misalnya Markas Besar TNI Angkatan Udara.",
          
        },
        {
          "number": "84224",
          "name": "ANGKATAN LAUT",
          "description": "Kelompok ini mencakup seluruh kegiatan (administrasi, operasional dan lain-lain), termasuk juga pegawai sipil di lingkungan angkatan laut, kecuali anggota angkatan laut yang dikaryakan atau yang menjabat dalam pemerintahan. Misalnya Markas Besar TNI Angkatan Laut.",
          
        },
        {
          "number": "84231",
          "name": "KEPOLISIAN",
          "description": "Kelompok ini mencakup seluruh kegiatan POLRI (administrasi, operasional dan lain-lain) yang melayani masyarakat umum, baik langsung ataupun tidak di berbagai bidang keamanan dan ketertiban, seperti pengaduan, kriminal, ketertiban hukum, mengusut tindak pidana, termasuk juga kegiatan polisi rahasia.",
          
        },
        {
          "number": "84232",
          "name": "PERTAHANAN SIPIL",
          "description": "Kelompok ini mencakup seluruh kegiatan (administrasi, operasional dan lain-lain), yang timbul dari organisasi masyarakat dan dikelola serta dibiayai oleh masyarakat untuk kepentingan keamanan dan ketertiban lingkungan. Misalnya Pertahanan Sipil, Perlawanan Rakyat dan Keamanan Rakyat.",
          
        },
        {
          "number": "84233",
          "name": "LEMBAGA PERADILAN",
          "description": "Kelompok ini mencakup seluruh kegiatan badan pelaksana peradilan yang mempunyai kewajiban memberikan pertimbangan dan mengambil keputusan dalam bidang hukum. Misalnya Mahkamah Agung, lembaga pemerintahan bidang Hukum dan Hak Asasi Manusia, Kejaksaan, Pengadilan Tinggi, Pengadilan Negeri, Mahkamah Konstitusi.",
          
        },
        {
          "number": "84234",
          "name": "BADAN NASIONAL PENANGGULANGAN BENCANA DAN PEMADAM KEBAKARAN",
          "description": "Kelompok ini mencakup kegiatan Badan Nasional Penanggulangan Bencana dan lembaga pemerintahanan dalam bidang pemadam dan pencegah kebakaran, seperti administrasi dan operasi pasukan pemadam api umum maupun khusus untuk pencegahan kebakaran, pemadaman, penyelamatan manusia dan hewan, bantuan terhadap bencana nasional, banjir dan kecelakaan di jalan dan penyediaan bantuan untuk keadaan darurat dalam negeri seperti keadaan damai setelah bencana dan lain-lain.",
          
        },
        {
          "number": "84300",
          "name": "JAMINAN SOSIAL WAJIB",
          "description": "Kelompok ini mencakup usaha pendanaan dan administrasi jaminan sosial wajib yang diselenggarakan oleh pemerintah, seperti jaminan sosial kesehatan, kecelakaan, pengangguran dan pensiun, program untuk mengatasi masalah kehilangan pendapatan yang diakibatkan oleh persalinan, cacat sementara, status janda dan lain-lain.",
          
        },
        {
          "number": "85111",
          "name": "PENDIDIKAN DASAR\\/IBTIDAIYAH PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan sekolah dasar dan berlangsung selama enam tahun yang dikelola oleh pemerintah termasuk sekolah dasar keagamaan dan pendidikan khusus yang sederajat, seperti Sekolah Dasar Negeri, Madrasah Ibtidaiyah Negeri dan Sekolah Luar Biasa Tingkat Dasar Negeri. Termasuk dalam kelompok ini adalah program pemberantasan buta huruf yang diselenggarakan pemerintah bagi anak-anak yang tidak mempunyai kesempatan bersekolah, juga pendidikan bagi anak-anak terbelakang pada jenjang pendidikan yang sederajat.",
          
        },
        {
          "number": "85112",
          "name": "PENDIDIKAN MENENGAH PERTAMA\\/TSANAWIYAH PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan sekolah menengah pertama yang berlangsung selama tiga tahun yang dikelola oleh pemerintah termasuk sekolah menengah keagamaan dan pendidikan khusus yang sederajat, seperti Sekolah Menengah Pertama Negeri, Madrasah Tsanawiyah Negeri dan Sekolah Luar Biasa Menengah Pertama Negeri.",
          
        },
        {
          "number": "85121",
          "name": "PENDIDIKAN DASAR\\/IBTIDAIYAH SWASTA",
          "description": "Kelompok ini mencakup pendidikan sekolah dasar dan berlangsung selama enam tahun yang dikelola oleh swasta termasuk sekolah dasar keagamaan dan pendidikan khusus yang sederajat, seperti Sekolah Dasar, Madrasah Ibtidaiyah dan Sekolah Luar Biasa Tingkat Dasar. Termasuk dalam kelompok ini adalah program pemberantasan buta huruf yang diselenggarakan pemerintah bagi anak-anak yang tidak mempunyai kesempatan bersekolah, juga pendidikan bagi anak-anak terbelakang pada jenjang pendidikan yang sederajat.",
          
        },
        {
          "number": "85122",
          "name": "PENDIDIKAN MENENGAH PERTAMA\\/TSANAWIYAH SWASTA",
          "description": "Kelompok ini mencakup pendidikan sekolah menengah pertama yang berlangsung selama tiga tahun yang dikelola oleh swasta termasuk sekolah menengah keagamaan dan pendidikan khusus yang sederajat, seperti Sekolah Menengah Pertama, Madrasah Tsanawiyah dan Sekolah Luar Biasa Menengah Pertama.",
          
        },
        {
          "number": "85131",
          "name": "PENDIDIKAN TAMAN KANAK-KANAK PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan pra sekolah untuk anak usia dini dengan program pendidikan bagi anak berusia 4 (empat) tahun sampai dengan 6 (enam) tahun dengan prioritas usia 5 (lima) dan 6 (enam) tahun, yang berlangsung selama satu sampai dua tahun yang dikelola oleh pemerintah, seperti Taman Kanak-kanak.",
          
        },
        {
          "number": "85132",
          "name": "PENDIDIKAN TAMAN KANAK-KANAK SWASTA\\/RAUDATUL ATHFAL\\/BUSTANUL ATHFAL",
          "description": "Kelompok ini mencakup pendidikan pra sekolah untuk anak usia dini dengan program pendidikan bagi anak berusia 4 (empat) tahun sampai dengan 6 (enam) tahun dengan prioritas usia 5 (lima) dan 6 (enam) tahun, yang berlangsung selama satu sampai dua tahun yang dikelola oleh swasta, seperti Taman Kanak-kanak, Raudatul Athfal (RA) dan Bustanul Athfal (BA).",
          
        },
        {
          "number": "85133",
          "name": "PENDIDIKAN KELOMPOK BERMAIN",
          "description": "Kelompok ini mencakup pendidikan pra sekolah untuk anak usia dini yang mendapatkan program pendidikan sekaligus program kesejahteraan bagi anak sejak lahir sampai dengan 6 (enam) tahun dengan prioritas usia 2 (dua) sampai 4 (empat) tahun yang dikelola oleh pemerintah maupun masyarakat, sepertiKelompok Bermain.",
          
        },
        {
          "number": "85134",
          "name": "PENDIDIKAN TAMAN PENITIPAN ANAK",
          "description": "Kelompok ini mencakup pendidikan untuk anak usia dini dengan program pendidikan bagi anak sejak lahir sampai dengan 6 (enam) tahun dengan prioritas sejak lahir sampai dengan usia 4 (empat) tahun, baik yang diselenggarakan oleh pemerintah maupun oleh masyarakat.",
          
        },
        {
          "number": "85135",
          "name": "PENDIDIKAN TAMAN KANAK-KANAK LUAR BIASA",
          "description": "Kelompok ini mencakup pendidikan untuk anak usia dini dengan program pendidikan khusus bagi anak berusia 4 (empat) tahun sampai dengan 6 (enam) tahun dengan prioritas usia 5 (lima) dan 6 (enam) tahun, baik yang diselenggarakan oleh pemerintah maupun oleh masyarakat.",
          
        },
        {
          "number": "85139",
          "name": "PENDIDIKAN ANAK USIA DINI SEJENIS LAINNYA",
          "description": "Kelompok ini mencakup pendidikan pra sekolah untuk anak usia dini dengan program pendidikan bagi anak usia lahir sampai dengan 6 (enam) tahun yang belum termasuk dalam kelompok 85131 s.d. 85135.",
          
        },
        {
          "number": "85141",
          "name": "SATUAN PENDIDIKAN KERJASAMA KELOMPOK BERMAIN",
          "description": "Kelompok ini mencakup satuan pendidikan jenjangKelompok Bermain yang diselenggarakan atau dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan di Indonesia pada jalur formal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85142",
          "name": "SATUAN PENDIDIKAN KERJASAMA TAMAN KANAK-KANAK",
          "description": "Kelompok ini mencakup satuan pendidikan jenjang TK yang diselenggarakan atau dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan di Indonesia pada jalur formal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85143",
          "name": "SATUAN PENDIDIKAN KERJASAMA PENDIDIKAN DASAR",
          "description": "Kelompok ini mencakup satuan pendidikan jenjang Sekolah Dasar yang diselenggarakan atau dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan di Indonesia pada jalur formal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85144",
          "name": "SATUAN PENDIDIKAN KERJASAMA PENDIDIKAN MENENGAH PERTAMA",
          "description": "Kelompok ini mencakup satuan pendidikan jenjang Sekolah Menengah Pertama yang diselenggarakan atau dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan di Indonesia pada jalur formal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85151",
          "name": "SATUAN PENDIDIKAN ANAK USIA DINI\\/PAUD AL-QURAN",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan Islam yang bertujuan untuk meningkatkan kemampuan peserta didik dalam membaca, menulis,menghafal,memahami,dan mengamalkan kandungan Al Qur&#039;an serta penguatan pendidikan karakter yang diselenggarakan pada jenjang pendidikan anak usia dini pada jalur pendidikan formal, dalam bentuk satuan pendidikan anak usia dini\\/PAUD al-Qur\\&#039;an.",
          
        },
        {
          "number": "85152",
          "name": "SATUAN PENDIDIKAN MUADALAH\\/PENDIDIKAN DINIYAH FORMAL ULA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan dasar yang diselenggarakan pada jalur pendidikan formal sederajat dengan sekolah dasar\\/madrasah ibtidaiyah, meliputi satuan pendidikan muadalah ula dan satuan pendidikan diniyah formal ula.",
          
        },
        {
          "number": "85153",
          "name": "SATUAN PENDIDIKAN MUADALAH\\/PENDIDIKAN DINIYAH FORMAL WUSTHA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan dasar yang diselenggarakan pada jalur pendidikan formal sederajat dengan sekolah menengah pertama\\/madrasah tsanawiyah, meliputi satuan pendidikan muadalah wustha dan satuan pendidikan diniyah formal wustha.",
          
        },
        {
          "number": "85154",
          "name": "SATUAN PENDIDIKAN PESANTREN PENGKAJIAN KITAB KUNING ULA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan dasar yang lulusannya diakui sama dengan pendidikan formal sederajat dengan sekolah dasar\\/madrasah ibtidaiyah setelah dinyatakan lulus ujian. Termasuk dalam kelompok ini: pendidikan pesantren berbentuk pengkajian kitab kuning jenjang ula; dan pendidikan kesetaraan pada pondok pesantren salafiyah jenjang ula",
          
        },
        {
          "number": "85155",
          "name": "SATUAN PENDIDIKAN PESANTREN PENGKAJIAN KITAB KUNING WUSTHA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan dasar yang lulusannya diakui sama dengan pendidikan formal sederajat dengan sekolah menengah pertama\\/madrasah tsanawiyah setelah dinyatakan lulus ujian. Termasuk dalam kelompok ini: pendidikan pesantren berbentuk pengkajian kitab kuning jenjang wustha; dan pendidikan kesetaraan pada pondok pesantren salafiyah jenjang wustha.",
          
        },
        {
          "number": "85161",
          "name": "SATUAN PENDIDIKAN KEAGAMAAN ANAK USIA DINI",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan selain pendidikan keagamaan Islam (lihat 8515) pada jenjang pendidikan anak usia dini yang diselenggarakan pada jalur pendidikan formal.",
          
        },
        {
          "number": "85162",
          "name": "SATUAN PENDIDIKAN KEAGAMAAN DASAR",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan selain pendidikan keagamaan Islam (lihat 8515) pada jenjang pendidikan dasar yang diselenggarakan pada jalur pendidikan formal sederajat dengan sekolah dasar\\/madrasah ibtidaiyah.",
          
        },
        {
          "number": "85163",
          "name": "SATUAN PENDIDIKAN KEAGAMAAN MENENGAH PERTAMA",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan selain pendidikan keagamaan Islam (lihat 8515) pada jenjang pendidikan dasar yang diselenggarakan pada jalur pendidikan formal sederajat dengan sekolah menengah pertama\\/madrasah tsanawiyah.",
          
        },
        {
          "number": "85210",
          "name": "PENDIDIKAN MENENGAH ATAS\\/ALIYAH PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan sekolah menengah tingkat atas yang bersifat umum dan berlangsung selama tiga tahun yang dikelola oleh pemerintah, termasuk sekolah keagamaan dan pendidikan khusus sederajat, seperti Sekolah Menengah Umum Negeri, Madrasah Aliyah Negeri dan Sekolah Luar Biasa Menengah Tingkat Atas Negeri.",
          
        },
        {
          "number": "85220",
          "name": "PENDIDIKAN MENENGAH\\/ALIYAH SWASTA",
          "description": "Kelompok ini mencakup pendidikan sekolah menengah atas yang bersifat umum dan berlangsung selama tiga tahun yang dikelola oleh swasta, termasuk sekolah keagamaan dan pendidikan khusus sederajat, seperti Sekolah Menengah Umum, Madrasah Aliyah dan Sekolah Luar Biasa Menengah Tingkat Atas.",
          
        },
        {
          "number": "85230",
          "name": "PENDIDIKAN MENENGAH KEJURUAN DAN TEKNIS\\/ALIYAH KEJURUAN PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan sekolah menengah kejuruan dan berlangsung selama tiga tahun yang dikelola oleh pemerintah, termasuk sekolah keagamaan dan pendidikan khusus yang sederajat, seperti Sekolah Menengah Kejuruan (SMK), dengan program studi seperti pariwisata, boga, manajemen, perkantoran, perhotelan, teknik, farmasi, kecantikan dan rambut, pertanian (termasuk kelautan dan perikanan) dan sekolah menengah kejuruan lainnya, termasuk sekolah khusus untuk peserta didik berkebutuhan khusus pada jenjang pendidikan menengah. Termasuk pendidikan kedinasan yang diselenggarakan oleh lembaga\\/badan\\/instansi pemerintah selain Kementerian Pendidikan dan Kebudayaan.",
          
        },
        {
          "number": "85240",
          "name": "PENDIDIKAN MENENGAH KEJURUAN\\/ALIYAH KEJURUAN SWASTA",
          "description": "Kelompok ini mencakup pendidikan sekolah menengah kejuruan dan berlangsung selama tiga tahun yang dikelola oleh swasta, seperti Sekolah Menengah Kejuruan (SMK), dengan program studi seperti pariwisata, boga, manajemen, perkantoran, perhotelan, teknik, farmasi, kecantikan dan rambut, pertanian dan sekolah menengah kejuruan lainnya, termasuk sekolah khusus untuk peserta didik berkebutuhan khusus pada jenjang pendidikan menengah.",
          
        },
        {
          "number": "85251",
          "name": "SATUAN PENDIDIKAN KERJASAMA PENDIDIKAN MENENGAH ATAS",
          "description": "Kelompok ini mencakup satuan pendidikan jenjang Sekolah Menengah Atas yang diselenggarakan atau dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan di Indonesia pada jalur formal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85252",
          "name": "SATUAN PENDIDIKAN KERJASAMA PENDIDIKAN MENENGAH KEJURUAN",
          "description": "Kelompok ini mencakup satuan pendidikan jenjang Sekolah Menengah Kejuruan yang diselenggarakan atau dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan di Indonesia pada jalur formal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85261",
          "name": "SATUAN PENDIDIKAN MUADALAH\\/ PENDIDIKAN DINIYAH FORMAL ULYA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan menengah yang diselenggarakan pada jalur pendidikan formal sederajat dengan sekolah menengah atas\\/madrasah aliyah, meliputi satuan pendidikan muadalah ulya dan satuan pendidikan diniyah formal ulya.",
          
        },
        {
          "number": "85262",
          "name": "SATUAN PENDIDIKAN PESANTREN PENGKAJIAN KITAB KUNING ULYA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan menengah yang lulusannya diakui sama dengan pendidikan formal sederajat dengan sekolah menengah atas\\/madrasah aliyah setelah dinyatakan lulus ujian. Termasuk dalam kelompok ini: pendidikan pesantren berbentuk pengkajian kitab kuning jenjang ulya; dan pendidikan kesetaraan pada pondok pesantren salafiyah jenjang ulya",
          
        },
        {
          "number": "85263",
          "name": "SATUAN PENDIDIKAN MUADALAH WUSTHA DAN ULYA BERKESINAMBUNGAN",
          "description": "Kelompok ini mencakup pendidikan pesantren berbentuk satuan pendidikan muadalah dengan menggabungkan penyelenggaraan satuan pendidikan muadalah wustha (lihat 85153) dan satuan pendidikan muadalah ulya (lihat 85261) secara berkesinambungan sesuai ketentuan peraturan perundang- undangan.",
          
        },
        {
          "number": "85270",
          "name": "SATUAN PENDIDIKAN KEAGAMAAN MENENGAH",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan selain pendidikan keagamaan islam pada jenjang pendidikan menengah yang diselenggarakan pada jalur pendidikan formal sederajat dengan sekolah menengah atas\\/madrasah aliyah.",
          
        },
        {
          "number": "85311",
          "name": "PENDIDIKAN TINGGI AKADEMIK PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan yang memberikan tekanan pada pembentukan keahlian akademik di sekolah tinggi\\/institut\\/universitas, untuk mengenal penelitian dalam suatu bidang ilmu pengetahuan dan teknologi yang dikelola oleh pemerintah, meliputi jenis pendidikan akademik program sarjana, program magister dan program doktor.",
          
        },
        {
          "number": "85312",
          "name": "PENDIDIKAN TINGGI VOKASI DAN PROFESI PEMERINTAH",
          "description": "Kelompok ini mencakup pendidikan yang memberikan tekanan pada pembentukan keahlian profesional, yaitu keahlian yang menekankan pada ketrampilan dan penerapan suatu bidang ilmu pengetahuan dan teknologi dalam pekerjaan, meliputi jenis pendidikan vokasi program diploma satu, diploma dua, diploma tiga, dan diploma empat atau sarjana terapan, program magister terapan, program doktor terapan, serta jenis pendidikan profesi seperti program profesi dan program spesialis yang dikelola oleh pemerintah.",
          
        },
        {
          "number": "85321",
          "name": "PENDIDIKAN TINGGI AKADEMIK SWASTA",
          "description": "Kelompok ini mencakup pendidikan yang memberikan tekanan pada pembentukan keahlian akademik di sekolah tinggi\\/institut\\/universitas, untuk mengenal penelitian dalam suatu bidang ilmu pengetahuan dan teknologi yang dikelola oleh swasta, meliputi jenis pendidikan akademik program sarjana, program magister dan program doktor.",
          
        },
        {
          "number": "85322",
          "name": "PENDIDIKAN TINGGI VOKASI DAN PROFESI SWASTA",
          "description": "Kelompok ini mencakup pendidikan yang memberikan tekanan pada pembentukan keahlian profesional, yaitu keahlian yang menekankan pada ketrampilan dan penerapan suatu bidang ilmu pengetahuan dan teknologi dalam pekerjaan, meliputi jenis pendidikan vokasi program diploma satu, diploma dua, diploma tiga dan diploma empat atau sarjana terapan, program magister terapan, program doktor terapan serta jenis pendidikan profesi seperti program profesi dan program spesialis yang dikelola oleh swasta.",
          
        },
        {
          "number": "85331",
          "name": "PENDIDIKAN TINGGI KEAGAMAAN PEMERINTAH",
          "description": "Kelompok ini merupakan satuan perguruan tinggi yang menyelenggarakan Pendidikan Tinggi Keagamaan Pemerintah yang terdiri dari Universitas, Institut dan Sekolah Tinggi. Jenjang program studi yang diselenggarakan oleh perguruan tinggi keagamaan ini adalah program Diploma, program Sarjana dan program Magister, program Doktor, program Profesi dan program Spesialis.",
          
        },
        {
          "number": "85332",
          "name": "PENDIDIKAN TINGGI KEAGAMAAN SWASTA",
          "description": "Kelompok ini merupakan satuan perguruan tinggi yang menyelenggarakan Pendidikan Tinggi Keagamaan yang didirikan dan\\/atau diselenggarakan oleh masyarakat\\/swasta yang terdiri dari Universitas, Institut dan Sekolah Tinggi. Jenjang program studi yang diselenggarakan oleh perguruan tinggi keagamaan ini adalah program Diploma, program Sarjana dan program Magister, program Doktor, program Profesi dan program Spesialis.",
          
        },
        {
          "number": "85340",
          "name": "PENDIDIKAN PESANTREN TINGGI (MA&#039;HAD ALY)",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren pada jenjang pendidikan tinggi yang diselenggarakan pada jalur pendidikan formal yang diselenggarakan oleh Pesantren dan berada di lingkungan Pesantren dengan mengembangkan kajian keislaman sesuai dengan kekhasan Pesantren yang berbasis Kitab Kuning secara berjenjang dan terstruktur dengan menyelenggarakan pendidikan akademik pada program sarjana, magister, dan doktor pada rumpun ilmu agama Islam tertentu sesuai ketentuan peraturan perundang-undangan, berbentuk Ma\\&#039;had Aly. Rumpun ilmu agama Islam yang dikembangkan oleh ma&#039;had Aly meliputi: Alquran dan ilmu Alquran; tafsir dan ilmu tafsir; hadis dan ilmu hadis; fikih dan ushul fikih; akidah dan filsafat Islam; tasawuf dan tarekat; ilmu falak; sejarah dan peradaban Islam; dan bahasa dan sastra Arab.",
          
        },
        {
          "number": "85410",
          "name": "JASA PENDIDIKAN OLAHRAGA DAN REKREASI",
          "description": "Kelompok ini mencakup penyediaan pengajaran dalam kegiatan keolahragaan untuk sekelompok individu, seperti dalam perkemahan dan sekolah.Kelompok ini juga mencakup pengajaran olahraga berkemah sehari semalam. Tidak termasuk sekolah akademis, perguruan tinggi dan universitas. Pengajaran dapat dilaksanakan dalam berbagai bentuk, seperti fasilitas pelatihan pendidikan, lembaga pendidikan, tempat kerja atau rumah dan melalui surat menyurat, televisi, internet atau dengan cara lain. Pengajaran yang dilaksanakan dalam kelompok ini diatur secara formal. Kegiatan yang tercakup pengajaran olahraga (baseball, basket, cricket, sepak bola dan lain-lain), pengajaran olahraga dalam kegiatan berkemah, pengajaran cheerleading, pengajaran senam, pengajaran berkuda, baik akademis atau sekolah, pengajaran renang, instruktur, guru, pelatih olahraga profesional, pengajaran seni perang, pengajaran permainan kartu (seperti bridge), pengajaran yoga.",
          
        },
        {
          "number": "78422",
          "name": "PELATIHAN KERJA TEKNOLOGI INFORMASI DAN KOMUNIKASI SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang networking, technical support, computer engineering, programming, multimedia, database, system analyst, graphic design, office tools, animasi, artificial intelligence, IT governance, public relation, public speaking, dan lainnya yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "78423",
          "name": "PELATIHAN KERJA INDUSTRI KREATIF SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang teknik ukir logam, teknik ukir kayu, merenda, menyulam, menenun, sablon, anyaman, teknik batik tulis, teknik batik cap, penyamakan kulit, finishing kulit, pembuatan produk dari kulit, menjahit (knitting, woven), teknik bordir, teknik pola, fashion design, fashion technology, kecantikan kulit, kecantikan rambut, dan lainnya yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "78424",
          "name": "PELATIHAN KERJA PARIWISATA DAN PERHOTELAN SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang perhotelan yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "78425",
          "name": "PELATIHAN KERJA BISNIS DAN MANAJEMEN SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah keterampilan\\/keahlian dalam bidang bisnis dan manajemen yang diselenggarakan oleh swasta. Kegiatan yang masuk dalam kelompok ini adalah pelatihan sekretaris, administrasi perkantoran, ICT for secretary,keuangan, tata niaga\\/penjualan, bahasa asing, promosi produktivitas, bimbingan konsultansi, pengukuran produktivitas, manajemen peningkatan produktivitas, kewirausahaan, dan lainnya.",
          
        },
        {
          "number": "78426",
          "name": "PELATIHAN KERJA PEKERJAAN DOMESTIK SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang pengurus rumah tangga, penjaga lanjut usia, pengasuh bayi\\/balita, pengasuh anak, juru masak, dan lainnya yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "78427",
          "name": "PELATIHAN KERJA PERTANIAN DAN PERIKANAN SWASTA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang mekanisasi pertanian, tanaman pangan, hortikultura, mix farming, pengolahan tanah, konservasi lahan, budidaya tanaman, penangkapan ikan, budidaya ikan, permesinan perikanan, pengolahan hasil pertanian, pengolahan hasil perikanan, pengolahan hasil peternakan, agribisnis produksi tanaman, agribisnis produksi peternakan, agribisnis produksi sumber daya perairan dan lainnya yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "78429",
          "name": "PELATIHAN KERJA SWASTA LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja lainnya yang diselenggarakan swasta yang belum dicakup dalam kelompok 78421 s.d. 78427, termasuk bidang metodologi pelatihan kerja, Kesehatan dan Keselamatan Kerja (K3), pelatihan motivasi, pengembangan diri, pengembangan karir, neuro language programming, dan lainnya yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "78431",
          "name": "PELATIHAN KERJA TEKNIK PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang mesin produksi, instalasi pipa, kerja pelat, pengecoran logam, CNC, las industri, fabrikasi, las bawah air, teknik kendaraan ringan, teknik sepeda motor, teknik alat berat, instalasi penerangan, instalasi tenaga, otomasi industri, mekatronika, telekomunikasi, instrumentasi dan kontrol, audio video, refrigerasi domestik, teknik tata udara, konstruksi batu dan beton, konstruksi kayu, gambar bangunan, furniture, konstruksi baja ringan, pekerjaan gipsum, survei dan pemetaan, pembesian, dan lainnya yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "78432",
          "name": "PELATIHAN KERJA TEKNOLOGI INFORMASI DAN KOMUNIKASI PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang networking, technical support, computer engineering, programming, multimedia, database, system analyst, graphic design, office tools, animasi, artificial intelligence, IT governance, public relation, public speaking, dan lainnya yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "78433",
          "name": "PELATIHAN KERJA INDUSTRI KREATIF PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang teknik ukir logam, teknik ukir kayu, merenda, menyulam, menenun, sablon, anyaman, teknik batik tulis, teknik batik cap, penyamakan kulit, finishing kulit, pembuatan produk dari kulit, menjahit (knitting, woven), teknik bordir, teknik pola, fashion design, fashion technology, kecantikan kulit, kecantikan rambut, dan lainnya yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "78434",
          "name": "PELATIHAN KERJA PARIWISATA DAN PERHOTELAN PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang perhotelan yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "78435",
          "name": "PELATIHAN KERJA BISNIS DAN MANAJEMEN PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah keterampilan\\/keahlian dalam bidang bisnis dan manajemen yang diselenggarakan oleh perusahaan. Kegiatan yang masuk dalam kelompok ini adalah pelatihan sekretaris, administrasi perkantoran, ICT for secretary,keuangan, tata niaga\\/penjualan, bahasa asing, promosi produktivitas, bimbingan konsultansi, pengukuran produktivitas, manajemen peningkatan produktivitas, kewirausahaan, dan lainnya.",
          
        },
        {
          "number": "78436",
          "name": "PELATIHAN KERJA PEKERJAAN DOMESTIK PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang pengurus rumah tangga, penjaga lanjut usia, pengasuh bayi\\/balita, pengasuh anak, juru masak, dan lainnya yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "78437",
          "name": "PELATIHAN KERJA PERTANIAN DAN PERIKANAN PERUSAHAAN",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja yang bertujuan untuk menambah ketrampilan\\/keahlian dalam bidang mekanisasi pertanian, tanaman pangan, hortikultura, mix farming, pengolahan tanah, konservasi lahan, budidaya tanaman, penangkapan ikan, budidaya ikan, permesinan perikanan, pengolahan hasil pertanian, pengolahan hasil perikanan, pengolahan hasil peternakan, agribisnis produksi tanaman, agribisnis produksi peternakan, agribisnis produksi sumber daya perairan dan lainnya yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "78439",
          "name": "PELATIHAN KERJA PERUSAHAAN LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pelatihan kerja lainnya yang diselenggarakan perusahaan yang belum dicakup dalam kelompok 78431 s.d. 78437, termasuk bidang metodologi pelatihan kerja, Kesehatan dan Keselamatan Kerja (K3), pelatihan motivasi, pengembangan diri, pengembangan karir, neuro language programming, dan lainnya yang diselenggarakan oleh perusahaan.",
          
        },
        {
          "number": "79111",
          "name": "AKTIVITAS AGEN PERJALANAN WISATA",
          "description": "Kelompok ini mencakup usaha yang kegiatannya sebagai perantara penjualan paket wisata, baik secara daring (online) maupun luring (offline), yang dikemas oleh biro perjalanan wisata; memesan tiket angkutan darat, laut, dan udara, baik untuk tujuan dalam negeri maupun luar negeri; memesan akomodasi, restoran, dan tiket pertunjukan seni budaya, serta kunjungan ke destinasi atau daya tarik wisata; dan mengurus dokumen perjalanan berupa paspor dan visa atau dokumen lain yang dipersamakan.",
          
        },
        {
          "number": "79112",
          "name": "AKTIVITAS AGEN PERJALANAN IBADAH UMROH DAN HAJI KHUSUS",
          "description": "Kelompok ini mencakup usaha yang kegiatannya sebagai perantara penjualan paket ibadah umroh dan haji khusus, baik secara daring (online) maupun luring (offline), yang dikemas oleh biro perjalanan ibadah umroh dan haji khusus; memesan tiket angkutan darat, laut, dan udara, baik untuk tujuan dalam negeri maupun luar negeri; memesan akomodasi, restoran, dan tiket pertunjukan seni budaya, serta kunjungan ke destinasi atau daya tarik wisata; dan mengurus dokumen perjalanan berupa paspor dan visa atau dokumen lain yang dipersamakan.",
          
        },
        {
          "number": "79119",
          "name": "AKTIVITAS AGEN PERJALANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha yang kegiatannya tidak termasuk dalam kelompok 79111 dan 79112, melakukan pemesanan dan penjualan tiket angkutan udara, laut dan darat, baik untuk tujuan dalam negeri maupun luar negeri.",
          
        },
        {
          "number": "79121",
          "name": "AKTIVITAS BIRO PERJALANAN WISATA",
          "description": "Kelompok ini mencakup usaha yang kegiatannya melakukan perencanaan dan pengemasan komponen-komponen perjalanan wisata termasuk wisata alam, yang meliputi sarana wisata, destinasi atau daya tarik wisata dan jasa pariwisata lainnya terutama yang terdapat di wilayah Indonesia dalam bentuk paket wisata, melakukan penyelenggaraan dan penjualan paket wisata dengan cara menyalurkan melalui agen perjalanan dan atau menjual langsung kepada wisatawan atau konsumen, melakukan penyediaan layanan pramuwisata yang berhubungan dengan paket wisata yang dijual, baik secara daring (online) maupun luring (offline), melakukan penyediaan layanan angkutan wisata, melakukan pemesanan akomodasi, restoran, tempat konvensi, dan tiket penjualan seni budaya serta kunjungan ke daya tarik wisata, melakukan pengurusan dokumen perjalanan berupa paspor dan visa atau dokumen lain yang dipersamakan.",
          
        },
        {
          "number": "79122",
          "name": "AKTIVITAS BIRO PERJALANAN IBADAH UMROH DAN HAJI KHUSUS",
          "description": "Kelompok ini mencakup usaha yang kegiatannya melakukan perencanaan dan pengemasan komponen-komponen perjalanan ibadah umroh dan haji khusus dengan cara menyalurkan melalui agen perjalanan dan atau menjual langsung kepada konsumen, melakukan penyediaan layanan yang berhubungan dengan paket ibadah umroh dan haji khusus yang dijual, baik secara daring (online) maupun luring (offline), melakukan penyediaan layanan angkutan, akomodasi, restoran, melakukan pengurusan dokumen perjalanan berupa paspor dan visa atau dokumen lain yang dipersamakan.",
          
        },
        {
          "number": "79129",
          "name": "AKTIVITAS BIRO PERJALANAN LAINNYA",
          "description": "Kelompok ini mencakup usaha yang kegiatannya tidak termasuk dalam kelompok 79121 dan 79122, baik secara daring (online) maupun luring (offline), melakukan penyediaan layanan angkutan, akomodasi, restoran, tempat konvensi, dan melakukan pengurusan dokumen perjalanan berupa paspor dan visa atau dokumen lain yang dipersamakan.",
          
        },
        {
          "number": "79911",
          "name": "JASA INFORMASI PARIWISATA",
          "description": "Kelompok ini mencakup kegiatan penyediaan informasi mengenai obyek dan sarana pariwisata, jasa pariwisata, transportasi dan informasi lain yang diperlukan oleh wisatawan. Penyebaran informasi tentang usaha pariwisata atau informasi lain yang diperlukan wisatawan melalui media cetak, elektronik atau media komunikasi lain. Termasuk juga kegiatan pemberian informasi mengenai layanan pemesanan, akomodasi, restoran, penerbangan, angkutan darat dan angkutan laut.",
          
        },
        {
          "number": "79912",
          "name": "JASA INFORMASI DAYA TARIK WISATA",
          "description": "Kelompok ini mencakup kegiatan penyediaan informasi mengenai daya tarik wisata baik alam, buatan maupun budaya seperti penyediaan data, berita, feature, foto, video, dan laporan aktivitas kunjungan dari influencer, buzzer, endorser, hasil penelitian mengenai daya tarik wisata. Penyebaran informasi tentang wisata melalui media cetak, elektronik atau media komunikasi lain baik daring (online) maupun luring (offline).",
          
        },
        {
          "number": "79921",
          "name": "JASA PRAMUWISATA",
          "description": "Kelompok ini mencakup perusahaan yang menyediakan usaha jasa pramuwisata yang dikenal dengan pemandu wisata (tour guide), yaitu kegiatan usaha yang mencakup jasa pendampingan dan bimbingan, termasuk interpretasi budaya dan alam, serta membantu segala sesuatu yang diperlukan wisatawan. Termasuk mengkoordinasikan tenaga pramuwisata lepas untuk memenuhi kebutuhan wisatawan secara perorangan atau kebutuhan biro perjalanan wisata.",
          
        },
        {
          "number": "79922",
          "name": "JASA INTERPRETER WISATA",
          "description": "Kelompok ini menyangkut usaha jasa interpreter wisata, yaitu kegiatan yang memberikan bimbingan, penerangan, dan petunjuk tentang obyek wisata, membantu segala sesuatu yang diperlukan wisatawan, termasuk jasa interpreter wisata alam di kawasan hutan yang memberikan pemahaman dan edukasi akan pentingnya kelestarian alam. Termasuk juga dalam kelompok ini perusahaan yang menyediakan tenaga interpreter wisata dan atau mengkoordinasikan tenaga interpreter wisata lepas untuk memenuhi kebutuhan wisatawan secara perorangan atau kebutuhan biro perjalanan wisata.",
          
        },
        {
          "number": "79990",
          "name": "JASA RESERVASI LAINNYA YBDI YTDL",
          "description": "Kelompok ini mencakup usaha jasa perjalanan wisata lainnya yang belum termasuk pada subgolongan 7991 dan 7992, seperti penyediaan jasa pemesanan lainnya yang berkaitan dengan perjalanan, seperti transportasi, hotel, restoran, sewa mobil, kegiatan hiburan dan olahraga; peyediaan jasa time share exchange (akomodasi); kegiatan penjualan tiket untuk event tertentu seperti theater, olahraga dan acara hiburan, pertunjukan seni budaya, serta kunjungan ke obyek dan daya tarik wisata dan kesenangan lainnya dan kegiatan ybdi ytdl.",
          
        },
        {
          "number": "80100",
          "name": "AKTIVITAS KEAMANAN SWASTA",
          "description": "Kelompok ini mencakup usaha jasa penyelidikan, pengawasan, penjagaan dan kegiatan atau perlindungan untuk keselamatan perorangan dan harta milik. Termasuk kegiatan patroli, seperti pengawalan dalam perjalanan membawa barang berharga, bodyguard, patroli jalan raya, penjagaan gedung, kantor, pabrik, hotel dan sebagainya, penyelidikan sidik jari, tanda tangan dan tulisan tangan. Penjagaan dengan sistem instalasi alarm dimasukkan dalam kelompok 80200. Penyelidikan yang berhubungan dengan perasuransian dimasukkan dalam subgolongan 6621.",
          
        },
        {
          "number": "80200",
          "name": "AKTIVITAS JASA SISTEM KEAMANAN",
          "description": "Kelompok ini mencakup kegiatan jasa sistem keamanan, seperti pengawasan sistem tanda bahaya keamanan elektronik, seperti tanda bahaya kebakaran dan pencurian, termasuk pemeliharaannya; pemasangan, perbaikan, pembangunan kembali dan pengaturan perlengkapan kunci mekanik atau elektronik, ruangan besi dan peti besi. Kegiatan penjualan, pemasangan dan perbaikan dari sistem keamanan, perlengkapan kunci mekanik atau elektronik, ruangan besi dan peti besi, jika menjadi satu kesatuan dengan pengoperasiannya tercakup pada kelompok ini. Jika tidak dimasukkan pada klasifikasi yang bersesuaian. Termasuk jasa sistem keamanan yang menggunakan pemindaian bagasi dengan sumber radiasi pengion.",
          
        },
        {
          "number": "80300",
          "name": "AKTIVITAS PENYELIDIKAN",
          "description": "Kelompok ini mencakup kegiatan penyedia jasa penyelidikan dan detektif. Kegiatan semua penyelidik pribadi atau swasta, tidak bergantung jenis klien atau tujuan dari penyelidikan dicakup pada golongan ini. Termasuk penyelidikan latar belakang seseorang, pencarian jejak orang yang hilang, pencurian dan penggelapan.",
          
        },
        {
          "number": "81100",
          "name": "AKTIVITAS PENYEDIA GABUNGAN JASA PENUNJANG FASILITAS",
          "description": "Kelompok ini secara khusus menyediakan sebuah gabungan jasa penunjang, seperti pembersihan interior umum, pemeliharaan, pembuangan sampah, penjagaan dan pengamanan, pengiriman surat, penerimaan tamu, pencucian pakaian dan jasa yang berhubungan untuk menunjang operasional dalam fasilitas klien.Kelompok ini juga menyediakan tenaga operasianal untuk melakukan kegiatan penunjang ini, akan tetapi tidak termasuk dengan atau tanggung jawab atas usaha atau kegiatan utama klien.",
          
        },
        {
          "number": "81210",
          "name": "AKTIVITAS KEBERSIHAN UMUM BANGUNAN",
          "description": "Kelompok ini mencakup kegiatan penyedia jasa kebersihan bermacam jenis gedung milik perusahaan\\/lembaga\\/badan\\/instansi pemerintah atau swasta, seperti gedung perkantoran, pabrik, pertokoan, balai pertemuan dan gedung sekolah, termasuk jasa kebersihan interior gedung-gedung tersebut, seperti pembersihan lantai, dinding, furnitur, jendela, ventilasi dan unit exhaust. Pencucian karpet dan permadani serta pembersihan gorden dimasukkan dalam kelompok 96200. Kegiatan jasa kebersihan gedung yang dilakukan oleh pekerja yang melayani rumah tangga dimasukkan dalam kelompok 97000.",
          
        },
        {
          "number": "81290",
          "name": "AKTIVITAS KEBERSIHAN BANGUNAN DAN INDUSTRI LAINNYA",
          "description": "Kelompok ini mencakup Kegiatan penyedia jasa pembersihan eksterior dari semua jenis bangunan, termasuk kantor, pabrik, toko, lembaga dan tempat bisnis dan profesional lainnya serta bangunan untuk tempat tinggal atau pemukiman multi unit, kegiatan pembersihan khusus dari bangunan seperti pembersihan jendela, cerbong asap dan tungku atau perapian, kompor, tungku bakar, tempat pembakaran sampah, ketel atau alat perebus, pipa atau saluran ventilasi, pembuangan gas atau uap, jasa pembersihan dan pemeliharaan kolam renang, jasa pembersihan mesin industri, jasa pembersihan kereta, bus, pesawat terbang dan lain-lain, jasa pembersihan bagian dalam kapal dan truk tanker , jasa pembasmian dan pemusnahan hama, jasa pembersihan jalan dan pembersihan salju dan es, dan jasa pembersihan bangunan dan industri lainnya.",
          
        },
        {
          "number": "81300",
          "name": "AKTIVITAS PERAWATAN DAN PEMELIHARAAN TAMAN",
          "description": "Kelompok ini mencakup kegiatan pengerjaan, perawatan dan pemelihaan pertamanan untuk lokasi bangunan hunian dan non hunian serta serta bangunan sipil lainnya, seperti taman dan kebun untuk perumahan pribadi dan umum, bangunan publik dan semi-publik (sekolah, rumah sakit, lembaga pemerintah, tempat ibadah dan lain-lain), kawasan perkotaan (taman, kawasan penghijauan, pemakaman atau kuburan dan lain-lain), jalur hijau jalan bebas hambatan (jalan, jalur kereta, jalur angkutan air) dan bangunan industri dan komersial; penghijauan untuk bangunan (kebun di atas atap, penghijauan depan bangunan, tanaman dalam ruangan), taman olahraga, taman bermain dan taman rekreasi lainnya (lapangan olahraga, bermain, berjemur dan golf), dan tempat air tenang dan mengalir (kolam, kolam renang, selokan, anak sungai, sistem saluran pembuangan); dan tanaman untuk perlindungan terhadap suara atau keributan, angin, erosi, jarak pandang dan panas atau silau matahari.",
          
        },
        {
          "number": "82110",
          "name": "AKTIVITAS PENYEDIA GABUNGAN JASA ADMINISTRASI KANTOR",
          "description": "Kelompok ini mencakup penyediaan gabungan jasa administrasi perkantoran sehari-hari, seperti penerimaan tamu, perencanaan keuangan, pemeliharaan catatan dan tagihan rekening, jasa personalia dan surat menyurat.",
          
        },
        {
          "number": "82190",
          "name": "AKTIVITAS FOTOKOPI, PENYIAPAN DOKUMEN DAN AKTIVITAS KHUSUS PENUNJANG KANTOR LAINNYA",
          "description": "Kelompok ini mencakup aktivitas penyedia jasa khusus penunjang kantor atau perusahaan lainnya yang tidak dapat diklasifikasikan di tempat lain, seperti penyiapan dokumen, editing dan koreksi dokumen, pengetikan, pengolahan kata atau desktop publishing, jasa penunjang sekretariat, perekaman dokumen dan jasa sekretariat lainnya, penulisan surat atau ringkasan, persewaan kotak surat dan jasa postal dan surat menyurat lainnya (kecuali direct mail advertising), jasa fotokopi, penggandaan, blue printing, jasa pengolah kata, jasa penggandaan dokumen lain yang juga menyediakan jasa pencetakan, seperti pencetakan offset, pencetakan cepat, pencetakan digital dan pencetakan prepress.",
          
        },
        {
          "number": "82200",
          "name": "AKTIVITAS CALL CENTRE",
          "description": "Kelompok ini mencakup usaha jasa call center, seperti inbound call centre (panggilan ke dalam), menjawab panggilan dari pelanggan oleh operator manusia, distribusi panggilan otomatis, integrasi telepon dan komputer, sistem respon suara interaktif atau metode yang sejenis untuk menerima permintaan, menyediakan produk informasi yang berkaitan dengan permintaan bantuan pelanggan atau menyalurkan keluhan atau komplain dari pelanggan; outbond call centre (panggilan ke luar), menggunakan metode yang sejenis untuk menjual atau memasarkan barang atau jasa kepada pelanggan potensial, melakukan penelitian pasar atau jajak pendapat masyarakat dan kegiatan yang sejenis kepada pelanggan.",
          
        },
        {
          "number": "85497",
          "name": "PENDIDIKAN TEKNIK SWASTA",
          "description": "Kelompok ini mencakup kegiatan pendidikan teknik diselenggarakan swasta. Kegiatan yang termasuk dalam kegiatan ini adalah jasa pendidikan atau kursus desain, desain grafis, desain interior, elektronika, engineering, instalasi listrik, konstruksi, las, mekanik otomotif mobil dan motor, sekolah mengemudi kendaraan bermotor (mengemudi), pemetaan, perminyakan, rancang\\/tata bangunan, riset, teknik, teknik industri, teknik kelautan, teknik mesin, teknik sipil, teknisi alat berat, teknisi handphone, teknisi komputer, telekomunikasi dan lain-lain.",
          
        },
        {
          "number": "85498",
          "name": "PENDIDIKAN KERAJINAN DAN INDUSTRI",
          "description": "Kelompok ini mencakup kegiatan pendidikan kerajinan dan industri yang diselenggarakan swasta. Kegiatan yang termasuk dalam kegiatan ini adalah jasa pendidikan atau kursus anyaman dam kerajinan, bordir, hantaran, ketrampilan atau home industri, membatik, menjahit, meubelair, MPP, MPWA, pertukangan kayu, sablon, tata boga\\/memasak, tata busana, tenun, ukir kayu dan lain-lain.",
          
        },
        {
          "number": "85499",
          "name": "PENDIDIKAN LAINNYA SWASTA",
          "description": "Kelompok ini mencakup kegiatan pendidikan lainnya yang diselenggarakan swasta yang belum dicakup dalam kelompok 85491 s.d. 85498. Termasuk peningkatan kompetensi bagi guru dan tenaga kependidikan serta jasa kursus untuk meninjau ujian profesional, pengajaran membaca cepat, sekolah terbang, pelatihan penjaga keselamatan, pelatihan bertahan hidup dan pelatihan berbicara di depan umum, agribisnis, animasi dan sinema, anouncer, broad casting, budidaya jangkrik, cargo, entertainment dan modeling, hukum, hukum bisnis, hukum perpajakan, jurnalistik\\/reporter, kepelautan, komuinikasi, master of ceremony (MC), notaris\\/notariat, pariwisata dan perhotelan, pelayaran (anak buah kapal), penasihat hukum, penyiar, perikanan, pertanian, peternakan, public relation, public speaking, show biz, tours and travel, transportasi udara dan lain-lain. Termasuk juga dalamKelompok ini mencakup kegiatan pendidikan di luar sekolah yang diselenggarakan oleh swasta yang ikut menyelenggarakan pendidikan terkait dengan topik ketenaganukliran.",
          
        },
        {
          "number": "85500",
          "name": "KEGIATAN PENUNJANG PENDIDIKAN",
          "description": "Kelompok ini mencakup usaha pemberian saran dan bantuan operasional pada dunia pendidikan, seperti jasa konsultasi pendidikan, jasa penyuluhan dan bimbingan pendidikan, jasa evaluasi uji pendidikan, jasa uji pendidikan dan organisasi program pertukaran pelajar.",
          
        },
        {
          "number": "86101",
          "name": "AKTIVITAS RUMAH SAKIT PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan perawatan kesehatan dan pengobatan fisik, baik untuk perawatan jalan maupun rawat inap (opname), yang dilakukan rumah sakit umum, rumah bersalin, rumah sakit khusus (sanatorium, rumah sakit kusta) yang dikelola pemerintah.",
          
        },
        {
          "number": "86103",
          "name": "AKTIVITAS RUMAH SAKIT SWASTA",
          "description": "Kelompok ini mencakup kegiatan perawatan kesehatan dan pengobatan fisik, baik untuk perawatan jalan maupun rawat inap (opname), yang dilakukan rumah sakit umum swasta, rumah bersalin swasta, rumah sakit khusus swasta.",
          
        },
        {
          "number": "86104",
          "name": "AKTIVITAS KLINIK PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan perawatan kesehatan dan pengobatan fisik yang dikelola oleh pemerintah baik perawatan secara rawat jalan dan rawat inap.",
          
        },
        {
          "number": "86105",
          "name": "AKTIVITAS KLINIK SWASTA",
          "description": "Kelompok ini mencakup kegiatan perawatan kesehatan dan pengobatan fisik yang dikelola oleh swasta baik perawatan secara rawat jalan dan rawat inap.",
          
        },
        {
          "number": "86109",
          "name": "AKTIVITAS RUMAH SAKIT LAINNYA",
          "description": "Kelompok ini mencakup kegiatan perawatan kesehatan dan pengobatan fisik lainnya selain yang tercakup dalam kelompok 86101 s.d. 86105.",
          
        },
        {
          "number": "86201",
          "name": "AKTIVITAS PRAKTIK DOKTER",
          "description": "Kelompok ini mencakup kegiatan yang memberikan jasa perawatan dan pengobatan penyakit yang bersifat umum yang dilakukan secara berdiri sendiri oleh dokter.",
          
        },
        {
          "number": "86202",
          "name": "AKTIVITAS PRAKTIK DOKTER SPESIALIS",
          "description": "Kelompok ini mencakup kegiatan yang memberikan jasa perawatan dan pengobatan penyakit yang bersifat khusus seperti mata, THT, penyakit dalam, penyakit kulit dan kelamin dan lainnya yang dilakukan secara berdiri sendiri oleh dokter spesialis.",
          
        },
        {
          "number": "86203",
          "name": "AKTIVITAS PRAKTIK DOKTER GIGI",
          "description": "Kelompok ini mencakup kegiatan yang memberikan jasa perawatan dan pengobatan kesehatan gigi yang dilakukan secara berdiri sendiri oleh dokter gigi.",
          
        },
        {
          "number": "86901",
          "name": "AKTIVITAS PELAYANAN KESEHATAN YANG DILAKUKAN OLEH TENAGA KESEHATAN SELAIN DOKTER DAN DOKTER GIGI",
          "description": "Kelompok ini mencakup pemberian pelayanan kesehatan oleh tenaga kesehatan selain dokter dan dokter gigi. Aktivitas ini meliputi tenaga keperawatan, tenaga kebidanan, tenaga kefarmasian, tenaga kesehatan masyarakat, tenaga kesehatan lingkungan, tenaga gizi, tenaga keterapian fisik, tenaga keteknisian medis, tenaga teknik biomedika, tenaga kesehatan tradisional, tenaga psikologi klinis, dan tenaga kesehatan lain. Termasuk juga kegiatan pelayanan kesehatan tradisional komplementer yang dilakukan oleh Tenaga Kesehatan Tradisional (Nakestrad) meliputi pelayanan kesehatan tradisional ramuan dan keterampilan yang diselenggarakan di Griya Sehat\\/Fasilitas Pelayanan Kesehatan Tradisional (Fasyankestrad).",
          
        },
        {
          "number": "86902",
          "name": "AKTIVITAS PELAYANAN KESEHATAN TRADISIONAL",
          "description": "Kelompok ini mencakup pelayanan kesehatan promotif dan preventif melalui pelayanan kesehatan tradisional yang dilakukan oleh penyehat tradisional dapat berupa keterampilan dan\\/atau ramuan, seperti pijat\\/urut untuk kesehatan, refleksi, akupresur, ramuan Indonesia, hipnoterapi, patah tulang, bekam kering\\/kop, shinse, terapi energi yang diselenggarakan di panti sehat.",
          
        },
        {
          "number": "86903",
          "name": "AKTIVITAS PELAYANAN PENUNJANG KESEHATAN",
          "description": "Kelompok ini mencakup kegiatan pelayanan penunjang kesehatan yang dikelola baik oleh pemerintah maupun swasta, seperti laboratorium medis (laboratorium pemeriksaan darah dan lainnya), laboratorium pengolahan sel\\/sel punca, gudang farmasi, bank mata, unit transfusi darah, bank sperma, bank transplantasi organ, bank sel dan jaringan, optikal, dan penunjang medik lainnya.",
          
        },
        {
          "number": "86904",
          "name": "AKTIVITAS ANGKUTAN KHUSUS PENGANGKUTAN ORANG SAKIT (MEDICAL EVACUATION)",
          "description": "Kelompok ini mencakup usaha pengangkutan khusus orang sakit seperti pesawat udara, ambulans dan lainnya berdasarkan keadaan tertentu dengan tujuan kota-kota atau provinsi di dalam negeri.",
          
        },
        {
          "number": "87100",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PERAWATAN DAN PEMULIHAN KESEHATAN",
          "description": "Kelompok ini mencakup kegiatan sosial di dalam panti untuk perawatan dan pemulihan kesehatan, memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi penyandang disabilitas bekas penyakit kronis agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat, seperti rumah untuk lanjut usia dengan perawatan, rumah pemulihan kesehatan, rumah peristirahatan dengan perawatan, fasilitas perawatan dan rumah perawatan.872 AKTIVITAS SOSIAL DI DALAM PANTI UNTUK KETERBELAKANGAN MENTAL, GANGGUAN MENTAL DAN PENYALAHGUNAAN OBAT TERLARANG Golongan ini mencakup penyediaan jasa sosial di dalam panti dan pengobatan untuk orang dengan keterbelakangan mental, gangguan mental dan masalah penyalahgunaan obat terlarang di mana fasilitas penyediaan tempat tinggal, makanan, pengawasan yang bersifat melindungi, konsultasi dan layanan kesehatan. Golongan ini mencakup fasilitas untuk pencandu alkohol, rumah pemulihan kesehatan untuk penderita gangguan jiwa, fasilitas untuk orang dengan keterbelakangan mental dan gangguan emosional dan rumah tempat tinggal kelompok dan rumah untuk orang yang mengalami setengah gangguan mental.",
          
        },
        {
          "number": "87201",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PENYANDANG DISABILITAS GRAHITA",
          "description": "Kelompok ini mencakup penyediaan jasa di dalam panti yang dikelola baik oleh pemerintah maupun swasta dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi penyandang cacat mental retardasi agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat.",
          
        },
        {
          "number": "87202",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PENYANDANG DISABILITAS LARAS",
          "description": "Kelompok ini mencakup penyediaan jasa di dalam panti yang dikelola baik oleh pemerintah maupun swasta dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisiK mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi penyandang cacat mental bekas psikotik agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat.",
          
        },
        {
          "number": "87203",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK KORBAN PENYALAH GUNAAN NARKOTIKA, ALKOHOL , PSIKOTROPIKA DAN ZAT ADIKTIF (NAPZA)",
          "description": "Kelompok ini mencakup penyediaan jasa di dalam panti yang dikelola baik oleh pemerintah maupun swasta dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi eks korban narkotika dan pengguna psikotropika sindroma ketergantungan agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat.",
          
        },
        {
          "number": "87301",
          "name": "AKTIVITAS SOSIAL PEMERINTAH DI DALAM PANTI UNTUK LANJUT USIA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan, perawatan, dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bagi lanjut usia terlantar dan rawan terlantar agar dapat hidup secara wajar dalam kehidupan diri sendiri, keluarga, dan bermasyarakat, yang dilakukan di dalam panti yang dikelola oleh pemerintah berdasarkan profesi pekerjaan sosial.",
          
        },
        {
          "number": "87302",
          "name": "AKTIVITAS SOSIAL SWASTA DI DALAM PANTI UNTUK LANJUT USIA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan, perawatan, dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bagi lanjut usia terlantar dan rawan terlantar agar dapat hidup secara wajar dalam kehidupan diri sendiri, keluarga, dan bermasyarakat, yang dilakukan di dalam panti yang dikelola oleh swasta berdasarkan profesi pekerjaan sosial.",
          
        },
        {
          "number": "87303",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PENYANDANG DISABILITAS NETRA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi para penyandang cacat netra agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87304",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PENYANDANG DISABILITAS DAKSA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif; rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi penyandang cacat tubuh agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87305",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PENYANDANG DISABILITAS RUNGU WICARA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi penyandang tuna rungu wicara agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87901",
          "name": "AKTIVITAS PANTI ASUHAN PEMERINTAH",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi anak yatim, piatu dan yatim piatu yang kurang mampu, terlantar agar potensi dan kapasitas belajarnya pulih kembali, dapat berkembang secara wajar, yang dilakukan di dalam panti yang dikelola oleh pemerintah berdasarkan profesi pekerjaan sosial.",
          
        },
        {
          "number": "87902",
          "name": "AKTIVITAS PANTI ASUHAN SWASTA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi anak yatim, piatu dan yatim piatu yang kurang mampu, terlantar agar potensi dan kapasitas belajarnya pulih kembali, dapat berkembang secara wajar, yang dilakukan di dalam panti yang dikelola oleh swasta berdasarkan profesi pekerjaan sosial.",
          
        },
        {
          "number": "87903",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK ANAK YANG BERHADAPAN DENGAN HUKUM",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi serta bimbingan lanjut bagi anak nakal agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87904",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK BINA REMAJA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi anak terlantar, putus sekolah agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87905",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI UNTUK PETIRAHAN ANAK",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi anak yang mengalami hambatan belajar karena menyandang masalah sosial agar potensi dan kapasitas belajarnya pulih kembali, dapat berkembang secara wajar. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87906",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI SOSIAL KARYA WANITA",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi para wanita tuna susila agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87907",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI GELANDANGAN DAN PENGEMIS",
          "description": "Kelompok ini mencakup penyediaan jasa dalam memberikan bimbingan, pelayanan dan rehabilitasi sosial yang bersifat kuratif, rehabilitatif, promotif dalam bentuk bimbingan pengetahuan dasar pendidikan, fisik, mental, sosial, pelatihan keterampilan, resosialisasi bimbingan lanjut bagi para gelandangan, pengemis dan orang terlantar agar mampu mandiri dan berperan aktif dalam kehidupan bermasyarakat. Kegiatan ini dapat dilakukan baik oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "87909",
          "name": "AKTIVITAS SOSIAL DI DALAM PANTI LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan pelayanan sosial kepada masyarakat berdasarkan profesi pekerjaan sosial yang dilakukan di dalam panti yang dikelola baik oleh pemerintah maupun swasta selain yang telah disebutkan di atas.",
          
        },
        {
          "number": "88101",
          "name": "AKTIVITAS SOSIAL PEMERINTAH TANPA AKOMODASI UNTUK LANJUT USIA DAN PENYANDANG DISABILITAS",
          "description": "Kelompok ini mencakup kegiatan berdasarkan profesi pekerjaan sosial untuk perorangan, keluarga atau masyarakat yang dilakukan oleh pemerintah, seperti penyediaan jasa kegiatan sosial, konseling, kesejahteraan, pengungsian, penyerahan dan jasa sejenis yang ditujukan untuk lanjut usia dan penyandang disabilitas di rumah atau di tempat lain dan dilakukan oleh kantor pemerintah atau oleh organisasi pemerintah khusus penyedia jasa konseling dan sebagainya, seperti kegiatan mengunjungi orang lanjut usia dan penyandang disabilitas, kegiatan perawatan harian untuk lanjut usia dan penyandang disabilitas dan kegiatan rehabilitasi dan habitasi pekerjaan untuk penyandang disabilitas di mana komponen pendidikannya terbatas, termasuk juga pembinaan, pengumpulan dan penyaluran dana bantuan sosial. Tidak mencakup kegiatan yang digambarkan dalam subgolongan ini tapi mencakup akomodasi (8730) dan kegiatan perawatan harian untuk anak-anak penyandang disabilitas (8899).",
          
        },
        {
          "number": "88102",
          "name": "AKTIVITAS SOSIAL SWASTA TANPA AKOMODASI UNTUK LANJUT USIA DAN PENYANDANG DISABILITAS",
          "description": "Kelompok ini mencakup kegiatan berdasarkan profesi pekerjaan sosial untuk perorangan, keluarga, atau masyarakat yang dilakukan oleh swasta, seperti lembaga penyediaan jasa kegiatan sosial, konseling, kesejahteraan, pengungsian, penyerahan dan jasa sejenis yang ditujukan untuk orang lanjut usia dan penyandang disabilitas di rumah atau di tempat lain dan dilakukan oleh oleh swasta, organisasi swadaya lokal maupun nasional dan atau lembaga khusus penyediaan jasa kegiatan sosial, mengunjungi orang lanjut usia dan penyandang disabilitas, kegiatan perawatan harian untuk lanjut usia dan penyandang disabilitas dan kegiatan rehabilitasi dan habitasi pekerjaan untuk penyandang disabilitas di mana komponen pendidikannya terbatas, termasuk juga pembinaan, pengumpulan dan penyaluran dana bantuan sosial. Tidak mencakup kegiatan yang digambarkan dalam kelompok ini tapi mencakup akomodasi (8730) dan kegiatan perawatan harian, termasuk untuk anak-anak penyandang disabilitas (8899).",
          
        },
        {
          "number": "88911",
          "name": "AKTIVITAS SOSIAL PENGUMPULAN DANA KEISLAMAN",
          "description": "Kelompok ini mencakup kegiatan pengumpulan, pendistribusian, dan pengelolaan dana sosial, mencakup zakat, infak, sedekah, wakaf dan Dana Sosial Keagamaan Lainnya (DSKL), baik yang dikelola oleh lembaga keislaman maupun bukan.",
          
        },
        {
          "number": "88919",
          "name": "AKTIVITAS SOSIAL PENGUMPULAN DANA LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pengumpulan, pendistribusian, dan pengelolaan dana sosial yang tidak dikelola oleh lembaga keislaman, seperti Corporate Social Responsibility (CSR) dan sumbangan perusahaan.",
          
        },
        {
          "number": "88991",
          "name": "AKTIVITAS SOSIAL PEMERINTAH TANPA AKOMODASI LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan berdasarkan profesi pekerjaan sosial, penyediaan jasa kegiatan sosial, konseling, kesejahteraan, pengungsi, penyerahan dan jasa sejenis yang diberikan kepada perorangan dan keluarga di rumah atau tempat lain dan dilakukan oleh pemerintah, organisasi penanggulangan bencana alam dan organisasi khusus penyedia jasa konseling, seperti jasa kesejahteraan dan bimbingan untuk anak-anak dan remaja, kegiatan adopsi dan kegiatan pencegahan kenakalan anak, jasa konseling keuangan rumah tangga, pernikahan dan bimbingan keluarga, jasa konsultasi hutang-piutang, kegiatan kemasyarakatan dan lingkungan, kegiatan untuk korban bencana, pengungsi, imigran dan lain-lain termasuk rumah singgah sementara atau dalam jangka waktu yang lama, kegiatan rehabilitasi dan habitasi pekerjaan untuk pengangguran di mana komponen Pendidikan terbatas, kegiatan penentuan pemenuhan syarat dalam hubungannya dengan bantuan kesejahteraan, pinjaman atau kupon makanan, kegiatan perawatan harian anak, termasuk untuk anak- anak penyandang disabilitas, kegiatan fasilitas harian untuk tuna wisma dan kelompok sosial menengah ke bawah lain. Termasuk seperti pembinaan masyarakat terasing, konsultasi keluarga, pelatihan kepemimpinan wanita dan usaha swadaya wanita desa, adopsi, resosialisasi dan pembinaan.",
          
        },
        {
          "number": "91036",
          "name": "TAMAN LAUT",
          "description": "Kelompok ini mencakup kegiatan taman laut yang terdiri dari wilayah laut yang dilindungi dapat digunakan sebagai daerah rekreasi atau hanya wilayah untuk melestarikan habitat tertentu dan menjamin ekosistem berkelanjutan untuk organime di wilayah tersebut. Misalnya Taman Laut Pahawang (Lampung), Taman Laut Raja Ampat (Papua Barat), dan Taman Laut Gili Matra (NTB).",
          
        },
        {
          "number": "91037",
          "name": "KAWASAN BURU",
          "description": "Kelompok ini mencakup kegiatan suatu kawasan yang didalamnya terdapat potensi satwa buru, baik berupa kebun buru, taman buru ataupun areal buru yang diperuntukan untuk rekreasi berburu, mencakup penyediaan sarana dan prasarana berburu, seperti Taman Buru Lingga Isaq (Aceh), Taman Buru Gunung Masigit Kareumbi (Jawa Barat), Taman Buru Komara (Sulawesi Selatan) dan Taman Buru Moyo.",
          
        },
        {
          "number": "91038",
          "name": "HUTAN LINDUNG",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam pengelolaan dan pemanfaatan\\/penggunaan kawasan hutan yang mempunyai fungsi sebagai pelindung ekosistem, tata air, erosi, dan memelihara kesuburan tanah. Contoh : Hutan Lindung Bukit Daun di Bengkulu.",
          
        },
        {
          "number": "91039",
          "name": "AKTIVITAS KAWASAN ALAM LAINNYA",
          "description": "Kelompok ini mencakup kegiatan kawasan alam lainnya seperti konservasi alam, dan cagar alam, yang belum tercakup pada kelompok 91031 s.d. 91038.",
          
        },
        {
          "number": "92000",
          "name": "AKTIVITAS PERJUDIAN DAN PERTARUHAN",
          "description": "Golongan ini mencakup kegiatan perjudian dan pertaruhan seperti penjualan tiket lotere, kegiatan operasianal mesin perjudian yang dioperasikan dengan koin, pengoperasian web site perjudian virtual, penyelenggaraan taruhan, &quot;off-track beating&quot; dan kegiatan kasino termasuk &quot;floating casino&quot;.",
          
        },
        {
          "number": "93111",
          "name": "FASILITAS STADION",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas untuk olahraga sepak bola, hoki, cricket, baseball, jai-alai, atletik (lari, lempar lompat dan lain-lain) sebagai usaha pokok, dan sarana stadion lainnya. Penyelenggaraan sekolah\\/pendidikan olahraga sepak bola, hoki, cricket, baseball, jai-alai, atletik (lari, lempar lompat dan lain-lain) yang dikelola sendiri dicakup dalam kelompok ini.",
          
        },
        {
          "number": "93112",
          "name": "FASILITAS SIRKUIT",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga yang berbentuk jalan yang melingkar atau berbentuk lingkaran, dipakai untuk berbagai perlombaan balap otomotif, pacuan kuda, balap anjing sebagai usaha pokok dan sarana sirkuit lainnya.",
          
        },
        {
          "number": "93113",
          "name": "FASILITAS GELANGGANG\\/ARENA",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga darat, air dan udara di dalam atau luar ruanganseperti: pengelolaan gelanggang\\/arena renang, bowling, biliar, slingshot, hoki es, bungee jumping, olahraga musim dingin; pengelolaan gelanggang\\/arena paragliding, hang gliding; sebagai usaha pokok dan sarana gelanggang\\/arena lainnya.",
          
        },
        {
          "number": "93114",
          "name": "FASILITAS LAPANGAN",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga golf, bulu tangkis, bola voli, bola basket, tenis sebagai usaha pokok dan sarana lapangan lainnya.",
          
        },
        {
          "number": "93115",
          "name": "FASILITAS OLAHRAGA BELADIRI",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga beladiri pencak silat (padepokan), karate (dojo), taekwondo (doljang), tinju (sasana) dan lainnya sebagai usaha pokok dan sarana lapangan lainnya.",
          
        },
        {
          "number": "93116",
          "name": "FASILITAS PUSAT KEBUGARAN\\/ FITNESS CENTER",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas untuk fitness atau kebugaran lainnya sebagai usaha pokok. Penyelenggaraan sekolah\\/ pendidikan kebugaran\\/ fitness yang dikelola sendiri dicakup dalam kelompok ini.",
          
        },
        {
          "number": "93119",
          "name": "PENGELOLAAN FASILITAS OLAH RAGA LAINNYA",
          "description": "Kelompok ini mencakup usaha yang menyediakan tempat dan fasilitas olahraga sebagai usaha pokok dan sarana lainnya selain yang tercakup pada kelompok 93111 s.d. 93116,Kelompok ini termasuk sport center.",
          
        },
        {
          "number": "93121",
          "name": "KLUB SEPAK BOLA",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub sepak bola profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93122",
          "name": "KLUB GOLF",
          "description": "Kelompok ini mencakup usaha organisasi\\/ klub golf profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93123",
          "name": "KLUB RENANG",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub renang profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93124",
          "name": "KLUB TENIS LAPANGAN",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub tenis lapangan profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93125",
          "name": "KLUB TINJU",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub tinju profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "88992",
          "name": "AKTIVITAS SOSIAL SWASTA TANPA AKOMODASI LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan berdasarkan profesi pekerjaan sosial, penyediaan jasa kegiatan sosial, konseling, kesejahteraan, pengungsi, penyerahan dan jasa sejenis yang diberikan kepada perorangan dan keluarga di rumah atau tempat lain dan dilakukan oleh swasta, lembaga swadaya lokal maupun nasional, organisasi penanggulangan bencana alam dan organisasi khusus penyedia jasa konseling, seperti jasa kesejahteraan dan bimbingan untuk anak-anak dan remaja, kegiatan adopsi dan kegiatan pencegahan kenakalan anak, jasa konseling keuangan rumah tangga, pernikahan dan bimbingan keluarga, jasa konsultasi hutang-piutang, kegiatan kemasyarakatan dan lingkungan, kegiatan untuk korban bencana, pengungsi, imigran dan lain-lain termasuk rumah singgah sementara atau dalam jangka waktu yang lama, kegiatan rehabilitasi dan habitasi pekerjaan untuk pengangguran di mana komponen pendidikan terbatas, kegiatan penentuan pemenuhan syarat dalam hubungannya dengan bantuan kesejahteraan, pinjaman atau kupon makanan, kegiatan perawatan harian anak, termasuk untuk anak-anak penyandang disabilitas, kegiatan fasilitas harian untuk tuna wisma dan kelompok sosial menengah ke bawah lain . Termasuk seperti pembinaan masyarakat terasing, konsultasi keluarga, pelatihan kepemimpinan wanita dan usaha swadaya wanita desa, adopsi, resosialisasi dan pembinaan.",
          
        },
        {
          "number": "90011",
          "name": "AKTIVITAS SENI PERTUNJUKAN",
          "description": "Kelompok ini mencakup kegiatan atau usaha menyelenggarakan pertunjukan kesenian dan hiburan panggung, seperti pertunjukan drama\\/teater, pagelaran musik, opera, sandiwara, pantomim, tari, perkumpulan kesenian daerah (wayang orang, lenong), jasa hiburan band, orchestra, kegiatan sastra dan sejenisnya.",
          
        },
        {
          "number": "90012",
          "name": "AKTIVITAS PENUNJANG SENI PERTUNJUKAN",
          "description": "Kelompok ini mencakup kegiatan penunjang seni pertunjukan, Termasuk usaha kegiatan dokumentator seni pertunjukan (video, digital, virtualising), dan skenografer\\/perupa (seni rupa panggung\\/artistik panggung), penata cahaya (lighting), penata suara (sound system).",
          
        },
        {
          "number": "90021",
          "name": "PELAKU KREATIF SENI PERTUNJUKAN",
          "description": "Kelompok ini mencakup kegiatan pelaku kreatif seni pertunjukan, seperti kegiatan yang dilakukan oleh produser, manajer panggung (stage manager), aktor, penari, koreografer, sutradara, dramaturg, direktur artistik, pantomim, monolog, pembaca naskah teater\\/drama (dramatic reading), desainer kostum khusus pertunjukan, penari, periset seni, periset budaya, dan seniman panggung lainnya yang sejenis.",
          
        },
        {
          "number": "90022",
          "name": "PELAKU KREATIF SENI MUSIK",
          "description": "Kelompok ini mencakup kegiatan pelaku kreatif di bidang industri musik yang di dalamnya termasuk pencipta lagu, komposer, penata musik, pemain musik, penyanyi, penyanyi latar, dan pelaku kreatif seni musik lainnya.",
          
        },
        {
          "number": "90023",
          "name": "AKTIVITAS PELAKU KREATIF SENI RUPA",
          "description": "Kelompok ini melakukan praktik seni dengan berbagai macam medium dan metode yang mencakup kualitas tangible dan intangible. Tangible dalam kerja dan karya seni dalam konteks kebudayaan meliputi segala hasil praktik kerja seni rupa melalui bermacam-macam pendekatan medium: lukis, gambar (drawing), patung, kriya, grafis, street art, instalasi, mixed-media, seni konseptual, happening, performance art, fotografi, video art, seni berbasis IPTEK (science art), sound art, site-specific, seni berbasis komunitas (community based art), seni media (media art), seni media baru (new media art). Termasuk dalam kelompok ini adalah para seniman seni rupa, artisan, kurator, pematung, kartunis, peneliti bidang kesenian, kolektor galeris, kritikus seni rupa, manajer seni, art handler, organisasi dan ruang seni, arsiparis seni, dan sebagainya.",
          
        },
        {
          "number": "90024",
          "name": "AKTIVITAS PENULIS DAN PEKERJA SASTRA",
          "description": "Kelompok ini mencakup kegiatan menulis, menyunting (edit), menciptakan konten tulisan dalam bentuk apapun seperti cerpen dan novel, mengevaluasi bahan terkait literatur untuk dipublikasi, termasuk naskah dan narasi untuk film, TV, radio, permainan komputer dan animasi, penerjemahan verbal maupun tertulis ke dalam berbagai bahasa, penyair, kritikus sastra, pelaku musikalisasi puisi dan pekerja sastra lainnya yang sejenis. Produk akhir dapat disampaikan melalui berbagai media, baik cetak maupun digital.",
          
        },
        {
          "number": "90025",
          "name": "JURNALIS BERITA INDEPENDEN",
          "description": "Kelompok ini mencakup usaha mencari berita yang dilakukan oleh perorangan sebagai bahan informasi, baik yang dipublikasikan melalui media cetak maupun digital.",
          
        },
        {
          "number": "90029",
          "name": "AKTIVITAS PEKERJA SENI DAN PEKERJA KREATIF LAINNYA",
          "description": "Kelompok ini mencakup kegiatan pekerja seni dan kreatif lainnya, seperti fashion stylist yang belum termasuk di dalam 90021-90025.",
          
        },
        {
          "number": "90030",
          "name": "AKTIVITAS IMPRESARIAT BIDANG SENI DAN FESTIVAL SENI",
          "description": "Kelompok ini mencakup kegiatan pengurusan dan penyelenggaraan pertunjukan hiburan baik yang berupa mendatangkan, mengirim maupun mengembalikan serta menentukan tempat, waktu dan jenis hiburan. Kegiatan usaha jasa impresariat pada kelompok ini khusus bidang seni.",
          
        },
        {
          "number": "90040",
          "name": "AKTIVITAS OPERASIONAL FASILITAS SENI",
          "description": "Kelompok ini mencakup kegiatan atau usaha mengoperasikan fasilitas seni seperti ruang konser, teater dan fasilitas seni lainnya.",
          
        },
        {
          "number": "90090",
          "name": "AKTIVITAS HIBURAN, SENI DAN KREATIVITAS LAINNYA",
          "description": "Kelompok ini mencakup kegiatan dalam usaha menyelenggarakan hiburan dan seni kepada masyarakat oleh pemerintah maupun swasta yang belum tercakup dalam 9001 s.d. 9004 sebagai media hiburan.",
          
        },
        {
          "number": "91011",
          "name": "PERPUSTAKAAN DAN ARSIP PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pemerintah yang berkaitan dengan perpustakaan dan kearsipan yang tidak tergabung dalam suatu lembaga pendidikan atau lembaga kebudayaan lain. Kegiatannya mencakup pengorganisasian dari sebuah koleksi, baik khusus atau tidak, pembuatan daftar nama atau katalog dari koleksi, peminjaman dan penyimpanan buku, peta, majalah, film, rekaman, pita (kaset), karya seni dan lain-lain, kegiatan pencarian kembali dokumen dengan tujuan untuk memenuhi kebutuhan informasi dan lain sebagainya dan perpustakaan penyedia photo dan pelayanan lainnya.",
          
        },
        {
          "number": "91012",
          "name": "PERPUSTAKAAN DAN ARSIP SWASTA",
          "description": "Kelompok ini mencakup kegiatan perpustakaan dan pengelolaan arsip yang dilakukan oleh swasta.",
          
        },
        {
          "number": "9102",
          "name": "MUSEUM DAN OPERASIONAL BANGUNAN DAN SITUS BERSEJARAH",
          "description": "Subgolongan ini mencakup kegiatan daya tarik wisata budaya.Subgolongan ini mencakup :- Kegiatan operasional museum seni, museum perhiasan, furnitur, pakaian, barang tembikar (keramik), barang perak- Kegiatan operasional museum teknologi, ilmu pengetahuan dan sejarah alam, museum bersejarah, mencakup museum militer- Kegiatan operasional museum khusus lainnya- Kegiatan operasional museum di ruang terbuka atau di luar ruangan (open-air)- Kegiatan operasional gedung dan situs bersejarahSubgolongan ini tidak mencakup :- Renovasi dan perbaikan gedung dan situs-situs bersejarah, lihat kategori F- Perbaikan karya seni dan objek koleksi museum, lihat 9002- Kegiatan perpustakaan dan pengarsipan dokumen, lihat 9101",
          
        },
        {
          "number": "91021",
          "name": "MUSEUM YANG DIKELOLA PEMERINTAH",
          "description": "Kelompok ini mencakup pengelolaan tempat dan fasilitas, serta kegiatan pameran cagar budaya, benda seni, koleksi dan\\/atau replika yang memiliki fungsi edukasi, rekreasi dan riset untuk mendukung pengembangan pariwisata dengan memperhatikan nilai pelestarian, dengan tujuan untuk memperoleh keuntungan yang dikelola oleh Pemerintah.",
          
        },
        {
          "number": "91022",
          "name": "MUSEUM YANG DIKELOLA SWASTA",
          "description": "Kelompok ini mencakup kegiatan museum yang dikelola oleh swasta.",
          
        },
        {
          "number": "91023",
          "name": "PENINGGALAN SEJARAH\\/CAGAR BUDAYA YANG DIKELOLA PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pemerintah dalam usaha pengelolaan cagar budaya atau bangunan\\/tempat peninggalan bersejarah yang mempunyai nilai penting bagi sejarah, ilmu pengetahuan dan kebudayaan, berumur sekurang-kurangnya 50 tahun, atau mewakili masa gaya yang khas dan mewakili gaya sekurang-kurangnya 50 tahun, serta dianggap mempunyai nilai penting bagi sejarah, ilmu pengetahuan, pendidikan, agama, dan kebudayaan, misalnya candi, makam, masjid dan lainnya.",
          
        },
        {
          "number": "91024",
          "name": "PENINGGALAN SEJARAH\\/CAGAR BUDAYA YANG DIKELOLA SWASTA",
          "description": "Kelompok ini mencakup kegiatan swasta dalam usaha pengelolaan cagar budaya atau bangunan\\/tempat peninggalan bersejarah yang mempunyai nilai penting bagi sejarah, ilmu pengetahuan dan kebudayaan, berumur sekurang-kurangnya 50 tahun, atau mewakili masa gaya yang khas dan mewakili gaya sekurang-kurangnya 50 tahun, serta dianggap mempunyai nilai penting bagi sejarah, ilmu pengetahuan, pendidikan, agama, dan kebudayaan, misalnya candi, makam, masjid dan lainnya.",
          
        },
        {
          "number": "91025",
          "name": "TAMAN BUDAYA",
          "description": "Kelompok ini mencakup kegiatan taman budaya yang menyediakan dan mengelola fasilitas atau tempat untuk pergelaran budaya.",
          
        },
        {
          "number": "91029",
          "name": "WISATA BUDAYA LAINNYA",
          "description": "Kelompok ini mencakup kegiatan wisata budaya yang meliputi sejarah, religi, tradisi, desa adat, kampung adat dan seni budaya yang belum dicakup pada kelompok 91021 s.d. 91025, baik dikelola oleh pemerintah maupun swasta.",
          
        },
        {
          "number": "9103",
          "name": "AKTIVITAS KEBUN BINATANG, TAMAN BOTANI DAN CADANGAN ALAM",
          "description": "Subgolongan ini mencakup :- Kegiatan operasional kebun binatang dan taman botani termasuk kebun binatang di mana anak-anak dapat berinteraksi langsung dengan binatang- Kegiatan operasional cadangan\\/kelestarian alam, mencakup pemeliharaan kehidupan liar, hutan lindung, suaka margasatwa dan cagar alamSubgolongan ini tidak mencakup :- Kegiatan pertamanan dan landscape, lihat 8130- Kegiatan operasional olahraga memancing dan berburu di cagar alam suaka margasatwa, lihat 9319",
          
        },
        {
          "number": "91031",
          "name": "TAMAN KONSERVASI DI LUAR HABITAT ALAMI (EX-SITU)",
          "description": "Kelompok ini mencakup kegiatan lembaga konservasi di luar habitat alami (ex-situ) untuk kepentingan pengembangbiakan dan atau penyelamatan tumbuhan dan satwa dengan tetap mempertahankan kemurnian jenisnya dan digunakan sebagai tempat pendidikan, peragaan dan penelitian serta pengembangan ilmu pengetahuan dan tujuan rekreasi, seperti kebun binatang, taman safari, taman satwa, taman satwa khusus, pusat latihan satwa khusus, kebun botani, herbarium dan taman tumbuhan khusus.",
          
        },
        {
          "number": "91032",
          "name": "TAMAN NASIONAL",
          "description": "Kelompok ini mencakup kegiatan kawasan pelestarian alam yang mempunyai ekosistem asli dikelola secara zonasi untuk menyelenggarakan usaha penyediaan sarana wisata alam di zona pemanfaatan dan usaha penyediaan jasa wisata alam yang bertujuan meningkatkan pemanfaatan gejala keunikan dan keindahan alam untuk kegiatan pariwisata dan rekreasi, penelitian, ilmu pengetahuan, pendidikan, dan kebudayaan, menunjang budidaya, penyimpanan dan\\/atau penyerapan karbon serta konservasi sumber daya alam yang diselenggarakan oleh pemerintah, seperti : Taman Nasional Gunung Gede Pangrango (di Jawa Barat), Taman Nasional Gunung Leuser (Aceh), Taman Nasional Kelimutu (NTT), Taman Nasional Komodo (NTT), Taman Nasional Gunung Palung (Kalimatan Barat), dan Taman Nasional Bromo Tengger Semeru (Jawa Timur).",
          
        },
        {
          "number": "91033",
          "name": "TAMAN HUTAN RAYA",
          "description": "Kelompok ini mencakup kegiatan kawasan pelestarian alam untuk tujuan koleksi tumbuhan dan atau satwa yang alami atau bukan alami, jenis asli dan atau bukan asli, untuk menyelenggarakan usaha penyediaan sarana wisata alam di blok pemanfaatan dan usaha penyediaan jasa wisata alam yang bertujuan meningkatkan pemanfaatan gejala keunikan dan keindahan alam untuk kegiatan pariwisata dan rekreasi, penelitian, ilmu pengetahuan, pendidikan, dan kebudayaan, menunjang budidaya, penyimpanan dan\\/atau penyerapan karbon serta konservasi sumber daya alam, seperti Tahura Cut Nyak Dhien (Aceh), Tahura Bukit Barisan (Sumatra Utara), Tahura Juanda (Jawa Barat), Tahura Sultan Adam (Kalimantan Selatan), Tahura R. Suryo (Jawa Timur), Tahura Ngurah Rai (Bali), dan Tahura Bukit Soeharto (Kalimantan Timur).",
          
        },
        {
          "number": "91034",
          "name": "TAMAN WISATA ALAM",
          "description": "Kelompok ini mencakup kegiatan kawasan pelestarian alam untuk menyelenggarakan usaha penyediaan sarana di blok pemanfaatan dan usaha penyediaan jasa wisata alam yang bertujuan untuk pariwisata dan rekreasi alam, seperti Taman Wisata Alam Pulau Weh (Aceh), Taman Wisata Alam Tangkuban Perahu (Jawa Barat), Taman Wisata Alam Teluk Lasolo (Sulawesi Tenggara), Taman Wisata Alam Pananjung Pangandaran (Jawa Barat), Taman Wisata Alam Batu Putih (Sulawesi Utara), dan taman wisata alam lainnya.",
          
        },
        {
          "number": "91035",
          "name": "SUAKA MARGASATWA",
          "description": "Kelompok ini mencakup kegiatan penyelenggaraan dan usaha penyediaan pengelolaan jasa wisata alam, yaitu kawasan suaka alam yang mempunyai ciri khas berupa keanekaragaman dan atau keunikan jenis satwa dan untuk kelangsungan hidup dilakukan pembinaan terhadap habitatnya, yaitu kawasan suaka alam yang mempunyai kekhasan tumbuhan, satwa dan ekosistemnya atau ekosistem tertentu yang dilindungi dan perkembangannya berlangsung secara alami. Misalnya SM Pulau Rambut (DKI Jakarta), SM Rawa Singkil (Aceh) dan SM Dataran Tinggi Yang (Jawa Timur).",
          
        },
        {
          "number": "85420",
          "name": "PENDIDIKAN KEBUDAYAAN",
          "description": "Kelompok ini mencakup pengajaran seni, drama dan musik. Kegiatan pada kelompok ini dapat disebut dengan sekolah, studio, kelas dan lain-lain. Kegiatan ini menyediakan pengajaran yang diatur secara formal, terutama untuk hobi, rekreasi atau untuk tujuan pengembangan diri, tetapi pengajaran tersebut tidak ditujukan untuk mendapatkan ijazah profesional, sarjana muda atau gelar sarjana.Kelompok ini mencakup kegiatan guru piano dan pengajaran musik lainnya, pengajaran seni, pengajaran dansa dan studio dansa, sekolah drama (bukan akademis), sekolah seni rupa (bukan akademis), sekolah seni pertunjukan (bukan akademis), sekolah fotografi (bukan akademis) dan lain-lain.",
          
        },
        {
          "number": "85430",
          "name": "PENDIDIKAN LAINNYA PEMERINTAH",
          "description": "Kelompok ini mencakup kegiatan pendidikan di luar sekolah yang diselenggarakan oleh Pemerintah dan umumnya bersifat kursus\\/pendidikan pelatihan untuk menambah\\/menunjang keterampilan\\/Kompetensi, seperti Kursus Pegawai Administrasi, Kursus Pegawai Administrasi Atas, Peningkatan dan Kompetensi Guru dan Tenaga Kependidikan, Balai Pelatihan Teknik, kursus kecantikan (perawatan tubuh, tata rias pengantin), kesejahteraan rumah tangga (pendidikan menjahit, memasak dan gizi), kesehatan (pendidikan PPPK, pijat, tusuk jarum\\/akupunktur), pendidikan terkait dengan topik ketenaganukliran dan kursus lainnya serta kelompok belajar usaha bagi orang dewasa.",
          
        },
        {
          "number": "85440",
          "name": "SATUAN PENDIDIKAN KERJASAMA PENDIDIKAN NONFORMAL",
          "description": "Kelompok ini mencakup Satuan Pendidikan Nonformal yang diselenggarakan dan dikelola atas dasar kerja sama antara Lembaga Pendidikan Asing (LPA) yang terakreditasi\\/diakui di negaranya dengan Lembaga Pendidikan Indonesia (LPI) pada jalur nonformal yang sesuai dengan ketentuan perundang-undangan.",
          
        },
        {
          "number": "85451",
          "name": "PENDIDIKAN PESANTREN LAINNYA",
          "description": "Kelompok ini mencakup satuan pendidikan pesantren yang diselenggarakan pada jalur pendidikan nonformal secara berjenjang maupun tidak berjenjang selain yang termasuk dalam kelompok pada subgolongan 8515, 8526, dan 8534, termasuk juga Pesantren Takhassus Al-Qur\\&#039;an dan Pesantren Takhassus Lainnya.",
          
        },
        {
          "number": "85452",
          "name": "PENDIDIKAN KEAGAMAAN ISLAM NON FORMAL",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan Islam yang diselenggarakan pada jalur pendidikan nonformal secara berjenjang maupun tidak berjenjang. Yang termasuk dalam kelompok ini: pendidikan madrasah diniyah takmiliyah jenjang ula, jenjang wustha, jenjang ulya, dan jenjang jami\\&#039;ah; pendidikan al-Qur\\&#039;an selain yang termasuk dalam kelompok 85151, meliputi Taman Kanak-Kanak Al-Qur\\&#039;an (TKQ), Taman Pendidikan Al-Qur\\&#039;an (TPA), Taklimul Qur\\&#039;an Lil\\&#039;aulad (TQA) dan Rumah Tahfidz Al-Qur\\&#039;an.",
          
        },
        {
          "number": "85459",
          "name": "PENDIDIKAN KEAGAMAAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup satuan pendidikan keagamaan lainnya selain pendidikan keagamaan Islam (lihat 85451) yang diselenggarakan pada jalur pendidikan nonformal secara berjenjang maupun tidak berjenjang.",
          
        },
        {
          "number": "85491",
          "name": "JASA PENDIDIKAN MANAJEMEN DAN PERBANKAN",
          "description": "Kelompok ini mencakup kegiatan pendidikan manajemen dan perbankan yang diselenggarakan swasta. Kegiatan yang termasuk dalam kegiatan ini adalah jasa pendidikan atau kursus administrasi bisnis, administrasi perkantoran, administrasi kesehatan, administrasi, administrasi niaga, akuntansi, akuntansi bisnis, akuntansi perbankan, akuntansi perkantoran, akuntansi perpajakan, akuntansi perusahaan, asuransi, ekspor impor, kepabeanan dan cukai, kewirausahaan, manajemen, manajemen administrasi, manajemen bisnis, manajemen informatika, manajemen kesehatan, manajemen keuangan, manajemen keuangan dan perpajakan, manajemen pariwisata, manajemen pelatihan, manajemen pemasaran\\/perdagangan, manajemen perbankan, perkantoran, manajemen perusahaan, properti, manajemen terapan, mengetik, pemasaran\\/marketing, pemasaran busana, pengamanan\\/sekuriti, perbankan dan pasar modal, perkantoran, perpajakan, polibisnis, pramurukti, pramusiwi, pramuwisma, sales manajemen, sekretaris, tata kota, wira niaga dan lain-lain.",
          
        },
        {
          "number": "85492",
          "name": "JASA PENDIDIKAN KOMPUTER (TEKNOLOGI INFORMASI DAN KOMUNIKASI) SWASTA",
          "description": "Kelompok ini mencakup kegiatan pendidikan yang bersifat kursus dengan tujuan untuk menambah ketrampilan\\/keahlian dalam bidang komputer dan teknologi informasi dan komunikasi yang diselenggarakan oleh swasta.",
          
        },
        {
          "number": "85493",
          "name": "PENDIDIKAN BAHASA SWASTA",
          "description": "Kelompok ini mencakup kegiatan pendidikan yang bersifat kursus dengan tujuan untuk menambah keterampilan\\/keahlian dalam bidang bahasa yang diselenggarakan oleh swasta. Kegiatan yang masuk dalam kelompok ini adalah kursus bahasa Arab, Belanda, Indonesia, Inggris, Italia, Jawa, Jepang, Jerman, Korea, Mandarin, Perancis, Rusia, Sakura, Spanyol dan bahasa lainnya. Termasuk juga kursus TOEFL, TOEIC, IELTS dan penerjemah.",
          
        },
        {
          "number": "85494",
          "name": "PENDIDIKAN KESEHATAN SWASTA",
          "description": "Kelompok ini mencakup kegiatan pendidikan yang bersifat kursus dengan tujuan untuk menambah keterampilan\\/keahlian dalam bidang kesehatan yang diselenggarakan oleh swasta. Kegiatan pendidikan atau kursus yang termasuk dalam kelompok ini adalah tata kecantikan, akupuntur modern\\/tradisional, asisten perawat, baby sitter\\/pramubalita, echocardiology, farmasi, jamu tradisional, medical representative, pelatihan alat kesehatan, pengobatan tradisional, perawat kesehatan, PPPK, refleksi, refleksiologi, shinse, spa, tenaga penujang kesehatan, terapi anak autis, terapizona, TKK, TKR, ultrasonografi kedokteran dan lain-lain.",
          
        },
        {
          "number": "85495",
          "name": "PENDIDIKAN BIMBINGAN BELAJAR DAN KONSELING SWASTA",
          "description": "Kelompok ini mencakup pendidikan bimbingan belajar dan konseling yang dilakukan oleh pihak swasta. Kegiatan pendidikan atau kursus yang termasuk dalam kelompok ini adalah bimbingan belajar, bimbingan kesehatan, bimbingan organisasi, etika dan pergaulan; pendidikan konsultan bisnis, konsultan pajak, konsultan psikologi dan pengembangan SDM, megabrain, superbrain, powerbrain, mental aritmatika; pembimbing kelompok bermain, pembimbing prasekolah, pembinaan keluarga, pendidikan anak dan lansia, pengembangan kepribadian, pengembangan metode belajar, pengembangan SDM, peningkatan kreatifitas anak, peningkatan potensi pendidik, PGTK, sempoa, tutor prasekolah.",
          
        },
        {
          "number": "85496",
          "name": "PENDIDIKAN AWAK PESAWAT DAN JASA ANGKUTAN UDARA KHUSUS PENDIDIKAN AWAK PESAWAT",
          "description": "Kelompok ini mencakup jasa pendidikan awak pesawat yang dilakukan oleh swasta. Termasuk usaha pengangkutan khusus awak pesawat dalam rangka pendidikan.",
          
        },
        {
          "number": "96122",
          "name": "AKTIVITAS SPA (SANTE PAR AQUA)",
          "description": "Kelompok ini mencakup usaha wisata berupa pelayanan jasa kesehatan dan perawatan dengan memadukan metode tradisional dan modern secara holistik. Aktivitas ini menggunakan air dan pendukung perawatan lainnya berupa pijat menggunakan ramuan, terapi aroma, latihan fisik, terapi warna, terapi musik, makanan dan minuman. Tujuan aktivitas ini menyeimbangkan antara tubuh (body), pikiran (mind), dan jiwa (soul), sehingga terwujud kondisi relaks dan bugar untuk kesehatan yang optimal. Aktivitas ini juga merupakan upaya mempertahankan tradisi dan budaya bangsa.",
          
        },
        {
          "number": "96129",
          "name": "AKTIVITAS KEBUGARAN LAINNYA",
          "description": "Kelompok ini mencakup usaha jasa pelayanan kebugaran lainnya, yang berkaitan dengan kebugaran jasmani dan kenyamanan, seperti kegiatan mandi turki, mandi sauna, dan steam, solarium (mandi sinar matahari), salon untuk merampingkan tubuh (reducing dan slendering salon), dan fish spa.",
          
        },
        {
          "number": "96200",
          "name": "AKTIVITAS PENATU",
          "description": "Kelompok ini mencakup usaha jasa pelayanan pencucian dan dry cleaning, penatu, pencelupan dan tisi barang-barang tekstil jadi (termasuk berbahan kulit bulu binatang) dan tekstil lainnya untuk keperluan rumah tangga maupun industri perorangan, dilakukan dengan peralatan mekanik, baik yang dioperasikan dengan tangan atau dengan koin, seperti taplak meja, seprei, karpet, termasuk juga pakaian dan barang tekstil jadi. Termasuk kegiatan pencucian (shampooing) carpet, dan rug serta curtain gorden; jasa pengumpulan penatu dan pengirimannya; jasa penyediaan linen, seragam kerja dan barang lain yang terkait oleh penatu; reparasi dan alterasi atau pengubahan kecil dari pakaian atau tekstil lain yang terkait dengan pencucian.",
          
        },
        {
          "number": "96910",
          "name": "AKTIVITAS PEMAKAMAN DAN KEGIATAN YBDI",
          "description": "Kelompok ini mencakup usaha jasa pemakaman dan kegiatan ybdi, seperti penggalian kubur, penyediaan mobil jenazah, pemakaman dan pembakaran mayat manusia atau hewan dan kegiatan yang terkait, seperti jasa penyiapan jenasah untuk pemakaman atau pengabuan (kremasi) dan pembalsaman dan pemakaman, penyediaan jasa pemakaman atau kremasi dan penyewaan ruang dalam lahan pekuburan, penyewaan atau penjualan kuburan dan perawatan kuburan dan hal-hal yang menyangkut proses pemakaman untuk melayani masyarakat.",
          
        },
        {
          "number": "96990",
          "name": "AKTIVITAS JASA PERORANGAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup usaha jasa perorangan lainnya ytdl, seperti tukang semir sepatu, tukang pijat, tukang ramal, penunjuk jalan yang dilakukan atas dasar balas jasa, konsultasi pernikahan. Termasuk kegiatan astrologi dan spiritual; jasa pendamping, layanan kencan, jasa dari biro pernikahan; jasa pemeliharaan hewan peliharaan seperti perawatan, pengasuhan dan pelatihan hewan peliharaan baik dengan akomodasi atau tidak; organisasi keturunan atau kesilsilahan; kuli\\/buruh angkut barang, juru parkir mobil dan lain-lain; operasional konsensi dari mesin yang dioperasikan dengan koin (kamar foto, mesin timbang, mesin untuk pemeriksaan tekanan darah, loker yang dioperasikan dengan koin); kegiatan pengelolaan WC umum; jasa pengupasan kulit udang, jasa pengupasan kulit kepiting\\/rajungan, jasa penyiangan paha kodok (yang usahanya berdiri sendiri dan tidak bergantung pada usaha industrinya).",
          
        },
        {
          "number": "97000",
          "name": "AKTIVITAS RUMAH TANGGA SEBAGAI PEMBERI KERJA DARI PERSONIL DOMESTIK",
          "description": "Kelompok ini mencakup kegiatan rumah tangga sebagai pemberi kerja yang mempekerjakan personil rumah tangga, seperti asisten rumah tangga, juru masak, tukang cuci, tukang kebun, pengurus rumah tangga, pengasuh bayi, guru privat yang mengajar di rumah, sekretaris pribadi dan sopir pribadi.",
          
        },
        {
          "number": "98100",
          "name": "AKTIVITAS YANG MENGHASILKAN BARANG OLEH RUMAH TANGGA YANG DIGUNAKAN UNTUK MEMENUHI KEBUTUHAN SENDIRI",
          "description": "Kelompok ini mencakup kegiatan menghasilkan barang pokok rumah tangga yang sejenis, dengan kata lain kegiatan rumah tangga tersebut digunakan dalam berbagai macam kegiatan yang menghasilkan barang untuk kebutuhan mereka sendiri. Kegiatan ini mencakup perburuan dan pengumpulan, pertanian, pengadaan tempat berlindung dan pakaian dan barang lain yang diproduksi oleh rumah tangga untuk kebutuhannya. Dalam praktiknya, jika rumah tangga juga diikutsertakan dalam produksi barang yang dipasarkan, maka digolongkan ke dalam industri penghasil barang yang sesuai dengan KBLI. Jika utamanya digunakan dalam kegiatan produksi barang pokok khusus, maka diklasifikasikan ke dalam industri produksi barang yang sesuai dari KBLI.",
          
        },
        {
          "number": "98200",
          "name": "AKTIVITAS YANG MENGHASILKAN JASA OLEH RUMAH TANGGA YANG DIGUNAKAN UNTUK MEMENUHI KEBUTUHAN SENDIRI",
          "description": "Kelompok ini mencakup kegiatan rumah tangga dalam menghasilkan jasa pokok, seperti memasak, mengajar atau mendidik, merawat atau menjaga anggota rumah tangga dan jasa lain yang dihasilkan oleh rumah tangga untuk kebutuhannya sendiri. Dalam praktiknya, jika rumah tangga tersebut juga terkait dalam memproduksi berbagai macam jasa untuk memenuhi kebutuhan sendiri, maka diklasifikasikan dalam kegiatan rumah tangga yang menghasilkan jasa untuk memenuhi kebutuhan sendiri.",
          
        },
        {
          "number": "99000",
          "name": "AKTIVITAS BADAN INTERNASIONAL DAN BADAN EKSTRA INTERNASIONAL LAINNYA",
          "description": "Kelompok ini mencakup kegiatan lembaga/badan/instansi dari perwakilan negara asing, badan internasional dan regional lainnya, badan keuangan dan moneter internasional, bank dunia, organisasi bea cukai dunia, organisasi untuk kerjasama dan pengembangan ekonomi, organisasi negara-negara pengekspor minyak, perhimpunan negara-negara Eropa, perhimpunanperdagangan bebas negara-negara Eropa dan lain-lain, seperti perwakilan PBB dan suborganisasi, UNICEF, UNESCO, UNDP, WHO, ILO, ASEAN, IMF, OECD dan OPEC dan lain-lain serta kedutaan besar, dan konsulat yang ditentukan oleh negara dimana berada daripada negara yang diwakilinya.",
          
        },
        {
          "number": "93126",
          "name": "KLUB BELA DIRI",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub bela diri profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93127",
          "name": "KLUB KEBUGARAN\\/FITNESS DAN BINARAGA",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub kebugaran\\/fitness profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93128",
          "name": "KLUB BOWLING",
          "description": "Kelompok ini mencakup usaha organisasi\\/klub bowling profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.",
          
        },
        {
          "number": "93129",
          "name": "KLUB OLAHRAGA LAINNYA",
          "description": "Kelompok ini mencakup kegiatan klub olahraga profesional, semi profesional atau amatir yang memberikan anggotanya kesempatan untuk ikut dalam kegiatan olahraga, baik yang menyediakan tempat dan fasilitas untuk olahraga atau tidak.selain klub olahraga yang tercakup pada kelompok 93121 s.d. 93128.",
          
        },
        {
          "number": "93191",
          "name": "PROMOTOR KEGIATAN OLAHRAGA",
          "description": "Kelompok ini mencakup kegiatan pengurusan dan penyelenggaraan pertunjukan hiburan baik yang berupa mendatangkan, mengirim maupun mengembalikan serta menentukan tempat, waktu dan jenis hiburan. Kegiatan usaha jasa impresariat pada kelompok ini khusus bidang olah raga.",
          
        },
        {
          "number": "93192",
          "name": "OLAHRAGAWAN, JURI DAN WASIT PROFESIONAL",
          "description": "Kelompok ini mencakup kegiatan olahragawan, juri dan wasit profesional yang bertindak atas nama perorangan.",
          
        },
        {
          "number": "93193",
          "name": "AKTIVITAS PERBURUAN",
          "description": "Kelompok ini mencakup kegiatan untuk menyelenggarakan usaha atau operasional olahraga berburu di blok pemanfaatan, cagar alam dan suaka margasatwa.",
          
        },
        {
          "number": "93194",
          "name": "BADAN REGULASI DAN LIGA OLAHRAGA",
          "description": "Kelompok ini mencakup kegiatan badan regulasi dan liga olahraga yang menyediakan peraturan pertandingan dan pertandingan berkala untuk sejumlah orang atau kelompok orang atau kelab yang berkompetisi dalam suatu olahraga.",
          
        },
        {
          "number": "93195",
          "name": "AKTIVITAS OLAHRAGA TRADISIONAL",
          "description": "Kelompok ini mencakup semua usaha pengurusan, penyelenggaraan serta regulasi yang berkaitan dengan olahraga tradisional untuk mempertahankan nilai tradisi dan budaya baik secara perseorangan atau kelompok, seperti pencak silat, lompat batu dari nias, pasola sumba, debus,dan silek minang.",
          
        },
        {
          "number": "93199",
          "name": "AKTIVITAS LAINNYA YANG BERKAITAN DENGAN OLAHRAGA",
          "description": "Kelompok ini mencakup kegiatan lain yang berkaitan dengan olahraga yang tidak diklasifikasikan pada kelompok 93191 s.d. 93195, seperti kegiatan yang berkaitan dengan promosi kegiatan olahraga, kegiatan kandang kuda pacu, kandang anjing pacu dan sejenisnya dan kegiatan penunjang untuk olahraga atau kegiatan memancing dan berburu sebagai sebuah rekreasi.",
          
        },
        {
          "number": "93211",
          "name": "TAMAN REKREASI",
          "description": "Kelompok ini mencakup kegiatan pengoperasian berbagai macam atraksi seperti permainan menggunakan mekanik, permainan menggunakan air, menyewakan alat\\/fasilitas yang berkaitan rekreasi, pertunjukan, parade, pameran dengan tema tertentu dan lapangan piknik, pengoperasian transportasi di dalam taman rekreasi, hingga penyediaan aktivitas di taman atau pantai. Usaha taman rekreasi mengandung unsur hiburan dan dapat memiliki unsur edukasi. Pengoperasian usaha ini dapat dilengkapi dengan penyediaan jasa pelayanan makanan dan minuman, cendera mata, akomodasi.",
          
        },
        {
          "number": "93219",
          "name": "AKTIVITAS TAMAN BERTEMA ATAU TAMAN HIBURAN LAINNYA",
          "description": "Kelompok ini mencakup usaha pengoperasian taman rekreasi, termasuk taman bertema atau taman hiburan dan pasar malam hiburan rakyat, yang dilakukan di dalam ataupun di luar ruangan selain yang tercakup pada kelompok 93211.",
          
        },
        {
          "number": "93221",
          "name": "PEMANDIAN ALAM",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk mandi dengan memanfaatkan air panas dan atau air terjun sebagai usaha pokok dan dapat dilengkapi dengan penyediaan jasa pelayanan makan dan minum serta akomodasi. Misalnya Pemandian Alam Ciater (Jawa Barat), Pemandian Alam Umbul Ponggok Klaten (Jawa Tengah) dan Pemandian Alam Soa (Bajawa-NTT)",
          
        },
        {
          "number": "93222",
          "name": "WISATA GUA",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan untuk mengadakan kegiatan petualangan dan penelusuran gua sebagai usaha pokok di suatu kawasan tertentu dan dapat dilengkapi dengan penyediaan berbagai jenis pemandu, pelayanan makan dan minum serta akomodasi.",
          
        },
        {
          "number": "93223",
          "name": "WISATA PETUALANGAN ALAM",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan aktivitas pariwisata yang melibatkan eksplorasi atau perjalanan yang mengandung resiko dan membutuhkan ketrampilan khusus dan pengerahan tenaga fisik, seperti paralayang, paramotor, layang gantung, bungee jumping, terbang layang, canyoning, orienteering, offroad, dan mountain biking",
          
        },
        {
          "number": "93224",
          "name": "WISATA PANTAI",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk menikmati keindahan alam dengan menggunakan pantai sebagai usaha pokok dan dapat dilengkapi dengan penyediaan pelayanan makan dan minum serta akomodasi. Misalnya Pantai Parangtritis (Jogjakarta), Pantai Pandawa (Bali), Pantai Mandeh (Sumatera Barat).",
          
        },
        {
          "number": "93229",
          "name": "DAYA TARIK WISATA ALAM LAINNYA",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan untuk mengadakan kegiatan daya tarik wisata alam yang belum dicakup pada kelompok 93221 s.d. 93224.",
          
        },
        {
          "number": "93231",
          "name": "WISATA AGRO",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan daya tarik wisata dengan memanfaatkan kawasan pertanian yang meliputi tanaman pangan dan holtikultura, perkebunan, perikanan dan peternakan sebagai usaha pokok dan dapat dilengkapi dengan penyediaan berbagai jenis fasilitas termasuk jasa pelayanan makan dan minum serta akomodasi. Jenis-jenis kegiatannya meliputi produksi, koleksi, konservasi, pengolahan, dan kegiatan budaya masyarakatnya, seperti Taman Buah Mekarsari (Jawa Barat), Wisata Kebun Salak Sleman (Jogjakarta), dan Wisata Kebun Apel Batu (Malang, Jawa Timur) serta Coffeenery dan Winery.",
          
        },
        {
          "number": "93232",
          "name": "TAMAN REKREASI\\/TAMAN WISATA",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan berbagai jenis fasilitas untuk memberikan kesegaran jasmani dan rohani yang mengandung unsur hiburan, pendidikan dan kebudayaan sebagai usaha pokok disuatu kawasan tertentu (termasuk pantai) dan dapat dilengkapi dengan penyediaan jasa pelayanan makan dan minum serta akomodasi.",
          
        },
        {
          "number": "93233",
          "name": "KOLAM PEMANCINGAN",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk memancing ikan sebagai usaha pokok dan dapat dilengkapi dengan penyediaan jasa pelayanan makan dan minum.",
          
        },
        {
          "number": "93239",
          "name": "DAYA TARIK WISATA BUATAN\\/BINAAN MANUSIA LAINNYA",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan untuk mengadakan kegiatan daya tarik wisata buatan\\/binaan manusia yang belum dicakup pada kelompok 93231 s.d. 93233. Termasuk wisata outbond.",
          
        },
        {
          "number": "93241",
          "name": "ARUNG JERAM",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan dengan pemanfaatan sungai-sungai arus deras untuk mengadakan kegiatan arung jeram sebagai usaha pokok di kawasan tertentu. Misalnya Arung Jeram Sobek Bali, Arung Jeram Arus Liar Citarik. Termasuk rafting tubing, river boarding, canoeing kayaking body rafting experience.",
          
        },
        {
          "number": "93242",
          "name": "WISATA SELAM",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan untuk mengadakan kegiatan selam, menyediakan penjualan dan penyewaan serta perbaikan peralatan selam (equipment), mengorganisasikan perjalanan wisata selam baik skala lokal, nasional dan internasional (experience). Termasuk kegiatan-kegiatan yang terkait dengan tujuan untuk menjaga dan merawat kondisi lingkungan laut dan pesisir (environment), serta kegiatan sejenis lainnya yang mendukung pelestarian lingkungan pada kawasan tertentu sebagai usaha pokok. Termasuk kegiatan snorkeling. free diving, dan sea walker.",
          
        },
        {
          "number": "93243",
          "name": "DERMAGA MARINA",
          "description": "Kelompok ini mencakup suatu usaha penyediaan dan pengelolaan tempat untuk penambatan atau berlabuh kapal pesiar\\/wisata dan atau perahu layar wisata dan pelayanan jasa lain yang berkaitan dengan kegiatan kelautan. Misalnya Marina Ancol, Benoa Marine.",
          
        },
        {
          "number": "93244",
          "name": "KOLAM PEMANCINGAN",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk memancing sebagai usaha pokok dan dapat dilengkapi dengan penyediaan jasa pelayanan makan dan minum.",
          
        },
        {
          "number": "93245",
          "name": "WISATA MEMANCING",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan dan penyediaan jasa pemandu wisata memancing (recreational fishing guide) untuk mengadakan kegiatan memancing, baik untuk kesenangan dan rekreasi serta perlombaan yang dilakukan di air tawar (fresh water fishing) seperti di sungai, muara, danau, pantai, perairan kepulauan, dan kegiatan memancing di air asin (salt water fishing) seperti di laut lepas untuk tujuan wisata pada kawasan tertentu sebagai usaha pokok. Termasuk olahraga memancing (sport fishing).",
          
        },
        {
          "number": "93246",
          "name": "AKTIVITAS WISATA AIR",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan untuk mengadakan berbagai aktivitas wisata air seperti selancar angin, paralayar (parasailing) dan motor air (jet ski), perahu motor (motor boating) pelayaran (sailing), selancar ombak (surfing), rakit (rafting), kano (canoeing), kayak (kayaking), perahu tradisional\\/naga (traditional\\/dragon boat race), berpetualang dengan perahu\\/kapal (boating adventures), pelatihan petualangan berlayar (sail training adventures), kapal selam wisata (submarine experience) dan flying board sebagai usaha pokok di suatu kawasan tertentu dan dapat dilengkapi dengan penyediaan berbagai jenis fasilitas termasuk jasa pelayanan makan dan minum serta akomodasi dan berbagai fasilitas pendukung lainnya.",
          
        },
        {
          "number": "93249",
          "name": "WISATA TIRTA LAINNYA",
          "description": "Kelompok ini mencakup suatu usaha pengelolaan untuk mengadakan wisata tirta lainnya yang belum tercakup di kelompok 93241 s.d. 93246 seperti wisata rekreasi tematik bawah laut sebagai usaha pokok di suatu kawasan tertentu dan dapat dilengkapi dengan penyediaan berbagai jenis fasilitas termasuk jasa pelayanan makan dan minum serta akomodasi.",
          
        },
        {
          "number": "93291",
          "name": "KLUB MALAM",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk menari dengan diiringi musik, atraksi pertunjukan lampu dan menyediakan jasa pelayanan makanan dan minuman.",
          
        },
        {
          "number": "93292",
          "name": "KARAOKE",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk karaoke sebagai usaha pokok dan dapat dilengkapi dengan penyediaan jasa pelayanan makanan dan minuman.",
          
        },
        {
          "number": "93293",
          "name": "USAHA ARENA PERMAINAN",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas untuk permainan ketangkasan dan atau mesin permainan dengan koin atau kartu sebagai usaha pokok dan dapat dilengkapi dengan penyediaan jasa pelayanan makan dan minum. Misalnya Timezone, Kidzania.",
          
        },
        {
          "number": "93294",
          "name": "DISKOTEK",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas yang dilengkapi dengan tata cahaya dan suara, untuk mendengarkan musik atau menari mengikuti irama musik, dan menyediakan jasa pelayanan makanan dan minuman.",
          
        },
        {
          "number": "93299",
          "name": "AKTIVITAS HIBURAN DAN REKREASI LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan hiburan dan rekreasi yang tidak tercakup dalam 93291 s.d. 93294, seperti kegiatan operasional bukit ski, penyewaan perlengkapan rekreasi dan hiburan yang merupakan bagian yang tidak terpisahkan dari fasilitas rekreasi, kegiatan operasional pekan raya dan pertunjukan rekreasi alami , dan kegiatan hiburan dan rekreasi lainnya.Termasuk kegiatan produser atau pengusaha pertunjukan langsung selain pertunjukan olahraga atau seni, dengan atau tanpa fasilitas.",
          
        },
        {
          "number": "94110",
          "name": "AKTIVITAS ORGANISASI BISNIS DAN PENGUSAHA",
          "description": "Kelompok ini mencakup kegiatan organisasi pengusaha perdagangan, kegiatan organisasi yang kepentingan anggotanya berpusat pada pengembangan dan kesejahteraan perusahaan dalam bisnis atau perdagangan tertentu, termasuk pertanian atau pertumbuhan ekonomi dan iklim area geografis atau bagian politik tertentu tanpa memperhatikan bidang usaha, kegiatan federasi dari beberapa perkumpulan atau asosiasi, kegiatan kamar dagang dan organisasi sejenisnya, penyebaran informasi, perwakilan di hadapan lembaga pemerintah, hubungan masyarakat dan perundingan ketenagakerjaan dari organisasi bisnis dan pengusaha, seperti Kamar Dagang Indonesia (KADIN), GINSI (Gabungan Importir Nasional Seluruh Indonesia), Asosiasi Pengusaha Indonesia (APINDO), Gabungan Pengusaha Makanan dan Minuman Indonesia (GAPMMI), organisasi pedagang dan organisasi pengusaha lainnya.",
          
        },
        {
          "number": "94121",
          "name": "AKTIVITAS ORGANISASI ILMU PENGETAHUAN SOSIAL DAN MASYARAKAT",
          "description": "Kelompok ini mencakup kegiatan organisasi profesional yang bergerak di bidang ilmu pengetahuan sosial dan masyarakat, seperti Himpunan Insan Pers Seluruh Indonesia (HIPSI), Persatuan Wartawan Indonesia (PWI), Ikatan Dokter Indonesia (IDI), Persatuan Guru Republik Indonesia (PGRI), Ikatan Sarjana Ekonomi Indonesia (ISEI), Ikatan Sekretaris Indonesia (ISI) dan Ikatan Bidan Indonesia (IBI).",
          
        },
        {
          "number": "94122",
          "name": "AKTIVITAS ORGANISASI ILMU PENGETAHUAN ALAM DAN TEKNOLOGI",
          "description": "Kelompok ini mencakup kegiatan organisasi profesional yang bergerak di bidang ilmu pengetahuan alam dan teknologi, seperti Perhimpunan Insinyur Indonesia (PII) dan Ikatan Surveyor Indonesia (ISI).",
          
        },
        {
          "number": "94200",
          "name": "AKTIVITAS ORGANISASI BURUH",
          "description": "Kelompok ini mencakup kegiatan organisasi yang bergerak dalam bidang ketenagakerjaan, dalam memperjuangkan kepentingan baik organisasi buruh atau anggotanya, seperti Serikat Pekerja Seluruh Indonesia (SPSI), Sentral Organisasi Karya Swadiri Indonesia (SOKSI) dan Korps Pegawai Republik Indonesia (KORPRI).",
          
        },
        {
          "number": "94910",
          "name": "AKTIVITAS ORGANISASI KEAGAMAAN",
          "description": "Kelompok ini mencakup kegiatan organisasi keagamaan yang bergerak dalam penyelenggaraan kegiatan agama dan penyebaran agama. Kegiatan yang dicakup meliputi kegiatan organisasi keagamaan atau perorangan yang menyelenggarakan layanan secara langsung untuk jamaah yang beribadah dalam masjid, gereja, kuil atau tempat ibadah lain, kegiatan organisasi yang menyediakan layanan biara, kegiatan keagamaan retreat (pengasingan diri) dan kegiatan agama lainnya.",
          
        },
        {
          "number": "94920",
          "name": "AKTIVITAS ORGANISASI POLITIK",
          "description": "Kelompok ini mencakup kegiatan organisasi yang bergerak dalam bidang politik dan organisasi penunjang seperti organisasi pemuda yang berhubungan dengan partai politik. Organisasi tersebut terutama berkaitan dalam memberikan pengaruh terhadap pengambilan keputusan dalam badan umum pemerintah dengan menempatkan anggota pada partai atau yang bersimpatik terhadap partai tersebut dalam badan politik dan menyangkut penyebaran informasi, hubungan masyarakat, pengumpulan uang dan lain-lain.",
          
        },
        {
          "number": "94990",
          "name": "AKTIVITAS ORGANISASI KEANGGOTAAN LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan organisasi keanggotaan lainnya ytdl yang bergerak di bidang sosial dan kemasyarakatan, seperti Lembaga Swadaya Masyarakat (LSM), Komite Nasional Pemuda Indonesia (KNPI), KOWANI, kegiatan pergerakan protes atau inisiatif warga negara (demo); pergerakan yang berkaitan dengan ekologi dan lingkungan; organisasi yang mendukung fasilitas umum dan fasilitas pendidikan ytdl; organisasi untuk perlindungan dan kemajuan kelompok khusus, perkumpulan veteran perang, asosiasi konsumen, asosiasi automobil, klub rotari, asosiasi pemuda, asosiasi remaja, asosiasi pelajar, klub dan kelompok persaudaraan dan sebagainya, asosiasi untuk pencarian kegiatan kebudayaan atau rekreasi atau hobi (selain olahraga dan permainan). Termasuk kegiatan pemberian bantuan oleh organisasi keanggotaan atau lainnya.",
          
        },
        {
          "number": "95110",
          "name": "REPARASI KOMPUTER DAN PERALATAN SEJENISNYA",
          "description": "Kelompok ini mencakup usaha jasa reparasi dan perawatan komputer dan peralatannya, seperti komputer desktop, laptop, disk drive magnetik, flash drives dan media penyimpanan lain, disk drive optik (CD-RW, CD-ROM, DVD-ROM, DVD-RW), printer, monitor, keyboard, mouse, joysticks dan trackball, modem komputer internal dan eksternal, terminal komputer, server komputer, scanner termasuk scanner bar code, pembaca smart card, virtual reality helmet dan proyektor komputer. Termasuk jasa reparasi dan perawatan terminal komputer seperti automatic teller machine (ATM), terminal point of sale (POS), yang tidak dioperasikan secara mekanik dan komputer genggam (PDA).",
          
        },
        {
          "number": "95120",
          "name": "REPARASI PERALATAN KOMUNIKASI",
          "description": "Kelompok ini mencakup usaha khusus reparasi dan perawatan peralatan komunikasi, seperti reparasi perangkat telekomunikasi tanpa kabel (telepon seluler, RFID, komputer tablet, komputer genggam, modem nirkabel, alat pelacak kendaraan); reparasi perangkat telekomunikasi kabel (mesin FAX, pesawat telepon analog, ADSL\\/HDSL, PABX, modem, router, bridges); reparasi peralatan transmisi berbasis kabel (sentral telepon analog); reparasi perangkat transmisi radio (microwave link, Studio To Transmitter Link\\/STL, Trans Horizon Link\\/Troposcatter); reparasi radio dua arah (komunikasi radio trunking, komunikasi radio konvensional, walky talky); dan reparasi perangkat pengirim dan\\/atau penerima radio\\/transceiver (perangkat pemancar TV siaran, pesawat TV\\/smart TV, radio siaran, perangkat pemancar dan penerima jaringan bergerak seluler, dan kamera video).",
          
        },
        {
          "number": "95210",
          "name": "REPARASI ALAT-ALAT ELEKTRONIK KONSUMEN",
          "description": "Kelompok ini mencakup usaha khusus jasa reparasi dan perawatan alat elektronik konsumen, seperti televisi dan radio penerima (termasuk pemasangan antena),, perekam kaset video (VCR), CD player dan kamera video jenis untuk pengguna rumah tangga.",
          
        },
        {
          "number": "95220",
          "name": "REPARASI PERALATAN RUMAH TANGGA DAN PERALATAN RUMAH DAN KEBUN",
          "description": "Kelompok ini mencakup usaha khusus jasa reparasi dan perawatan peralatan rumah tangga, seperti kulkas, kompor, mesin cuci, pengering pakaian, pendingin ruangan (AC), seterika listrik, alat penghisap debu dan berbagai barang\\/perabot listrik lainnya untuk keperluan rumah tangga. Termasuk jasa reparasi dan perawatan peralatan rumah dan kebun, seperti mesin pemotong rumput, edger, penyapu salju dan daun, trimmer dan sebagainya.",
          
        },
        {
          "number": "95230",
          "name": "REPARASI ALAS KAKI DAN BARANG DARI KULIT",
          "description": "Kelompok ini mencakup usaha khusus jasa reparasi alas kaki dan barang dari kulit, seperti sepatu, sepatu boot, sandal, koper, tas dan sebagainya. Termasuk jasa pemasangan tumit sepatu.",
          
        },
        {
          "number": "95240",
          "name": "REPARASI FURNITUR DAN PERLENGKAPAN RUMAH",
          "description": "Kelompok ini mencakup usaha khusus jasa reparasi furnitur dan perlengkapan rumah, seperti pelapisan, penyelesaian, reparasi dan pemulihan kembali perabot dan perlengkapan rumah termasuk perabot kantor dan perakitan perabotan self-standing.",
          
        },
        {
          "number": "95291",
          "name": "AKTIVITAS VERMAK PAKAIAN",
          "description": "Kelompok ini mencakup usaha vermak pakaian, yang melayani masyarakat umum dengan tujuan komersil.",
          
        },
        {
          "number": "95299",
          "name": "REPARASI BARANG RUMAH TANGGA DAN PRIBADI LAINNYA",
          "description": "Kelompok ini mencakup usaha khusus jasa reparasi barang rumah tangga dan pribadi lainnya tidak diklasifikasikan di tempat lain, seperti sepeda, perhiasan, jam tangan, jam dinding dan bagian-bagiannya, alat olahraga (kecuali senapan untuk olahraga), buku, alat musik, mainan dan barang sejenisnya, barang pribadi dan rumah tangga lainnya. Termasuk setem piano dan duplikasi kunci.",
          
        },
        {
          "number": "96111",
          "name": "AKTIVITAS PANGKAS RAMBUT",
          "description": "Kelompok ini mencakup usaha jasa pemangkas dan perawatan rambut yang melayani masyarakat umum, termasuk juga pemangkas kumis, jambang maupun jenggot, yang biasanya dilakukan oleh perorangan. Umumnya untuk kaum pria, seperti barber shop.",
          
        },
        {
          "number": "96112",
          "name": "AKTIVITAS SALON KECANTIKAN",
          "description": "Kelompok ini mencakup usaha jasa pemeliharaan rambut dan perawatan kecantikan, seperti perawatan muka dan kulit muka, pijat muka, make-up, manikur, pedikur, pencucian, perapian dan pemotongan, penataan, pencelupan, pewarnaan, pengeritingan, pelurusan dan kegiatan serupa untuk rambut pria dan wanita dan jasa salon sejenisnya.",
          
        },
        {
          "number": "96121",
          "name": "RUMAH PIJAT",
          "description": "Kelompok ini mencakup suatu usaha yang menyediakan tempat dan fasilitas pelayanan pijat tradisional Indonesia, pijat refleksi, pijat siatsu,pijat tuina, dan pijat thailand yang nyaman, aman dan bermanfaat. Menjunjung tinggi etika profesi dan tersedianya makanan dan minuman.",
          
        },
        {
          "number": "61200",
          "name": "AKTIVITAS TELEKOMUNIKASI TANPA KABEL",
          "description": "Kelompok ini mencakup kegiatan penyelenggaraan jaringan yang melayani telekomunikasi bergerak dengan teknologi seluler di permukaan bumi. Kegiatannya mencakup pengoperasian, pemeliharaan atau penyediaan akses pada fasilitas untuk mentranmisikan suara, data, teks, bunyi dan video menggunakan infrastruktur komunikasi tanpa kabel dan pemeliharaan dan pengoperasian nomor panggil (paging), seperti halnya jaringan telekomunikasi selular dan telekomunikasi tanpa kabel lainnya. Fasilitas transmisi menyediakan transmisi omni-directional melalui gelombang udara yang dapat berdasarkan teknologi tunggal atau kombinasi beberapa teknologi. Termasuk pembelian akses dan kapasitas jaringan dari pemilik dan operator jaringan serta menyediakan jasa jaringan tanpa kabel (kecuali satelit) untuk kegiatan bisnis dan rumah tangga dan penyediaan akses internet melalui operator infrastruktur jaringan tanpa kabel.",
          
        },
        {
          "number": "68111",
          "name": "REAL ESTAT YANG DIMILIKI SENDIRI ATAU DUSEWA",
          "description": "Kelompok ini mencakup usaha pembelian, penjualan, persewaan dan pengoperasian real estat baik yang dimiliki sendiri maupun disewa, seperti bangunan apartemen, bangunan hunian dan bangunan non hunian (seperti fasilitas penyimpanan\\/gudang, mall, pusat perbelanjaan dan lainnya) serta penyediaan rumah dan flat atau apartemen dengan atau tanpa perabotan untuk digunakan secara permanen, baik dalam bulanan atau tahunan. Termasuk kegiatan penjualan tanah, pengembangan gedung untuk dioperasikan sendiri (untuk penyewaan ruang-ruang di gedung tersebut), pembagian real estat menjadi tanah kapling tanpa pengembangan lahan dan pengoperasian kawasan hunian untuk rumah yang bisa dipindah- pindah.",
          
        },
        {
          "number": "46512",
          "name": "PERDAGANGAN BESAR PIRANTI LUNAK",
          "description": "Kelompok in mencakup usaha perdagangan besar piranti lunak.",
          
        },
        {
          "number": "60202",
          "name": "AKTIVITAS PENYIARAN DAN PEMROGRAMAN TELEVISI OLEH SWASTA",
          "description": "Kelompok in mencakup kegiatan dalam usaha penyelenggaraan siaran televisi yang dikelola oleh swasta, termasuk juga station relay (pemancar kembali) siaran televisi, seperti pembuatan program saluran televisi lengkap dari komponen program yang dibeli (seperti film, dokumenter dan lain-lain), komponen program yang dihasilkan sendiri (seperti berita lokal, laporan langsung) atau kombinasi keduanya); pemrograman dari saluran video atas dasar permintaan; dan penyiaran data yang diintegrasikan dengan siaran televisi. Program televisi lengkap dapat disiarkan sendiri atau melalui distribusi pihak ketiga, seperti perusahaan kabel atau provider televisi satelit. Pemograman dapat bersifat umum atau khusus (misalnya format terbatas seperti program berita, olahraga, pendidikan atau program yang ditujukan untuk anak muda), dapat dibuat dengan bebas tersedia untuk pemakai atau dapat hanya tersedia atas dasar langganan. Kegiatan pemancaran radio dan televisi secara langsung atau pemancaran ulang yang didasarkan atas dasar balas jasa (fee) dan kontrak dimasukkan dalam kelompok 61933",
          
        },
        {
          "number": "82990",
          "name": "AKTIVITAS JASA PENUNJANG USAHA LAINNYA YTDL",
          "description": "Kelompok ini mencakup kegiatan penyedia jasa penunjang usaha lainnya yang tidak dapat diklasifikasikan di tempat lain, seperti jasa laporan pengadilan dan catatan stenotype dan jasa stenografi untuk umum, jasa siaran langsung televisi untuk acara rapat dan konferensi, jasa pengalamatan bar code, jasa pencetakan bar code, jasa organisasi pengumpulan dana atas dasar balas jasa atau kontrak, jasa sortir surat, jasa penyimpanan, jasa pungutan parkir yang menggunakan meter coin, kegiatan pelelangan independen, administrasi program loyalitas, dan kegiatan penunjang lain yang disediakan untuk usaha yang tidak diklasifikasikan di tempat lain. Termasuk kegiatan pusat registrasi sistem resi gudang.",
          
        },
        {
          "number": "86102",
          "name": "AKTIVITAS PUSKESMAS",
          "description": "Kelompok ini merupakan kegiatan pelayanan kesehatan yang mencakup upaya kesehatan masyarakat dan upaya kesehatan perseorangan tingkat pertama dengan lebih mengutamakan upaya promotif dan preventif di wilayah kerjanya. Puskesmas nonrawat inap dapat menyelenggarakan pelayanan rawat jalan, perawatan di rumah (home care), dan pelayanan gawat darurat serta dapat menyelenggarakan rawat inap pada pelayanan persalinan normal. Puskesmas rawat inap (dengan tempat tidur) menyelenggarakan tambahan pelayanan",
          
        }
    ];

    const repo = dataSource.getRepository(IndustryClassification);


    for (const obj of arr) {
        await repo.save(
            repo.create({
                name : obj.name,
                number: obj.number,
                description: obj.description
            })
        )
    }

    console.log('✅ Industry Classification seeded');
}