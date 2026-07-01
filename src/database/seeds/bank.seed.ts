import { Bank } from "@modules/master/bank/entities/bank.entity";
import { Country } from "@modules/master/country/entities/country.entity";
import { DataSource } from "typeorm";

export async function seedBank(dataSource: DataSource) {

    const arr :  Record<string, Record<string, string>[]>  =  {
      "Indonesia": [
        {
          "code": "Bank Pembangunan Daerah Jawa Timur Tbk Unit Usaha Syariah",
          "name": "PT Bank Pembangunan Daerah Jawa Timur Tbk Unit Usaha Syariah"
        },
        {
          "code": "Bank Pembangunan Daerah Sumut Unit Usaha Syariah",
          "name": "PT Bank Pembangunan Daerah Sumut Unit Usaha Syariah"
        },
        {
          "code": "PT. Bank Pembangunan Daerah Kalbar Unit Usaha Syariah",
          "name": "PT. Bank Pembangunan Daerah Kalbar Unit Usaha Syariah"
        },
        {
          "code": "Bank Sulselbar Unit Usaha Syariah",
          "name": "PT Bank Sulselbar Unit Usaha Syariah"
        },
        {
          "code": "Bank Pembangunan Daerah Jambi Unit Usaha Syariah",
          "name": "PT Bank Pembangunan Daerah Jambi Unit Usaha Syariah"
        },
        {
          "code": "Bank Pembangunan Daerah Kaltim Kaltara Unit usaha Syariah",
          "name": "PT Bank Pembangunan Daerah Kaltim Kaltara Unit usaha Syariah"
        },
        {
          "code": "PT Bank Syariah Indonesia Tbk",
          "name": "PT Bank Syariah Indonesia Tbk"
        },
        {
          "code": "Bank Rakyat Indonesia Agroniaga Tbk",
          "name": "PT Bank Rakyat Indonesia Agroniaga Tbk"
        },
        {
          "code": "BANK OF AMERICA , NA",
          "name": "Bank Of America N.A."
        },
        {
          "code": "BANK RAKYAT INDONESIA SYARIAH Tbk.",
          "name": "PT Bank BRI Syariah"
        },
        {
          "code": "JPMORGAN CHASE BANK, NA",
          "name": "JPMorgan Chase Bank N.A."
        },
        {
          "code": "PT Bank ANZ Indonesia",
          "name": "PT Bank ANZ Indonesia"
        },
        {
          "code": "PT. BANK AGRIS",
          "name": "PT Bank Agris"
        },
        {
          "code": "PT. BANK ARTHA GRAHA INTERNASIONAL",
          "name": "PT Bank Artha Graha Internasional Tbk"
        },
        {
          "code": "PT. BANK ARTOS INDONESIA",
          "name": "PT Bank Artos Indonesia"
        },
        {
          "code": "PT. BANK BCA SYARIAH",
          "name": "PT Bank BCA Syariah"
        },
        {
          "code": "PT. BANK BISNIS INTERNATIONAL",
          "name": "PT Bank Bisnis International"
        },
        {
          "code": "PT. BANK BNI SYARIAH",
          "name": "PT Bank BNI Syariah"
        },
        {
          "code": "PT. BANK BNP PARIBAS INDONESIA",
          "name": "PT Bank BNP Paribas Indonesia"
        },
        {
          "code": "PT. BANK BUMI ARTA",
          "name": "PT Bank Bumi Arta"
        },
        {
          "code": "PT. BANK CAPITAL INDONESIA Tbk.",
          "name": "PT Bank Capital Indonesia"
        },
        {
          "code": "PT. BANK CIMB NIAGA SYARIAH Tbk.",
          "name": "PT Bank CIMB Niaga Tbk Unit Usaha Syariah"
        },
        {
          "code": "PT. BANK CIMB NIAGA Tbk.",
          "name": "PT Bank CIMB Niaga Tbk"
        },
        {
          "code": "PT. BANK COMMONWEALTH",
          "name": "PT Bank Commonwealth"
        },
        {
          "code": "PT. BANK CTBC INDONESIA",
          "name": "PT Bank CTBC Indonesia"
        },
        {
          "code": "PT. BANK DANAMON INDONESIA Tbk.",
          "name": "PT Bank Danamon Indonesia Tbk"
        },
        {
          "code": "PT. BANK DANAMON SYARIAH",
          "name": "PT Bank Danamon Indonesia Tbk Unit Usaha Syariah"
        },
        {
          "code": "PT. BANK DBS INDONESIA",
          "name": "PT Bank DBS Indonesia"
        },
        {
          "code": "PT. BANK FAMA INTERNATIONAL",
          "name": "PT Bank Fama International"
        },
        {
          "code": "PT. BANK GANESHA",
          "name": "PT Bank Ganesha"
        },
        {
          "code": "PT. BANK HANA",
          "name": "PT Bank Keb Hana Indonesia"
        },
        {
          "code": "PT. BANK HARDA INTERNASIONAL",
          "name": "PT Bank Harda International"
        },
        {
          "code": "PT. BANK ICBC INDONESIA",
          "name": "PT Bank ICBC Indonesia"
        },
        {
          "code": "PT. BANK INA PERDANA",
          "name": "PT Bank Ina Perdana"
        },
        {
          "code": "PT. BANK INDEX SELINDO",
          "name": "Bank Index Selindo"
        },
        {
          "code": "PT. BANK JABAR BANTEN SYARIAH",
          "name": "PT Bank Jabar Banten Syariah"
        },
        {
          "code": "PT. BANK JASA JAKARTA",
          "name": "PT Bank Jasa Jakarta"
        },
        {
          "code": "PT. BANK KESEJAHTERAAN EKONOMI",
          "name": "PT Bank Kesejahteraan Ekonomi"
        },
        {
          "code": "PT. BANK MANDIRI Tbk.",
          "name": "PT Bank Mandiri (Persero) Tbk"
        },
        {
          "code": "PT. BANK MASPION INDONESIA",
          "name": "PT Bank Maspion"
        },
        {
          "code": "PT. BANK MAYAPADA Tbk.",
          "name": "PT Bank Mayapada Tbk"
        },
        {
          "code": "PT. BANK MAYBANK SYARIAH INDONESIA",
          "name": "PT Bank Maybank Syariah Indonesia"
        },
        {
          "code": "PT. BANK MAYORA INDONESIA",
          "name": "PT Bank Mayora"
        },
        {
          "code": "PT. BANK MEGA Tbk.",
          "name": "PT Bank Mega Tbk"
        },
        {
          "code": "PT. BANK MESTIKA DHARMA",
          "name": "PT Bank Mestika Dharma"
        },
        {
          "code": "PT. BANK MITRANIAGA",
          "name": "PT Bank Mitraniaga"
        },
        {
          "code": "PT. BANK MIZUHO INDONESIA",
          "name": "PT Bank Mizuho Indonesia"
        },
        {
          "code": "PT. BANK MUAMALAT INDONESIA",
          "name": "PT Bank Muamalat Indonesia"
        },
        {
          "code": "PT. BANK MULTIARTA SENTOSA",
          "name": "PT Bank Multiarta Sentosa"
        },
        {
          "code": "PT. BANK NATIONALNOBU",
          "name": "PT Bank Nationalnobu"
        },
        {
          "code": "PT. BANK NEGARA INDONESIA 46 Tbk.",
          "name": "PT Bank Negara Indonesia (Persero) Tbk"
        },
        {
          "code": "PT. BANK OF INDIA INDONESIA Tbk.",
          "name": "PT Bank of India Indonesia Tbk"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH BALI",
          "name": "PT Bank Pembangunan Daerah Bali"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH DIY",
          "name": "PT Bank BPD DIY"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH JAMBI",
          "name": "PT Bank Pembangunan Daerah Jambi"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH JATENG",
          "name": "PT Bank Pembangunan Daerah Jawa Tengah"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH JATIM",
          "name": "PT Bank Pembangunan Daerah Jawa Timur Tbk"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH KALBAR",
          "name": "PT Bank Pembangunan Daerah Kalbar"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH KALSEL",
          "name": "PT Bank Pembangunan Daerah Kalsel"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH KALTENG",
          "name": "PT BPD Kalimantan Tengah"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH KALTIM",
          "name": "PT Bank Pembangunan Daerah Kaltim Dan Kaltara"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH LAMPUNG",
          "name": "PT Bank Pembangunan Daerah Lampung"
        },
        {
          "code": "PT Bank Pembangunan Daerah Maluku Dan Maluku Utara",
          "name": "PT Bank Pembangunan Daerah Maluku Dan Maluku Utara"
        },
        {
          "code": "PT Bank Pembangunan Daerah Nusa Tenggarat Barat Syariah",
          "name": "PT Bank Pembangunan Daerah Nusa Tenggarat Barat Syariah"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH NTT",
          "name": "PT Bank Pembangunan Daerah NTT"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH RIAU",
          "name": "PT Bank Pembangunan Daerah Riau Kepri"
        },
        {
          "code": "PT Bank Sulselbar",
          "name": "PT Bank Sulselbar"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH SUMBAR",
          "name": "PT Bank Pembangunan Daerah Sumatera Barat (Nagari)"
        },
        {
          "code": "BPD Sumsel Dan Babel",
          "name": "PT BPD Sumsel Dan Babel"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DAERAH SUMUT",
          "name": "PT Bank Pembangunan Daerah Sumut"
        },
        {
          "code": "PT. BANK PEMBANGUNAN DI ACEH",
          "name": "PT Bank Aceh"
        },
        {
          "code": "PT. BANK PEMBANGUNAN SULUT",
          "name": "PT Bank Pembangunan Daerah Sulut"
        },
        {
          "code": "PT. BANK PERMATA SYARIAH Tbk.",
          "name": "PT Bank Permata Tbk Unit Usaha Syariah"
        },
        {
          "code": "PT. BANK PERMATA Tbk.",
          "name": "PT Bank Permata Tbk"
        },
        {
          "code": "PT. BANK RABOBANK INTERNATIONAL IND",
          "name": "PT Bank Rabobank International Indonesia"
        },
        {
          "code": "PT. BANK RAKYAT INDONESIA Tbk.",
          "name": "PT Bank Rakyat Indonesia (Persero) Tbk"
        },
        {
          "code": "PT. BANK RESONA PERDANIA",
          "name": "PT Bank Resona Perdania"
        },
        {
          "code": "PT. BANK ROYAL INDONESIA",
          "name": "PT Bank Royal Indonesia"
        },
        {
          "code": "PT. BANK SAHABAT SAMPOERNA",
          "name": "PT Bank Sahabat Sampoerna"
        },
        {
          "code": "PT. BANK SBI INDONESIA",
          "name": "PT Bank SBI Indonesia"
        },
        {
          "code": "PT. BANK SINAR MAS",
          "name": "PT Bank Sinarmas"
        },
        {
          "code": "PT. BANK SYARIAH BUKOPIN",
          "name": "PT Bank Syariah Bukopin"
        },
        {
          "code": "PT. BANK SYARIAH MEGA INDONESIA",
          "name": "PT Bank Mega Syariah"
        },
        {
          "code": "PT. BANK TABUNGAN (BTPN)",
          "name": "PT Bank BTPN Tbk"
        },
        {
          "code": "PT. BANK TABUNGAN NEGARA",
          "name": "PT Bank Tabungan Negara (Persero) Tbk"
        },
        {
          "code": "PT. BANK TABUNGAN NEGARA SYARIAH",
          "name": "PT Bank Tabungan Negara (Persero) Unit Usaha Syariah"
        },
        {
          "code": "PT. BANK TABUNGAN SYARIAH (BTPN)",
          "name": "PT Bank Tabungan Pensiunan Nasional Syariah"
        },
        {
          "code": "PT. BANK VICTORIA INTERNATIONAL",
          "name": "PT Bank Victoria International"
        },
        {
          "code": "PT. BANK WOORI INDONESIA",
          "name": "PT Bank Woori Saudara Indonesia 1906 Tbk"
        },
        {
          "code": "PT. BANK YUDHA BHAKTI",
          "name": "PT Bank Yudha Bhakti"
        },
        {
          "code": "PT. BPD BENGKULU",
          "name": "PT BPD Bengkulu"
        },
        {
          "code": "PT. BPD DKI JAKARTA",
          "name": "PT Bank DKI"
        },
        {
          "code": "PT. BPD DKI SYARIAH",
          "name": "PT Bank DKI Unit Usaha Syariah"
        },
        {
          "code": "PT. BPD KALSEL SYARIAH",
          "name": "PT Bank Pembangunan Daerah Kalsel Unit Usaha Syariah"
        },
        {
          "code": "PT. BPD SULAWESI TENGGARA",
          "name": "PT BPD Sulawesi Tenggara"
        },
        {
          "code": "PT. BPD SUMBAR SYARIAH",
          "name": "PT Bank Pembangunan Daerah Sumatera Barat (Nagari) Syariah"
        },
        {
          "code": "PT. BUKOPIN",
          "name": "PT Bank Bukopin Tbk"
        },
        {
          "code": "PT. PANIN BANK Tbk.",
          "name": "PT Panin Bank Tbk"
        },
        {
          "code": "PT. PRIMA MASTER BANK",
          "name": "PT Prima Master Bank"
        },
        {
          "code": "THE BANGKOK BANK PCL",
          "name": "Bangkok Bank Public Co Ltd"
        },
        {
          "code": "THE HONGKONG AND SHANGHAI BC (HSBC)",
          "name": "HSBC"
        },
        {
          "code": "PT. BANK CENTRAL ASIA Tbk.",
          "name": "PT Bank Central Asia Tbk"
        },
        {
          "code": "Bank of China (Hongkong) Limited",
          "name": "Bank of China (Hongkong) Limited"
        },
        {
          "code": "Bank Standard Chartered",
          "name": "Bank Standard Chartered"
        },
        {
          "code": "Citibank N.A.",
          "name": "Citibank N.A."
        },
        {
          "code": "Deutsche Bank AG",
          "name": "Deutsche Bank AG"
        },
        {
          "code": "MUFG Bank, Ltd.",
          "name": "MUFG Bank, Ltd."
        },
        {
          "code": "PT Bank Maybank Indonesia Tbk",
          "name": "PT Bank Maybank Indonesia Tbk"
        },
        {
          "code": "PT Bank OCBC NISP, Tbk",
          "name": "PT Bank OCBC NISP, Tbk"
        },
        {
          "code": "PT Bank Pembangunan Daerah Papua",
          "name": "PT Bank Pembangunan Daerah Papua"
        },
        {
          "code": "PT Bank Pembangunan Daerah Riau Kepri Unit Usaha Syariah",
          "name": "PT Bank Pembangunan Daerah Riau Kepri Unit Usaha Syariah"
        },
        {
          "code": "PT Bank UOB Indonesia",
          "name": "PT Bank UOB Indonesia"
        },
        {
          "code": "Bank Victoria Syariah",
          "name": "PT Bank Victoria Syariah"
        },
        {
          "code": "Bank Panin Dubai Syariah",
          "name": "PT Bank Panin Dubai Syariah"
        },
        {
          "code": "Bank China Construction Bank Indonesia Tbk",
          "name": "PT Bank China Construction Bank Indonesia Tbk"
        },
        {
          "code": "PT BPD Banten Tbk",
          "name": "PT BPD Banten Tbk"
        },
        {
          "code": "Indonesia Eximbank",
          "name": "Indonesia Eximbank"
        },
        {
          "code": "Bank Shinhan Indonesia",
          "name": "PT Bank Shinhan Indonesia"
        },
        {
          "code": "Bank QNB Indonesia Tbk",
          "name": "PT Bank QNB Indonesia Tbk"
        },
        {
          "code": "Bank MNC Internasional Tbk",
          "name": "PT Bank MNC Internasional Tbk"
        },
        {
          "code": "Bank Oke Indonesia",
          "name": "PT Bank Oke Indonesia"
        },
        {
          "code": "Bank Amar Indonesia",
          "name": "PT Bank Amar Indonesia"
        },
        {
          "code": "Bank Mandiri Taspen",
          "name": "PT Bank Mandiri Taspen"
        },
        {
          "code": "Jalin Pembayaran Nusantara (Jalin)",
          "name": "Jalin Pembayaran Nusantara (Jalin)"
        },
        {
          "code": "Bank Indonesia",
          "name": "Bank Indonesia"
        },
        {
          "code": "Bank Jtrust Indonesia Tbk",
          "name": "PT Bank Jtrust Indonesia Tbk"
        },
        {
          "code": "BPD Sumsel Dan Babel Unit Usaha Syariah",
          "name": "PT BPD Sumsel Dan Babel Unit Usaha Syariah"
        },
        {
          "code": "BPD Sulawesi Tengah",
          "name": "PT BPD Sulawesi Tengah"
        },
        {
          "code": "Bank Pembangunan Daerah Jawa Barat dan Banten Tbk",
          "name": "PT Bank Pembangunan Daerah Jawa Barat dan Banten Tbk"
        },
        {
          "code": "Bank Sinarmas Unit Usaha Syariah",
          "name": "PT Bank Sinarmas Unit Usaha Syariah"
        },
        {
          "code": "Bank OCBC NISP Tbk Unit Usaha Syariah",
          "name": "PT Bank OCBC NISP Tbk Unit Usaha Syariah"
        },
        {
          "code": "Bank BPD DIY Unit Usaha Syariah",
          "name": "PT Bank BPD DIY Unit Usaha Syariah"
        },
        {
          "code": "Bank Pembangunan Daerah Jawa Tengah Unit Usaha Syariah",
          "name": "PT Bank Pembangunan Daerah Jawa Tengah Unit Usaha Syariah"
        }
      ],
      "Australia": [
        {
          "code": "CTBA",
          "name": "COMMONWEALTH BANK OF AUSTRALIA S"
        },
        {
          "code": "ANZB",
          "name": "AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED"
        },
        {
          "code": "WESTPAC BANKING CORPORATION",
          "name": "WESTPAC BANKING CORPORATION"
        }
      ],
      "Belgium": [
        {
          "code": "BBRU",
          "name": "ING BELGIUM NV/SA (FORMERLY BANK BRUSSELS LAMBERT SA)"
        },
        {
          "code": "DEUT - DEUTBEBEXXX",
          "name": "DEUTSCHE BANK A.G. - B"
        },
        {
          "code": "GEBA - GEBABEBB",
          "name": "BNP PARIBAS FORTIS (FORTIS BANK SA/NV)"
        },
        {
          "code": "BOFA - BOFABE3X",
          "name": "BANK OF AMERICA MERRILL LYNCH"
        },
        {
          "code": "DEUT - DEUTBEBE",
          "name": "DEUTSCHE BANK A.G."
        },
        {
          "code": "KRED",
          "name": "KBC BANK NV"
        }
      ],
      "Belarus": [
        {
          "code": "PJCB",
          "name": "PRIORBANK"
        },
        {
          "code": "MMBN",
          "name": "BANK DABRABYT JSC"
        }
      ],
      "Chile": [
        {
          "code": "CRED",
          "name": "BANCO DE CREDITO E INVERSIONES"
        }
      ],
      "China": [
        {
          "code": "CIBK",
          "name": "CHINA CITIC BANK"
        },
        {
          "code": "CMBCCNBS281",
          "name": "CHINA MERCHANTS BANK"
        }
      ],
      "Germany": [
        {
          "code": "DEUT ",
          "name": "DEUTSCHE BANK AG"
        },
        {
          "code": "HYVE - HYVEDEMM",
          "name": "UNICREDIT BANK AG (HYPOVEREINSBANK)"
        },
        {
          "code": "HYVE - HYVEDEMMXXX",
          "name": "UNICREDIT BANK AG (HYPOVEREINSBANK) - B"
        },
        {
          "code": "DRES",
          "name": "COMMERZBANK AG (FORMERLY DRESDNER BANK AG)"
        }
      ],
      "Estonia": [
        {
          "code": "HABA",
          "name": "SWEDBANK AS"
        }
      ],
      "United Kingdom": [
        {
          "code": "BARC",
          "name": "BARCLAYS BANK PLC"
        },
        {
          "code": "LOYD",
          "name": "Lloyds Bank plc"
        },
        {
          "code": "B0FAGB22",
          "name": "BANK OF AMERICA, N.A. LONDON"
        },
        {
          "code": "CHAS - CHASGB2L",
          "name": "JPMORGAN CHASE BANK, N.A."
        },
        {
          "code": "CITI - CITIGB2L",
          "name": "CITIBANK N.A."
        },
        {
          "code": "MIDL - MIDLGB22",
          "name": "HSBC Bank PLC"
        },
        {
          "code": "NWBK",
          "name": "National Westminster Bank"
        },
        {
          "code": "HBUK",
          "name": "HSBC UK BANK PLC"
        },
        {
          "code": "ISBK",
          "name": "TURKIYE IS BANKASI A.S."
        },
        {
          "code": "SILICON VALLEY BANK",
          "name": "SILICON VALLEY BANK"
        }
      ],
      "Hong Kong, SAR China": [
        {
          "code": "BOTK",
          "name": "MUFG BANK, LTD."
        },
        {
          "code": "SCBL - SCBLHKHH",
          "name": "STANDARD CHARTERED BANK (HONG KONG) LIMITED - B"
        },
        {
          "code": "CITI - CITIHKHX",
          "name": "CITIBANK N.A."
        },
        {
          "code": "HSBC - HSBCHKHHHKH",
          "name": "HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED"
        },
        {
          "code": "SCBL - SCBLHKHHXXX",
          "name": "STANDARD CHARTERED BANK (HONG KONG) LIMITED"
        },
        {
          "code": "BBDA",
          "name": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED"
        }
      ],
      "India": [
        {
          "code": "SBIN",
          "name": "STATE BANK OF INDIA"
        },
        {
          "code": "HDFC",
          "name": "HDFC BANK LIMITED"
        },
        {
          "code": "DEUT - DEUTINBB",
          "name": "DEUTSCHE BANK AG"
        },
        {
          "code": "DEUT - DEUTINBBDEL",
          "name": "DEUTSCHE BANK AG - B"
        },
        {
          "code": "SCBL - SCBLINBB",
          "name": "STANDARD CHARTERED BANK - B"
        },
        {
          "code": "SCBL - SCBLINBBXXX",
          "name": "STANDARD CHARTERED BANK"
        },
        {
          "code": "HSBC - HSBCINBB",
          "name": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED"
        }
      ],
      "Italy": [
        {
          "code": "BLOP",
          "name": "UBI BANCA S.P.A."
        },
        {
          "code": "DEUTSCHE BANK S.P.A.",
          "name": "DEUTSCHE BANK S.P.A."
        },
        {
          "code": "BCIT - BCITITMM",
          "name": "INTESA SANPAOLO SPA - B"
        },
        {
          "code": "BCIT - BCITITMMXXX",
          "name": "INTESA SANPAOLO SPA"
        }
      ],
      "Singapore": [
        {
          "code": "DEUTSCHE BANK AG",
          "name": "DEUTSCHE BANK AG"
        },
        {
          "code": "BAS",
          "name": "BANK OF AMERICA, N.A. SINGAPORE"
        },
        {
          "code": "CHASS",
          "name": "JPMorgan Chase Bank, N.A. Singapore Branch"
        },
        {
          "code": "CITI - CITISGSG",
          "name": "CITIBANK,N.A."
        },
        {
          "code": "CITI - CITISGSGGCB",
          "name": "CITIBANK SINGAPORE LTD"
        },
        {
          "code": "DBSS - DBSSSGSG",
          "name": "DBS BANK LTD."
        },
        {
          "code": "DBSS - DBSSSGSGXXX",
          "name": "DBS BANK LTD. - B"
        },
        {
          "code": "HSBC - HSBCSGSG",
          "name": "THE HONGKONG AND SHANGHAI BANKIN"
        },
        {
          "code": "COBA",
          "name": "COMMERZBANK AG"
        },
        {
          "code": "OCBC",
          "name": "OVERSEA-CHINESE BANKING CORPORAT"
        },
        {
          "code": "United Overseas Bank Limited",
          "name": "United Overseas Bank Limited"
        }
      ],
      "Ireland": [
        {
          "code": "JPMORGAN BANK (IRELAND) PLC",
          "name": "JPMORGAN BANK (IRELAND) PLC"
        },
        {
          "code": "CITI - CITIIE2X",
          "name": "CITIBANK EUROPE PLC"
        },
        {
          "code": "JPMRGN LUX",
          "name": "JPMORGAN BANK LUXEMBOURG S.A., DUBLIN BRANCH"
        }
      ],
      "Malaysia": [
        {
          "code": "STANDARD CHARTERED BANK MALAYSIA BERHAD",
          "name": "STANDARD CHARTERED BANK MALAYSIA BERHAD"
        },
        {
          "code": "RHBBB",
          "name": "RHB BANK BERHAD"
        },
        {
          "code": "HBMB",
          "name": "HSBC Bank Malaysia Berhad"
        }
      ],
      "Spain": [
        {
          "code": "DEUTSCHE BANK SOCIEDAD ANONIMA ESPANOLA",
          "name": "DEUTSCHE BANK SOCIEDAD ANONIMA ESPANOLA"
        },
        {
          "code": "CAIX - CAIXESBBXX",
          "name": "CAIXABANK, S.A. - B"
        },
        {
          "code": "CAIX - CAIXESBB",
          "name": "CAIXABANK, S.A."
        },
        {
          "code": "MIDL - MIDLESMM",
          "name": "HSBC FRANCE, SUCURSAL EN ESPANA"
        }
      ],
      "Netherlands": [
        {
          "code": "DEUTNL2A",
          "name": "DEUTSCHE BANK AG"
        }
      ],
      "Thailand": [
        {
          "code": "BBPCL",
          "name": "BANGKOK BANK PUBLIC COMPANY LIMITED"
        },
        {
          "code": "CITI - CITITHBX",
          "name": "CITIBANK N.A."
        },
        {
          "code": "SIAM COMMERCIAL BANK PCL., THE",
          "name": "SIAM COMMERCIAL BANK PCL., THE"
        }
      ],
      "Finland": [
        {
          "code": "DABA",
          "name": "DANSKE BANK A/S"
        },
        {
          "code": "NORDEA BANK ABP",
          "name": "NORDEA BANK ABP"
        }
      ],
      "France": [
        {
          "code": "CCBP",
          "name": "BANQUE POPULAIRE GRAND OUEST"
        },
        {
          "code": "BNPA - BNPAFRPP",
          "name": "BNP-PARIBAS SA (FORMERLY BANQUE"
        },
        {
          "code": "BNPA - BNPAFRPPPXV",
          "name": "BNP-PARIBAS SA (FORMERLY BANQUE NATIONALE DE PARIS S.A.)"
        },
        {
          "code": "CMCI",
          "name": "CM - CIC BANQUES"
        }
      ],
      "Cyprus": [
        {
          "code": "SOGECY2N",
          "name": "SOCIETE GENERALE CYPRUS LIMITED"
        }
      ],
      "United States of America": [
        {
          "code": "Truist Bank - BRBTUS33",
          "name": "Truist Bank"
        },
        {
          "code": "CHAS - CHASUS33XXX",
          "name": "JPMORGAN CHASE BANK, N.A."
        },
        {
          "code": "BOFA - BOFAUS3N",
          "name": "BANK OF AMERICA, N.A."
        },
        {
          "code": "CHAS - CHASUS33",
          "name": "JPMORGAN CHASE BANK, N.A. - B"
        },
        {
          "code": "CITI - CITIUS33",
          "name": "CITIBANK N.A."
        },
        {
          "code": "WFBI - WFBIUS6S",
          "name": "Wells Fargo Bank"
        },
        {
          "code": "WFBI - WFBIUS6WFFX",
          "name": "WELLS FARGO BANK NA"
        },
        {
          "code": "MRMD",
          "name": "Hsbc Bank Usa, N.A."
        },
        {
          "code": "BKTR",
          "name": "DEUTSCHE BANK TRUST COMPANY AMERICAS"
        },
        {
          "code": "MNBD",
          "name": "COMERICA BANK"
        },
        {
          "code": "SVBK",
          "name": "SILICON VALLEY BANK"
        },
        {
          "code": "PNC BANK, N.A.",
          "name": "PNC BANK, N.A."
        }
      ],
      "Taiwan, Republic of China": [
        {
          "code": "UWCB",
          "name": "Cathay United Bank"
        },
        {
          "code": "ICBC",
          "name": "MEGA INTERNATIONAL COMMERCIAL BANK CO., LTD."
        }
      ],
      "United Arab Emirates": [
        {
          "code": "NBAD - NBADAEAA",
          "name": "FIRST ABU DHABI BANK PJSC - B"
        },
        {
          "code": "NBAD - NBADAEAAXXX",
          "name": "FIRST ABU DHABI BANK PJSC"
        },
        {
          "code": "EBIL",
          "name": "Emirates Nbd Bank Pjsc"
        }
      ],
      "Bangladesh": [
        {
          "code": "EBLD - EBLDBDDH",
          "name": "EASTERN BANK LTD. - B"
        },
        {
          "code": "CITI - CITIBDDX",
          "name": "CITIBANK N.A."
        },
        {
          "code": "EBLD - EBLDBDDHXXX",
          "name": "EASTERN BANK LTD."
        }
      ],
      "Switzerland": [
        {
          "code": "CRES - CRESCHZZ",
          "name": "CREDIT SUISSE (SCHWEIZ) AG"
        },
        {
          "code": "CRES - CRESCHZZ80A",
          "name": "CREDIT SUISSE AG"
        }
      ],
      "Czech Republic": [
        {
          "code": "GEBA - GEBACZPP",
          "name": "BNP PARIBAS S.A., POBOCKA CESKA REPUBLIKA"
        },
        {
          "code": "PMBP",
          "name": "PPF BANKA A.S."
        }
      ],
      "Sri Lanka": [
        {
          "code": "SCBL - SCBLLKLX",
          "name": "STANDARD CHARTERED BANK"
        }
      ],
      "Morocco": [
        {
          "code": "BCMA - BCMAMAMC",
          "name": "ATTIJARIWAFA BANK - B"
        },
        {
          "code": "BCMA - BCMAMAMCXXX",
          "name": "ATTIJARIWAFA BANK"
        },
        {
          "code": "BMCI",
          "name": "BANQUE MAROCAINE POUR LE COMMERCE ET LINDUSTRIE"
        }
      ],
      "Macao, SAR China": [
        {
          "code": "HSBC - HSBCMOMX",
          "name": "THE HONGKONG AND SHANGHAI BANKING CORPORATION LIMITED"
        },
        {
          "code": "HSBC - HSBCMOMXXXX",
          "name": "HSBC LIMITED"
        }
      ],
      "New Caledonia": [
        {
          "code": "BNPA - BNPANCNX",
          "name": "BNP PARIBAS NOUVELLE CALEDONIE NOUMEA"
        }
      ],
      "Pakistan": [
        {
          "code": "CITI - CITIPKKX",
          "name": "CITIBANK N.A."
        }
      ],
      "Romania": [
        {
          "code": "INGB - INGBROBU",
          "name": "ING BANK N.V., BUCHAREST BRANCH"
        }
      ],
      "Serbia": [
        {
          "code": "DBDB - DBDBRSBG",
          "name": "BANCA INTESA AD, BEOGRAD - B"
        },
        {
          "code": "DBDB - DBDBRSBGXXX",
          "name": "BANCA INTESA AD, BEOGRAD"
        }
      ],
      "Slovakia": [
        {
          "code": "INGB - INGBSKBX",
          "name": "ING BANK N.V., POBOCKA ZAHR, BANKY"
        }
      ],
      "Luxembourg": [
        {
          "code": "CHAS - CHASLULX",
          "name": "JPMORGAN BANK LUXEMBOURG S.A."
        },
        {
          "code": "BCEE",
          "name": "BANQUE ET CAISSE D EPARGNE DE L ETAT"
        },
        {
          "code": "LU",
          "name": "SOCIETE GENERALE LUXEMBOURG"
        }
      ],
      "New Zealand": [
        {
          "code": "BANK OF NEW ZEALAND - BKNZNZ22",
          "name": "BANK OF NEW ZEALAND"
        },
        {
          "code": "BANK OF NEW ZEALAND - BKNZNZ22100",
          "name": "BANK OF NEW ZEALAND - B"
        }
      ],
      "Croatia": [
        {
          "code": "ZABA - ZABAHR2X",
          "name": "ZAGREBACKA BANKA DD"
        },
        {
          "code": "ZABA - ZABAHR2XXXX",
          "name": "ZAGREBACKA BANKA DD - B"
        }
      ],
      "Hungary": [
        {
          "code": "BNPA - BNPAHUHX",
          "name": "BNP PARIBAS, HUNGARY BRANCH"
        }
      ],
      "Andorra": [
        {
          "code": "CRDA",
          "name": "CREDIT ANDORRA,S.A."
        }
      ],
      "Armenia": [
        {
          "code": "ASHB",
          "name": "ARDSHINBANK CJSC"
        }
      ],
      "Bosnia and Herzegovina": [
        {
          "code": "UNCR",
          "name": "UNICREDIT BANK"
        }
      ],
      "Brunei Darussalam": [
        {
          "code": "BIBD",
          "name": "BANK ISLAM BRUNEI DARUSSALAM BERHAD"
        }
      ],
      "Ethiopia": [
        {
          "code": "CBET",
          "name": "COMMERCIAL BANK OF ETHIOPIA"
        }
      ],
      "Jordan": [
        {
          "code": "JKBA",
          "name": "JORDAN KUWAIT BANK"
        }
      ],
      "Lebanon": [
        {
          "code": "AUDB",
          "name": "BANK AUDI S.A.L."
        }
      ],
      "Norway": [
        {
          "code": "DNBA",
          "name": "DNB BANK ASA"
        }
      ],
      "Portugal": [
        {
          "code": "BBPI",
          "name": "BANCO BPI SA"
        },
        {
          "code": "BCOM",
          "name": "BANCO COMERCIAL PORTUGUES"
        }
      ],
      "Qatar": [
        {
          "code": "BBME",
          "name": "HSBC BANK MIDDLE EAST LIMITED"
        }
      ],
      "Russian Federation": [
        {
          "code": "IMBK",
          "name": "UNICREDIT BANK AO"
        },
        {
          "code": "MBRD",
          "name": "MTS BANK"
        }
      ],
      "Canada": [
        {
          "code": "ROYC",
          "name": "ROYAL BANK OF CANADA"
        }
      ],
      "Liechtenstein": [
        {
          "code": "LILA",
          "name": "LIECHTENSTEINISCHE LANDESBANK AKTIENGESELLSCHAFT"
        }
      ],
      "Poland": [
        {
          "code": "PKOP",
          "name": "BANK POLSKA KASA OPIEKI SA - BANK PEKAO SA"
        },
        {
          "code": "PPAB",
          "name": "BNP PARIBAS BANK POLSKA S.A."
        }
      ],
      "Turkey": [
        {
          "code": "TCZB",
          "name": "TURKIYE CUMHURIYETI ZIRAAT BANKASI A.S."
        },
        {
          "code": "TGBA",
          "name": "TURKIYE GARANTI BANKASI A.S."
        },
        {
          "code": "HSBC TRK",
          "name": "HSBC BANK A.S."
        }
      ],
      "Uruguay": [
        {
          "code": "BROU",
          "name": "BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY"
        }
      ],
      "Korea (South)": [
        {
          "code": "KOOKMIN BANK",
          "name": "KOOKMIN BANK"
        }
      ],
      "Sweden": [
        {
          "code": "SKANDINAVISKA ENSKILDA BANKEN",
          "name": "SKANDINAVISKA ENSKILDA BANKEN"
        }
      ],
      "Egypt": [
        {
          "code": "HSBC EGP",
          "name": "HSBC BANK EGYPT S.A.E"
        }
      ]
    };
      

    const repo = dataSource.getRepository(Bank);
    const countryRepo = dataSource.getRepository(Country);


    for (const [countryName, data] of Object.entries(arr)) {
        const country = await countryRepo.findOne({
            where: { name: countryName }
        });

        for (const obj of data) {
            await repo.save(
                repo.create({
                    code : obj.code,
                    name: obj.name,
                    country : {
                        id : country!!.id
                    }
                })
            )
        }
    
        console.log(`✅ Seeded ${countryName} (${data.length})`);
    }

    console.log('✅ Bank seeded');
}