import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/common/HeroSection';
import SectionHeader from '@/components/common/SectionHeader';
import { Calendar, FileText, Newspaper, PenTool } from 'lucide-react';
import StickyContactButton from '@/components/common/StickyContactButton';

const News = () => {
  const placeholderNews = [
    {
      type: 'Press Release',
      title: 'Jaya Shankar Group Announces Major Expansion in Odisha',
      date: '2024-01-15',
      summary: 'Strategic partnership with IDCO for 1,800-acre pharma city development project.',
      category: 'Business Expansion'
    },
    {
      type: 'Announcement',
      title: 'West Godavari Pulp & Paper Mill Construction Begins',
      date: '2024-01-10',
      summary: 'Groundbreaking ceremony for sustainable paper manufacturing facility.',
      category: 'Project Update'
    },
    {
      type: 'In the News',
      title: 'Industry Recognition for Sustainable Practices',
      date: '2024-01-05',
      summary: 'Jaya Shankar Group recognized for environmental stewardship initiatives.',
      category: 'Awards'
    }
  ];

  const categories = [
    { name: 'Press Releases', icon: FileText, count: 1 },
    { name: 'Announcements', icon: Newspaper, count: 1 },
    { name: 'In the News', icon: Newspaper, count: 1 },
    { name: 'Blog/Articles', icon: PenTool, count: 1 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      {/* Hero Section */}
      <HeroSection
        title="News & Media: Stay Connected with Our Journey"
        // subtitle="Get the latest updates on our projects, achievements, and industry insights as we continue to shape India's industrial landscape."
        backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        buttons={[
          { text: 'Latest News', href: '#news' },
        ]}
      />

      {/* Categories */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Media Categories"
            // title="Stay Updated Across All Channels"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Stay Updated Across All Channels</span>}
            description="Access our comprehensive media coverage including press releases, announcements, news features, and thought leadership articles."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover-lift cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${[
                      'bg-yellow-100',
                      'bg-blue-100',
                      'bg-[#8a7575]',
                      'bg-orange-100',
                    ][index % 4]} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <category.icon className={`w-6 h-6 ${[
                      'text-yellow-600',
                      'text-blue-400',
                      'text-brown-600',
                      'text-orange-600',
                    ][index % 4]}`} />
                  </div>
                  <h4 className="font-semibold mb-2">{category.name}</h4>
                  <div className={`text-2xl font-bold ${[
                    'text-yellow-600',
                    'text-blue-400',
                    'text-[#8a7575]',
                    'text-orange-600',
                  ][index % 4]}`}>{category.count}</div>
                  <p className="text-sm text-muted-foreground">Available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Latest Updates"
            // title="Recent News & Announcements"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Recent News & Announcements</span>}

            description="Stay informed about our latest developments, project milestones, and industry insights."
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {placeholderNews.map((news, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 ${[
                        'bg-blue-100 text-blue-600',
                        'bg-gray-100 text-yellow-600',
                        'bg-orange-200 text-orange-600',
                      ][index % 3]} rounded-full text-xs font-medium`}
                    >
                      {news.type}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className={`w-4 h-4 mr-1 ${[
                        'text-blue-600',
                        'text-yellow-600',
                        'text-orange-600',
                      ][index % 3]}`} />
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{news.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{news.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{news.category}</span>
                    {/* <Button variant="ghost" size="sm">Read More</Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Sections */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">More Content Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building comprehensive media coverage including detailed press releases,
              industry insights, and thought leadership content. Stay tuned for regular updates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 bg-white-100 rounded-lg text-gray-400 mx-auto mb-4 flex items-center justify-center" />
                  <h4 className="font-semibold mb-2">Press Releases</h4>
                  <p className="text-sm text-muted-foreground">Official company announcements and updates</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Newspaper className="w-12 h-12 bg-blue-100 rounded-lg text-blue-400 mx-auto mb-4 flex items-center justify-center" />
                  <h4 className="font-semibold mb-2">Media Coverage</h4>
                  <p className="text-sm text-muted-foreground">Coverage in national and industry publications</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <PenTool className="w-12 h-12 bg-brown-100 rounded-lg text-brown-600 mx-auto mb-4 flex items-center justify-center" />
                  <h4 className="font-semibold mb-2">Thought Leadership</h4>
                  <p className="text-sm text-muted-foreground">Industry insights and expert commentary</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 bg-orange-100 rounded-lg text-orange-400 mx-auto mb-4 flex items-center justify-center" />
                  <h4 className="font-semibold mb-2">Event Updates</h4>
                  <p className="text-sm text-muted-foreground">Conference participation and industry events</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
