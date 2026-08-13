"""Crop + orient ritagli del diario — versione 2.

Pipeline:
  1. PIL.Image.open + exif_transpose
  2. apply manual override: crop normalizzato + rotate (deg CW)
  3. resize 1600px lato lungo, save jpg q88 progressive

Source dir:  public/img/diario-src/  (file originali, non sovrascritti)
Output dir:  public/img/diario-cropped/
"""
from PIL import Image, ImageOps
from pathlib import Path

SRC = Path("public/img/diario-src")
OUT = Path("public/img/diario-cropped")
OUT.mkdir(parents=True, exist_ok=True)

# Override per immagine. coord = [x1,y1,x2,y2] in frazioni dell'immagine
# DOPO exif_transpose. rotate = gradi CW (0/90/180/270).
# Ogni override deve essere giustificato dal CONTENUTO reale verificato visivamente.
OV = {
    # 01: notebook page con 3 ritagli, fingers basso, frigo destra. Testo gia L->R.
    "01-gare-fine-corso-1976.jpg":          {"crop": [0.13, 0.08, 0.78, 0.83]},
    # 02: notebook landscape con "Paoletta Magoni" - testo L->R orizzontale gia OK.
    # rotate=90 produce portrait elegante con testo ancora L->R.
    "02-magoni-coppa-europa.jpg":           {"crop": [0.05, 0.10, 0.92, 0.97], "rotate": 90},
    # 03: pagina con Camozzi 2° Caspoggio + Si rivela Efrem (Pinzolo). Skip lato sx scuro.
    "03-efrem-color-clipping.jpg":          {"crop": [0.22, 0.00, 0.62, 0.78], "rotate": 90},
    # 04: polaroid bambino azione skiing race. Single piece, no rotate.
    "04-camozzi-caspoggio-1981.jpg":        {"crop": [0.02, 0.00, 0.95, 1.00]},
    # 05: polaroid bambino pettorale 1 SCUOLA ITALIANA SCI. No rotate.
    "05-bambino-pettorale-1.jpg":           {"crop": [0.16, 0.04, 0.78, 0.96]},
    # 06: polaroid podio. No rotate.
    "06-podio-vintage.jpg":                 {"crop": [0.05, 0.02, 0.96, 0.98]},
    # 07: notebook con Trofeo Speedy Gonzales + Borno. Testo L->R OK.
    "07-trofeo-speedy-gonzales.jpg":        {"crop": [0.05, 0.02, 0.94, 0.96]},
    # 08: foto CONI Camozzi/Pichler/Merelli. Source ha foto sideways -> rotate 90 CW.
    "08-coni-computer-1985.jpg":            {"crop": [0.10, 0.02, 0.65, 0.98], "rotate": 90},
    # 09: notebook con Speedy Gonzales (alternate angle vs 07). Testo L->R OK.
    "09-orezzo-cominelli-due.jpg":          {"crop": [0.28, 0.00, 0.95, 0.92]},
    # 10: notebook con "Merelli batte Kerschbaumer / nel gigante degli assoluti".
    # Source ha titolo verticale -> rotate 90 CW.
    "10-merelli-batte-kerschbaumer.jpg":    {"crop": [0.06, 0.04, 0.85, 0.96], "rotate": 90},
    # 11: newspaper page "Per gli azzurri è un festival" landscape. Testo L->R OK.
    "11-azzurri-festival.jpg":              {"crop": [0.04, 0.00, 0.78, 1.00]},
    # 12: stesso "Per gli azzurri" da angolo diverso. Testo L->R orizzontale.
    "12-merelli-bettineschi-montecampione.jpg": {"crop": [0.10, 0.00, 0.95, 0.96]},
    # 13: notebook con "Trofeo Giudici Merelli e Bettineschi Montecampione".
    # Source ha titolo verticale -> rotate 90 CW.
    "13-coppitalia-2-4.jpg":                {"crop": [0.00, 0.04, 0.78, 1.00], "rotate": 90},
    # 14: foto color skier #34 BMW + articolo Edalini. Source rotato -> rotate 90 CW.
    "14-efrem-bmw-bib34.jpg":               {"crop": [0.06, 0.00, 0.78, 0.98], "rotate": 90},
    # 15: notebook con Kerschbaumer + vignetta in alto-dx. Source rotato -> rotate 90 CW.
    "15-vignetta-cornolti.jpg":             {"crop": [0.04, 0.05, 0.95, 0.96], "rotate": 90},
    # 16: notebook con Vignetta Cornolti dominante + Spampatti adiacente.
    # Testo gia L->R orizzontale ma vignetta vista da angolo diverso.
    "16-spampatti-primo-merelli-terzo.jpg": {"crop": [0.04, 0.00, 0.96, 0.94]},
    # 17: clipping "Pinzolo Efrem batte i titolari" + spirale.
    # Source rotato -> rotate 90 CW. Drop spirale (top originale = right post-rotate).
    "17-efrem-batte-titolari-1979.jpg":     {"crop": [0.04, 0.00, 0.95, 0.72], "rotate": 270},
    # 18: "ECCO GLI EREDI DI FAUSTO RADICI" capovolto -> rotate 180.
    "18-eredi-fausto-radici.jpg":           {"crop": [0.04, 0.04, 0.96, 0.93], "rotate": 180},
    # 19: foto color skier (similar to 14). Source rotato -> rotate 90 CW.
    "19-slalom-vintage-color.jpg":          {"crop": [0.04, 0.00, 0.95, 1.00]},
    # 20: gia croppato Efrem #20 azione.
    "20-efrem-action-color.jpg":            {"crop": [0.00, 0.00, 1.00, 1.00]},
}


def process(path: Path):
    name = path.name
    if name not in OV:
        print(f"SKIP {name}")
        return
    o = OV[name]
    img = Image.open(path)
    img = ImageOps.exif_transpose(img)
    w, h = img.size
    x1, y1, x2, y2 = o["crop"]
    box = (int(x1*w), int(y1*h), int(x2*w), int(y2*h))
    img = img.crop(box)
    if "rotate" in o:
        deg = o["rotate"] % 360
        if deg == 90:    img = img.transpose(Image.ROTATE_270)  # 270 CCW = 90 CW
        elif deg == 180: img = img.transpose(Image.ROTATE_180)
        elif deg == 270: img = img.transpose(Image.ROTATE_90)
    nw, nh = img.size
    max_side = 1600
    if max(nw, nh) > max_side:
        if nw >= nh:
            tnh = int(nh * max_side / nw); tnw = max_side
        else:
            tnw = int(nw * max_side / nh); tnh = max_side
        img = img.resize((tnw, tnh), Image.LANCZOS)
    img = img.convert("RGB")
    out_path = OUT / name
    img.save(out_path, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"{name:48s} {img.size[0]:>4}x{img.size[1]:<4} ({out_path.stat().st_size/1024:.0f}KB)")


def main():
    for p in sorted(SRC.glob("*.jpg")):
        process(p)


if __name__ == "__main__":
    main()
