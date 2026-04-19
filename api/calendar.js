export default async function handler(req, res) {
  const ICS_URL = "https://outlook.live.com/owa/calendar/138c7a3c-953b-481d-ba4e-d23089a28169/1a8f188a-a392-4f70-9058-636fdf58efb3/cid-AABD2FC4AE1F391F/calendar.ics";
  
  try {
    const response = await fetch(ICS_URL);
    const data = await response.text();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o calendário' });
  }
}
