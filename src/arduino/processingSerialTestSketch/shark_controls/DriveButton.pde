//DriveButton class
class DriveButton{
	float radius;
	float frequency;
	String name;
	int x;
	int y;
	int w;
	int h;
	color c;
	int difX;
	int difY;
	
	//constructor
	DriveButton(String name, int x, int y, int w, int h, color c){
		this.name = name;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.c = c;
		this.radius = this.w / 2;
		
		
	}
	void display(){
		smooth();
		stroke(255);
		fill(c);
		ellipse(x, y, w, h);
		fill(0);
		text(name,x-radius/2,y);
	}
	void clicked(){
		
		// Test if the cursor is over the box 
		if (mouseX > x-radius && mouseX < x + radius && mouseY > y-radius && mouseY < y+radius) {
			//background(c);
			if(name == "goForward"){
				port.write('0');
			}
			else if(name == "turnLeft"){
				port.write('1');
				
			}else if(name == "turnRight"){
				port.write('2');
			
			}else if(name == "goUp"){
				port.write('3');
				
			}else if(name == "goDown"){
				port.write('4');
				
			}else{
				port.write('5');
			}
			
		}
		
	}
	void keyPress(){
		if (key == CODED) {
			if (keyCode == LEFT) {
				port.write('1');
			} else if (keyCode == RIGHT) {
				port.write('2');
			}else if (keyCode == UP) {
				port.write('3');
			} else if (keyCode == DOWN) {
				port.write('4');
			} 
		}
	}
};