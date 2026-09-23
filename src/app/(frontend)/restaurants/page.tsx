import type { Metadata } from 'next'
import Script from 'next/script'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

const css = `
:root{
--v:#6C4BFF;--v2:#7C3AED;--vd:#5438D8;
--ink:#0D0D1A;--mute:#555570;--soft:#B8B8CC;
--bg:#FBFCFD;--tint:#F3EDFF;--tint2:#FAF9FF;--tint3:#F8FAFF;--line:#E8ECF4;
--green:#2EC55C;--red:#E93D3D;--amber:#F59E0B;
--f:var(--font-geist-sans),'Inter',-apple-system,'Segoe UI',sans-serif;
--sh:0 4px 24px rgba(13,13,26,.06);--shl:0 24px 60px rgba(108,75,255,.16);
}
.restaurant-page *{box-sizing:border-box;margin:0;padding:0}
.restaurant-page{font-family:var(--f);background:var(--bg);color:var(--ink);line-height:1.55;overflow-x:hidden;font-size:16px;-webkit-font-smoothing:antialiased}
.restaurant-page .w{max-width:1180px;margin:0 auto;padding:0 24px}
.restaurant-page h1,.restaurant-page h2,.restaurant-page h3{font-weight:800;letter-spacing:-.035em;line-height:1.05}
.restaurant-page h1{font-size:clamp(2.5rem,5.6vw,4.3rem)}
.restaurant-page h2{font-size:clamp(2rem,4.2vw,3.3rem)}
.restaurant-page h3{font-size:1.12rem;letter-spacing:-.02em}
.restaurant-page .s{padding:104px 0;position:relative}
.restaurant-page .vio{color:var(--v)}
.restaurant-page .sub{font-size:1.1rem;color:var(--mute);max-width:40ch}
.restaurant-page .center{text-align:center}.restaurant-page .center .sub{margin-inline:auto}
.restaurant-page .grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(0,0,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.03) 1px,transparent 1px);background-size:56px 56px;pointer-events:none}
.restaurant-page .orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(2px)}
.restaurant-page .bdg{display:inline-flex;align-items:center;gap:8px;background:var(--tint);color:var(--v);border-radius:100px;padding:8px 17px;font-size:.75rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
.restaurant-page .bdg i{width:7px;height:7px;border-radius:50%;background:var(--v);display:block;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.8)}}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:15px 28px;border-radius:100px;font-weight:700;font-size:1rem;text-decoration:none;border:1.5px solid transparent;cursor:pointer;font-family:var(--f);transition:all .22s cubic-bezier(.2,.8,.3,1)}
.bp{background:var(--v);color:#fff;box-shadow:0 8px 22px rgba(108,75,255,.32)}
.bp:hover{background:var(--vd);transform:translateY(-2px);box-shadow:0 14px 32px rgba(108,75,255,.42)}
.bg2{background:#fff;color:var(--ink);border-color:var(--line)}
.bg2:hover{border-color:var(--v);color:var(--v);transform:translateY(-2px)}
.bw{background:#fff;color:var(--v)}
.bw:hover{transform:translateY(-2px)}
.sm{padding:10px 20px;font-size:.86rem}
.bs{display:flex;gap:12px;flex-wrap:wrap}
.hero{position:relative;overflow:hidden;padding:60px 0 74px;background:linear-gradient(160deg,#FAF9FF 0%,#FBFCFD 50%,#EAE5FF 100%)}
.hgrid{position:relative;z-index:3;display:grid;grid-template-columns:1.04fr .96fr;gap:56px;align-items:center}
.tags{display:flex;gap:9px;flex-wrap:wrap;margin-top:28px}
.tag{font-size:.79rem;font-weight:600;color:var(--mute);background:#fff;border:1px solid var(--line);border-radius:100px;padding:7px 14px}
.stage{position:relative;max-width:392px;width:100%;min-width:0;margin:0 auto;padding:30px 0}
.phone{width:100%;background:#fff;border-radius:30px;padding:12px;box-shadow:0 30px 70px rgba(108,75,255,.20),0 2px 8px rgba(13,13,26,.05);border:1px solid var(--line);position:relative;z-index:3}
.pbar{display:flex;align-items:center;gap:11px;padding:10px 8px 14px}
.pav{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--v),var(--v2));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:.95rem;flex-shrink:0}
.pnm{font-weight:800;font-size:.93rem;letter-spacing:-.02em}
.pst{font-size:.72rem;color:var(--green);font-weight:600;display:flex;align-items:center;gap:5px}
.pst i{width:6px;height:6px;border-radius:50%;background:var(--green);display:block}
.chat{background:#F6F7FB;border-radius:20px;padding:16px;min-height:396px;max-height:396px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;justify-content:flex-end;overflow:hidden}
.msg{max-width:86%;overflow-wrap:break-word;padding:11px 14px;border-radius:16px;font-size:.855rem;line-height:1.45;opacity:0;transform:translateY(12px) scale(.96);animation:pop .42s cubic-bezier(.2,.9,.3,1) forwards;box-shadow:0 2px 6px rgba(13,13,26,.05)}
@keyframes pop{to{opacity:1;transform:none}}
.msg.them{background:#fff;border-bottom-left-radius:5px;align-self:flex-start}
.msg.me{background:linear-gradient(135deg,var(--v),var(--v2));color:#fff;border-bottom-right-radius:5px;align-self:flex-end}
.msg .tm{display:block;font-size:.63rem;opacity:.5;margin-top:4px}
.typing{display:flex;gap:4px;padding:14px 16px;background:#fff;border-radius:16px;border-bottom-left-radius:5px;align-self:flex-start;box-shadow:0 2px 6px rgba(13,13,26,.05)}
.typing span{width:7px;height:7px;border-radius:50%;background:#C3C3D4;animation:bob 1.3s infinite}
.typing span:nth-child(2){animation-delay:.18s}.typing span:nth-child(3){animation-delay:.36s}
@keyframes bob{0%,60%,100%{transform:translateY(0);opacity:.45}30%{transform:translateY(-5px);opacity:1}}
.opts{display:flex;gap:6px;flex-wrap:wrap;align-self:flex-end;max-width:92%;animation:pop .4s cubic-bezier(.2,.9,.3,1) forwards}
.opt{font-size:.74rem;font-weight:700;padding:7px 12px;border-radius:100px;background:#fff;border:1.5px solid var(--line);color:var(--mute);transition:.3s}
.opt.sel{background:var(--v);border-color:var(--v);color:#fff;transform:scale(1.05)}
.gap{align-self:center;font-size:.68rem;font-weight:700;color:var(--mute);background:rgba(13,13,26,.06);border-radius:100px;padding:5px 13px;margin:4px 0;animation:pop .4s cubic-bezier(.2,.9,.3,1) forwards}
.flowtag{position:absolute;top:-8px;inset-inline:0;text-align:center;z-index:6;pointer-events:none}
.flowtag b{display:inline-block;background:#DCFCE7;color:#15803D;font-size:.65rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:5px 13px;border-radius:100px;white-space:nowrap;transition:.35s;box-shadow:0 3px 10px rgba(13,13,26,.08)}
.flowtag.rec b{background:#FEF3C7;color:#92400E}
.chat{scroll-behavior:smooth}
.cta-msg{background:#fff;border:1.5px solid var(--v);color:var(--v);border-radius:14px;padding:12px;text-align:center;font-weight:700;font-size:.83rem;align-self:stretch}
.stars-msg{font-size:1.15rem;letter-spacing:3px}
.fp{position:absolute;background:#fff;border-radius:14px;padding:12px 16px;box-shadow:0 14px 36px rgba(13,13,26,.13);font-size:.83rem;font-weight:700;z-index:4;display:flex;align-items:center;gap:9px;border:1px solid var(--line)}
.fp small{display:block;font-size:.68rem;font-weight:600;color:var(--mute);letter-spacing:.04em}
.f1{top:-26px;inset-inline-start:-54px;animation:fl 5.5s ease-in-out infinite}
.f2{top:-30px;inset-inline-end:-40px;animation:fl 6.5s ease-in-out infinite .8s}
.f3{bottom:-22px;inset-inline-start:-46px;animation:fl 7s ease-in-out infinite .4s}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}
.fpi{width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0}
.strip{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.st4{display:grid;grid-template-columns:repeat(4,1fr)}
.st{padding:36px 22px;text-align:center;border-inline-end:1px solid var(--line)}
.st:last-child{border:0}
.st b{display:block;font-size:2.4rem;font-weight:900;letter-spacing:-.045em;background:linear-gradient(135deg,var(--v),var(--v2));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
.st span{display:block;margin-top:8px;font-size:.82rem;color:var(--mute);font-weight:500}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.cd{background:#fff;border:1px solid var(--line);border-radius:18px;padding:30px;transition:all .3s cubic-bezier(.2,.8,.3,1);position:relative;overflow:hidden}
.cd:hover{transform:translateY(-5px);box-shadow:var(--shl);border-color:rgba(108,75,255,.3)}
.cd p{color:var(--mute);font-size:.95rem;margin-top:9px}
.gn{font-size:3.4rem;font-weight:900;color:#EEEEF4;letter-spacing:-.05em;line-height:1;margin-bottom:14px}
.cd:hover .gn{color:var(--tint)}
.numsec{background:linear-gradient(150deg,#0D0D1A 0%,#1A1533 55%,#2A1E5C 100%);color:#fff;border-radius:28px;padding:60px;position:relative;overflow:hidden}
.numsec .sub{color:#B8B8CC}
.big{font-size:clamp(4.2rem,11vw,7.5rem);font-weight:900;letter-spacing:-.055em;line-height:.95;background:linear-gradient(120deg,#fff 20%,#C4B5FF 80%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.mrow{display:flex;justify-content:space-between;gap:14px;font-size:.9rem;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.1);color:#B8B8CC}
.mrow b{color:#fff;font-weight:700}
.mrow.hl b{color:#C4B5FF;font-size:1.35rem}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:48px}
.mock{background:#fff;border:1px solid var(--line);border-radius:20px;padding:14px;box-shadow:var(--sh);transition:all .3s}
.mock:hover{transform:translateY(-5px);box-shadow:var(--shl)}
.mscr{background:#F6F7FB;border-radius:14px;padding:15px;min-height:200px;display:flex;flex-direction:column;gap:9px}
.stnum{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:var(--v);color:#fff;font-weight:800;font-size:.82rem;flex-shrink:0}
.mi{background:#fff;border-radius:11px;padding:10px 12px;font-size:.8rem;display:flex;justify-content:space-between;box-shadow:0 1px 4px rgba(13,13,26,.05)}
.split{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.pl{border-radius:20px;padding:34px;border:1px solid}
.plx{background:#FEF2F2;border-color:#FBD5D5}
.plv{background:#F0FDF4;border-color:#BBF7D0}
.pic{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;font-weight:800;color:#fff;margin-bottom:16px}
.li{display:flex;gap:10px;font-size:.93rem;margin-top:11px;color:#3A3A4C;align-items:flex-start}
.li b{flex-shrink:0;font-weight:800}
.own{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px}
.ow{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;text-align:center;transition:all .3s}
.ow:hover{transform:translateY(-5px);box-shadow:var(--sh)}
.ow.you{background:linear-gradient(165deg,#fff,#F6F2FF);border:2px solid var(--v);box-shadow:var(--shl)}
.owt{font-size:.72rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase;color:var(--soft);margin-bottom:14px}
.ow.you .owt{color:var(--v)}
.owc{font-size:1.75rem;font-weight:900;letter-spacing:-.04em}
.ow.you .owc{color:var(--v)}
.owl{font-size:.8rem;color:var(--mute);margin-top:5px}
.keep{margin-top:16px;padding-top:14px;border-top:1px solid var(--line);font-size:.79rem;color:var(--mute);display:flex;gap:7px;align-items:center;justify-content:center}
.keep b{color:var(--red);font-size:1rem}
.ow.you .keep b{color:var(--green)}
.mini{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
.mn{background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px 26px;display:flex;justify-content:space-between;align-items:center;gap:16px;transition:.3s}
.mn:hover{border-color:var(--v);transform:translateY(-3px)}
.mn b{font-size:1.32rem;font-weight:900;letter-spacing:-.03em;white-space:nowrap}
.pg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.pc{background:#fff;border:1px solid var(--line);border-radius:22px;padding:32px;display:flex;flex-direction:column;transition:.3s;position:relative}
.pc:hover{transform:translateY(-5px);box-shadow:var(--sh)}
.pc.f{border:2px solid var(--v);box-shadow:var(--shl)}
.pc.dk{background:linear-gradient(160deg,#0D0D1A,#241C47);border-color:transparent;color:#fff}
.pc.dk li{color:#B8B8CC}.pc.dk .pp{color:#8C8CA8}
.tg{position:absolute;top:-13px;inset-inline-start:32px;background:var(--v);color:#fff;font-size:.66rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:6px 14px;border-radius:100px}
.pn{font-size:1.18rem;font-weight:800}
.po{font-size:.87rem;color:var(--v);font-weight:700;margin-top:4px}
.pc.dk .po{color:#C4B5FF}
.pr{font-size:2.9rem;font-weight:900;letter-spacing:-.045em;margin-top:20px;line-height:1}
.pp{font-size:.8rem;color:var(--mute);margin-top:6px;margin-bottom:22px}
.pc ul{list-style:none;flex-grow:1;margin-bottom:24px}
.pc li{font-size:.9rem;padding-inline-start:24px;position:relative;margin-bottom:10px;color:#3A3A4C}
.pc li:before{content:"";position:absolute;inset-inline-start:0;top:6px;width:11px;height:6px;border-inline-start:2.2px solid var(--v);border-bottom:2.2px solid var(--v);transform:rotate(-45deg)}
.pc.dk li:before{border-color:#C4B5FF}
.pc .btn{width:100%}
.ad{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:22px}
.ai{border:1.5px dashed var(--line);border-radius:16px;padding:24px;background:#fff;transition:.3s}
.ai:hover{border-color:var(--v);border-style:solid}
.ai b{display:block;font-size:1.3rem;font-weight:900;color:var(--v);margin-top:12px;letter-spacing:-.03em}
.fd{background:linear-gradient(150deg,#6C4BFF 0%,#7C3AED 55%,#5438D8 100%);border-radius:28px;padding:56px;color:#fff;position:relative;overflow:hidden}
.fd:after{content:"";position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 66%);top:-190px;inset-inline-end:-130px}
.fd>*{position:relative;z-index:2}
.fd .sub{color:rgba(255,255,255,.85)}
.slots{display:flex;gap:6px;flex-wrap:wrap;margin:26px 0}
.slot{width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.24)}
.slot.on{background:#fff;border-color:#fff}
.restaurant-page details{display:block;background:#fff;border:1px solid var(--line);border-radius:10px;margin:0 0 10px;overflow:hidden;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.restaurant-page details:hover{box-shadow:0 8px 20px -10px rgba(108,75,255,.2)}
.restaurant-page details[open]{border-color:var(--v);box-shadow:0 8px 20px -10px rgba(108,75,255,.2)}
.restaurant-page summary{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:15px;font:500 18px/1.5 var(--f);color:var(--ink);cursor:pointer;list-style:none}
.restaurant-page summary::-webkit-details-marker{display:none}
.restaurant-page summary:after{content:"+";flex-shrink:0;color:var(--v);font-size:1.45rem;line-height:1;font-weight:400}
.restaurant-page details[open] summary:after{content:"−"}
.restaurant-page details p{padding:0 15px 15px;color:var(--mute);font-size:16px;line-height:1.6}
.restaurant-page .restaurant-cta{padding:104px 24px;background:linear-gradient(120deg,#6C4BFF 0%,#5B37D5 52%,#40289B 100%);color:#fff;text-align:center;overflow:hidden}
.restaurant-page .restaurant-cta .w{max-width:900px}
.restaurant-page .restaurant-cta h2{color:#fff;font-size:clamp(2rem,4vw,3rem)}
.restaurant-page .restaurant-cta .sub{max-width:none;color:rgba(255,255,255,.9);font-size:1.05rem}
.restaurant-page .restaurant-cta .btn.bp{background:#fff;color:var(--v);box-shadow:0 10px 24px rgba(24,10,90,.28);animation:none}
.restaurant-page .restaurant-cta .btn.bp:hover{background:#fff;color:var(--vd);box-shadow:0 14px 30px rgba(24,10,90,.36)}
.restaurant-page .restaurant-cta .btn.bg2{background:transparent;color:#fff;border-color:rgba(255,255,255,.45)}
.restaurant-page .restaurant-cta .btn.bg2:hover{border-color:#fff;color:#fff}
@media(max-width:767px){.restaurant-page .restaurant-cta{padding:64px 20px}.restaurant-page .restaurant-cta .bs{flex-direction:column;align-items:stretch}.restaurant-page .restaurant-cta .btn{width:100%}}
.restaurant-inline-footer{display:none}
.fn{margin-top:16px;font-size:.73rem;color:#5A5A70;max-width:82ch;line-height:1.6}
@keyframes pulseGlow{0%{box-shadow:0 8px 22px rgba(108,75,255,.32),0 0 0 0 rgba(108,75,255,.45)}70%{box-shadow:0 8px 22px rgba(108,75,255,.32),0 0 0 14px rgba(108,75,255,0)}100%{box-shadow:0 8px 22px rgba(108,75,255,.32),0 0 0 0 rgba(108,75,255,0)}}
.bp{animation:pulseGlow 3.2s cubic-bezier(.4,0,.6,1) infinite}
.bp:hover{animation:none}
.cd:hover,.ow:hover,.mock:hover{transform:translateY(-6px) scale(1.015)}
.fx{display:grid;grid-template-columns:.92fr 1.08fr;gap:44px;align-items:center;margin-top:44px}
.fxlist{display:flex;flex-direction:column;gap:12px}
.fxr{display:flex;gap:16px;align-items:flex-start;padding:20px 22px;border-radius:16px;border:1px solid transparent;cursor:pointer;transition:all .35s cubic-bezier(.2,.8,.3,1);background:transparent}
.fxr:hover{background:#fff;border-color:var(--line)}
.fxr.on{background:#fff;border-color:var(--v);box-shadow:var(--shl)}
.fxi{width:44px;height:44px;border-radius:13px;background:var(--tint);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.15rem;transition:.35s}
.fxr.on .fxi{background:var(--v);transform:scale(1.08)}
.fxr h3{font-size:1.02rem;transition:.3s}
.fxr.on h3{color:var(--v)}
.fxr p{font-size:.88rem;color:var(--mute);margin-top:4px;max-height:0;opacity:0;overflow:hidden;transition:all .4s cubic-bezier(.2,.8,.3,1)}
.fxr.on p{max-height:60px;opacity:1;margin-top:7px}
.fxbar{height:2px;background:var(--line);border-radius:2px;margin-top:12px;overflow:hidden;display:none}
.fxr.on .fxbar{display:block}
.fxbar i{display:block;height:100%;width:0;background:var(--v);animation:fxfill 4.6s linear forwards}
@keyframes fxfill{to{width:100%}}
.fxview{position:relative;min-height:400px}
.fxp{position:absolute;inset:0;background:#fff;border:1px solid var(--line);border-radius:22px;padding:26px;box-shadow:var(--sh);opacity:0;transform:translateY(18px) scale(.98);pointer-events:none;transition:all .5s cubic-bezier(.2,.8,.3,1)}
.fxp.on{opacity:1;transform:none;pointer-events:auto}
.fxh{font-size:.7rem;font-weight:800;letter-spacing:.11em;text-transform:uppercase;color:var(--soft);margin-bottom:16px}
.row{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:#F8F9FC;border-radius:12px;margin-bottom:9px;font-size:.86rem}
.row b{font-weight:700}
.chip{font-size:.7rem;font-weight:700;padding:4px 10px;border-radius:100px}
.cg{background:#DCFCE7;color:#15803D}.cv{background:var(--tint);color:var(--v)}.cy{background:#FEF3C7;color:#92400E}
.rankrow{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;margin-bottom:8px;font-size:.86rem;background:#F8F9FC}
.rankrow.me{background:linear-gradient(135deg,var(--v),var(--v2));color:#fff;box-shadow:0 8px 22px rgba(108,75,255,.3);transform:scale(1.03)}
.rk{width:24px;height:24px;border-radius:8px;background:#fff;color:var(--ink);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.75rem;flex-shrink:0}
.rv{opacity:0;transform:translateY(26px);transition:opacity .75s cubic-bezier(.2,.8,.3,1),transform .75s cubic-bezier(.2,.8,.3,1)}
.rv.in{opacity:1;transform:none}
.mt{margin-top:38px}.mts{margin-top:18px}
@media(max-width:940px){
 .hgrid,.g3,.g2,.st4,.steps,.split,.pg,.mini,.ad,.own{grid-template-columns:1fr}
 .own{grid-template-columns:1fr 1fr}
 .st{border-inline-end:0;border-bottom:1px solid var(--line)}
 .s{padding:64px 0}.hero{padding:44px 0 64px}
 .numsec,.fd{padding:34px 24px;border-radius:22px}
 .stage{margin-top:52px;max-width:340px}
 .f1{inset-inline-start:-6px;top:-28px}.f2{top:auto;bottom:128px;inset-inline-end:-6px}.f3{inset-inline-start:-8px;bottom:-20px}
 .flowtag{text-align:end;padding-inline-end:6px}
}
@media (max-width:767px){
  .own { grid-template-columns: 1fr; }
  .interactive-btn{ flex-direction: column; }
}
`

const sourceSections = `
  <section class="s"><div class="w center">
    <div class="bdg rv">The problem</div>
    <h2 class="rv mts">Someone else owns your guest.</h2>
    <div class="g3 mt" style="text-align:start">
      <div class="cd rv"><div class="gn">01</div><h3>Happy guests stay silent</h3><p>Only the angry ones write reviews.</p></div>
      <div class="cd rv"><div class="gn">02</div><h3>Apps take a third</h3><p>And they keep the customer, not you.</p></div>
      <div class="cd rv"><div class="gn">03</div><h3>Agencies rent attention</h3><p>Stop paying and it stops that day.</p></div>
    </div>
  </div></section>

  <section class="s" style="padding-top:0"><div class="w"><div class="numsec rv">
    <div class="g2" style="align-items:center;gap:52px">
      <div>
        <div class="bdg" style="background:rgba(255,255,255,.12);color:#C4B5FF">Harvard Business School</div>
        <div class="big mts">5–9%</div>
        <p class="sub mts" style="font-size:1.15rem">more revenue, per extra star. For independents only.</p>
        <div class="mt"><div class="mrow"><span>Your revenue</span><b>AED 2,400,000</b></div><div class="mrow"><span>4.1 ★ → 4.6 ★</span><b>+2.7%</b></div><div class="mrow hl"><span>You earn</span><b>AED 64,800</b></div><div class="mrow" style="border:0"><span>You pay</span><b>AED 3,588</b></div></div>
      </div>
      <div>
        <svg viewBox="0 0 400 250" width="100%" aria-label="Illustrative rating growth chart">
          <g stroke="rgba(255,255,255,.09)"><line x1="44" y1="34" x2="392" y2="34"/><line x1="44" y1="90" x2="392" y2="90"/><line x1="44" y1="146" x2="392" y2="146"/><line x1="44" y1="202" x2="392" y2="202"/></g>
          <text x="10" y="38" fill="#7E7E9E" font-size="11">4.8</text><text x="10" y="94" fill="#7E7E9E" font-size="11">4.6</text><text x="10" y="150" fill="#7E7E9E" font-size="11">4.4</text><text x="10" y="206" fill="#7E7E9E" font-size="11">4.1</text>
          <defs><linearGradient id="restaurant-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8B6BFF"/><stop offset="1" stop-color="#C4B5FF"/></linearGradient><linearGradient id="restaurant-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8B6BFF" stop-opacity=".34"/><stop offset="1" stop-color="#8B6BFF" stop-opacity="0"/></linearGradient></defs>
          <path class="rating-area" d="M44,202 L130,188 L216,146 L302,112 L378,80 L378,228 L44,228 Z" fill="url(#restaurant-fill)" opacity="0"/><path class="rating-line" d="M44,202 L130,188 L216,146 L302,112 L378,80" fill="none" stroke="url(#restaurant-line)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="420" stroke-dashoffset="420"/><circle class="rating-dot" cx="378" cy="80" r="6" fill="#C4B5FF" opacity="0"/>
          <text x="38" y="243" fill="#7E7E9E" font-size="11">Day 1</text><text x="344" y="243" fill="#7E7E9E" font-size="11">Day 90</text>
        </svg><p style="font-size:.78rem;color:#7E7E9E;margin-top:6px">Illustrative. We baseline your real rating on day one.</p>
      </div>
    </div>
  </div></div></section>

  <section class="s" id="h" style="padding-top:0"><div class="w center">
    <div class="bdg rv">How it works</div><h2 class="rv mts">Three steps. Zero staff effort.</h2>
    <div class="steps" style="text-align:start">
      <div class="rv"><div class="mock"><div class="mscr"><div style="font-weight:800;font-size:.92rem">Mezze &amp; Grill</div><div style="font-size:.68rem;color:var(--soft);font-weight:700;letter-spacing:.1em">MAINS</div><div class="mi"><span>Lamb Ouzi</span><b>92</b></div><div class="mi"><span>Shish Taouk</span><b>68</b></div><div style="display:flex;gap:7px;margin-top:auto"><div style="flex:1;background:#25D366;border-radius:10px;padding:9px;text-align:center;font-size:.71rem;font-weight:800;color:#fff">WhatsApp</div><div style="flex:1;background:var(--v);border-radius:10px;padding:9px;text-align:center;font-size:.71rem;font-weight:800;color:#fff">Directions</div></div></div></div><div style="display:flex;gap:11px;align-items:center;margin-top:18px"><div class="stnum">1</div><h3>Scan → WhatsApp</h3></div><p style="font-size:.9rem;color:var(--mute);margin-top:6px">They tap send, get the menu link — and you have their number.</p></div>
      <div class="rv"><div class="mock"><div class="mscr"><div style="background:#fff;border-radius:12px;padding:10px 12px;font-size:.79rem;box-shadow:0 1px 4px rgba(13,13,26,.05)">How was your evening?</div><div style="display:flex;gap:5px;flex-wrap:wrap;align-self:flex-end"><span class="opt sel">Excellent</span><span class="opt">Good</span><span class="opt">Not happy</span></div><div style="background:#fff;border-radius:12px;padding:10px 12px;font-size:.79rem;box-shadow:0 1px 4px rgba(13,13,26,.05)">Share it on Google?</div><div style="margin-top:auto;background:#fff;border:1.5px solid var(--v);color:var(--v);border-radius:11px;padding:10px;text-align:center;font-size:.76rem;font-weight:800">Leave a review</div></div></div><div style="display:flex;gap:11px;align-items:center;margin-top:18px"><div class="stnum">2</div><h3>Everyone is asked</h3></div><p style="font-size:.9rem;color:var(--mute);margin-top:6px">Three taps. Then the Google link — to every guest.</p></div>
      <div class="rv"><div class="mock"><div class="mscr"><div style="background:#FEF2F2;border-radius:12px;padding:11px"><div style="font-size:.66rem;font-weight:800;color:var(--red);letter-spacing:.1em">ALERT · 2 MIN AGO</div><div style="font-size:.8rem;margin-top:4px">“Waited 25 min for mains”</div></div><div style="background:#F0FDF4;border-radius:12px;padding:11px"><div style="font-size:.66rem;font-weight:800;color:var(--green);letter-spacing:.1em">10% OFF SENT · 142 GUESTS</div><div style="font-size:.8rem;margin-top:4px">11 redeemed · AED 4,180 back</div></div><div style="margin-top:auto"><div style="font-size:.7rem;color:var(--soft);font-weight:700">RATING TODAY</div><div style="font-size:1.6rem;font-weight:900;letter-spacing:-.04em">4.6 <span style="color:var(--green);font-size:.78rem">▲ 0.5</span></div></div></div></div><div style="display:flex;gap:11px;align-items:center;margin-top:18px"><div class="stnum">3</div><h3>Fix &amp; bring back</h3></div><p style="font-size:.9rem;color:var(--mute);margin-top:6px">Complaints solved live. Then 10% off to return.</p></div>
    </div>
  </div></section>

  <section class="s" style="padding-top:0"><div class="w"><div class="center"><div class="bdg rv">What you get</div><h2 class="rv mts">One system. Four jobs.</h2></div>
    <div class="fx"><div class="fxlist"><div class="fxr on" data-fx="0"><div class="fxi">🍽️</div><div style="flex:1"><h3>Digital menu</h3><p>Bilingual, instant, on your own brand. Call, WhatsApp and directions in one tap.</p><div class="fxbar"><i></i></div></div></div><div class="fxr" data-fx="1"><div class="fxi">⭐</div><div style="flex:1"><h3>Review engine</h3><p>Excellent, Good or Not happy — then every guest gets the Google link.</p><div class="fxbar"><i></i></div></div></div><div class="fxr" data-fx="2"><div class="fxi">👥</div><div style="flex:1"><h3>Guest database</h3><p>Every visitor becomes a contact you own — not the delivery app.</p><div class="fxbar"><i></i></div></div></div><div class="fxr" data-fx="3"><div class="fxi">📍</div><div style="flex:1"><h3>Google visibility</h3><p>Climb the Maps pack and appear in AI search answers. No ad spend.</p><div class="fxbar"><i></i></div></div></div></div>
      <div class="fxview"><div class="fxp on" data-p="0"><div class="fxh">Your menu page</div><div style="font-weight:800;font-size:1.05rem">Mezze &amp; Grill</div><div style="font-size:.78rem;color:var(--mute);margin-bottom:16px">evolvxai.com/mezze</div><div class="row"><span>Lamb Ouzi</span><b>AED 92</b></div><div class="row"><span>Shish Taouk</span><b>AED 68</b></div><div class="row"><span>Mixed Grill</span><b>AED 145</b></div><div class="interactive-btn" style="display:flex;gap:9px;margin-top:16px"><div style="flex:1;background:#25D366;color:#fff;border-radius:12px;padding:12px;text-align:center;font-size:.8rem;font-weight:800">WhatsApp</div><div style="flex:1;background:var(--v);color:#fff;border-radius:12px;padding:12px;text-align:center;font-size:.8rem;font-weight:800">Directions</div><div style="flex:1;background:var(--ink);color:#fff;border-radius:12px;padding:12px;text-align:center;font-size:.8rem;font-weight:800">Call</div></div></div>
      <div class="fxp" data-p="1"><div class="fxh">This month</div><div style="display:flex;gap:14px;margin-bottom:18px"><div style="flex:1"><div style="font-size:2.1rem;font-weight:900;color:var(--v)">1,284</div><div style="font-size:.76rem;color:var(--mute)">guests asked</div></div><div style="flex:1"><div style="font-size:2.1rem;font-weight:900">182</div><div style="font-size:.76rem;color:var(--mute)">reviews left</div></div></div><div class="row"><span>★★★★★</span><span class="chip cg">148</span></div><div class="row"><span>★★★★☆</span><span class="chip cg">21</span></div><div class="row"><span>★★★☆☆</span><span class="chip cy">9</span></div><div class="row"><span>Complaints resolved on WhatsApp</span><span class="chip cv">13</span></div></div>
      <div class="fxp" data-p="2"><div class="fxh">Your guest list</div><div class="row"><div><b>Aisha K.</b><div style="font-size:.74rem;color:var(--mute)">4 visits · last Tue</div></div><span class="chip cg">Regular</span></div><div class="row"><div><b>Omar B.</b><div style="font-size:.74rem;color:var(--mute)">2 visits · 3 wks ago</div></div><span class="chip cy">Win back</span></div><div class="row"><div><b>Sara M.</b><div style="font-size:.74rem;color:var(--mute)">1 visit · yesterday</div></div><span class="chip cv">New</span></div><div style="margin-top:16px;padding:14px;background:var(--tint2);border:1px dashed var(--v);border-radius:14px;text-align:center;font-size:.84rem;font-weight:700;color:var(--v)">1,284 contacts — yours to export, any day</div></div>
      <div class="fxp" data-p="3"><div class="fxh">“restaurants near me”</div><div class="rankrow"><div class="rk">1</div><div style="flex:1">Competitor A</div><span style="font-size:.78rem">4.7 ★</span></div><div class="rankrow me"><div class="rk">2</div><div style="flex:1"><b>Mezze &amp; Grill</b><div style="font-size:.72rem;opacity:.85">▲ up from #9</div></div><span style="font-size:.78rem">4.6 ★</span></div><div class="rankrow"><div class="rk">3</div><div style="flex:1">Competitor B</div><span style="font-size:.78rem">4.4 ★</span></div><div style="margin-top:18px;padding:14px;background:#F8F9FC;border-radius:14px;font-size:.83rem;color:var(--mute)"><b style="color:var(--ink)">Reviews drive ~20% of Maps ranking</b><br><span>and ~16% of AI search visibility.</span></div></div></div>
    </div>
  </div></section>

  <section class="s" style="padding-top:0"><div class="w"><div class="center" style="margin-bottom:38px"><div class="bdg rv">The difference</div><h2 class="rv mts">We don’t hide unhappy guests.<br>We fix them.</h2></div><div class="split"><div class="pl plx rv"><div class="pic" style="background:var(--red)">✕</div><h3 style="font-size:1.25rem;color:var(--red)">Hiding the complaint</h3><div class="li"><b>·</b><span>Unhappy guests are quietly blocked from Google</span></div><div class="li"><b>·</b><span>Google prohibits it — reviews can be wiped</span></div><div class="li"><b>·</b><span>The problem in your kitchen never gets fixed</span></div><div class="li"><b>·</b><span>Gains you 0.05 stars. Risks all of them.</span></div></div><div class="pl plv rv"><div class="pic" style="background:var(--green)">✓</div><h3 style="font-size:1.25rem;color:#188F44">Fixing it live on WhatsApp</h3><div class="li"><b>·</b><span>“Not happy” reaches your manager in seconds</span></div><div class="li"><b>·</b><span>You resolve it before they ever post</span></div><div class="li"><b>·</b><span>Then they’re asked too — and often praise the save</span></div><div class="li"><b>·</b><span>Nothing hidden. Nothing at risk.</span></div></div></div><div class="rv" style="margin-top:26px;background:linear-gradient(135deg,var(--v),var(--v2));border-radius:20px;padding:30px;text-align:center;color:#fff"><div style="font-size:1.25rem;font-weight:800">“A guest whose problem you solved in four minutes writes a warmer review than one who was merely satisfied.”</div><div style="font-size:.86rem;opacity:.8;margin-top:10px">Your best reviewers are the ones you rescued.</div></div></div></section>

  <section class="s" style="padding-top:0"><div class="w center"><div class="bdg rv">Who keeps the guest</div><h2 class="rv mts">Only one of these is yours.</h2><div class="own"><div class="ow rv"><div class="owt">Delivery apps</div><div class="owc">25–35%</div><div class="owl">of every order</div><div class="keep"><b>✕</b><span>You keep nothing</span></div></div><div class="ow rv"><div class="owt">Agency</div><div class="owc">10–30k</div><div class="owl">AED / month + ads</div><div class="keep"><b>✕</b><span>Stops when you stop</span></div></div><div class="ow rv"><div class="owt">Menu tools</div><div class="owc">180–620</div><div class="owl">AED / month</div><div class="keep"><b>✕</b><span>No reviews, no growth</span></div></div><div class="ow you rv"><div class="owt">EVOLVXAI</div><div class="owc">299</div><div class="owl">AED / month</div><div class="keep"><b>✓</b><span>Reviews + list are yours</span></div></div></div></div></section>

  <section class="s" id="p" style="padding-top:0"><div class="w"><div class="center"><div class="bdg rv">Pricing</div><h2 class="rv mts">Start free.</h2></div><div class="mini mt"><div class="mn rv"><div><h3>Free menu</h3><p style="font-size:.86rem;color:var(--mute)">Send a PDF. Live in 24h.</p></div><b>AED 0</b></div><div class="mn rv"><div><h3>Own It</h3><p style="font-size:.86rem;color:var(--mute)">Your domain. Your account.</p></div><b>AED 1,000<span style="font-size:.72rem;color:var(--mute);font-weight:600">/yr</span></b></div></div><div class="pg"><div class="pc rv"><div class="pn">Growth</div><div class="po">Higher rating. Repeat guests.</div><div class="pr">299</div><div class="pp">AED / month</div><ul><li>Automated review requests</li><li>WhatsApp menu + QR</li><li>Your guest database</li><li>Live complaint resolution on WhatsApp</li><li>24h return offers</li><li>Live rating dashboard</li></ul><a href="https://evolvxai.com/growth-plan" class="btn bg2">Start Growth</a></div><div class="pc f rv"><span class="tg">Most popular</span><div class="pn">Power</div><div class="po">Get found by new guests.</div><div class="pr">799</div><div class="pp">AED / month</div><ul><li>Everything in Growth</li><li>Rank higher on Maps</li><li>Appear in AI search</li><li>Google profile optimised</li><li>Separate review QR</li></ul><a href="https://evolvxai.com/power-plan" class="btn bp">Choose Power</a></div><div class="pc dk rv"><div class="pn">Concierge</div><div class="po">We run all of it.</div><div class="pr">2,999</div><div class="pp">AED / month · done for you</div><ul><li>Everything in Power</li><li>Dedicated bilingual manager</li><li>Every review answered</li><li>Weekly Google posts</li><li>2 WhatsApp campaigns / month</li></ul><a href="https://evolvxai.com/concierge-plan" class="btn bw">Talk to us</a></div></div><div class="ad"><div class="ai rv"><h3>Google Profile Sprint</h3><p style="font-size:.86rem;color:var(--mute)">Full overhaul, one time.</p><b>AED 3,500</b></div><div class="ai rv"><h3>Signature Menu + Photos</h3><p style="font-size:.86rem;color:var(--mute)">Bespoke design + food shoot.</p><b>AED 2,500–5,000</b></div><div class="ai rv"><h3>Group Rollout</h3><p style="font-size:.86rem;color:var(--mute)">3+ outlets, one dashboard.</p><b>Custom</b></div></div></div></section>

  <section class="s" style="padding-top:0" id="f"><div class="w"><div class="fd rv"><div class="bdg" style="background:rgba(255,255,255,.18);color:#fff">Onboarding now</div><h2 class="mts" style="color:#fff">20 places open this quarter.</h2><p class="sub mts">We onboard 20 restaurants per quarter so every rating gets managed properly, not queued. Your Google rating is baselined on day one — in 90 days you see exactly what moved.</p><div class="slots" id="sl"></div><div style="font-size:.85rem;color:rgba(255,255,255,.75);margin-bottom:22px">13 places remaining · next intake opens when this one closes</div><div class="bs"><a href="#p" class="btn bw">Claim a place</a><a href="https://evolvxai.com/free-menu" class="btn" style="border-color:rgba(255,255,255,.4);color:#fff">Just the free menu</a></div></div></div></section>

  <section class="s" style="padding-top:0"><div class="w" style="max-width:780px"><h2 class="center rv" style="font-size:2.1rem">Questions</h2><div class="mt rv"><details open><summary>Can you guarantee my rating goes up?</summary><p>No — and be careful of anyone who does. We guarantee every guest is asked, and you see it measured from day one.</p></details><details><summary>Won’t asking everyone bring bad reviews?</summary><p>Rarely — because you fix the problem first. An unhappy guest reaches your manager on WhatsApp within seconds, and most complaints are resolved before anyone posts anything.</p></details><details><summary>Do I leave Talabat?</summary><p>No. Keep them. Just stop letting them be your only source of guests.</p></details><details><summary>New POS or hardware?</summary><p>Nothing to install, nothing to buy, nothing for staff to learn.</p></details><details><summary>Who owns the guest data?</summary><p>You. Guests opt in, every message has one-tap opt-out, and you can export the list any day.</p></details></div></div></section>

  <section class="restaurant-cta"><div class="w"><h2 class="rv">Now sure? We have got you covered.</h2><p class="sub mts rv">Reach out to learn how EvolvXAI can simplify your operations and boost results.</p><div class="bs mt rv" style="justify-content:center"><a href="https://evolvxai.com/free-menu" target="_blank" rel="noreferrer" class="btn bp">Send my menu</a><a href="https://wa.me/971581675393" target="_blank" rel="noreferrer" class="btn bg2">WhatsApp</a></div></div></section>
`

const pageHtml = `
  <div class="hero">
    <div class="grid-bg"></div>
    <div class="orb" style="width:520px;height:520px;background:radial-gradient(circle,rgba(108,75,255,.16),transparent 68%);top:-160px;right:-80px"></div>
    <div class="orb" style="width:400px;height:400px;background:radial-gradient(circle,rgba(124,58,237,.12),transparent 68%);bottom:-160px;left:-100px"></div>
    <div class="w hgrid">
      <div>
        <div class="bdg rv"><i></i><span>Restaurant Growth · UAE</span></div>
        <h1 class="rv mts">10,000 guests served.<br><span class="vio">200 reviews. No guest list.</span></h1>
        <p class="sub rv mts" style="max-width:44ch">The other 9,800 ate your food and walked out anonymous. Every menu scan turns a walk-in into a review, a contact, and a reason to come back.</p>
        <div class="bs mt rv">
          <a href="/contact" class="btn bp">Get my free menu</a>
          <a href="#h" class="btn bg2">See how it works</a>
        </div>
        <div class="tags rv">
          <span class="tag" style="background:var(--tint);border-color:transparent;color:var(--v);font-weight:700">★ 100+ UAE restaurants</span>
          <span class="tag">⚡ Live in 24h</span>
          <span class="tag">Arabic + English menus</span>
          <span class="tag">✓ No contract</span>
          <span class="tag">0% commission</span>
        </div>
      </div>

      <div class="stage rv">
        <div class="fp f1"><div class="fpi" style="background:#FEF3C7">⭐</div><div><span id="fpr">4.1</span> <small>Google rating</small></div></div>
        <div class="fp f2"><div class="fpi" style="background:#DCFCE7">📈</div><div><span id="fpn">+0</span> <small>new reviews</small></div></div>
        <div class="fp f3"><div class="fpi" style="background:var(--tint)">💰</div><div>AED <span id="fpm">0</span> <small>added revenue / yr</small></div></div>
        <div class="phone">
          <div class="pbar">
            <div class="pav">M</div>
            <div><div class="pnm">Mezze &amp; Grill</div>
              <div class="pst"><i></i><span>WhatsApp · automated</span></div></div>
          </div>
          <div class="flowtag" id="flowTag"><b>Happy guest</b></div>
          <div class="chat" id="chat"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="strip"><div class="st4">
    <div class="st"><b>5–9%</b><span>revenue per extra star</span></div>
    <div class="st"><b data-c="20" data-suf="%">0</b><span>of Maps ranking</span></div>
    <div class="st"><b data-c="16" data-suf="%">0</b><span>of AI search</span></div>
    <div class="st"><b>0%</b><span>commission. Ever.</span></div>
  </div></div>

  <div style="background:#fff;border-bottom:1px solid var(--line);padding:30px 0">
    <div class="w" style="display:flex;gap:12px;align-items:stretch;justify-content:center;flex-wrap:wrap">
      <div style="flex:1;min-width:180px;text-align:center;padding:6px 14px">
        <div style="font-size:1.9rem;font-weight:900;letter-spacing:-.04em;color:var(--v)">100+</div>
        <div style="font-size:.83rem;color:var(--mute);margin-top:2px">restaurant menus live</div></div>
      <div style="width:1px;background:var(--line)"></div>
      <div style="flex:1;min-width:180px;text-align:center;padding:6px 14px">
        <div style="font-size:1.9rem;font-weight:900;letter-spacing:-.04em;color:var(--v)">12+</div>
        <div style="font-size:.83rem;color:var(--mute);margin-top:2px">on paid monthly plans</div></div>
      <div style="width:1px;background:var(--line)"></div>
      <div style="flex:1;min-width:180px;text-align:center;padding:6px 14px">
        <div style="font-size:1.9rem;font-weight:900;letter-spacing:-.04em;color:var(--v)">50+</div>
        <div style="font-size:.83rem;color:var(--mute);margin-top:2px">team behind it at EvolvXAI</div></div>
      <div style="width:1px;background:var(--line)"></div>
      <div style="flex:1;min-width:180px;text-align:center;padding:6px 14px">
        <div style="font-size:1.9rem;font-weight:900;letter-spacing:-.04em;color:var(--v)">Dubai</div>
        <div style="font-size:.83rem;color:var(--mute);margin-top:2px">built here, not imported</div></div>
    </div>
  </div>

  <section class="s w">
    <div class="center rv">
      <div class="bdg" style="margin:0 auto 20px"><i></i><span>Own your guests</span></div>
      <h2 style="margin-bottom:12px">The guest list is the business.<br>Right now, it is being rented out.</h2>
      <p class="sub center">Most restaurants spend heavily on food, interiors, and ads — then lose the contact details of the people who already loved the experience.</p>
    </div>

    <div class="g3 mt rv" style="max-width:1180px;margin:48px auto 0">
      <article class="cd">
        <div class="gn">01</div>
        <h3>Guest data is left behind</h3>
        <p>Every happy guest leaves without a follow-up. Their next visit goes to the restaurant that owns the relationship.</p>
      </article>
      <article class="cd">
        <div class="gn">02</div>
        <h3>Every menu scan needs a follow-up</h3>
        <p>Your menu is a lead magnet. The real profit comes from turning that scan into a customer relationship you control.</p>
      </article>
      <article class="cd">
        <div class="gn">03</div>
        <h3>Reviews are ghosted</h3>
        <p>People are happy but never asked to leave a review — and the restaurant pays for it with lost ranking, trust, and repeat bookings.</p>
      </article>
    </div>
  </section>

  <section class="s" style="background:linear-gradient(150deg,#FAF9FF 0%,#FFFFFF 38%,#F6F2FF 100%)">
    <div class="w">
      <div class="center rv">
        <div class="bdg" style="margin:0 auto 20px"><i></i><span>What you gain</span></div>
        <h2>A live guest list, a repeat-visit machine, and a review engine.</h2>
      </div>

      <div class="numsec mt rv">
        <div style="max-width:760px">
          <div class="bdg" style="background:rgba(255,255,255,.08);color:#fff;border-color:rgba(255,255,255,.12)"><i style="background:#fff"></i><span>Guest relationship system</span></div>
          <h2 style="margin-top:24px"><span class="big">3x</span><br>more repeat visits from the same guest base.</h2>
          <p class="sub" style="margin-top:16px;max-width:46ch;color:#B8B8CC">From first scan to first return visit, the AI turns the same guest into a repeat, review-ready customer.</p>
        </div>

        <div class="mt" style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:900px">
          <div class="mrow hl"><span>Repeat revenue</span><b>+AED 60k</b></div>
          <div class="mrow"><span>Google review volume</span><b>+28%</b></div>
          <div class="mrow"><span>Reservation conversion</span><b>+36%</b></div>
        </div>
      </div>
    </div>
  </section>

  <section class="s w" id="how-it-works">
    <div class="center rv">
      <div class="bdg" style="margin:0 auto 20px"><i></i><span>How it works</span></div>
      <h2>One menu. One guest flow. One growth system.</h2>
    </div>

    <div class="steps">
      <article class="mock rv">
        <div class="mscr">
          <div class="stnum">1</div>
          <div class="mi"><span>Menu scanned</span><strong>✔</strong></div>
          <div class="mi"><span>Arabic or English</span><strong>✔</strong></div>
          <div class="mi"><span>Lead captured</span><strong>✔</strong></div>
          <div class="mi"><span>Guest profile saved</span><strong>✔</strong></div>
        </div>
      </article>
      <article class="mock rv" style="animation-delay:.08s">
        <div class="mscr">
          <div class="stnum">2</div>
          <div class="mi"><span>AI follows up</span><strong>⚡</strong></div>
          <div class="mi"><span>Table request</span><strong>✔</strong></div>
          <div class="mi"><span>Offer sent</span><strong>✔</strong></div>
          <div class="mi"><span>Reminder queued</span><strong>✔</strong></div>
        </div>
      </article>
      <article class="mock rv" style="animation-delay:.16s">
        <div class="mscr">
          <div class="stnum">3</div>
          <div class="mi"><span>Review request</span><strong>★</strong></div>
          <div class="mi"><span>Return visit prompt</span><strong>🔁</strong></div>
          <div class="mi"><span>CRM updated</span><strong>✔</strong></div>
          <div class="mi"><span>Repeat guest list grows</span><strong>📈</strong></div>
        </div>
      </article>
    </div>
  </section>

  <section class="s" style="background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
    <div class="w">
      <div class="split">
        <div class="pl plx rv">
          <div class="pic" style="background:linear-gradient(135deg,#f87171,#ef4444)">⚠</div>
          <h3>Without a guest system</h3>
          <div class="li"><b>•</b><span>Guest data is scattered across walk-ins, DMs, and untracked reviews.</span></div>
          <div class="li"><b>•</b><span>Repeat visits become accidental instead of planned.</span></div>
          <div class="li"><b>•</b><span>Review requests happen only when someone remembers.</span></div>
        </div>
        <div class="pl plv rv">
          <div class="pic" style="background:linear-gradient(135deg,#22c55e,#16a34a)">✓</div>
          <h3>With EvolvXAI</h3>
          <div class="li"><b>•</b><span>Every contact is saved from menu scans and WhatsApp conversations.</span></div>
          <div class="li"><b>•</b><span>Reminders and return-offer messages keep guests coming back.</span></div>
          <div class="li"><b>•</b><span>Positive reviews are triggered at the perfect moment.</span></div>
        </div>
      </div>
    </div>
  </section>

  <section class="s w">
    <div class="center rv">
      <div class="bdg" style="margin:0 auto 20px"><i></i><span>Business value</span></div>
      <h2>What happens when you own your own guest list.</h2>
    </div>

    <div class="own">
      <div class="ow rv">
        <div class="owt">You rent</div>
        <div class="owc">Ads</div>
        <div class="owl">One-time guests</div>
        <div class="keep"><b>✕</b> no repeat data</div>
      </div>
      <div class="ow rv">
        <div class="owt">You rent</div>
        <div class="owc">Platforms</div>
        <div class="owl">No direct relationship</div>
        <div class="keep"><b>✕</b> lost retention</div>
      </div>
      <div class="ow rv">
        <div class="owt">You rent</div>
        <div class="owc">Reviews</div>
        <div class="owl">Untracked sentiment</div>
        <div class="keep"><b>✕</b> inconsistent ranking</div>
      </div>
      <div class="ow you rv">
        <div class="owt">You own</div>
        <div class="owc">Your guest list</div>
        <div class="owl">Repeat revenue, CRM, and reviews</div>
        <div class="keep"><b>✓</b> direct relationship</div>
      </div>
    </div>
  </section>

  <section class="s" style="background:linear-gradient(180deg,#F8FAFF 0%,#FFFFFF 100%)">
    <div class="w">
      <div class="center rv">
        <div class="bdg" style="margin:0 auto 20px"><i></i><span>Smart features</span></div>
        <h2>Everything your restaurant needs to keep guests engaged and coming back.</h2>
      </div>

      <div class="fx">
        <div class="fxlist rv">
          <div class="fxr on">
            <div class="fxi">💬</div>
            <div>
              <h3>Guest capture from every channel</h3>
              <p>WhatsApp, QR menus, website, and in-person interactions all feed one guest list.</p>
              <div class="fxbar"><i></i></div>
            </div>
          </div>
          <div class="fxr">
            <div class="fxi">📩</div>
            <div>
              <h3>Follow-up automations</h3>
              <p>Automatic thank-you notes, reminders, and return prompts guide the guest journey.</p>
              <div class="fxbar"><i></i></div>
            </div>
          </div>
          <div class="fxr">
            <div class="fxi">⭐</div>
            <div>
              <h3>Review request timing</h3>
              <p>Happy guests get review prompts within minutes, when it matters most.</p>
              <div class="fxbar"><i></i></div>
            </div>
          </div>
          <div class="fxr">
            <div class="fxi">📈</div>
            <div>
              <h3>Repeat visit tracking</h3>
              <p>See which guest segments return, which offers work, and which messages convert best.</p>
              <div class="fxbar"><i></i></div>
            </div>
          </div>
        </div>

        <div class="fxview rv">
          <div class="fxp on">
            <div class="fxh">Guest flow</div>
            <div class="row"><span>New menu scan</span><span class="chip cg">Captured</span></div>
            <div class="row"><span>Guest profile created</span><span class="chip cv">Saved</span></div>
            <div class="row"><span>Follow-up message sent</span><span class="chip cg">Delivered</span></div>
            <div class="row"><span>Review prompt queued</span><span class="chip cy">Scheduled</span></div>
            <div class="row"><span>Repeat-visit reminder</span><span class="chip cv">Ready</span></div>
          </div>
          <div class="fxp">
            <div class="fxh">Top returning guests</div>
            <div class="rankrow me"><span class="rk">1</span><span>Layla M.</span><span style="margin-left:auto">92% return rate</span></div>
            <div class="rankrow"><span class="rk">2</span><span>Omar H.</span><span style="margin-left:auto">76% return rate</span></div>
            <div class="rankrow"><span class="rk">3</span><span>Noor A.</span><span style="margin-left:auto">71% return rate</span></div>
            <div class="rankrow"><span class="rk">4</span><span>Khalid R.</span><span style="margin-left:auto">64% return rate</span></div>
          </div>
          <div class="fxp">
            <div class="fxh">Review engine</div>
            <div class="row"><span>Post-visit review request</span><span class="chip cg">Sent</span></div>
            <div class="row"><span>Happy guest nudged</span><span class="chip cg">5★</span></div>
            <div class="row"><span>Map profile boosted</span><span class="chip cv">Visible</span></div>
            <div class="row"><span>Repeat booking reminder</span><span class="chip cy">Queued</span></div>
          </div>
          <div class="fxp">
            <div class="fxh">Conversion dashboard</div>
            <div class="row"><span>WhatsApp leads</span><b>318</b></div>
            <div class="row"><span>Tables confirmed</span><b>164</b></div>
            <div class="row"><span>Reviews generated</span><b>49</b></div>
            <div class="row"><span>Returning guests</span><b>124</b></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="s w">
    <div class="center rv">
      <div class="bdg" style="margin:0 auto 20px"><i></i><span>Simple pricing</span></div>
      <h2>Start with zero commission and grow without the platform tax.</h2>
    </div>

    <div class="mini mt rv">
      <div class="mn"><span>Fast launch</span><b>Starts from AED 1,999/mo</b></div>
      <div class="mn"><span>Includes</span><b>CRM + AI + reviews + reminders</b></div>
    </div>

    <div class="pg">
      <article class="pc rv">
        <div class="pn">Starter</div>
        <div class="po">For single locations</div>
        <div class="pr">AED 1,999</div>
        <div class="pp">Monthly, no commission</div>
        <ul>
          <li>Guest capture from QR menu</li>
          <li>WhatsApp follow-up flows</li>
          <li>Review request automation</li>
          <li>Basic guest CRM</li>
        </ul>
        <a href="/contact" class="btn bw">Book a call</a>
      </article>

      <article class="pc f rv">
        <div class="tg">Most popular</div>
        <div class="pn">Growth</div>
        <div class="po">For busy restaurant brands</div>
        <div class="pr">AED 3,499</div>
        <div class="pp">Monthly, no commission</div>
        <ul>
          <li>Everything in Starter</li>
          <li>Advanced repeat-visit campaigns</li>
          <li>Multi-channel lead automation</li>
          <li>Priority optimization support</li>
        </ul>
        <a href="/contact" class="btn bp">Get started</a>
      </article>

      <article class="pc dk rv">
        <div class="pn">Scale</div>
        <div class="po">For multiple branches</div>
        <div class="pr">Custom</div>
        <div class="pp">Tailored setup and dedicated support</div>
        <ul>
          <li>Multi-location guest data sync</li>
          <li>Branch-level performance reporting</li>
          <li>Custom automation logic</li>
          <li>Dedicated onboarding team</li>
        </ul>
        <a href="/contact" class="btn bw">Talk to sales</a>
      </article>
    </div>
  </section>

  <section class="s w">
    <div class="fd rv">
      <div class="bdg" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);color:#fff"><i style="background:#fff"></i><span>Built for real restaurants</span></div>
      <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:26px;align-items:center;margin-top:22px">
        <div>
          <h2 style="font-size:clamp(2.2rem,4.2vw,3.2rem);margin-bottom:14px">If you serve 2,000+ guests a month, you should own the guest relationship.</h2>
          <p class="sub" style="max-width:40ch;color:rgba(255,255,255,.85)">EvolvXAI helps restaurants turn menu scans into guests, guests into reviews, and reviews into repeat revenue — without paying a commission on every reservation.</p>
          <div class="slots" aria-label="restaurant performance tracker">
            <span class="slot on"></span><span class="slot on"></span><span class="slot on"></span><span class="slot on"></span><span class="slot on"></span><span class="slot on"></span><span class="slot on"></span><span class="slot on"></span><span class="slot"></span><span class="slot"></span>
          </div>
        </div>
        <div style="text-align:center;padding:18px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);border-radius:18px;backdrop-filter:blur(2px)">
          <div style="font-size:1.8rem;font-weight:900;letter-spacing:-.04em">4.9★</div>
          <div style="font-size:.8rem;color:rgba(255,255,255,.8);margin-top:8px">average guest review score after launch</div>
          <div style="margin-top:18px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
            <span class="tag" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16);color:#fff">+38% repeat visits</span>
            <span class="tag" style="background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16);color:#fff">+28% reviews</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="s w">
    <div class="center rv">
      <div class="bdg" style="margin:0 auto 20px"><i></i><span>FAQ</span></div>
      <h2>Questions restaurant owners usually ask.</h2>
    </div>

    <div class="mt" style="max-width:980px;margin:0 auto">
      <details open>
        <summary>Does this work for UAE restaurants?</summary>
        <p>Yes. The system is designed for UAE restaurants and supports Arabic and English guest journeys, WhatsApp automation, and local review capture flows.</p>
      </details>
      <details>
        <summary>Do I need a new menu or a redesign?</summary>
        <p>No. The system integrates with your current menu flow and can work with QR-based menus, website listings, and WhatsApp conversations without a full redesign.</p>
      </details>
      <details>
        <summary>What happens to my existing guest list?</summary>
        <p>We help consolidate existing reviews, contacts, and customer interactions into one CRM so you can start building repeat business immediately.</p>
      </details>
      <details>
        <summary>Is there a commission?</summary>
        <p>No. The platform is built to keep the relationship in your hands. There is no commission on every booking or every guest you convert.</p>
      </details>
    </div>
  </section>

  <footer class="restaurant-inline-footer">
    <div class="w">
      <div style="display:flex;justify-content:space-between;gap:18px;align-items:center;flex-wrap:wrap">
        <div style="font-weight:800;font-size:1.15rem;color:#fff;letter-spacing:-.04em">EvolvXAI</div>
        <div>
          <a href="/salons">Salons</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/pricing">Pricing</a>
          <a href="/features">Features</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div class="fn">EvolvXAI helps service businesses capture leads, automate follow-ups, improve reviews, and increase repeat bookings without paying commissions on growth.</div>
    </div>
  </footer>
`

const scriptJs = `
(function () {
  const revealEls = document.querySelectorAll('.rv')
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    revealEls.forEach((el) => observer.observe(el))
  } else {
    revealEls.forEach((el) => el.classList.add('in'))
  }

  const counters = document.querySelectorAll('[data-c]')
  const animateCounter = (el) => {
    const target = Number(el.getAttribute('data-c')) || 0
    const suffix = el.getAttribute('data-suf') || ''
    let start = null
    const duration = 1400
    const step = (stamp) => {
      if (!start) start = stamp
      const progress = Math.min((stamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = Math.round(eased * target)
      el.textContent = value + suffix
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        counterObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.4 })
  counters.forEach((el) => counterObserver.observe(el))

  const chat = document.getElementById('chat')
  if (chat) {
    const sequence = [
      { type: 'them', text: 'Hi, do you still have a table for 2 tonight?' },
      { type: 'me', text: 'Absolutely — we have a window at 8:30pm. Want me to reserve it?' },
      { type: 'them', text: 'Yes please, and can we get a terrace table?' },
      { type: 'me', text: 'Done — terrace table reserved for 8:30pm. Confirmation sent.' },
      { type: 'them', text: 'Perfect, thank you so much!' },
      { type: 'me', text: 'You’re welcome! We’ll see you tonight.' },
      { type: 'me', text: 'Would you like a quick menu preview for vegan options too?' },
      { type: 'them', text: 'Yes, that would be great.' },
      { type: 'me', text: 'Absolutely — I can send the menu and our chef recommendations.' }
    ]

    let index = 0
    const appendMessage = (msg) => {
      const el = document.createElement('div')
      el.className = 'msg ' + (msg.type === 'me' ? 'me' : 'them')
      el.innerHTML = msg.text + '<span class="tm">' + (msg.time || 'Now') + '</span>'
      chat.appendChild(el)
      chat.scrollTop = chat.scrollHeight
    }

    const resetFlowTag = () => {
      const tag = document.getElementById('flowTag')
      if (tag) {
        tag.classList.remove('rec')
        tag.innerHTML = '<b>Happy guest</b>'
      }
    }

    const startConversation = () => {
      const typing = document.createElement('div')
      typing.className = 'typing'
      typing.innerHTML = '<span></span><span></span><span></span>'
      chat.appendChild(typing)
      setTimeout(() => {
        typing.remove()
        loop()
      }, 700)
    }

    const loop = () => {
      if (index >= sequence.length) {
        const tag = document.getElementById('flowTag')
        if (tag) {
          tag.classList.add('rec')
          tag.innerHTML = '<b>Review requested</b>'
        }
        setTimeout(() => {
          chat.innerHTML = ''
          index = 0
          resetFlowTag()
          setTimeout(startConversation, 1200)
        }, 5000)
        return
      }

      const current = sequence[index]
      appendMessage(current)
      index += 1

      if (index === 3) {
        const tag = document.getElementById('flowTag')
        if (tag) tag.innerHTML = '<b>Table booked</b>'
      }

      if (index === 6) {
        const tag = document.getElementById('flowTag')
        if (tag) tag.innerHTML = '<b>Follow-up sent</b>'
      }

      setTimeout(loop, 900)
    }

    startConversation()
  }

  const metricMap = [
    { id: 'fpr', value: 4.1, suffix: '', rate: 1500 },
    { id: 'fpn', value: 28, suffix: '+', rate: 1700 },
    { id: 'fpm', value: 120000, suffix: '', rate: 1800 }
  ]

  metricMap.forEach((metric) => {
    const el = document.getElementById(metric.id)
    if (!el) return
    let startValue = 0
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / metric.rate, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = metric.value * eased
      el.textContent = metric.id === 'fpm' ? Math.round(value).toLocaleString() : (metric.id === 'fpr' ? value.toFixed(1) : '+' + Math.round(value)) + metric.suffix
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })

  const tabs = document.querySelectorAll('.fxr')
  const panels = document.querySelectorAll('.fxp')
  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((node) => node.classList.remove('on'))
      panels.forEach((panel) => panel.classList.remove('on'))
      tab.classList.add('on')
      panels[idx]?.classList.add('on')
    })
  })

  const intakeSlots = document.getElementById('sl')
  if (intakeSlots) {
    for (let index = 0; index < 20; index += 1) {
      const slot = document.createElement('span')
      slot.className = 'slot' + (index < 7 ? ' on' : '')
      intakeSlots.appendChild(slot)
    }
  }

  const chart = document.querySelector('.numsec')
  if (chart && 'IntersectionObserver' in window) {
    const chartObserver = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting) return
      chart.querySelector('.rating-line')?.setAttribute('stroke-dashoffset', '0')
      chart.querySelector('.rating-area')?.setAttribute('opacity', '1')
      chart.querySelector('.rating-dot')?.setAttribute('opacity', '1')
      chartObserver.disconnect()
    }, { threshold: 0.35 })
    chartObserver.observe(chart)
  }
})()
`

export default function RestaurantPage() {
  const stripStart = pageHtml.indexOf('  <div class="strip">')
  const heroHtml = stripStart >= 0 ? pageHtml.slice(0, stripStart) : pageHtml
  const renderedHtml = heroHtml + sourceSections

  return (
    <>
      <style>{css}</style>
      <div className="restaurant-page" dangerouslySetInnerHTML={{ __html: renderedHtml }} />
      <Script id="restaurant-page-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: scriptJs }} />
    </>
  )
}

export const metadata: Metadata = {
  title: 'EvolvXAI | Own your guests. Stop renting them.',
  description:
    'More 5-star reviews. Your own guest list. No ads. No commission. For independent restaurants in the UAE.',
  alternates: { canonical: '/restaurants' },
  openGraph: mergeOpenGraph({
    title: 'EvolvXAI | Own your guests. Stop renting them.',
    description:
      'More 5-star reviews. Your own guest list. No ads. No commission. For independent restaurants in the UAE.',
    url: '/restaurants',
  }),
}
