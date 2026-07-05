import { Country } from '@modules/master/country/entities/country.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { DataSource } from 'typeorm';

export async function seedCurrency(dataSource: DataSource) {
    const arr: Record<string, Record<string, string>[]> = {
        Albania: [
            {
                code: 'ALL',
                name: 'Lek',
            },
        ],
        Algeria: [
            {
                code: 'DZD',
                name: 'Dinar',
            },
        ],
        'American Samoa': [
            {
                code: 'USD',
                name: 'US Dollar',
            },
        ],
        Angola: [
            {
                code: 'AOA',
                name: 'Kwanza',
            },
        ],
        Argentina: [
            {
                code: 'ARS',
                name: 'Peso',
            },
        ],
        Armenia: [
            {
                code: 'AMD',
                name: 'Dram',
            },
        ],
        Australia: [
            {
                code: 'AUD',
                name: 'Australia Dollar',
            },
        ],
        Austria: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Azerbaijan: [
            {
                code: 'AZN',
                name: 'Manat',
            },
        ],
        Bahrain: [
            {
                code: 'BHD',
                name: 'Dinar',
            },
        ],
        Barbados: [
            {
                code: 'BBD',
                name: 'Dollar',
            },
        ],
        Belarus: [
            {
                code: 'BYN',
                name: 'Rouble',
            },
        ],
        Belgium: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Bermuda: [
            {
                code: 'BMD',
                name: 'Dollar',
            },
        ],
        Bolivia: [
            {
                code: 'BOB',
                name: 'Boliviano',
            },
        ],
        'Bosnia and Herzegovina': [
            {
                code: 'BAM',
                name: 'Konvertibilna marka',
            },
        ],
        Botswana: [
            {
                code: 'BWP',
                name: 'Pula',
            },
        ],
        Brazil: [
            {
                code: 'BRL',
                name: 'Real',
            },
        ],
        Bulgaria: [
            {
                code: 'BGN',
                name: 'Lev',
            },
        ],
        Cambodia: [
            {
                code: 'KHR',
                name: 'Riel',
            },
        ],
        Cameroon: [
            {
                code: 'XAF',
                name: 'Cfa franc beac',
            },
        ],
        Canada: [
            {
                code: 'CAD',
                name: 'Dollar',
            },
        ],
        'Cape Verde': [
            {
                code: 'CVE',
                name: 'Escudo',
            },
        ],
        'Cayman Islands': [
            {
                code: 'KYD',
                name: 'Dollar',
            },
        ],
        Chad: [
            {
                code: 'XAF',
                name: 'Cfa franc beac',
            },
        ],
        Chile: [
            {
                code: 'CLP',
                name: 'Peso',
            },
        ],
        China: [
            {
                code: 'CNY',
                name: 'Yuan',
            },
        ],
        Colombia: [
            {
                code: 'COP',
                name: 'Peso',
            },
        ],
        'Congo (Brazzaville)': [
            {
                code: 'XAF',
                name: 'Cfa franc beac',
            },
        ],
        'Congo, (Kinshasa)': [
            {
                code: 'CDF',
                name: 'Franc',
            },
        ],
        'Costa Rica': [
            {
                code: 'CRC',
                name: 'Colon',
            },
        ],
        Croatia: [
            {
                code: 'HRK',
                name: 'Kuna',
            },
        ],
        Cyprus: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'Czech Republic': [
            {
                code: 'CZK',
                name: 'Koruna',
            },
        ],
        "Côte d'Ivoire": [
            {
                code: 'XOF',
                name: 'Cfa franc bceao',
            },
        ],
        Denmark: [
            {
                code: 'DKK',
                name: 'Kroner',
            },
        ],
        'Dominican Republic': [
            {
                code: 'DOP',
                name: 'Peso',
            },
        ],
        Ecuador: [
            {
                code: 'USD',
                name: 'Dollar',
            },
        ],
        Egypt: [
            {
                code: 'EGP',
                name: 'Pound',
            },
        ],
        'El Salvador': [
            {
                code: 'USD',
                name: 'Dollar',
            },
        ],
        'Equatorial Guinea': [
            {
                code: 'XAF',
                name: 'Cfa franc beac',
            },
        ],
        Estonia: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Ethiopia: [
            {
                code: 'ETB',
                name: 'Birr',
            },
        ],
        Fiji: [
            {
                code: 'FJD',
                name: 'Dollar',
            },
        ],
        Finland: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        France: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Gabon: [
            {
                code: 'XAF',
                name: 'Cfa franc beac',
            },
        ],
        Georgia: [
            {
                code: 'GEL',
                name: 'Lari',
            },
        ],
        Germany: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Ghana: [
            {
                code: 'GHS',
                name: 'Cedi',
            },
        ],
        Gibraltar: [
            {
                code: 'GIP',
                name: 'Pound',
            },
        ],
        Greece: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Greenland: [
            {
                code: 'DKK',
                name: 'Danish krone',
            },
        ],
        Guatemala: [
            {
                code: 'GTQ',
                name: 'Quetzal',
            },
        ],
        Guernsey: [
            {
                code: 'GBP',
                name: 'British pound sterling',
            },
        ],
        Guyana: [
            {
                code: 'GYD',
                name: 'Dollar',
            },
        ],
        Honduras: [
            {
                code: 'HNL',
                name: 'Lempira',
            },
        ],
        'Hong Kong, SAR China': [
            {
                code: 'HKD',
                name: 'Dollar',
            },
        ],
        Hungary: [
            {
                code: 'HUF',
                name: 'Forint',
            },
        ],
        Iceland: [
            {
                code: 'ISK',
                name: 'Krona',
            },
        ],
        India: [
            {
                code: 'INR',
                name: 'Rupee',
            },
        ],
        Indonesia: [
            {
                code: 'IDR',
                name: 'Rupiah',
            },
        ],
        Iraq: [
            {
                code: 'IQD',
                name: 'Dinar',
            },
        ],
        Ireland: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'Isle of Man': [
            {
                code: 'IMP',
                name: 'Pound',
            },
        ],
        Israel: [
            {
                code: 'ILS',
                name: 'Shekel',
            },
        ],
        Italy: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Jamaica: [
            {
                code: 'JMD',
                name: 'Dollar',
            },
        ],
        Japan: [
            {
                code: 'JPY',
                name: 'Yen',
            },
        ],
        Jersey: [
            {
                code: 'GBP',
                name: 'British pound sterling',
            },
        ],
        Jordan: [
            {
                code: 'JOD',
                name: 'Dinar',
            },
        ],
        Kazakhstan: [
            {
                code: 'KZT',
                name: 'Tenge',
            },
        ],
        Kenya: [
            {
                code: 'KES',
                name: 'Shilling',
            },
        ],
        'Korea (North)': [
            {
                code: 'KRW',
                name: 'Won',
            },
        ],
        Kuwait: [
            {
                code: 'KWD',
                name: 'Dinar',
            },
        ],
        Kyrgyzstan: [
            {
                code: 'KGS',
                name: 'Som',
            },
        ],
        'Lao PDR': [
            {
                code: 'LAK',
                name: 'Kip',
            },
        ],
        Latvia: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Lebanon: [
            {
                code: 'LBP',
                name: 'Pound',
            },
        ],
        Libya: [
            {
                code: 'LYD',
                name: 'Dinar',
            },
        ],
        Liechtenstein: [
            {
                code: 'CHF',
                name: 'Franc',
            },
        ],
        Lithuania: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Luxembourg: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'Macao, SAR China': [
            {
                code: 'MOP',
                name: 'Pataca',
            },
        ],
        'Macedonia, Republic of': [
            {
                code: 'MKD',
                name: 'Denar',
            },
        ],
        Madagascar: [
            {
                code: 'MGA',
                name: 'Ariary',
            },
        ],
        Malawi: [
            {
                code: 'MWK',
                name: 'Kwacha',
            },
        ],
        Malaysia: [
            {
                code: 'MYR',
                name: 'Ringgit',
            },
        ],
        Maldives: [
            {
                code: 'MVR',
                name: 'Rufiyaa',
            },
        ],
        Malta: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Mauritania: [
            {
                code: 'MRU',
                name: 'Ouguiya',
            },
        ],
        Mauritius: [
            {
                code: 'MUR',
                name: 'Rupee',
            },
        ],
        Mexico: [
            {
                code: 'MXN',
                name: 'Peso',
            },
        ],
        Moldova: [
            {
                code: 'MDL',
                name: 'Leu',
            },
        ],
        Mongolia: [
            {
                code: 'MNT',
                name: 'Tugrik',
            },
        ],
        Montenegro: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Morocco: [
            {
                code: 'MAD',
                name: 'Dirham',
            },
        ],
        Mozambique: [
            {
                code: 'MZN',
                name: 'Metical',
            },
        ],
        Myanmar: [
            {
                code: 'MMK',
                name: 'Kyat',
            },
        ],
        Namibia: [
            {
                code: 'NAD',
                name: 'Dollar',
            },
        ],
        Netherlands: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'New Caledonia': [
            {
                code: 'XPF',
                name: 'Cfp franc',
            },
        ],
        'New Zealand': [
            {
                code: 'NZD',
                name: 'Dollar',
            },
        ],
        Nicaragua: [
            {
                code: 'NIO',
                name: 'Cordoba oro',
            },
        ],
        Nigeria: [
            {
                code: 'NGN',
                name: 'Naira',
            },
        ],
        Norway: [
            {
                code: 'NOK',
                name: 'Kroner',
            },
        ],
        Oman: [
            {
                code: 'OMR',
                name: 'Rial',
            },
        ],
        Pakistan: [
            {
                code: 'PKR',
                name: 'Rupee',
            },
        ],
        'Palestinian Territory': [
            {
                code: 'ILS, USD, and JOD',
                name: 'Shekel, dollar, and dinar',
            },
        ],
        Panama: [
            {
                code: 'PAB¿ and USD',
                name: 'Balboa¿ and dollar',
            },
        ],
        'Papua New Guinea': [
            {
                code: 'PGK',
                name: 'Kina',
            },
        ],
        Paraguay: [
            {
                code: 'PYG',
                name: 'Guarani',
            },
        ],
        Peru: [
            {
                code: 'PEN',
                name: 'Nuevo sol',
            },
        ],
        Philippines: [
            {
                code: 'PHP',
                name: 'Peso',
            },
        ],
        Poland: [
            {
                code: 'PLN',
                name: 'Zloty',
            },
        ],
        Portugal: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'Puerto Rico': [
            {
                code: 'USD',
                name: 'Dollar',
            },
        ],
        Qatar: [
            {
                code: 'QAR',
                name: 'Riyal',
            },
        ],
        Romania: [
            {
                code: 'RON',
                name: 'Leu',
            },
        ],
        'Russian Federation': [
            {
                code: 'RUB',
                name: 'Ruble',
            },
        ],
        Rwanda: [
            {
                code: 'RWF',
                name: 'Franc',
            },
        ],
        'Saint Lucia': [
            {
                code: 'XCD',
                name: 'Dollar',
            },
        ],
        'Saudi Arabia': [
            {
                code: 'SAR',
                name: 'Riyal',
            },
        ],
        Senegal: [
            {
                code: 'XOF',
                name: 'Cfa franc bceao',
            },
        ],
        Serbia: [
            {
                code: 'RSD',
                name: 'Dinar',
            },
        ],
        Singapore: [
            {
                code: 'SGD',
                name: 'Singapore Dollar',
            },
        ],
        Slovakia: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        Slovenia: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'South Africa': [
            {
                code: 'ZAR',
                name: 'Rand',
            },
        ],
        Spain: [
            {
                code: 'EUR',
                name: 'Euro',
            },
        ],
        'Sri Lanka': [
            {
                code: 'LKR',
                name: 'Rupee',
            },
        ],
        Swaziland: [
            {
                code: 'SZL',
                name: 'Lilangeni',
            },
        ],
        Sweden: [
            {
                code: 'SEK',
                name: 'Krona',
            },
        ],
        Switzerland: [
            {
                code: 'CHF',
                name: 'Franc',
            },
        ],
        'Taiwan, Republic of China': [
            {
                code: 'TWD',
                name: 'Dollar',
            },
        ],
        Tajikistan: [
            {
                code: 'TJS',
                name: 'Somoni',
            },
        ],
        'Tanzania, United Republic of': [
            {
                code: 'TZS',
                name: 'Shilling',
            },
        ],
        Thailand: [
            {
                code: 'THB',
                name: 'Baht',
            },
        ],
        'Timor-Leste': [
            {
                code: 'USD',
                name: 'Us dollar',
            },
        ],
        'Trinidad and Tobago': [
            {
                code: 'TTD',
                name: 'Dollar',
            },
        ],
        Tunisia: [
            {
                code: 'TND',
                name: 'Dinar',
            },
        ],
        Turkey: [
            {
                code: 'TRY',
                name: 'Lira',
            },
        ],
        Turkmenistan: [
            {
                code: 'TMT',
                name: 'Manat',
            },
        ],
        Uganda: [
            {
                code: 'UGX',
                name: 'Shilling',
            },
        ],
        Ukraine: [
            {
                code: 'UAH',
                name: 'Hryvnia',
            },
        ],
        'United Arab Emirates': [
            {
                code: 'AED',
                name: 'Dirham',
            },
        ],
        'United Kingdom': [
            {
                code: 'GBP',
                name: 'Pound Sterling',
            },
        ],
        'United States of America': [
            {
                code: 'USD',
                name: 'Dollar',
            },
        ],
        Uruguay: [
            {
                code: 'UYU',
                name: 'Peso',
            },
        ],
        Uzbekistan: [
            {
                code: 'UZS',
                name: 'Soum',
            },
        ],
        'Venezuela (Bolivarian Republic)': [
            {
                code: 'VEF',
                name: 'Bolivar',
            },
        ],
        'Viet Nam': [
            {
                code: 'VND',
                name: 'Dong',
            },
        ],
        Zambia: [
            {
                code: 'ZMW',
                name: 'Kwacha',
            },
        ],
        Zimbabwe: [
            {
                code: 'ZWD',
                name: 'Dollar',
            },
        ],
    };

    const countryRepo = dataSource.getRepository(Country);
    const currencyRepo = dataSource.getRepository(Currency);

    for (const [countryName, data] of Object.entries(arr)) {
        // 1️⃣ upsert country
        const country = await countryRepo.findOne({
            where: { name: countryName },
        });

        if (!country) {
            console.warn(`country ${countryName} does not exists`);
            continue;
        }

        for (const obj of data) {
            await currencyRepo.save(
                currencyRepo.create({
                    name: obj.name,
                    code: obj.code,
                    country: {
                        id: country.id,
                    },
                }),
            );
        }

        console.log(`✅ Seeded ${countryName} (${data.length} currencies)`);
    }

    console.log('✅ Currency seeded');
}
