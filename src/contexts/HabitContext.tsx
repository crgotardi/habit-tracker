import { toast } from "sonner";
import { createContext, ReactNode, use, useCallback, useState } from "react";
import { HabitType, StrikeType } from "@/types/habit";
import { getHabits as getHabitsApi, getStrikes as getStrikesApi } from '@/api/services/habitService';


type HabitContextProps = {
    habits: HabitType[],
    getHabits: () => void,
    addHabit: (habit: HabitType) => void,
    removeHabit: (id: number) => void,
    toggleHabit: (id: number) => void,
    strikes: StrikeType[],
    getStrikes: () => void,
    updateStrike: (id: number, isCompleted: boolean) => void,
}

const HabitContext = createContext<HabitContextProps | null>(null)

type HabitProviderProps = {
    children: ReactNode
}

export const HabitProvider: React.FC<HabitProviderProps> = ({ children }) => {
    const [habits, setHabits] = useState<HabitType[]>([])
    const [strikes, setStrikes] = useState<StrikeType[]>([])

    const getHabits = useCallback(async () => {
        try {
            const habits = await getHabitsApi()
            setHabits(habits)
        } catch (error: unknown) {
            toast.error('An error occurred while adding a new habit')
            throw new Error(`unable to create an habit: ${error}`)
        }
    }, [])

    const addHabit = useCallback((habit: HabitType) => {
        try {
            setHabits([...habits, habit])
        } catch (error: unknown) {
            toast.error('An error occurred while adding a new habit')
            throw new Error(`unable to create an habit: ${error}`)
        }
    }, [habits])

    const removeHabit = useCallback((id: number) => {
        try {
            setHabits(habits.filter(habit => habit.id !== id))
        } catch (error: unknown) {
            toast.error('An error occurred while removing a new habit')
            throw new Error(`unable to remove an habit: ${error}`)
        }
    }, [habits])

    const toggleHabit = useCallback((id: number) => {
        try {
            const updatedHabitIndex = habits.findIndex(habit => habit.id === id)
            habits[updatedHabitIndex].isCompleted = !habits[updatedHabitIndex].isCompleted
            setHabits([...habits])
            updateStrike(habits[updatedHabitIndex].id, habits[updatedHabitIndex].isCompleted)        
        } catch (error: unknown) {
            toast.error('An error occurred while toggle a new habit')
            throw new Error(`unable to toggle an habit: ${error}`)
        }
    }, [habits])

    const getStrikes = useCallback(async () => {
        try {
            const strikes = await getStrikesApi()
            setStrikes(strikes)
        } catch (error) {
            toast.error('An error occurred while getting strikes')
            throw new Error(`unable to get strikes: ${error}`)
        }
    }, [])

    const updateStrike = useCallback((id: number, isCompleted: boolean) => {
        try {
            const strikeIndex = strikes?.findIndex(strike => strike.id === id)

            if (strikeIndex !== -1) {
                const updatedStrikes = isCompleted ? strikes[strikeIndex].strikes + 1 : strikes[strikeIndex].strikes - 1
                strikes[strikeIndex].strikes = updatedStrikes
                setStrikes([...strikes])
            }
        } catch (error) {
            toast.error('An error occurred while updating strikes')
            throw new Error(`unable to update strikes: ${error}`)
        }
    }, [strikes])

    const contextValue = {
        habits,
        getHabits,
        addHabit,
        removeHabit,
        toggleHabit,
        strikes,
        getStrikes,
        updateStrike
    }

    return (
        <HabitContext.Provider value={contextValue}>
            {children}
        </HabitContext.Provider>
    )
}

export const useHabit = () => {
    const context = use(HabitContext)

    if (!context) {
        throw new Error('useHabit must be used within a HabitProvider')
    }

    return context
}

export default HabitContext