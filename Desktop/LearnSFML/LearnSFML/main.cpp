#include <SFML/Audio.hpp>
#include <SFML/Graphics.hpp>
#include<vector>
using namespace sf;

int main()
{    // Create the main window
    RenderWindow window(VideoMode(1000, 800), "SFML window");
    window.setFramerateLimit(60);
    CircleShape projectile;
    projectile.setFillColor(Color::Red);
    projectile.setRadius(5.f);
    std::vector<CircleShape> projections;
    projections.push_back(CircleShape(projectile));
    RectangleShape enemy;
    enemy.setFillColor(Color::Green);
    enemy.setSize(Vector2f(50.f,50.f));
    std::vector<RectangleShape> targets;
    targets.push_back(enemy);
    CircleShape shooter;
    shooter.setRadius(50.f);
    shooter.setFillColor(Color::White);
    shooter.setPosition(window.getSize().x/2-shooter.getRadius(), window.getSize().y - shooter.getRadius()*2-10.f);
    int shootTimer = 0;
    int enemySpawnTimer = 0;
    int Kills=0;
    Text kill;
    kill.setCharacterSize(15);
    kill.setFillColor(Color::Red);
    kill.setStyle(Text::Bold);
    kill.setPosition(window.getSize().x-10.f, 10.f);
    
    // Start the game loop
    while (window.isOpen())
    {
        // Process events
        Event event;
        while (window.pollEvent(event))
        {
            // Close window: exit
            if (event.type == Event::Closed) {
                window.close();
            }
        }
        //Update
        if(shootTimer<5)
            shootTimer++;
        if(Mouse::isButtonPressed(Mouse::Left) && shootTimer>=5){
            projectile.setPosition(Vector2f(shooter.getPosition().x + shooter.getRadius(), shooter.getPosition().y));
            projections.push_back(CircleShape(projectile));
            shootTimer = 0;
        }
        if(enemySpawnTimer<20)
            enemySpawnTimer++;
        if(enemySpawnTimer>=20){
            enemy.setPosition(rand()%int(window.getSize().x - enemy.getSize().x),0.f);
            targets.push_back(RectangleShape(enemy));
            enemySpawnTimer=0;
                    }
        for(int a=0;a < targets.size();a++){
            targets[a].move(0.f,10.f);
            if(targets[a].getPosition().y >= window.getSize().y){
                targets.erase(targets.begin()+a);
            }
        }
        for(int x=0;x<projections.size();x++){
            projections[x].move(0.f, -10.f);
            if(projections[x].getPosition().y <=0){
                projections.erase(projections.begin()+x);
            }
        }
        
        //collision
        for(int i=0;i<projections.size();i++){
            for(int j=0;j<targets.size();j++){
                if(projections[i].getGlobalBounds().intersects(targets[j].getGlobalBounds())){
                    projections.erase(projections.begin()+i);
                    targets.erase(targets.begin()+j);
                    Kills++;
                    kill.setString(std::to_string(Kills));
                }
            }
        }
        shooter.setPosition(Mouse::getPosition(window).x,shooter.getPosition().y);
        if(Mouse::getPosition(window).x > window.getSize().x - shooter.getRadius()*2 ){
            shooter.setPosition(window.getSize().x - shooter.getRadius()*2,shooter.getPosition().y);
        }
        if(Mouse::getPosition(window).x < 0){
            shooter.setPosition(0.f, shooter.getPosition().y);
        }
        // Draw
        
         window.clear();
        
        // Draw Everything
        window.draw(shooter);
        for (int i=0; i<targets.size();i++) {
            window.draw(targets[i]);
        }
        for (int j=0; j<projections.size();j++) {
            window.draw(projections[j]);
        }
        window.draw(kill);
        window.display();
    }

    return 0;
}
