import { CompetencyCategory } from '@modules/master/competency-category/entities/competency-category.entity';
import { CompetencyItem } from '@modules/master/competency-item/entities/competency-item.entity';
import { CompetencySubCategory } from '@modules/master/competency-subcategory/entities/competency-subcategory.entity';
import { DataSource } from 'typeorm';

export async function seedCompetencyItems(dataSource: DataSource) {
    const arr: Record<string, Record<string, string>[]> = {
        'Building & Office Facilities||Building & Construction': [
            {
                code: 'BOF.BCS.1',
                name: 'AC Precission',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.9',
                name: 'Building Maintenance Support',
                description:
                    'Includes janitorial cleaning services, industrial cleaning services',
            },
            {
                code: 'BOF.BCS.10',
                name: 'CME Services',
                description:
                    'Services and activities that deal with civil, mechanical and electrical power networks',
            },
            {
                code: 'BOF.BCS.8',
                name: 'Concrete, Cement & Plaster',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.12',
                name: 'Demolition ',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.14',
                name: 'Doors & Windows & Glass',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.11',
                name: 'Electrical Equipment, Parts & Supplies',
                description:
                    'Includes KwH Box, PLN pole, transformer, grounding/ earthing system',
            },
            {
                code: 'BOF.BCS.16',
                name: 'Exterior Finishing Materials',
                description: 'Includes wall painting, wall coating, etc.',
            },
            {
                code: 'BOF.BCS.17',
                name: 'Fire Alarm',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.18',
                name: 'HVAC Construction Services',
                description: 'Includes AC, DC Fans for power systems',
            },
            {
                code: 'BOF.BCS.19',
                name: 'Interior Finishing & Remodeling',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.13',
                name: 'Lighting Components & Accessories',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.3',
                name: 'Office Acquisition',
                description: 'Excluding permit services',
            },
            {
                code: 'BOF.BCS.4',
                name: 'Office Leasing',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.5',
                name: 'Other Building Services & Components',
                description: 'Includes fence and yard for networks',
            },
            {
                code: 'BOF.BCS.6',
                name: 'Plumbing Construction Services',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.15',
                name: 'Project Management Oversight',
                description:
                    'Overseeing construction works, making sure that it will be finished as scheduled with the right quality',
            },
            {
                code: 'BOF.BCS.7',
                name: 'Roads & Landscape',
                description: 'Not Available',
            },
            {
                code: 'BOF.BCS.2',
                name: 'Structural Building Products & Parts',
                description:
                    'Includes wall panels, roof trusses, floor trusses (a framework, typically consisting of rafters, posts, and struts, supporting a roof, bridge, or other structure); Includes tower structure',
            },
        ],
        'Building & Office Facilities||Food & Beverage': [
            {
                code: 'BOF.FNB.1',
                name: 'Beverages',
                description: 'Not Available',
            },
            {
                code: 'BOF.FNB.2',
                name: 'Cookware, Warming & Kitchen Tools',
                description: 'Not Available',
            },
            {
                code: 'BOF.FNB.3',
                name: 'Meals',
                description: 'Not Available',
            },
            {
                code: 'BOF.FNB.4',
                name: 'Snacks',
                description: 'Not Available',
            },
        ],
        'Building & Office Facilities||Furniture & Furnishings': [
            {
                code: 'BOF.FUR.1',
                name: 'Desks and workstations',
                description:
                    'Includes set of workstation (Includes desk, table, cabinet, computer chair)',
            },
            {
                code: 'BOF.FUR.2',
                name: 'Others',
                description:
                    'Includes office decorations, cabinets, cupboards, file drawers',
            },
            {
                code: 'BOF.FUR.3',
                name: 'Seating',
                description:
                    'Includes sofa, couch, lounge chair, computer chairs, etc.',
            },
        ],
        'Building & Office Facilities||Office Machines & Accessories': [
            {
                code: 'BOF.OFM.1',
                name: 'AV System ',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.2',
                name: 'Binding & Lamination Machines',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.3',
                name: 'Display',
                description:
                    'Includes LED, LCD, Smart Table, and other monitoring displays',
            },
            {
                code: 'BOF.OFM.4',
                name: 'Office Equipment Rental Or Leasing Svcs',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.5',
                name: 'Printer, Photocopier, Fax Machines',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.6',
                name: 'Projectors',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.8',
                name: 'Queueing System',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.10',
                name: 'Security Service System & Equipment',
                description: 'Include Access Control system and equipment',
            },
            {
                code: 'BOF.OFM.11',
                name: 'Smart Office System',
                description: 'Not Available',
            },
            {
                code: 'BOF.OFM.7',
                name: 'Telecommunication System',
                description:
                    'Includes phones and relevant accessories for calling',
            },
            {
                code: 'BOF.OFM.9',
                name: 'Video Conference System',
                description: 'Not Available',
            },
        ],
        'Building & Office Facilities||Office Supplies & Corporate Products': [
            {
                code: 'BOF.OSC.1',
                name: 'Corporate Uniforms',
                description: 'Corporate uniforms',
            },
            {
                code: 'BOF.OSC.2',
                name: 'Office Supplies',
                description:
                    'Includes: correction tape, post-it notes, eraser, stapler, scissors, punch-holes, calculators, writing instruments, paper, pens (Includes ink)',
            },
            {
                code: 'BOF.OSC.3',
                name: 'Others',
                description:
                    'Includes water dispenser, flower vase, frame, etc. ',
            },
        ],
        'Building & Office Facilities||Packaging Supplies': [
            {
                code: 'BOF.PAC.1',
                name: 'Packaging Supplies',
                description: 'Not Available',
            },
        ],
        'Building & Office Facilities||Published Products': [
            {
                code: 'BOF.PUP.2',
                name: 'Label and Tags',
                description:
                    'A label (as distinct from signage) is a piece of paper, polymer, cloth, metal, or other material affixed to an item, on which is written or printed information about the product Include name tags, office ID, building ID, guest ID ',
            },
            {
                code: 'BOF.PUP.1',
                name: 'Printed Publications',
                description:
                    'Includes printed publication for internal purpose e.g. internal Telkomsel magazine',
            },
        ],
        'Building & Office Facilities||Utilities': [
            {
                code: 'BOF.UTS.1',
                name: 'Electric Utilities',
                description: 'Not Available',
            },
            {
                code: 'BOF.UTS.2',
                name: 'Gas Utilities',
                description: 'Not Available',
            },
            {
                code: 'BOF.UTS.3',
                name: 'Water & Sewer Utilities',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Advisory Services': [
            {
                code: 'CPS.ADS.8',
                name: 'Brand Audit and Consulting',
                description: 'Provide advisory around brand relevancy',
            },
            {
                code: 'CPS.ADS.1',
                name: 'Business Intelligence Consulting',
                description:
                    'Helps companies adopt and learn new strategies for organizing computer data Examples: Business & Data analytics, Data visualization, Data Cleansing Database',
            },
            {
                code: 'CPS.ADS.2',
                name: 'Financial Advisory Services',
                description:
                    'Provide advisory services around M&A transactions, restructurings, raising capital, and forensic investigations.¿¿',
            },
            {
                code: 'CPS.ADS.3',
                name: 'HR Consulting',
                description:
                    'Scope of work includes org.design, compensation and benefits analyses; Companies e.g.Mercer, Tower Watson, Hay Group',
            },
            {
                code: 'CPS.ADS.4',
                name: 'IT Consulting',
                description:
                    "Consultancies often estimate, manage, implement, deploy, and administer IT systems on businesses' behalf, known as outsourcing. Includes: IT security consulting/ security assessment, network audit, and IT blueprint",
            },
            {
                code: 'CPS.ADS.5',
                name: 'Legal Advisory Services',
                description:
                    'Legal advice is the giving of a professional or formal opinion regarding the substance or procedure of the law in relation to a particular factual situation.',
            },
            {
                code: 'CPS.ADS.6',
                name: 'Management Consulting',
                description:
                    'The practice of helping¿¿organizations¿¿to improve their¿¿performance, operates primarily through the analysis of existing organizational problems and the development of plans for improvement.',
            },
            {
                code: 'CPS.ADS.7',
                name: 'Project Management',
                description:
                    'Assisting companies in the process and activity of planning, organizing, motivating, and controlling resources, procedures and protocols to achieve specific goals/objectives',
            },
            {
                code: 'CPS.ADS.9',
                name: 'Standardization Consulting',
                description:
                    'Provide advisory service to assist company in achieving ISO OHSAS, & K3 certification',
            },
        ],
        'Corporate Services||Education & Training Services': [
            {
                code: 'CPS.ETS.6',
                name: 'Business and Marketing Training',
                description:
                    'Technical Training related to Business, Marketing, Sales, Digital, Finance training',
            },
            {
                code: 'CPS.ETS.1',
                name: 'Educational Degree',
                description: 'e.g. Graduate Degree, Undergraduate Degree',
            },
            {
                code: 'CPS.ETS.2',
                name: 'Language Schooling',
                description: 'Includes learning of a language ',
            },
            {
                code: 'CPS.ETS.5',
                name: 'Network and IT Training',
                description:
                    'Includes training on specific technical elements for the job; technical training is the process of teaching employees how to more accurately and thoroughly perform the technical components of their jobs',
            },
            {
                code: 'CPS.ETS.3',
                name: 'On The Job Training',
                description:
                    'Includes one-on-one training located at the job site, where someone who knows how to do a task shows another how to perform it',
            },
            {
                code: 'CPS.ETS.4',
                name: 'Professional Training Service',
                description:
                    'Includes public speaking classes, leadership training and softskill training',
            },
        ],
        'Corporate Services||Financial & Insurance Services': [
            {
                code: 'CPS.FIS.10',
                name: 'Aggregator',
                description: 'Payment mediator for some merchants/lounges/',
            },
            {
                code: 'CPS.FIS.1',
                name: 'Audit Services',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.5',
                name: 'Clearinghouse',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.6',
                name: 'Debt Collection Services',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.4',
                name: 'Fraud Detection',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.2',
                name: 'Funds Transfer, Clearance, Exchange Svcs',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.7',
                name: 'Insurance Svcs for Property & Items',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.8',
                name: 'Life & Health Insurance',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.9',
                name: 'Pension Funds',
                description: 'Not Available',
            },
            {
                code: 'CPS.FIS.3',
                name: 'Taxation Services',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Human Resources Services': [
            {
                code: 'CPS.HRS.1',
                name: 'Personnel Recruitment',
                description: 'Example is executive recruitment services',
            },
            {
                code: 'CPS.HRS.2',
                name: 'Subcontractors/ Temporary Staff Hire',
                description:
                    'This can include persons recruited for temporary jobs (e.g. data entry personnel, manage operation) - including Grapari Outsource in the area',
            },
        ],
        'Corporate Services||Managed Services': [
            {
                code: 'CPS.MNS.1',
                name: 'Call Center Services',
                description: 'Not Available',
            },
            {
                code: 'CPS.MNS.2',
                name: 'Other Services',
                description:
                    'Includes document destruction and archiving and other support services',
            },
            {
                code: 'CPS.MNS.3',
                name: 'Sales Task Force',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Organization & Clubs': [
            {
                code: 'CPS.ORC.3',
                name: 'Business Associations',
                description: 'Not Available',
            },
            {
                code: 'CPS.ORC.1',
                name: 'Clubs',
                description: 'Not Available',
            },
            {
                code: 'CPS.ORC.4',
                name: 'Professional Associations',
                description: 'Not Available',
            },
            {
                code: 'CPS.ORC.2',
                name: 'Religious Organizations',
                description: 'Not Available',
            },
            {
                code: 'CPS.ORC.5',
                name: 'Social Associations',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Permit Services': [
            {
                code: 'CPS.PER.1',
                name: 'Permit Services',
                description:
                    'Includes permits for buildings, advertising, events and human personnel',
            },
        ],
        'Corporate Services||Production & Printing Services': [
            {
                code: 'CPS.PPS.1',
                name: 'Bookbinding',
                description: 'Not Available',
            },
            {
                code: 'CPS.PPS.2',
                name: 'Engraving',
                description: 'Not Available',
            },
            {
                code: 'CPS.PPS.3',
                name: 'Photocopying',
                description: 'Not Available',
            },
            {
                code: 'CPS.PPS.4',
                name: 'Printing',
                description: 'Not Available',
            },
            {
                code: 'CPS.PPS.5',
                name: 'Publishing',
                description: 'Not Available',
            },
            {
                code: 'CPS.PPS.6',
                name: 'Security Printing',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Public Relations & Prof. Comm. Svcs': [
            {
                code: 'CPS.PRC.1',
                name: 'Media Relations Services',
                description: 'Not Available',
            },
            {
                code: 'CPS.PRC.2',
                name: 'Other Professional Communications Svcs',
                description:
                    'Includes crisis management, reputation management, and influencer outreach',
            },
        ],
        'Corporate Services||Security & Safety ': [
            {
                code: 'CPS.SEC.1',
                name: 'Guard Services',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Transportation & Mail Services': [
            {
                code: 'CPS.TMS.3',
                name: 'Automobile Ownership Program',
                description: 'Not Available',
            },
            {
                code: 'CPS.TMS.1',
                name: 'Clearance Costs & Duties ',
                description: 'Not Available',
            },
            {
                code: 'CPS.TMS.2',
                name: 'Mail & Cargo Transport',
                description: 'Not Available',
            },
            {
                code: 'CPS.TMS.5',
                name: 'Transportation Management',
                description: 'Not Available',
            },
            {
                code: 'CPS.TMS.4',
                name: 'Vehicle Rental',
                description: 'Not Available',
            },
        ],
        'Corporate Services||Travel & Entertainment': [
            {
                code: 'CPS.TRV.1',
                name: 'Hotels & Meeting Facilities',
                description: 'Not Available',
            },
            {
                code: 'CPS.TRV.2',
                name: 'Restaurant & Entertainment Services',
                description: 'Not Available',
            },
            {
                code: 'CPS.TRV.3',
                name: 'Travel Facilitation',
                description: 'Include ticket, rent car ',
            },
        ],
        'Corporate Services||Warehouse & Storage': [
            {
                code: 'CPS.WHS.1',
                name: 'General Goods Storage',
                description: 'Not Available',
            },
            {
                code: 'CPS.WHS.2',
                name: 'SIM Card Packing & Handling',
                description: 'Not Available',
            },
        ],
        'Devices||Call Management Systems Or Accessories': [
            {
                code: 'DEV.CMS.1',
                name: 'Intercom Systems',
                description:
                    'An intercom (intercommunication device), is a voice communication system for use within a building or collection of buildings, functioning independently of the public telephone network. Includes: wireless intercom and associated accessories',
            },
            {
                code: 'DEV.CMS.2',
                name: 'Teleconference Equipment',
                description:
                    'Includes all equipment used for teleconference: - cameras, display device/s (i.e. monitor or projector), audio equipment (microphone and speaker), codec device (separate box or part of complete system)',
            },
        ],
        'Devices||Handset Accessories': [
            {
                code: 'DEV.HAC.1',
                name: 'Handset Accessories',
                description:
                    'Include memory cards, protective case, cradle shipments',
            },
        ],
        'Devices||Handsets': [
            {
                code: 'DEV.HAD.1',
                name: 'Feature Phones',
                description: 'Not Available',
            },
            {
                code: 'DEV.HAD.2',
                name: 'Smartphones',
                description: 'Not Available',
            },
        ],
        'Devices||M2M Device': [
            {
                code: 'DEV.MTM.1',
                name: 'Fleet Management Tracker',
                description: 'Include GPS Tracker',
            },
            {
                code: 'DEV.MTM.2',
                name: 'Other M2M Device',
                description: 'Not Available',
            },
        ],
        'Devices||Modems': [
            {
                code: 'DEV.MOD.1',
                name: 'Modems',
                description:
                    'A device or program that enables a computer to transmit data over, for example, telephone, cable lines, USB dongle',
            },
        ],
        'Devices||Payment Device': [
            {
                code: 'DEV.PYD.1',
                name: 'Electronic Data Capturing (EDC)',
                description: 'Not Available',
            },
            {
                code: 'DEV.PYD.3',
                name: 'Other Payment Technology',
                description: 'Not Available',
            },
            {
                code: 'DEV.PYD.2',
                name: 'Radio Frequency Identification (RFID)',
                description: 'Not Available',
            },
        ],
        'Devices||SIM Cards': [
            {
                code: 'DEV.SIM.1',
                name: 'SIM Cards',
                description: 'Not Available',
            },
        ],
        'Devices||Scratch Card': [
            {
                code: 'DEV.SCD.1',
                name: 'Voucher',
                description:
                    'Pre-paid voucher purchased that contains the Hidden Recharge Numbers',
            },
        ],
        'IT||IT Infrastructure': [
            {
                code: 'IT.ITI.1',
                name: 'Backup & Storage Solution',
                description: 'Includes Tape, MOD',
            },
            {
                code: 'IT.ITI.3',
                name: 'Database',
                description: '',
            },
            {
                code: 'IT.ITI.2',
                name: 'Server',
                description: 'e.g. 8 socket server',
            },
        ],
        'IT||IT Services': [
            {
                code: 'IT.ITS.4',
                name: 'Annual Technical Support',
                description: 'Includes support for the core software',
            },
            {
                code: 'IT.ITS.6',
                name: 'Cloud Services',
                description: 'Not Available',
            },
            {
                code: 'IT.ITS.1',
                name: 'Design & Software Development',
                description:
                    'Includes interface design development, e.g. UX experience',
            },
            {
                code: 'IT.ITS.7',
                name: 'IT Infrastruktur Integration & Implementation',
                description: 'Not Available',
            },
            {
                code: 'IT.ITS.2',
                name: 'Other IT Services',
                description:
                    'Other IT services Includes computer hardware/ rental or leasing services',
            },
            {
                code: 'IT.ITS.3',
                name: 'Software Integration & Implementation',
                description:
                    'Includes services related to integrating new software into existing and also implementation services',
            },
            {
                code: 'IT.ITS.5',
                name: 'Technical Support Services',
                description:
                    'Includes O&M support; first line maintenance, production operation',
            },
        ],
        'IT||Office IT Equipment': [
            {
                code: 'IT.OIT.1',
                name: 'Computer Accessories',
                description: 'Not Available',
            },
            {
                code: 'IT.OIT.2',
                name: 'Computer Components',
                description:
                    'A¿¿data storage device¿¿used for storing and retrieving¿¿digital information using rapidly rotating disks (platters) coated with magnetic material.',
            },
            {
                code: 'IT.OIT.3',
                name: 'Computer Displays',
                description: 'Not Available',
            },
            {
                code: 'IT.OIT.4',
                name: 'Desktop Computers',
                description: 'Not Available',
            },
            {
                code: 'IT.OIT.5',
                name: 'Notebook Computers',
                description: 'Not Available',
            },
            {
                code: 'IT.OIT.6',
                name: 'Tablet',
                description: 'Not Available',
            },
        ],
        'IT||Software/Application': [
            {
                code: 'IT.SOF.7',
                name: 'Business Intelligence',
                description:
                    'Set of techniques and tools for the transformation of raw data into meaningful and useful information for business analysis purposes',
            },
            {
                code: 'IT.SOF.8',
                name: 'Customer Management System',
                description:
                    'System for managing a company¿¿¿s interactions with current and future customers. It often involves using technology to organize, automate, and synchronize sales, marketing, customer service, and technical support.  Includes contact center',
            },
            {
                code: 'IT.SOF.5',
                name: 'Database Management & Query Software',
                description:
                    'Database management systems¿¿are¿¿computer software¿¿applications that interact with the user, other applications, and the database itself to capture and analyze data. e.g. PostgreSQL, Indigo DQM, Oracle Database',
            },
            {
                code: 'IT.SOF.6',
                name: 'Education, Training, Reference Software',
                description:
                    'Educational software is computer software, the primary purpose of which is teaching or self-learning.',
            },
            {
                code: 'IT.SOF.9',
                name: 'Finance & Accounting Software',
                description:
                    'Application software that records and processes accounting transactions within functional modules such as A/P, A/R, payroll, and trial balance - an accounting information system. Including Procurement (Oasis), Asset, Tax ',
            },
            {
                code: 'IT.SOF.10',
                name: 'HR Management',
                description:
                    'Software systems to improve recruitment, onboarding and new talent management. Encompass functions such as: payroll, time and attendance, performance appraisal, benefits administration, L&D management Includes HRIS, SIAD',
            },
            {
                code: 'IT.SOF.22',
                name: 'IT Measurement and Performance Tools (IMP)',
                description: 'Not Available',
            },
            {
                code: 'IT.SOF.11',
                name: 'Integration Cluster/ Middleware',
                description:
                    'Software that enables independently designed applications, software components or services to work together, by supporting data consistency and composite application e.g. EAI, OSB, IN Gateway (I-Charming), REFLEX, Content Gateway',
            },
            {
                code: 'IT.SOF.13',
                name: 'Networking Software',
                description:
                    'Software designed to help set up, manage, and/or monitor computer networks. Networking software applications are available to manage and monitor networks of all sizes. E.g. DHCP, DNS',
            },
            {
                code: 'IT.SOF.14',
                name: 'Office Productivity Software',
                description:
                    'Integrated collection of several office productivity software program; Includes MS Word, PowerPoint, ',
            },
            {
                code: 'IT.SOF.1',
                name: 'Online Charging Solution',
                description: 'Not Available',
            },
            {
                code: 'IT.SOF.15',
                name: 'Operating System Software¿¿License',
                description: 'e.g. Red hat, Windows, Macintosh',
            },
            {
                code: 'IT.SOF.12',
                name: 'Other Enterprise Applications',
                description:
                    'e.g. Business Process Management, Office Automation (e-cor), etc. (includes CLAP, Document management, Facility management, Angelina)',
            },
            {
                code: 'IT.SOF.16',
                name: 'Other Infrastructure Software Services',
                description:
                    'Other infrastructure software includes, but is not limited to, clustering and remote control software, directory servers, OS tools, Java license fees, mainframe infrastructure, and mobile and wireless infrastructure',
            },
            {
                code: 'IT.SOF.23',
                name: 'PCEF',
                description: 'Not Available',
            },
            {
                code: 'IT.SOF.2',
                name: 'PCRF',
                description: 'Not Available',
            },
            {
                code: 'IT.SOF.3',
                name: 'Recharge',
                description: 'Not Available',
            },
            {
                code: 'IT.SOF.17',
                name: 'Security Software',
                description:
                    'Security software is included to control and monitor access to internal and external IT resources e.g. Bastian Host, SIEM, firewall',
            },
            {
                code: 'IT.SOF.4',
                name: 'Settlement Payment',
                description:
                    'Settlement (clearinghouse), invoicing (APRM, ICA-CB)',
            },
            {
                code: 'IT.SOF.21',
                name: 'Single Sign On',
                description:
                    'Technology that allows network users to access resources on the network using only one user account',
            },
            {
                code: 'IT.SOF.20',
                name: 'Software Development Tools',
                description:
                    'A programming tool or software development tool is a computer program that software developers use to create, debug, maintain, or otherwise support other programs and applications',
            },
            {
                code: 'IT.SOF.18',
                name: 'System Management Software',
                description:
                    'A set of management applications that lets you view and control hardware (servers, desktops, and laptops) and software (operating systems, applications, and patches) across the network e.g. Ovo (monitor CPU utilization for each server)',
            },
            {
                code: 'IT.SOF.19',
                name: 'Virtualization software',
                description: 'e.g. VMWare, Citrix, VDI',
            },
        ],
        'IT||Svc Delivery & Content Mgmt Platform': [
            {
                code: 'IT.SDP.1',
                name: 'Campaign Management',
                description:
                    'Campaign management is a marketing automation software that optimizes the process for organizations to develop and deploy multiple-channel marketing campaigns Includes CDDS, RTA',
            },
            {
                code: 'IT.SDP.4',
                name: 'Digital Content',
                description:
                    'Includes actual content (video, software, audio, images etc.)for different digital mediums; e.g. Disney, FIFA',
            },
            {
                code: 'IT.SDP.5',
                name: 'M2M',
                description:
                    'Machine to Machine (M2M) refers to technologies that allow both wireless and wired systems to communicate with other devices of the same type. Includes DCP, M2M Application Enablement Platform',
            },
            {
                code: 'IT.SDP.7',
                name: 'Messaging',
                description:
                    'Uses standardized communications protocols to allow fixed line or mobile phone devices to exchange messages; Includes related network elements Includes SMSC ,MMSC , USSD-GW, SMS Relay and HSP',
            },
            {
                code: 'IT.SDP.2',
                name: 'Mobile Advertising & Broadcasting',
                description:
                    'Digital mobile platform refers to hardware/software environment for laptops, tablets, smartphones and other portable devices. Advertising and broadcasting through mobile devices; Includes LBA, Web2SMS',
            },
            {
                code: 'IT.SDP.6',
                name: 'Mobile Payment',
                description: 'Includes T-cash, Payment Gateway',
            },
            {
                code: 'IT.SDP.8',
                name: 'Over-the-air',
                description:
                    'Standard for the transmission and reception of application-related information in a wireless communications system',
            },
            {
                code: 'IT.SDP.9',
                name: 'Steering',
                description:
                    'e.g. for international service. System that steers the customer to the preferred provider',
            },
            {
                code: 'IT.SDP.3',
                name: 'Video & Gaming Services',
                description:
                    'Digital distribution is the process of delivering video game content as digital information, without the exchange or purchase of new physical media (e.g. MeLon)',
            },
            {
                code: 'IT.SDP.10',
                name: 'Voice',
                description:
                    'Includes ringback tone, voicemail, and cardless solution',
            },
        ],
        'Marketing||Advertisement Material': [
            {
                code: 'MAR.ADM.1',
                name: 'Digital Printing',
                description: 'Include banner, billboard material',
            },
            {
                code: 'MAR.ADM.2',
                name: 'Offset Printing',
                description: 'Other advertisement material including brochures',
            },
            {
                code: 'MAR.ADM.3',
                name: 'Textile Printing',
                description:
                    'Marketing material printed in textile include umbul-umbul, spanduk',
            },
        ],
        'Marketing||Creative Agency Services': [
            {
                code: 'MAR.CAS.3',
                name: 'Creative Agency Fee',
                description: 'Not Available',
            },
            {
                code: 'MAR.CAS.4',
                name: 'Image, Digital Image, and Photography Production',
                description: 'Not Available',
            },
            {
                code: 'MAR.CAS.5',
                name: 'Radio & Audio Production',
                description: 'Not Available',
            },
            {
                code: 'MAR.CAS.6',
                name: 'Talent Production',
                description: 'Not Available',
            },
            {
                code: 'MAR.CAS.1',
                name: 'Television Production',
                description: 'Not Available',
            },
            {
                code: 'MAR.CAS.2',
                name: 'Video Production',
                description: 'Include web series production, after movie',
            },
        ],
        'Marketing||Digital Placement': [
            {
                code: 'MAR.DPC.1',
                name: 'Buzzer',
                description:
                    'Fee for individuals/groups to promote through their social media e.g. Twitter/path/Instagram',
            },
            {
                code: 'MAR.DPC.2',
                name: 'Digital Agency Fee',
                description: 'Retainer fee for the agency',
            },
            {
                code: 'MAR.DPC.3',
                name: 'Digital Placement Prize',
                description:
                    'Prizes/ rewards for the digital advertisement quiz (purchased by the agency)',
            },
            {
                code: 'MAR.DPC.4',
                name: 'Network Mobile Placement',
                description:
                    'Display Network Placement Targeting shows your ad on a website, or a subsection of a site (such as certain pages within that site). Placement Targeting is available in your account as ¿¿¿managed placements.¿¿¿',
            },
            {
                code: 'MAR.DPC.5',
                name: 'Online Advertising Adwords',
                description: 'YouTube, google search engine',
            },
            {
                code: 'MAR.DPC.6',
                name: 'Programmatic Placement',
                description:
                    '¿¿¿Programmatic¿¿¿ ad buying typically refers to the use of software to purchase digital advertising -- using machines to buy ads',
            },
            {
                code: 'MAR.DPC.7',
                name: 'Social Ad',
                description:
                    'Advertising that relies on social information or networks in generating, targeting, and delivering marketing communications e.g. Facebook ',
            },
            {
                code: 'MAR.DPC.8',
                name: 'Tracking & Measurement',
                description:
                    'To track the effectiveness of the advertisement  e.g. how many have clicked/seen the advertisement?',
            },
        ],
        'Marketing||Marketing & Distribution': [
            {
                code: 'MAR.MDB.3',
                name: 'Airport Lounge',
                description:
                    'Promotion at airport lounge (Telkomsel airport lounge) ',
            },
            {
                code: 'MAR.MDB.1',
                name: 'Event Management Services',
                description:
                    'Events that are for an external or internal audience',
            },
            {
                code: 'MAR.MDB.4',
                name: 'Exhibition Material',
                description: 'Not Available',
            },
            {
                code: 'MAR.MDB.2',
                name: 'Market Research',
                description:
                    'Tracking studies allow business owners to measure brand awareness, monitor customer satisfaction, study consumer sentiment concerning a new product or service, or analyze the effectiveness of a particular marketing campaign',
            },
            {
                code: 'MAR.MDB.5',
                name: 'Merchandise',
                description: 'Merchandise given for promotion purposes',
            },
            {
                code: 'MAR.MDB.7',
                name: 'Other Services',
                description: 'Not Available',
            },
            {
                code: 'MAR.MDB.6',
                name: 'Prizes',
                description:
                    'Prizes given during promotional events; purchased by Telkomsel',
            },
        ],
        'Marketing||Traditional Placement': [
            {
                code: 'MAR.TPC.1',
                name: 'Billboard Placement',
                description: 'Not Available',
            },
            {
                code: 'MAR.TPC.2',
                name: 'Cinema Placement',
                description: 'Not Available',
            },
            {
                code: 'MAR.TPC.3',
                name: 'Print Ad Placement',
                description: 'Advertising on newspaper, magazine, tabloids',
            },
            {
                code: 'MAR.TPC.4',
                name: 'Radio Placement',
                description: 'Not Available',
            },
            {
                code: 'MAR.TPC.5',
                name: 'Television Placement',
                description: 'Not Available',
            },
            {
                code: 'MAR.TPC.6',
                name: 'Traditional Agency Fee',
                description: 'Not Available',
            },
        ],
        'Network||CS Core': [
            {
                code: 'NWK.CSC.1',
                name: 'Media Gateway (MGW)',
                description:
                    'A media gateway is a translation device or service that converts digital media streams between telco networks such as PSTN, SS7, Next Generation Networks (2G, 2.5G and 3G radio access networks) or PBX.',
            },
            {
                code: 'NWK.CSC.2',
                name: 'Mobile Switching Centre Server (MSS)',
                description: 'Includes IWMSC and GMSC',
            },
            {
                code: 'NWK.CSC.4',
                name: 'SIP Application Server (AS)',
                description:
                    'SIP is a communications protocol for signaling and controlling multimedia communication sessions. ',
            },
            {
                code: 'NWK.CSC.3',
                name: 'STP/ SGW',
                description:
                    'Network component responsible for transferring signaling messages between Common Channel Signaling (CCS) nodes that communicate using different protocols and transports.',
            },
            {
                code: 'NWK.CSC.5',
                name: 'Transit Media Gateway (TMGW)',
                description: 'Not Available',
            },
            {
                code: 'NWK.CSC.6',
                name: 'Transit Switching Centre (TSC)/ GMSC',
                description: 'Not Available',
            },
        ],
        'Network||IMS': [
            {
                code: 'NWK.IMS.1',
                name: 'Call Session Control Function (CSCF)',
                description:
                    'Call Session Control Function (CSCF), are used to process SIP signaling packets in the IMS. Equivalent in 3G: MSC',
            },
            {
                code: 'NWK.IMS.2',
                name: 'ENUM',
                description:
                    'ENUM is the mapping of telephone numbers to domain names using DNS based architecture, in order to help facilitate such services as VoIP. It allows network elements to find services on the Internet using only a telephone number.',
            },
            {
                code: 'NWK.IMS.3',
                name: 'Media Gateway Control Function (MGCF)',
                description:
                    'A Media Gateway Control Function (MGCF) in a PSTN Emulation Subsystem (PES) enables an IMS network to communicate with classic circuit switched networks and modern packet switched networks through a Media Gateway (MGW).',
            },
            {
                code: 'NWK.IMS.4',
                name: 'Media Resource Function (MRFC)',
                description:
                    'A signaling plane node that interprets information coming from an AS and S-CSCF to control the MRFP. Embedded in MSC in 3G',
            },
            {
                code: 'NWK.IMS.5',
                name: 'Media Resource Function Processer (MRFP)',
                description:
                    'A media plane node used to mix, source or process media streams. It can also manage access right to shared resources. Embedded in MSC in 3G',
            },
            {
                code: 'NWK.IMS.6',
                name: 'Session Border Controller (SBC)',
                description: 'Not Available',
            },
            {
                code: 'NWK.IMS.7',
                name: 'Session Border Gateway (SBG)',
                description: 'Not Available',
            },
        ],
        'Network||Mobile Network Services': [
            {
                code: 'NWK.MNS.8',
                name: 'Cutover/ Migration Services',
                description:
                    'Includes 2G, 3G, 4G, and multiband services; Includes relocation redeployment services',
            },
            {
                code: 'NWK.MNS.1',
                name: 'Facility Management Contract',
                description:
                    'Includes power, fuel, site maintenance. Purchased by area',
            },
            {
                code: 'NWK.MNS.9',
                name: 'Implement, Install & Commissioning Svces',
                description:
                    'Includes installation & commissioning services, integration services and transportation',
            },
            {
                code: 'NWK.MNS.6',
                name: 'Optimization Services',
                description: 'Not Available',
            },
            {
                code: 'NWK.MNS.2',
                name: 'Site Acquisition',
                description:
                    'Acquisition to construct for mobile network services, including RAN, Transmission and Core',
            },
            {
                code: 'NWK.MNS.3',
                name: 'Site Leasing',
                description:
                    'Site leasing for mobile network services, including RAN, Transmission and Core',
            },
            {
                code: 'NWK.MNS.4',
                name: 'Spectrum Permit Services',
                description: 'Not Available',
            },
            {
                code: 'NWK.MNS.5',
                name: 'Technical Support Services',
                description:
                    'Includes on site support, maintenance operations, drivetest and special case for Core (where they cannot break it down to SPMS and SRSM)',
            },
            {
                code: 'NWK.MNS.7',
                name: 'Tower & In-building Lease',
                description:
                    'Includes network equipment rental, telecom towers, in-building',
            },
        ],
        'Network||Network Core Service': [
            {
                code: 'NWK.NCS.2',
                name: 'Cutover/ Migration Services (CUT)',
                description: 'Not Available',
            },
            {
                code: 'NWK.NCS.3',
                name: 'Implement, Install & Commissioning Svces (IIC)',
                description: 'Not Available',
            },
            {
                code: 'NWK.NCS.1',
                name: 'Technical Support Services (TCS)',
                description: 'Not Available',
            },
        ],
        'Network||Network Security Equipment': [
            {
                code: 'NWK.NSE.1',
                name: 'Firewall Network Security Equipment',
                description:
                    'Includes appliance firewall, such as checkpoint firewall, Juniper firewall, RSA',
            },
            {
                code: 'NWK.NSE.2',
                name: 'Other Network Security Equipment',
                description: 'e.g. Antivirus Software Blade ',
            },
        ],
        'Network||Network Service Equipment': [
            {
                code: 'NWK.NSE.3',
                name: 'Content Delivery Networking Equipment',
                description:
                    'Provide content delivery network in areas so that user can have better experience if they want to download',
            },
            {
                code: 'NWK.NSE.4',
                name: 'Domain Naming System/ IP Addresses ',
                description:
                    'Translates domain names, which can be easily memorized by humans, to the numerical IP addresses needed for the purpose of computer services and devices worldwide. ',
            },
            {
                code: 'NWK.NSE.5',
                name: 'Load Balancing, Traffic Steering',
                description: 'Includes application delivery controller',
            },
            {
                code: 'NWK.NSE.6',
                name: 'Network Repeaters',
                description:
                    'Repeater is a device that receives a digital signal on an electromagnetic or optical transmission medium and regenerates the signal along the next leg of the medium',
            },
            {
                code: 'NWK.NSE.7',
                name: 'Network Routers',
                description:
                    'Networking device that forwards data packets between computer networks',
            },
            {
                code: 'NWK.NSE.8',
                name: 'Network Switch/ Hub',
                description:
                    'A network switch (also called switching hub) is a networking device that connects devices together on a network; uses packet switching to receive, process and forward data to the destination device. E.g Wireless Access Point',
            },
        ],
        'Network||Network Transmission Service': [
            {
                code: 'NWK.NTS.4',
                name: 'Cutover/ Migration Services (CUT)',
                description: 'Not Available',
            },
            {
                code: 'NWK.NTS.5',
                name: 'Implement, Install & Commissioning Svces (IIC)',
                description: 'Not Available',
            },
            {
                code: 'NWK.NTS.1',
                name: 'Site Acquisition (SAQ)',
                description: 'Not Available',
            },
            {
                code: 'NWK.NTS.2',
                name: 'Spectrum Permit Services (SPS)',
                description: 'Not Available',
            },
            {
                code: 'NWK.NTS.3',
                name: 'Technical Support Services (TCS)',
                description: 'Not Available',
            },
        ],
        'Network||Operating Support System (OSS)': [
            {
                code: 'NWK.OSS.1',
                name: 'Element Management System',
                description:
                    'Lower level of Network Management System that is categorized by network elements e.g by RAN system, Core system, etc.',
            },
            {
                code: 'NWK.OSS.4',
                name: 'Implement, Install & Commissioning Svces (IIC)',
                description: 'Not Available',
            },
            {
                code: 'NWK.OSS.2',
                name: 'Network Management System',
                description:
                    'A combination of hardware and software used to monitor and manage the network of GMS, 3G and LTE system',
            },
            {
                code: 'NWK.OSS.3',
                name: 'Single Sign-On (SSO)',
                description:
                    'Mechanism whereby a single action of user authentication and authorization can permit a user to access all computers and systems where he has access permission, without the need to enter multiple passwords',
            },
        ],
        'Network||PS Core': [
            {
                code: 'NWK.PSC.1',
                name: 'Gateway GPRS Support Node (GGSN)',
                description:
                    'Central part of the general packet radio service (GPRS) which allows 2G, 3G and WCDMA mobile networks to transmit IP packets to external networks such as the Internet.',
            },
            {
                code: 'NWK.PSC.2',
                name: 'Mobility Management Entity (MME)',
                description:
                    'Key component of the standards-defined Evolved Pack Core (EPC) for LTE. It provides mobility session management for the LTE network and supports subscriber authentication, roaming and handovers to other networks.',
            },
            {
                code: 'NWK.PSC.3',
                name: 'PDN Gateway (P-GW)',
                description:
                    'Point of interconnect between the EPC and the external IP networks. These networks are called PDN (Packet Data Network), hence the name. The PDN GW routes packets to and from the PDNs.',
            },
            {
                code: 'NWK.PSC.6',
                name: 'Serving GPRS Support Node (SGSN)',
                description:
                    'Mediates access to network resources on behalf of mobile subscribers and implements the packet scheduling policy between different QoS classes. It is responsible for establishing the PDP context with the GGSN upon activation.',
            },
            {
                code: 'NWK.PSC.5',
                name: 'Serving Gateway (S-GW)',
                description:
                    'Point of interconnect between the radio-side and the EPC. As its name indicates, this gateway serves the UE by routing the incoming and outgoing IP packets.',
            },
            {
                code: 'NWK.PSC.4',
                name: 'Serving and PDN Gateway (S/P-GW)',
                description:
                    'The gateways (Serving GW and PDN GW) deal with the user plane. They transport the IP data traffic between the User Equipment (UE) and the external networks.',
            },
        ],
        'Network||Radio Access Network': [
            {
                code: 'NWK.RAN.1',
                name: 'Base Station Controller (BSC)',
                description:
                    'A critical mobile network component that controls one or more base transceiver stations (BTS), also known as base stations or cell sites',
            },
            {
                code: 'NWK.RAN.2',
                name: 'Compact Mobile Cell',
                description: 'Include Combat',
            },
            {
                code: 'NWK.RAN.3',
                name: 'Femtocell',
                description:
                    'Small, low-power cellular base station, typically designed for use in a home or small business.',
            },
            {
                code: 'NWK.RAN.4',
                name: 'Pico Cell/ Microcell',
                description:
                    'Picocell is a small cellular base station typically covering a small area, such as in-building. RBS and RFU are incorporated into this one device; device is often purchased for the UFO program',
            },
            {
                code: 'NWK.RAN.7',
                name: 'RF Antennas',
                description:
                    'Antenna which radiates greater power in one or more directions allowing for increased performance on transmit and receive and reduced interference from unwanted sources. ',
            },
            {
                code: 'NWK.RAN.5',
                name: 'Radio Base Station (RBS)',
                description:
                    'Baseband unit (BBU) is a unit that processes baseband in telecom systems. A BBU has the following characteristics: modular design, small size, low power consumption and can be easily deployed.',
            },
            {
                code: 'NWK.RAN.6',
                name: 'Radio Network Controller (RNC)',
                description:
                    'a governing element in the UMTS radio access network (UTRAN) and is responsible for controlling the Node Bs that are connected to it.',
            },
        ],
        'Network||Signalling Control Network': [
            {
                code: 'NWK.SCN.1',
                name: 'Diameter Network Solution',
                description:
                    'Includes DRA and DEA Functional element in a 3G or 4G (such as LTE) network that provides real-time routing capabilities to ensure that messages are routed among the correct elements in a network. ',
            },
        ],
        'Network||Subscriber Management': [
            {
                code: 'NWK.SUM.9',
                name: 'Authentication Authorization (ABE)',
                description: 'Not Available',
            },
            {
                code: 'NWK.SUM.6',
                name: 'Automatic Device Detection (ADD)',
                description: 'Not Available',
            },
            {
                code: 'NWK.SUM.1',
                name: 'Dynamic Subscriber Profile (DSP)',
                description: 'Not Available',
            },
            {
                code: 'NWK.SUM.2',
                name: 'Home Location Register (HLR)/AUC',
                description:
                    'Central database that contains details of each mobile phone subscriber that is authorized to use the GSM core network. Includes AAA function',
            },
            {
                code: 'NWK.SUM.3',
                name: 'Home Subscriber Server (HSS)',
                description:
                    'Only for 4G; used on IMS Master user database that supports IMS network entities that handle calls and sessions; Includes AAA function Equivalent in 3G: HLR',
            },
            {
                code: 'NWK.SUM.4',
                name: 'IN-Service Control Point (IN-SCP)',
                description: 'Checks the balance for the prepaid system',
            },
            {
                code: 'NWK.SUM.7',
                name: 'Mobile IP Communication Services (MIC)',
                description: 'Not Available',
            },
            {
                code: 'NWK.SUM.8',
                name: 'Policy and Charging Rule Function (PCR)',
                description: 'Not Available',
            },
            {
                code: 'NWK.SUM.5',
                name: 'Subscriber Directory Server',
                description:
                    'Back-end database for HLR and HSS; runs on commercial hardware',
            },
        ],
        'Network||Supporting Tools': [
            {
                code: 'NWK.SPT.1',
                name: 'Cabling for Network',
                description:
                    'Includes jumper, ducting/cable tray, tools, waveguide extensions and connection kits, crimping tools',
            },
            {
                code: 'NWK.SPT.3',
                name: 'Fiber Optic Kits',
                description: 'FO-kit may include FO cables if bought together',
            },
            {
                code: 'NWK.SPT.8',
                name: 'Implement, Install & Commissioning Svces (IIC)',
                description: 'Not Available',
            },
            {
                code: 'NWK.SPT.2',
                name: 'Measuring Equipment',
                description:
                    'Measures performance of the signal; Includes Spectrum Analyzer (Network), Cable network tester, protocol analyzer',
            },
            {
                code: 'NWK.SPT.4',
                name: 'Network Racks, Cabinets & Cable Mgmt',
                description:
                    'Includes network cable management panel assembly, network system cabinet or enclosure, network system equipment rack',
            },
            {
                code: 'NWK.SPT.5',
                name: 'Other Accessories',
                description:
                    'Includes wire strippers, patch cords, pigtails, patch panes, patch panel, network punchdown tool',
            },
            {
                code: 'NWK.SPT.6',
                name: 'RF Splitter Combiners',
                description: 'Not Available',
            },
            {
                code: 'NWK.SPT.7',
                name: 'Tower Accessories',
                description:
                    'Includes base frame foundation for equipment, pole to place antennas (for use on rooftops)',
            },
        ],
        'Network||Transmission': [
            {
                code: 'NWK.TRS.5',
                name: 'Fiber Optic Equipment',
                description:
                    'The main processing unit for fiber optic transmission',
            },
            {
                code: 'NWK.TRS.6',
                name: 'Free Space Optical-Communication',
                description:
                    'An optical communication technology that uses light propagating in free space to wirelessly transmit data for telecommunications or computer networking.',
            },
            {
                code: 'NWK.TRS.3',
                name: 'Microwave Antennas',
                description: 'Not Available',
            },
            {
                code: 'NWK.TRS.8',
                name: 'Microwave Leased Line',
                description: 'Not Available',
            },
            {
                code: 'NWK.TRS.9',
                name: 'Other Transmission Equipment',
                description: 'Not Available',
            },
            {
                code: 'NWK.TRS.1',
                name: 'Satellite Leased Line',
                description: 'Not Available',
            },
            {
                code: 'NWK.TRS.2',
                name: 'Terrestrial Leased Line',
                description: 'Not Available',
            },
            {
                code: 'NWK.TRS.7',
                name: 'Time Synchronization Equipment',
                description:
                    'Receives date and time from the Global Positioning System (GPS) and distributes a time strobe pulse to sync pulsed stations',
            },
            {
                code: 'NWK.TRS.4',
                name: 'VSAT Antennas',
                description: 'Not Available',
            },
        ],
        'Power||Batteries & Rectifiers': [
            {
                code: 'POW.BRC.1',
                name: 'Batteries',
                description: 'Include large and small batteries system',
            },
            {
                code: 'POW.BRC.2',
                name: 'Battery Resurrection',
                description: 'Not Available',
            },
            {
                code: 'POW.BRC.3',
                name: 'Rectifiers',
                description:
                    'Electrical device that converts alternating current (AC), which periodically reverses direction, to direct current (DC), which flows in only one direction',
            },
            {
                code: 'POW.BRC.4',
                name: 'UPS',
                description: 'Not Available',
            },
        ],
        'Power||Power Generator and Power Supplies': [
            {
                code: 'POW.PGS.6',
                name: 'Diesel Generator',
                description: 'Not Available',
            },
            {
                code: 'POW.PGS.4',
                name: 'Fuel Cell Generator',
                description: 'Not Available',
            },
            {
                code: 'POW.PGS.5',
                name: 'Gas Turbine',
                description: 'Not Available',
            },
            {
                code: 'POW.PGS.2',
                name: 'Hydro Generator',
                description: 'Not Available',
            },
            {
                code: 'POW.PGS.1',
                name: 'Power Generator Supplies',
                description: 'Include Fuels, Lubricant, Oils &Anti Corrosives',
            },
            {
                code: 'POW.PGS.3',
                name: 'Solar Cell Generator',
                description: 'Not Available',
            },
        ],
        'Power||Power Systems Services': [
            {
                code: 'POW.PSS.1',
                name: 'Combined Power Equipment & Utility Lease',
                description: 'e.g. power leasing',
            },
            {
                code: 'POW.PSS.2',
                name: 'Electric Utilities',
                description: 'Not Available',
            },
            {
                code: 'POW.PSS.3',
                name: 'Installation',
                description: 'Not Available',
            },
            {
                code: 'POW.PSS.4',
                name: 'Maintenance',
                description: 'Not Available',
            },
            {
                code: 'Power Management System',
                name: 'Power Management System',
                description: '',
            },
        ],
        'Power||Racks and Power Integrated Solutions': [
            {
                code: 'POW.RAC.1',
                name: 'ACPDB',
                description: 'Alternate Current Power Distribution Box',
            },
            {
                code: 'POW.RAC.2',
                name: 'ATS',
                description: 'Automatic Transfer Switch',
            },
            {
                code: 'POW.RAC.5',
                name: 'Control Panel Generator',
                description: 'Panel Kontrol Generator',
            },
            {
                code: 'POW.RAC.3',
                name: 'DCPDB',
                description: 'DC Panel Distribution Board',
            },
            {
                code: 'POW.RAC.4',
                name: 'MDP',
                description: 'Main Distribution Panel',
            },
            {
                code: 'POW.RAC.6',
                name: 'Power Cabinet',
                description: 'Not Available',
            },
            {
                code: 'POW.RAC.7',
                name: 'Power Distribution Units (PDU)',
                description: 'Not Available',
            },
            {
                code: 'Racks and Power Integrated Solution',
                name: 'Racks and Power Integrated Solution',
                description: '',
            },
        ],
        'REV||Digital Revenue (DRE)': [
            {
                code: 'REV.DRE.1',
                name: 'Digital Advertising (DAD)',
                description: 'Not Available',
            },
            {
                code: 'REV.DRE.2',
                name: 'Digital Insight (DIN)',
                description: 'Not Available',
            },
        ],
        'REV||Network Lease (NLE)': [
            {
                code: 'REV.TLE.1',
                name: 'Tower Lease (TLE)',
                description: 'Not Available',
            },
        ],
    };

    const competencyCategoryRepo = dataSource.getRepository(CompetencyCategory);
    const competencySubCategoryRepo = dataSource.getRepository(
        CompetencySubCategory,
    );
    const competencyItemRepo = dataSource.getRepository(CompetencyItem);

    for (const [prefix, items] of Object.entries(arr)) {
        const [categoryName, subCategoryName] = prefix.split('||');
        const category = await competencyCategoryRepo.findOne({
            where: { name: categoryName },
        });
        const subCategory = await competencySubCategoryRepo.findOne({
            where: {
                name: subCategoryName,
                competencyCategory: {
                    id: category?.id,
                },
            },
        });

        for (const obj of items) {
            await competencyItemRepo.save(
                competencyItemRepo.create({
                    name: obj.name,
                    code: obj.code,
                    description: obj.description,
                    competencySubCategory: {
                        id: subCategory?.id,
                    },
                }),
            );
        }

        console.log(`✅ Seeded ${subCategoryName} (${items.length} items)`);
    }

    console.log('✅ Competency Items seeded');
}
