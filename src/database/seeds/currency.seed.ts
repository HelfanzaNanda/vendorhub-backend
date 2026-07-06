import { Country } from '@modules/master/country/entities/country.entity';
import { Currency } from '@modules/master/currency/entities/currency.entity';
import { DataSource } from 'typeorm';

export async function seedCurrency(dataSource: DataSource) {
    const arr: { code: string; name: string }[] = [
        { "code": "AFN", "name": "Afghani" },
        { "code": "ALL", "name": "Lek" },
        { "code": "DZD", "name": "Algerian Dinar" },
        { "code": "AOA", "name": "Kwanza" },
        { "code": "ARS", "name": "Argentine Peso" },
        { "code": "AUD", "name": "Australian Dollar" },
        { "code": "AZN", "name": "Azerbaijani Manat" },
        { "code": "BHD", "name": "Bahraini Dinar" },
        { "code": "BDT", "name": "Taka" },
        { "code": "BBD", "name": "Barbados Dollar" },
        { "code": "BYN", "name": "Belarusian Ruble" },
        { "code": "BZD", "name": "Belize Dollar" },
        { "code": "BOB", "name": "Boliviano" },
        { "code": "BRL", "name": "Brazilian Real" },
        { "code": "BND", "name": "Brunei Dollar" },
        { "code": "BGN", "name": "Bulgarian Lev" },
        { "code": "CAD", "name": "Canadian Dollar" },
        { "code": "CLP", "name": "Chilean Peso" },
        { "code": "CNY", "name": "Yuan Renminbi" },
        { "code": "COP", "name": "Colombian Peso" },
        { "code": "CRC", "name": "Costa Rican Colón" },
        { "code": "HRK", "name": "Kuna" },
        { "code": "CZK", "name": "Czech Koruna" },
        { "code": "DKK", "name": "Danish Krone" },
        { "code": "EGP", "name": "Egyptian Pound" },
        { "code": "EUR", "name": "Euro" },
        { "code": "FJD", "name": "Fiji Dollar" },
        { "code": "GHS", "name": "Ghana Cedi" },
        { "code": "GTQ", "name": "Quetzal" },
        { "code": "HKD", "name": "Hong Kong Dollar" },
        { "code": "HUF", "name": "Forint" },
        { "code": "ISK", "name": "Iceland Krona" },
        { "code": "INR", "name": "Indian Rupee" },
        { "code": "IDR", "name": "Rupiah" },
        { "code": "IRR", "name": "Iranian Rial" },
        { "code": "IQD", "name": "Iraqi Dinar" },
        { "code": "ILS", "name": "New Israeli Shekel" },
        { "code": "JPY", "name": "Yen" },
        { "code": "JOD", "name": "Jordanian Dinar" },
        { "code": "KES", "name": "Kenyan Shilling" },
        { "code": "KRW", "name": "Won" },
        { "code": "KWD", "name": "Kuwaiti Dinar" },
        { "code": "LAK", "name": "Kip" },
        { "code": "LBP", "name": "Lebanese Pound" },
        { "code": "MYR", "name": "Malaysian Ringgit" },
        { "code": "MXN", "name": "Mexican Peso" },
        { "code": "MAD", "name": "Moroccan Dirham" },
        { "code": "NPR", "name": "Nepalese Rupee" },
        { "code": "NZD", "name": "New Zealand Dollar" },
        { "code": "NGN", "name": "Naira" },
        { "code": "NOK", "name": "Norwegian Krone" },
        { "code": "OMR", "name": "Rial Omani" },
        { "code": "PKR", "name": "Pakistan Rupee" },
        { "code": "PEN", "name": "Sol" },
        { "code": "PHP", "name": "Philippine Peso" },
        { "code": "PLN", "name": "Zloty" },
        { "code": "QAR", "name": "Qatari Rial" },
        { "code": "RON", "name": "Romanian Leu" },
        { "code": "RUB", "name": "Russian Ruble" },
        { "code": "SAR", "name": "Saudi Riyal" },
        { "code": "SGD", "name": "Singapore Dollar" },
        { "code": "ZAR", "name": "Rand" },
        { "code": "SEK", "name": "Swedish Krona" },
        { "code": "CHF", "name": "Swiss Franc" },
        { "code": "THB", "name": "Baht" },
        { "code": "TRY", "name": "Turkish Lira" },
        { "code": "UAH", "name": "Hryvnia" },
        { "code": "AED", "name": "UAE Dirham" },
        { "code": "GBP", "name": "Pound Sterling" },
        { "code": "USD", "name": "US Dollar" },
        { "code": "VND", "name": "Dong" },
        { "code": "XOF", "name": "CFA Franc BCEAO" },
        { "code": "XAF", "name": "CFA Franc BEAC" },
        { "code": "XPF", "name": "CFP Franc" },
        { "code": "YER", "name": "Yemeni Rial" },
        { "code": "ZMW", "name": "Zambian Kwacha" }
    ];

    const currencyRepo = dataSource.getRepository(Currency);

    for (const obj of arr) {
        await currencyRepo.save(
            currencyRepo.create({
                name: obj.name,
                code: obj.code
            }),
        );
        console.log(`✅ Seeded ${obj.name} (${obj.code})`);
    }

    console.log('✅ Currency seeded');
}
