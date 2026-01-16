import './App.css'

const samples = [
  { title: 'Madani Thin 100', className: 'madani-thin', tone: 'Lightest upright cut' },
  { title: 'Madani Thin Oblique 100', className: 'madani-thin-oblique', tone: 'Lightest italic cut' },
  { title: 'Madani ExtraLight 200', className: 'madani-extralight', tone: 'Featherweight upright' },
  { title: 'Madani ExtraLight Oblique 200', className: 'madani-extralight-oblique', tone: 'Featherweight italic' },
  { title: 'Madani Light 300', className: 'madani-light', tone: 'Soft upright' },
  { title: 'Madani Light Oblique 300', className: 'madani-light-oblique', tone: 'Soft italic' },
  { title: 'Madani Regular 400', className: 'madani-regular', tone: 'Balanced upright' },
  { title: 'Madani Oblique 400', className: 'madani-oblique', tone: 'Balanced italic' },
  { title: 'Madani Medium 500', className: 'madani-medium', tone: 'Readable body weight' },
  { title: 'Madani Medium Oblique 500', className: 'madani-medium-oblique', tone: 'Readable italic' },
  { title: 'Madani SemiBold 600', className: 'madani-semibold', tone: 'Firm upright' },
  { title: 'Madani SemiBold Oblique 600', className: 'madani-semibold-oblique', tone: 'Firm italic' },
  { title: 'Madani Bold 700', className: 'madani-bold', tone: 'Strong upright' },
  { title: 'Madani Bold Oblique 700', className: 'madani-bold-oblique', tone: 'Strong italic' },
  { title: 'Madani ExtraBold', className: 'madani-extrabold', tone: 'Dense upright' },
  { title: 'Madani ExtraBold Oblique', className: 'madani-extrabold-oblique', tone: 'Dense italic' },
  { title: 'Madani Black 900', className: 'madani-black', tone: 'Maximum weight upright' },
  { title: 'Madani Black Oblique 900', className: 'madani-black-oblique', tone: 'Maximum weight italic' },
  { title: 'Madani Upright Variable', className: 'madani-variable-upright', tone: 'Variable axis upright (wght 650)' },
  { title: 'Madani Oblique Variable', className: 'madani-variable-oblique', tone: 'Variable axis italic (wght 700)' },
]

function App() {
  return (
    <main className="page">
      <header className="page__hero">
        <h1>Xem nhanh mọi kiểu chữ</h1>
        <p className="lede">
          Bộ sưu tập gọn để xem trước các trọng lượng và kiểu nghiêng của Madani. Mỗi thẻ cho biết tên family,
          trọng lượng gợi ý và một câu mẫu để so sánh nhanh.
        </p>
      </header>

      <section className="grid">
        {samples.map((sample) => (
          <article className="font-card" key={sample.title}>
            <div className="font-card__meta">
              <h2>{sample.title}</h2>
              <span>{sample.tone}</span>
            </div>
            <p className={`font-card__sample ${sample.className}`}>
              Sáng nào cũng vậy, tôi pha chế ly cà phê thơm ngát. 0123456789
            </p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
