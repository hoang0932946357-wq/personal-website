import { 
  Music, 
  Workflow, 
  Mic2, 
  Bot, 
  Cpu, 
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe
} from 'lucide-react';
import { Service, Project, Testimonial, NavItem, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "余政憲 (Jerry Yu)",
  brand: "傑瑞音樂 Jerry Music",
  tagline: "將藝術靈魂注入 AI 科技，用自動化流程釋放創造力",
  intro: "我是一位擁有 20 年經驗的資深聲音設計師與音樂製作人，曾入圍金鐘獎音效獎。現在，我致力於將 AI 音樂生成技術與 n8n 自動化流程相結合，協助創作者與企業構建高效的內容生產系統。",
  cta: "預約諮詢"
};

export const NAV_ITEMS: NavItem[] = [
  { label: '關於我', href: '#about' },
  { label: '專業服務', href: '#services' },
  { label: '作品集', href: '#portfolio' },
  { label: '學員見證', href: '#testimonials' },
  { label: '聯絡諮詢', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'n8n 自動化流程陪跑',
    description: '打造您的數位第二大腦。從社群發文、客戶管理到內容生成，協助您利用 n8n 串接各類 AI 工具，實現業務流程全自動化。',
    icon: Workflow,
    features: ['專屬工作流 (Workflow) 設計', 'API 串接教學', '企業內部自動化導入', '一對一實戰除錯']
  },
  {
    id: 's2',
    title: 'AI 音樂生成與應用',
    description: '掌握 Suno、Udio 等頂尖 AI 音樂工具。不僅是生成，更教您如何進行後製修整、聲音設計，產出商業級的音樂作品。',
    icon: Music,
    features: ['AI 音樂提示詞 (Prompt) 工程', 'Stem 分軌處理與混音', '商業版權諮詢', '影視配樂快速產製']
  },
  {
    id: 's3',
    title: '專業聲音設計顧問',
    description: '結合傳統影視音效經驗與現代 AI 技術。為您的品牌、遊戲或影片提供獨一無二的聽覺識別系統。',
    icon: Mic2,
    features: ['品牌聲音識別 (Audio Branding)', '沉浸式音效設計', 'Podcast 音質優化', '杜比全景聲製作諮詢']
  },
  {
    id: 's4',
    title: 'AI 數位轉型教練',
    description: '針對個人創作者或小型工作室的轉型輔導。整合 ChatGPT、Claude 與自動化工具，提升 10 倍生產力。',
    icon: Cpu,
    features: ['個人知識庫建置', '內容行銷自動化', 'AI 工具鏈整合策略', '數位資產管理']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '全自動化 AI 音樂電台',
    category: 'n8n Automation',
    description: '使用 n8n 串接 Suno API 與 YouTube 直播，打造 24/7 不間斷的 Lo-Fi 音樂頻道，全自動生成封面與音樂。',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['n8n', 'Suno AI', 'YouTube API', 'Python']
  },
  {
    id: 'p2',
    title: '影集《虛擬夢境》聲音設計',
    category: 'Sound Design',
    description: '入圍金鐘獎作品。結合傳統擬音 (Foley) 與 AI 語音合成技術，創造出具未來感的聽覺體驗。',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Pro Tools', 'Sound Design', 'AI Voice', 'Mixing']
  },
  {
    id: 'p3',
    title: '企業自動化報表系統',
    category: 'Consulting',
    description: '協助知名行銷公司導入 n8n，自動彙整 FB Ads 數據並生成週報發送至 Slack，節省每週 10 小時工時。',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['n8n', 'Google Sheets', 'Slack', 'OpenAI']
  },
  {
    id: 'p4',
    title: 'AI 輔助流行音樂專輯',
    category: 'Music Production',
    description: '與新生代歌手合作，利用 AI 協助編曲靈感發想，再由真人樂手實錄，達成科技與人性的完美平衡。',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['Udio', 'Logic Pro', 'Arrangement', 'Co-production']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: '陳志豪',
    role: '自媒體創作者',
    content: '傑瑞老師的 n8n 課程真的打通了我的任督二脈！原本每天要花 3 小時處理的社群貼文，現在透過自動化流程，完全不用我操心，我有更多時間創作了。',
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: '林雅婷',
    role: '獨立遊戲開發者',
    content: '對於不懂音樂的我來說，AI 音樂生成原本很難控制品質。但在老師的指導下，我學會了如何精修 AI 產出的音樂，現在我的遊戲配樂聽起來超專業！',
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'David Wu',
    role: 'SaaS 公司 CEO',
    content: '余政憲老師不只是懂音樂，他對邏輯與流程的理解非常深刻。他幫我們公司建立的自動化客戶回覆系統，準確率高得驚人。',
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Facebook', url: '#', icon: Facebook },
  { platform: 'Instagram', url: '#', icon: Instagram },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
  { platform: 'YouTube', url: '#', icon: Youtube },
  { platform: 'Website', url: '#', icon: Globe },
];
