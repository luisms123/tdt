// canales de lista m3u https://jsfiddle.net/onigetoc/f26zuLtw/
function m3utojson(m3u) {
    return m3u
        .replace('#EXTM3U', '')
        .split('#EXTINF:-1 ')
        .slice(1)
        .map(function(str, index) {
            let channel = str.split('\n').slice(0,-1);
			if(channel[1].indexOf('m3u8') >= 0){
            /* 
                    channel[0].split('"')[0]
                        - channel[0].split('"')[1]
                        -    -   channel[0].split('"')[2]
                        -    -      -    channel[0].split('"')[3]   
                        -    -      -        -     channel[0].split('"')[4]  
                        -    -      -        -         -      channel[0].split('"')[5]          
                        -    -      -        -         -             -        channel[0].split(',')[1]    
                        __-__  -  ____-___   __-__   ____-___   _______-______    ___-__
                    -     - - -        - -     - -        - -              -  -      -
            #EXTINF:-1 tvg-id="1" tvg-name="nombre1" tvg-logo="https://foto.png", nombre1
            https://enlace.m3u8
            -------------------
                channel[1]

            */
                return {
                 "id": index + 1,
                 "name": channel[0].split('"')[3],
             //    "tvg-id": channel[0].split('"')[1],
                 "title": channel[0].split(',')[1],
                 "m3u8_url": channel[1].replace('http://', 'https://'),
                 "pais": "mx"
                }
			}
        });
}



// https://www.m3u.cl/iptv-chile.php
let m3u = `
#EXTM3U

#EXTINF:-1 tvg-id="EnerGeek Retro" tvg-name="EnerGeek Retro" tvg-logo="https://i.imgur.com/2HZW3E2.png" group-title="CANALES INDEPENDIENTES",EnerGeek Retro | Chile
https://wifiexpert-1.energeek.cl/energeek/canal-1/playlist.m3u8

#EXTINF:-1 tvg-id="EnerGeek Retro" tvg-name="EnerGeek Retro" tvg-logo="https://i.imgur.com/2HZW3E2.png" group-title="CANALES INDEPENDIENTES",EnerGeek Retro op2 | Chile
https://wifispeed.trapemn.tv:1936/infantil/energeek-1/playlist.m3u8

#EXTINF:-1 tvg-id="EnerGeek Radio TV" tvg-name="EnerGeek Radio TV" tvg-logo="https://i.imgur.com/GmzkMUQ.jpg" group-title="CANALES INDEPENDIENTES",Energeek Radio TV | Chile
https://wifiexpert-1.energeek.cl/energeek/radio/playlist.m3u8

#EXTINF:-1 tvg-id="EnerGeek Radio TV" tvg-name="EnerGeek Radio TV" tvg-logo="https://i.imgur.com/GmzkMUQ.jpg" group-title="CANALES INDEPENDIENTES",Energeek Radio TV op2 | Chile
https://stream.wifiexpert.cl/energeek/radio/playlist.m3u8

#EXTINF:-1 tvg-id="Fanpop TV" tvg-name="Fanpop TV" tvg-logo="https://i.imgur.com/eKGk5FD.jpg" group-title="CANALES INDEPENDIENTES",Fanpop TV | Chile
https://wifiexpert-1.energeek.cl/energeek/canal-2/playlist.m3u8

#EXTINF:-1 tvg-id="Fanpop TV" tvg-name="Fanpop TV" tvg-logo="https://i.imgur.com/eKGk5FD.jpg" group-title="CANALES INDEPENDIENTES",Fanpop TV op2 | Chile
https://wifispeed.trapemn.tv:1936/infantil/energeek-2/playlist.m3u8

#EXTINF:-1 tvg-id="CCP Radio" tvg-name="CCP Radio" tvg-logo="https://i.imgur.com/WzKFh03.png" group-title="CANALES INDEPENDIENTES",CCP Radio | Chile
https://wifiexpert-1.energeek.cl/energeek/canal-3/playlist.m3u8

#EXTINF:-1 tvg-id="CCP Radio" tvg-name="CCP Radio" tvg-logo="https://i.imgur.com/WzKFh03.png" group-title="CANALES INDEPENDIENTES",CCP Radio op2 | Chile
https://stream.wifispeed.cl:3852/live/energeeklive.m3u8

#EXTINF:-1 tvg-id="ModoRadio" tvg-name="ModoRadio" tvg-logo="https://i.imgur.com/WzKFh03.png" group-title="CANALES INDEPENDIENTES",ModoRadio | Chile
https://wifiexpert-1.energeek.cl/energeek/modoradio/playlist.m3u8

#EXTINF:-1 tvg-id="ACS Network TV" tvg-name="ACS Network TV" tvg-logo="https://i.imgur.com/jKsmoAn.png" group-title="CANALES INDEPENDIENTES",ACS Network Tv | Puerto Rico
https://5790d294af2dc.streamlock.net/acsnetwork/acsnetwork/playlist.m3u8

#EXTINF:-1 tvg-id="BTV Baradero Tv" tvg-name="BTV Baradero Tv" tvg-logo="https://i.imgur.com/Yv77IzH.png" group-title="CANALES INDEPENDIENTES",BTV Baradero Tv | Argentina
https://ssh101.bozztv.com/ssh101/btvdigital/chunks.m3u8

#EXTINF:-1 tvg-id="BD Network" tvg-name="BD Network" tvg-logo="https://i.imgur.com/2wBBZrC.png" group-title="CANALES INDEPENDIENTES",BD Network | Argentina
https://stream.kirachan.tech/memfs/718951c1-4090-4aa1-b92b-b4a1a043421b.m3u8

#EXTINF:-1 tvg-id="Canal6" tvg-id="Canal6" tvg-logo="https://i.imgur.com/MzuTLkz.png" group-title="CANALES INDEPENDIENTES",Canal 6 Mar del Plata | Argentina
https://panel.dattalive.com:443/8186/8186/playlist.m3u8

#EXTINF:-1 tvg-id="Canal LMS" tvg-name="Canal LMS" tvg-logo="https://i.imgur.com/RUuoMlL.png" group-title="CANALES INDEPENDIENTES",Canal LMS op1 | Mexico
https://ssh101.bozztv.com/ssh101/canallms/playlist.m3u8

#EXTINF:-1 tvg-id="Canal LMS" tvg-name="Canal LMS" tvg-logo="https://i.imgur.com/RUuoMlL.png" group-title="CANALES INDEPENDIENTES",Canal LMS op2 | Mexico
https://cdnhd.iblups.com/hls/9loIOeAx9w.m3u8

#EXTINF:-1 tvg-id="Canal LMS" tvg-name="Canal LMS" tvg-logo="https://i.imgur.com/RUuoMlL.png" group-title="CANALES INDEPENDIENTES",Canal LMS op3 | Mexico
https://xhateaec.com/livestreams/49.W2QnwqzgZajs1MJs.m3u8

#EXTINF:-1 tvg-id="Canal Mas" tvg-name="Canal Mas" tvg-logo="https://i.imgur.com/t3mb97M.png" group-title="CANALES INDEPENDIENTES",Canal Mas | Uruguay
https://tvlive.servicioselbachi.com:3686/hybrid/play.m3u8

#EXTINF:-1 tvg-id="Canal Rex" tvg-name="Canal Rex" tvg-logo="https://img1.wsimg.com/isteam/ip/6f47b0e4-2e02-4ab1-8103-f541b24dfe4c/CANAL%20REX.png" group-title="CANALES INDEPENDIENTES",Canal Rex | Chile
https://rpn3.bozztv.com/ssh101/ssh101/rexelcanal/playlist.m3u8

#EXTINF:-1 tvg-id="Casa Grande TV" tvg-name="Casa Grande TV" tvg-logo="https://i.imgur.com/W3HGOHn.png" group-title="CANALES INDEPENDIENTES",Casa Grande TV | Argentina
https://ssh101.bozztv.com/ssh101/cgtve/playlist.m3u8

#EXTINF:-1 tvg-id="Ciudad Magica Tv" tvg-name="Ciudad Magica Tv" tvg-logo="https://i.imgur.com/ydqK2H0.png" group-title="CANALES INDEPENDIENTES",Ciudad Magica Tv | Argentina
https://vd01.streaminghd.net.ar:3983/live/owbaknhdlive.m3u8

#EXTINF:-1 tvg-id="Classic Channel HD" tvg-name="Classic Channel HD" tvg-logo="https://i.imgur.com/N7HXvDq.png" group-title="CANALES INDEPENDIENTES",Classic Channel HD | Chile
https://paneltv.online:1936/8046/8046/playlist.m3u8

#EXTINF:-1 tvg-id="COMGO" tvg-name="COMGO" tvg-logo="https://i.imgur.com/nBb2cWM.jpg" group-title="CANALES INDEPENDIENTES",COMGO | ND
https://stmv1.cnarlatam.com/cinefamiliy/cinefamiliy/playlist.m3u8

#EXTINF:-1 tvg-id="COMPREMIUM HD" tvg-name="COMPREMIUM HD" tvg-logo="https://i.imgur.com/9TdY6Sn.png" group-title="CANALES INDEPENDIENTES",COMPREMIUM HD | ND
https://streaming.zappix.live:19360/compremium/compremium.m3u8

#EXTINF:-1 tvg-id="Conectate TV" tvg-name="Conectate TV" tvg-logo="https://i.imgur.com/HK1NEsV.png" group-title="CANALES INDEPENDIENTES",Conectate TV | Puerto Rico
https://250weu.bozztv.com/ssh101/ssh101/conectatetvpr/playlist.m3u8

#EXTINF:-1 tvg-id="Dreiko TV" tvg-name="Dreiko TV" tvg-logo="https://i.imgur.com/eaqJWmD.png" group-title="CANALES INDEPENDIENTES",Dreiko TV | Panamá
https://cloudvideo.servers10.com:8081/8138/index.m3u8

#EXTINF:-1 tvg-id="Estacion Mix Tv" tvg-name="Estacion Mix Tv" tvg-logo="https://image.jimcdn.com/app/cms/image/transf/dimension=350x10000:format=png/path/sc40a039d49acf98a/image/icbe12cae2b3da2d2/version/1628894274/image.png" group-title="CANALES INDEPENDIENTES",Estacion Mix Tv | Argentina
https://rpn3.bozztv.com/ssh101/ssh101/estacionmixtv/playlist.m3u8

#EXTINF:-1 tvg-id="Estacion Retro" tvg-name="Estacion Retro" tvg-logo="https://i.imgur.com/bSBJ51r.png" group-title="CANALES INDEPENDIENTES",Estacion Retro | Colombia
https://ssh101.bozztv.com/ssh101/canalonline/playlist.m3u8

#EXTINF:-1 tvg-id="Frecuencia Musical TV" tvg-name="Frecuencia Musical TV" tvg-logo="https://i.imgur.com/SAWdc0u.png" group-title="CANALES INDEPENDIENTES",Frecuencia Musical Tv | USA
https://s2.tvdatta.com:3307/hybrid/play.m3u8

#EXTINF:-1 tvg-id="Frecuencia Musical TV" tvg-name="Frecuencia Musical TV" tvg-logo="https://i.imgur.com/SAWdc0u.png" group-title="CANALES INDEPENDIENTES",Frecuencia Musical Tv op2 | USA
https://s2.tvdatta.com:3307/live/fmtvmatrizlive.m3u8

#EXTINF:-1 tvg-id="Ani TV" tvg-name="Ani TV" tvg-logo="https://i.imgur.com/5989JuX.png" group-title="CANALES INDEPENDIENTES",Geekdot TV | Brasil
https://stream.ichibantv.com:3764/hybrid/play.m3u8

#EXTINF:-1 tvg-id="Gogoplay TV" tvg-name="Gogoplay TV" tvg-logo="https://i.imgur.com/tCwRSRr.png" group-title="CANALES INDEPENDIENTES",Gogoplay TV | Bolivia
https://ssh101.bozztv.com/ssh101/gogoplay/playlist.m3u8

#EXTINF:-1 tvg-id="Latino Kids Tv" tvg-name="Latino Kids Tv" tvg-logo="https://i.imgur.com/BArIlh7.jpg" group-title="CANALES INDEPENDIENTES",Latino Kids TV | Uruguay
https://cloud5.streaminglivehd.com:3555/live/latinokidslive.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="https://i.imgur.com/Rx9doyD.jpg" group-title="CANALES INDEPENDIENTES",Lena Radio TV | Republica Dominicana
https://5790d294af2dc.streamlock.net/lenaradiotv/lenaradiotv/playlist.m3u8

#EXTINF:-1 tvg-id="LIM TV" tvg-name="LIM TV" tvg-logo="https://i.imgur.com/QGby81g.png" group-title="CANALES INDEPENDIENTES",LIM TV | Paraguay
https://tv.invasivamedia.com/hls/limtv.m3u8

#EXTINF:-1 tvg-id="Magic Kids Tv" tvg-name="Magic Kids Tv" tvg-logo="https://i.imgur.com/Uu8dciU.png" group-title="CANALES INDEPENDIENTES",Magic Kids Tv | Argentina
https://cageu.bozztv.com/ssh101/ssh101/magic2019/playlist.m3u8

#EXTINF:-1 tvg-id="Magic Kids" tvg-name="Magic Kids" tvg-logo="https://i.imgur.com/k8hx0C6.png" group-title="CANALES INDEPENDIENTES",Magic Kids | Argentina
https://magicstream.ddns.net:443/magicstream/stream.m3u8

#EXTINF:-1 tvg-id="Maxima TV" tvg-name="Maxima TV" tvg-logo="https://i.imgur.com/0IMDwqA.jpg" group-title="CANALES INDEPENDIENTES",Maxima TV | Argentina
https://vivo.solumedia.com:19360/maximatv/maximatv.m3u8

#EXTINF:-1 tvg-id="Memorias Classic" tvg-name="Memorias Classic" tvg-logo="https://i.imgur.com/1RkqeV8.png" group-title="CANALES INDEPENDIENTES",Memorias Classic | Colombia
https://ssh101.bozztv.com/ssh101/memoriasc2/playlist.m3u8

#EXTINF:-1 tvg-id="Memorias Film" tvg-name="Memorias Film" tvg-logo="https://i.imgur.com/1RkqeV8.png" group-title="CANALES INDEPENDIENTES",Memorias Film| Colombia
https://ssh101.bozztv.com/ssh101/memoriasfilm/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/1RkqeV8.png" group-title="CANALES INDEPENDIENTES",Memorias TV | Colombia
https://ssh101.bozztv.com/ssh101/musica/chunks.m3u8

#EXTINF:-1 tvg-id="Mi TV Television Clasica" tvg-name="Mi TV Television Clasica" tvg-logo="https://i.imgur.com/8rJZuk0.png"  group-title="CANALES INDEPENDIENTES",Mi TV Television Clasica | USA
https://mitv.getstreamhosting.com:30443/live/livestream123/chunks.m3u8

#EXTINF:-1 tvg-id="Miramax Tv" tvg-name="Miramax Tv" tvg-logo="https://i.imgur.com/vIa08pj.jpg" group-title="CANALES INDEPENDIENTES",Miramax Tv | ND
https://xhateaec.com/livestreams/58.OewcxddrcQtAFxIZ.m3u8

#EXTINF:-1 tvg-id="Moni TV" tvg-name="Moni TV" tvg-logo="https://i.imgur.com/Wct9jsp.png" group-title="CANALES INDEPENDIENTES",Moni TV HD | Argentina
https://stream.skarnetchile.com:3817/live/monitvlive.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="" group-title="CANALES INDEPENDIENTES",Now 70 | ND
https://lightning-now70s-samsungnz.amagi.tv/playlist720p.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="" group-title="CANALES INDEPENDIENTES",Now 80 | ND
https://lightning-now80s-samsungnz.amagi.tv/playlist720p.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="" group-title="CANALES INDEPENDIENTES",Now Rock | ND
https://lightning-now90s-samsungnz.amagi.tv/playlist720p.m3u8

#EXTINF:-1 tvg-id="PS Television" tvg-name="PS Television" tvg-logo="https://i.imgur.com/X0ooVPY.png" group-title="CANALES INDEPENDIENTES",PS Television | ND
https://xhateaec.com/livestreams/19.crKOSL8FRzpid0MA.m3u8

#EXTINF:-1 tvg-id="Radio Ipersonica TV" tvg-name="Radio Ipersonica TV" tvg-logo="https://i.imgur.com/8eSqC8L.png" group-title="CANALES INDEPENDIENTES",Radio Ipersonica TV | Argentina
https://xhateaec.com/livestreams/50.Xzc4ZqcC26UlfI1P.m3u8

#EXTINF:-1 tvg-id="Radio Old Time" tvg-name="Radio Old Time" tvg-logo="https://www.radioldtime.com.ar/data/files/logoradioldtime2-1.png" group-title="CANALES INDEPENDIENTES",Radio Old Time | Argentina
https://5f700d5b2c46f.streamlock.net/tvoldtime/tvoldtime/chunklist_w1126196422.m3u8

#EXTINF:-1 tvg-id="Retro Magico" tvg-name="Retro Magico" tvg-logo="https://i.imgur.com/B7odp7O.png" group-title="CANALES INDEPENDIENTES",Retro Magico | Argentina
https://cageu.bozztv.com/ssh101/ssh101/retromagicochnl/playlist.m3u8

#EXTINF:-1 tvg-id="RetroX TV" tvg-name="RetroX TV" tvg-logo="https://i.imgur.com/Cghkxbr.png" group-title="CANALES INDEPENDIENTES",RetroX TV | Costa Rica
https://tgn.bozztv.com/ssh101/ssh101/123456789/playlist.m3u8

#EXTINF:-1 tvg-id="Retro TV" tvg-name="Retro TV" tvg-logo="https://i.imgur.com/GF3i7qq.png" group-title="CANALES INDEPENDIENTES",Retro TV HD
https://ssh101.bozztv.com/ssh101/retrotvcr/playlist.m3u8

#EXTINF:-1 tvg-id="Sicardi TV" tvg-name="Sicardi TV" tvg-logo="https://i.imgur.com/S0k40t9.png" group-title="CANALES INDEPENDIENTES",Sicardi TV | Argentina
https://vivo.solumedia.com:19360/sicarditv/sicarditv.m3u8

#EXTINF:-1 tvg-id="Spectrum Channel" tvg-name="Spectrum Channel" tvg-logo="https://spectrumchannel.cl/wp-content/uploads/2022/12/LOGO-SPECTRUM-CHANNEL-2023-SIN-FONDO-e1670046527660.png" group-title="CANALES INDEPENDIENTES",Spectrum Channel | Chile
https://panel.miplay.cl:8081/spectrumchannel/tracks-v1a1/mono.m3u8

#EXTINF:-1 tvg-id="Sueños Grup" tvg-name="Sueños Grup" tvg-logo="https://i.imgur.com/VNI6CLc.png" group-title="CANALES INDEPENDIENTES",Sueños Grup | Argentina
https://ssh101.bozztv.com/ssh101/tvradioenvivo1/playlist.m3u8

#EXTINF:-1 tvg-id="SYFY LA HD" tvg-name="SYFY LA HD" tvg-logo="https://i.imgur.com/k9ZJlt6.png" group-title="CANALES INDEPENDIENTES",SYFY LA HD | ND
https://live.autistici.org/hls/syfy3239498_src.m3u8

#EXTINF:-1 tvg-id="TBS Sur" tvg-name="TBS Sur" tvg-logo="https://i.imgur.com/zdMfphG.jpg" group-title="CANALES INDEPENDIENTES",TBS Sur | ND
https://streaming.zappix.live:19360/tbssur/tbssur.m3u8

#EXTINF:-1 tvg-id="Tele Estrella" tvg-name="Tele Estrella" tvg-logo="https://i.imgur.com/YcW70qW.png" group-title="CANALES INDEPENDIENTES",Tele Estrella | Argentina
https://stmvideo2.livecastv.com/telestrella/telestrella/chunklist.m3u8

#EXTINF:-1 tvg-id="Teleclasica" tvg-name="Teleclasica" tvg-logo="https://i.imgur.com/PCtEVPc.jpg" group-title="CANALES INDEPENDIENTES",Teleclasica | Mexico
https://ssh101.bozztv.com/ssh101/teleclasik/playlist.m3u8

#EXTINF:-1 tvg-id="Tigueritos TV" tvg-name="Tigueritos TV" tvg-logo="https://i.imgur.com/qu7ttMx.png" group-title="CANALES INDEPENDIENTES",Tigueritos TV | Republica Dominicana
https://ss9.domint.net:3012/ttv_str/%20tigueritotv/playlist.m3u8

#EXTINF:-1 tvg-id="TV Costa" tvg-name="TV Costa" tvg-logo="https://tvcosta.cl/wp-content/uploads/2022/12/TV-Costa-768x768.jpg" group-title="CANALES INDEPENDIENTES",Tv Costa | Chile
https://tv.clientetvstudio.net:3486/live/costatv1live.m3u8

#EXTINF:-1 tvg-id="TV Retro Palmares" tvg-name="TV Retro Palmares" tvg-logo="https://i.imgur.com/bdXY34n.png" group-title="CANALES INDEPENDIENTES",TV Retro Palmares | Costa Rica
https://ssh101.bozztv.com/ssh101/tvretropalmares/playlist.m3u8

#EXTINF:-1 tvg-id="TVS Retro" tvg-id="TVS Retro" tvg-logo="https://i.imgur.com/mZNsS9S.png" group-title="CANALES INDEPENDIENTES",TVS Retro | Guatemala
https://cdn.streamhispanatv.net:3531/live/tvsretrogtlive.m3u8

#EXTINF:-1 tvg-id="VariedTV" tvg-name="VariedTV" tvg-logo="https://i.imgur.com/s71A8ya.jpg" group-title="CANALES INDEPENDIENTES",VariedTV | Argentina
https://cloud5.streaminglivehd.com:3874/live/latinokidsslive.m3u8

#EXTINF:-1 tvg-id="Voice Over Radio TV" tvg-name="Voice Over Radio TV" tvg-logo="https://i.imgur.com/qhLnq2W.png" group-title="CANALES INDEPENDIENTES",Voice Over Radio TV | Costa Rica
https://cloudvideo.servers10.com:8081/8198/index.m3u8

#EXTINF:-1 tvg-id="Wow Channel" tvg-name="Wow Channel" tvg-logo="https://i.imgur.com/Eqko3Cm.png" group-title="CANALES INDEPENDIENTES",Wow Channel | Colombia
https://ssh101.bozztv.com/ssh101/wowchannel/playlist.m3u8

#EXTINF:-1 tvg-id="Wow Movies" tvg-name="Wow Movies" tvg-logo="https://i.imgur.com/mw8E8GQ.jpg" group-title="CANALES INDEPENDIENTES",Wow Movies | Colombia
https://ssh101.bozztv.com/ssh101/wowchannelsd/playlist.m3u8

#EXTINF:-1 tvg-id="Big TV" tvg-name="Big TV" tvg-logo="https://i.imgur.com/SoPjHGj.png" group-title="INFANTILES",Big TV | Argentina
https://ssh101.bozztv.com/ssh101/bigchannel/playlist.m3u8

#EXTINF:-1 tvg-id="Canal Ipe" tvg-name="Canal Ipe" tvg-logo="https://i.imgur.com/BADfaU8.png" group-title="INFANTILES",Canal Ipe | Peru
https://cdnhd.iblups.com/hls/3f2cb1658d114f2693eff18d83199e67.m3u8

#EXTINF:-1 tvg-id="Chilevisual Kids" tvg-name="" tvg-logo="https://i.imgur.com/UncMGn5.png" group-title="INFANTILES",Chilevisual Kids HD | Chile
https://stmv5.voxtvhd.com.br/chilevisualkids/chilevisualkids/playlist.m3u8

#EXTINF:-1 tvg-id="Caricaturas" tvg-name="Caricaturas" tvg-logo="https://cdn.mitvstatic.com/programs/ar_chiquilines-1991_l_l.jpg" group-title="INFANTILES",Chiquilines | USA
https://chiquilines-plex.amagi.tv/Chiquilines-plex/master.m3u8

#EXTINF:-1 tvg-id="Caricaturas" tvg-name="Caricaturas" tvg-logo="https://cdn.mitvstatic.com/programs/ar_chiquilines-1991_l_l.jpg" group-title="INFANTILES",Chiquilines | USA
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01024-olympusat-chiquilines-ono/playlist.m3u8


#EXTINF:-1 tvg-id="Clan HD" tvg-name="Clan HD" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/clan_tve.png" group-title="INFANTILES",Clan TVE | Spain
https://d3nnqrdb77sy13.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-eimbp20cszixb/Clan_ES.m3u8

#EXTINF:-1 tvg-id="Clan HD" tvg-name="Clan HD" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/clan_tve.png" group-title="INFANTILES",Clan TVE op2 | Spain
https://i.mjh.nz/SamsungTVPlus/ESBC4100003WE.m3u8

#EXTINF:-1 tvg-id="Disney Channel Espana" tvg-name="Disney Channel Espana" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/disney_channel.png" group-title="INFANTILES",Disney Channel | Spain
https://nodep002.service.openstream.es/SVoriginOperatorEdge2/smil:21_HD.smil/manifest.m3u8

#EXTINF:-1 tvg-id="Kidz HD" tvg-name="Kidz HD" tvg-logo="https://i.imgur.com/Ub8TkId.png" group-title="INFANTILES",Kidz HD | ND
https://fast-channels.atresmedia.com/648c271d2bfab0e4177a0d61/648c271d2bfab0e4177a0d61.m3u8

#EXTINF:-1 tvg-id="Los Pitufos TV" tvg-name="Los Pitufos TV" tvg-logo="https://i.imgur.com/UbZXTKF.jpg" group-title="INFANTILES",Los Pitufos TV | ND
https://imps-smrfs.otteravision.com/imps/smrfs/smrfs.m3u8

#EXTINF:-1 tvg-id="" tvg-logo="https://i.imgur.com/Ye7yqXR.png" group-title="INFANTILES",Los Picapiedra TV | ND
https://6362ca6f1fc28.streamlock.net:443/picapiedraplus/picapiedraplus/playlist.m3u8

#EXTINF:-1 tvg-id="NTV" tvg-name="NTV" tvg-logo="https://i.imgur.com/w1jK0n7.png" group-title="INFANTILES",NTV | Chile
https://marine2.miplay.cl/ntv/playlist.m3u8

#EXTINF:-1 tvg-id="Paka Paka" tvg-name="Paka Paka" tvg-logo="https://i.imgur.com/ZoRRVDf.png" group-title="INFANTILES",PakaPaka | Argentina
https://5fb24b460df87.streamlock.net/live-cont.ar/pakapaka/playlist.m3u8

#EXTINF:-1 tvg-id="Caricaturas" tvg-name="Caricaturas" tvg-logo="https://i.imgur.com/sMVLdVq.png" group-title="INFANTILES",PBS Kids (Inglés) | USA
https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8

#EXTINF:-1 tvg-id="Pequeradio" tvg-name="Pequeradio" tvg-logo="https://static.wixstatic.com/media/76b12f_980c794be91b440faac46de6e57eb10e~mv2.png" group-title="INFANTILES",Pequeradio | Spain
https://canadaremar2.todostreaming.es/live/peque-pequetv.m3u8

#EXTINF:-1 tvg-id="PlanetaTV Kids" tvg-name="PlanetaTV Kids" tvg-logo="https://i.imgur.com/ZN3ry2f.png" group-title="INFANTILES",PlanetaTV Kids | Chile
https://tls-cl.cdnz.cl/planetatvkids/live/chunklist_w1953958808.m3u8

#EXTINF:-1 tvg-id="PlanetaTV Kids" tvg-name="PlanetaTV Kids" tvg-logo="https://i.imgur.com/ZN3ry2f.png" group-title="INFANTILES",PlanetaTV Kids op2 | Chile
https://scl.edge.grupoz.cl/planetatvkids/live/playlist.m3u8

#EXTINF:-1 tvg-id="" tvg-logo="https://i.imgur.com/lk276DP.png" group-title="INFANTILES",Planeta Junior TV | ND
https://daiconnect.com/live/hls/tvup/tvfy-pljr/b8ee129e0585ae0c1eb5b4187f8e4fa7/.m3u8

#EXTINF:-1 tvg-id="Programacion Local" tvg-name="Programacion Local" tvg-logo="https://i.imgur.com/bBkw36s.png" group-title="INFANTILES",Xabarin TV HD op | Spain
http://crtvg-infantil-schlive.flumotion.cloud/crtvglive/smil:channel5PRG.smil/chunklist_b2500000.m3u8

#EXTINF:-1 tvg-id="Programacion Local" tvg-name="Programacion Local" tvg-logo="https://i.imgur.com/bBkw36s.png" group-title="INFANTILES",Xabarin TV HD op2 | Spain
https://crtvg-infantil-schlive.flumotion.cloud/crtvglive/smil:channel5PRG/playlist.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="https://i.imgur.com/w2ds9Jy.png" group-title="INFANTILES",Xabarin TV Cativoas HD | Spain
http://crtvg-xabarinr2-schlive.flumotion.cloud/crtvglive/smil:channel7PRG.smil/chunklist_b2500000.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="https://i.imgur.com/bVrp09M.png" group-title="INFANTILES",Xabarin TV Mocinoas HD | Spain
http://crtvg-xabarinr3-schlive.flumotion.cloud/crtvglive/smil:channel8PRG.smil/chunklist_b2500000.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="https://i.imgur.com/Jvr8HBD.png" group-title="INFANTILES",Xabarin TV Pequerrechoas HD | Spain
http://crtvg-xabarinr1-schlive.flumotion.cloud/crtvglive/smil:channel6PRG.smil/chunklist_b2500000.m3u8

#EXTINF:-1 tvg-id="Zaz TV" tvg-name="Zaz TV" tvg-logo="https://i.imgur.com/CMMEIq3.png" group-title="INFANTILES",Zaz TV | Mexico
https://cloud.fastchannel.es/mic/manifiest/hls/zaztv/zaztv.m3u8

#EXTINF:-1 tvg-id="Zaz TV" tvg-name="Zaz TV" tvg-logo="https://i.imgur.com/CMMEIq3.png" group-title="INFANTILES",Zaz TV op2 | Mexico
https://stream-us-east-1.getpublica.com/playlist.m3u8?network_id=2701&live=1&avod=1&cb=[CACHEBUSTER]&app_bundle=[APP_BUNDLE]&app_name=[APP_NAME]&app_domain=[APP_DOMAIN]&app_version=[APP_VERSION]&app_category=[APP_CATEGORY]&app_store_url=[APP_STORE_URL]&hls_marker=1&pod_duration=[POD_DURATION]&ua=[%UA%]&ip=[IP]&min_ad_duration=6&max_ad_duration=120?is_lat=[LIMITED_AD_TRACKING]&player_width=[WIDTH]&player_height=[HEIGHT]&ua=[%UA%]&ip=[IP]&cb=[CACHEBUSTER]&hls_marker=1&app_version=[APP_VERSION]&app_store_url=[APP_STORE_URL]&app_name=[APP_NAME]&app_domain=[APP_DOMAIN]&app_category=[APP_CATEGORY]&did=[DID]&app_bundle=[APP_BUNDLE]&network_id=2701&live=1&avod=1&stream_url=https%3A%2F%2Fb81ea6a237a99f732a8a56c17e6e1733.7wzuvg.channel-assembly.mediatailor.us-east-1.amazonaws.com%2Fv1%2Fchannel%2FZAZ_Linear%2Findex-zaz-linear.m3u8

#EXTINF:-1 tvg-id="Animax TV" tvg-name="Animax TV" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/animax-mediano.png" group-title="JOVENES Y ADULTOS",Animax TV | Asia
https://redlabmcdn.s.llnwi.net/nv02/bs14hd/tracks-v1a1/mono.m3u8

#EXTINF:-1 tvg-id="Animax TV" tvg-name="Animax TV" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/animax-mediano.png" group-title="JOVENES Y ADULTOS",Animax TV | Asia
https://livecdn.fptplay.net/hda3/animaxport_vhls.smil/playlist.m3u8

#EXTINF:-1 tvg-id="AZTV" tvg-name="AZTV" tvg-logo="https://i.imgur.com/z1VIGD7.png" group-title="JOVENES Y ADULTOS",Anime Zone TV | Republica Dominicana
http://animezonetv.net/hls/stream.m3u8

#EXTINF:-1 tvg-id="AZTV" tvg-name="AZTV" tvg-logo="https://i.imgur.com/z1VIGD7.png" group-title="JOVENES Y ADULTOS",Anime Zone TV op2 | Republica Dominicana
http://animezonetv.com/hls/stream.m3u8

#EXTINF:-1 tvg-id="Anime TV" tvg-name="Anime TV" tvg-logo="https://i.imgur.com/8w6Y56I.png" group-title="JOVENES Y ADULTOS",Anime TV | Brasil
https://stmv1.srvif.com/animetv/animetv/playlist.m3u8

#EXTINF:-1 tvg-name="AnimeStation" tvg-id="AnimeStation" tvg-logo="https://i.imgur.com/z780GyN.png" group-title="JOVENES Y ADULTOS",AnimeStation | Argentina
https://tgn.bozztv.com/ssh101/ssh101/livestreamingtv/playlist.m3u8

#EXTINF:-1 tvg-id="Aniplus" tvg-name="Aniplus" tvg-logo="https://i.imgur.com/vJs4WmR.png" group-title="JOVENES Y ADULTOS",Aniplus HD | Asia
http://210.210.155.35/dr9445/h/h02/index.m3u8

#EXTINF:-1 tvg-id="Aniplus" tvg-name="Aniplus" tvg-logo="https://i.imgur.com/vJs4WmR.png" group-title="JOVENES Y ADULTOS",Aniplus HD | Asia
http://210.210.155.37/dr9445/h/h02/index.m3u8

#EXTINF:-1 tvg-id="Kpop Tv Play" tvg-name="Kpop Tv Play" tvg-logo="https://kpoptv.live/wp-content/uploads/2021/10/logokpoptvplay.png" group-title="JOVENES Y ADULTOS",Kpop Tv Play | Brasil
https://ssh101.bozztv.com/ssh101/kpoptv/playlist.m3u8

#EXTINF:-1 tvg-id="Loading Brasil" tvg-name="Loading Brasil" tvg-logo="https://i.imgur.com/vhx4hxI.png" group-title="JOVENES Y ADULTOS",Loading Brasil | Brasil
https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8

#EXTINF:-1 tvg-id="Locomotion" tvg-name="Locomotion" tvg-logo="https://i.imgur.com/eq9q8KW.png" group-title="JOVENES Y ADULTOS",Locomotion | Republica Dominicana
http://51.222.85.85:81/hls/loco/index.m3u8

#EXTINF:-1 tvg-id="Locomotion" tvg-name="Locomotion" tvg-logo="https://i.imgur.com/eq9q8KW.png" group-title="JOVENES Y ADULTOS",Locomotion op1 | Republica Dominicana
http://85.239.54.197:81/live/loco_hi/index.m3u8

#EXTINF:-1 tvg-id="Locomotion" tvg-name="Locomotion" tvg-logo="https://i.imgur.com/eq9q8KW.png" group-title="JOVENES Y ADULTOS",Locomotion op2 | Republica Dominicana
http://85.239.54.197:81/live/loco_low/index.m3u8

#EXTINF:-1 tvg-id="Locomotion" tvg-name="Locomotion" tvg-logo="http://locomotiontv.com/locomotion/logo.png" group-title="JOVENES Y ADULTOS",Locomotion (LQ) | Republica Dominicana
http://locomotiontv.com/envivo/loco_ch_low/stream.m3u8

#EXTINF:-1 tvg-name="Max Anime" tvg-id="" tvg-logo="https://i.imgur.com/ru0iCsN.png" group-title="JOVENES Y ADULTOS",Max Anime | Argentina
https://d16k620tapvw9n.cloudfront.net/out/v1/8e3062c10bb341feb7ee363c320e06af/index.m3u8

#EXTINF:-1 tvg-id="Pandamax" tvg-name="Pandamax" tvg-logo="https://i.imgur.com/7EZK59J.jpg" group-title="JOVENES Y ADULTOS",Pandamax | Argentina
https://stream.wifiexpert.cl/telenorte/pandamaxch/playlist.m3u8

#EXTINF:-1 tvg-name="TalTal TV" tvg-id="TalTal TV" tvg-logo="https://i.imgur.com/qlTFGpx.png" group-title="JOVENES Y ADULTOS",Taltal Tv HD | Argentina
https://ssh101.bozztv.com/ssh101/taltal/playlist.m3u8

#EXTINF:-1 tvg-id="Wording TV HD" tvg-name="Wording TV HD" tvg-logo="https://i.imgur.com/tVEMkve.png" group-title="JOVENES Y ADULTOS",Wording TV HD | Brasil
https://tv02.zas.media:1936/wordingtv/wordingtv/playlist.m3u8

#EXTINF:-1 tvg-id="Yamato Animation" tvg-name="Yamato Animation" tvg-logo="https://i.imgur.com/rOl7HfS.png" group-title="JOVENES Y ADULTOS",Yamato Animation | Italia
https://yamatovideo-yamatoanimation-1-it.samsung.wurl.tv/playlist.m3u8

#EXTINF:-1 tvg-id="America 24" tvg-name="America 24" tvg-logo="https://cdn.mitvstatic.com/channels/ar_america-24_m.png" group-title="FAMILIARES",America 24 | Argentina
https://ythls.onrender.com/channel/UCR9120YBAqMfntqgRTKmkjQ.m3u8

#EXTINF:-1 tvg-id="Argentinisima Satelital" tvg-name="Argentinisima Satelital" tvg-logo="https://i.imgur.com/humb4J5.png" group-title="FAMILIARES",Argentinisima Satelital | Argentina
https://stream1.sersat.com/hls/argentinisima.m3u8

#EXTINF:-1 tvg-id="Buin Somos Todos" tvg-name="Buin Somos Todos" tvg-logo="https://i.ytimg.com/vi/k_Q7-gqkfAo/maxresdefault.jpg" group-title="FAMILIARES",Buin Somos Todos | Chile
https://bst.buin.cl/0.m3u8

#EXTINF:-1 tvg-id="Canal 4 Jujuy" tvg-name="Canal 4 Jujuy" tvg-logo="https://s3.amazonaws.com/static-c4-1/assets/img/logos/elcuatro-logo-100x124.png" group-title="FAMILIARES",Canal 4 Jujuy | Argentina
https://5cd577a3dd8ec.streamlock.net/canal4/manifest.smil/chunklist_w92188071_b316000.m3u8

#EXTINF:-1 tvg-id="Canal 4 Jujuy" tvg-name="Canal 4 Jujuy" tvg-logo="https://s3.amazonaws.com/static-c4-1/assets/img/logos/elcuatro-logo-100x124.png" group-title="FAMILIARES",Canal 4 Jujuy | Argentina
https://5cd577a3dd8ec.streamlock.net/canal4/smil:manifest.smil/chunklist_w1908572533_b316000.m3u8

#EXTINF:-1 tvg-id="Canal 4 San Juan" tvg-name="Canal 4 San Juan" tvg-logo="http://www.canal4sanjuan.com.ar/digital/images/logo-cir.png" group-title="FAMILIARES",Canal 4 San Juan | Argentina
http://streamlov.alsolnet.com/canal4sanjuan/live/chunklist_w1603184235.m3u8

#EXTINF:-1 tvg-id="Canal 15 DTP" tvg-name="Canal 15 DTP" tvg-logo="https://i.imgur.com/fmEKC3S.png" group-title="FAMILIARES",Canal 15 DTP | Honduras
https://emisoras.hn:8081/dtp/index.m3u8

#EXTINF:-1 tvg-id="74 de Chile" tvg-name="74 de Chile" tvg-logo="https://i.imgur.com/AgUx16i.png" group-title="FAMILIARES",Canal 74 TV | Chile
https://stmv1.zcasthn.com.br/canal74hd/canal74hd/playlist.m3u8

#EXTINF:-1 tvg-id="Caracola TV" tvg-name="Caracola TV" tvg-logo="https://www.caracolatv.cl/wp-content/uploads/2021/12/logo-296x300.jpg" group-title="FAMILIARES",Caracola TV | Chile
https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8

#EXTINF:-1 tvg-id="Chamame Tv" tvg-name="Chamame Tv" tvg-logo="https://i.imgur.com/Q9pLtbI.png" group-title="FAMILIARES",Chamame Tv | Argentina
https://srv2.zcast.com.br/chamame/chamame/chunklist_w477677262.m3u8

#EXTINF:-1 tvg-id="Chilevisual Retro" tvg-name="Chilevisual Retro" tvg-logo="https://i.imgur.com/UncMGn5.png" group-title="FAMILIARES",Chilevisual Retro HD | Chile
https://stmv5.voxtvhd.com.br/chilevisualretro/chilevisualretro/playlist.m3u8

#EXTINF:-1 tvg-id="Colome TV" tvg-name="Colome TV" tvg-logo="https://colometv.com/assets/images/logo.png" group-title="FAMILIARES",Colome TV | Nueva York
https://ss5.domint.net:3170/cotv_str/colometv/chunklist_w793077443.m3u8

#EXTINF:-1 tvg-id="El Nueve AR" tvg-name="El Nueve AR" tvg-logo="https://cdn.mitvstatic.com/channels/canal-9-s.jpg" group-title="FAMILIARES",El Nueve | Argentina
https://00475e6934d74fe48a80427567a45918.mediatailor.us-east-1.amazonaws.com/v1/manifest/4c8323052bc3dbd9aa2eba0b638d8495561e8377/JW-Octubre-Channel09/0df6d88d-304a-4d15-9cf8-eab1bc9b5e45/3.m3u8

#EXTINF:-1 tvg-id="Estrella Producciones" tvg-name="Estrella Producciones" tvg-logo="https://i.imgur.com/1Uc4pJw.png" group-title="FAMILIARES",Estrella Producciones | Paraguay
https://rpn3.bozztv.com/ssh101/ssh101/estrellatv/playlist.m3u8

#EXTINF:-1 tvg-id="" tvg-logo="https://i2.paste.pics/20f4f7278dc7ab118f657d93da43474d.png" group-title="FAMILIARES",EvaStream TV | Chile
https://mediacpstreamchile.com:1936/evavision/evavision/playlist.m3u8

#EXTINF:-1 tvg-id="Gen TV" tvg-name="Gen TV" tvg-logo="https://i.imgur.com/mXpId1b.jpg" group-title="FAMILIARES",GenTV HD | Argentina
https://cdnhd.iblups.com/hls/20HQGYYDF9.m3u8

#EXTINF:-1 tvg-id="Global TV" tvg-name="Global TV" tvg-logo="http://globaltv.com.do/wp-content/uploads/2022/06/bannerfull2-e1657853657971.png" group-title="FAMILIARES",Global TV | Republica Dominicana
https://ss3.domint.net:3136/gtv_str/globalhd/playlist.m3u8

#EXTINF:-1 tvg-id="Iquique Tv" tvg-name="Iquique Tv" tvg-logo="https://iquiquetv.cl/wp-content/uploads/2020/05/iquiqueTV_logo_202005_272x90.png" group-title="FAMILIARES",Iquique Tv | Chile
https://marine2.miplay.cl/arcatel/iquiquetv720/tracks-v1a1/mono.m3u8

#EXTINF:-1 tvg-logo="https://lh3.googleusercontent.com/-JXvAv4nY-K8/XnTXs1clGLI/AAAAAAAAxCw/ntmMdCu1UQEXtAHPFrYyW8I1l5bRGiAWwCK8BGAsYHg/s0/2020-03-20.png" group-title="FAMILIARES",La Popular TV | Chile
https://tv.streaming-chile.com:1936/lapopulartv/lapopulartv/playlist.m3u8

#EXTINF:-1 tvg-logo="https://lh3.googleusercontent.com/-JXvAv4nY-K8/XnTXs1clGLI/AAAAAAAAxCw/ntmMdCu1UQEXtAHPFrYyW8I1l5bRGiAWwCK8BGAsYHg/s0/2020-03-20.png" group-title="FAMILIARES",La Popular TV | Chile
https://5d1ca66d2d698.streamlock.net:1936/8076/8076/playlist.m3u8

#EXTINF:-1 tvg-logo="https://masencarnacion.opentechla.com/themes/mas-encarnacion/assets/tv/images/logo_alt.png" group-title="FAMILIARES",Mas TV | Paraguay
https://59ce1298bfb98.streamlock.net/mastv/mastv/playlist.m3u8

#EXTINF:-1 tvg-id="Mega" tvg-name="Mega" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/mega_chile.png" group-title="FAMILIARES",Mega | Chile
https://unlimited1-cl-isp.dps.live/mega/mega.smil/mega/livestream0/chunks.m3u8

#EXTINF:-1 tvg-id="Multicanal Ecuador" tvg-name="Multicanal Ecuador" tvg-logo="https://4.bp.blogspot.com/-HAV870gdo80/XoE1dXsyK6I/AAAAAAAAAx4/f5LT4C9r9KIHLnOzFzUPLYlq_-ZwWhghgCLcBGAsYHQ/s1600/multicanal.png"  group-title="FAMILIARES",Multicanal | Ecuador
https://multicanal.streamseguro.com/hls/streaming.m3u8

#EXTINF:-1 tvg-id="Programacion Local" tvg-name="Programacion Local" tvg-logo="https://apksos.com/storage/images/com/sacnet/gca/telecom/multizonestelevision/com.sacnet.gca.telecom.multizonestelevision_1.png" group-title="FAMILIARES",Multizonas Tv | Costa Rica
https://cloudvideo.servers10.com:8081/8214/index.m3u8

#EXTINF:-1 tvg-id="Neo TV" tvg-name="Neo TV" tvg-logo="https://i.imgur.com/bD8YutM.png" group-title="FAMILIARES",Neo TV | Argentina
https://videostream.shockmedia.com.ar:19360/neotvdigital/neotvdigital.m3u8

#EXTINF:-1 tvg-id="Presencia TV" tvg-name="Presencia TV" tvg-logo="" group-title="FAMILIARES",Presencia TV | Peru
https://tv.clientetvstudio.net:3158/hybrid/play.m3u8

#EXTINF:-1 tvg-id="NET TV" tvg-name="NET TV" tvg-logo="https://www.canalnet.tv/_templates/desktop/includes/img/logo.png" group-title="FAMILIARES",NET TV | Argentina
https://unlimited1-us.dps.live/nettv/nettv.smil/nettv/livestream2/chunks.m3u8

#EXTINF:-1 tvg-id="Norte Informativo TV" tvg-name="Norte Informativo TV" tvg-logo="https://i.imgur.com/GD15EfH.jpg" group-title="FAMILIARES",Norte Informativo TV | Costa Rica
https://videohd.live:19360/8076/8076.m3u8

#EXTINF:-1 tvg-id="Quantica TV" tvg-name="Quantica TV" tvg-logo="https://i.imgur.com/OWAL8tz.png" group-title="FAMILIARES",Quantica TV | Argentina
https://videostream.shockmedia.com.ar:19360/quanticatv/quanticatv.m3u8

#EXTINF:-1 tvg-id="Programacion Local" tvg-name="Programacion Local" tvg-logo="https://i2.paste.pics/90f2f266cb4f68333119a06b99d65d10.png" group-title="FAMILIARES",Retro Play TV | Chile
https://v4.tustreaming.cl/retroplaytv/index.m3u8

#EXTINF:-1 tvg-id="Retro Plus TV" tvg-name="Retro Plus TV" tvg-logo="https://i2.paste.pics/d35132c511d1ef461b3e4af7db9e0b5f.png" group-title="FAMILIARES",Retro Plus TV 3 | Chile
https://video06.logicahost.com.br/retroplussenal3/retroplussenal3/playlist.m3u8

#EXTINF:-1 tvg-id="Senal Colombia" tvg-name="Senal Colombia" tvg-logo="https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/logo.png" group-title="FAMILIARES",Senal Colombia | Colombia
https://streaming.rtvc.gov.co/TV_Senal_Colombia_live/smil:live.smil/playlist.m3u8

#EXTINF:-1 tvg-id="Solo Stand Up" tvg-name="Solo Stand Up" tvg-logo="https://i.imgur.com/dQBY6Sb.jpg" group-title="FAMILIARES",Solo Stand Up | Chile
https://paneltv.online:1936/8116/8116/chunklist_w1465366289.m3u8

#EXTINF:-1 tvg-id="SuerTV" tvg-name="SuerTV" tvg-logo="https://i.imgur.com/4yWyTG4.png" group-title="FAMILIARES",SuerTV | Argentina
https://s9.stweb.tv/chacra/rosario/playlist.m3u8

#EXTINF:-1 tvg-id="T5 Satelital" tvg-name="T5 Satelital" tvg-logo="https://t5satelital.com/wp-content/uploads/2023/09/T5-Satelital-en-vivo-Online.png" group-title="FAMILIARES",T5 Satelital | Argentina
https://tv.t5satelital.com/tvhls/streamcorrientes.m3u8

#EXTINF:-1 tvg-id="Tec TV" tvg-name="Tec TV" tvg-logo="https://www.tec.gob.ar/wp-content/uploads/2022/05/Tec-logo.png" group-title="FAMILIARES",Tec TV | Argentina
https://tv.initium.net.ar:3939/live/tectvmainlive.m3u8

#EXTINF:-1 tvg-id="Telemax" tvg-name="Telemax" tvg-logo="https://www.canal26.com/images/open-graph/telemax_logo.png" group-title="FAMILIARES",Telemax | Argentina
https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/0/playlist.m3u8

#EXTINF:-1 tvg-id="Teleposadas" tvg-name="Teleposadas" tvg-logo="https://i.imgur.com/lHUA2C3.jpg" group-title="FAMILIARES",Teleposadas | Argentina
https://5e06e5e8c2e27.streamlock.net:1936/videonow/teleposadas12/playlist.m3u8

#EXTINF:-1 tvg-id="TeleRed" tvg-name="TeleRed" tvg-logo="https://i.imgur.com/pkstHpE.png" group-title="FAMILIARES",Telered | Costa Rica
https://video20.klm99.com:3558/hybrid/play.m3u8

#EXTINF:-1 tvg-id="Telesistema" tvg-name="Telesistema" tvg-logo="https://i.imgur.com/FhkTl6z.jpg" group-title="FAMILIARES",Telesistema | Costa Rica
https://59ef525c24caa.streamlock.net/ARBtv/ARBtv/chunklist_w1149197827.m3u8

#EXTINF:-1 tvg-id="Programacion Local" tvg-name="Programacion Local" tvg-logo="https://play-lh.googleusercontent.com/argU5Q9r5-gvleMRCafNE2TyaWioaSr69ROMhr4nXG1iuzrT1noRMDJX8qAoYCZsfOA" group-title="FAMILIARES",TeleSUR | Costa Rica
http://k3.usastreams.com:1935/telesur/telesur/playlist.m3u8

#EXTINF:-1 tvg-id="TeleSUR" tvg-name="TeleSUR" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/telesur.png" group-title="FAMILIARES",TeleSUR | Costa Rica
https://cdnesmain.telesur.ultrabase.net/mbliveMain/480p/playlist.m3u8

#EXTINF:-1 tvg-id="Tierra Mia" tvg-name="Tierra Mia" tvg-logo="https://www.canal26.com/images/open-graph/tierramia_logo.png" group-title="FAMILIARES",Tierra Mia | Argentina
https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/0/playlist.m3u8

#EXTINF:-1 tvg-id="Bayres TV"  tvg-name="Bayres TV" tvg-logo="https://i.imgur.com/7afuOiE.png" group-title="CINE",Bayres TV | Argentina
https://streaming02.gbasat.com.ar:19360/bayrestv/bayrestv.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="https://i.imgur.com/atlRdIQ.png" group-title="CINE",Bjgtjme | Argentina
https://76af1d7e277b46a58a41c188c3ea4117.mediatailor.us-east-1.amazonaws.com/v1/master/f4e8c53a8367a5b58e20ce054ea3ce25a3e904d3/Samsung-es_BjgtjmePeliculasGratis/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/zIMRPHL.png" group-title="CINE",Cine Horrorfy | USA
https://olympusamagi.pc.cdn.bitgravity.com/Horrify-roku/master.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/5ONURCJ.png" group-title="CINE",Cine Juntos | USA
https://olympusamagi.pc.cdn.bitgravity.com/Juntos-roku/master.m3u8

#EXTINF:-1 tvg-logo="https://media.glassdoor.com/sqll/434390/olympusat-squarelogo-1442299551445.png" group-title="CINE",Cine Real | USA
https://amg01024-olympusat-cinereallatam-ono-ad-z5.amagi.tv/playlist/amg01024-olympusat-cinereallatam-ono/cb553d167c6c64879ad43e63d9ef41a0d22411fc087a8d6933fb4b926bc10f41e2e5af97b20cac7822fb0fd87f0b66411f21c118de751fc7c76adf046727486b9898b37bd9981208a2ae56687fe525564eff0f10ce254136d8bb425c8764b72c4812bd593c1b63dcb80cb0270094d21788797a8baddf68687d5b0dcc5779df9a1be090a11f1c9e3df2f83e7eaf1b448efc5fc3fc2687d180188012c6369e4acccfa5a9eb2ab4f0d336fc33d46e71324c7c9d933786da62a6c8937f389f685a207431b79abdb31469ec364258ebb1caaf75c000da8637845f22a90cea0fee4e827fbe19b4bb01efbaacc80c472ba1c14f7769a3eaadc5ff3025b465feb1b3b3191b98f2073643c779aa414159c0a7b77eeac21185f820baa47b123cd5924089efd8e987b384449937cfc6f8c2752820620011c85cb28a52d93cd37ca4cb6157363947a2971bcb8ac05320775c879410f2011ebcefbdd992645ccb640814ec69dd2947068c313c2ce37da1c8693bd8760bd66068af0c638544a9ec7af7a5d8b70768ec88c618bc0586b40ec1b805ac632e5c70c598587057457ad9e06701356a8341e193ecf3720c34daadbd94a9523c1477145d1c9be39513f1ef90736a7ca65222733a05059a76ba03b5065b052bdd089daf0679b7e8404797cfc0cec90decaa9cb9c5b0e741ad76d0c08f4145597742cdfe81bb0ca9dba356ef2c433e5b50851d6d40bc7d282a6f4b7e84ebeb43cb846da93722376ad1e9553661ecb4d46be9f34bfa6698f830bc83c35fc3afae1b519c76c46b75cf85843ea8bfc8af3b7eb430da92c79e8007bc93fae7f5568cb0723aab9158030e3543498da351e756bad0a5e4228e3597ae6214c955b486eabfda6719b2df1a737b3e5c197b5d613f4c96ee95324e2ab7fc35f007b7bb0ce7121d731842dd890f11d4b8264ccc642e31e586c299a8cc0c08853fa520873071d53d6419e8c23ce594a1b3adf5097a3499e0e51dc1e4e2e6e1d9d02f72076d4aeae7564772de29e8cc4aa19a1472eb869cf69809b370f13eaf8ba624876df59bbc5716f75fb30575485c915036ff4dea/150/1920x1080_5824280/index.m3u8

#EXTINF:-1 tvg-logo="https://media.glassdoor.com/sqll/434390/olympusat-squarelogo-1442299551445.png" group-title="CINE",Cine Real op2 | USA
https://cinereal-plex.amagi.tv/CineReal/master.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/c7bRHaL.png" group-title="CINE",Cine Sureno | USA
https://olympusamagi.pc.cdn.bitgravity.com/CineSureno-roku/master_4.m3u8

#EXTINF:-1 tvg-logo="http://distritotv.es/wp-content/uploads/2018/04/ElDistrito_Logo_PNG.jpg" group-title="CINE",Distrito TV | Spain
https://cdn01.yowi.tv/KQRSDA7GDB/live-1200.m3u8

#EXTINF:-1 tvg-id="Extrema TV" tvg-name="Extrema TV" tvg-logo="http://www.radioextremacr.com/img/logo.png" group-title="CINE",Extrema TV | Costa Rica
http://livestreamcdn.net:1935/ExtremaTV/ExtremaTV/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/ADloLzp.jpg" group-title="CINE",Free TV LQ | USA
https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb553d167c6c64879ad43e63d9ef41a0d22411fc087a8d6933fb4b926bc10f41e2e5af97b20cac7822fb0fd87f0b66411f21c118de751fc7c76adf046727486b9898b37bd9981208a2ae56687fe525564eff0f10ce2541368aed1c0add64b42d4812bd593c1b63dcb80cb02704938217dd792adeff89673c745c0e99577adf970ff7bcff1807844e9d8b261ed77a10a3c45c9a8b41b1a8ee67cf17c568a054ddfdaeda8e45a0beab55df15e7313d6e7803f3e97897da13b1df947b3cee0042293b5bf2b196ea4b328f4a4a59f6ebc4e52d957dcf8d36cf6127ab3f9a5a8a34866ed87fcd954dafa0f5d04e5834b4d1486033eec3b28ffe0105e72b91c5e8d960329dff100a05a32ddd727b3ec0a59941d3924597e576d0e03d4b3dc6c411cd9fb080bdb1de13ca2490b39ef228517173160b905ca1831fbd43b92991e05e7b14273af19241d09683117f634b95ce4bc70f1abdc8c596cc5004da72124ce963c0296306a8655552a87789f0556d8d3544863a2deb5947e3289de876a0cdaae40228fbdfd752c07cfbba18d7c917bb614e1968cdfa384b555f279fa1711a2737c557e1d6def7390a0fe1b8c9fbd65a3b022a4d3c66ece3e363d58ace3d6f75ab3276529a717de76c29fa4c61336203f15cb5810c6c8c052e5f9ecd5d737b1c5b4c2ce3fdbbe44ba76bdb8fdc342a295060bc49774eeb0d01ec2b96154e66735e8f4f474aa91e1835822b0e52f8f20dedb15cd0534f117bccf318012a5b677a40fcfa0d860bbac14debd2a228bdcb179fce2535f021697e07fc8e7a4ab967057cb1a7520b6e94d268e87635ce14db14abdb64c18ab467761f6d47d88758f35ef68ad4976bd21ba4410771fd6bfbb2d7f3802807bcd158256958054e31023f6c2bbdd9de6b4f29bced77b60cb6ba158f4b46363948c6cd510fd3a6276eef5f1757acaecf84bad94347b808da4189364df72d484486e137f08abefffbfd1e7209cbb3ad43a3e1c5c1fbdfc422711c7f72fce55a467ccc29e08665b0fa0d509887805040f2c7ac351c8adab5e2/17/384x216_448720/index.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/ADloLzp.jpg" group-title="CINE",Free TV SD | USA
https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb553d167c6c64879ad43e63d9ef41a0d22411fc087a8d6933fb4b926bc10f41e2e5af97b20cac7822fb0fd87f0b66411f21c118de751fc7c76adf046727486b9898b37bd9981208a2ae56687fe525564eff0f10ce2541368aed1c0add64b42d4812bd593c1b63dcb80cb02704938217dd792adeff89673c745c0e99577adf970ff7bcff1807844e9d8b261ed77a10a3c45c9a8b41b1a8ee67cf17c568a054ddfdaeda8e45a0beab55df15e7313d6e7803f3e97897da13b1df947b3cee0042293b5bf2b196ea4b328f4a4a59f6ebc4e52d957dcf8d36cf6127ab3f9a5a8a34866ed87fcd954dafa0f5d04e5834b4d1486033eec3b28ffe0105e72b91c5e8d960329dff100a05a32ddd727b3ec0a59941d3924597e576d0e03d4b3dc6c411cd9fb080bdb1de13ca2490b39ef228517173160b905ca1831fbd43b92991e05e7b14273af19241d09683117f634b95ce4bc70f1abdc8c596cc5004da72124ce963c0296306a8655552a87789f0556d8d3544863a2deb5947e3289de876a0cdaae40228fbdfd752c07cfbba18d7c917bb614e1968cdfa384b555f279fa1711a2737c557e1d6def7390a0fe1b8c9fbd65a3b022a4d3c66ece3e363d58ace3d6f75ab3276529a717de76c29fa4c61336203f15cb5810c6c8c052e5f9ecd5d737b1c5b4c2ce3fdbbe44ba76bdb8fdc342a295060bc49774eeb0d01ec2b96154e66735e8f4f474aa91e1835822b0e52f8f20dedb15cd0534f117bccf318012a5b677a40fcfa0d860bbac14debd2a228bdcb179fce2535f021697e07fc8e7a4ab967057cb1a7520b6e94d268e87635ce14db14abdb64c18ab467761f6d47d88758f35ef68ad4976bd21ba4410771fd6bfbb2d7f3802807bcd158256958054e31023f6c2bbdd9de6b4f29bced77b60cb6ba158f4b46363948c6cd510fd3a6276eef5f1757acaecf84bad94347b808da4189364df72d484486e137f08abefffbfd1e7209cbb3ad43a3e1c5c1fbdfc422711c7f72fce55a467ccc29e08665b0fa0d509887805040f2c7ac351c8adab5e2/17/512x288_906215/index.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/ADloLzp.jpg" group-title="CINE",Free TV HD | USA
https://amg01024-olympusat-chiquilines-ono-ad-et.amagi.tv/playlist/amg01024-olympusat-chiquilines-ono/cb553d167c6c64879ad43e63d9ef41a0d22411fc087a8d6933fb4b926bc10f41e2e5af97b20cac7822fb0fd87f0b66411f21c118de751fc7c76adf046727486b9898b37bd9981208a2ae56687fe525564eff0f10ce2541368aed1c0add64b42d4812bd593c1b63dcb80cb02704938217dd792adeff89673c745c0e99577adf970ff7bcff1807844e9d8b261ed77a10a3c45c9a8b41b1a8ee67cf17c568a054ddfdaeda8e45a0beab55df15e7313d6e7803f3e97897da13b1df947b3cee0042293b5bf2b196ea4b328f4a4a59f6ebc4e52d957dcf8d36cf6127ab3f9a5a8a34866ed87fcd954dafa0f5d04e5834b4d1486033eec3b28ffe0105e72b91c5e8d960329dff100a05a32ddd727b3ec0a59941d3924597e576d0e03d4b3dc6c411cd9fb080bdb1de13ca2490b39ef228517173160b905ca1831fbd43b92991e05e7b14273af19241d09683117f634b95ce4bc70f1abdc8c596cc5004da72124ce963c0296306a8655552a87789f0556d8d3544863a2deb5947e3289de876a0cdaae40228fbdfd752c07cfbba18d7c917bb614e1968cdfa384b555f279fa1711a2737c557e1d6def7390a0fe1b8c9fbd65a3b022a4d3c66ece3e363d58ace3d6f75ab3276529a717de76c29fa4c61336203f15cb5810c6c8c052e5f9ecd5d737b1c5b4c2ce3fdbbe44ba76bdb8fdc342a295060bc49774eeb0d01ec2b96154e66735e8f4f474aa91e1835822b0e52f8f20dedb15cd0534f117bccf318012a5b677a40fcfa0d860bbac14debd2a228bdcb179fce2535f021697e07fc8e7a4ab967057cb1a7520b6e94d268e87635ce14db14abdb64c18ab467761f6d47d88758f35ef68ad4976bd21ba4410771fd6bfbb2d7f3802807bcd158256958054e31023f6c2bbdd9de6b4f29bced77b60cb6ba158f4b46363948c6cd510fd3a6276eef5f1757acaecf84bad94347b808da4189364df72d484486e137f08abefffbfd1e7209cbb3ad43a3e1c5c1fbdfc422711c7f72fce55a467ccc29e08665b0fa0d509887805040f2c7ac351c8adab5e2/17/1280x720_2964940/index.m3u8

#EXTINF:-1 tvg-id="Golden Plus" tvg-name="Golden Plus" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/golden_plus.png" group-title="CINE",Golden Plus | Mexico
https://linear-410.frequency.stream/dist/vix/410/hls/master/playlist.m3u8

#EXTINF:-1 tvg-id="Golden Premier" tvg-name="Golden Premier" tvg-logo="https://imagenes.gatotv.com/logos/canales/oscuros/golden_premier.png" group-title="CINE",Golden Premier | Mexico
https://linear-411.frequency.stream/dist/vix/411/hls/master/playlist.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="https://i.imgur.com/9jprbpv.png" group-title="CINE",Mega Cine Tv | Republica Dominicana
https://cloudflare.streamgato.us:3125/live/megacinetvlive.m3u8

#EXTINF:-1 tvg-id="195149" tvg-name="MOOVIMEX" tvg-logo="https://i.imgur.com/q3PmMF9.jpg" group-title="CINE", MOOVIMEX | Mexico
https://dai2.xumo.com/amagi_hls_data_xumo1212A-viziomoovimex/CDN/playlist.m3u8

#EXTINF:-1 tvg-id="195146" tvg-name="My Time MX" tvg-logo="https://i.imgur.com/hMksKhc.png" group-title="CINE",My Time Movie | Mexico
https://appletree-mytime-samsungmexico.amagi.tv/playlist.m3u8

#EXTINF:-1 tvg-logo="https://lh3.googleusercontent.com/-13NMPnGbChA/XkyjXafughI/AAAAAAAAwIE/5GeoQycy3SoMZ91mla3A_jqJqCqTMvz9wCK8BGAsYHg/s0/2020-02-18.png" group-title="CINE",Orbit TV | Republica Dominicana
https://ss3.domint.net:3134/otv_str/orbittv/playlist.m3u8

#EXTINF:-1 tvg-id="Cine" tvg-name="Cine" tvg-logo="https://i.imgur.com/ZN3ry2f.png" group-title="CINE",PlanetaTV Movie | Chile
https://tls-cl.cdnz.cl/movie/live/chunklist_w451618268.m3u8

#EXTINF:-1 tvg-id="Cine" tvg-name="Cine" tvg-logo="https://i.imgur.com/ZN3ry2f.png" group-title="CINE",PlanetaTV Movie op2 | Chile
https://scl.edge.grupoz.cl/movie/live/playlist.m3u8

#EXTINF:-1 tvg-logo="https://i.imgur.com/YgHu53w.png" group-title="CINE",Top Cine | USA
https://olympusamagi.pc.cdn.bitgravity.com/TopCine-roku/master.m3u8

#EXTINF:-1 tvg-logo="https://media.glassdoor.com/sqll/434390/olympusat-squarelogo-1442299551445.png" group-title="CINE",Tu Cine op1 | USA
https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01024-olympusat-tucinelatam-ono/756fd709-c11e-4881-97aa-c5b7de54070a/4.m3u8

#EXTINF:-1 tvg-logo="https://media.glassdoor.com/sqll/434390/olympusat-squarelogo-1442299551445.png" group-title="CINE",Tu Cine op2 | USA
https://tucine-plex.amagi.tv/TuCine-xumo/master.m3u8

#EXTINF:-1 tvg-id="Wow Tv" tvg-name="Wow Tv" tvg-logo="http://directostv.teleame.com/wp-content/uploads/2017/10/wow-tv.png" group-title="CINE",Wow Tv | El Salvador
http://cdn.elsalvadordigital.com:1935/wowtv/wowtv/chunklist_w84588335.m3u8

#EXTINF:-1 tvg-id="" tvg-name="" tvg-logo="" group-title="CINE",Video Club | Argentina
https://videostream.shockmedia.com.ar:19360/videoclub/videoclub.m3u8
#EXTINF:-1 group-title="CINE",ViX Jajaja (1080p)
https://d1f3q72l8uy8ur.cloudfront.net/dist/samsungtv/318/hls/master/playlist.m3u8
#EXTINF:-1 group-title="CINE",ViX Jajaja (1080p)
https://d1406h321fcaxw.cloudfront.net/dist/samsungtv/310/hls/master/playlist.m3u8
#EXTINF:-1 group-title="CINE",ViX Jajaja (1080p)
https://d1406h321fcaxw.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-hlqsnnxad8rlq-ssai-prd/dist/samsungtv/310/hls/master/playlist.m3u8
#EXTINF:-1 group-title="CINE",ViX Parejas (1080p)
https://d1f3q72l8uy8ur.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-z46pswns8dp1b-ssai-prd/dist/samsungtv/318/hls/master/playlist.m3u8
`;

let parseM3u = m3utojson(m3u);

