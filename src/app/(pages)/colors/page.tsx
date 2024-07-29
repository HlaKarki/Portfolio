'use client'

import { ChangeEvent, useState, MouseEvent } from 'react'
import {useToast} from "@/components/ui/use-toast";
import { cn } from '@/lib/utils';
import {Button} from "@/components/ui/button";

export default function Colors() {
    const [color, setColor] = useState<string>('#D57B1D')
    const [backgroundColor, setBackgroundColor] = useState<string>('#E0C7C6')
    const [generatedColors, setGeneratedColors] = useState<string[]>([])
    const { toast } = useToast()

    const generateShades = (color: string) => {
        if (color[0] !== "#") {
            color = "#" + color
            setColor(color)
        }
        const shades = getShades(color, 10)
        setGeneratedColors(shades)
    }
    const copyColor = async (shade: string) => {
        return navigator.clipboard.writeText(shade).then(() => {
            toast({
                description: "Your text has been copied to clipboard: " + shade,
            })
        })
    }


    return (
        <div className="p-4">
            <h1 className="text-xl mb-4">Color Shade Generator</h1>
            <div className="mb-4">
                <div className="mb-2 flex flex-row items-center gap-10">
                    <div>
                        <label className="mr-2">
                            Color Picker:
                        </label>
                        <input
                            className="border-0 rounded-md"
                            type="color"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setColor(e.target.value)
                            }
                            value={color}
                        />
                    </div>
                    <div>
                        <label className="mr-2">
                            Background color:
                        </label>
                        <input
                            className="border-0 rounded-md"
                            type="color"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                setBackgroundColor(e.target.value)
                            }
                            value={backgroundColor}
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="colorInput" className="mr-2">
                        Type in color:
                    </label>
                    <input
                        id="colorInput"
                        className="bg-white border border-amber-100 rounded-md p-1"
                        type="text"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setColor(e.target.value)
                        }
                        value={color}
                    />
                </div>
                <Button
                    className="bg-primary-dark text-white p-2 rounded-md"
                    onClick={() => generateShades(color)}
                >
                    Generate Shades
                </Button>
            </div>
            {generatedColors.length > 0 && (
                <div
                    id="shadesContainer"
                    className={cn("flex flex-row flex-wrap gap-4 cursor-pointer p-2 rounded-md")}
                    style={{backgroundColor: backgroundColor}}
                >
                    {generatedColors.map((shade, index) => (
                        <div
                            key={index}
                            className="w-20 h-20 rounded-md flex items-center justify-center text-white"
                            style={{ backgroundColor: shade }}
                            onClick={() => copyColor(shade)}
                        >
                            {shade}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const getShades = (color: string, numShades: number): string[] => {
    let shades: string[] = []
    for (let i = -numShades; i <= numShades; i++) {
        let shade = adjustBrightness(color, i * (100 / numShades))
        shades.push(shade)
    }
    return shades
}

const adjustBrightness = (color: string, percent: number): string => {
    let R = parseInt(color.substring(1, 3), 16)
    let G = parseInt(color.substring(3, 5), 16)
    let B = parseInt(color.substring(5, 7), 16)

    R = Math.min(255, Math.max(0, Math.floor(R * (1 + percent / 100))))
    G = Math.min(255, Math.max(0, Math.floor(G * (1 + percent / 100))))
    B = Math.min(255, Math.max(0, Math.floor(B * (1 + percent / 100))))

    let RR = R.toString(16).padStart(2, '0')
    let GG = G.toString(16).padStart(2, '0')
    let BB = B.toString(16).padStart(2, '0')

    return `#${RR}${GG}${BB}`
}
