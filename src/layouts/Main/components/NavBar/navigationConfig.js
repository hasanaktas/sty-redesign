import BarChartIcon from '@material-ui/icons/BarChart'
import CodeIcon from '@material-ui/icons/Code'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import PresentToAllIcon from '@material-ui/icons/PresentToAll'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import TableChartIcon from '@material-ui/icons/BorderColor'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'

export default [
  {
    title: 'Sayfalar',
    pages: [
      {
        title: 'Ana Sayfa',
        href: '/',
        icon: HomeIcon,
      },
      {
        title: 'Personel Kartı',
        href: '/personelkarti',
        icon: PeopleIcon,
        children: [
          {
            title: 'Kişi Kartı',
            href: '/personelkarti/kisikarti',
          },
        ],
      },
      {
        title: 'İzin İşlemleri',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: 'İzin İşlemleri',
            href: '/management/customers',
          },
          {
            title: 'Rapor İşlemleri',
            href: '/management/customers/1/summary',
          },
        ],
      },
      {
        title: 'Puantaj',
        href: '/puantaj',
        icon: TableChartIcon,
      },
      {
        title: 'Tahakkuk İşlemleri',
        href: '/profile',
        icon: DonutLargeIcon,
        children: [
          {
            title: 'Ücret İşlemleri',
            href: '/profile/1/timeline',
          },
          {
            title: 'Fark Bordrosu',
            href: '/profile/1/connections',
          },
        ],
      },
      {
        title: 'Sgk İşlemleri',
        href: '/invoices/1',
        icon: ReceiptIcon,
      },
      {
        title: 'Tanımlar',
        href: '/projects',
        icon: SettingsIcon,
        children: [
          {
            title: 'Kurum İşlemleri',
            href: '/tanimlar/kurum-islemleri',
          },
          {
            title: 'Dönem İşlemleri',
            href: '/projects',
          },
          {
            title: 'Ücret Yönetimi',
            href: '/projects/create',
          },
          {
            title: 'Devir Matrah',
            href: '/projects/1/overview',
          },
          {
            title: 'Kuruma Ait Bilgiler',
            href: '/projects/1/files',
          },
        ],
      },
    ],
  },
  {
    title: 'Yardım',
    pages: [
      {
        title: 'Kullanım Kılavuzu',
        href: '/presentation',
        icon: PresentToAllIcon,
      },
      {
        title: 'Kullanım Videoları',
        href: '/getting-started',
        icon: CodeIcon,
      },
      {
        title: 'Sıkça Sorulan Sorular',
        href: '/changelog',
        icon: ViewModuleIcon,
      },
    ],
  },
]
