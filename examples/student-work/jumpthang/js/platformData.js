//all of my platforms
let platformData = [
    //a1 (normalzone)
    {
        x: 750,
        y: 3500,
        w: 1500,
        h: 1500,
        type: "normal"
    },
    //a2 (low grav zone)
    {
        x: 3000,
        y: 3500,
        w: 2990,
        h: 1000,
        type: "lowGravity"
    },
    //a3 (icy zone)
    {
        x: 3500,
        y: 2250,
        w: 1400,
        h: 1490,
        type: "icy"
    },
    {
        x: 3250,
        y: 750,
        w: 1500,
        h: 1500,
        type: "bouncy"
    },
    {
        x: 2150,
        y: 2250,
        w: 1300,
        h: 1500,
        type: "teleportArea"
    },
    //P1
    {
        x: 110,
        y: 3890,
        w: 10,
        h: 60,
        type: "left"
    },
    {
        x: 190,
        y: 3890,
        w: 10,
        h: 60,
        type: "right"
    },
    {
        x: 150,
        y: 3925,
        w: 90,
        h: 10,
        type: "bottom"
    },
    {
        x: 150,
        y: 3865,
        w: 90,
        h: 25,
        type: "top"
    },
    //p2
    {
        x: 68,
        y: 3735,
        w: 10,
        h: 60,
        type: "right"
    },
    {
        x: 35,
        y: 3760,
        w: 75,
        h: 10,
        type: "bottom"
    },
    {
        x: 35,
        y: 3700,
        w: 75,
        h: 25,
        type: "top"
    },
    //p3
    {
        x: 184,
        y: 3670,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 215,
        y: 3670,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 200,
        y: 3685,
        w: 40,
        h: 10,
        type: "bottom"
    },
    {
        x: 200,
        y: 3650,
        w: 40,
        h: 25,
        type: "top"
    },
    //p4
    {
        x: 384,
        y: 3670,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 415,
        y: 3670,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 400,
        y: 3685,
        w: 40,
        h: 10,
        type: "bottom"
    },
    {
        x: 400,
        y: 3650,
        w: 40,
        h: 25,
        type: "top"
    },
    //p5
    {
        x: 500,
        y: 3650,
        w: 10,
        h: 220,
        type: "left"
    },
    {
        x: 531,
        y: 3605,
        w: 10,
        h: 140,
        type: "right"
    },
    {
        x: 516,
        y: 3540,
        w: 40,
        h: 25,
        type: "slideTop"
    },
    {
        x: 670,
        y: 3745,
        w: 10,
        h: 25,
        type: "right"
    },
    {
        x: 585,
        y: 3755,
        w: 180,
        h: 10,
        type: "bottom"
    },
    {
        x: 531,
        y: 3675,
        w: 10,
        h: 10,
        type: "bottom"
    },
    {
        x: 601,
        y: 3730,
        w: 150,
        h: 25,
        type: "top"
    },
    //p6
    {
        x: 679,
        y: 3600,
        w: 10,
        h: 40,
        type: "left"
    },
    {
        x: 730,
        y: 3650,
        w: 10,
        h: 50,
        type: "left"
    },
    {
        x: 730,
        y: 3480,
        w: 10,
        h: 180,
        type: "left"
    },
    {
        x: 748,
        y: 3532,
        w: 10,
        h: 285,
        type: "right"
    },
    {
        x: 705,
        y: 3620,
        w: 60,
        h: 10,
        type: "bottom"
    },
    {
        x: 739,
        y: 3675,
        w: 28,
        h: 10,
        type: "bottom"
    },
    {
        x: 700,
        y: 3580,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 739,
        y: 3380,
        w: 25,
        h: 25,
        type: "top"
    },
    //p7
    {
        x: 659,
        y: 3425,
        w: 10,
        h: 40,
        type: "right"
    },
    {
        x: 641,
        y: 3425,
        w: 10,
        h: 40,
        type: "left"
    },
    {
        x: 650,
        y: 3400,
        w: 25,
        h: 25,
        type: "top"
    },
    {
        x: 650,
        y: 3450,
        w: 25,
        h: 20,
        type: "bottom"
    },
    //p8
    {
        x: 655,
        y: 3265,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 585,
        y: 3265,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 620,
        y: 3280,
        w: 80,
        h: 15,
        type: "bottom"
    },
    {
        x: 620,
        y: 3250,
        w: 80,
        h: 25,
        type: "top"
    },
    //p9
    {
        x: 375,
        y: 3320,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 305,
        y: 3320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 340,
        y: 3340,
        w: 80,
        h: 15,
        type: "bottom"
    },
    {
        x: 340,
        y: 3300,
        w: 80,
        h: 25,
        type: "top"
    },
    //p10
    {
        x: 235,
        y: 3475,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 165,
        y: 3475,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 200,
        y: 3490,
        w: 80,
        h: 15,
        type: "bottom"
    },
    {
        x: 200,
        y: 3450,
        w: 80,
        h: 25,
        type: "top"
    },
    //p11
    {
        x: 35,
        y: 3370,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 20,
        y: 3385,
        w: 40,
        h: 15,
        type: "bottom"
    },
    {
        x: 20,
        y: 3350,
        w: 40,
        h: 25,
        type: "top"
    },
    //p12
    {
        x: 10,
        y: 3180,
        w: 20,
        h: 25,
        type: "top"
    },
    //p13
    {
        x: 10,
        y: 3030,
        w: 20,
        h: 25,
        type: "top"
    },
    //p14
    {
        x: 110,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 150,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 130,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 130,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p15
    {
        x: 230,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 190,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 210,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 210,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p16
    {
        x: 290,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 330,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 310,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 310,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p17
    {
        x: 370,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 410,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 390,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 390,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p18
    {
        x: 560,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 520,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 540,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 540,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p19
    {
        x: 600,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 640,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 620,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 620,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p20
    {
        x: 840,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 800,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 820,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 820,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p21
    {
        x: 880,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 920,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 900,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 900,
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p22
    {
        x: 1220,
        y: 3020,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1180,
        y: 3020,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1200,
        y: 3035,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 1200,
        y: 2995,
        w: 50,
        h: 25,
        type: "top"
    },
    //p23
    {
        x: 1225,
        y: 3820,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1315,
        y: 3820,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1270,
        y: 3835,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 1270,
        y: 3795,
        w: 100,
        h: 25,
        type: "top"
    },
    //p24(area)
    {
        x: 2550,
        y: 3600,
        w: 2000,
        h: 500,
        type: "slowGrav"
    },
    //p25
    {
        x: 1625,
        y: 3815,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1715,
        y: 3815,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1670,
        y: 3835,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 1670,
        y: 3795,
        w: 100,
        h: 25,
        type: "top"
    },
    //p26
    {
        x: 1545,
        y: 3850,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1455,
        y: 3850,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1500,
        y: 3870,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 1500,
        y: 3825,
        w: 100,
        h: 25,
        type: "top"
    },
    //p27
    {
        x: 1967.5,
        y: 3720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2032.5,
        y: 3720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2000,
        y: 3740,
        w: 75,
        h: 15,
        type: "bottom"
    },
    {
        x: 2000,
        y: 3700,
        w: 75,
        h: 25,
        type: "top"
    },
    //p28
    {
        x: 2455,
        y: 3760,
        w: 10,
        h: 500,
        type: "left"
    },
    {
        x: 2545,
        y: 3760,
        w: 10,
        h: 500,
        type: "right"
    },
    {
        x: 2500,
        y: 3500,
        w: 100,
        h: 25,
        type: "top"
    },
    //p29(area)
    {
        x: 3000,
        y: 3950,
        w: 1100,
        h: 200,
        type: "slowGrav"
    },
    //p30(area)
    {
        x: 3775,
        y: 3300,
        w: 450,
        h: 450,
        type: "slowGrav"
    },
    //p31
    {
        x: 2780,
        y: 3320,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2820,
        y: 3320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2800,
        y: 3330,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 2800,
        y: 3300,
        w: 50,
        h: 25,
        type: "top"
    },
    //p32
    {
        x: 3055,
        y: 3720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3145,
        y: 3720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3100,
        y: 3740,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 3100,
        y: 3700,
        w: 100,
        h: 25,
        type: "top"
    },
    //p33
    {
        x: 3750,
        y: 3420,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3840,
        y: 3420,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3795,
        y: 3440,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 3795,
        y: 3400,
        w: 100,
        h: 25,
        type: "top"
    },
    //p34
    {
        x: 3870,
        y: 3020,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3830,
        y: 3020,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3850,
        y: 3040,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 3850,
        y: 3000,
        w: 50,
        h: 25,
        type: "top"
    },
    //p35
    {
        x: 3675,
        y: 2900,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3720,
        y: 2915,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3620,
        y: 2840,
        w: 10,
        h: 100,
        type: "right"
    },
    {
        x: 3600,
        y: 2780,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3580,
        y: 2860,
        w: 10,
        h: 140,
        type: "left"
    },
    {
        x: 3650,
        y: 2935,
        w: 150,
        h: 15,
        type: "bottom"
    },
    //p36
    {
        x: 3845,
        y: 2700,
        w: 200,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3750,
        y: 2720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3940,
        y: 2720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3845,
        y: 2740,
        w: 200,
        h: 15,
        type: "bottom"
    },
    //p37
    {
        x: 3800,
        y: 2530,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3845,
        y: 2550,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3755,
        y: 2550,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3800,
        y: 2570,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p38
    {
        x: 3700,
        y: 2400,
        w: 60,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3725,
        y: 2420,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3675,
        y: 2420,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3700,
        y: 2440,
        w: 60,
        h: 15,
        type: "bottom"
    },
    //p39
    {
        x: 3850,
        y: 2250,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3805,
        y: 2270,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3895,
        y: 2270,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3850,
        y: 2290,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p40
    {
        x: 3870,
        y: 2100,
        w: 25,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3878,
        y: 2120,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3852.5,
        y: 2040,
        w: 10,
        h: 100,
        type: "right"
    },
    {
        x: 3830,
        y: 1985,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3810,
        y: 2060,
        w: 10,
        h: 140,
        type: "left"
    },
    {
        x: 3845,
        y: 2130,
        w: 77.5,
        h: 15,
        type: "bottom"
    },
    //p41
    {
        x: 3930,
        y: 1850,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3885,
        y: 1870,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3975,
        y: 1870,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3930,
        y: 1880,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p42
    {
        x: 3900,
        y: 1700,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3920,
        y: 1720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3880,
        y: 1720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3900,
        y: 1740,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p43
    {
        x: 3575,
        y: 1700,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3555,
        y: 1740,
        w: 10,
        h: 70,
        type: "left"
    },
    {
        x: 3525,
        y: 1785,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3595,
        y: 1762.5,
        w: 10,
        h: 115,
        type: "right"
    },
    {
        x: 3505,
        y: 1805,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3550,
        y: 1820,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p44
    {
        x: 3350,
        y: 1900,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3305,
        y: 1920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3395,
        y: 1920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3350,
        y: 1940,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p45
    {
        x: 3150,
        y: 2200,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3105,
        y: 2220,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3195,
        y: 2220,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3150,
        y: 2240,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p46
    {
        x: 3040,
        y: 2600,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 2995,
        y: 2650,
        w: 10,
        h: 90,
        type: "left"
    },
    {
        x: 2977.5,
        y: 2707.5,
        w: 25,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 2970,
        y: 2727.5,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3085,
        y: 2672.5,
        w: 10,
        h: 135,
        type: "right"
    },
    {
        x: 3027.5,
        y: 2740,
        w: 125,
        h: 15,
        type: "bottom"
    },
    //p47
    {
        x: 2930,
        y: 2950,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 2950,
        y: 2970,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2910,
        y: 2970,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2930,
        y: 2990,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p48
    {
        x: 2860,
        y: 2830,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 2880,
        y: 2850,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2840,
        y: 2850,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2860,
        y: 2870,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p49
    {
        x: 3200,
        y: 2430,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3155,
        y: 2450,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3245,
        y: 2450,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3200,
        y: 2470,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p50
    {
        x: 3300,
        y: 2300,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3280,
        y: 2320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3320,
        y: 2320,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3300,
        y: 2340,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p51
    {
        x: 3050,
        y: 2050,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3070,
        y: 2070,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3030,
        y: 2070,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3050,
        y: 2090,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p52
    {
        x: 3130,
        y: 1890,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3150,
        y: 1910,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3110,
        y: 1910,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3130,
        y: 1930,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p53
    {
        x: 3185,
        y: 1725,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3205,
        y: 1745,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3165,
        y: 1745,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3185,
        y: 1765,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p54
    {
        x: 3450,
        y: 1550,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3430,
        y: 1570,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3470,
        y: 1570,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3450,
        y: 1590,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p55
    {
        x: 3550,
        y: 1400,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3530,
        y: 1420,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3570,
        y: 1420,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3550,
        y: 1440,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p56
    {
        x: 3770,
        y: 1400,
        w: 50,
        h: 25,
        type: "bouncyTop"
    },
    {
        x: 3750,
        y: 1420,
        w: 10,
        h: 30,
        type: "bouncyLeft"
    },
    {
        x: 3790,
        y: 1420,
        w: 10,
        h: 30,
        type: "bouncyRight"
    },
    {
        x: 3770,
        y: 1440,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    //p57
    {
        x: 3950,
        y: 1300,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 3905,
        y: 1320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3950,
        y: 1340,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p58
    {
        x: 3987.5,
        y: 1120,
        w: 25,
        h: 25,
        type: "top"
    },
    {
        x: 3970,
        y: 1157.5,
        w: 10,
        h: 80,
        type: "bouncyLeft"
    },
    {
        x: 3987.5,
        y: 1190,
        w: 25,
        h: 15,
        type: "bottom"
    },
    //p59
    {
        x: 3850,
        y: 1100,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3871,
        y: 1125,
        w: 10,
        h: 50,
        type: "bouncyRight"
    },
    {
        x: 3829,
        y: 1125,
        w: 10,
        h: 50,
        type: "bouncyLeft"
    },
    {
        x: 3850,
        y: 1150,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    //p60
    {
        x: 3650,
        y: 1140,
        w: 50,
        h: 30,
        type: "bouncyTop"
    },
    {
        x: 3630,
        y: 1175,
        w: 10,
        h: 40,
        type: "bouncyLeft"
    },
    {
        x: 3670,
        y: 1175,
        w: 10,
        h: 40,
        type: "bouncyRight"
    },
    {
        x: 3650,
        y: 1200,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    //p61
    {
        x: 3450,
        y: 1000,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3470,
        y: 1020,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3430,
        y: 1020,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3450,
        y: 1040,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p62
    {
        x: 3850,
        y: 850,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3830,
        y: 870,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3870,
        y: 870,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3850,
        y: 890,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p63
    {
        x: 3470,
        y: 720,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3450,
        y: 740,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3490,
        y: 740,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3470,
        y: 760,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p64
    {
        x: 3300,
        y: 550,
        w: 10,
        h: 47.2,
        type: "bouncyLeft"
    },
    {
        x: 3340,
        y: 550,
        w: 10,
        h: 47.2,
        type: "bouncyRight"
    },
    {
        x: 3320,
        y: 580,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    {
        x: 3320,
        y: 520,
        w: 50,
        h: 25,
        type: "bouncyTop"
    },
    //p65
    {
        x: 3200,
        y: 630,
        w: 50,
        h: 25,
        type: "bouncyTop"
    },
    {
        x: 3220,
        y: 670,
        w: 10,
        h: 60,
        type: "bouncyRight"
    },
    {
        x: 3180,
        y: 670,
        w: 10,
        h: 60,
        type: "bouncyLeft"
    },
    {
        x: 3200,
        y: 700,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    //p66
    {
        x: 3300,
        y: 780,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3330,
        y: 710,
        w: 10,
        h: 125,
        type: "left"
    },
    {
        x: 3340,
        y: 730,
        w: 10,
        h: 165,
        type: "bouncyRight"
    },
    {
        x: 3280,
        y: 800,
        w: 10,
        h: 20,
        type: "left"
    },
    {
        x: 3310,
        y: 810,
        w: 70,
        h: 15,
        type: "bottom"
    },
    //p67
    {
        x: 3105,
        y: 600,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 3085,
        y: 620,
        w: 10,
        h: 20,
        type: "left"
    },
    {
        x: 3125,
        y: 620,
        w: 10,
        h: 20,
        type: "right"
    },
    {
        x: 3105,
        y: 635,
        w: 50,
        h: 10,
        type: "bottom"
    },
    //68
    {
        x: 3000,
        y: 620,
        w: 50,
        h: 25,
        type: "bouncyTop"
    },
    {
        x: 2980,
        y: 655,
        w: 10,
        h: 50,
        type: "bouncyLeft"
    },
    {
        x: 3020,
        y: 655,
        w: 10,
        h: 50,
        type: "bouncyRight"
    },
    {
        x: 3000,
        y: 685,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    //p69
    {
        x: 2890,
        y: 690,
        w: 50,
        h: 25,
        type: "bouncyTop"
    },
    {
        x: 2870,
        y: 725,
        w: 10,
        h: 50,
        type: "bouncyLeft"
    },
    {
        x: 2910,
        y: 725,
        w: 10,
        h: 50,
        type: "bouncyRight"
    },
    {
        x: 2890,
        y: 750,
        w: 50,
        h: 15,
        type: "bouncyBottom"
    },
    //p70
    {
        x: 2750,
        y: 800,
        w: 100,
        h: 25,
        type: "bouncyTop"
    },
    {
        x: 2705,
        y: 825,
        w: 10,
        h: 50,
        type: "bouncyLeft"
    },
    {
        x: 2795,
        y: 825,
        w: 10,
        h: 50,
        type: "bouncyRight"
    },
    {
        x: 2750,
        y: 855,
        w: 100,
        h: 15,
        type: "bouncyBottom"
    },
    //p71
    {
        x: 2600,
        y: 1200,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 2645,
        y: 1225,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2555,
        y: 1225,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2600,
        y: 1245,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p72
    {
        x: 2825,
        y: 1100,
        w: 25,
        h: 75,
        type: "teleportIn"
    },
    //p73
    {
        x: 2400,
        y: 2400,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 2445,
        y: 2420,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2355,
        y: 2420,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2400,
        y: 2440,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p74
    {
        x: 2500,
        y: 2300,
        w: 25,
        h: 75,
        type: "teleportIn"
    },
    //p75
    {
        x: 2530,
        y: 2125,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 2575,
        y: 2145,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2485,
        y: 2144,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2530,
        y: 2165,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p76
    {
        x: 2530,
        y: 2000,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 2550,
        y: 2020,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2510,
        y: 2020,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2530,
        y: 2040,
        w: 50,
        h: 15,
        type: "bottom"
    },
    //p77
    {
        x: 2450,
        y: 1925,
        w: 50,
        h: 50,
        type: "teleportIn"
    },
    //p78
    {
        x: 1700,
        y: 2300,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 1745,
        y: 2320,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1655,
        y: 2320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1700,
        y: 2340,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p79
    {
        x: 1600,
        y: 2400,
        w: 50,
        h: 50,
        type: "teleportIn"
    },
    //p80
    {
        x: 2150,
        y: 2700,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 2195,
        y: 2720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2105,
        y: 2720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2150,
        y: 2740,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p81
    {
        x: 2150,
        y: 2700,
        w: 100,
        h: 25,
        type: "top"
    },
    {
        x: 2195,
        y: 2720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2105,
        y: 2720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2150,
        y: 2740,
        w: 100,
        h: 15,
        type: "bottom"
    },
    //p82
    {
        x: 2270,
        y: 2650,
        w: 10,
        h: 100,
        type: "Win"
    },
    {
        x: 2300,
        y: 2500,
        w: 275,
        h: 15,
        type: "slideTop"
    },
];