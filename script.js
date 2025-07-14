const chatBox = document.getElementById('chatBox');
const optionsBox = document.getElementById('options');
const status = document.getElementById('status');

let state = -1;

const sound = new Audio('pop.mp3');
const flowerSound = new Audio('flower.mp3');
sound.volume = 0.4;
flowerSound.volume = 0.5;

function addMessage(text, sender = 'bot') {
  removeTyping();
  const msg = document.createElement('div');
  msg.className = 'bubble ' + sender;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;

  sound.currentTime = 0;
  sound.play();
}

function showTyping() {
  status.innerText = 'mengetik...';
  removeTyping();
  const typing = document.createElement('div');
  typing.className = 'bubble bot typing';
  typing.innerText = 'Matthew sedang mengetik...';
  typing.id = 'typing';
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTyping() {
  const typing = document.getElementById('typing');
  if (typing) typing.remove();
  status.innerText = 'online';
}

function spawnFlowers() {
  flowerSound.currentTime = 0;
  flowerSound.play();

  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 2 + Math.random() * 3 + "s";
    flower.innerText = "🌸";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 5000);
  }
}

function showOptions(opts) {
  optionsBox.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt.label;
    btn.onclick = () => handleResponse(opt.value);
    optionsBox.appendChild(btn);
  });
}

function handleResponse(choice) {
  if (state >= 0) addMessage(choice, 'user');

  if (state === -1) {
    addMessage('Halo', 'user');
    setTimeout(() => {
      showTyping();
      setTimeout(() => {
        addMessage("ih haloo, akhirnya dibales. maafin aku kemarinn yaa!! 😔");
        showOptions([{label: 'ya', value: 'ya'}, {label: 'tidak', value: 'tidak'}]);
        state = 1;
      }, 1200);
    }, 400);
  }

  else if (state === 1) {
    if (choice === 'tidak') {
      showTyping();
      setTimeout(() => {
        addMessage("ihh jangan gituu, ayolahh cecee. janji gabakal kek gitu lagii janjii!!");
        showOptions([
          {label: 'ya', value: 'ya'},
          {label: 'iya', value: 'iya'},
          {label: 'okaii', value: 'okaii'},
          {label: 'opsi 1', value: 'opsi 1'},
          {label: 'opsi 2', value: 'opsi 2'},
          {label: 'opsi 3', value: 'opsi 3'}
        ]);
        state = 2;
      }, 1000);
    } else {
      addMessage("iyaa cecee baik banget 😭 makasih udah mau maafin yaa!");
      spawnFlowers();
      setTimeout(() => {
        showFinalSequence();
      }, 1000);
      state = 3;
    }
  }

  else if (state === 2) {
    showFinalSequence();
    state = 3;
  }

  else if (state === 3) {
    showTyping();
    setTimeout(() => {
      addMessage("eh gw udh bs bawa motor keliling jalanann muluuk, tp mamaa masih jarang izininn. klo udah boleh nanti kita belajar barengg mauu ndakk pas kosongg. kita belajar semwa materi utbk tka semuaaa sampe kt mampus.");
      showOptions([
        {label: 'ya', value: 'ya'},
        {label: 'IYA', value: 'IYA'},
        {label: 'mau', value: 'mau'},
        {label: 'antonim-gamau', value: 'antonim-gamau'},
        {label: 'MAUUUUU', value: 'MAUUUUU'},
        {label: 'gaboleh sm papah', value: 'gaboleh sm papah'}
      ]);
      state = 4;
    }, 1200);
  }

  else if (state === 4) {
    if (choice === 'gaboleh sm papah') {
      addMessage("wah papi  WKASKWKDW ampun klo emg lu nya takut yauda gw rispek...  oke gapapahh kita bisa belajar nanti aja klo emg sempett. tp klo papi lu liat gw dia bakal ngamuk apa ngga?!? ini gw beneran nanya deh gw jd penasaran pengen coba ngobrol DSKADNIWABIWDOAWF bukan yg aneh aneh ya, kek pengen tau aja sosok yg udh ngelead kakak cece yg sebegitunya, dan cece ygg punya pendiriann kuatt!! OKEE KO JADI KEMANA MANA YA WKAWKDWKA MAKASIHH UDA MAAFIN DAN BABAYY have a sweet day princess!!");
    } else {
      addMessage("yeyy nanti ku infokan, KSI TAU KE WA TAPI JGN disini dowang... kan ini cm jelmaan matthew, makanya bs nakal bgt gombal gombal. matthew asli mah boro boro gombal, palingan ngomongnya persamaan euler tercantik. OKEII MAKASIH UDAHH MAAFIN DAN BABAYYY have a sweet dayy princess!!!");
    }
    optionsBox.innerHTML = '';
  }
}

function showFinalSequence() {
  showTyping();
  setTimeout(() => {
    addMessage("YEYY terimakasihh cecee, tidakk heran kamu begituu murah hati tidak sombong suka menolong baik hati pemaaf...");
    
    setTimeout(() => {
      addMessage("makasihh yaa uda mau maafin, emg matthew goblok bgt tau kenapa ya bs begitu... bob udh 1000 kali gampar matthew sm gentayangin matthew smpe gabisa tidur tauu. EH TP BENERAN kemarin gw mimpi bobb jadii marah tp bentukan kertas 2 dimensi trs kek my whole world just changed. but it doesnt matter tho bcz cece is my whole worldd, TF world class rizz kah?!?!? gasi gw gajago ngerizz. Funfact mantan gw resah krn gw gapernah bales gombalan dia pake gombalan WKDSKWKW and stfu idc about that.");
      
      // ✅ lanjut ke step berikutnya (state 3 → lanjut chat belajar bareng)
      setTimeout(() => {
        showTyping();
        setTimeout(() => {
          addMessage("eh gw udh bs bawa motor keliling jalanann muluuk, tp mamaa masih jarang izininn. klo udah boleh nanti kita belajar barengg mauu ndakk pas kosongg. kita belajar semwa materi utbk tka semuaaa sampe kt mampus.");
          showOptions([
            {label: 'ya', value: 'ya'},
            {label: 'IYA', value: 'IYA'},
            {label: 'mau', value: 'mau'},
            {label: 'antonim-gamau', value: 'antonim-gamau'},
            {label: 'MAUUUUU', value: 'MAUUUUU'},
            {label: 'gaboleh sm papah', value: 'gaboleh sm papah'}
          ]);
          state = 4;
        }, 1500);
      }, 2500);

    }, 3000);
  }, 1500);
}


// start chat
showOptions([{label: 'Halo 👋', value: 'halo'}]);
