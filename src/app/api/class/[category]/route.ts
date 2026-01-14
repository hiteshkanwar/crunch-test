import { NextRequest, NextResponse } from 'next/server'

export interface ClassItem {
  Id: number
  name: string
  description: string
}

const classesData: Record<string, ClassItem[]> = {
  hiit: [
    {
      Id: 1,
      name: "AccelerateHIIT",
      description: "High-intensity interval training designed to push your limits with explosive movements and maximum calorie burn"
    },
    {
      Id: 2,
      name: "PowerHIIT",
      description: "Strength-focused HIIT workout combining resistance training with cardio intervals for ultimate conditioning"
    },
    {
      Id: 3,
      name: "CoreBlast HIIT",
      description: "Core-intensive HIIT session targeting your midsection while boosting cardiovascular endurance"
    },
    {
      Id: 4,
      name: "MetabolicMeltdown",
      description: "Fast-paced metabolic training designed to maximize calorie burn and improve overall fitness"
    }
  ],
  small: [
    {
      Id: 5,
      name: "Precision Training",
      description: "Small group focused training for personalized attention and technique refinement"
    },
    {
      Id: 6,
      name: "Strength Foundations",
      description: "Building fundamental strength patterns in an intimate group setting"
    },
    {
      Id: 7,
      name: "Mobility & Movement",
      description: "Corrective exercise and mobility work to improve movement quality"
    }
  ],
  cardio: [
    {
      Id: 8,
      name: "CardioBlast",
      description: "High-energy cardiovascular workout to improve heart health and endurance"
    },
    {
      Id: 9,
      name: "Interval Rush",
      description: "Heart-pumping interval training focusing on cardiovascular improvement"
    },
    {
      Id: 10,
      name: "Endurance Builder",
      description: "Steady-state and interval cardio training to build lasting endurance"
    },
    {
      Id: 11,
      name: "Fat Burn Express",
      description: "Targeted cardio session designed for maximum fat burning and metabolic boost"
    }
  ]
};

interface RouteContext {
  params: Promise<{
    category: string
  }>
}

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { category } = await context.params;
    const normalizedCategory = category.toLowerCase();
    
    const classes = classesData[normalizedCategory];
    
    if (!classes) {
      return NextResponse.json(
        { error: `Category '${category}' not found. Available categories: hiit, small, cardio` }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch classes' }, 
      { status: 500 }
    );
  }
}