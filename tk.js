const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

const keywords = ['lò nướng điện thông minh gertech gt-688', 'bếp nướng điện không khói kochi', 'nồi nấu đa năng osaka', 'bếp ba từ bosch puc631bb2e', 'bộ nồi 4 món fissler luno black',
'đèn sưởi nhà tắm 3 bóng cong','hút mùi yamato yt-269h-s yamato','bếp hồng ngoại sunhouse shd 6005(emc)' ,'đèn sưởi nhà tắm 2 bóng cao cấp bouken',
'bộ bát đĩa sứ trang trí bàn ăn cao cấp - đẹp - giá rẻ 26 món','bộ dao kéo hama siêu sắc, không gỉ cao cấp','thớt kính cường lực cao cấp băm chặt không vỡ kanda',
'máy hủy rác thực phẩm gertech gt-450','máy ép chậm gertech gt-001','máy xay nấu haipai 308' ];

function displaySuggestions(input) {
  const filteredKeywords = keywords.filter(keyword =>
    keyword.toLowerCase().startsWith(input.toLowerCase())
  );
  suggestions.innerHTML = '';
  filteredKeywords.forEach(keyword => {
    const li = document.createElement('li');
    li.textContent = keyword;
    li.onclick = () => {
      searchInput.value = keyword;
      suggestions.innerHTML = '';
    };
    suggestions.appendChild(li);
  });
}

function search() {
  const keyword = searchInput.value.toLowerCase();
  switch (keyword) {
    case 'lò nướng điện thông minh gertech gt-688':
      window.location.href = 'xchitiet lò nuongws1.html';
      break;
    case 'bếp nướng điện không khói kochi':
      window.location.href = 'xchitiet lò nuongws2.html';
      break;
    case 'bếp ba từ bosch puc631bb2e':
      window.location.href = 'beptu.html';
      break;
    case 'nồi nấu đa năng osaka':
      window.location.href = 'xchitiet song noi2.html';
      break;
    case 'bộ nồi 4 món fissler luno black':
      window.location.href = 'xchitiet song nooif1.html';
      break;
      case 'đèn sưởi nhà tắm 3 bóng cong':
      window.location.href = 'babong.html';
      break;
      case 'hút mùi yamato yt-269h-s yamato':
      window.location.href = 'HutmuiNhat.html';
      break;
      case 'bếp hồng ngoại sunhouse shd 6005(emc)':
      window.location.href = 'bephongngoai.html';
      break;
      case 'đèn sưởi nhà tắm 2 bóng cao cấp bouken':
      window.location.href = 'xchitiet thiet bị nha tam2.html';
      break;
      case 'bộ bát đĩa sứ trang trí bàn ăn cao cấp - đẹp - giá rẻ 26 món':
    window.location.href = 'xchitiet bat dua.html';
    break;
    case 'bộ dao kéo hama siêu sắc, không gỉ cao cấp':
    window.location.href = 'xchitiet dao thot2.html';
    break;
    case 'thớt kính cường lực cao cấp băm chặt không vỡ kanda':
    window.location.href = 'xchitiet dao thot1.html';
    break;
    case 'máy hủy rác thực phẩm gertech gt-450':
    window.location.href = 'mayxay2.html';
    break;
    case 'máy xay nấu haipai 308':
    window.location.href = 'Mayxay3.html';
    
      break;
    default:
      // Do something if keyword doesn't match any predefined URLs
      break;
  }
}

searchInput.addEventListener('input', () => displaySuggestions(searchInput.value));
