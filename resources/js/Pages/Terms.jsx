import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { ShieldCheck, Truck, RefreshCw, AlertCircle, HelpCircle, Tag, Scissors, Sparkles, CheckCircle2, MessageCircle, HeartHandshake } from 'lucide-react';

export default function Terms({ lastUpdated }) {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Custom Order Terms & After-Sales Policy (拼豆接单定制须知与售后) - Hulla Pindou" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm text-center sm:text-left space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pinkSalt-100 text-brand-oilGreen text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Official Store Policy & Commission Rules
          </span>
          <h1 className="text-3xl font-extrabold text-brand-charcoal">
            拼豆接单须知 & 售后规则 <span className="text-lg font-medium text-gray-500 block sm:inline">(Custom Commission & After-Sales T&C)</span>
          </h1>
          <p className="text-xs text-gray-500 pt-1">
            Hulla Pindou (拼豆小铺) • Last Updated: {lastUpdated || 'July 2026'}
          </p>
        </div>

        {/* SECTION 1: 拼豆接单价格参考 (Custom Commission Price Guide) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-pinkSalt-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-brand-pinkSalt-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand-pinkSalt-100 flex items-center justify-center text-brand-oilGreen font-bold">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-brand-charcoal">1. 拼豆接单价格参考 (Commission Pricing)</h2>
                <p className="text-xs text-gray-500">具体按大小/尺寸/豆子数量估价，以下仅供参考，建议事先咨询清楚 ❗️</p>
              </div>
            </div>
            <span className="hidden sm:inline-block text-xs font-extrabold text-rose-500 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              根据复杂度定价
            </span>
          </div>

          {/* Pricing Reference Grid / Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Small / Mini */}
            <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-100 flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase">
                  迷你 / 小图 (Mini / Small)
                </span>
                <h3 className="text-2xl font-extrabold text-emerald-900 pt-2">
                  RM5 ~ RM10 <span className="text-xs font-normal text-emerald-700">左右</span>
                </h3>
              </div>
              <p className="text-xs text-emerald-800/80">适合小挂件、钥匙扣、可爱小型像素图等。</p>
            </div>

            {/* Medium */}
            <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-100 flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase">
                  中图 (Medium Pattern)
                </span>
                <h3 className="text-2xl font-extrabold text-amber-900 pt-2">
                  RM10 ~ RM20 <span className="text-xs font-normal text-amber-700">左右</span>
                </h3>
              </div>
              <p className="text-xs text-amber-800/80">适合中等尺寸立牌、包包挂饰、动漫人物头饰等。</p>
            </div>

            {/* Large */}
            <div className="bg-purple-50/60 rounded-2xl p-5 border border-purple-100 flex flex-col justify-between space-y-3 hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full uppercase">
                  大图 (Large Pattern)
                </span>
                <h3 className="text-2xl font-extrabold text-purple-900 pt-2">
                  RM20 ~ RM30 <span className="text-xs font-normal text-purple-700">左右</span>
                </h3>
              </div>
              <p className="text-xs text-purple-800/80">适合大型立牌、桌面摆件、多色复杂图样等。</p>
            </div>
          </div>

          {/* Extra Price Note */}
          <div className="bg-brand-cream/80 rounded-2xl p-4 border border-brand-pinkSalt-200 text-xs text-gray-700 space-y-1.5">
            <p className="font-bold text-rose-600 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" /> *此外还会看复杂程度定价 / 加价
            </p>
            <p className="text-gray-600 pl-5">
              例如：颜色过于复杂、图纸细节极多、特殊尺寸要求等，具体价格请私信带图咨询确认。
            </p>
          </div>
        </section>


        {/* SECTION 2: 定制须知 (Custom Order Rules & Process) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-pinkSalt-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-pinkSalt-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-oilGreen-100 flex items-center justify-center text-brand-oilGreen font-bold">
              <Scissors className="w-5 h-5 text-brand-oilGreen" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-brand-charcoal">2. 定制须知 (Custom Order Terms)</h2>
              <p className="text-xs text-gray-500">下单前请仔细阅读以下条款，下单即默认同意以下规则。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Rule 1: 带图定制 */}
            <div className="bg-brand-cream/50 rounded-2xl p-4 border border-brand-pinkSalt-200 space-y-1.5">
              <span className="font-bold text-brand-oilGreen flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-oilGreen" /> 需带图定制 & 图纸授权
              </span>
              <p className="text-gray-600 leading-relaxed">
                定制需自带图纸或设计图，图纸一律默认您已获得授权或为无版权纠纷图样。
              </p>
            </div>

            {/* Rule 2: 手工瑕疵 */}
            <div className="bg-brand-cream/50 rounded-2xl p-4 border border-brand-pinkSalt-200 space-y-1.5">
              <span className="font-bold text-brand-oilGreen flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-oilGreen" /> 纯手工制作说明
              </span>
              <p className="text-gray-600 leading-relaxed">
                全部均手工制作，难免会有微小瑕疵或熨烫不均。<strong>*完美主义者可自行绕道</strong>。
              </p>
            </div>

            {/* Rule 3: 20%定金 */}
            <div className="bg-rose-50/60 rounded-2xl p-4 border border-rose-200 space-y-1.5">
              <span className="font-bold text-rose-700 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-600" /> 先付 20% 定金 (跑单不退) ❗️
              </span>
              <p className="text-rose-900/80 leading-relaxed">
                定制需预先支付 <strong>20% 定金</strong>。若中途跑单或取消订单，定金一律不予退还！
              </p>
            </div>

            {/* Rule 4: 单面无孔 */}
            <div className="bg-brand-cream/50 rounded-2xl p-4 border border-brand-pinkSalt-200 space-y-1.5">
              <span className="font-bold text-brand-oilGreen flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-oilGreen" /> 默认样式 (单面无孔)
              </span>
              <p className="text-gray-600 leading-relaxed">
                若没额外标注说明，成品一律默认制作 <strong>单面无孔</strong> 效果。
              </p>
            </div>

            {/* Rule 5: 烫法 */}
            <div className="bg-brand-cream/50 rounded-2xl p-4 border border-brand-pinkSalt-200 space-y-1.5">
              <span className="font-bold text-brand-oilGreen flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-oilGreen" /> 擅长烫法 (熨烫效果)
              </span>
              <p className="text-gray-600 leading-relaxed">
                目前擅长烫法：<strong>粗纹烘焙纸 / 澡巾烫</strong>。如有其他烫法需求可咨询，但店主可能不够擅长TT。
              </p>
            </div>

            {/* Rule 6: 成品确认与不退不换 */}
            <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200 space-y-1.5">
              <span className="font-bold text-amber-800 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" /> 拍照确认 & 不退不换 ❗️
              </span>
              <p className="text-amber-900/80 leading-relaxed">
                成品制作完成后会拍照发图给您确认。确认无误后默认打孔并附赠钥匙扣(珠链款)。<strong>发货后一律不退不换！</strong>如有特殊要求请提前及时提出。
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 3: 配送方式与运费优惠 (Shipping & Delivery Options) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-pinkSalt-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-pinkSalt-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-brand-charcoal">3. 配送方式与包邮优惠 (Shipping Options & Discount)</h2>
              <p className="text-xs text-gray-500">支持快递邮寄与漫展现场面交。</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Free Shipping Offer */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-5 space-y-2 shadow-sm">
              <span className="text-[11px] font-extrabold bg-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                邮寄优惠折扣 (Postal Shipping)
              </span>
              <div className="space-y-1 pt-1">
                <p className="text-sm font-bold flex items-center gap-2">
                  🎉 满 RM30 享 <span className="underline decoration-yellow-300">半包邮</span>！
                </p>
                <p className="text-base font-extrabold text-yellow-300 flex items-center gap-2">
                  🎁 满 RM50 全马 <span className="underline">包邮 (Free Shipping)</span>！
                </p>
              </div>
              <p className="text-[11px] text-emerald-100 pt-1">
                *实际运费会在包裹当天寄出后通知您 &gt;&lt;
              </p>
            </div>

            {/* Convention Pickup */}
            <div className="bg-brand-cream/80 rounded-2xl p-5 border border-brand-pinkSalt-200 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[11px] font-bold text-brand-oilGreen bg-brand-pinkSalt-100 px-2.5 py-0.5 rounded-full uppercase">
                  面交选项 (Face-to-Face Pickup)
                </span>
                <h3 className="text-base font-bold text-brand-charcoal pt-2 flex items-center gap-1.5">
                  🉑 漫展面交 (Anime / Comic Convention Pick-up)
                </h3>
                <p className="text-xs text-gray-600 pt-1">
                  若您有参加各大漫展（如 Comic Fiesta / Nijigen Expo 等），可提前预约在漫展现场面交取货，省去邮寄费用！
                </p>
              </div>
              <p className="text-[11px] text-brand-oilGreen font-semibold">
                请提前私信客服沟通漫展日期与交货地点 ✉️
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: 售后与损坏赔偿 (After-Sales Support) */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-pinkSalt-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-brand-oilGreen font-bold text-base border-b border-brand-pinkSalt-100 pb-3">
            <RefreshCw className="w-5 h-5 text-brand-oilGreen" />
            <h2>4. 包裹破损与漏发处理 (Damaged / Missing Items Policy)</h2>
          </div>
          <div className="text-xs text-gray-600 space-y-2 leading-relaxed">
            <p>
              我们在打包时均使用防震气泡膜保护。如您在收到包裹后发现物件损坏或少发：
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>请在收到包裹的 <strong>48小时内</strong> 拍下快递面单与受损/少发商品的开箱照片或视频。</li>
              <li>通过 Instagram <a href="https://instagram.com/cozyhulla" target="_blank" rel="noreferrer" className="text-brand-oilGreen font-bold underline">@cozyhulla</a> 或 WhatsApp 联系客服团队。</li>
              <li>确认后我们将第一时间为您补发或办理相应的退款。</li>
            </ul>
          </div>
        </section>

        {/* Customer Support Contact Banner */}
        <div className="bg-brand-oilGreen-50 rounded-3xl p-8 border border-brand-oilGreen-200 text-center space-y-3 shadow-sm">
          <HeartHandshake className="w-10 h-10 text-brand-oilGreen mx-auto" />
          <h3 className="text-lg font-extrabold text-brand-charcoal">想要定制专属拼豆或查询价格？</h3>
          <p className="text-xs text-gray-600 max-w-lg mx-auto">
            随时携带您的设计图纸私信我们的官方 Instagram <span className="font-bold text-brand-oilGreen">@cozyhulla</span>，我们将第一时间为您估价与解答！✨
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="https://instagram.com/cozyhulla"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-oilGreen text-white px-6 py-2.5 rounded-full font-bold text-xs shadow hover:bg-brand-oilGreen-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> 私信 Instagram @cozyhulla 定制
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}

