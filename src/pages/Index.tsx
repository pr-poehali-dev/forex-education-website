import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      id: 'basics',
      title: 'Основы Форекс',
      description: 'Изучите базовые понятия валютного рынка',
      icon: 'BookOpen',
      level: 'Начальный',
      duration: '4 недели',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      id: 'technical',
      title: 'Технический анализ',
      description: 'Освойте графики и индикаторы',
      icon: 'TrendingUp',
      level: 'Средний',
      duration: '6 недель',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'risk',
      title: 'Риск-менеджмент',
      description: 'Управляйте рисками профессионально',
      icon: 'Shield',
      level: 'Продвинутый',
      duration: '3 недели',
      gradient: 'from-cyan-500 to-teal-500'
    }
  ];

  const strategies = [
    {
      id: 'scalping',
      title: 'Скальпинг',
      description: 'Быстрые сделки на малых таймфреймах',
      profitability: '65%',
      icon: 'Zap',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'swing',
      title: 'Свинг-трейдинг',
      description: 'Среднесрочные позиции на трендах',
      profitability: '72%',
      icon: 'Activity',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'price-action',
      title: 'Price Action',
      description: 'Торговля по ценовым паттернам',
      profitability: '68%',
      icon: 'BarChart3',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const stats = [
    { label: 'Студентов', value: '12,450', icon: 'Users' },
    { label: 'Курсов', value: '24', icon: 'GraduationCap' },
    { label: 'Успешность', value: '89%', icon: 'Trophy' },
    { label: 'Стратегий', value: '15+', icon: 'Target' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative z-10">
        <header className="border-b border-border/50 backdrop-blur-lg bg-background/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                  <Icon name="TrendingUp" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  ForexPro Academy
                </h1>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105">
                Начать обучение
              </Button>
            </div>
          </div>
        </header>

        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Платформа №1 для обучения трейдингу
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                Станьте профессиональным трейдером
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Обучающая платформа с пошаговыми курсами, проверенными стратегиями и поддержкой экспертов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 transition-all duration-300">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center">
                      <Icon name={stat.icon as any} className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Обучающие курсы
              </h3>
              <p className="text-muted-foreground text-lg">
                Пошаговая программа от новичка до профессионала
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card 
                  key={course.id}
                  className={`group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up ${
                    selectedCourse === course.id ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} mb-4 flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <Icon name={course.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Icon name="BarChart" size={16} className="mr-2" />
                          Уровень:
                        </span>
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Icon name="Clock" size={16} className="mr-2" />
                          Длительность:
                        </span>
                        <span className="text-sm font-medium">{course.duration}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 group-hover:scale-105">
                        Записаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Торговые стратегии
              </h3>
              <p className="text-muted-foreground text-lg">
                Проверенные методики с высокой эффективностью
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {strategies.map((strategy, index) => (
                <Card 
                  key={strategy.id}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${strategy.color} mb-4 flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <Icon name={strategy.icon as any} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                      {strategy.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {strategy.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                        <span className="text-sm font-medium flex items-center">
                          <Icon name="TrendingUp" size={16} className="mr-2 text-accent" />
                          Прибыльность:
                        </span>
                        <span className="text-xl font-bold text-accent">{strategy.profitability}</span>
                      </div>
                      <Button variant="outline" className="w-full border-accent/50 hover:bg-accent/10 transition-all duration-300 group-hover:scale-105">
                        <Icon name="BookOpen" size={16} className="mr-2" />
                        Изучить стратегию
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm group">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Icon name="Play" className="text-white ml-1" size={32} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mb-6 flex items-center justify-center animate-pulse-glow">
                  <Icon name="Rocket" className="text-white" size={40} />
                </div>
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Готовы начать свой путь трейдера?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Присоединяйтесь к тысячам успешных студентов и получите доступ ко всем курсам и стратегиям
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105">
                    <Icon name="Sparkles" className="mr-2" size={20} />
                    Получить доступ
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border/50 backdrop-blur-lg bg-background/30 py-8 px-6">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>© 2025 ForexPro Academy. Все права защищены.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;