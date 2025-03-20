import React, { useState } from 'react';
import { Phone, Calculator, MessageSquare, MapPin, Mail, Clock, Package, Truck, ShieldCheck, Warehouse, Instagram, Train } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import logo from './assets/logo.svg';

Modal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromCity, setFromCity] = useState('Алматы');
  const [toCity, setToCity] = useState('Актау');
  const [weight, setWeight] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const pricePerKg = 30;
    const pricePerCubicMeter = 9000;
    const price = (weight * pricePerKg) + (volume * pricePerCubicMeter);
    setCalculatedPrice(price);
  };

  const cities = ['Актау', 'Атырау', 'Актобе'];

  const tariffs = [
    { from: 'Алматы', to: 'Актау', price: 'от 30 тг/кг' },
    { from: 'Алматы', to: 'Атырау', price: 'от 30 тг/кг' },
    { from: 'Алматы', to: 'Актобе', price: 'от 30 тг/кг' }
  ];

  const addresses = [
    { city: 'Алматы', address: 'станция Алматы 1, жд тупик 31' },
    { city: 'Атырау', address: 'Проспект Аззаттык 116, бывшая торговая база' },
    { city: 'Актау', address: 'База ОРСа, Склад 5000/1' },
    { city: 'Актобе', address: '41-ый разъезд, 597' }
  ];

  const contacts = [
    { title: 'Алматы склад', phone: '8 700 422 88 81', name: 'Жанна' },
    { title: 'Алматы-Актау', phone: '8 778 442 80 33', name: 'Нуржан' },
    { title: 'Алматы-Атырау', phone: '8 701 872 66 88', name: 'Галина' },
    { title: 'Алматы-Актобе', phone: '8 771 216 47 07', name: 'Жаксат' },
    { title: 'Китай-Казахстан', phone: '8 702 782 29 60', name: 'Айдос' }
  ];

  const services = [
    'погрузочно-разгрузочные работы',
    'комплектация и маркировка грузов',
    'обработка товара в соответствии с требованиями Заказчика',
    'перевозка грузов с формированием маршрутов',
    'экспедирование груза',
    'хранение и размещение продукции',
    'сопутствующие услуги для транспортировки груза Заказчика'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with enhanced styling */}
      <header className="bg-[#22c55e] text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center space-x-3 text-lg"
          >
            <Phone size={24} className="text-white" />
            <span className="font-semibold">+7-700-422-88-81</span>
          </motion.div>
          <div className="flex items-center space-x-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#addresses" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <MapPin size={24} />
              <span className="font-medium">Наши адреса</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <Mail size={24} />
              <span className="font-medium">info@abktrans.kz</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="https://www.instagram.com/abktrans.kz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
            >
              <Instagram size={24} />
              <span className="font-medium">Instagram</span>
            </motion.a>
          </div>
        </div>
      </header>

      {/* Navigation with logo */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img src={logo} alt="ABKTRANS" className="h-16" />
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Услуги', 'Тарифы', 'Контакты'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Главная' ? '#' : `#${item.toLowerCase()}`}
                  className="text-[#22c55e] hover:text-[#16a34a] font-medium text-lg"
                  whileHover={{ scale: 1.1 }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Train Background */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="h-[500px] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1702990030423-1e3a7d56f5c3?q=80&w=1920&auto=format&fit=crop')",
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Железнодорожные перевозки по Казахстану</h1>
            <p className="text-xl text-white mb-8 max-w-2xl">Надежная и быстрая доставка грузов с города Алматы до городов Актау, Атырау, Актобе</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/77004228881" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center sm:justify-start shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Связаться через WhatsApp
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center sm:justify-start shadow-lg"
              >
                <Calculator className="mr-2" size={20} />
                Рассчитать стоимость
              </button>
              <a 
                href="tel:+77004228881" 
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center sm:justify-start shadow-lg"
              >
                <Phone className="mr-2" size={20} />
                Позвонить нам
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Modal with green theme */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#22c55e] p-8 rounded-lg shadow-2xl w-full max-w-4xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(5px)'
          }
        }}
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <div className="flex items-center">
            <Calculator className="text-white mr-3" size={28} />
            <h2 className="text-2xl font-bold text-white">Расчет стоимости перевозки</h2>
          </div>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="text-white hover:text-white/80 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white mb-2 font-medium">Откуда</label>
            <select 
              className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-white"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              disabled
            >
              <option value="Алматы">Алматы</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">Куда</label>
            <select 
              className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-white"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">Вес груза (кг)</label>
            <input 
              type="number"
              className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-white"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              min="0"
              placeholder="30 тг за кг"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">Объем груза (м³)</label>
            <input 
              type="number"
              className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-white"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              min="0"
              placeholder="9000 тг за м³"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">Количество мест (для информации)</label>
            <input 
              type="number"
              className="w-full px-4 py-2 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:bg-white"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={calculatePrice}
          className="w-full bg-white text-[#22c55e] font-bold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-white/90"
        >
          <Calculator className="mr-2" size={20} />
          Рассчитать стоимость
        </motion.button>

        {calculatedPrice !== null && (
          <div className="mt-6 p-6 bg-white rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#22c55e]">Маршрут:</p>
                <p className="font-semibold text-[#22c55e]">{fromCity} → {toCity}</p>
              </div>
              <div className="text-right">
                <p className="text-[#22c55e]">Стоимость:</p>
                <p className="text-2xl font-bold text-[#22c55e]">{calculatedPrice.toLocaleString()} тг</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>Расчет стоимости:</p>
              <ul className="list-disc ml-4 mt-2">
                <li>Вес: {weight} кг × 30 тг = {(weight * 30).toLocaleString()} тг</li>
                <li>Объем: {volume} м³ × 9000 тг = {(volume * 9000).toLocaleString()} тг</li>
                <li>Количество мест: {quantity} (информативно)</li>
              </ul>
              <p className="mt-2">*Окончательная стоимость может отличаться. Для точного расчета свяжитесь с нами.</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Services Section with Train Icon */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#22c55e] mb-12">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#22c55e]"
            >
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="bg-[#22c55e] text-white w-14 h-14 rounded-full flex items-center justify-center mb-4"
              >
                <Train size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#22c55e] mb-2">Железнодорожные перевозки</h3>
              <p className="text-gray-600">Перевозка грузов по железной дороге с города Алматы до городов Актау, Атырау, Актобе.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#22c55e]"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-[#22c55e] text-white w-14 h-14 rounded-full flex items-center justify-center mb-4"
              >
                <Package size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#22c55e] mb-2">Погрузочно-разгрузочные работы</h3>
              <p className="text-gray-600">Профессиональная погрузка и разгрузка грузов любой сложности.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#22c55e]"
            >
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-[#22c55e] text-white w-14 h-14 rounded-full flex items-center justify-center mb-4"
              >
                <Truck size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#22c55e] mb-2">Экспедирование груза</h3>
              <p className="text-gray-600">Полное сопровождение груза от отправителя до получателя.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#22c55e]"
            >
              <motion.div 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-[#22c55e] text-white w-14 h-14 rounded-full flex items-center justify-center mb-4"
              >
                <Warehouse size={28} />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#22c55e] mb-2">Хранение и размещение</h3>
              <p className="text-gray-600">Временное хранение грузов на наших складах с соблюдением всех норм.</p>
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-[#22c55e] mb-6">Полный перечень услуг:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md border-2 border-[#22c55e]">
                  <ShieldCheck className="text-[#22c55e] mr-2 flex-shrink-0" size={20} />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#22c55e] mb-12">Тарифы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffs.map((tariff, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#22c55e]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-[#22c55e] mb-2">
                  {tariff.from} - {tariff.to}
                </h3>
                <p className="text-[#22c55e] font-bold text-2xl">{tariff.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Addresses Section */}
      <section id="addresses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#22c55e] mb-12">Адреса складов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addresses.map((address, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#22c55e]"
                whileHover={{ y: -5 }}
              >
                <MapPin className="text-[#22c55e] mb-4" size={24} />
                <h3 className="text-xl font-semibold text-[#22c55e] mb-2">{address.city}</h3>
                <p className="text-gray-600">{address.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#22c55e] mb-12">Контакты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#22c55e]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold text-[#22c55e] mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-2">{contact.name}</p>
                <a 
                  href={`tel:${contact.phone}`}
                  className="text-[#22c55e] font-bold flex items-center hover:text-[#16a34a] transition-colors duration-300"
                >
                  <Phone className="mr-2" size={20} />
                  {contact.phone}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#22c55e]"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-[#22c55e] mb-4">График работы:</h3>
              <div className="flex items-center">
                <Clock className="text-[#22c55e] mr-2" size={20} />
                <p>Пн-Сб: 09:00-17:00</p>
              </div>
              <p className="ml-7">Выходной: Воскресенье</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;