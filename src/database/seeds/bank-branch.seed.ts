import { BankBranch } from "@modules/master/bank-branch/entities/bank-branch.entity";
import { Bank } from "@modules/master/bank/entities/bank.entity";
import { DataSource } from "typeorm";

export async function seedBankBranch(dataSource: DataSource) {

    const arr: Record<string, Record<string, string>[]> = {
        "PT Bank Mayapada Tbk": [
            {
                "code": "970017",
                "name": "PT Bank Mayapada Tbk",
                "address": "Jl Jen Sudirman Kav 28, Jakarta"
            }
        ],
        "PT Bank Maybank Syariah Indonesia": [
            {
                "code": "9470302",
                "name": "PT Bank Maybank Syariah Indonesia",
                "address": "Sona Topas Tower Lt.17 Jl."
            }
        ],
        "PT Bank Mayora": [
            {
                "code": "5530012",
                "name": "PT Bank Mayora",
                "address": "Jl. Tomang Raya 21-23 Jakarta Barat"
            }
        ],
        "PT Bank Mega Syariah": [
            {
                "code": "5060016",
                "name": "PT Bank Mega Syariah",
                "address": "Wisma Tugu II Jl. Hr Rasuna Said"
            }
        ],
        "PT Bank Mega Tbk": [
            {
                "code": "4260121",
                "name": "PT Bank Mega Tbk",
                "address": "Sampoerna Strtgc Twr"
            }
        ],
        "PT Bank Mestika Dharma": [
            {
                "code": "1510010",
                "name": "PT Bank Mestika Dharma",
                "address": "Jl. H. Zainul Arifin No. 118"
            }
        ],
        "PT Bank Mitraniaga": [
            {
                "code": "4910015",
                "name": "PT Bank Mitraniaga",
                "address": "Jl. Letjen S.Parman Kav.77, Slipi"
            }
        ],
        "PT Bank Mizuho Indonesia": [
            {
                "code": "480303",
                "name": "PT Bank Mizuho Indonesia",
                "address": "Plaza BII Menara II Lantai 24 Jl."
            }
        ],
        "PT Bank MNC Internasional Tbk": [
            {
                "code": "4850010",
                "name": "PT Bank MNC Internasional Tbk",
                "address": "Jl. Jend Sudirman Kav. 75 Jakarta"
            }
        ],
        "PT Bank Muamalat Indonesia": [
            {
                "code": "1470011",
                "name": "PT Bank Muamalat Indonesia",
                "address": "Jl. Jend. Sudirman Kav.2 Gedung"
            }
        ],
        "PT Bank Multiarta Sentosa": [
            {
                "code": "5480010",
                "name": "PT Bank Multiarta Sentosa",
                "address": "Jl. Suryopranoto 24A Jakarta"
            }
        ],
        "PT Bank Nationalnobu": [
            {
                "code": "5030017",
                "name": "PT Bank Nationalnobu",
                "address": "Jl. K.H. Moh. Mansyur No.34"
            }
        ],
        "PT Bank Negara Indonesia (Persero) Tbk": [
            {
                "code": "90010",
                "name": "PT Bank Negara Indonesia (Persero) Tbk",
                "address": "Jl. Jend. Sudirman Kav.1 Jakarta"
            }
        ],
        "PT Bank OCBC NISP Tbk Unit Usaha Syariah": [
            {
                "code": "289928",
                "name": "PT Bank OCBC NISP Tbk Unit Usaha Syariah",
                "address": "Jl.Prof.Dr.Satrio Kav.25 Jakarta"
            }
        ],
        "PT Bank of India Indonesia Tbk": [
            {
                "code": "1460047",
                "name": "PT Bank of India Indonesia Tbk",
                "address": "Jl. H.Samanhudi No. 37, Jakarta"
            }
        ],
        "PT Bank Oke Indonesia": [
            {
                "code": "5260010",
                "name": "PT Bank Oke Indonesia",
                "address": "Jl. Ir. H. Juanda No.12 Jak - Pus"
            }
        ],
        "PT Bank Panin Dubai Syariah": [
            {
                "code": "5170016",
                "name": "PT Bank Panin Dubai Syariah",
                "address": "Jl. Diponegoro No. 145-147,"
            }
        ],
        "PT Bank Pembangunan Daerah Bali": [
            {
                "code": "1290013",
                "name": "PT Bank Pembangunan Daerah Bali",
                "address": "Jl.Raya Puputan Niti Mandala"
            }
        ],
        "PT Bank Pembangunan Daerah Jambi": [
            {
                "code": "1150014",
                "name": "PT Bank Pembangunan Daerah Jambi",
                "address": "Jl.Jend.A.Yani No.18 Telanaipura"
            }
        ],
        "PT Bank Pembangunan Daerah Jambi Unit Usaha Syariah": [
            {
                "code": "1159918",
                "name": "PT Bank Pembangunan Daerah Jambi Unit Usaha Syariah",
                "address": "Jl. Kapten Pattimura No 70-71"
            }
        ],
        "PT Bank Pembangunan Daerah Jawa Barat dan Banten Tbk": [
            {
                "code": "1100323",
                "name": "PT Bank Pembangunan Daerah Jawa Barat dan Banten Tbk",
                "address": "Jl. Jend Sudirman No. 2 Ged"
            }
        ],
        "PT Bank Pembangunan Daerah Jawa Tengah": [
            {
                "code": "1130348",
                "name": "PT Bank Pembangunan Daerah Jawa Tengah",
                "address": "Jl. Pemuda No.142 Semarang"
            }
        ],
        "PT Bank Pembangunan Daerah Jawa Tengah Unit Usaha Syariah": [
            {
                "code": "1139938",
                "name": "PT Bank Pembangunan Daerah Jawa Tengah Unit Usaha Syariah",
                "address": ""
            }
        ],
        "PT Bank Pembangunan Daerah Jawa Timur Tbk": [
            {
                "code": "1140383",
                "name": "PT Bank Pembangunan Daerah Jawa Timur Tbk",
                "address": "Jl.Jen.Sudirman Kav 86"
            }
        ],
        "PT Bank Pembangunan Daerah Jawa Timur Tbk Unit Usaha Syariah": [
            {
                "code": "1149928",
                "name": "PT Bank Pembangunan Daerah Jawa Timur Tbk Unit Usaha Syariah",
                "address": ""
            }
        ],
        "PT Bank Pembangunan Daerah Kalbar": [
            {
                "code": "1230015",
                "name": "PT Bank Pembangunan Daerah Kalbar",
                "address": "Jl.Rahadi Osman No.10 Pontianak"
            }
        ],
        "PT Bank Pembangunan Daerah Kalsel": [
            {
                "code": "1220012",
                "name": "PT Bank Pembangunan Daerah Kalsel",
                "address": "Jl.Lambung Mangkurat No.7"
            }
        ],
        "PT Bank Pembangunan Daerah Kalsel Unit Usaha Syariah": [
            {
                "code": "1229929",
                "name": "PT Bank Pembangunan Daerah Kalsel Unit Usaha Syariah",
                "address": "Jl Hasan Basri No.8 Banjarmasin"
            }
        ],
        "PT Bank Pembangunan Daerah Kaltim Dan Kaltara": [
            {
                "code": "1240018",
                "name": "PT Bank Pembangunan Daerah Kaltim Dan Kaltara",
                "address": "Jl.Jend.Sudirman No.33 Samarinda"
            }
        ],
        "PT Bank Pembangunan Daerah Kaltim Kaltara Unit usaha Syariah": [
            {
                "code": "1249925",
                "name": "PT Bank Pembangunan Daerah Kaltim Kaltara Unit usaha Syariah",
                "address": "Jl.A.Yani II No.31 Samarinda"
            }
        ],
        "PT Bank Pembangunan Daerah Lampung": [
            {
                "code": "1210051",
                "name": "PT Bank Pembangunan Daerah Lampung",
                "address": "Jl.Majapahit No.8 Jakarta"
            }
        ],
        "PT Bank Pembangunan Daerah Maluku Dan Maluku Utara": [
            {
                "code": "1310016",
                "name": "PT Bank Pembangunan Daerah Maluku Dan Maluku Utara",
                "address": "Jl.Raya Pattimura No.9 Ambon"
            }
        ],
        "PT Bank Pembangunan Daerah NTT": [
            {
                "code": "1300013",
                "name": "PT Bank Pembangunan Daerah NTT",
                "address": "Jl.Moh.Hatta No.56 Kupang"
            }
        ],
        "PT Bank Pembangunan Daerah Nusa Tenggarat Barat Syariah": [
            {
                "code": "1280010",
                "name": "PT Bank Pembangunan Daerah Nusa Tenggarat Barat Syariah",
                "address": "Jl.Pejanggik No. 30 Mataram"
            }
        ],
        "PT Bank Pembangunan Daerah Riau Kepri": [
            {
                "code": "1190016",
                "name": "PT Bank Pembangunan Daerah Riau Kepri",
                "address": "Jl.Jend.Sudirman No.377 Pekanbaru"
            }
        ],
        "PT Bank Pembangunan Daerah Sulut": [
            {
                "code": "1270017",
                "name": "PT Bank Pembangunan Daerah Sulut",
                "address": "Jl. M.H. Thamrin No.12 Jakarta"
            }
        ],
        "PT Bank Pembangunan Daerah Sumatera Barat (Nagari)": [
            {
                "code": "1180013",
                "name": "PT Bank Pembangunan Daerah Sumatera Barat (Nagari)",
                "address": "Jl. Pemuda No.21"
            }
        ],
        "PT Bank Pembangunan Daerah Sumatera Barat (Nagari) Syariah": [
            {
                "code": "1189920",
                "name": "PT Bank Pembangunan Daerah Sumatera Barat (Nagari) Syariah",
                "address": "Komp. Bidakara Jl. Gatot Subroto"
            }
        ],
        "PT Bank Pembangunan Daerah Sumut": [
            {
                "code": "1170010",
                "name": "PT Bank Pembangunan Daerah Sumut",
                "address": "Graha Atrium Suite G.04 Jl.Senen"
            }
        ],
        "PT Bank Pembangunan Daerah Sumut Unit Usaha Syariah": [
            {
                "code": "1179927",
                "name": "PT Bank Pembangunan Daerah Sumut Unit Usaha Syariah",
                "address": "Jl.S.Parman Medan"
            }
        ],
        "PT Bank Permata Tbk": [
            {
                "code": "130475",
                "name": "PT Bank Permata Tbk",
                "address": "Jl. Hayam Wuruk No 84-85 Jakarta"
            }
        ],
        "PT Bank Permata Tbk Unit Usaha Syariah": [
            {
                "code": "139926",
                "name": "PT Bank Permata Tbk Unit Usaha Syariah",
                "address": "Jl. Metro Pondok Indah Blok B7 ,"
            }
        ],
        "PT Bank QNB Indonesia Tbk": [
            {
                "code": "1670015",
                "name": "PT Bank QNB Indonesia Tbk",
                "address": "Jl. Hayam Wuruk No. 33, Jakarta"
            }
        ],
        "PT Bank Rabobank International Indonesia": [
            {
                "code": "890016",
                "name": "PT Bank Rabobank International Indonesia",
                "address": "Plaza 89 Lantai 9 Jl. Rasuna Said"
            }
        ],
        "PT Bank Rakyat Indonesia (Persero) Tbk": [
            {
                "code": "20307",
                "name": "PT Bank Rakyat Indonesia (Persero) Tbk",
                "address": "Jl. Jend.Sudirman No.42-43"
            }
        ],
        "PT Bank Rakyat Indonesia Agroniaga Tbk": [
            {
                "code": "4940014",
                "name": "PT Bank Rakyat Indonesia Agroniaga Tbk",
                "address": "Plaza Gri Jl. Hr Rasuna Said Blok"
            }
        ],
        "PT Bank Resona Perdania": [
            {
                "code": "470300",
                "name": "PT Bank Resona Perdania",
                "address": "Jl.Jend.Sudirman Kav.40-41, Jakarta"
            }
        ],
        "PT Bank Royal Indonesia": [
            {
                "code": "5010011",
                "name": "PT Bank Royal Indonesia",
                "address": "Jl. Suryopranoto No. 52"
            }
        ],
        "PT Bank Sahabat Sampoerna": [
            {
                "code": "5230011",
                "name": "PT Bank Sahabat Sampoerna",
                "address": "Wisma Sejahtera, Jl.Let.Jen."
            }
        ],
        "PT Bank SBI Indonesia": [
            {
                "code": "4980016",
                "name": "PT Bank SBI Indonesia",
                "address": "Jl. Pasar Baru Selatan No. 19,"
            }
        ],
        "PT Bank Shinhan Indonesia": [
            {
                "code": "1520013",
                "name": "PT Bank Shinhan Indonesia",
                "address": "Jl. Hayam Wuruk No. 19-20 Jakarta"
            }
        ],
        "PT Bank Sinarmas": [
            {
                "code": "1530016",
                "name": "PT Bank Sinarmas",
                "address": "Plaza BII Tower I, Jl.MH.Thamrin"
            }
        ],
        "PT Bank Sinarmas Unit Usaha Syariah": [
            {
                "code": "1539923",
                "name": "PT Bank Sinarmas Unit Usaha Syariah",
                "address": "Plaza BII Tower I, Jl.MH.Thamrin"
            }
        ],
        "PT Bank Sulselbar": [
            {
                "code": "1260027",
                "name": "PT Bank Sulselbar",
                "address": "Jl.Dr.Ratulangi No.16 Makassar"
            }
        ],
        "PT Bank Sulselbar Unit Usaha Syariah": [
            {
                "code": "1269947",
                "name": "PT Bank Sulselbar Unit Usaha Syariah",
                "address": "Jl.Dr.Ratulangi No.16 Makassar"
            }
        ],
        "PT Bank Syariah Bukopin": [
            {
                "code": "5210031",
                "name": "PT Bank Syariah Bukopin",
                "address": "Jl. Salemba Raya No.55 Jakarta"
            }
        ],
        "PT Bank Tabungan Negara (Persero) Tbk": [
            {
                "code": "2000150",
                "name": "PT Bank Tabungan Negara (Persero) Tbk",
                "address": "Jl.Gajahmada 1 Jakarta"
            }
        ],
        "PT Bank Tabungan Negara (Persero) Unit Usaha Syariah": [
            {
                "code": "2009928",
                "name": "PT Bank Tabungan Negara (Persero) Unit Usaha Syariah",
                "address": "Jl. Gajah Mada No. 1"
            }
        ],
        "PT Bank Tabungan Pensiunan Nasional Syariah": [
            {
                "code": "5470046",
                "name": "PT Bank Tabungan Pensiunan Nasional Syariah",
                "address": "Jl. Veteran No.7 Semarang"
            }
        ],
        "PT Bank Victoria International": [
            {
                "code": "5660018",
                "name": "PT Bank Victoria International",
                "address": "Jl.Jendral Sudirman No.1 Jakarta"
            }
        ],
        "PT Bank Victoria Syariah": [
            {
                "code": "4050072",
                "name": "PT Bank Victoria Syariah",
                "address": "Jl. RS.Fatmawati No.85 A Jakarta"
            }
        ],
        "PT Bank Woori Saudara Indonesia 1906 Tbk": [
            {
                "code": "2120027",
                "name": "PT Bank Woori Saudara Indonesia 1906 Tbk",
                "address": "Jl. Ampera Raya 20 Jakarta"
            }
        ],
        "PT Bank Yudha Bhakti": [
            {
                "code": "4900012",
                "name": "PT Bank Yudha Bhakti",
                "address": "Gd. Primagraha PeRSada Jl. Gd."
            }
        ],
        "PT BPD Banten Tbk": [
            {
                "code": "1370014",
                "name": "PT BPD Banten Tbk",
                "address": "Jl.Tomang Raya No.14"
            }
        ],
        "PT BPD Bengkulu": [
            {
                "code": "1330012",
                "name": "PT BPD Bengkulu",
                "address": "Jl.Basuki Rachmat No.6 Bengkulu"
            }
        ],
        "PT BPD Kalimantan Tengah": [
            {
                "code": "1250011",
                "name": "PT BPD Kalimantan Tengah",
                "address": "Jl. Rta Milono No.12 Palangka Raya"
            }
        ],
        "PT BPD Sulawesi Tengah": [
            {
                "code": "1340015",
                "name": "PT BPD Sulawesi Tengah",
                "address": "Jl.Sultan Hasanuddin No.20 Palu"
            }
        ],
        "PT BPD Sulawesi Tenggara": [
            {
                "code": "1350018",
                "name": "PT BPD Sulawesi Tenggara",
                "address": "Jl.Mayjen Sutoyo No.95 Kendari"
            }
        ],
        "PT BPD Sumsel Dan Babel": [
            {
                "code": "1200016",
                "name": "PT BPD Sumsel Dan Babel",
                "address": "Jl. Panglima Polim Raya Kebayoran"
            }
        ],
        "PT BPD Sumsel Dan Babel Unit Usaha Syariah": [
            {
                "code": "1209923",
                "name": "PT BPD Sumsel Dan Babel Unit Usaha Syariah",
                "address": "Jl.Letkol Iskandar Palembang"
            }
        ],
        "PT Panin Bank Tbk": [
            {
                "code": "190017",
                "name": "PT Panin Bank Tbk",
                "address": "Jl. Jend Sudirman Kav 1, Jakarta"
            }
        ],
        "PT Prima Master Bank": [
            {
                "code": "5200012",
                "name": "PT Prima Master Bank",
                "address": "Jl. Mangga Dua Raya Eka Jiwa 18"
            }
        ],
        "PT. Bank Pembangunan Daerah Kalbar Unit Usaha Syariah": [
            {
                "code": "1239922",
                "name": "PT. Bank Pembangunan Daerah Kalbar Unit Usaha Syariah",
                "address": "Jl Hasan Basri No.8 Banjarmasin"
            }
        ],
        "CITIBANK EUROPE PLC": [
            {
                "code": "CITIIE2X",
                "name": "CITIBANK EUROPE PLC",
                "address": "1 NORTH WALL QUAY"
            }
        ],
        "DEUTSCHE BANK AG": [
            {
                "code": "DEUTINBB",
                "name": "DEUTSCHE BANK AG",
                "address": "Tulsiani Chambers, Nariman Point"
            },
            {
                "code": "DEUTNL2A",
                "name": "DEUTSCHE BANK AG",
                "address": "DE ENTREE 195"
            },
            {
                "code": "DEUTSGSG",
                "name": "DEUTSCHE BANK AG",
                "address": "SOUTH TOWER 17-00 ONE RAFFLES QUAY"
            },
            {
                "code": "DEUTDEFF",
                "name": "DEUTSCHE BANK AG",
                "address": "Taunusanlage 12"
            }
        ],
        "DEUTSCHE BANK AG - B": [
            {
                "code": "DEUTINBBDEL",
                "name": "DEUTSCHE BANK AG",
                "address": "Tolstoy House 15-17 Tolstoy Marg"
            }
        ],
        "STANDARD CHARTERED BANK - B": [
            {
                "code": "SCBLINBB",
                "name": "STANDARD CHARTERED BANK",
                "address": "Floor 2:23-25, Mahatma Gandhi Road"
            }
        ],
        "STANDARD CHARTERED BANK": [
            {
                "code": "SCBLINBBXXX",
                "name": "STANDARD CHARTERED BANK",
                "address": "Bandra Kurla Complex G Block"
            },
            {
                "code": "SCBLLKLX",
                "name": "STANDARD CHARTERED BANK",
                "address": "37 York Street"
            }
        ],
        "STATE BANK OF INDIA": [
            {
                "code": "SBININBB340",
                "name": "STATE BANK OF INDIA",
                "address": "Kolkata (Calcutta)"
            }
        ],
        "INTESA SANPAOLO SPA - B": [
            {
                "code": "BCITITMM",
                "name": "INTESA SANPAOLO SPA",
                "address": "Piazza Della Scala 6"
            }
        ],
        "INTESA SANPAOLO SPA": [
            {
                "code": "BCITITMMXXX",
                "name": "INTESA SANPAOLO SPA",
                "address": "PIAZZA DELLA SCALA 6"
            }
        ],
        "UBI BANCA S.P.A.": [
            {
                "code": "BLOPIT22XXX",
                "name": "UBI BANCA S.P.A.",
                "address": "PIAZZA V. VENETO 8"
            }
        ],
        "JORDAN KUWAIT BANK": [
            {
                "code": "JKBAJOAM",
                "name": "JORDAN KUWAIT BANK",
                "address": "Abdali Commercial Centre:Umaia"
            }
        ],
        "BANK AUDI S.A.L.": [
            {
                "code": "AUDBLBBX",
                "name": "BANK AUDI S.A.L.",
                "address": "Audi Plaza:Omar Daouk Street"
            }
        ],
        "LIECHTENSTEINISCHE LANDESBANK AKTIENGESELLSCHAFT": [
            {
                "code": "LILALI2X",
                "name": "LIECHTENSTEINISCHE LANDESBANK AKTIENGESELLSCHAFT",
                "address": "44, Staedtle"
            }
        ],
        "BANQUE ET CAISSE D EPARGNE DE L ETAT": [
            {
                "code": "BCEELULL",
                "name": "BANQUE ET CAISSE D EPARGNE DE L ETAT",
                "address": "1 Place De Metz"
            }
        ],
        "JPMORGAN BANK LUXEMBOURG S.A.": [
            {
                "code": "CHASLULX",
                "name": "JPMORGAN BANK LUXEMBOURG S.A.",
                "address": "6, Route De Treves"
            }
        ],
        "ATTIJARIWAFA BANK - B": [
            {
                "code": "BCMAMAMC",
                "name": "ATTIJARIWAFA BANK",
                "address": "2 Boulevard Moulay Youssef"
            }
        ],
        "ATTIJARIWAFA BANK": [
            {
                "code": "BCMAMAMCXXX",
                "name": "ATTIJARIWAFA BANK",
                "address": "2 BOULEVARD MOULAY YOUSSEF"
            }
        ],
        "BANQUE MAROCAINE POUR LE COMMERCE ET LINDUSTRIE": [
            {
                "code": "BMCIMAMC",
                "name": "BANQUE MAROCAINE POUR LE COMMERCE ET LINDUSTRIE",
                "address": "Angle Boulevard Youssef"
            }
        ],
        "HSBC LIMITED": [
            {
                "code": "HSBCMOMXXXX",
                "name": "HSBC LIMITED",
                "address": "613 - 639 AVENIDA DA PRAIA GRANDE"
            }
        ],
        "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED": [
            {
                "code": "HSBCMOMX",
                "name": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED",
                "address": "73-75, Rua Da Praia Grande"
            },
            {
                "code": "BBDAHKHX",
                "name": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED",
                "address": "1 QUEEN S ROAD CENTRAL"
            }
        ],
        "BNP PARIBAS NOUVELLE CALEDONIE NOUMEA": [
            {
                "code": "BNPANCNX",
                "name": "BNP PARIBAS NOUVELLE CALEDONIE NOUMEA",
                "address": "37 Avenue Henri Lafleur"
            }
        ],
        "DNB BANK ASA": [
            {
                "code": "DNBANOKKXXX",
                "name": "DNB BANK ASA",
                "address": "DRONNING EUFEMIAS GATE 30"
            }
        ],
        "CITIBANK N.A.": [
            {
                "code": "CITIPKKX",
                "name": "CITIBANK N.A.",
                "address": "Al-Falah"
            },
            {
                "code": "CITITHBX",
                "name": "CITIBANK N.A.",
                "address": "Interchange 21 Building"
            },
            {
                "code": "CITIUS33",
                "name": "CITIBANK N.A.",
                "address": "388 GREENWICH STREET"
            },
            {
                "code": "CITIBDDX",
                "name": "CITIBANK N.A.",
                "address": "Chamber Building:122-124,"
            },
            {
                "code": "CITIGB2L",
                "name": "CITIBANK N.A.",
                "address": "336, The Strand"
            },
            {
                "code": "CITIHKHX",
                "name": "CITIBANK N.A.",
                "address": "CITIBANK TOWER CITIBANK PLAZA:3,"
            }
        ],
        "BANK POLSKA KASA OPIEKI SA - BANK PEKAO SA": [
            {
                "code": "PKOPPLPW",
                "name": "BANK POLSKA KASA OPIEKI SA - BANK PEKAO SA",
                "address": "Grzybowska Street 53-57"
            }
        ],
        "BNP PARIBAS BANK POLSKA S.A.": [
            {
                "code": "PPABPLPK",
                "name": "BNP PARIBAS BANK POLSKA S.A.",
                "address": "Kasprzaka Street 10/16"
            }
        ],
        "BANCO BPI SA": [
            {
                "code": "BBPIPTPL",
                "name": "BANCO BPI SA",
                "address": "SANTA MARIA, PORTUGAL"
            }
        ],
        "BANCO COMERCIAL PORTUGUES": [
            {
                "code": "BCOMPTPL",
                "name": "BANCO COMERCIAL PORTUGUES",
                "address": "Lote 1686: Av. Jose Malhoa"
            }
        ],
        "HSBC BANK MIDDLE EAST LIMITED": [
            {
                "code": "BBMEQAQX",
                "name": "HSBC BANK MIDDLE EAST LIMITED",
                "address": "Umm Ghuwailina: 150 950, Al Matar"
            }
        ],
        "ING BANK N.V., BUCHAREST BRANCH": [
            {
                "code": "INGBROBU",
                "name": "ING BANK N.V., BUCHAREST BRANCH",
                "address": "Ing Building:11-13, Avenue Kiseleff"
            }
        ],
        "BANCA INTESA AD, BEOGRAD - B": [
            {
                "code": "DBDBRSBG",
                "name": "BANCA INTESA AD, BEOGRAD",
                "address": "7B, Milentija Popovica"
            }
        ],
        "BANCA INTESA AD, BEOGRAD": [
            {
                "code": "DBDBRSBGXXX",
                "name": "BANCA INTESA AD, BEOGRAD",
                "address": "MILENTIJA POPOVICA 7B"
            }
        ],
        "MTS BANK": [
            {
                "code": "MBRDRUMM",
                "name": "MTS BANK",
                "address": "Bld.1 Andropova Avenue 18"
            }
        ],
        "UNICREDIT BANK AO": [
            {
                "code": "IMBKRUMMPET",
                "name": "UNICREDIT BANK AO",
                "address": "St. Petersburg"
            }
        ],
        "CITIBANK SINGAPORE LTD": [
            {
                "code": "CITISGSGGCB",
                "name": "CITIBANK SINGAPORE LTD",
                "address": "PLAZA BY THE PARK 51 BRAS BASAH RD"
            }
        ],
        "CITIBANK,N.A.": [
            {
                "code": "CITISGSG",
                "name": "CITIBANK,N.A.",
                "address": "Hex 06-00:300, Tampines Avenue 5"
            }
        ],
        "COMMERZBANK AG": [
            {
                "code": "COBASGSXXX",
                "name": "COMMERZBANK AG",
                "address": "71 ROBINSON ROAD 12-01"
            }
        ],
        "DBS BANK LTD. - B": [
            {
                "code": "DBSSSGSGXXX",
                "name": "DBS BANK LTD",
                "address": "12 MARINA BOULEVARD"
            }
        ],
        "DBS BANK LTD.": [
            {
                "code": "DBSSSGSG",
                "name": "DBS BANK LTD.",
                "address": "Dbs Building: 6, Shenton Way"
            }
        ],
        "OVERSEA-CHINESE BANKING CORPORAT": [
            {
                "code": "OCBCSGSG",
                "name": "OVERSEA-CHINESE BANKING CORPORAT",
                "address": "OCBC CENTRE, CENTRE, FLOOR 9:65,"
            }
        ],
        "THE HONGKONG AND SHANGHAI BANKIN": [
            {
                "code": "HSBCSGSG",
                "name": "THE HONGKONG AND SHANGHAI BANKIN",
                "address": "SINGAPORE, SINGAPORE"
            }
        ],
        "National Westminster Bank": [
            {
                "code": "NWBKGB2L",
                "name": "Kensington Ryl Gdn",
                "address": "55 Kensington High St, London W8 5EQ"
            }
        ],
        "ING BANK N.V., POBOCKA ZAHR, BANKY": [
            {
                "code": "INGBSKBX",
                "name": "ING BANK N.V., POBOCKA ZAHR, BANKY",
                "address": "4/C, Jesenskeho"
            }
        ],
        "TURKIYE CUMHURIYETI ZIRAAT BANKASI A.S.": [
            {
                "code": "TCZBTR2A",
                "name": "TURKIYE CUMHURIYETI ZIRAAT BANKASI A.S.",
                "address": "Anafartalar Mh. Ataturk Blv. 8"
            }
        ],
        "TURKIYE GARANTI BANKASI A.S.": [
            {
                "code": "TGBATRIS",
                "name": "TURKIYE GARANTI BANKASI A.S.",
                "address": "Istanbul, Turkey"
            }
        ],
        "MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD.": [
            {
                "code": "ICBCTWTP007",
                "name": "MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD.",
                "address": "100 Chi Lin Road"
            }
        ],
        "BANK OF AMERICA, N.A.": [
            {
                "code": "BOFAUS3N",
                "name": "BANK OF AMERICA, N.A.",
                "address": "222 Broadway"
            }
        ],
        "COMERICA BANK": [
            {
                "code": "MNBDUS33",
                "name": "COMERICA BANK",
                "address": "MAIN STREET FLOOR 2"
            }
        ],
        "DEUTSCHE BANK TRUST COMPANY AMERICAS": [
            {
                "code": "BKTRUS33",
                "name": "DEUTSCHE BANK TRUST COMPANY AMERICAS",
                "address": "Mail Suite Nyc60-0501 60 WallStreet"
            }
        ],
        "JPMORGAN CHASE BANK, N.A. - B": [
            {
                "code": "CHASUS33",
                "name": "JPMORGAN CHASE BANK, N.A.",
                "address": "NEW YORK, NEW YORK, UNITED STATES"
            }
        ],
        "JPMORGAN CHASE BANK, N.A.": [
            {
                "code": "CHASUS33XXX",
                "name": "JPMORGAN CHASE BANK, N.A.",
                "address": "383 MADISON AVENUE"
            },
            {
                "code": "CHASGB2L",
                "name": "JPMORGAN CHASE BANK, N.A.",
                "address": "Woolgate House: 25, Coleman Street"
            }
        ],
        "SILICON VALLEY BANK": [
            {
                "code": "SVBKUS6S",
                "name": "SILICON VALLEY BANK",
                "address": "SANTA CLARA, CALIFORNIA, UNITED"
            },
            {
                "code": "SVBKGB2L",
                "name": "SILICON VALLEY BANK",
                "address": "41 LOTHBURY FLOOR 7"
            }
        ],
        "Wells Fargo Bank": [
            {
                "code": "WFBIUS6S",
                "name": "Wells Fargo Bank",
                "address": ""
            }
        ],
        "WELLS FARGO BANK NA": [
            {
                "code": "WFBIUS6WFFX",
                "name": "WELLS FARGO BANK NA",
                "address": "420 MONTGOMERY STREET FOREIGN EXCHA"
            }
        ],
        "BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY": [
            {
                "code": "BROUUYMM",
                "name": "BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY",
                "address": "CERRITO 351 ZABALA STREET"
            }
        ],
        "SOCIETE GENERALE LUXEMBOURG": [
            {
                "code": "SGABLULL",
                "name": "SOCIETE GENERALE LUXEMBOURG",
                "address": "13-15 AVENUE EMILE REUTER 2420"
            }
        ],
        "HSBC BANK EGYPT S.A.E": [
            {
                "code": "EBBKEGCXXXX",
                "name": "HSBC BANK EGYPT S.A.E",
                "address": "306 CORNICHE EL NIL MAADI"
            }
        ],
        "DEUTSCHE BANK S.P.A.": [
            {
                "code": "DEUTITMMX",
                "name": "DEUTSCHE BANK S.P.A. - C",
                "address": "PIAZZA DEL CALENDARIO 3 MILANO ITALY 20126"
            },
            {
                "code": "DEUTITMMXX",
                "name": "DEUTSCHE BANK S.P.A. - B",
                "address": "PIAZZA DEL CALENDARIO 3 MILANO ITALY 20126"
            },
            {
                "code": "DEUTITMM",
                "name": "DEUTSCHE BANK S.P.A.",
                "address": "PIAZZA DEL CALENDARIO 3 MILANO ITALY 20126"
            }
        ],
        "BANK OF NEW ZEALAND - B": [
            {
                "code": "BKNZNZ22100",
                "name": "BANK OF NEW ZEALAND",
                "address": "80 QUEEN STREET 1010"
            }
        ],
        "BANK OF NEW ZEALAND": [
            {
                "code": "BKNZNZ22X",
                "name": "BANK OF NEW ZEALAND - B",
                "address": "SPARK CENTRAL FLOOR 2 42 WILLIS STREET 6011"
            },
            {
                "code": "BKNZNZ22",
                "name": "BANK OF NEW ZEALAND",
                "address": "SPARK CENTRAL FLOOR 2 42 WILLIS STREET 6011"
            }
        ],
        "HSBC BANK A.S.": [
            {
                "code": "HSBCTRIX",
                "name": "HSBC BANK A.S.",
                "address": "ESENTEPE MAH. BUYUKDERE CAD. 128 S"
            }
        ],
        "DEUTSCHE BANK SOCIEDAD ANONIMA ESPANOLA": [
            {
                "code": "DEUTESBBXXXX",
                "name": "DEUTSCHE BANK SOCIEDAD ANONIMA ESPANOLA - B",
                "address": "AV. DIAGONAL 446 BARCELONA SPAIN 08006"
            },
            {
                "code": "DEUTESBBXXX",
                "name": "DEUTSCHE BANK SOCIEDAD ANONIMA ESPANOLA",
                "address": "AV. DIAGONAL 446 BARCELONA SPAIN 08006"
            }
        ],
        "BANGKOK BANK PUBLIC COMPANY LIMITED": [
            {
                "code": "BKKBTHBK",
                "name": "BANGKOK BANK PUBLIC COMPANY LIMITED",
                "address": "333 SILOM ROAD BANGRUK 10500"
            }
        ],
        "JPMORGAN BANK LUXEMBOURG S.A., DUBLIN BRANCH": [
            {
                "code": "CHASIE4L",
                "name": "JPMORGAN BANK LUXEMBOURG S.A., DUBLIN BRANCH",
                "address": "1 GEORGES DOCK, IFSC"
            }
        ],
        "BANK OF AMERICA, N.A. SINGAPORE": [
            {
                "code": "BOFASG2X",
                "name": "BANK OF AMERICA, N.A. SINGAPORE",
                "address": "OUE BAYFRONT 14-01 50 COLLYER QUAY 049321"
            }
        ],
        "JPMORGAN BANK (IRELAND) PLC": [
            {
                "code": "CHASIE2X",
                "name": "JPMORGAN BANK (IRELAND) PLC",
                "address": "200 CAPITAL DOCK 79 SIR ROGERSON'S QUAY , DUBLIN 2 D02RK57"
            }
        ],
        "RHB BANK BERHAD": [
            {
                "code": "RHBBMYKL",
                "name": "RHB BANK BERHAD",
                "address": "426 JALAN TUN RAZAK 50400"
            }
        ],
        "STANDARD CHARTERED BANK MALAYSIA BERHAD": [
            {
                "code": "SCBLMYKXXXX",
                "name": "STANDARD CHARTERED BANK MALAYSIA BERHAD",
                "address": "EQUATORIAL PLAZA FLOOR 26 JALAN SULTAN ISMAIL 50250"
            }
        ],
        "Lloyds Bank plc": [
            {
                "code": "LOYDGB21041",
                "name": "Lloyds Bank plc",
                "address": "Lloyds Bank plc, 5 Bridge Street, Newbury, RG14 5BQ"
            }
        ],
        "DANSKE BANK A/S": [
            {
                "code": "DABAFIHH",
                "name": "DANSKE BANK A/S",
                "address": "Televisiokatu 1, 00075 - Helsinki - Finland"
            }
        ],
        "BANQUE POPULAIRE GRAND OUEST": [
            {
                "code": "CCBPFRPPNAN",
                "name": "BANQUE POPULAIRE GRAND OUEST",
                "address": "15 boulevard de la Bouti¿¿re - CS 26858 - 35768 SAINT GREGOIRE CEDEX"
            }
        ],
        "Truist Bank": [
            {
                "code": "BRBTUS33",
                "name": "Truist Center Branch",
                "address": "Truist Bank, 214 North Tryon Street, Charlotte, NC 28202-1078"
            }
        ],
        "HDFC BANK LIMITED": [
            {
                "code": "HDFCINBB",
                "name": "HDFC BANK LIMITED",
                "address": "SENAPATI BAPAT MARG, PAREL, HDFC BANK HOUSE, 4TH FLOOR"
            }
        ],
        "PT Bank Syariah Indonesia Tbk": [
            {
                "code": "BSMDIDJAXXX",
                "name": "PT Bank Syariah Indonesia Tbk",
                "address": "Jl. MH. Thamrin No. 5, Jakarta."
            }
        ],
        "CHINA MERCHANTS BANK": [
            {
                "code": "CMBCCNBS281",
                "name": "Hangzhou Chengxi Branch",
                "address": "488 Wensan Road, Xihu District, Hangzhou City Zhejiang Province, China"
            }
        ],
        "SOCIETE GENERALE CYPRUS LIMITED": [
            {
                "code": "SOGECY2N",
                "name": "SOCIETE GENERALE CYPRUS LIMITED",
                "address": "36 KYPRANOROS ST"
            }
        ],
        "JPMorgan Chase Bank, N.A. Singapore Branch": [
            {
                "code": "CHASSGSG",
                "name": "JPMorgan Chase Bank, N.A. Singapore Branch",
                "address": "168 Robinson Road, Singapore."
            }
        ],
        "Cathay United Bank": [
            {
                "code": "UWCBTWTP",
                "name": "TUNG MEN BRANCH",
                "address": "No.9, Sec.3, XIN-YI Road, Taipei City Taiwan (R.O.C.)"
            }
        ],
        "BANK OF AMERICA, N.A. LONDON": [
            {
                "code": "BOFAGB22",
                "name": "BANK OF AMERICA, N.A. LONDON",
                "address": "26, Eumfield Road"
            }
        ],
        "HSBC Bank Malaysia Berhad": [
            {
                "code": "HBMBMYKL",
                "name": "HSBC Bank Malaysia Berhad - Kuala Lumpur",
                "address": "Menara IQ, Lingkaran TRX, 55188 Tun Razak Exchange, Kuala Lumpur, Malaysia."
            }
        ],
        "Hsbc Bank Usa, N.A.": [
            {
                "code": "MRMDUS33",
                "name": "Hsbc Bank Usa, N.A.",
                "address": "HSBC Bank USA, N.A. 66 Hudson Blvd. New York, New York 10001"
            }
        ],
        "Emirates Nbd Bank Pjsc": [
            {
                "code": "EBILAEADXXX",
                "name": "Emirates Nbd Bank Pjsc",
                "address": "Baniyas Road, PO Box 777"
            }
        ],
        "HSBC Bank PLC": [
            {
                "code": "MIDLGB22",
                "name": "HSBC Bank PLC",
                "address": ""
            },
            {
                "code": "MIDLGB22X",
                "name": "HSBC BANK PLC",
                "address": "8 CANADA SQUARE"
            }
        ],
        "CREDIT ANDORRA,S.A.": [
            {
                "code": "CRDAADAD",
                "name": "CREDIT ANDORRA,S.A.",
                "address": "Andorra La Vella"
            }
        ],
        "FIRST ABU DHABI BANK PJSC - B": [
            {
                "code": "NBADAEAA",
                "name": "FIRST ABU DHABI BANK PJSC",
                "address": "Al Ain, United Arab Emirates"
            }
        ],
        "FIRST ABU DHABI BANK PJSC": [
            {
                "code": "NBADAEAAXXX",
                "name": "FIRST ABU DHABI BANK PJSC",
                "address": "H.O. Sheikh Kalifa Street"
            }
        ],
        "ARDSHINBANK CJSC": [
            {
                "code": "ASHBAM22",
                "name": "ARDSHINBANK CJSC",
                "address": "3, Deghatan Str."
            }
        ],
        "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED": [
            {
                "code": "ANZBAU3M",
                "name": "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED",
                "address": "927, Sturt Street"
            }
        ],
        "COMMONWEALTH BANK OF AUSTRALIA S": [
            {
                "code": "CTBAAU2S",
                "name": "COMMONWEALTH BANK OF AUSTRALIA S",
                "address": "FLOOR 5: 48, MARTIN PLACE"
            }
        ],
        "UNICREDIT BANK": [
            {
                "code": "UNCRBA22",
                "name": "UNICREDIT BANK",
                "address": "Kardinala Stepinca Bb"
            }
        ],
        "EASTERN BANK LTD. - B": [
            {
                "code": "EBLDBDDH",
                "name": "EASTERN BANK LTD.",
                "address": "Floor 1:05, English Road"
            }
        ],
        "EASTERN BANK LTD.": [
            {
                "code": "EBLDBDDHXXX",
                "name": "EASTERN BANK LTD.",
                "address": "Gulshan 100 Gulshan Avenue"
            }
        ],
        "BANK OF AMERICA MERRILL LYNCH": [
            {
                "code": "BOFABE3X",
                "name": "BANK OF AMERICA MERRILL LYNCH",
                "address": "SQUARE DE MEEUS 38-40"
            }
        ],
        "BNP PARIBAS FORTIS (FORTIS BANK SA/NV)": [
            {
                "code": "GEBABEBB",
                "name": "BNP PARIBAS FORTIS (FORTIS BANK SA/NV)",
                "address": "34, Avenue Des Ardennes"
            }
        ],
        "DEUTSCHE BANK A.G.": [
            {
                "code": "DEUTBEBE",
                "name": "DEUTSCHE BANK A.G.",
                "address": "23, Arenbegstraat"
            }
        ],
        "DEUTSCHE BANK A.G. - B": [
            {
                "code": "DEUTBEBEXXX",
                "name": "DEUTSCHE BANK A.G.",
                "address": "AVENUE MARNIX 17"
            }
        ],
        "ING BELGIUM NV/SA (FORMERLY BANK BRUSSELS LAMBERT SA)": [
            {
                "code": "BBRUBEBB",
                "name": "ING BELGIUM NV/SA (FORMERLY BANK BRUSSELS LAMBERT SA)",
                "address": "Avenue Marnix 24"
            }
        ],
        "KBC BANK NV": [
            {
                "code": "KREDBEBB",
                "name": "KBC BANK NV",
                "address": "2 B, Havenlaan"
            }
        ],
        "BANK ISLAM BRUNEI DARUSSALAM BERHAD": [
            {
                "code": "BIBDBNBB",
                "name": "BANK ISLAM BRUNEI DARUSSALAM BERHAD",
                "address": "Bangunan Bibd Lot 159 Jl Pemancha"
            }
        ],
        "BANK DABRABYT JSC": [
            {
                "code": "MMBNBY22",
                "name": "BANK DABRABYT JSC",
                "address": "49, Kommunisticheskaya Street"
            }
        ],
        "PRIORBANK": [
            {
                "code": "PJCBBY2X",
                "name": "PRIORBANK",
                "address": "V. Khoruzhey Street 31A"
            }
        ],
        "ROYAL BANK OF CANADA": [
            {
                "code": "ROYCCAT2",
                "name": "ROYAL BANK OF CANADA",
                "address": "180 WELLINGTON STREET WEST"
            }
        ],
        "CREDIT SUISSE (SCHWEIZ) AG": [
            {
                "code": "CRESCHZZ",
                "name": "CREDIT SUISSE (SCHWEIZ) AG",
                "address": "Paradeplatz 8"
            }
        ],
        "CREDIT SUISSE AG": [
            {
                "code": "CRESCHZZ80A",
                "name": "CREDIT SUISSE AG",
                "address": "Zurich"
            }
        ],
        "BANCO DE CREDITO E INVERSIONES": [
            {
                "code": "CREDCLRM",
                "name": "BANCO DE CREDITO E INVERSIONES",
                "address": "1134, Huerfanos"
            }
        ],
        "CHINA CITIC BANK": [
            {
                "code": "CIBKCNBJ",
                "name": "CHINA CITIC BANK",
                "address": "NO. 95, GUPING ROAD"
            }
        ],
        "BNP PARIBAS S.A., POBOCKA CESKA REPUBLIKA": [
            {
                "code": "GEBACZPP",
                "name": "BNP PARIBAS S.A., POBOCKA CESKA REPUBLIKA",
                "address": "Myslbek Building Ovocny Trh"
            }
        ],
        "PPF BANKA A.S.": [
            {
                "code": "PMBPCZPP",
                "name": "PPF BANKA A.S.",
                "address": "Ppf Gate Evropska 2690/17"
            }
        ],
        "COMMERZBANK AG (FORMERLY DRESDNER BANK AG)": [
            {
                "code": "DRESDEFF370",
                "name": "COMMERZBANK AG (FORMERLY DRESDNER BANK AG)",
                "address": "Koeln"
            }
        ],
        "UNICREDIT BANK AG (HYPOVEREINSBANK)": [
            {
                "code": "HYVEDEMM",
                "name": "UNICREDIT BANK AG (HYPOVEREINSBANK)",
                "address": "Arabellastrasse 12"
            }
        ],
        "UNICREDIT BANK AG (HYPOVEREINSBANK) - B": [
            {
                "code": "HYVEDEMMXXX",
                "name": "UNICREDIT BANK AG (HYPOVEREINSBANK)",
                "address": "Arabellastrasse 12"
            }
        ],
        "SWEDBANK AS": [
            {
                "code": "HABAEE2X",
                "name": "SWEDBANK AS",
                "address": "Tallinn, Estonia"
            }
        ],
        "CAIXABANK, S.A.": [
            {
                "code": "CAIXESBB",
                "name": "CAIXABANK, S.A.",
                "address": "Avenida Diagonal 621-629"
            }
        ],
        "CAIXABANK, S.A. - B": [
            {
                "code": "CAIXESBBXX",
                "name": "CAIXABANK, S.A.",
                "address": "AVENIDA DIAGONAL 621-629"
            }
        ],
        "HSBC FRANCE, SUCURSAL EN ESPANA": [
            {
                "code": "MIDLESMM",
                "name": "HSBC FRANCE, SUCURSAL EN ESPANA",
                "address": "Edificio Torre Picasso, Floor"
            }
        ],
        "COMMERCIAL BANK OF ETHIOPIA": [
            {
                "code": "CBETETAA",
                "name": "COMMERCIAL BANK OF ETHIOPIA",
                "address": "WHITE BUILDING CHURCHILL ROAD"
            }
        ],
        "BNP-PARIBAS SA (FORMERLY BANQUE": [
            {
                "code": "BNPAFRPP",
                "name": "BNP-PARIBAS SA (FORMERLY BANQUE",
                "address": "49, R DES MARTYRS"
            }
        ],
        "BNP-PARIBAS SA (FORMERLY BANQUE NATIONALE DE PARIS S.A.)": [
            {
                "code": "BNPAFRPPPXV",
                "name": "BNP-PARIBAS SA (FORMERLY BANQUE NATIONALE DE PARIS S.A.)",
                "address": "Paris"
            }
        ],
        "CM - CIC BANQUES": [
            {
                "code": "CMCIFRPP",
                "name": "CM - CIC BANQUES",
                "address": "6 AVENUE DE PROVENCE"
            }
        ],
        "BARCLAYS BANK PLC": [
            {
                "code": "BARCGB22",
                "name": "BARCLAYS BANK PLC",
                "address": "Canary Wharf: 5, North Colonnade"
            }
        ],
        "HSBC UK BANK PLC": [
            {
                "code": "HBUKGB4B",
                "name": "HSBC UK BANK PLC",
                "address": "1 CENTENARY SQUARE"
            }
        ],
        "TURKIYE IS BANKASI A.S.": [
            {
                "code": "ISBKGB2L",
                "name": "TURKIYE IS BANKASI A.S.",
                "address": "Princes Court 8 Princes Street"
            }
        ],
        "HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED": [
            {
                "code": "HSBCHKHHHKH",
                "name": "HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED",
                "address": "1 Queen S Road Central"
            }
        ],
        "MUFG BANK, LTD.": [
            {
                "code": "BOTKHKHH",
                "name": "MUFG BANK, LTD.",
                "address": "AIA CENTRAL FLOOR 8 1 CONNAUGHT"
            }
        ],
        "STANDARD CHARTERED BANK (HONG KONG) LIMITED - B": [
            {
                "code": "SCBLHKHH",
                "name": "STANDARD CHARTERED BANK (HONG KONG) LIMITED",
                "address": "Standard Chartered Tower, Floor"
            }
        ],
        "STANDARD CHARTERED BANK (HONG KONG) LIMITED": [
            {
                "code": "SCBLHKHHXXX",
                "name": "STANDARD CHARTERED BANK (HONG KONG) LIMITED",
                "address": "4-4A DES VOEUX ROAD CENTRAL FL 32"
            }
        ],
        "ZAGREBACKA BANKA DD": [
            {
                "code": "ZABAHR2X",
                "name": "ZAGREBACKA BANKA DD",
                "address": "2, Paromlinska"
            }
        ],
        "ZAGREBACKA BANKA DD - B": [
            {
                "code": "ZABAHR2XXXX",
                "name": "ZAGREBACKA BANKA DD",
                "address": "Trg Bana Josipa Jelacica 10"
            }
        ],
        "BNP PARIBAS, HUNGARY BRANCH": [
            {
                "code": "BNPAHUHX",
                "name": "BNP PARIBAS, HUNGARY BRANCH",
                "address": "7-8, Roosevelt Ter"
            }
        ],
        "Bangkok Bank Public Co Ltd": [
            {
                "code": "400309",
                "name": "Bangkok Bank Public Co Ltd",
                "address": "Jl.M.H.Thamrin No.3"
            }
        ],
        "Bank Index Selindo": [
            {
                "code": "5550018",
                "name": "Bank Index Selindo",
                "address": "Jl.MH.Thamrin No.57 Gd.Plz"
            }
        ],
        "Bank Indonesia": [
            {
                "code": "10000",
                "name": "Bank Indonesia",
                "address": "Jl. MH. Thamrin 2 Jakarta 10350"
            }
        ],
        "Bank Of America N.A.": [
            {
                "code": "330301",
                "name": "Bank Of America N.A.",
                "address": "JSE Bld, Tower II Lt. 23,"
            }
        ],
        "HSBC": [
            {
                "code": "870010",
                "name": "HSBC",
                "address": "Gedung WTC 1 3rd floor"
            }
        ],
        "WESTPAC BANKING CORPORATION": [
            {
                "code": "WPACAU2S",
                "name": "WESTPAC BANKING CORPORATION",
                "address": "WESTPAC PLACE FL 1 275 KENT STREET"
            }
        ],
        "NORDEA BANK ABP": [
            {
                "code": "NDEAFIHHXXX",
                "name": "NORDEA BANK ABP",
                "address": "SATAMARADANKATU 5"
            }
        ],
        "Bank of China (Hongkong) Limited": [
            {
                "code": "690300",
                "name": "Bank of China (Hongkong) Limited",
                "address": "Jl. Jend Sudirman Kav. 24"
            }
        ],
        "Bank Standard Chartered": [
            {
                "code": "500306",
                "name": "Bank Standard Chartered",
                "address": "Menara Standard Chartered"
            }
        ],
        "Citibank N.A.": [
            {
                "code": "310305",
                "name": "Citibank N.A.",
                "address": "Citibank Tower"
            }
        ],
        "Deutsche Bank AG": [
            {
                "code": "670304",
                "name": "Deutsche Bank AG",
                "address": "Jl. Imam Bonjol 80"
            }
        ],
        "MUFG Bank, Ltd.": [
            {
                "code": "420305",
                "name": "MUFG Bank, Ltd.",
                "address": "MidPlaza Building 1-3 F"
            }
        ],
        "PT Bank Maybank Indonesia Tbk": [
            {
                "code": "160131",
                "name": "PT Bank Maybank Indonesia Tbk",
                "address": "Jl. Asia Afrika No. 8"
            }
        ],
        "PT Bank OCBC NISP, Tbk": [
            {
                "code": "280024",
                "name": "PT Bank OCBC NISP, Tbk",
                "address": "OCBC NISP Tower Lt. 10"
            }
        ],
        "PT Bank Pembangunan Daerah Papua": [
            {
                "code": "1320019",
                "name": "PT Bank Pembangunan Daerah Papua",
                "address": "Jl. A.Yani No.5-7 Jayapura"
            }
        ],
        "PT Bank Pembangunan Daerah Riau Kepri Unit Usaha Syariah": [
            {
                "code": "7830000",
                "name": "PT Bank Pembangunan Daerah Riau Kepri Unit Usaha Syariah",
                "address": "Jl. Jend.Sudirman No.377 Pekanbaru"
            }
        ],
        "PT Bank UOB Indonesia": [
            {
                "code": "230016",
                "name": "PT Bank UOB Indonesia",
                "address": "Plaza UOB Lt. 10"
            }
        ],
        "KOOKMIN BANK": [
            {
                "code": "CZNBKRSEXXX",
                "name": "KOOKMIN BANK",
                "address": "SEWOO BUILDING FLOOR 10"
            }
        ],
        "SKANDINAVISKA ENSKILDA BANKEN": [
            {
                "code": "ESSESESS",
                "name": "SKANDINAVISKA ENSKILDA BANKEN",
                "address": "STJARNTORGET 4"
            }
        ],
        "United Overseas Bank Limited": [
            {
                "code": "UOVBSGSG",
                "name": "United Overseas Bank Limited",
                "address": "UOB PLAZA 80 RAFFLES PLACE"
            }
        ],
        "SIAM COMMERCIAL BANK PCL., THE": [
            {
                "code": "SICOTHBK",
                "name": "SIAM COMMERCIAL BANK PCL., THE",
                "address": "BUILDING 2 RUTCHADAPISEK ROAD CHAT"
            }
        ],
        "PNC BANK, N.A.": [
            {
                "code": "PNCCUS33",
                "name": "PNC BANK, N.A.",
                "address": "FLOOR 4:505, THORNALL STREET"
            }
        ],
        "Indonesia Eximbank": [
            {
                "code": "30012",
                "name": "Indonesia Eximbank",
                "address": "Prosperity Tower"
            }
        ],
        "Jalin Pembayaran Nusantara (Jalin)": [
            {
                "code": "8000000",
                "name": "Jalin Pembayaran Nusantara (Jalin)",
                "address": ""
            }
        ],
        "JPMorgan Chase Bank N.A.": [
            {
                "code": "320308",
                "name": "JPMorgan Chase Bank N.A.",
                "address": "Plaza Chase, Lantai 3, Jl. Jend."
            }
        ],
        "PT Bank Aceh": [
            {
                "code": "1169900",
                "name": "PT Bank Aceh",
                "address": "Jl.Tgk.Daud Beureu-Eh No.24 Banda"
            }
        ],
        "PT Bank Agris": [
            {
                "code": "9450305",
                "name": "PT Bank Agris",
                "address": "Sentral Senayan I Lt 6 Jl.Asia"
            }
        ],
        "PT Bank Amar Indonesia": [
            {
                "code": "5310012",
                "name": "PT Bank Amar Indonesia",
                "address": "Jl. Simpang Dukuh No.38-40 Surabaya"
            }
        ],
        "PT Bank ANZ Indonesia": [
            {
                "code": "610306",
                "name": "PT Bank ANZ Indonesia",
                "address": "Ground Fl Bank Panin Centre"
            }
        ],
        "PT Bank Artha Graha Internasional Tbk": [
            {
                "code": "370028",
                "name": "PT Bank Artha Graha Internasional Tbk",
                "address": "Jl. Jend. Sudirman Kav. 52-53"
            }
        ],
        "PT Bank Artos Indonesia": [
            {
                "code": "5420012",
                "name": "PT Bank Artos Indonesia",
                "address": "Jl. Suryopranoto 59"
            }
        ],
        "PT Bank BCA Syariah": [
            {
                "code": "5360017",
                "name": "PT Bank BCA Syariah",
                "address": "Jl. Jatinegara Timur No. 72"
            }
        ],
        "PT Bank Bisnis International": [
            {
                "code": "4590011",
                "name": "PT Bank Bisnis International",
                "address": "Jl.Mangga Dua Raya Komp.Ruko"
            }
        ],
        "PT Bank BNI Syariah": [
            {
                "code": "4270027",
                "name": "PT Bank BNI Syariah",
                "address": "Jl.RS.Fatmawati No.33/1 Jakarta"
            }
        ],
        "PT Bank BNP Paribas Indonesia": [
            {
                "code": "570307",
                "name": "PT Bank BNP Paribas Indonesia",
                "address": "Menara Batavia Lt. 20,Jl. K.H.Mas"
            }
        ],
        "PT Bank BPD DIY": [
            {
                "code": "1120015",
                "name": "PT Bank BPD DIY",
                "address": "Jl.Tentara Pelajar No.7 Yogyakarta"
            }
        ],
        "PT Bank BPD DIY Unit Usaha Syariah": [
            {
                "code": "1129922",
                "name": "PT Bank BPD DIY Unit Usaha Syariah",
                "address": "Jl.Cik Ditiro No.34 Yogyakarta"
            }
        ],
        "PT Bank BRI Syariah": [
            {
                "code": "4220051",
                "name": "PT Bank BRI Syariah",
                "address": "Jl. Mampang Prapatan No. 17 Blok"
            }
        ],
        "PT Bank BTPN Tbk": [
            {
                "code": "2130101",
                "name": "PT Bank BTPN Tbk",
                "address": "Jl.Ide Anak Agung Gde Agung Kav 5.5"
            }
        ],
        "PT Bank Bukopin Tbk": [
            {
                "code": "4410010",
                "name": "PT Bank Bukopin Tbk",
                "address": "Jl.MT Haryono Kav 50-51 Jakarta"
            }
        ],
        "PT Bank Bumi Arta": [
            {
                "code": "760010",
                "name": "PT Bank Bumi Arta",
                "address": "Jl. Wahid Hasyim No.234 Jakarta"
            }
        ],
        "PT Bank Capital Indonesia": [
            {
                "code": "540308",
                "name": "PT Bank Capital Indonesia",
                "address": "Sona Topas Tower Lt.16"
            }
        ],
        "PT Bank Central Asia Tbk": [
            {
                "code": "140397",
                "name": "PT Bank Central Asia Tbk",
                "address": "Jl. Asemka 27-30 Jakarta 11110"
            }
        ],
        "PT Bank China Construction Bank Indonesia Tbk": [
            {
                "code": "360300",
                "name": "PT Bank China Construction Bank Indonesia Tbk",
                "address": "Menara Batavia Lantai 19 Jl. K.H."
            }
        ],
        "PT Bank CIMB Niaga Tbk": [
            {
                "code": "220026",
                "name": "PT Bank CIMB Niaga Tbk",
                "address": "Jl. Gajah Mada No.18 Jakarta 10130"
            }
        ],
        "PT Bank CIMB Niaga Tbk Unit Usaha Syariah": [
            {
                "code": "229920",
                "name": "PT Bank CIMB Niaga Tbk Unit Usaha Syariah",
                "address": "Jl. Sultan Hasanudin Kav. 47-51-"
            }
        ],
        "PT Bank Commonwealth": [
            {
                "code": "9500307",
                "name": "PT Bank Commonwealth",
                "address": "Gedung Wisma Metropolitan II"
            }
        ],
        "PT Bank CTBC Indonesia": [
            {
                "code": "9490307",
                "name": "PT Bank CTBC Indonesia",
                "address": "Wisma Tamara, Lantai 16-Jl. Jend."
            }
        ],
        "PT Bank Danamon Indonesia Tbk": [
            {
                "code": "110042",
                "name": "PT Bank Danamon Indonesia Tbk",
                "address": "Jl. Kebon Sirih No.15, Jakarta"
            }
        ],
        "PT Bank Danamon Indonesia Tbk Unit Usaha Syariah": [
            {
                "code": "119920",
                "name": "PT Bank Danamon Indonesia Tbk Unit Usaha Syariah",
                "address": "Jl. Raya Bogor No.2 Ciracas, Jaktim"
            }
        ],
        "PT Bank DBS Indonesia": [
            {
                "code": "460307",
                "name": "PT Bank DBS Indonesia",
                "address": "Plaza Permata Lantai 12 Jl. M.H."
            }
        ],
        "PT Bank DKI": [
            {
                "code": "1110012",
                "name": "PT Bank DKI",
                "address": "Jl.Ir.H. Juanda III 7-9"
            }
        ],
        "PT Bank DKI Unit Usaha Syariah": [
            {
                "code": "1119916",
                "name": "PT Bank DKI Unit Usaha Syariah",
                "address": "Jl. Wahid Hasyim 153 Tanah Abang,"
            }
        ],
        "PT Bank Fama International": [
            {
                "code": "5620016",
                "name": "PT Bank Fama International",
                "address": "Jl. Fachrudn No. 36 Tanah Abang"
            }
        ],
        "PT Bank Ganesha": [
            {
                "code": "1610017",
                "name": "PT Bank Ganesha",
                "address": "Graha Ganesha, Jl. Hayam Wuruk"
            }
        ],
        "PT Bank Harda International": [
            {
                "code": "5670011",
                "name": "PT Bank Harda International",
                "address": "Grand Boutique Center Blok B 3-4"
            }
        ],
        "PT Bank ICBC Indonesia": [
            {
                "code": "1640016",
                "name": "PT Bank ICBC Indonesia",
                "address": "Jl. Batu Ceper No. 65 Jakarta"
            }
        ],
        "PT Bank Ina Perdana": [
            {
                "code": "5130014",
                "name": "PT Bank Ina Perdana",
                "address": "Wisma Bsg Lt.1 , Jl.Abdul Muis"
            }
        ],
        "PT Bank Jabar Banten Syariah": [
            {
                "code": "4250018",
                "name": "PT Bank Jabar Banten Syariah",
                "address": "Jl.Pelajar Pejuang Bandung"
            }
        ],
        "PT Bank Jasa Jakarta": [
            {
                "code": "4720014",
                "name": "PT Bank Jasa Jakarta",
                "address": "Jl. Tiang Bendera III No.26-32"
            }
        ],
        "PT Bank Jtrust Indonesia Tbk": [
            {
                "code": "950011",
                "name": "PT Bank Jtrust Indonesia Tbk",
                "address": "Jl. Asia Afrika No.8 Gd Sentral"
            }
        ],
        "PT Bank Keb Hana Indonesia": [
            {
                "code": "4840017",
                "name": "PT Bank Keb Hana Indonesia",
                "address": "Jl. Pasar Pagi No. 24 Jakarta 11230"
            }
        ],
        "PT Bank Kesejahteraan Ekonomi": [
            {
                "code": "5350014",
                "name": "PT Bank Kesejahteraan Ekonomi",
                "address": "Jl. RP.Soeroso No.21 Jakarta"
            }
        ],
        "PT Bank Mandiri (Persero) Tbk": [
            {
                "code": "80017",
                "name": "PT Bank Mandiri (Persero) Tbk",
                "address": "Jl. Jenderal Gatot Subroto Kav."
            }
        ],
        "PT Bank Mandiri Taspen": [
            {
                "code": "5640012",
                "name": "PT Bank Mandiri Taspen",
                "address": "Jl. Melati No. 65 Denpasar"
            }
        ],
        "PT Bank Maspion": [
            {
                "code": "1570018",
                "name": "PT Bank Maspion",
                "address": "Jl. Mangga Dua Raya Blok E-4 No.1"
            }
        ]
    }

    const bankRepo = dataSource.getRepository(Bank);
    const bankBranchrepo = dataSource.getRepository(BankBranch);


    for (const [bankName, data] of Object.entries(arr)) {
        const bank = await bankRepo.findOne({
            where: { name: bankName }
        });

        for (const obj of data) {
            await bankBranchrepo.save(
                bankBranchrepo.create({
                    code: obj.code,
                    name: obj.name,
                    address: obj.address,
                    bank : {
                        id : bank!!.id
                    }
                })
            )
        }

        console.log(`✅ Seeded ${bankName} (${data.length} cities)`);
    }

    console.log('✅ Countries seeded');
}