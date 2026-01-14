import { NextRequest, NextResponse } from 'next/server'

export interface Amenity {
  id: number
  name: string
  description: string
}

const amenitiesData: Amenity[] = [
  {
    id: 1,
    name: "Turf",
    description: "State-of-the-art turf area for functional training and agility work"
  },
  {
    id: 2,
    name: "Battle Ropes",
    description: "Heavy-duty battle ropes for full-body cardio and strength training"
  },
  {
    id: 3,
    name: "Kettlebells",
    description: "Wide range of kettlebells for dynamic strength and conditioning"
  },
  {
    id: 4,
    name: "TRX Suspension Trainers",
    description: "Suspension training system for bodyweight exercises"
  },
  {
    id: 5,
    name: "Plyometric Boxes",
    description: "Various height boxes for jump training and explosive movements"
  },
  {
    id: 6,
    name: "Medicine Balls",
    description: "Different weight medicine balls for core and functional training"
  },
  {
    id: 7,
    name: "Agility Ladders",
    description: "Speed and agility training equipment for footwork drills"
  },
  {
    id: 8,
    name: "Resistance Bands",
    description: "Various resistance levels for strength and rehabilitation exercises"
  },
  {
    id: 9,
    name: "Olympic Barbells",
    description: "Professional-grade barbells for heavy lifting and strength training"
  },
  {
    id: 10,
    name: "Dumbbells",
    description: "Complete set of dumbbells from light to heavy weights"
  },
  {
    id: 11,
    name: "Rowing Machines",
    description: "Commercial-grade rowing machines for full-body cardio workouts"
  },
  {
    id: 12,
    name: "Air Bikes",
    description: "High-intensity air resistance bikes for cardio and strength training"
  }
];

const totalAmenities = amenitiesData.length;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = amenitiesData.slice(startIndex, endIndex);
    
    return NextResponse.json({
      total: totalAmenities,
      data: paginatedData
    });
  } catch (error) {
    console.error('Error fetching amenities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch amenities' }, 
      { status: 500 }
    );
  }
}