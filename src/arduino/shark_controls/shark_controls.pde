int front = 11;
int back = 10;
int left = 9;
int right = 8;

int d = 2000;

void setup() {
	//create serial obj
	Serial.begin(9600);
	
	//set pins
	pinMode(front, OUTPUT);
	pinMode(back, OUTPUT);
	pinMode(left, OUTPUT);
	pinMode(right, OUTPUT);
	
}

void loop() {
	//calibrate();
	
	serialIn();
	
}

void serialIn() {
	//have arduino wait to receive input
	while(Serial.available() == 0 );
	
	//read input
	int serialVal = Serial.read() - '0';
	
	if(serialVal == 0){
		//forward
		goForward();
	}
	else if(serialVal == 1){
		//left
		turnLeft();
	}
	else if(serialVal == 2){
		//right
		turnRight();
	}
	else if(serialVal == 3){
		//up
		goUp();
	}
	else if(serialVal == 4){
		
		//down
		goDown();
	}
	else if(serialVal == 5){
		
		//stop all
		stop();
	}
	Serial.flush();
}

void calibrate(){

	//calibration
	digitalWrite(right, HIGH);
	digitalWrite(left, LOW); 
	delay(2000);

	digitalWrite(left, HIGH);
	digitalWrite(right, LOW); 
	delay(600);
	digitalWrite(left, LOW);

	delay(3000);

	digitalWrite(left, HIGH);
	digitalWrite(right, LOW); 
	delay(2000);

	digitalWrite(right, HIGH);
	digitalWrite(left, LOW); 
	delay(600);
	digitalWrite(right, LOW);

 
}


void goForward(){
	Serial.println("go forward");
	int de = 1500;
	//TODO:fix
	delay(de);
	turnRight();
	delay(de);
	turnLeft();
	delay(de);
	turnRight();
	delay(de);
	turnLeft();
	delay(de);
	turnRight();
	delay(de);
	turnLeft();
	delay(de);
}

void turnLeft(){
	Serial.println("turn left");
	
	digitalWrite(left, HIGH);
	digitalWrite(right, LOW);
}

void turnRight(){
	Serial.println("turn right");
	
	digitalWrite(right, HIGH);
	digitalWrite(left, LOW);
}

void goUp(){
	Serial.println("go up");
	
	digitalWrite(front, HIGH);
	digitalWrite(back, LOW);
}

void goDown(){
	Serial.println("go down");
	
	digitalWrite(back, HIGH);
	digitalWrite(front, LOW);
}

void stop(){
	Serial.println("stop");
	digitalWrite(front, LOW);
	digitalWrite(back, LOW);
	digitalWrite(left, LOW);
	digitalWrite(right, LOW);
	
}