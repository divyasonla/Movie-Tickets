<template>
<div>
    <h1 class="text-gray-900 font-bold text-[32px]">Oppenheimer</h1>
    <div class="mt-11 flex flex-row items-center justify-between">
        <div class="flex flex-col space-y-3">
            <h2 class="text-gray-700 text-hash font-bold uppercase">Director</h2>
            <p class="text-gray-600 text-xl font-semibold">Christopher</p>
        </div>
        <div class="flex flex-col space-y-3">
            <h2 class="text-gray-700 text-hash font-bold uppercase">Release Date</h2>
            <p class="text-gray-600 text-xl font-semibold">21st July 2023</p>
        </div>
    </div>
<!-- page 1  -->
    <div class="max-w-full"> 
    
        <div class="mx-12" v-if="currentStep === 0">
            <div class=" p-2 mt=7 bg-white shadow-2xl rounded">
                <img src="https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg" alt="movie poster">
        
            </div>
            <div class="w-full flex items-center justify-center mt-7">

                <Button 
                size="xl" 
                variant="solid"
                @click="currentStep++">Book Tickets</Button>
            </div>
            <div class="flex flex-col space-y-3">
                <h2 class="text-gray-700 text-hash font-bold uppercase">Synopsis</h2>
                <p class="text-gray-600 text-lg font-normal">The film is based on the Pulitzes Prize wining book American Promise.</p>
            </div>
        </div>
    
    
    <!-- page 2 -->
    
    
        <div v-else-if="currentStep === 1">
            <h2 class=" font-medium text-xl text-gray-900 mt-7 ">How many seats?</h2>
            <div class="flex flex-col w-full space-y-5 mt-6">
                <Button 
                size="lg" 
                :variant="index === bookingData.numberOfSeats ? 'subtle' : 'white'" 
                class="shadow-lg" 
                v-for="index in 8" 
                @click="setNumberOfSeats(index)"
                >{{ index }}</Button>
            </div>
        </div>


        <!-- page 3 -->

        <div v-else-if="currentStep === 2">
            <div class="flex flex-col space-y-5">
                <h2 class=" font-medium text-xl text-gray-900 mt-7">Date</h2>
               <Input type="date" v-model="bookingData.date" />
            </div>
            <div>
                <h2 class=" font-medium text-xl text-gray-900 mt-7">Cinema & Show</h2>

                <div class="space-y-2">
                    <div class="bg-white shadow-xl p-4 rounded">
                        <h3 class="text-sm font-bold text-gray-800">Star Talkies</h3>
                        <div class="flex flex-row space-x-2 mt-2">
                            <Button size="5m" variant="outline">12:30pm</Button>
                            <Button size="5m" variant="subtle">3:30pm</Button>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="bg-white shadow-xl p-4 rounded">
                        <h3 class="text-sm font-bold text-gray-800">Anupama Theater</h3>
                        <div class="flex flex-row space-x-2 mt-2">
                            <Button size="5m" variant="outline">1:30pm</Button>
                            <Button size="5m" variant="subtle">11:30am</Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- page 4 -->
        <div v-else-if="currentStep === 3">
            <h2 class=" font-medium text-xl text-gray-900 mt-7 ">Select seats</h2>

            <div>
          <div
            :key="row"
            class="flex flex-row"
            v-for="row in Object.keys(seatStructure)"
          >
            <span
              @click="selectSeat(row, seat[0])"
              v-for="seat in seatStructure[row]"
              class="w-6 h-8 m-2 rounded-[2px]"
              :class="[
                seat[1] === 'Available'
                  ? 'bg-blue-300'
                  : seat[1] === 'Selected'
                  ? 'bg-blue-600'
                  : 'bg-gray-300',
                hasSelectedCorrectNumberOfSeats
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer',
              ]"
            ></span>
          </div>
        </div>

        </div>

        <!-- page 5 -->
        <div v-else-if="currentStep === 4">
            <div class="w-full flex items-center flex-col mt-7">
                <h1 class="text-[110px]">🍿</h1>
                <h2 class=" font-medium text-xl text-gray-900 mt-7 ">Enjoy the Movie!</h2>
            </div>
        </div>
    </div>
    <div class="flex flex-row mt-6 space-x-2">
        <Button
            class="mt-5"
            size="lg" 
            variant="subtle"
            v-if="currentStep !== 0 && currentStep !== 4"
            @click="currentStep--"
            >Go Back
        </Button>
         <Button 
            v-if="currentStep !== 0 && currentStep !== 4"
            size="xl" 
            variant="solid"
            @click="currentStep++">Next</Button>
    </div>

</div>
</template>
<script setup>

import {ref, reactive } from 'vue';

function getSeatStructure(alphabets,numbers){
    const structure = {}
    for (const alphabet of alphabets){
        structure[alphabet] = []
        for(const number of numbers){
            structure[alphabet].push([number, 'Available'])
        }
    }
    return structure
}
const seatStructure = reactive(getSeatStructure(
    ['A','B','C','D','E'],
    [1,2,3,4,5,6,7,8]
    ))

const today=new Date().toISOString().substr(0,10)
const currentStep=ref(1);
const bookingData = reactive({
    numberOfSeats : 0,
    seats :[],
    selectedSeats:[],
    date:today,
})

function setNumberOfSeats(n){
    bookingData.numberOfSeats = n;
}

function selectSeat(row, number){
    // mark the seat booked in structure
    const seat = seatStructure[row].find(seat => seat[0] === number)
    seat[1] = 'Selected'
    bookingData.selectedSeats.push(`${row}${number}`)
}
</script>