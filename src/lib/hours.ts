import { site } from "@/data/site";

export function getMeridaNow(): Date {
  const formatted = new Date().toLocaleString("en-US", {
    timeZone: site.timeZone,
  });
  return new Date(formatted);
}

export function getOpenStatus(now: Date = getMeridaNow()) {
  const dayIndex = now.getDay(); // 0 = Sunday
  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const today = site.hours.find((h) => h.day === dayNames[dayIndex]);

  if (!today || !today.open || !today.close) {
    return { isOpen: false, today, label: "Cerrado hoy" };
  }

  const [openH, openM] = today.open.split(":").map(Number);
  const [closeH, closeM] = today.close.split(":").map(Number);
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const minutesOpen = openH * 60 + openM;
  const minutesClose = closeH * 60 + closeM;

  const isOpen = minutesNow >= minutesOpen && minutesNow < minutesClose;

  return {
    isOpen,
    today,
    label: isOpen
      ? `Abierto ahora · cierra ${today.close}`
      : minutesNow < minutesOpen
        ? `Cerrado · abre hoy a las ${today.open}`
        : "Cerrado por hoy",
  };
}
