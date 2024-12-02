const formatDate = (dateString: string) => {
  // Parse tanggal dari string
  const date = new Date(dateString);

  // Ambil hari, bulan, dan tahun
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  const year = date.getFullYear();

  // Hitung usia
  const currentDate = new Date();
  const age = currentDate.getFullYear() - year - 
              (currentDate.getMonth() < date.getMonth() || 
              (currentDate.getMonth() === date.getMonth() && currentDate.getDate() < date.getDate()) ? 1 : 0);

  // Format string hasil
  return `${day} / ${month} / ${year} (Age ${age})`;
}

export default formatDate