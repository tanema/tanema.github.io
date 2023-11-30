const raceData = [
  {
    title: "Bahrain Grand Prix",
    date: "2023-03-05",
    results: {
      steph: 21,
      tim: 20,
      heath: 21,
      justine: 37,
      mina: 34,
      ashley: 18,
      izzy: 19,
    }
  },
  {
    title: "Saudi Arabian Grand Prix",
    date: "2023-03-19",
    results: {
      steph: 59,
      tim: 39,
      heath: 59,
      justine: 75,
      mina: 72,
      ashley: 50,
      izzy: 57,
    }
  },
  {
    title: "Australian Grand Prix",
    date: "2023-04-02",
    results: {
      steph:    96	,
      tim:      61	,
      heath:    94	,
      justine:  109	,
      mina:     109	,
      ashley:   72	,
      izzy:     91	,
    }
  },
  {
    title: "Azerbaijan Grand Prix",
    date: "2023-04-30",
    results: {
      steph:    131	,
      tim:      98	,
      heath:    129	,
      justine:  146	,
      mina:     144	,
      ashley:   105	,
      izzy:     128	,
    }
  },
  {
    title: "Miami Grand Prix",
    date: "2023-05-07",
    results: {
      steph:    168	,
      tim:      135	,
      heath:    162	,
      justine:  183	,
      mina:     181	,
      ashley:   142	,
      izzy:     165	,
    }
  },
  {
    title: "Monaco Grand Prix",
    date: "2023-05-28",
    results: {
      steph:    200	,
      tim:      169	,
      heath:    194	,
      justine:  217	,
      mina:     217	,
      ashley:   178	,
      izzy:     201	,
    }
  },
  {
    title: "Spanish Grand Prix",
    date: "2023-06-04",
    results: {
      steph:    233	,
      tim:      199	,
      heath:    223	,
      justine:  250	,
      mina:     250	,
      ashley:   213	,
      izzy:     237	,
    }
  },
  {
    title: "Canadian Grand Prix",
    date: "2023-06-18",
    results: {
      steph:    270	,
      tim:      226	,
      heath:    244	,
      justine:  287	,
      mina:     287	,
      ashley:   250	,
      izzy:     271	,
    }
  },
  {
    title: "Austrian Grand Prix",
    date: "2023-07-02",
    results: {
      steph:    304	,
      tim:      254	,
      heath:    275	,
      justine:  324	,
      mina:     319	,
      ashley:   279	,
      izzy:     300	,
    }
  },
  {
    title: "British Grand Prix",
    date: "2023-07-09",
    results: {
      steph:    333	,
      tim:      275	,
      heath:    309	,
      justine:  355	,
      mina:     356	,
      ashley:   309	,
      izzy:     332	,
    }
  },
  {
    title: "Hungarian Grand Prix",
    date: "2023-07-23",
    results: {
      steph:    369	,
      tim:      311	,
      heath:    328	,
      justine:  391	,
      mina:     392	,
      ashley:   345	,
      izzy:     368	,
    }               
  },
  {
    title: "Belgian Grand Prix",
    date: "2023-07-30",
    results: {
      steph:    405	,
      tim:      326	,
      heath:    364	,
      justine:  411	,
      mina:     428	,
      ashley:   381	,
      izzy:     403	,
    }
  },
  {
    title: "Dutch Grand Prix",
    date: "2023-08-27",
    results: {
      steph:    428	,
      tim:      359	,
      heath:    395	,
      justine:  442	,
      mina:     459	,
      ashley:   402	,
      izzy:     436	,
    }
  },
  {
    title: "Italian Grand Prix",
    date: "2023-09-03",
    results: {
      steph:    462	,
      tim:      394	,
      heath:    431	,
      justine:  479	,
      mina:     493	,
      ashley:   437	,
      izzy:     470	,
    }
  },
  {
    title: "Singapore Grand Prix",
    date: "2023-09-17",
    results: {
      steph:    485	,
      tim:      418	,
      heath:    468	,
      justine:  504	,
      mina:     516	,
      ashley:   473	,
      izzy:     502	,
    }
  },
  {
    title: "Japanese Grand Prix",
    date: "2023-09-24",
    results: {
      steph:    503	,
      tim:      439	,
      heath:    505	,
      justine:  524	,
      mina:     537	,
      ashley:   509	,
      izzy:     519	,
    }
  },
  {
    title: "Qatar Grand Prix",
    date: "2023-10-08",
    results: {
      steph:    516	,
      tim:      458	,
      heath:    524	,
      justine:  560	,
      mina:     558	,
      ashley:   530	,
      izzy:     536	,
    }
  },
  {
    title: "United States Grand Prix",
    date: "2023-10-22",
    results: {
      steph:    537	,
      tim:      479	,
      heath:    527	,
      justine:  597	,
      mina:     579	,
      ashley:   551	,
      izzy:     556	,
    }
  },
  {
    title: "Mexico City Grand Prix",
    date: "2023-10-29",
    results: {
      steph:    555	,
      tim:      496	,
      heath:    528	,
      justine:  615	,
      mina:     616	,
      ashley:   588	,
      izzy:     592	,
    }
  },
  {
    title: "São Paulo Grand Prix",
    date: "2023-11-05",
    results: {
      steph:    585	,
      tim:      528	,
      heath:    563	,
      justine:  635	,
      mina:     648	,
      ashley:   620	,
      izzy:     606	,
    }
  },
  {
    title: "Las Vegas Grand Prix",
    date: "2023-11-19",
    results: {
      steph:    610	,
      tim:      555	,
      heath:    593	,
      justine:  660	,
      mina:     681	,
      ashley:   646	,
      izzy:     637	,
    }
  },
  {
    title: "Abu Dhabi Grand Prix",
    date: "2023-11-26",
    results: {
      steph:    639,
      tim:      579,
      heath:    623,
      justine:  697,
      mina:     716,
      ashley:   679,
      izzy:     672,
    }
  },
]
 
export default raceData;
