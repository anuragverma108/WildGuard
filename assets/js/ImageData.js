const imageCategories = {
  lions: [
      "https://media.istockphoto.com/id/638460056/photo/single-lion-standing-proudly-on-a-small-hill.webp?a=1&b=1&s=612x612&w=0&k=20&c=LgUWqtPps4w8XvkfVLgLQwt93fra3Ofo0WC49z474uw=",
     " https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",

     "https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
     "https://images.unsplash.com/photo-1516109829485-81f3640777bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
     "https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxpb24lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",

"https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.webp?a=1&b=1&s=612x612&w=0&k=20&c=bkm3XwVxkfqjA3d29D1UoO5p04dz7UkLcx9fMPyZBQ4=",

 "https://media.istockphoto.com/id/486237421/photo/beautiful-lion-caesar-in-the-golden-grass-of-masai-mara.jpg?s=612x612&w=0&k=20&c=g-ioUkP2_Rft_RDzSmV8oLi-dJSQwdA-I_qpR9Eo37Y="

,
"https://media.istockphoto.com/id/1027482604/photo/pair-of-adult-lions-in-zoological-garden.jpg?s=612x612&w=0&k=20&c=vIhGCgqx6kp28yIAf4AHzv7pFZJCTofB7DNtBDDMBA0=",
"https://media.istockphoto.com/id/2085566100/photo/lion-figure-in-red-sandstone.jpg?s=612x612&w=0&k=20&c=60MkZzgwTLQhqD8sF2-imK1pfEo14OSA4QI9IYm5sxw="
,
"https://media.istockphoto.com/id/1919487908/photo/statue-of-indian-goddess-skandmata-at-mata-vaishno-devi-temple-vrindavan.jpg?s=612x612&w=0&k=20&c=1kbqYn_qVgu1jFNoO_LwgwylmB-Hk61rcjeoaLFKyG0="
,
"https://media.istockphoto.com/id/1495330996/photo/lion-abhayagiri-temple-anuradhapura-sri-lanka.jpg?s=612x612&w=0&k=20&c=nEaRfzV6AWeMvwkgcB2y3jiIjkVTh8jHLilyswcqHUg="
,
"https://media.istockphoto.com/id/2154312846/photo/lion-brothers.jpg?s=612x612&w=0&k=20&c=HtHqPO9QUZGdQJ6PikGCNJzSGK2tYWAjQl4rFyxZBBw=",

"https://media.istockphoto.com/id/2166292360/photo/portrait-of-male-lion-lying-woodland.jpg?s=612x612&w=0&k=20&c=xpkkuzKuPVkGYZ4NQWiBJ-cNvP4okeRCkcB4Krh_q04=",
"https://media.istockphoto.com/id/2153418514/photo/wild-lion-standing-together-on-the-white-background.jpg?s=612x612&w=0&k=20&c=vj1jb9SAL17ovPAaTzT3uJYcJ9nljpWEp5NNCqOpFgA=",
"https://media.istockphoto.com/id/2151946450/photo/female-lion-in-the-forest.jpg?s=612x612&w=0&k=20&c=tJL7rIWipqFThdPaGNARSYtGC4stYCDR7RdUjRBVBcc=",
"https://media.istockphoto.com/id/1532553144/photo/two-male-lions-at-sunset.jpg?s=612x612&w=0&k=20&c=OMpxZttxOUaH8GzutxIJBcA7qjr1PgRZddeipQzY8GQ=",
"https://media.istockphoto.com/id/2148580929/photo/leoncino-indiano.jpg?s=612x612&w=0&k=20&c=zpxfyr0dBSnbCWuPy_UmWHzod4bcCj6W1Iw8_WjNjWs=",
"https://media.istockphoto.com/id/2080742924/photo/asiatic-lioness-image-was-taken-in-gujarat-sasan-gir-forest-place-in-the-world-to-capture.jpg?s=612x612&w=0&k=20&c=8l8RKGFx37lvNMJGbpIQQjtAQZIU7irST5i9GWtxgjg="

,
"https://media.istockphoto.com/id/2161191993/photo/lioness-drinking.jpg?s=612x612&w=0&k=20&c=xV0qR3Oin9JEPhByHkhmd6XL-9xvOP1kVRUg7AkpoME="

,
"https://media.istockphoto.com/id/2062965782/photo/beautiful-asiatic-lion-young-female-in-gir-forest-national-park-gir-sanctuary-gujarat-india.jpg?s=612x612&w=0&k=20&c=_tnSvbqvnGt8IHpqCetPzRlEeMHTke0TBGx5QcpVE5E="










  ],
  deer: [
      "https://media.istockphoto.com/id/178574885/photo/spotted-deer-male-corbett-india.jpg?s=612x612&w=0&k=20&c=uB9pGwuoTlUHFo3n3bqJtdagBwRl0vOT639tmqN03Ac=",
      "https://media.istockphoto.com/id/505913924/photo/eating-wild-male-cheetal-deer.jpg?s=612x612&w=0&k=20&c=zYA8_vtJpMVQLDwaFAFX2UWfNMsXq0kc8sUonoEuac4=","https://media.istockphoto.com/id/178549185/photo/herd-of-male-spotted-deer-with-antler-india.jpg?s=612x612&w=0&k=20&c=sis2fkdt5EI_UQ-i31xrqdT_mx2Db6tFPF9vca45I-s=",
      "https://media.istockphoto.com/id/2157135878/photo/brown-deer-standing-in-forest-on-sunny-day.jpg?s=612x612&w=0&k=20&c=66cSciWQXuNXj3Ngo3oU8jAyMsp27_leKHLVjKdB9Lg=","https://media.istockphoto.com/id/2087313025/photo/spotted-deer-and-mynas-perched-atop.jpg?s=612x612&w=0&k=20&c=w7JNRZeF9mekmoc8uKQjssTheVIHi-qkx2F6BluwzyY=",
      "https://media.istockphoto.com/id/2122754958/photo/the-deer-was-spotted-in-a-forest-near-masinakudi-tamil-nadu-india.jpg?s=612x612&w=0&k=20&c=fviLoiVkmv4TzZ8Li8SQ2k6ow1ljAQsqG4QebVQLELY="
      ,
      "https://media.istockphoto.com/id/1957656984/photo/wild-sambar-deer-stag-in-a-lake-at-ranthambore-national-park-in-rajasthan-india-asia.jpg?s=612x612&w=0&k=20&c=UxxgVFw1N_UumxOzbUfHq6ITTxq3iEE7xdBd3dGgDdA=","https://media.istockphoto.com/id/1673547224/photo/wild-male-blackbuck-or-antilope-cervicapra-or-indian-antelope-closeup-with-face-expression-in.jpg?s=612x612&w=0&k=20&c=cuhkDi7sGsf57GGywbNUX4xg_47pCW9ei3UIo6vs_wQ=",
      "https://media.istockphoto.com/id/1350789266/photo/spotted-deer.jpg?s=612x612&w=0&k=20&c=gxBrBIN6XNSRjPEgE8wAhv8lASoEM8Gajtg1hDBaVI0=",
      "https://media.istockphoto.com/id/923884086/photo/two-bull-elk-in-banff.jpg?s=612x612&w=0&k=20&c=9WMiqT03xVs7qpzEixlfhoiKSZc2KhS7Vckc3O8PdH4=",
      "https://media.istockphoto.com/id/155396096/photo/sambar-deer-in-ranthambhore-np-india.jpg?s=612x612&w=0&k=20&c=aN3QGwtW81PO5P3TsCsOXusrG6aFgfkg1_tGDl3tZbE=",
      "https://media.istockphoto.com/id/2172432118/photo/sambar-deer-with-large-antlers-in-lush-forest.jpg?s=612x612&w=0&k=20&c=zq6CpwlrvbrO3E7WDWga-ya3w0Rnph-4Opt4Uae8N7s=","https://media.istockphoto.com/id/493976242/photo/deer.jpg?s=612x612&w=0&k=20&c=bWebx7B5hpCAOoQ7flPVZ48_4otJ-FCBYAOFhCj4Pzg="
,
"https://media.istockphoto.com/id/178137549/photo/spotted-deer-male-with-antlers-corbett-national-park-india.jpg?s=612x612&w=0&k=20&c=EDiMYcc35Q_K46aJiQ_Ylut5ONxy49EvJNLeQB7vnPU=",
"https://media.istockphoto.com/id/2168047860/photo/an-adult-male-soft-ground-barasingha-crossing-the-safari-track.jpg?s=612x612&w=0&k=20&c=Q64bpHZ6tsnEH8CncMqzpR4566dEyJpUiejmzbkvWo8=",
"https://media.istockphoto.com/id/1388440703/photo/mammal-bucks.jpg?s=612x612&w=0&k=20&c=ntiqejO0QqSwAPX1DHX6SSBKqHfHyiKaIrg0ppMC6Gk="




  ],
 antelopes:[
"https://media.istockphoto.com/id/183338707/photo/krishna-mrigam-or-blackbuck-antilope-cervicapra-india.jpg?s=612x612&w=0&k=20&c=bcaUAJ0ubQS5p9nI5AuejQikMOpHFXvGFc6uTqjGntI=",
"https://media.istockphoto.com/id/1804296427/photo/blackbuck.jpg?s=612x612&w=0&k=20&c=L0QUcIcpiB23F1Q2TSM1eMEDKG6PjN67z0Jz4qjJwm8=",
"https://media.istockphoto.com/id/2149488601/photo/jumping-closeup-of-a-male-blackbuck-captured-in-odisha-india.jpg?s=612x612&w=0&k=20&c=zShw_MNsrc3jIOcv8yZ-h72ijiEG6yLj-CJvHD9L3zw=",
"https://media.istockphoto.com/id/499262824/photo/blackbuck.jpg?s=612x612&w=0&k=20&c=AUiq_jlJA7QAWQQJYXWoIUGFEHJe37JbIzGttr9KXVU=",
"https://media.istockphoto.com/id/1954265275/photo/blackbucks-feeding-on-green-grass-along-with-albino-buck.jpg?s=612x612&w=0&k=20&c=MdSgbOij5ReHzfJyWYPQk-Ij2nY71p299Eak1MYQs4Y=",
"https://media.istockphoto.com/id/499262824/photo/blackbuck.jpg?s=612x612&w=0&k=20&c=AUiq_jlJA7QAWQQJYXWoIUGFEHJe37JbIzGttr9KXVU=",
"https://media.istockphoto.com/id/1813102173/photo/black-bucks.jpg?s=612x612&w=0&k=20&c=kRdphLxTALQqYJZzZlUHGOZn2v329OJ795MGj0bRWL8="
,
"https://media.istockphoto.com/id/1393411989/photo/mammal-blue-bull-nilgai.jpg?s=612x612&w=0&k=20&c=UIvajBTLBJgjAbJH6LU2TcOQXLuSkHvWkFfTZ_9WDms="
,"https://media.istockphoto.com/id/674772918/photo/pair-of-blackbuck-antelope-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=Lk7A-c7GWaz9xDVCn8cFyPSQglJnUN4Spc7v2yNl3bE=","https://media.istockphoto.com/id/2150501115/photo/wild-male-and-baby-deer-cute-closeup-on-the-black-background.jpg?s=612x612&w=0&k=20&c=8FpzdtkJy-3W5Neej7te87lJVOHwOdVH3RZmx_U9jSo="
,"https://media.istockphoto.com/id/2148438150/photo/deer-relaxing-and-eating-the-grass-in-the-zoo.jpg?s=612x612&w=0&k=20&c=tCb3nToqX7200obbI9fxj3Ejn70Qo5JVtojomnUg36g=",
"https://media.istockphoto.com/id/1162204316/photo/image-of-a-herd-of-yellow-brown-female-blackbuck-and-dark-brown-male-with-spiral-horns.jpg?s=612x612&w=0&k=20&c=ZVoeFWRUX5dFHsyHgY5PNe-UoKs6f7Laeo28eTk_dNQ="


  ],
  bears: [
      "https://media.istockphoto.com/id/1494666697/photo/grizzly-bear-with-yearling-cubs-exploring-in-the-yellowstone-ecosystem-in-western-usa-and.jpg?s=612x612&w=0&k=20&c=L2KBz3ok-Tg_3M-FpxdwmblTALghcXtHD_IrB3GyPwU=",
      "https://media.istockphoto.com/id/157393199/photo/polar-bear-on-dire-straits-over-small-piece-of-ice.jpg?s=612x612&w=0&k=20&c=W_2CM0cIhHMN3LQzEuKyJKBubvAUK3rahIP8evSRL8o="
,"https://media.istockphoto.com/id/1221133425/photo/giant-panda-bear-eating-bamboo.jpg?s=612x612&w=0&k=20&c=0stdf5jkOYOvbe4wmfLHLmG02cip-gDAOipSmdW-fg0=",
"https://media.istockphoto.com/id/932051348/photo/kermode-bear-hunting-for-salmon-in-canadas-great-bear-rainforest.jpg?s=612x612&w=0&k=20&c=jgtZ04nkgU4aNdSYcdAZrZwuDrHl1r7lqjftAt2uEJ4=",
"https://media.istockphoto.com/id/2079790341/photo/big-white-polar-bear-head-closeup-face-on-the-black-background.jpg?s=612x612&w=0&k=20&c=rsRHoNdCk2mibq741DFZ9dJ3MA3HttP5M8CNsLNdXdo=","https://media.istockphoto.com/id/2173792171/photo/black-bear-in-spring-woods-monochrome.jpg?s=612x612&w=0&k=20&c=ll8rpywK-9fyIEuKljmTc6qNR7e5zvy1NJIJ0xBsbYA=",
"https://media.istockphoto.com/id/1968197585/photo/beautiful-polar-bear-innocent-cute-face-closeup.jpg?s=612x612&w=0&k=20&c=KPeHKyysSCGB5_Ghtp6oHNkbQzYybfTlqXtT8ZLDGHk=",
"https://media.istockphoto.com/id/508547463/photo/polar-bear-on-pack-ice.jpg?s=612x612&w=0&k=20&c=kqYtx4C33f1BWeSXbNzzXQot4evi9pOncxD5PKqx4as=",
"https://media.istockphoto.com/id/184154276/photo/close-up-of-cute-panda-pulling-a-face.jpg?s=612x612&w=0&k=20&c=5P2APfJakRb3nM-9vWlAnmNWPePO-4XvhP9QrZnlJEs=",
"https://media.istockphoto.com/id/1496809466/photo/beautiful-images-of-a-red-panda.jpg?s=612x612&w=0&k=20&c=KoPm6x6DM9akz6zdmO88H18mPNN6Q4N5ZF4KCopVn3c=",
"https://media.istockphoto.com/id/1497876615/photo/animators-dressed-as-polar-bears-entertain-people-on-the-beach.jpg?s=612x612&w=0&k=20&c=UsjfXBjLl1y4NQJlayiyX1dc500ewdhOS8y8VIn5f0g=",
"https://media.istockphoto.com/id/1494646377/photo/grizzly-bear-with-yearling-cubs-exploring-in-the-yellowstone-ecosystem-in-western-usa-and.jpg?s=612x612&w=0&k=20&c=pJ5ORFaPLYiJ1uej9wejE04OVFj0VM8vQEc7w001Avo=",
"https://media.istockphoto.com/id/966209652/photo/panda-roux-red-panda.jpg?s=612x612&w=0&k=20&c=utcybw13MZEubF7hldwoYHrAE-wnQhr8lnWg1ph6hdc=",
"https://media.istockphoto.com/id/1397899281/photo/mom-and-baby-panda-fun-on-the-black-background.jpg?s=612x612&w=0&k=20&c=3RlkjWahYKaKlE8QjnUI05yKZ4qD2t5BHjDg-CvFuiw=",
"https://media.istockphoto.com/id/2159941034/photo/eisb%C3%A4r.jpg?s=612x612&w=0&k=20&c=na92AKYDBAvRm05mRn1X-hlo1zvKqgoQihVgqAArQkw=",
"https://media.istockphoto.com/id/2087005026/photo/close-up-of-one-wild-polar-bear-cub-standing-on-frozen-ice.jpg?s=612x612&w=0&k=20&c=Mp5fCypWDJORQfJXtQiVOIxrdtihGZUFTNBzl-0hDO8="










  ],
  horses: [
      "https://media.istockphoto.com/id/889083114/photo/beautiful-horse-in-the-country.jpg?s=612x612&w=0&k=20&c=KVJga6THcmyRP93yesv0AcmEYEWG58d8aml8IRd_vOM=",
"https://media.istockphoto.com/id/2052539485/photo/amazing-sunset-photography-at-murud-marina-beach-along-with-horse-riding.jpg?s=612x612&w=0&k=20&c=cZEagRa8GVn45Myo1nTPaxL6Q2oC_rHRrSauoAKYijk=","https://media.istockphoto.com/id/1317923547/photo/pack-horse-in-the-himalayas.jpg?s=612x612&w=0&k=20&c=990XRdiaRETFzrNlfyQQsIizjhiqwShqx3Z9V2orXaM="
,
"https://media.istockphoto.com/id/1787694100/photo/cute-two-beautiful-horses-loving-together-on-dark-background.jpg?s=612x612&w=0&k=20&c=hWLfIPwVeAo2mX_wOQOhMraQshRQa6HaHePUfGoOg8U=",
"https://media.istockphoto.com/id/2162252252/photo/brown-and-white-horses-are-walking.jpg?s=612x612&w=0&k=20&c=6k2dK1OntOydoC8kL0p-IydfV6fnuD-FwtxZPhknFvU=",
"https://media.istockphoto.com/id/1460830939/photo/horse-at-vishansar-lake.jpg?s=612x612&w=0&k=20&c=DNBrOQPmN6mWB-oiJXdXYjLFbQ3D1b7cUnjoT9bJF00="
,"https://media.istockphoto.com/id/2160368967/photo/horse-and-foal-at-the-beach-brown-horse-ready-for-the-race.jpg?s=612x612&w=0&k=20&c=Xezbm5qtiuN_J2FkZAmEdcaUk_CJc2snfcMa0RUnptQ=",
"https://media.istockphoto.com/id/1413079298/photo/full-length-of-woman-embracing-horse-while-standing-on-field-during-sunset.jpg?s=612x612&w=0&k=20&c=jCSxRuL4u1usSgj0g5dSdd5nJEJ_BW85giRA91QeIKQ=",
"https://media.istockphoto.com/id/2154553375/photo/black-horse-face-in-black-background.jpg?s=612x612&w=0&k=20&c=6CbZ4oSDDNkGOx7qP0FeJLNbeBuZkzE6Dqqu-Eh63Qc=","https://media.istockphoto.com/id/173570157/photo/girl-and-her-horse.jpg?s=612x612&w=0&k=20&c=D-u_51H7c3MfbFBRVk2WuV8r4_09IDws_LkGp5hvAw8=",
"https://media.istockphoto.com/id/2149657199/photo/a-mare-is-grazing-with-her-foal.jpg?s=612x612&w=0&k=20&c=gQWK2xIXvvx-AkNT5TgMFafDFo-xzbj5Lg6vvoPOdW4=","https://media.istockphoto.com/id/2149688867/photo/chong-ak-su-gorge-kyrgyzstan-tien-shan-mountains-central-asia.jpg?s=612x612&w=0&k=20&c=5CkrJzlbJaYCiJ9LPGRPYMEQLawowFLy1Ft3nrkqG94=",
"https://media.istockphoto.com/id/2145014862/photo/horse-on-grassland-on-mountai-hill.jpg?s=612x612&w=0&k=20&c=IJuJExdhLgqoEwfo0W5zuju15YDjq4ZIDt0gd0sa9dU=",
"https://media.istockphoto.com/id/1954325847/photo/sea-sun-and-shore.jpg?s=612x612&w=0&k=20&c=FSVH6lo5FIJyBhHK110YAHxcYnxyUK9G31SOww8o5vg=",
"https://media.istockphoto.com/id/1786406371/photo/the-elegance-of-a-beautiful-white-horse.jpg?s=612x612&w=0&k=20&c=RYYUqzfZmZZW_mbFNwjOcu671o7iKt-zrOTAUZM7-IA=",
"https://media.istockphoto.com/id/1273602755/photo/horses-on-the-way-to-gangtey-monastery-phobjikha.jpg?s=612x612&w=0&k=20&c=il1SG_zQ2UZ7K2shnzDi3itcYEsCnFslgYSYs7NrUBw="
  ]

  
};
export default imageCategories;