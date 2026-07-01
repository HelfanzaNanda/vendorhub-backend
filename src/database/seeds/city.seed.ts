import { City } from "@modules/master/city/entities/city.entity";
import { Province } from "@modules/master/province/entities/province.entity";
import { DataSource } from "typeorm";

export async function seedCities(dataSource: DataSource) {

    const arr :  Record<string, string[]>  = {
      "Aargau": [
        "Aargau"
      ],
      "Aberdeenshire": [
        "Aberdeenshire"
      ],
      "Aceh": [
        "Kabupaten Aceh Barat",
        "Kabupaten Aceh Barat Daya",
        "Kabupaten Aceh Besar",
        "Kabupaten Aceh Jaya",
        "Kabupaten Aceh Selatan",
        "Kabupaten Aceh Singkil",
        "Kabupaten Aceh Tamiang",
        "Kabupaten Aceh Tengah",
        "Kabupaten Aceh Tenggara",
        "Kabupaten Aceh Timur",
        "Kabupaten Aceh Utara",
        "Kabupaten Bener Meriah",
        "Kabupaten Bireuen",
        "Kabupaten Gayo Lues",
        "Kabupaten Nagan Raya",
        "Kabupaten Pidie",
        "Kabupaten Pidie Jaya",
        "Kabupaten Simeulue",
        "Kota Banda Aceh",
        "Kota Langsa",
        "Kota Lhokseumawe",
        "Kota Sabang",
        "Kota Subulussalam"
      ],
      "Acre": [
        "Acre"
      ],
      "Adana": [
        "Adana"
      ],
      "Adigeja Republic": [
        "Adigeja Republic"
      ],
      "Adiyaman": [
        "Adiyaman"
      ],
      "Afyon": [
        "Afyon"
      ],
      "Aginsk Buryat Aut.Di": [
        "Aginsk Buryat Aut.di"
      ],
      "Agri": [
        "Agri"
      ],
      "Agriento": [
        "Agriento"
      ],
      "Aguascalientes": [
        "Aguascalientes"
      ],
      "Ahvenanmaa": [
        "Ahvenanmaa"
      ],
      "Aichi": [
        "Aichi"
      ],
      "Ain": [
        "Ain"
      ],
      "Aisne": [
        "Aisne"
      ],
      "Aitolia Kai Akarnan.": [
        "Aitolia kai Akarnan."
      ],
      "Ajdovscina": [
        "Ajdovscina"
      ],
      "Ajdov¹Èina": [
        "Ajdov¹èina"
      ],
      "Akershus County": [
        "Akershus County"
      ],
      "Akhaia": [
        "Akhaia"
      ],
      "Akita": [
        "Akita"
      ],
      "Akmolinskaia": [
        "Akmolinskaia"
      ],
      "Aksaray": [
        "Aksaray"
      ],
      "Aktubinskaia": [
        "Aktubinskaia"
      ],
      "Al Sharqia": [
        "Al Sharqia"
      ],
      "Alabama": [
        "Alabama"
      ],
      "Alagoas": [
        "Alagoas"
      ],
      "Alaska": [
        "Alaska"
      ],
      "Alava": [
        "Alava"
      ],
      "Alba": [
        "Alba"
      ],
      "Albacete": [
        "Albacete"
      ],
      "Alberta": [
        "Alberta"
      ],
      "Alentejo Central": [
        "Alentejo Central"
      ],
      "Alentejo Litoral": [
        "Alentejo Litoral"
      ],
      "Alessandria": [
        "Alessandria"
      ],
      "Alexandria": [
        "Alexandria"
      ],
      "Algarve": [
        "Algarve"
      ],
      "Alicante": [
        "Alicante"
      ],
      "Allier": [
        "Allier"
      ],
      "Almatynskaia": [
        "Almatynskaia"
      ],
      "Almeria": [
        "Almeria"
      ],
      "Alpes (Hautes)": [
        "Alpes (Hautes)"
      ],
      "Alpes (Hte-Provence)": [
        "Alpes (Hte-Provence)"
      ],
      "Alpes-Maritimes": [
        "Alpes-Maritimes"
      ],
      "Altay Territory": [
        "Altay Territory"
      ],
      "Alto Alentejo": [
        "Alto Alentejo"
      ],
      "Alto Tras-Os-Montes": [
        "Alto Tras-os-Montes"
      ],
      "Amapa": [
        "Amapa"
      ],
      "Amasya": [
        "Amasya"
      ],
      "Amazon": [
        "Amazon"
      ],
      "Amazonas": [
        "AMAZONAS"
      ],
      "American Samoa": [
        "American Samoa"
      ],
      "Amnat Charoen": [
        "Amnat Charoen"
      ],
      "Ancash": [
        "Ancash"
      ],
      "Ancona": [
        "Ancona"
      ],
      "Andaman And Nico.Is.": [
        "Andaman and Nico.Is."
      ],
      "Andhra Pradesh": [
        "Andhra Pradesh"
      ],
      "Ang Thong": [
        "Ang Thong"
      ],
      "Anglesey": [
        "Anglesey"
      ],
      "Angus/Forfarshire": [
        "Angus/Forfarshire"
      ],
      "Anhui": [
        "Anhui"
      ],
      "Ankara": [
        "Ankara"
      ],
      "Antalya": [
        "Antalya"
      ],
      "Antioquia": [
        "ANTIOQUIA"
      ],
      "Antrim": [
        "Antrim"
      ],
      "Antwerp": [
        "Antwerp"
      ],
      "Anzoategui": [
        "Anzoategui"
      ],
      "Aomori": [
        "Aomori"
      ],
      "Aosta": [
        "Aosta"
      ],
      "Apure": [
        "Apure"
      ],
      "Apurimac": [
        "Apurimac"
      ],
      "Arad": [
        "Arad"
      ],
      "Aragua": [
        "Aragua"
      ],
      "Arauca": [
        "ARAUCA"
      ],
      "Ardahan": [
        "Ardahan"
      ],
      "Ardeche": [
        "Ardeche"
      ],
      "Ardennes": [
        "Ardennes"
      ],
      "Arequipa": [
        "Arequipa"
      ],
      "Arezzo": [
        "Arezzo"
      ],
      "Arges": [
        "Arges"
      ],
      "Argolis": [
        "Argolis"
      ],
      "Argyllshire": [
        "Argyllshire"
      ],
      "Ariege": [
        "Ariege"
      ],
      "Arizona": [
        "Arizona"
      ],
      "Arkadhia": [
        "Arkadhia"
      ],
      "Arkansas": [
        "Arkansas"
      ],
      "Armagh": [
        "Armagh"
      ],
      "Arta": [
        "Arta"
      ],
      "Artvin": [
        "Artvin"
      ],
      "Arunachal Pradesh": [
        "Arunachal Pradesh"
      ],
      "Ascoli Piceno": [
        "Ascoli Piceno"
      ],
      "Assam": [
        "Assam"
      ],
      "Asti": [
        "Asti"
      ],
      "Asturias": [
        "Asturias"
      ],
      "Aswan": [
        "Aswan"
      ],
      "Asyut": [
        "Asyut"
      ],
      "Atlantico": [
        "ATLANTICO"
      ],
      "Attiki": [
        "Attiki"
      ],
      "Atyrauskaia": [
        "Atyrauskaia"
      ],
      "Aube": [
        "Aube"
      ],
      "Auckland": [
        "Auckland"
      ],
      "Aude": [
        "Aude"
      ],
      "Ausser-Rhoden": [
        "Ausser-Rhoden"
      ],
      "Aust Capital Terr": [
        "Aust Capital Terr"
      ],
      "Aust-Agder County": [
        "Aust-Agder County"
      ],
      "Ave": [
        "Ave"
      ],
      "Avellino": [
        "Avellino"
      ],
      "Aveyron": [
        "Aveyron"
      ],
      "Avila": [
        "Avila"
      ],
      "Ayacucho": [
        "Ayacucho"
      ],
      "Aydin": [
        "Aydin"
      ],
      "Ayrshire": [
        "Ayrshire"
      ],
      "Bacau": [
        "Bacau"
      ],
      "Bacs-Kiskun": [
        "Bacs-Kiskun"
      ],
      "Badajoz": [
        "Badajoz"
      ],
      "Baden-Wurttemberg": [
        "Baden-Wurttemberg"
      ],
      "Bahia": [
        "Bahia"
      ],
      "Baixo Alentejo": [
        "Baixo Alentejo"
      ],
      "Baixo Mondego": [
        "Baixo Mondego"
      ],
      "Baixo Vouga": [
        "Baixo Vouga"
      ],
      "Baja California": [
        "Baja California"
      ],
      "Baja California S": [
        "Baja California S"
      ],
      "Baleares": [
        "Baleares"
      ],
      "Bali": [
        "Kabupaten Badung",
        "Kabupaten Bangli",
        "Kabupaten Buleleng",
        "Kabupaten Gianyar",
        "Kabupaten Jembrana",
        "Kabupaten Karangasem",
        "Kabupaten Klungkung",
        "Kabupaten Tabanan",
        "Kota Denpasar"
      ],
      "Balikesir": [
        "Balikesir"
      ],
      "Banffshire": [
        "Banffshire"
      ],
      "Banten": [
        "Kabupaten Lebak",
        "Kabupaten Pandeglang",
        "Kabupaten Serang",
        "Kabupaten Tangerang",
        "Kota Cilegon",
        "Kota Serang",
        "Kota Tangerang",
        "Kota Tangerang Selatan"
      ],
      "Baranya": [
        "Baranya"
      ],
      "Barcelona": [
        "Barcelona"
      ],
      "Bari": [
        "Bari"
      ],
      "Barinas": [
        "Barinas"
      ],
      "Barletta Andria Tran": [
        "Barletta Andria Tran"
      ],
      "Bartin": [
        "Bartin"
      ],
      "Bas-Rhin": [
        "Bas-Rhin"
      ],
      "Basel Land": [
        "Basel Land"
      ],
      "Basel Stadt": [
        "Basel Stadt"
      ],
      "Bath&Nthestsomerset": [
        "Bath&NthEstSomerset"
      ],
      "Batman": [
        "Batman"
      ],
      "Bavaria": [
        "Bavaria"
      ],
      "Bay Of Plenty": [
        "Bay of Plenty"
      ],
      "Bayburt": [
        "Bayburt"
      ],
      "Bedfordshire": [
        "Bedfordshire"
      ],
      "Beheira": [
        "Beheira"
      ],
      "Beijing": [
        "Beijing"
      ],
      "Beira Interior Norte": [
        "Beira Interior Norte"
      ],
      "Beira Interior Sul": [
        "Beira Interior Sul"
      ],
      "Bekes": [
        "Bekes"
      ],
      "Bekescsaba": [
        "Bekescsaba"
      ],
      "Belluno": [
        "Belluno"
      ],
      "Beltinci": [
        "Beltinci"
      ],
      "Benedikt": [
        "Benedikt"
      ],
      "Benevento": [
        "Benevento"
      ],
      "Bengkulu": [
        "Kabupaten Bengkulu Selatan",
        "Kabupaten Bengkulu Tengah",
        "Kabupaten Bengkulu Utara",
        "Kabupaten Kaur",
        "Kabupaten Kepahiang",
        "Kabupaten Lebong",
        "Kabupaten Muko Muko",
        "Kabupaten Rejang Lebong",
        "Kabupaten Seluma",
        "Kota Bengkulu"
      ],
      "Beni Suef": [
        "Beni Suef"
      ],
      "Bergamo": [
        "Bergamo"
      ],
      "Berkshire": [
        "Berkshire"
      ],
      "Berlin": [
        "Berlin"
      ],
      "Bern": [
        "Bern"
      ],
      "Berwickshire": [
        "Berwickshire"
      ],
      "Bicol": [
        "Bicol"
      ],
      "Biella": [
        "Biella"
      ],
      "Bihar": [
        "Bihar"
      ],
      "Bihor": [
        "Bihor"
      ],
      "Bilecik": [
        "Bilecik"
      ],
      "Bingöl": [
        "Bingöl"
      ],
      "Bistrica Ob Sotli": [
        "Bistrica ob Sotli"
      ],
      "Bistrita-Nasaud": [
        "Bistrita-Nasaud"
      ],
      "Bitlis": [
        "Bitlis"
      ],
      "Bjelovarsko-Bilogors": [
        "Bjelovarsko-bilogors"
      ],
      "Bled": [
        "Bled"
      ],
      "Blekinge County": [
        "Blekinge County"
      ],
      "Bloke": [
        "Bloke"
      ],
      "Bogota": [
        "BOGOTA"
      ],
      "Bohinj": [
        "Bohinj"
      ],
      "Bolivar": [
        "Bolivar"
      ],
      "Bologna": [
        "Bologna"
      ],
      "Bolu": [
        "Bolu"
      ],
      "Bolzano": [
        "Bolzano"
      ],
      "Bonaire, Sint Eustatius And Saba": [
        "Bonaire, Sint Eustatius and Saba"
      ],
      "Borovnica": [
        "Borovnica"
      ],
      "Borsod-Abauj-Zemplen": [
        "Borsod-Abauj-Zemplen"
      ],
      "Botosani": [
        "Botosani"
      ],
      "Bouches-Du-Rhone": [
        "Bouches-du-Rhone"
      ],
      "Bovec": [
        "Bovec"
      ],
      "Boyaca": [
        "BOYACA"
      ],
      "Brabant": [
        "Brabant"
      ],
      "Brabant (Walloon)": [
        "Brabant (Walloon)"
      ],
      "Braila": [
        "Braila"
      ],
      "Brandenburg": [
        "Brandenburg"
      ],
      "Brasilia": [
        "Brasilia"
      ],
      "Braslovèe": [
        "Braslovèe"
      ],
      "Brasov": [
        "Brasov"
      ],
      "Bratislava": [
        "Bratislava"
      ],
      "Brda": [
        "Brda"
      ],
      "Brecknockshire": [
        "Brecknockshire"
      ],
      "Bremen": [
        "Bremen"
      ],
      "Brescia": [
        "Brescia"
      ],
      "Brezice": [
        "Brezice"
      ],
      "Brezovica": [
        "Brezovica"
      ],
      "Bre¾Ice": [
        "Bre¾ice"
      ],
      "Brindisi": [
        "Brindisi"
      ],
      "British Columbia": [
        "British Columbia"
      ],
      "Brussels (Capital)": [
        "Brussels (Capital)"
      ],
      "Buckinghamshire": [
        "Buckinghamshire"
      ],
      "Bucuresti": [
        "Bucuresti"
      ],
      "Budapest": [
        "Budapest"
      ],
      "Bueng Kan": [
        "Bueng Kan"
      ],
      "Buenos Aires": [
        "Buenos Aires"
      ],
      "Burdur": [
        "Burdur"
      ],
      "Burgas": [
        "Burgas"
      ],
      "Burgenland": [
        "Burgenland"
      ],
      "Burgos": [
        "Burgos"
      ],
      "Buriram": [
        "Buriram"
      ],
      "Bursa": [
        "Bursa"
      ],
      "Buryat Republic": [
        "Buryat Republic"
      ],
      "Busan": [
        "Busan"
      ],
      "Buskerud County": [
        "Buskerud County"
      ],
      "Buteshire": [
        "Buteshire"
      ],
      "Buzau": [
        "Buzau"
      ],
      "C.Moscow": [
        "c.Moscow"
      ],
      "C.St-Peterburg": [
        "c.St-Peterburg"
      ],
      "Caceres": [
        "Caceres"
      ],
      "Cadiz": [
        "Cadiz"
      ],
      "Caernarfonshire": [
        "Caernarfonshire"
      ],
      "Cagayan Valley": [
        "Cagayan Valley"
      ],
      "Cagliari": [
        "Cagliari"
      ],
      "Cairo": [
        "Cairo"
      ],
      "Caithness": [
        "Caithness"
      ],
      "Cajamarca": [
        "Cajamarca"
      ],
      "Calarasi": [
        "Calarasi"
      ],
      "Caldas": [
        "CALDAS"
      ],
      "California": [
        "California"
      ],
      "Caltanisetta": [
        "Caltanisetta"
      ],
      "Calvados": [
        "Calvados"
      ],
      "Cambodia": [
        "Cambodia"
      ],
      "Cambridgeshire": [
        "Cambridgeshire"
      ],
      "Campeche": [
        "Campeche"
      ],
      "Campobasso": [
        "Campobasso"
      ],
      "Canakkale": [
        "Canakkale"
      ],
      "Cankiri": [
        "Cankiri"
      ],
      "Cankova": [
        "Cankova"
      ],
      "Cantabria": [
        "Cantabria"
      ],
      "Cantal": [
        "Cantal"
      ],
      "Canterbury": [
        "Canterbury"
      ],
      "Capital Federal": [
        "Capital Federal"
      ],
      "Caqueta": [
        "CAQUETA"
      ],
      "Carabobo": [
        "Carabobo"
      ],
      "Caras-Severin": [
        "Caras-Severin"
      ],
      "Carbonia-Iglesias": [
        "Carbonia-Iglesias"
      ],
      "Cardiganshire": [
        "Cardiganshire"
      ],
      "Carinthia": [
        "Carinthia"
      ],
      "Carlow": [
        "Carlow"
      ],
      "Carmarthenshire": [
        "Carmarthenshire"
      ],
      "Casanare": [
        "CASANARE"
      ],
      "Caserta": [
        "Caserta"
      ],
      "Castellon": [
        "Castellon"
      ],
      "Catamarca": [
        "Catamarca"
      ],
      "Catania": [
        "Catania"
      ],
      "Catanzaro": [
        "Catanzaro"
      ],
      "Cauca": [
        "CAUCA"
      ],
      "Cavado": [
        "Cavado"
      ],
      "Cavan": [
        "Cavan"
      ],
      "Ceara": [
        "Ceara"
      ],
      "Celje": [
        "Celje"
      ],
      "Central": [
        "Central"
      ],
      "Central Jutland": [
        "Central Jutland"
      ],
      "Central Luzon": [
        "Central Luzon"
      ],
      "Central Mindanao": [
        "Central Mindanao"
      ],
      "Central Visayas": [
        "Central Visayas"
      ],
      "Cerklje Na Gorenjske": [
        "Cerklje na Gorenjske"
      ],
      "Cerknica": [
        "Cerknica"
      ],
      "Cerkno": [
        "Cerkno"
      ],
      "Cerkvenjak": [
        "Cerkvenjak"
      ],
      "Cesar": [
        "CESAR"
      ],
      "Chachoengsao": [
        "Chachoengsao"
      ],
      "Chaco": [
        "Chaco"
      ],
      "Chai Nat": [
        "Chai Nat"
      ],
      "Chaiyaphum": [
        "Chaiyaphum"
      ],
      "Chakassky Republic": [
        "Chakassky Republic"
      ],
      "Chandigarh": [
        "Chandigarh"
      ],
      "Chanthaburi": [
        "Chanthaburi"
      ],
      "Chanti-Mansyjsky Aut": [
        "Chanti-Mansyjsky Aut"
      ],
      "Charente": [
        "Charente"
      ],
      "Charente-Maritime": [
        "Charente-Maritime"
      ],
      "Chechenskaya Republ.": [
        "Chechenskaya Republ."
      ],
      "Cher": [
        "Cher"
      ],
      "Cherkas'Ka": [
        "Cherkas'ka"
      ],
      "Chernigivs'Ka": [
        "Chernigivs'ka"
      ],
      "Chernovits'Ka": [
        "Chernovits'ka"
      ],
      "Cheshire": [
        "Cheshire"
      ],
      "Chhattisgarh": [
        "Chhattisgarh"
      ],
      "Chiang Mai": [
        "Chiang Mai"
      ],
      "Chiang Rai": [
        "Chiang Rai"
      ],
      "Chiapas": [
        "Chiapas"
      ],
      "Chiba": [
        "Chiba"
      ],
      "Chieti": [
        "Chieti"
      ],
      "Chihuahua": [
        "Chihuahua"
      ],
      "Choco": [
        "CHOCO"
      ],
      "Chon Buri": [
        "Chon Buri"
      ],
      "Chong Qing": [
        "Chong Qing"
      ],
      "Chubut": [
        "Chubut"
      ],
      "Chukotka Auton. Dist": [
        "Chukotka Auton. dist"
      ],
      "Chumphon": [
        "Chumphon"
      ],
      "Chungcheong Buk Do": [
        "Chungcheong buk do"
      ],
      "Chungcheong Nam Do": [
        "Chungcheong nam do"
      ],
      "Chuvash Republic": [
        "Chuvash Republic"
      ],
      "Ciudad Real": [
        "Ciudad Real"
      ],
      "Clackmannanshire": [
        "Clackmannanshire"
      ],
      "Clare": [
        "Clare"
      ],
      "Cluj": [
        "Cluj"
      ],
      "Coahuila": [
        "Coahuila"
      ],
      "Cojedes": [
        "Cojedes"
      ],
      "Colima": [
        "Colima"
      ],
      "Colorado": [
        "Colorado"
      ],
      "Como": [
        "Como"
      ],
      "Connecticut": [
        "Connecticut",
        "Stamford"
      ],
      "Constanta": [
        "Constanta"
      ],
      "Cordoba": [
        "Cordoba"
      ],
      "Cork": [
        "Cork"
      ],
      "Cornwall": [
        "Cornwall"
      ],
      "Correze": [
        "Correze"
      ],
      "Corrientes": [
        "Corrientes"
      ],
      "Corse-Du-Nord": [
        "Corse-du-Nord"
      ],
      "Corse-Du-Sud": [
        "Corse-du-Sud"
      ],
      "Corum": [
        "Corum"
      ],
      "Cosenza": [
        "Cosenza"
      ],
      "Cote-D'Or": [
        "Cote-d'Or"
      ],
      "Cotes-D'Armor": [
        "Cotes-d'Armor"
      ],
      "Cova Da Beira": [
        "Cova da Beira"
      ],
      "Covasna": [
        "Covasna"
      ],
      "Cremona": [
        "Cremona"
      ],
      "Creuse": [
        "Creuse"
      ],
      "Crnomelj": [
        "Crnomelj"
      ],
      "Cromartyshire": [
        "Cromartyshire"
      ],
      "Crotone": [
        "Crotone"
      ],
      "Csongrad": [
        "Csongrad"
      ],
      "Cuenca": [
        "Cuenca"
      ],
      "Cumberland": [
        "Cumberland"
      ],
      "Cundinamarca": [
        "CUNDINAMARCA"
      ],
      "Cuneo": [
        "Cuneo"
      ],
      "Curacao": [
        "Curacao"
      ],
      "Cuzco": [
        "Cuzco"
      ],
      "D.O.M.-T.O.M.": [
        "D.O.M.-T.O.M."
      ],
      "DI Yogyakarta": [
        "Kabupaten Bantul",
        "Kabupaten Gunung Kidul",
        "Kabupaten Kulon Progo",
        "Kabupaten Sleman",
        "Kota Yogyakarta"
      ],
      "DKI Jakarta": [
        "Kabupaten Adm. Kepulauan Seribu",
        "Kota Adm. Jakarta Barat",
        "Kota Adm. Jakarta Pusat",
        "Kota Adm. Jakarta Selatan",
        "Kota Adm. Jakarta Timur",
        "Kota Adm. Jakarta Utara"
      ],
      "Dadra And Nagar Hav.": [
        "Dadra and Nagar Hav."
      ],
      "Daegu": [
        "Daegu"
      ],
      "Daejeon": [
        "Daejeon"
      ],
      "Dagestan Republic": [
        "Dagestan Republic"
      ],
      "Dakahlia": [
        "Dakahlia"
      ],
      "Dalarnas County": [
        "Dalarnas County"
      ],
      "Daman And Diu": [
        "Daman and Diu"
      ],
      "Damietta": [
        "Damietta"
      ],
      "Danish Capital Reg.": [
        "Danish Capital Reg."
      ],
      "Dao-Lafoes": [
        "Dao-Lafoes"
      ],
      "Debrecen": [
        "Debrecen"
      ],
      "Delaware": [
        "Delaware"
      ],
      "Delhi": [
        "Delhi"
      ],
      "Delta Amacuro": [
        "Delta Amacuro"
      ],
      "Denbighshire": [
        "Denbighshire"
      ],
      "Denizli": [
        "Denizli"
      ],
      "Derbyshire": [
        "Derbyshire"
      ],
      "Destrnik": [
        "Destrnik"
      ],
      "Devon": [
        "Devon"
      ],
      "Dhodhekanisos": [
        "Dhodhekanisos"
      ],
      "Dhrama": [
        "Dhrama"
      ],
      "Dimbovita": [
        "Dimbovita"
      ],
      "District Of Columbia": [
        "District of Columbia"
      ],
      "Distrito Federal": [
        "Distrito Federal"
      ],
      "Divaèa": [
        "Divaèa"
      ],
      "Diyarbakir": [
        "Diyarbakir"
      ],
      "Dnipropetrovs'Ka": [
        "Dnipropetrovs'ka"
      ],
      "Dobje": [
        "Dobje"
      ],
      "Dobrepolje": [
        "Dobrepolje"
      ],
      "Dobrna": [
        "Dobrna"
      ],
      "Dobrova-Polhov Grade": [
        "Dobrova-Polhov Grade"
      ],
      "Dobrovnik - Dobronak": [
        "Dobrovnik - Dobronak"
      ],
      "Doha": [
        "Doha"
      ],
      "Dol Pri Ljubljani": [
        "Dol pri Ljubljani"
      ],
      "Dolenjske Toplice": [
        "Dolenjske Toplice"
      ],
      "Dolj": [
        "Dolj"
      ],
      "Dolnoslaskie": [
        "dolnoslaskie"
      ],
      "Dom¾Ale": [
        "Dom¾ale"
      ],
      "Donegal": [
        "Donegal"
      ],
      "Donets'Ka": [
        "Donets'ka"
      ],
      "Dordogne": [
        "Dordogne"
      ],
      "Dornava": [
        "Dornava"
      ],
      "Dorset": [
        "Dorset"
      ],
      "Doubs": [
        "Doubs"
      ],
      "Douro": [
        "Douro"
      ],
      "Down": [
        "Down"
      ],
      "Dravograd": [
        "Dravograd"
      ],
      "Drenthe": [
        "Drenthe"
      ],
      "Drome": [
        "Drome"
      ],
      "Dubai": [
        "All"
      ],
      "Dublin": [
        "Dublin"
      ],
      "Dubrovacko-Neretvans": [
        "Dubrovacko-neretvans"
      ],
      "Dumfriesshire": [
        "Dumfriesshire"
      ],
      "Dunaujvaros": [
        "Dunaujvaros"
      ],
      "Dunbartonshire": [
        "Dunbartonshire"
      ],
      "Duplek": [
        "Duplek"
      ],
      "Durango": [
        "Durango"
      ],
      "Durham": [
        "Durham"
      ],
      "East Lothian": [
        "East Lothian"
      ],
      "East Sussex": [
        "East Sussex"
      ],
      "East Timor": [
        "East Timor"
      ],
      "Eastern Cape": [
        "Eastern Cape"
      ],
      "Eastern Finnland": [
        "Eastern Finnland"
      ],
      "Eastern Visayas": [
        "Eastern Visayas"
      ],
      "Edirne": [
        "Edirne"
      ],
      "Eger": [
        "Eger"
      ],
      "Ehime": [
        "Ehime"
      ],
      "Elazig": [
        "Elazig"
      ],
      "Enna": [
        "Enna"
      ],
      "Entre Douro E Vouga": [
        "Entre Douro e Vouga"
      ],
      "Entre Rios": [
        "Entre Rios"
      ],
      "Erzincan": [
        "Erzincan"
      ],
      "Erzurum": [
        "Erzurum"
      ],
      "Eskisehir": [
        "Eskisehir"
      ],
      "Espirito Santo": [
        "Espirito Santo"
      ],
      "Essex": [
        "Essex"
      ],
      "Essonne": [
        "Essonne"
      ],
      "Estado De Mexico": [
        "Estado de Mexico"
      ],
      "Eure": [
        "Eure"
      ],
      "Eure-Et-Loir": [
        "Eure-et-Loir"
      ],
      "European Union": [
        "European Union"
      ],
      "Evensky Auton.Distri": [
        "Evensky Auton.distri"
      ],
      "Evritania": [
        "Evritania"
      ],
      "Evros": [
        "Evros"
      ],
      "Evvoia": [
        "Evvoia"
      ],
      "Faiyum": [
        "Faiyum"
      ],
      "Falcon": [
        "Falcon"
      ],
      "Fejer": [
        "Fejer"
      ],
      "Fermanagh": [
        "Fermanagh"
      ],
      "Fermo": [
        "Fermo"
      ],
      "Ferrara": [
        "Ferrara"
      ],
      "Fife": [
        "Fife"
      ],
      "Finistere": [
        "Finistere"
      ],
      "Finnmark County": [
        "Finnmark County"
      ],
      "Fiume": [
        "Fiume"
      ],
      "Flevoland": [
        "Flevoland"
      ],
      "Flintshire": [
        "Flintshire"
      ],
      "Florence": [
        "Florence"
      ],
      "Florida": [
        "Florida"
      ],
      "Florina": [
        "Florina"
      ],
      "Foggia": [
        "Foggia"
      ],
      "Fokis": [
        "Fokis"
      ],
      "Forli/Cesana": [
        "Forli/Cesana"
      ],
      "Formosa": [
        "Formosa"
      ],
      "Free State": [
        "Free State"
      ],
      "Fribourg": [
        "Fribourg"
      ],
      "Friesland": [
        "Friesland"
      ],
      "Frosinone": [
        "Frosinone"
      ],
      "Fthiotis": [
        "Fthiotis"
      ],
      "Fu-Chien": [
        "Fu-chien"
      ],
      "Fujian": [
        "Fujian"
      ],
      "Fukui": [
        "Fukui"
      ],
      "Fukuoka": [
        "Fukuoka"
      ],
      "Fukushima": [
        "Fukushima"
      ],
      "Gaevleborg County": [
        "Gaevleborg County"
      ],
      "Galati": [
        "Galati"
      ],
      "Galway": [
        "Galway"
      ],
      "Gambilskaia": [
        "Gambilskaia"
      ],
      "Gangwon Do": [
        "Gangwon do"
      ],
      "Gansu": [
        "Gansu"
      ],
      "Gard": [
        "Gard"
      ],
      "Garonne (Haute)": [
        "Garonne (Haute)"
      ],
      "Gauteng": [
        "Gauteng"
      ],
      "Gaziantep": [
        "Gaziantep"
      ],
      "Gelderland": [
        "Gelderland"
      ],
      "Geneva": [
        "Geneva"
      ],
      "Genova": [
        "Genova"
      ],
      "Georgia": [
        "Georgia"
      ],
      "Gerona": [
        "Gerona"
      ],
      "Gers": [
        "Gers"
      ],
      "Gharbia": [
        "Gharbia"
      ],
      "Gifu": [
        "Gifu"
      ],
      "Giresun": [
        "Giresun"
      ],
      "Gironde": [
        "Gironde"
      ],
      "Giurgiu": [
        "Giurgiu"
      ],
      "Giza": [
        "Giza"
      ],
      "Glarus": [
        "Glarus"
      ],
      "Gloucestershire": [
        "Gloucestershire"
      ],
      "Goa": [
        "Goa"
      ],
      "Goias": [
        "Goias"
      ],
      "Gorenja Vas-Poljane": [
        "Gorenja vas-Poljane"
      ],
      "Gorizia": [
        "Gorizia"
      ],
      "Gori¹Nica": [
        "Gori¹nica"
      ],
      "Gorj": [
        "Gorj"
      ],
      "Gornja Radgona": [
        "Gornja Radgona"
      ],
      "Gornji Grad": [
        "Gornji Grad"
      ],
      "Gornji Petrovci": [
        "Gornji Petrovci"
      ],
      "Gorontalo": [
        "Kabupaten Boalemo",
        "Kabupaten Bone Bolango",
        "Kabupaten Gorontalo",
        "Kabupaten Gorontalo Utara",
        "Kabupaten Pahuwato",
        "Kota Gorontalo"
      ],
      "Gotland County": [
        "Gotland County"
      ],
      "Grad": [
        "Grad"
      ],
      "Grad Sofiya": [
        "Grad Sofiya"
      ],
      "Granada": [
        "Granada"
      ],
      "Grande Lisboa": [
        "Grande Lisboa"
      ],
      "Grande Porto": [
        "Grande Porto"
      ],
      "Graubuenden": [
        "Graubuenden"
      ],
      "Grevena": [
        "Grevena"
      ],
      "Groningen": [
        "Groningen"
      ],
      "Grosseto": [
        "Grosseto"
      ],
      "Grosuplje": [
        "Grosuplje"
      ],
      "Guadalajara": [
        "Guadalajara"
      ],
      "Guadeloupe": [
        "Guadeloupe"
      ],
      "Guainia": [
        "GUAINIA"
      ],
      "Guam": [
        "Guam"
      ],
      "Guanajuato": [
        "Guanajuato"
      ],
      "Guangdong": [
        "Guangdong"
      ],
      "Guangxi": [
        "Guangxi"
      ],
      "Guarico": [
        "Guarico"
      ],
      "Guaviare": [
        "GUAVIARE"
      ],
      "Guemueshane": [
        "Guemueshane"
      ],
      "Guerrero": [
        "Guerrero"
      ],
      "Guipuzcoa": [
        "Guipuzcoa"
      ],
      "Guizhou": [
        "Guizhou"
      ],
      "Gujarat": [
        "Gujarat"
      ],
      "Gunma": [
        "Gunma"
      ],
      "Guyane": [
        "Guyane"
      ],
      "Gwangju": [
        "Gwangju"
      ],
      "Gyeonggi Do": [
        "Gyeonggi do"
      ],
      "Gyeongsang Buk Do": [
        "Gyeongsang buk do"
      ],
      "Gyeongsang Nam Do": [
        "Gyeongsang nam do"
      ],
      "Gyor": [
        "Gyor"
      ],
      "Gyor-Moson-Sopron": [
        "Gyor-Moson-Sopron"
      ],
      "Haifa": [
        "Haifa"
      ],
      "Hainan": [
        "Hainan"
      ],
      "Hainaut": [
        "Hainaut"
      ],
      "Hajdina": [
        "Hajdina"
      ],
      "Hajdu-Bihar": [
        "Hajdu-Bihar"
      ],
      "Hakkari": [
        "Hakkari"
      ],
      "Halland County": [
        "Halland County"
      ],
      "Hamburg": [
        "Hamburg"
      ],
      "Hampshire": [
        "Hampshire"
      ],
      "Harghita": [
        "Harghita"
      ],
      "Harkivs'Ka": [
        "Harkivs'ka"
      ],
      "Haryana": [
        "Haryana"
      ],
      "Hatay": [
        "Hatay"
      ],
      "Haut-Rhin": [
        "Haut-Rhin"
      ],
      "Hauts-De-Seine": [
        "Hauts-de-Seine"
      ],
      "Hawaii": [
        "Hawaii"
      ],
      "Hawke´S Bay": [
        "Hawke´s Bay"
      ],
      "Hebei": [
        "Hebei"
      ],
      "Hedmark County": [
        "Hedmark County"
      ],
      "Heilongjiang": [
        "Heilongjiang"
      ],
      "Helsinki": [
        "HELSINKI"
      ],
      "Henan": [
        "Henan"
      ],
      "Herault": [
        "Herault"
      ],
      "Hereford And Worcs.": [
        "Hereford and Worcs."
      ],
      "Hersons'Ka": [
        "Hersons'ka"
      ],
      "Hertfordshire": [
        "Hertfordshire"
      ],
      "Hessen": [
        "Hessen"
      ],
      "Heves": [
        "Heves"
      ],
      "Hidalgo": [
        "Hidalgo"
      ],
      "Highlands-Altay Rep.": [
        "Highlands-Altay Rep."
      ],
      "Himachal Pradesh": [
        "Himachal Pradesh"
      ],
      "Hiroshima": [
        "Hiroshima"
      ],
      "Hmel'Nits'Ka": [
        "Hmel'nits'ka"
      ],
      "Hodmezovasarhely": [
        "Hodmezovasarhely"
      ],
      "Hodo¹ - Hodos": [
        "Hodo¹ - Hodos"
      ],
      "Hokkaido": [
        "Hokkaido"
      ],
      "Hong Kong Island": [
        "Hong Kong Island"
      ],
      "Hordaland County": [
        "Hordaland County"
      ],
      "Horjul": [
        "Horjul"
      ],
      "Hors-France": [
        "Hors-France"
      ],
      "Hoèe-Slivnica": [
        "Hoèe-Slivnica"
      ],
      "Hrastnik": [
        "Hrastnik"
      ],
      "Hrastnik Lasko": [
        "Hrastnik Lasko"
      ],
      "Hrpelje-Kozina": [
        "Hrpelje-Kozina"
      ],
      "Huancavelica": [
        "Huancavelica"
      ],
      "Huanuco": [
        "Huanuco"
      ],
      "Hubei": [
        "Hubei"
      ],
      "Huelva": [
        "Huelva"
      ],
      "Huesca": [
        "Huesca"
      ],
      "Huila": [
        "HUILA"
      ],
      "Hunan": [
        "Hunan"
      ],
      "Hunedoara": [
        "Hunedoara"
      ],
      "Huntingdonshire": [
        "Huntingdonshire"
      ],
      "Hyogo": [
        "Hyogo"
      ],
      "I - Iquique": [
        "I - Iquique"
      ],
      "Ialomita": [
        "Ialomita"
      ],
      "Iasi": [
        "Iasi"
      ],
      "Ibaraki": [
        "Ibaraki"
      ],
      "Ica": [
        "Ica"
      ],
      "Icel": [
        "Icel"
      ],
      "Idaho": [
        "Idaho"
      ],
      "Idrija": [
        "Idrija"
      ],
      "Ig": [
        "Ig"
      ],
      "Igdir": [
        "Igdir"
      ],
      "Ii - Antofagasta": [
        "II - Antofagasta"
      ],
      "Iii - Copiapo": [
        "III - Copiapo"
      ],
      "Ilfov": [
        "Ilfov"
      ],
      "Ilia": [
        "Ilia"
      ],
      "Ilirska Bistrica": [
        "Ilirska Bistrica"
      ],
      "Ille-Et-Vilaine": [
        "Ille-et-Vilaine"
      ],
      "Illinois": [
        "Illinois"
      ],
      "Ilocos": [
        "Ilocos"
      ],
      "Imathia": [
        "Imathia"
      ],
      "Imperia": [
        "Imperia"
      ],
      "Incheon": [
        "Incheon"
      ],
      "Indiana": [
        "Indiana"
      ],
      "Indre": [
        "Indre"
      ],
      "Indre-Et-Loire": [
        "Indre-et-Loire"
      ],
      "Ingushetija Republic": [
        "Ingushetija Republic"
      ],
      "Inner-Rhoden": [
        "Inner-Rhoden"
      ],
      "Invernesshire": [
        "Invernesshire"
      ],
      "Ioannina": [
        "Ioannina"
      ],
      "Iowa": [
        "Iowa"
      ],
      "Iraklion": [
        "Iraklion"
      ],
      "Isere": [
        "Isere"
      ],
      "Isernia": [
        "Isernia"
      ],
      "Ishikawa": [
        "Ishikawa"
      ],
      "Isle Of Wight": [
        "Isle of Wight"
      ],
      "Ismailia": [
        "Ismailia"
      ],
      "Isparta": [
        "Isparta"
      ],
      "Istanbul": [
        "Istanbul"
      ],
      "Istarska": [
        "Istarska"
      ],
      "Iv - La Serena": [
        "IV - La Serena"
      ],
      "Ivano-Frankivs'Ka": [
        "Ivano-Frankivs'ka"
      ],
      "Ivanèna Gorica": [
        "Ivanèna Gorica"
      ],
      "Iwate": [
        "Iwate"
      ],
      "Ix - Temuco": [
        "IX - Temuco"
      ],
      "Izmir": [
        "Izmir"
      ],
      "Izola": [
        "Izola"
      ],
      "Izola - Isola": [
        "Izola - Isola"
      ],
      "Jaemtland County": [
        "Jaemtland County"
      ],
      "Jaen": [
        "Jaen"
      ],
      "Jalisco": [
        "Jalisco"
      ],
      "Jamalo-Nenekchky Aut": [
        "Jamalo-Nenekchky Aut"
      ],
      "Jambi": [
        "Kabupaten Batanghari",
        "Kabupaten Bungo",
        "Kabupaten Kerinci",
        "Kabupaten Merangin",
        "Kabupaten Muaro Jambi",
        "Kabupaten Sarolangun",
        "Kabupaten Tanjung Jabung Barat",
        "Kabupaten Tanjung Jabung Timur",
        "Kabupaten Tebo",
        "Kota Jambi",
        "Kota Sungai Penuh"
      ],
      "Jammu And Kashmir": [
        "Jammu and Kashmir"
      ],
      "Jasz-Nagykun-Szolnok": [
        "Jasz-Nagykun-Szolnok"
      ],
      "Jawa Barat": [
        "Kabupaten Bandung",
        "Kabupaten Bandung Barat",
        "Kabupaten Bekasi",
        "Kabupaten Bogor",
        "Kabupaten Ciamis",
        "Kabupaten Cianjur",
        "Kabupaten Cirebon",
        "Kabupaten Garut",
        "Kabupaten Indramayu",
        "Kabupaten Karawang",
        "Kabupaten Kuningan",
        "Kabupaten Majalengka",
        "Kabupaten Purwakarta",
        "Kabupaten Subang",
        "Kabupaten Sukabumi",
        "Kabupaten Sumedang",
        "Kabupaten Tasikmalaya",
        "Kota Bandung",
        "Kota Banjar",
        "Kota Bekasi",
        "Kota Bogor",
        "Kota Cimahi",
        "Kota Cirebon",
        "Kota Depok",
        "Kota Sukabumi",
        "Kota Tasikmalaya"
      ],
      "Jawa Tengah": [
        "Kabupaten Banjarnegara",
        "Kabupaten Banyumas",
        "Kabupaten Batang",
        "Kabupaten Blora",
        "Kabupaten Boyolali",
        "Kabupaten Brebes",
        "Kabupaten Cilacap",
        "Kabupaten Demak",
        "Kabupaten Grobogan",
        "Kabupaten Jepara",
        "Kabupaten Karanganyar",
        "Kabupaten Kebumen",
        "Kabupaten Kendal",
        "Kabupaten Klaten",
        "Kabupaten Kudus",
        "Kabupaten Magelang",
        "Kabupaten Pati",
        "Kabupaten Pekalongan",
        "Kabupaten Pemalang",
        "Kabupaten Purbalingga",
        "Kabupaten Purworejo",
        "Kabupaten Rembang",
        "Kabupaten Semarang",
        "Kabupaten Sragen",
        "Kabupaten Sukoharjo",
        "Kabupaten Tegal",
        "Kabupaten Temanggung",
        "Kabupaten Wonogiri",
        "Kabupaten Wonosobo",
        "Kota Magelang",
        "Kota Pekalongan",
        "Kota Salatiga",
        "Kota Semarang",
        "Kota Surakarta",
        "Kota Tegal"
      ],
      "Jawa Timur": [
        "Kabupaten Bangkalan",
        "Kabupaten Banyuwangi",
        "Kabupaten Blitar",
        "Kabupaten Bojonegoro",
        "Kabupaten Bondowoso",
        "Kabupaten Gresik",
        "Kabupaten Jember",
        "Kabupaten Jombang",
        "Kabupaten Kediri",
        "Kabupaten Lamongan",
        "Kabupaten Lumajang",
        "Kabupaten Madiun",
        "Kabupaten Magetan",
        "Kabupaten Malang",
        "Kabupaten Mojokerto",
        "Kabupaten Nganjuk",
        "Kabupaten Ngawi",
        "Kabupaten Pacitan",
        "Kabupaten Pamekasan",
        "Kabupaten Pasuruan",
        "Kabupaten Ponorogo",
        "Kabupaten Probolinggo",
        "Kabupaten Sampang",
        "Kabupaten Sidoarjo",
        "Kabupaten Situbondo",
        "Kabupaten Sumenep",
        "Kabupaten Trenggalek",
        "Kabupaten Tuban",
        "Kabupaten Tulungagung",
        "Kota Batu",
        "Kota Blitar",
        "Kota Kediri",
        "Kota Madiun",
        "Kota Malang",
        "Kota Mojokerto",
        "Kota Pasuruan",
        "Kota Probolinggo",
        "Kota Surabaya"
      ],
      "Jeju": [
        "Jeju"
      ],
      "Jeolla Buk Do": [
        "Jeolla buk do"
      ],
      "Jeolla Nam Do": [
        "Jeolla nam do"
      ],
      "Jerusalem": [
        "Jerusalem"
      ],
      "Jesenice": [
        "Jesenice"
      ],
      "Jezersko": [
        "Jezersko"
      ],
      "Jharkhand": [
        "Jharkhand"
      ],
      "Jiangsu": [
        "Jiangsu"
      ],
      "Jiangxi": [
        "Jiangxi"
      ],
      "Jihocesky": [
        "Jihocesky"
      ],
      "Jihomoravsky": [
        "Jihomoravsky"
      ],
      "Jilin": [
        "Jilin"
      ],
      "Joenkoeping County": [
        "Joenkoeping County"
      ],
      "Johor": [
        "Johor"
      ],
      "Jujuy": [
        "Jujuy"
      ],
      "Junin": [
        "Junin"
      ],
      "Jura": [
        "Jura"
      ],
      "Jur¹Inci": [
        "Jur¹inci"
      ],
      "K.Marash": [
        "K.Marash"
      ],
      "Kabardino-Balkar.Rep": [
        "Kabardino-Balkar.Rep"
      ],
      "Kafr El-Sheikh": [
        "Kafr El-Sheikh"
      ],
      "Kagawa": [
        "Kagawa"
      ],
      "Kagoshima": [
        "Kagoshima"
      ],
      "Kalasin": [
        "Kalasin"
      ],
      "Kalimantan Barat": [
        "Kabupaten Bengkayang",
        "Kabupaten Kapuas Hulu",
        "Kabupaten Kayong Utara",
        "Kabupaten Ketapang",
        "Kabupaten Kubu Raya",
        "Kabupaten Landak",
        "Kabupaten Melawi",
        "Kabupaten Pontianak",
        "Kabupaten Sambas",
        "Kabupaten Sanggau",
        "Kabupaten Sekadau",
        "Kabupaten Sintang",
        "Kota Pontianak",
        "Kota Singkawang"
      ],
      "Kalimantan Selatan": [
        "Kabupaten Balangan",
        "Kabupaten Banjar",
        "Kabupaten Barito Kuala",
        "Kabupaten Hulu Sungai Selatan",
        "Kabupaten Hulu Sungai Tengah",
        "Kabupaten Hulu Sungai Utara",
        "Kabupaten Kotabaru",
        "Kabupaten Tabalong",
        "Kabupaten Tanah Bumbu",
        "Kabupaten Tanah Laut",
        "Kabupaten Tapin",
        "Kota Banjarbaru",
        "Kota Banjarmasin"
      ],
      "Kalimantan Tengah": [
        "Kabupaten Barito Selatan",
        "Kabupaten Barito Timur",
        "Kabupaten Barito Utara",
        "Kabupaten Gunung Mas",
        "Kabupaten Kapuas",
        "Kabupaten Katingan",
        "Kabupaten Kotawaringin Barat",
        "Kabupaten Kotawaringin Timur",
        "Kabupaten Lamandau",
        "Kabupaten Murung Raya",
        "Kabupaten Pulang Pisau",
        "Kabupaten Seruyan",
        "Kabupaten Sukamara",
        "Kota Palangkaraya"
      ],
      "Kalimantan Timur": [
        "Kabupaten Berau",
        "Kabupaten Kutai Barat",
        "Kabupaten Kutai Kartanegara",
        "Kabupaten Kutai Timur",
        "Kabupaten Mahakam Ulu",
        "Kabupaten Paser",
        "Kabupaten Penajam Paser Utara",
        "Kota Balikpapan",
        "Kota Bontang",
        "Kota Samarinda"
      ],
      "Kalimantan Utara": [
        "Bulungan",
        "Kalimantan Utara",
        "Malinau",
        "Nunukan",
        "Tana Tidung",
        "Tarakan"
      ],
      "Kalmar County": [
        "Kalmar County"
      ],
      "Kalmyk Republic": [
        "Kalmyk Republic"
      ],
      "Kamchatka Territory": [
        "Kamchatka Territory"
      ],
      "Kamnik": [
        "Kamnik"
      ],
      "Kamphaeng Phet": [
        "Kamphaeng Phet"
      ],
      "Kanagawa": [
        "Kanagawa"
      ],
      "Kanal": [
        "Kanal"
      ],
      "Kanchanaburi": [
        "Kanchanaburi"
      ],
      "Kansas": [
        "Kansas"
      ],
      "Kao-Hsiung": [
        "Kao-hsiung"
      ],
      "Kaposvar": [
        "Kaposvar"
      ],
      "Karach.-Cherkessk Re": [
        "Karach.-Cherkessk Re"
      ],
      "Karagandinskaia": [
        "Karagandinskaia"
      ],
      "Karaman": [
        "Karaman"
      ],
      "Kardhitsa": [
        "Kardhitsa"
      ],
      "Karelian Republic": [
        "Karelian Republic"
      ],
      "Karlovacka": [
        "Karlovacka"
      ],
      "Karlovarsky": [
        "Karlovarsky"
      ],
      "Karnataka": [
        "Karnataka"
      ],
      "Kars": [
        "Kars"
      ],
      "Kastamonu": [
        "Kastamonu"
      ],
      "Kastoria": [
        "Kastoria"
      ],
      "Kavala": [
        "Kavala"
      ],
      "Kayseri": [
        "Kayseri"
      ],
      "Kecskemet": [
        "Kecskemet"
      ],
      "Kedah": [
        "Kedah"
      ],
      "Kefallinia": [
        "Kefallinia"
      ],
      "Kelantan": [
        "Kelantan"
      ],
      "Kent": [
        "Kent"
      ],
      "Kentucky": [
        "Kentucky"
      ],
      "Kep. Bangka Belitung": [
        "Kabupaten Bangka",
        "Kabupaten Bangka Barat",
        "Kabupaten Bangka Selatan",
        "Kabupaten Bangka Tengah",
        "Kabupaten Belitung",
        "Kabupaten Belitung Timur",
        "Kota Pangkal Pinang"
      ],
      "Kep. Riau": [
        "Kabupaten Bintan",
        "Kabupaten Karimun",
        "Kabupaten Kepulauan Anambas",
        "Kabupaten Lingga",
        "Kabupaten Natuna",
        "Kota Batam",
        "Kota Tanjung Pinang"
      ],
      "Kerala": [
        "Kerala"
      ],
      "Kerkira": [
        "Kerkira"
      ],
      "Kerry": [
        "Kerry"
      ],
      "Khabarovsk Territory": [
        "Khabarovsk Territory"
      ],
      "Khalkidhiki": [
        "Khalkidhiki"
      ],
      "Khania": [
        "Khania"
      ],
      "Khaskovo": [
        "Khaskovo"
      ],
      "Khios": [
        "Khios"
      ],
      "Khon Kaen": [
        "Khon Kaen"
      ],
      "Kidrièevo": [
        "Kidrièevo"
      ],
      "Kievs'Ka": [
        "Kievs'ka"
      ],
      "Kikladhes": [
        "Kikladhes"
      ],
      "Kildare": [
        "Kildare"
      ],
      "Kilkenny": [
        "Kilkenny"
      ],
      "Kilkis": [
        "Kilkis"
      ],
      "Kincardineshire": [
        "Kincardineshire"
      ],
      "Kinross-Shire": [
        "Kinross-shire"
      ],
      "Kirikkale": [
        "Kirikkale"
      ],
      "Kirkcudbrightshire": [
        "Kirkcudbrightshire"
      ],
      "Kirklareli": [
        "Kirklareli"
      ],
      "Kirovograds'Ka": [
        "Kirovograds'ka"
      ],
      "Kirshehir": [
        "Kirshehir"
      ],
      "Kobarid": [
        "Kobarid"
      ],
      "Kobilje": [
        "Kobilje"
      ],
      "Kocaeli": [
        "Kocaeli"
      ],
      "Kocevje": [
        "Kocevje"
      ],
      "Kochi": [
        "Kochi"
      ],
      "Komarom-Esztergom": [
        "Komarom-Esztergom"
      ],
      "Komen": [
        "Komen"
      ],
      "Komenda": [
        "Komenda"
      ],
      "Komi Republic": [
        "Komi Republic"
      ],
      "Komy Permjats.Aut.Di": [
        "Komy Permjats.Aut.di"
      ],
      "Konya": [
        "Konya"
      ],
      "Koper": [
        "Koper"
      ],
      "Koper - Capodistria": [
        "Koper - Capodistria"
      ],
      "Koprivnicko-Krizevac": [
        "Koprivnicko-krizevac"
      ],
      "Korinthia": [
        "Korinthia"
      ],
      "Korjacs Auton.Distri": [
        "Korjacs Auton.distri"
      ],
      "Kostanaiskaia": [
        "Kostanaiskaia"
      ],
      "Kostel": [
        "Kostel"
      ],
      "Kowloon": [
        "Kowloon"
      ],
      "Kozani": [
        "Kozani"
      ],
      "Kozje": [
        "Kozje"
      ],
      "Ko¿¿Evje": [
        "Ko¿¿evje"
      ],
      "Krabi": [
        "Krabi"
      ],
      "Kralovehradecky": [
        "Kralovehradecky"
      ],
      "Kranj": [
        "Kranj"
      ],
      "Kranjska Gora": [
        "Kranjska Gora"
      ],
      "Krapinsko-Zagorska": [
        "Krapinsko-zagorska"
      ],
      "Krasnodar Territory": [
        "Krasnodar Territory"
      ],
      "Krasnoyarsk Territor": [
        "Krasnoyarsk Territor"
      ],
      "Kri¾Evci": [
        "Kri¾evci"
      ],
      "Kronoberg County": [
        "Kronoberg County"
      ],
      "Krsko": [
        "Krsko"
      ],
      "Krung Thep": [
        "Krung Thep"
      ],
      "Kr¿¿Ko": [
        "Kr¿¿ko"
      ],
      "Kuala Lumpur": [
        "Kuala Lumpur"
      ],
      "Kuetahya": [
        "Kuetahya"
      ],
      "Kujawsko-Pomorskie": [
        "kujawsko-pomorskie"
      ],
      "Kumamoto": [
        "Kumamoto"
      ],
      "Kungota": [
        "Kungota"
      ],
      "Kuwait City": [
        "Kuwait City"
      ],
      "Kuzma": [
        "Kuzma"
      ],
      "Kwazulu-Natal": [
        "KwaZulu-Natal"
      ],
      "Kyoto": [
        "Kyoto"
      ],
      "Kyzilordinskaia": [
        "Kyzilordinskaia"
      ],
      "L'Aquila": [
        "L'Aquila"
      ],
      "L'Vivsbka": [
        "L'vivsbka"
      ],
      "La Coruna": [
        "La Coruna"
      ],
      "La Guajira": [
        "LA GUAJIRA"
      ],
      "La Libertad": [
        "La Libertad"
      ],
      "La Pampa": [
        "La Pampa"
      ],
      "La Rioja": [
        "La Rioja"
      ],
      "La Spezia": [
        "La Spezia"
      ],
      "Labuan": [
        "Labuan"
      ],
      "Lakonia": [
        "Lakonia"
      ],
      "Lakshadweep": [
        "Lakshadweep"
      ],
      "Lambayeque": [
        "Lambayeque"
      ],
      "Lampang": [
        "Lampang"
      ],
      "Lamphun": [
        "Lamphun"
      ],
      "Lampung": [
        "Kabupaten Lampung Barat",
        "Kabupaten Lampung Selatan",
        "Kabupaten Lampung Tengah",
        "Kabupaten Lampung Timur",
        "Kabupaten Lampung Utara",
        "Kabupaten Mesuji",
        "Kabupaten Pesawaran",
        "Kabupaten Pringsewu",
        "Kabupaten Tanggamus",
        "Kabupaten Tulang Bawang",
        "Kabupaten Tulang Bawang Barat",
        "Kabupaten Way Kanan",
        "Kota Bandar Lampung",
        "Kota Metro"
      ],
      "Lanarkshire": [
        "Lanarkshire"
      ],
      "Lancashire": [
        "Lancashire"
      ],
      "Landes": [
        "Landes"
      ],
      "Laois": [
        "Laois"
      ],
      "Lappi": [
        "Lappi"
      ],
      "Lara": [
        "Lara"
      ],
      "Larisa": [
        "Larisa"
      ],
      "Las Palmas": [
        "Las Palmas"
      ],
      "Lasithi": [
        "Lasithi"
      ],
      "Latina": [
        "Latina"
      ],
      "La¿¿Ko": [
        "La¿¿ko"
      ],
      "Lecce": [
        "Lecce"
      ],
      "Lecco": [
        "Lecco"
      ],
      "Leicestershire": [
        "Leicestershire"
      ],
      "Leitrim": [
        "Leitrim"
      ],
      "Lenart": [
        "Lenart"
      ],
      "Lendava": [
        "Lendava"
      ],
      "Lendava - Lendva": [
        "Lendava - Lendva"
      ],
      "Leon": [
        "Leon"
      ],
      "Lerida": [
        "Lerida"
      ],
      "Lesvos": [
        "Lesvos"
      ],
      "Levkas": [
        "Levkas"
      ],
      "Leziria Do Tejo": [
        "Leziria do Tejo"
      ],
      "Liaoning": [
        "Liaoning"
      ],
      "Liberecky": [
        "Liberecky"
      ],
      "Licko-Senjska": [
        "Licko-senjska"
      ],
      "Liege": [
        "Liege"
      ],
      "Lima Y Callao": [
        "Lima y Callao"
      ],
      "Limburg": [
        "Limburg"
      ],
      "Limerick": [
        "Limerick"
      ],
      "Limpopo": [
        "Limpopo"
      ],
      "Lincolnshire": [
        "Lincolnshire"
      ],
      "Litija": [
        "Litija"
      ],
      "Livorno": [
        "Livorno"
      ],
      "Ljubljana": [
        "Ljubljana"
      ],
      "Ljubljana-Bezigrad": [
        "Ljubljana-Bezigrad"
      ],
      "Ljubljana-Center": [
        "Ljubljana-Center"
      ],
      "Ljubljana-Moste-Polj": [
        "Ljubljana-Moste-Polj"
      ],
      "Ljubljana-Siska": [
        "Ljubljana-Siska"
      ],
      "Ljubljana-Vic-Rudnik": [
        "Ljubljana-Vic-Rudnik"
      ],
      "Ljubno": [
        "Ljubno"
      ],
      "Ljutomer": [
        "Ljutomer"
      ],
      "Lodi": [
        "Lodi"
      ],
      "Lodzkie": [
        "lodzkie"
      ],
      "Loei": [
        "Loei"
      ],
      "Logatec": [
        "Logatec"
      ],
      "Loir-Et-Cher": [
        "Loir-et-Cher"
      ],
      "Loire": [
        "Loire"
      ],
      "Loire (Haute)": [
        "Loire (Haute)"
      ],
      "Loire-Atlantique": [
        "Loire-Atlantique"
      ],
      "Loiret": [
        "Loiret"
      ],
      "Londonderry": [
        "Londonderry"
      ],
      "Longford": [
        "Longford"
      ],
      "Lop Buri": [
        "Lop Buri"
      ],
      "Loreto": [
        "Loreto"
      ],
      "Lot": [
        "Lot"
      ],
      "Lot-Et-Garonne": [
        "Lot-et-Garonne"
      ],
      "Louisiana": [
        "Louisiana"
      ],
      "Louth": [
        "Louth"
      ],
      "Lovech": [
        "Lovech"
      ],
      "Lovrenc Na Pohorju": [
        "Lovrenc na Pohorju"
      ],
      "Lower Austria": [
        "Lower Austria"
      ],
      "Lower Saxony": [
        "Lower Saxony"
      ],
      "Lozere": [
        "Lozere"
      ],
      "Lo¹Ka Dolina": [
        "Lo¹ka dolina"
      ],
      "Lo¹Ki Potok": [
        "Lo¹ki Potok"
      ],
      "Lubelskie": [
        "lubelskie"
      ],
      "Lubuskie": [
        "lubuskie"
      ],
      "Lucca": [
        "Lucca"
      ],
      "Lucerne": [
        "Lucerne"
      ],
      "Lugans'Ka": [
        "Lugans'ka"
      ],
      "Lugo": [
        "Lugo"
      ],
      "Lukovica": [
        "Lukovica"
      ],
      "Luxembourg": [
        "Luxembourg"
      ],
      "Luxor": [
        "Luxor"
      ],
      "Luèe": [
        "Luèe"
      ],
      "M.Kiev": [
        "m.Kiev"
      ],
      "M.Sevastopil'": [
        "m.Sevastopil'"
      ],
      "Macerata": [
        "Macerata"
      ],
      "Madhya Pradesh": [
        "Madhya Pradesh"
      ],
      "Madre De Dios": [
        "Madre de Dios"
      ],
      "Madrid": [
        "Madrid"
      ],
      "Mae Hong Son": [
        "Mae Hong Son"
      ],
      "Magdalena": [
        "MAGDALENA"
      ],
      "Magnisia": [
        "Magnisia"
      ],
      "Maha Sarakham": [
        "Maha Sarakham"
      ],
      "Mahanakhon": [
        "Mahanakhon"
      ],
      "Maharashtra": [
        "Maharashtra"
      ],
      "Maine": [
        "Maine"
      ],
      "Maine-Et-Loire": [
        "Maine-et-Loire"
      ],
      "Maj¹Perk": [
        "Maj¹perk"
      ],
      "Malaga": [
        "Malaga"
      ],
      "Malatya": [
        "Malatya"
      ],
      "Malopolskie": [
        "malopolskie"
      ],
      "Maluku": [
        "Kabupaten Buru",
        "Kabupaten Buru Selatan",
        "Kabupaten Kepulauan Aru",
        "Kabupaten Maluku Barat Daya",
        "Kabupaten Maluku Tengah",
        "Kabupaten Maluku Tenggara",
        "Kabupaten Maluku Tenggara Barat",
        "Kabupaten Seram Bagian Barat",
        "Kabupaten Seram Bagian Timur",
        "Kota Ambon",
        "Kota Tual"
      ],
      "Maluku Utara": [
        "Kabupaten Halmahera Barat",
        "Kabupaten Halmahera Selatan",
        "Kabupaten Halmahera Tengah",
        "Kabupaten Halmahera Timur",
        "Kabupaten Halmahera Utara",
        "Kabupaten Kepulauan Sula",
        "Kabupaten Pulau Morotai",
        "Kota Ternate",
        "Kota Tidore Kepulauan"
      ],
      "Manawatu-Wanganui": [
        "Manawatu-Wanganui"
      ],
      "Manche": [
        "Manche"
      ],
      "Mangystayskaia": [
        "Mangystayskaia"
      ],
      "Manipur": [
        "Manipur"
      ],
      "Manisa": [
        "Manisa"
      ],
      "Manitoba": [
        "Manitoba"
      ],
      "Mantova": [
        "Mantova"
      ],
      "Maramures": [
        "Maramures"
      ],
      "Maranhao": [
        "Maranhao"
      ],
      "Mardin": [
        "Mardin"
      ],
      "Maribor": [
        "Maribor"
      ],
      "Marijskaya Republic": [
        "Marijskaya Republic"
      ],
      "Markovci": [
        "Markovci"
      ],
      "Marne": [
        "Marne"
      ],
      "Marne (Haute)": [
        "Marne (Haute)"
      ],
      "Martinique": [
        "Martinique"
      ],
      "Maryland": [
        "Maryland"
      ],
      "Massa Carrara": [
        "Massa Carrara"
      ],
      "Massachusetts": [
        "Massachusetts"
      ],
      "Matera": [
        "Matera"
      ],
      "Mato Grosso": [
        "Mato Grosso"
      ],
      "Mato Grosso Do Sul": [
        "Mato Grosso do Sul"
      ],
      "Matruh": [
        "Matruh"
      ],
      "Mayenne": [
        "Mayenne"
      ],
      "Mayo": [
        "Mayo"
      ],
      "Mazowieckie": [
        "mazowieckie"
      ],
      "Meath": [
        "Meath"
      ],
      "Mecklenburg-Vorpomm.": [
        "Mecklenburg-Vorpomm."
      ],
      "Medio Campidano": [
        "Medio Campidano"
      ],
      "Medio Tejo": [
        "Medio Tejo"
      ],
      "Medjimurska": [
        "Medjimurska"
      ],
      "Medvode": [
        "Medvode"
      ],
      "Meghalaya": [
        "Meghalaya"
      ],
      "Mehedinti": [
        "Mehedinti"
      ],
      "Melaka": [
        "Melaka"
      ],
      "Mendoza": [
        "Mendoza"
      ],
      "Menge¹": [
        "Menge¹"
      ],
      "Merida": [
        "Merida"
      ],
      "Merioneth": [
        "Merioneth"
      ],
      "Messina": [
        "Messina"
      ],
      "Messinia": [
        "Messinia"
      ],
      "Meta": [
        "META"
      ],
      "Metlika": [
        "Metlika"
      ],
      "Meurthe-Et-Moselle": [
        "Meurthe-et-Moselle"
      ],
      "Meuse": [
        "Meuse"
      ],
      "Me¾Ica": [
        "Me¾ica"
      ],
      "Michigan": [
        "Michigan"
      ],
      "Michoacan": [
        "Michoacan"
      ],
      "Mid Glamorgan": [
        "Mid Glamorgan"
      ],
      "Middlesex": [
        "Middlesex"
      ],
      "Midlothian": [
        "Midlothian"
      ],
      "Mie": [
        "Mie"
      ],
      "Miklav¾ Na Dravskem": [
        "Miklav¾ na Dravskem"
      ],
      "Mikolaivs'Ka": [
        "Mikolaivs'ka"
      ],
      "Milan": [
        "Milan"
      ],
      "Minas Gerais": [
        "Minas Gerais"
      ],
      "Minho-Lima": [
        "Minho-Lima"
      ],
      "Minnesota": [
        "Minnesota"
      ],
      "Minya": [
        "Minya"
      ],
      "Miranda": [
        "Miranda"
      ],
      "Miren-Kostanjevica": [
        "Miren-Kostanjevica"
      ],
      "Mirna Peè": [
        "Mirna Peè"
      ],
      "Misiones": [
        "Misiones"
      ],
      "Miskolc": [
        "Miskolc"
      ],
      "Mislinja": [
        "Mislinja"
      ],
      "Mississippi": [
        "Mississippi"
      ],
      "Missouri": [
        "Missouri"
      ],
      "Miyagi": [
        "Miyagi"
      ],
      "Miyazaki": [
        "Miyazaki"
      ],
      "Mizoram": [
        "Mizoram"
      ],
      "Modena": [
        "Modena"
      ],
      "Monagas": [
        "Monagas"
      ],
      "Monaghan": [
        "Monaghan"
      ],
      "Monmouthshire": [
        "Monmouthshire"
      ],
      "Montana": [
        "Montana"
      ],
      "Montgomeryshire": [
        "Montgomeryshire"
      ],
      "Monufia": [
        "Monufia"
      ],
      "Monza E Brianza": [
        "Monza e Brianza"
      ],
      "Moquegua": [
        "Moquegua"
      ],
      "Moravske Toplice": [
        "Moravske Toplice"
      ],
      "Moravskoslezsky": [
        "Moravskoslezsky"
      ],
      "Moravèe": [
        "Moravèe"
      ],
      "Morayshire": [
        "Morayshire"
      ],
      "Morbihan": [
        "Morbihan"
      ],
      "Mordovian Republic": [
        "Mordovian Republic"
      ],
      "More Og Romsdal C.": [
        "More og Romsdal C."
      ],
      "Morelos": [
        "Morelos"
      ],
      "Moselle": [
        "Moselle"
      ],
      "Mozirje": [
        "Mozirje"
      ],
      "Mpumalanga": [
        "Mpumalanga"
      ],
      "Mugla": [
        "Mugla"
      ],
      "Mukdahan": [
        "Mukdahan"
      ],
      "Murcia": [
        "Murcia"
      ],
      "Mures": [
        "Mures"
      ],
      "Murska Sobota": [
        "Murska Sobota"
      ],
      "Mush": [
        "Mush"
      ],
      "Muta": [
        "Muta"
      ],
      "Nagaland": [
        "Nagaland"
      ],
      "Nagano": [
        "Nagano"
      ],
      "Nagasaki": [
        "Nagasaki"
      ],
      "Nagykanizsa": [
        "Nagykanizsa"
      ],
      "Nairnshire": [
        "Nairnshire"
      ],
      "Nakhon Nayok": [
        "Nakhon Nayok"
      ],
      "Nakhon Pathom": [
        "Nakhon Pathom"
      ],
      "Nakhon Phanom": [
        "Nakhon Phanom"
      ],
      "Nakhon Ratchasima": [
        "Nakhon Ratchasima"
      ],
      "Nakhon Sawan": [
        "Nakhon Sawan"
      ],
      "Nakhon Si Thammarat": [
        "Nakhon Si Thammarat"
      ],
      "Naklo": [
        "Naklo"
      ],
      "Namur": [
        "Namur"
      ],
      "Nan": [
        "Nan"
      ],
      "Naples": [
        "Naples"
      ],
      "Nara": [
        "Nara"
      ],
      "Narathiwat": [
        "Narathiwat"
      ],
      "Narino": [
        "NARINO"
      ],
      "Nato": [
        "NATO"
      ],
      "Navarra": [
        "Navarra"
      ],
      "Nayarit": [
        "Nayarit"
      ],
      "Nazarje": [
        "Nazarje"
      ],
      "Neamt": [
        "Neamt"
      ],
      "Nebraska": [
        "Nebraska"
      ],
      "Negeri Sembilan": [
        "Negeri Sembilan"
      ],
      "Nei Mongol": [
        "Nei Mongol"
      ],
      "Nenekchky Auton.Dist": [
        "Nenekchky Auton.dist"
      ],
      "Neuchatel": [
        "Neuchatel"
      ],
      "Neuquen": [
        "Neuquen"
      ],
      "Nevada": [
        "Nevada"
      ],
      "Nevshehir": [
        "Nevshehir"
      ],
      "New Brunswick": [
        "New Brunswick"
      ],
      "New Hampshire": [
        "New Hampshire"
      ],
      "New Jersey": [
        "New Jersey"
      ],
      "New Mexico": [
        "New Mexico"
      ],
      "New South Wales": [
        "New South Wales"
      ],
      "New Territories": [
        "New Territories"
      ],
      "New Valley": [
        "New Valley"
      ],
      "New York": [
        "New York"
      ],
      "Newfoundland & Labr.": [
        "Newfoundland & Labr."
      ],
      "Nicosia (Lefkosia)": [
        "Nicosia (Lefkosia)"
      ],
      "Nidwalden": [
        "Nidwalden"
      ],
      "Nievre": [
        "Nievre"
      ],
      "Nigde": [
        "Nigde"
      ],
      "Niigata": [
        "Niigata"
      ],
      "Ningxia": [
        "Ningxia"
      ],
      "Nograd": [
        "Nograd"
      ],
      "Nong Bua Lamphu": [
        "Nong Bua Lamphu"
      ],
      "Nong Khai": [
        "Nong Khai"
      ],
      "Nonthaburi": [
        "Nonthaburi"
      ],
      "Noord-Brabant": [
        "Noord-Brabant"
      ],
      "Noord-Holland": [
        "Noord-Holland"
      ],
      "Nord": [
        "Nord"
      ],
      "Nord-Trondelag Cnty": [
        "Nord-Trondelag Cnty"
      ],
      "Nordland County": [
        "Nordland County"
      ],
      "Norfolk": [
        "Norfolk"
      ],
      "Norrbotten County": [
        "Norrbotten County"
      ],
      "Norte Santander": [
        "NORTE SANTANDER"
      ],
      "North Carolina": [
        "Charlotte",
        "North Carolina"
      ],
      "North Dakota": [
        "North Dakota"
      ],
      "North Jutland": [
        "North Jutland"
      ],
      "North Sinai": [
        "North Sinai"
      ],
      "North Yorkshire": [
        "North Yorkshire"
      ],
      "North-Osetiya Republ": [
        "North-Osetiya Republ"
      ],
      "Northamptonshire": [
        "Northamptonshire"
      ],
      "Northern": [
        "Northern"
      ],
      "Northern Cape": [
        "Northern Cape"
      ],
      "Northern Mariana Isl": [
        "Northern Mariana Isl"
      ],
      "Northern Mindanao": [
        "Northern Mindanao"
      ],
      "Northern Territory": [
        "Northern Territory"
      ],
      "Northland": [
        "Northland"
      ],
      "Northumberland": [
        "Northumberland"
      ],
      "Northwest": [
        "Northwest"
      ],
      "Northwest Territory": [
        "Northwest Territory"
      ],
      "Nottinghamshire": [
        "Nottinghamshire"
      ],
      "Nova Gorica": [
        "Nova Gorica"
      ],
      "Nova Scotia": [
        "Nova Scotia"
      ],
      "Novara": [
        "Novara"
      ],
      "Novo Mesto": [
        "Novo mesto"
      ],
      "Nrth Rhine Westfalia": [
        "Nrth Rhine Westfalia"
      ],
      "Nueva Esparta": [
        "Nueva Esparta"
      ],
      "Nuevo Leon": [
        "Nuevo Leon"
      ],
      "Nunavut": [
        "Nunavut"
      ],
      "Nuoro": [
        "Nuoro"
      ],
      "Nusa Tenggara Barat": [
        "Kabupaten Bima",
        "Kabupaten Dompu",
        "Kabupaten Lombok Barat",
        "Kabupaten Lombok Tengah",
        "Kabupaten Lombok Timur",
        "Kabupaten Lombok Utara",
        "Kabupaten Sumbawa",
        "Kabupaten Sumbawa Barat",
        "Kota Bima",
        "Kota Mataram"
      ],
      "Nusa Tenggara Timur": [
        "Kabupaten Alor",
        "Kabupaten Belu",
        "Kabupaten Ende",
        "Kabupaten Flores Timur",
        "Kabupaten Kupang",
        "Kabupaten Lembata",
        "Kabupaten Manggarai",
        "Kabupaten Manggarai Barat",
        "Kabupaten Manggarai Timur",
        "Kabupaten Nagekeo",
        "Kabupaten Ngada",
        "Kabupaten Rote Ndao",
        "Kabupaten Sabu Raijua",
        "Kabupaten Sikka",
        "Kabupaten Sumba Barat",
        "Kabupaten Sumba Barat Daya",
        "Kabupaten Sumba Tengah",
        "Kabupaten Sumba Timur",
        "Kabupaten Timor Tengah Selatan",
        "Kabupaten Timor Tengah Utara",
        "Kota Kupang"
      ],
      "Nyiregyhaza": [
        "Nyiregyhaza"
      ],
      "Oaxaca": [
        "Oaxaca"
      ],
      "Obwalden": [
        "Obwalden"
      ],
      "Odes'Ka": [
        "Odes'ka"
      ],
      "Odranci": [
        "Odranci"
      ],
      "Oerebro County": [
        "Oerebro County"
      ],
      "Oeste": [
        "Oeste"
      ],
      "Oestergoetland Cnty": [
        "Oestergoetland Cnty"
      ],
      "Offaly": [
        "Offaly"
      ],
      "Ogliastra": [
        "Ogliastra"
      ],
      "Ohio": [
        "Ohio"
      ],
      "Oise": [
        "Oise"
      ],
      "Oita": [
        "Oita"
      ],
      "Okayama": [
        "Okayama"
      ],
      "Okinawa": [
        "Okinawa"
      ],
      "Oklahoma": [
        "Oklahoma"
      ],
      "Olbia-Tempio": [
        "Olbia-Tempio"
      ],
      "Olomoucky": [
        "Olomoucky"
      ],
      "Olt": [
        "Olt"
      ],
      "Ontario": [
        "Ontario"
      ],
      "Oost-Vlaanderen": [
        "Oost-Vlaanderen"
      ],
      "Oplotnica": [
        "Oplotnica"
      ],
      "Opolskie": [
        "opolskie"
      ],
      "Oppland County": [
        "Oppland County"
      ],
      "Orange": [
        "Orange"
      ],
      "Ordu": [
        "Ordu"
      ],
      "Oregon": [
        "Oregon"
      ],
      "Orense": [
        "Orense"
      ],
      "Orissa": [
        "Orissa"
      ],
      "Oristano": [
        "Oristano"
      ],
      "Orkney": [
        "Orkney"
      ],
      "Ormoz": [
        "Ormoz"
      ],
      "Ormo¾": [
        "Ormo¾"
      ],
      "Orne": [
        "Orne"
      ],
      "Osaka": [
        "Osaka"
      ],
      "Osilnica": [
        "Osilnica"
      ],
      "Osjecko-Baranjska": [
        "Osjecko-baranjska"
      ],
      "Oslo": [
        "Oslo"
      ],
      "Ostfold County": [
        "Ostfold County"
      ],
      "Otago": [
        "Otago"
      ],
      "Oulu": [
        "Oulu"
      ],
      "Overijssel": [
        "Overijssel"
      ],
      "Oxfordshire": [
        "Oxfordshire"
      ],
      "Padova": [
        "Padova"
      ],
      "Pahang": [
        "Pahang"
      ],
      "Palencia": [
        "Palencia"
      ],
      "Palermo": [
        "Palermo"
      ],
      "Papua": [
        "Kabupaten Asmat",
        "Kabupaten Biak Numfor",
        "Kabupaten Boven Digoel",
        "Kabupaten Deiyai",
        "Kabupaten Dogiyai",
        "Kabupaten Intan Jaya",
        "Kabupaten Jayapura",
        "Kabupaten Jayawijaya",
        "Kabupaten Keerom",
        "Kabupaten Kepulauan Yapen",
        "Kabupaten Lanny Jaya",
        "Kabupaten Mamberamo Raya",
        "Kabupaten Mamberamo Tengah",
        "Kabupaten Mappi",
        "Kabupaten Merauke",
        "Kabupaten Mimika",
        "Kabupaten Nabire",
        "Kabupaten Nduga",
        "Kabupaten Paniai",
        "Kabupaten Pegunungan Bintang",
        "Kabupaten Puncak",
        "Kabupaten Puncak Jaya",
        "Kabupaten Sarmi",
        "Kabupaten Supiori",
        "Kabupaten Tolikara",
        "Kabupaten Waropen",
        "Kabupaten Yahukimo",
        "Kabupaten Yalimo",
        "Kota Jayapura"
      ],
      "Papua Barat": [
        "Kabupaten Fak Fak",
        "Kabupaten Kaimana",
        "Kabupaten Manokwari",
        "Kabupaten Maybrat",
        "Kabupaten Raja Ampat",
        "Kabupaten Sorong",
        "Kabupaten Sorong Selatan",
        "Kabupaten Tambrauw",
        "Kabupaten Teluk Bintuni",
        "Kabupaten Teluk Wondama",
        "Kota Sorong"
      ],
      "Para": [
        "Para"
      ],
      "Paraiba": [
        "Paraiba"
      ],
      "Parana": [
        "Parana"
      ],
      "Pardubicky": [
        "Pardubicky"
      ],
      "Paris": [
        "Paris"
      ],
      "Parma": [
        "Parma"
      ],
      "Pas-De-Calais": [
        "Pas-de-Calais"
      ],
      "Pasco": [
        "Pasco"
      ],
      "Pathum Thani": [
        "Pathum Thani"
      ],
      "Pattani": [
        "Pattani"
      ],
      "Pavia": [
        "Pavia"
      ],
      "Pavlodarskaia": [
        "Pavlodarskaia"
      ],
      "Pecs": [
        "Pecs"
      ],
      "Peeblesshire": [
        "Peeblesshire"
      ],
      "Pella": [
        "Pella"
      ],
      "Pembrokeshire": [
        "Pembrokeshire"
      ],
      "Peninsula De Setubal": [
        "Peninsula de Setubal"
      ],
      "Pennsylvania": [
        "Pennsylvania"
      ],
      "Perak": [
        "Perak"
      ],
      "Perlis": [
        "Perlis"
      ],
      "Perm Territory": [
        "Perm Territory"
      ],
      "Pernambuco": [
        "Pernambuco"
      ],
      "Perthshire": [
        "Perthshire"
      ],
      "Perugia": [
        "Perugia"
      ],
      "Pesaro-Urbino": [
        "Pesaro-Urbino"
      ],
      "Pescara": [
        "Pescara"
      ],
      "Pesnica": [
        "Pesnica"
      ],
      "Pest": [
        "Pest"
      ],
      "Phangnga": [
        "Phangnga"
      ],
      "Phatthalung": [
        "Phatthalung"
      ],
      "Phayao": [
        "Phayao"
      ],
      "Phetchabun": [
        "Phetchabun"
      ],
      "Phetchaburi": [
        "Phetchaburi"
      ],
      "Phichit": [
        "Phichit"
      ],
      "Phitsanulok": [
        "Phitsanulok"
      ],
      "Phra Nakhon Si Ayut.": [
        "Phra Nakhon Si Ayut."
      ],
      "Phrae": [
        "Phrae"
      ],
      "Phuket": [
        "Phuket"
      ],
      "Piacenza": [
        "Piacenza"
      ],
      "Piaui": [
        "Piaui"
      ],
      "Pieria": [
        "Pieria"
      ],
      "Pinhal Interior N.": [
        "Pinhal Interior N."
      ],
      "Pinhal Interior Sul": [
        "Pinhal Interior Sul"
      ],
      "Pinhal Litoral": [
        "Pinhal Litoral"
      ],
      "Piraievs": [
        "Piraievs"
      ],
      "Piran": [
        "Piran"
      ],
      "Piran - Pirano": [
        "Piran - Pirano"
      ],
      "Pisa": [
        "Pisa"
      ],
      "Pistoia": [
        "Pistoia"
      ],
      "Piura": [
        "Piura"
      ],
      "Pivka": [
        "Pivka"
      ],
      "Plovdiv": [
        "Plovdiv"
      ],
      "Plzensky": [
        "Plzensky"
      ],
      "Podkarpackie": [
        "podkarpackie"
      ],
      "Podlaskie": [
        "podlaskie"
      ],
      "Podlehnik": [
        "Podlehnik"
      ],
      "Podvelka": [
        "Podvelka"
      ],
      "Podèetrtek": [
        "Podèetrtek"
      ],
      "Pola": [
        "Pola"
      ],
      "Poltavs'Ka": [
        "Poltavs'ka"
      ],
      "Polzela": [
        "Polzela"
      ],
      "Pomorskie": [
        "pomorskie"
      ],
      "Pontevedra": [
        "Pontevedra"
      ],
      "Pordenone": [
        "Pordenone"
      ],
      "Port Said": [
        "Port Said"
      ],
      "Portuguesa": [
        "Portuguesa"
      ],
      "Postojna": [
        "Postojna"
      ],
      "Potenza": [
        "Potenza"
      ],
      "Pozesko-Slavonska": [
        "Pozesko-slavonska"
      ],
      "Prachin Buri": [
        "Prachin Buri"
      ],
      "Praha": [
        "Praha"
      ],
      "Prahova": [
        "Prahova"
      ],
      "Prato": [
        "Prato"
      ],
      "Prebold": [
        "Prebold"
      ],
      "Preddvor": [
        "Preddvor"
      ],
      "Prevalje": [
        "Prevalje"
      ],
      "Preveza": [
        "Preveza"
      ],
      "Primorye Territory": [
        "Primorye Territory"
      ],
      "Prince Edward Island": [
        "Prince Edward Island"
      ],
      "Ptuj": [
        "Ptuj"
      ],
      "Puconci": [
        "Puconci"
      ],
      "Puducherry": [
        "Puducherry"
      ],
      "Puebla": [
        "Puebla"
      ],
      "Puerto Rico": [
        "Puerto Rico"
      ],
      "Pulau Pinang": [
        "Pulau Pinang"
      ],
      "Punjab": [
        "Punjab"
      ],
      "Puno": [
        "Puno"
      ],
      "Putumayo": [
        "PUTUMAYO"
      ],
      "Puy-De-Dome": [
        "Puy-de-Dome"
      ],
      "Pyrenees (Hautes)": [
        "Pyrenees (Hautes)"
      ],
      "Pyrenees-Atlantiques": [
        "Pyrenees-Atlantiques"
      ],
      "Pyrenees-Orientales": [
        "Pyrenees-Orientales"
      ],
      "Qalyubia": [
        "Qalyubia"
      ],
      "Qena": [
        "Qena"
      ],
      "Qinghai": [
        "Qinghai"
      ],
      "Quebec": [
        "Quebec"
      ],
      "Queensland": [
        "Queensland"
      ],
      "Queretaro": [
        "Queretaro"
      ],
      "Quindio": [
        "QUINDIO"
      ],
      "Quintana Roo": [
        "Quintana Roo"
      ],
      "Radenci": [
        "Radenci"
      ],
      "Radeèe": [
        "Radeèe"
      ],
      "Radlje Ob Dravi": [
        "Radlje ob Dravi"
      ],
      "Radnorshire": [
        "Radnorshire"
      ],
      "Radovljica": [
        "Radovljica"
      ],
      "Ragusa": [
        "Ragusa"
      ],
      "Rajasthan": [
        "Rajasthan"
      ],
      "Ravenna": [
        "Ravenna"
      ],
      "Ravne Na Koroskem": [
        "Ravne Na Koroskem"
      ],
      "Ravne Na Koro¹Kem": [
        "Ravne na Koro¹kem"
      ],
      "Razkri¾Je": [
        "Razkri¾je"
      ],
      "Raèe-Fram": [
        "Raèe-Fram"
      ],
      "Red Sea": [
        "Red Sea"
      ],
      "Reg. Aut. Da Madeira": [
        "Reg. Aut. da Madeira"
      ],
      "Reg. Aut. Dos A¿¿Ores": [
        "Reg. Aut. dos A¿¿ores"
      ],
      "Reggio Calabria": [
        "Reggio Calabria"
      ],
      "Reggio Emilia": [
        "Reggio Emilia"
      ],
      "Renfrewshire": [
        "Renfrewshire"
      ],
      "Republ.Of Bashkortos": [
        "Republ.of Bashkortos"
      ],
      "Respublika Krim": [
        "Respublika Krim"
      ],
      "Rethimni": [
        "Rethimni"
      ],
      "Reunion": [
        "Reunion"
      ],
      "Rhineland Palatinate": [
        "Rhineland Palatinate"
      ],
      "Rhode Island": [
        "Rhode Island"
      ],
      "Rhone": [
        "Rhone"
      ],
      "Riau": [
        "Kabupaten Bengkalis",
        "Kabupaten Indragiri Hilir",
        "Kabupaten Indragiri Hulu",
        "Kabupaten Kampar",
        "Kabupaten Kepulauan Meranti",
        "Kabupaten Kuantan Singingi",
        "Kabupaten Pelalawan",
        "Kabupaten Rokan Hilir",
        "Kabupaten Rokan Hulu",
        "Kabupaten Siak",
        "Kota Dumai",
        "Kota Pekanbaru"
      ],
      "Ribnica": [
        "Ribnica"
      ],
      "Ribnica Na Pohorju": [
        "Ribnica na Pohorju"
      ],
      "Rieti": [
        "Rieti"
      ],
      "Rijecko-Goranska": [
        "Rijecko-goranska"
      ],
      "Rimini": [
        "Rimini"
      ],
      "Rio De Janeiro": [
        "Rio de Janeiro"
      ],
      "Rio Grande Do Norte": [
        "Rio Grande do Norte"
      ],
      "Rio Grande Do Sul": [
        "Rio Grande do Sul"
      ],
      "Rio Negro": [
        "Rio Negro"
      ],
      "Risaralda": [
        "RISARALDA"
      ],
      "Rivnens'Ka": [
        "Rivnens'ka"
      ],
      "Rize": [
        "Rize"
      ],
      "Rm - Santiago": [
        "RM - Santiago"
      ],
      "Rodhopi": [
        "Rodhopi"
      ],
      "Rogaland County": [
        "Rogaland County"
      ],
      "Rogatec": [
        "Rogatec"
      ],
      "Roga¹Ka Slatina": [
        "Roga¹ka Slatina"
      ],
      "Roga¹Ovci": [
        "Roga¹ovci"
      ],
      "Rome": [
        "Rome"
      ],
      "Rondonia": [
        "Rondonia"
      ],
      "Roraima": [
        "Roraima"
      ],
      "Roscommon": [
        "Roscommon"
      ],
      "Ross-Shire": [
        "Ross-shire"
      ],
      "Rovigo": [
        "Rovigo"
      ],
      "Roxburghshire": [
        "Roxburghshire"
      ],
      "Ruse": [
        "Ruse"
      ],
      "Rutland": [
        "Rutland"
      ],
      "Ru¹E": [
        "Ru¹e"
      ],
      "Saarland": [
        "Saarland"
      ],
      "Sabah": [
        "Sabah"
      ],
      "Saga": [
        "Saga"
      ],
      "Saint Gregoire Cedex": [
        "SAINT GREGOIRE CEDEX"
      ],
      "Saint-Pierre-Et-Miq.": [
        "Saint-Pierre-et-Miq."
      ],
      "Saitama": [
        "Saitama"
      ],
      "Sakarya": [
        "Sakarya"
      ],
      "Salaj": [
        "Salaj"
      ],
      "Salamanca": [
        "Salamanca"
      ],
      "Salerno": [
        "Salerno"
      ],
      "Salta": [
        "Salta"
      ],
      "Salzburg": [
        "Salzburg"
      ],
      "Samos": [
        "Samos"
      ],
      "Samsun": [
        "Samsun"
      ],
      "San Andres": [
        "SAN ANDRES"
      ],
      "San Juan": [
        "San Juan"
      ],
      "San Luis": [
        "San Luis"
      ],
      "San Luis Potosi": [
        "San Luis Potosi"
      ],
      "San Martin": [
        "San Martin"
      ],
      "Santa Catarina": [
        "Santa Catarina"
      ],
      "Santa Cruz": [
        "Santa Cruz"
      ],
      "Santa Fe": [
        "Santa Fe"
      ],
      "Santander": [
        "SANTANDER"
      ],
      "Santiago Del Estero": [
        "Santiago del Estero"
      ],
      "Sao Paulo": [
        "Sao Paulo"
      ],
      "Saone (Haute)": [
        "Saone (Haute)"
      ],
      "Saone-Et-Loire": [
        "Saone-et-Loire"
      ],
      "Sarawak": [
        "Sarawak"
      ],
      "Sarthe": [
        "Sarthe"
      ],
      "Saskatchewan": [
        "Saskatchewan"
      ],
      "Sassari": [
        "Sassari"
      ],
      "Satu Mare": [
        "Satu Mare"
      ],
      "Savoie": [
        "Savoie"
      ],
      "Savoie (Haute)": [
        "Savoie (Haute)"
      ],
      "Savona": [
        "Savona"
      ],
      "Saxony": [
        "Saxony"
      ],
      "Saxony-Anhalt": [
        "Saxony-Anhalt"
      ],
      "Schaffhausen": [
        "Schaffhausen"
      ],
      "Schleswig-Holstein": [
        "Schleswig-Holstein"
      ],
      "Schwyz": [
        "Schwyz"
      ],
      "Segovia": [
        "Segovia"
      ],
      "Seine-Et-Marne": [
        "Seine-et-Marne"
      ],
      "Seine-Maritime": [
        "Seine-Maritime"
      ],
      "Seine-Saint-Denis": [
        "Seine-Saint-Denis"
      ],
      "Sejong": [
        "Sejong"
      ],
      "Selangor": [
        "Selangor"
      ],
      "Selkirkshire": [
        "Selkirkshire"
      ],
      "Selnica Ob Dravi": [
        "Selnica ob Dravi"
      ],
      "Semiè": [
        "Semiè"
      ],
      "Sentjur Pri Celju": [
        "Sentjur Pri Celju"
      ],
      "Seoul": [
        "Seoul"
      ],
      "Serbia And Montenegro": [
        "Serbia and Montenegro"
      ],
      "Sergipe": [
        "Sergipe"
      ],
      "Serra Da Estrela": [
        "Serra da Estrela"
      ],
      "Serrai": [
        "Serrai"
      ],
      "Severo-Kazakhstansk": [
        "Severo-Kazakhstansk"
      ],
      "Sevilla": [
        "Sevilla"
      ],
      "Sevnica": [
        "Sevnica"
      ],
      "Sevres (Deux)": [
        "Sevres (Deux)"
      ],
      "Sezana": [
        "Sezana"
      ],
      "Se¾Ana": [
        "Se¾ana"
      ],
      "Shaanxi": [
        "Shaanxi"
      ],
      "Shandong": [
        "Shandong"
      ],
      "Shanghai": [
        "Shanghai"
      ],
      "Shanliurfa": [
        "Shanliurfa"
      ],
      "Shanxi": [
        "Shanxi"
      ],
      "Shetland": [
        "Shetland"
      ],
      "Shiga": [
        "Shiga"
      ],
      "Shimane": [
        "Shimane"
      ],
      "Shirnak": [
        "Shirnak"
      ],
      "Shizuoka": [
        "Shizuoka"
      ],
      "Shropshire": [
        "Shropshire"
      ],
      "Sibensko-Kninska": [
        "Sibensko-kninska"
      ],
      "Sibiu": [
        "Sibiu"
      ],
      "Sichuan": [
        "Sichuan"
      ],
      "Siena": [
        "Siena"
      ],
      "Siirt": [
        "Siirt"
      ],
      "Sikkim": [
        "Sikkim"
      ],
      "Sinaloa": [
        "Sinaloa"
      ],
      "Singapore": [
        "Singapore"
      ],
      "Sinop": [
        "Sinop"
      ],
      "Sint Maarten (Dutch Part)": [
        "Sint Maarten (Dutch part)"
      ],
      "Siracusa": [
        "Siracusa"
      ],
      "Sisacko-Moslavacka": [
        "Sisacko-moslavacka"
      ],
      "Sivas": [
        "Sivas"
      ],
      "Skaane County": [
        "Skaane County"
      ],
      "Skofja Loka": [
        "Skofja Loka"
      ],
      "Slaskie": [
        "slaskie"
      ],
      "Slavonskobrodska": [
        "Slavonskobrodska"
      ],
      "Sligo": [
        "Sligo"
      ],
      "Slovenj Gradec": [
        "Slovenj Gradec"
      ],
      "Slovenska Bistrica": [
        "Slovenska Bistrica"
      ],
      "Slovenske Konjice": [
        "Slovenske Konjice"
      ],
      "Smarje Pri Jelsah": [
        "Smarje Pri Jelsah"
      ],
      "Sodra¾Ica": [
        "Sodra¾ica"
      ],
      "Soedermanland County": [
        "Soedermanland County"
      ],
      "Sofiya": [
        "Sofiya"
      ],
      "Sogn Og Fjordane C.": [
        "Sogn og Fjordane C."
      ],
      "Sohag": [
        "Sohag"
      ],
      "Solothurn": [
        "Solothurn"
      ],
      "Solèava": [
        "Solèava"
      ],
      "Somerset": [
        "Somerset"
      ],
      "Somme": [
        "Somme"
      ],
      "Somogy": [
        "Somogy"
      ],
      "Sondrio": [
        "Sondrio"
      ],
      "Sonora": [
        "Sonora"
      ],
      "Sopron": [
        "Sopron"
      ],
      "Sor-Trondelag County": [
        "Sor-Trondelag County"
      ],
      "Soria": [
        "Soria"
      ],
      "South Australia": [
        "South Australia"
      ],
      "South Carolina": [
        "South Carolina"
      ],
      "South Dakota": [
        "South Dakota"
      ],
      "South Denmark": [
        "South Denmark"
      ],
      "South Glamorgan": [
        "South Glamorgan"
      ],
      "South Luzon": [
        "South Luzon"
      ],
      "South Mindanao": [
        "South Mindanao"
      ],
      "South Sinai": [
        "South Sinai"
      ],
      "South Yorkshire": [
        "South Yorkshire"
      ],
      "Southern": [
        "Southern"
      ],
      "Southern Finnland": [
        "Southern Finnland"
      ],
      "Southland": [
        "Southland"
      ],
      "Splitsko-Dalmatinska": [
        "Splitsko-dalmatinska"
      ],
      "St. Gallen": [
        "St. Gallen"
      ],
      "Sta. Cruz Tenerife": [
        "Sta. Cruz Tenerife"
      ],
      "Staffordshire": [
        "Staffordshire"
      ],
      "Star¹E": [
        "Star¹e"
      ],
      "Stati Esteri": [
        "Stati Esteri"
      ],
      "Stavropol Territory": [
        "Stavropol Territory"
      ],
      "Stirlingshire": [
        "Stirlingshire"
      ],
      "Stockholm County": [
        "Stockholm County"
      ],
      "Stredocesky": [
        "Stredocesky"
      ],
      "Stredoslovensky": [
        "Stredoslovensky"
      ],
      "Styria": [
        "Styria"
      ],
      "Suceava": [
        "Suceava"
      ],
      "Sucre": [
        "Sucre"
      ],
      "Suez": [
        "Suez"
      ],
      "Suffolk": [
        "Suffolk"
      ],
      "Sulawesi Barat": [
        "Kabupaten Majene",
        "Kabupaten Mamasa",
        "Kabupaten Mamuju",
        "Kabupaten Mamuju Utara",
        "Kabupaten Polewali Mandar"
      ],
      "Sulawesi Selatan": [
        "Kabupaten Bantaeng",
        "Kabupaten Barru",
        "Kabupaten Bone",
        "Kabupaten Bulukumba",
        "Kabupaten Enrekang",
        "Kabupaten Gowa",
        "Kabupaten Jeneponto",
        "Kabupaten Kepulauan Selayar",
        "Kabupaten Luwu",
        "Kabupaten Luwu Timur",
        "Kabupaten Luwu Utara",
        "Kabupaten Maros",
        "Kabupaten Pangkajene Kepulauan",
        "Kabupaten Pinrang",
        "Kabupaten Sidenreng Rappang",
        "Kabupaten Sinjai",
        "Kabupaten Soppeng",
        "Kabupaten Takalar",
        "Kabupaten Tana Toraja",
        "Kabupaten Toraja Utara",
        "Kabupaten Wajo",
        "Kota Makassar",
        "Kota Palopo",
        "Kota Pare Pare"
      ],
      "Sulawesi Tengah": [
        "Kabupaten Banggai",
        "Kabupaten Banggai Kepulauan",
        "Kabupaten Buol",
        "Kabupaten Donggala",
        "Kabupaten Morowali",
        "Kabupaten Parigi Moutong",
        "Kabupaten Poso",
        "Kabupaten Sigi",
        "Kabupaten Tojo Una Una",
        "Kabupaten Toli Toli",
        "Kota Palu"
      ],
      "Sulawesi Tenggara": [
        "Kabupaten Bombana",
        "Kabupaten Buton",
        "Kabupaten Buton Utara",
        "Kabupaten Kolaka",
        "Kabupaten Kolaka Utara",
        "Kabupaten Konawe",
        "Kabupaten Konawe Selatan",
        "Kabupaten Konawe Utara",
        "Kabupaten Muna",
        "Kabupaten Wakatobi",
        "Kota Bau Bau",
        "Kota Kendari"
      ],
      "Sulawesi Utara": [
        "Kabupaten Bolaang Mongondow",
        "Kabupaten Bolaang Mongondow Selatan",
        "Kabupaten Bolaang Mongondow Timur",
        "Kabupaten Bolaang Mongondow Utara",
        "Kabupaten Kepulauan Sangihe",
        "Kabupaten Kepulauan Siau Tagulandang Biaro",
        "Kabupaten Kepulauan Talaud",
        "Kabupaten Minahasa",
        "Kabupaten Minahasa Selatan",
        "Kabupaten Minahasa Tenggara",
        "Kabupaten Minahasa Utara",
        "Kota Bitung",
        "Kota Kotamobagu",
        "Kota Manado",
        "Kota Tomohon"
      ],
      "Sumatera Barat": [
        "Kabupaten Agam",
        "Kabupaten Dharmasraya",
        "Kabupaten Kepulauan Mentawai",
        "Kabupaten Lima Puluh Kota",
        "Kabupaten Padang Pariaman",
        "Kabupaten Pasaman",
        "Kabupaten Pasaman Barat",
        "Kabupaten Pesisir Selatan",
        "Kabupaten Sijunjung",
        "Kabupaten Solok",
        "Kabupaten Solok Selatan",
        "Kabupaten Tanah Datar",
        "Kota Bukittinggi",
        "Kota Padang",
        "Kota Padang Panjang",
        "Kota Pariaman",
        "Kota Payakumbuh",
        "Kota Sawahlunto",
        "Kota Solok"
      ],
      "Sumatera Selatan": [
        "Kabupaten Banyuasin",
        "Kabupaten Empat Lawang",
        "Kabupaten Lahat",
        "Kabupaten Muara Enim",
        "Kabupaten Musi Banyuasin",
        "Kabupaten Musi Rawas",
        "Kabupaten Ogan Ilir",
        "Kabupaten Ogan Komering Ilir",
        "Kabupaten Ogan Komering Ulu",
        "Kabupaten Oku Selatan",
        "Kabupaten Oku Timur",
        "Kota Lubuk Linggau",
        "Kota Pagar Alam",
        "Kota Palembang",
        "Kota Prabumulih"
      ],
      "Sumatera Utara": [
        "Kabupaten Asahan",
        "Kabupaten Batu Bara",
        "Kabupaten Dairi",
        "Kabupaten Deli Serdang",
        "Kabupaten Humbang Hasundutan",
        "Kabupaten Karo",
        "Kabupaten Labuhanbatu",
        "Kabupaten Labuhanbatu Selatan",
        "Kabupaten Labuhanbatu Utara",
        "Kabupaten Langkat",
        "Kabupaten Mandailing Natal",
        "Kabupaten Nias",
        "Kabupaten Nias Barat",
        "Kabupaten Nias Selatan",
        "Kabupaten Nias Utara",
        "Kabupaten Padang Lawas",
        "Kabupaten Padang Lawas Utara",
        "Kabupaten Pakpak Bharat",
        "Kabupaten Samosir",
        "Kabupaten Serdang Bedagai",
        "Kabupaten Simalungun",
        "Kabupaten Tapanuli Selatan",
        "Kabupaten Tapanuli Tengah",
        "Kabupaten Tapanuli Utara",
        "Kabupaten Toba Samosir",
        "Kota Binjai",
        "Kota Gunungsitoli",
        "Kota Medan",
        "Kota Padang Sidempuan",
        "Kota Pematangsiantar",
        "Kota Sibolga",
        "Kota Tanjung Balai",
        "Kota Tebing Tinggi"
      ],
      "Sums'Ka": [
        "Sums'ka"
      ],
      "Surrey": [
        "Farnham",
        "Surrey"
      ],
      "Sutherland": [
        "Sutherland"
      ],
      "Sveta Ana": [
        "Sveta Ana"
      ],
      "Sveti Andra¾ V Slov.": [
        "Sveti Andra¾ v Slov."
      ],
      "Sveti Jurij": [
        "Sveti Jurij"
      ],
      "Swietokrzyskie": [
        "swietokrzyskie"
      ],
      "Szabolcs-Szat.-Bereg": [
        "Szabolcs-Szat.-Bereg"
      ],
      "Szeged": [
        "Szeged"
      ],
      "Szekesfehervar": [
        "Szekesfehervar"
      ],
      "Szolnok": [
        "Szolnok"
      ],
      "Szombathely": [
        "Szombathely"
      ],
      "Tabasco": [
        "Tabasco"
      ],
      "Tabor": [
        "Tabor"
      ],
      "Tachira": [
        "Tachira"
      ],
      "Tacna": [
        "Tacna"
      ],
      "Taipei": [
        "Taipei"
      ],
      "Taiwan": [
        "Taiwan"
      ],
      "Tamaulipas": [
        "Tamaulipas"
      ],
      "Tamega": [
        "Tamega"
      ],
      "Tamil Nadu": [
        "Tamil Nadu"
      ],
      "Taranaki": [
        "Taranaki"
      ],
      "Taranto": [
        "Taranto"
      ],
      "Tarn": [
        "Tarn"
      ],
      "Tarn-Et-Garonne": [
        "Tarn-et-Garonne"
      ],
      "Tarragona": [
        "Tarragona"
      ],
      "Tasmania": [
        "Tasmania"
      ],
      "Tatabanya": [
        "Tatabanya"
      ],
      "Tatarstan Republic": [
        "Tatarstan Republic"
      ],
      "Tekirdag": [
        "Tekirdag"
      ],
      "Tel Aviv": [
        "Tel Aviv"
      ],
      "Telemark County": [
        "Telemark County"
      ],
      "Teleorman": [
        "Teleorman"
      ],
      "Tennessee": [
        "Tennessee"
      ],
      "Teramo": [
        "Teramo"
      ],
      "Terni": [
        "Terni"
      ],
      "Ternopil'S'Ka": [
        "Ternopil's'ka"
      ],
      "Territ.-De-Belfort": [
        "Territ.-de-Belfort"
      ],
      "Teruel": [
        "Teruel"
      ],
      "Texas": [
        "Texas"
      ],
      "The Amur Area": [
        "The Amur Area"
      ],
      "The Arkhangelsk Area": [
        "The Arkhangelsk Area"
      ],
      "The Astrakhan Area": [
        "The Astrakhan Area"
      ],
      "The Belgorod Area": [
        "The Belgorod Area"
      ],
      "The Bryansk Area": [
        "The Bryansk Area"
      ],
      "The Chelyabinsk Area": [
        "The Chelyabinsk Area"
      ],
      "The Irkutsk Area": [
        "The Irkutsk Area"
      ],
      "The Ivanovo Area": [
        "The Ivanovo Area"
      ],
      "The Jewish Auton.Are": [
        "The Jewish Auton.are"
      ],
      "The Kaliningrad Area": [
        "The Kaliningrad Area"
      ],
      "The Kaluga Area": [
        "The Kaluga Area"
      ],
      "The Kemerovo Area": [
        "The Kemerovo Area"
      ],
      "The Kirov Area": [
        "The Kirov Area"
      ],
      "The Kostroma Area": [
        "The Kostroma Area"
      ],
      "The Kurgan Area": [
        "The Kurgan Area"
      ],
      "The Kursk Area": [
        "The Kursk Area"
      ],
      "The Leningrad Area": [
        "The Leningrad Area"
      ],
      "The Lipetsk Area": [
        "The Lipetsk Area"
      ],
      "The Magadan Area": [
        "The Magadan Area"
      ],
      "The Moscow Area": [
        "The Moscow Area"
      ],
      "The Murmansk Area": [
        "The Murmansk Area"
      ],
      "The Nizhniy Novgorod": [
        "The Nizhniy Novgorod"
      ],
      "The North": [
        "The north"
      ],
      "The Novgorod Area": [
        "The Novgorod Area"
      ],
      "The Novosibirsk Area": [
        "The Novosibirsk Area"
      ],
      "The Omsk Area": [
        "The Omsk Area"
      ],
      "The Orenburg Area": [
        "The Orenburg Area"
      ],
      "The Oryol Area": [
        "The Oryol Area"
      ],
      "The Penza Area": [
        "The Penza Area"
      ],
      "The Pskov Area": [
        "The Pskov Area"
      ],
      "The Rostov Area": [
        "The Rostov Area"
      ],
      "The Ryazan Area": [
        "The Ryazan Area"
      ],
      "The Sakhalin Area": [
        "The Sakhalin Area"
      ],
      "The Samara Area": [
        "The Samara Area"
      ],
      "The Saratov Area": [
        "The Saratov Area"
      ],
      "The Smolensk Area": [
        "The Smolensk Area"
      ],
      "The South": [
        "The south"
      ],
      "The Sverdlovsk Area": [
        "The Sverdlovsk Area"
      ],
      "The Tambov Area": [
        "The Tambov Area"
      ],
      "The Taymir Auton.Dis": [
        "The Taymir Auton.dis"
      ],
      "The Tomsk Area": [
        "The Tomsk Area"
      ],
      "The Tula Area": [
        "The Tula Area"
      ],
      "The Tver Area": [
        "The Tver Area"
      ],
      "The Tyumen Area": [
        "The Tyumen Area"
      ],
      "The Udmurt Republic": [
        "The Udmurt Republic"
      ],
      "The Ulyanovsk Area": [
        "The Ulyanovsk Area"
      ],
      "The Vladimir Area": [
        "The Vladimir Area"
      ],
      "The Volgograd Area": [
        "The Volgograd Area"
      ],
      "The Vologda Area": [
        "The Vologda Area"
      ],
      "The Voronezh Area": [
        "The Voronezh Area"
      ],
      "The West Coast": [
        "The west coast"
      ],
      "The Yaroslavl Area": [
        "The Yaroslavl Area"
      ],
      "Thesprotia": [
        "Thesprotia"
      ],
      "Thessaloniki": [
        "Thessaloniki"
      ],
      "Thurgau": [
        "Thurgau"
      ],
      "Thuringia": [
        "Thuringia"
      ],
      "Tianjin": [
        "Tianjin"
      ],
      "Ticino": [
        "Ticino"
      ],
      "Tierra De Fuego": [
        "Tierra de Fuego"
      ],
      "Timis": [
        "Timis"
      ],
      "Tipperary": [
        "Tipperary"
      ],
      "Ti¹Ina": [
        "Ti¹ina"
      ],
      "Tlaxcala": [
        "Tlaxcala"
      ],
      "Tocantins": [
        "Tocantins"
      ],
      "Tochigi": [
        "Tochigi"
      ],
      "Tokat": [
        "Tokat"
      ],
      "Tokushima": [
        "Tokushima"
      ],
      "Tokyo": [
        "Tokyo"
      ],
      "Toledo": [
        "Toledo"
      ],
      "Tolima": [
        "TOLIMA"
      ],
      "Tolmin": [
        "Tolmin"
      ],
      "Tolna": [
        "Tolna"
      ],
      "Tottori": [
        "Tottori"
      ],
      "Toyama": [
        "Toyama"
      ],
      "Trabzon": [
        "Trabzon"
      ],
      "Trapani": [
        "Trapani"
      ],
      "Trbovlje": [
        "Trbovlje"
      ],
      "Trebnje": [
        "Trebnje"
      ],
      "Trengganu": [
        "Trengganu"
      ],
      "Trento": [
        "Trento"
      ],
      "Treviso": [
        "Treviso"
      ],
      "Trieste": [
        "Trieste"
      ],
      "Trikala": [
        "Trikala"
      ],
      "Tripura": [
        "Tripura"
      ],
      "Trnovska Vas": [
        "Trnovska vas"
      ],
      "Troms County": [
        "Troms County"
      ],
      "Trujillo": [
        "Trujillo"
      ],
      "Trzic": [
        "Trzic"
      ],
      "Trzin": [
        "Trzin"
      ],
      "Tr¾Iè": [
        "Tr¾iè"
      ],
      "Tucuman": [
        "Tucuman"
      ],
      "Tulcea": [
        "Tulcea"
      ],
      "Tumbes": [
        "Tumbes"
      ],
      "Tunceli": [
        "Tunceli"
      ],
      "Turin": [
        "Turin"
      ],
      "Turni¹Èe": [
        "Turni¹èe"
      ],
      "Tuva Republic": [
        "Tuva Republic"
      ],
      "Tyrol": [
        "Tyrol"
      ],
      "Tyrone": [
        "Tyrone"
      ],
      "T´Ai-Pei": [
        "T´ai-pei"
      ],
      "Ucayali": [
        "Ucayali"
      ],
      "Udine": [
        "Udine"
      ],
      "Ulsan": [
        "Ulsan"
      ],
      "United Nations": [
        "United Nations"
      ],
      "Upper Austria": [
        "Upper Austria"
      ],
      "Uppsala County": [
        "Uppsala County"
      ],
      "Uri": [
        "Uri"
      ],
      "Ushak": [
        "Ushak"
      ],
      "Ust-Ordinsky Buryat": [
        "Ust-Ordinsky Buryat"
      ],
      "Ustecky": [
        "Ustecky"
      ],
      "Utah": [
        "Utah"
      ],
      "Utrecht": [
        "Utrecht"
      ],
      "Uttar Pradesh": [
        "Uttar Pradesh"
      ],
      "Uttarakhand": [
        "Uttarakhand"
      ],
      "V - Valparaiso": [
        "V - Valparaiso"
      ],
      "Vaermland County": [
        "Vaermland County"
      ],
      "Vaesterbotten County": [
        "Vaesterbotten County"
      ],
      "Vaesternorrland Cnty": [
        "Vaesternorrland Cnty"
      ],
      "Vaestmanland County": [
        "Vaestmanland County"
      ],
      "Vaestra Goetaland C.": [
        "Vaestra Goetaland C."
      ],
      "Val-D'Oise": [
        "Val-d'Oise"
      ],
      "Val-De-Marne": [
        "Val-de-Marne"
      ],
      "Valais": [
        "Valais"
      ],
      "Valencia": [
        "Valencia"
      ],
      "Valladolid": [
        "Valladolid"
      ],
      "Valle": [
        "VALLE"
      ],
      "Van": [
        "Van"
      ],
      "Var": [
        "Var"
      ],
      "Varazdinska": [
        "Varazdinska"
      ],
      "Varese": [
        "Varese"
      ],
      "Vargas": [
        "Vargas"
      ],
      "Varna": [
        "Varna"
      ],
      "Vas": [
        "Vas"
      ],
      "Vaslui": [
        "Vaslui"
      ],
      "Vaucluse": [
        "Vaucluse"
      ],
      "Vaud": [
        "Vaud"
      ],
      "Vaupes": [
        "VAUPES"
      ],
      "Velenje": [
        "Velenje"
      ],
      "Velika Polana": [
        "Velika Polana"
      ],
      "Velike La¹Èe": [
        "Velike La¹èe"
      ],
      "Vendee": [
        "Vendee"
      ],
      "Venice": [
        "Venice"
      ],
      "Veracruz": [
        "Veracruz"
      ],
      "Verbania": [
        "Verbania"
      ],
      "Vercelli": [
        "Vercelli"
      ],
      "Vermont": [
        "Vermont"
      ],
      "Verona": [
        "Verona"
      ],
      "Ver¾Ej": [
        "Ver¾ej"
      ],
      "Vest-Agder County": [
        "Vest-Agder County"
      ],
      "Vestfold County": [
        "Vestfold County"
      ],
      "Veszprem": [
        "Veszprem"
      ],
      "Vi - Rancagua": [
        "VI - Rancagua"
      ],
      "Vibo Valentia": [
        "Vibo Valentia"
      ],
      "Vicenza": [
        "Vicenza"
      ],
      "Vichada": [
        "VICHADA"
      ],
      "Victoria": [
        "Victoria"
      ],
      "Videm": [
        "Videm"
      ],
      "Vienna": [
        "Vienna"
      ],
      "Vienne": [
        "Vienne"
      ],
      "Vienne (Haute)": [
        "Vienne (Haute)"
      ],
      "Vii - Talca": [
        "VII - Talca"
      ],
      "Viii - Concepcion": [
        "VIII - Concepcion"
      ],
      "Vilcea": [
        "Vilcea"
      ],
      "Vinnits'Ka": [
        "Vinnits'ka"
      ],
      "Vipava": [
        "Vipava"
      ],
      "Virgin Islands": [
        "Virgin Islands"
      ],
      "Virginia": [
        "Virginia"
      ],
      "Viroviticko-Podravac": [
        "Viroviticko-podravac"
      ],
      "Vitanje": [
        "Vitanje"
      ],
      "Viterbo": [
        "Viterbo"
      ],
      "Vizcaya": [
        "Vizcaya"
      ],
      "Vodice": [
        "Vodice"
      ],
      "Voiotia": [
        "Voiotia"
      ],
      "Vojnik": [
        "Vojnik"
      ],
      "Volins'Ka": [
        "Volins'ka"
      ],
      "Vorarlberg": [
        "Vorarlberg"
      ],
      "Vosges": [
        "Vosges"
      ],
      "Vostochno-Kazakhstan": [
        "Vostochno-Kazakhstan"
      ],
      "Vrancea": [
        "Vrancea"
      ],
      "Vransko": [
        "Vransko"
      ],
      "Vrhnika": [
        "Vrhnika"
      ],
      "Vukovarsko-Srijemska": [
        "Vukovarsko-srijemska"
      ],
      "Vuzenica": [
        "Vuzenica"
      ],
      "Vychodoslovensky": [
        "Vychodoslovensky"
      ],
      "Vysocina": [
        "Vysocina"
      ],
      "W.P Putrajaya": [
        "W.P Putrajaya"
      ],
      "Waikato": [
        "Waikato"
      ],
      "Wakayama": [
        "Wakayama"
      ],
      "Wallis-Et-Futuna": [
        "Wallis-et-Futuna"
      ],
      "Warminsko-Mazurskie": [
        "warminsko-mazurskie"
      ],
      "Warwickshire": [
        "Warwickshire"
      ],
      "Washington": [
        "Washington"
      ],
      "Waterford": [
        "Waterford"
      ],
      "Wellington": [
        "Wellington"
      ],
      "West Bengal": [
        "West Bengal"
      ],
      "West Coast": [
        "West Coast"
      ],
      "West Glamorgan": [
        "West Glamorgan"
      ],
      "West Lothian": [
        "West Lothian"
      ],
      "West Sussex": [
        "West Sussex"
      ],
      "West Virginia": [
        "West Virginia"
      ],
      "West Visayas": [
        "West Visayas"
      ],
      "West Yorkshire": [
        "West Yorkshire"
      ],
      "West-Vlaanderen": [
        "West-Vlaanderen"
      ],
      "Western Australia": [
        "Western Australia"
      ],
      "Western Cape": [
        "Western Cape"
      ],
      "Western Finnland": [
        "Western Finnland"
      ],
      "Western Mindanao": [
        "Western Mindanao"
      ],
      "Westmeath": [
        "Westmeath"
      ],
      "Westmorland": [
        "Westmorland"
      ],
      "Wexford": [
        "Wexford"
      ],
      "Wicklow": [
        "Wicklow"
      ],
      "Wielkopolskie": [
        "wielkopolskie"
      ],
      "Wigtownshire": [
        "Wigtownshire"
      ],
      "Wil. Persekutuan": [
        "Wil. Persekutuan"
      ],
      "Wiltshire": [
        "Wiltshire"
      ],
      "Wisconsin": [
        "Wisconsin"
      ],
      "Worcestershire": [
        "Worcestershire"
      ],
      "Wyoming": [
        "Wyoming"
      ],
      "X - Puerto Montt": [
        "X - Puerto Montt"
      ],
      "Xanthi": [
        "Xanthi"
      ],
      "Xi - Coyhaique": [
        "XI - Coyhaique"
      ],
      "Xii - Punta Arenas": [
        "XII - Punta Arenas"
      ],
      "Xinjiang": [
        "Xinjiang"
      ],
      "Xiv - Los Rios": [
        "XIV - Los Rios"
      ],
      "Xizang": [
        "Xizang"
      ],
      "Xv - Arica Y Parinac": [
        "XV - Arica y Parinac"
      ],
      "Yakutiya-Saha Rrepub": [
        "Yakutiya-Saha Rrepub"
      ],
      "Yalova": [
        "Yalova"
      ],
      "Yamagata": [
        "Yamagata"
      ],
      "Yamaguchi": [
        "Yamaguchi"
      ],
      "Yamanashi": [
        "Yamanashi"
      ],
      "Yaracuy": [
        "Yaracuy"
      ],
      "Yonne": [
        "Yonne"
      ],
      "Yozgat": [
        "Yozgat"
      ],
      "Yucatan": [
        "Yucatan"
      ],
      "Yukon Territory": [
        "Yukon Territory"
      ],
      "Yunnan": [
        "Yunnan"
      ],
      "Yvelines": [
        "Yvelines"
      ],
      "Zabaykalsk Territory": [
        "Zabaykalsk Territory"
      ],
      "Zacatecas": [
        "Zacatecas"
      ],
      "Zachodniopomorskie": [
        "zachodniopomorskie"
      ],
      "Zadarska": [
        "Zadarska"
      ],
      "Zagorje Ob Savi": [
        "Zagorje ob Savi"
      ],
      "Zagreb": [
        "Zagreb"
      ],
      "Zagrebacka": [
        "Zagrebacka"
      ],
      "Zakarpats'Ka": [
        "Zakarpats'ka"
      ],
      "Zakinthos": [
        "Zakinthos"
      ],
      "Zala": [
        "Zala"
      ],
      "Zalaegerszeg": [
        "Zalaegerszeg"
      ],
      "Zalec": [
        "Zalec"
      ],
      "Zamora": [
        "Zamora"
      ],
      "Zapadno-Kazakhst": [
        "Zapadno-Kazakhst"
      ],
      "Zapadoslovensky": [
        "Zapadoslovensky"
      ],
      "Zaporiz'Ka": [
        "Zaporiz'ka"
      ],
      "Zara": [
        "Zara"
      ],
      "Zaragoza": [
        "Zaragoza"
      ],
      "Zavrè": [
        "Zavrè"
      ],
      "Zealand": [
        "Zealand"
      ],
      "Zeeland": [
        "Zeeland"
      ],
      "Zhejiang": [
        "Hangzhou",
        "Zhejiang"
      ],
      "Zhitomirs'Ka": [
        "Zhitomirs'ka"
      ],
      "Zlinsky": [
        "Zlinsky"
      ],
      "Zonguldak": [
        "Zonguldak"
      ],
      "Zreèe": [
        "Zreèe"
      ],
      "Zug": [
        "Zug"
      ],
      "Zuid-Holland": [
        "Zuid-Holland"
      ],
      "Zulia": [
        "Zulia"
      ],
      "Zurich": [
        "Zurich"
      ],
      "©Alovci": [
        "©alovci"
      ],
      "©Empeter - Vrtojba": [
        "©empeter - Vrtojba"
      ],
      "©Entilj": [
        "©entilj"
      ],
      "©Entjernej": [
        "©entjernej"
      ],
      "©Entjur Pri Celju": [
        "©entjur pri Celju"
      ],
      "©Enèur": [
        "©enèur"
      ],
      "©Kocjan": [
        "©kocjan"
      ],
      "©Kofja Loka": [
        "©kofja Loka"
      ],
      "©Kofljica": [
        "©kofljica"
      ],
      "©Marje Pri Jel¹Ah": [
        "©marje pri Jel¹ah"
      ],
      "©Martno Ob Paki": [
        "©martno ob Paki"
      ],
      "©O¹Tanj": [
        "©o¹tanj"
      ],
      "©Tore": [
        "©tore"
      ],
      "®Alec": [
        "®alec"
      ],
      "®Elezniki": [
        "®elezniki"
      ],
      "®Etale": [
        "®etale"
      ],
      "®Iri": [
        "®iri"
      ],
      "®U¾Emberk": [
        "®u¾emberk"
      ],
      "¿¿Irovnica": [
        "¿¿irovnica"
      ],
      "Èren¹Ovci": [
        "Èren¹ovci"
      ],
      "Èrna Na Koro¹Kem": [
        "Èrna na Koro¹kem"
      ],
      "Èrnomelj": [
        "Èrnomelj"
      ]
    };
      

    const provinceRepo = dataSource.getRepository(Province);
    const cityRepo = dataSource.getRepository(City);


    for (const [provinceName, data] of Object.entries(arr)) {
        const province = await provinceRepo.findOne({
          where: { name: provinceName }
        });

        if (!province) {
          console.warn(`province ${provinceName} does not exists`);
          continue;
        }

        for (const obj of data) {
            await cityRepo.save(
                cityRepo.create({
                    name : obj,
                    province: {
                        id : province.id
                    }
                })
            )
        }
        console.log(`✅ Seeded ${provinceName} (${data.length})`);
    }

    console.log('✅ City seeded');
}