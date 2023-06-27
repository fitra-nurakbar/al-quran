import { Amiri_Quran, Inter, Poppins, Scheherazade_New } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
const amiriQuran = Amiri_Quran({ weight: "400", subsets: ["arabic"] });
const scheherazade = Scheherazade_New({ weight: "400", subsets: ["arabic"] });

export { amiriQuran, inter, poppins, scheherazade };

