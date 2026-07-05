import { Country } from '@modules/master/country/entities/country.entity';
import { Permission } from '@modules/uman/permission/entities/permission.entity';
import { DataSource } from 'typeorm';

const arr = [
    { name: 'Afghanistan', phoneCode: '93', iso2Code: 'AF', iso3Code: 'AFG' },
    { name: 'Albania', phoneCode: '355', iso2Code: 'AL', iso3Code: 'ALB' },
    { name: 'Algeria', phoneCode: '213', iso2Code: 'DZ', iso3Code: 'DZA' },
    {
        name: 'American Samoa',
        phoneCode: '1684',
        iso2Code: 'AS',
        iso3Code: 'ASM',
    },
    { name: 'Andorra', phoneCode: '376', iso2Code: 'AD', iso3Code: 'AND' },
    { name: 'Angola', phoneCode: '244', iso2Code: 'AO', iso3Code: 'AGO' },
    { name: 'Anguilla', phoneCode: '1264', iso2Code: 'AI', iso3Code: 'AIA' },
    { name: 'Antarctica', phoneCode: '672', iso2Code: 'AQ', iso3Code: 'ATA' },
    {
        name: 'Antigua and Barbuda',
        phoneCode: '1268',
        iso2Code: 'AG',
        iso3Code: 'ATG',
    },
    { name: 'Argentina', phoneCode: '54', iso2Code: 'AR', iso3Code: 'ARG' },
    { name: 'Armenia', phoneCode: '374', iso2Code: 'AM', iso3Code: 'ARM' },
    { name: 'Aruba', phoneCode: '297', iso2Code: 'AW', iso3Code: 'ABW' },
    { name: 'Australia', phoneCode: '61', iso2Code: 'AU', iso3Code: 'AUS' },
    { name: 'Austria', phoneCode: '43', iso2Code: 'AT', iso3Code: 'AUT' },
    { name: 'Azerbaijan', phoneCode: '994', iso2Code: 'AZ', iso3Code: 'AZE' },

    { name: 'Bangladesh', phoneCode: '880', iso2Code: 'BD', iso3Code: 'BGD' },
    { name: 'Belgium', phoneCode: '32', iso2Code: 'BE', iso3Code: 'BEL' },
    { name: 'Brazil', phoneCode: '55', iso2Code: 'BR', iso3Code: 'BRA' },
    { name: 'Canada', phoneCode: '1', iso2Code: 'CA', iso3Code: 'CAN' },
    { name: 'China', phoneCode: '86', iso2Code: 'CN', iso3Code: 'CHN' },
    { name: 'Denmark', phoneCode: '45', iso2Code: 'DK', iso3Code: 'DNK' },
    { name: 'Egypt', phoneCode: '20', iso2Code: 'EG', iso3Code: 'EGY' },
    { name: 'France', phoneCode: '33', iso2Code: 'FR', iso3Code: 'FRA' },
    { name: 'Germany', phoneCode: '49', iso2Code: 'DE', iso3Code: 'DEU' },
    {
        name: 'Hong Kong, SAR China',
        phoneCode: '852',
        iso2Code: 'HK',
        iso3Code: 'HKG',
    },
    { name: 'India', phoneCode: '91', iso2Code: 'IN', iso3Code: 'IND' },
    { name: 'Indonesia', phoneCode: '62', iso2Code: 'ID', iso3Code: 'IDN' },
    {
        name: 'Iran, Islamic Republic of',
        phoneCode: '98',
        iso2Code: 'IR',
        iso3Code: 'IRN',
    },
    { name: 'Iraq', phoneCode: '964', iso2Code: 'IQ', iso3Code: 'IRQ' },
    { name: 'Ireland', phoneCode: '353', iso2Code: 'IE', iso3Code: 'IRL' },
    { name: 'Israel', phoneCode: '972', iso2Code: 'IL', iso3Code: 'ISR' },
    { name: 'Italy', phoneCode: '39', iso2Code: 'IT', iso3Code: 'ITA' },
    { name: 'Japan', phoneCode: '81', iso2Code: 'JP', iso3Code: 'JPN' },
    { name: 'Malaysia', phoneCode: '60', iso2Code: 'MY', iso3Code: 'MYS' },
    { name: 'Mexico', phoneCode: '52', iso2Code: 'MX', iso3Code: 'MEX' },
    { name: 'Netherlands', phoneCode: '31', iso2Code: 'NL', iso3Code: 'NLD' },
    { name: 'New Zealand', phoneCode: '64', iso2Code: 'NZ', iso3Code: 'NZL' },
    { name: 'Nigeria', phoneCode: '234', iso2Code: 'NG', iso3Code: 'NGA' },
    { name: 'Norway', phoneCode: '47', iso2Code: 'NO', iso3Code: 'NOR' },
    { name: 'Pakistan', phoneCode: '92', iso2Code: 'PK', iso3Code: 'PAK' },
    { name: 'Philippines', phoneCode: '63', iso2Code: 'PH', iso3Code: 'PHL' },
    { name: 'Poland', phoneCode: '48', iso2Code: 'PL', iso3Code: 'POL' },
    { name: 'Qatar', phoneCode: '974', iso2Code: 'QA', iso3Code: 'QAT' },
    {
        name: 'Russian Federation',
        phoneCode: '7',
        iso2Code: 'RU',
        iso3Code: 'RUS',
    },
    { name: 'Saudi Arabia', phoneCode: '966', iso2Code: 'SA', iso3Code: 'SAU' },
    { name: 'Singapore', phoneCode: '65', iso2Code: 'SG', iso3Code: 'SGP' },
    { name: 'South Africa', phoneCode: '27', iso2Code: 'ZA', iso3Code: 'ZAF' },
    { name: 'Korea (South)', phoneCode: '82', iso2Code: 'KR', iso3Code: 'KOR' },
    { name: 'Spain', phoneCode: '34', iso2Code: 'ES', iso3Code: 'ESP' },
    { name: 'Sweden', phoneCode: '46', iso2Code: 'SE', iso3Code: 'SWE' },
    { name: 'Switzerland', phoneCode: '41', iso2Code: 'CH', iso3Code: 'CHE' },
    { name: 'Thailand', phoneCode: '66', iso2Code: 'TH', iso3Code: 'THA' },
    { name: 'Turkey', phoneCode: '90', iso2Code: 'TR', iso3Code: 'TUR' },
    { name: 'Ukraine', phoneCode: '380', iso2Code: 'UA', iso3Code: 'UKR' },
    {
        name: 'United Arab Emirates',
        phoneCode: '971',
        iso2Code: 'AE',
        iso3Code: 'ARE',
    },
    {
        name: 'United Kingdom',
        phoneCode: '44',
        iso2Code: 'GB',
        iso3Code: 'GBR',
    },
    {
        name: 'United States of America',
        phoneCode: '1',
        iso2Code: 'US',
        iso3Code: 'USA',
    },
    { name: 'Vietnam', phoneCode: '84', iso2Code: 'VN', iso3Code: 'VNM' },
    { name: 'Zimbabwe', phoneCode: '263', iso2Code: 'ZW', iso3Code: 'ZWE' },
];

export async function seedCountries(dataSource: DataSource) {
    const repo = dataSource.getRepository(Country);

    for (const obj of arr) {
        await repo.save(
            repo.create({
                name: obj.name,
                iso2Code: obj.iso2Code,
                iso3Code: obj.iso3Code,
                phoneCode: obj.phoneCode,
            }),
        );
    }

    console.log('✅ Countries seeded');
}
