import aquarius from "@/assets/zodiac/aquarius.svg"
import aries from "@/assets/zodiac/aries.svg"
import cancer from "@/assets/zodiac/cancer.svg"
import capricornus from "@/assets/zodiac/capricornus.svg"
import gemini from "@/assets/zodiac/gemini.svg"
import leo from "@/assets/zodiac/leo.svg"
import libra from "@/assets/zodiac/libra.svg"
import pisces from "@/assets/zodiac/pisces.svg"
import sagittarius from "@/assets/zodiac/sagittarius.svg"
import scorpius from "@/assets/zodiac/scorpius.svg"
import taurus from "@/assets/zodiac/taurus.svg"
import virgo from "@/assets/zodiac/virgo.svg"

const zodiacIconHandler = (zodiac: string) => {
  let zodiacIcon;
  if (zodiac === 'Aquarius') zodiacIcon = aquarius;
  else if (zodiac === 'Aries') zodiacIcon = aries;
  else if (zodiac === 'Cancer') zodiacIcon = cancer;
  else if (zodiac === 'Capricornus') zodiacIcon = capricornus;
  else if (zodiac === 'Gemini') zodiacIcon = gemini;
  else if (zodiac === 'Leo') zodiacIcon = leo;
  else if (zodiac === 'Libra') zodiacIcon = libra;
  else if (zodiac === 'Pisces') zodiacIcon = pisces;
  else if (zodiac === 'Sagittarius') zodiacIcon = sagittarius;
  else if (zodiac === 'Scorpius') zodiacIcon = scorpius;
  else if (zodiac === 'Taurus') zodiacIcon = taurus;
  else if (zodiac === 'Virgo') zodiacIcon = virgo;
  
  return zodiacIcon || null;
}

export default zodiacIconHandler