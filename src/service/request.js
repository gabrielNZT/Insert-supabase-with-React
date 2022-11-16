/* eslint-disable no-unused-vars */
import { supabase } from "./init";
import uuid from 'react-uuid';

export const insertBlocks = async (id, name, desc) => {
    const { error } = await supabase
        .from('blocks')
        .insert({ id: id, created_at: new Date(), name: name, desc: desc });
}

export const insertBlocksVehicle = async (block_id, vehicle_id, desc) => {
    const { error } = await supabase
        .from('blocks_vehicle')
        .insert({ block_id: block_id, vehicle_id: vehicle_id, desc: desc })
}

export const insertBlocksTrips = async (trip_id, block_id, service_id) => {
    const { error } = await supabase
        .from('blocks_trips')
        .insert({ trip_id: trip_id, block_id: block_id, service_id: service_id, created_at: new Date() })
}

export const insertTrips = async (id, short_name, route_id, service_id, direction, desc, wheelchair_code) => {
    const { error } = await supabase
        .from('trips')
        .insert({ id: id, created_at: new Date(), short_name: short_name, route_id: route_id, service_id: service_id, direction: direction, desc: desc, wheelchair_code: wheelchair_code })
}

export const insertTripsDirections = async (id, name, desc) => {
    const { error } = await supabase
        .from('trips_directions')
        .insert({ id: id, created_at: new Date(), name: name, desc: desc })
}

export const insertTripsTimes = async (id, station_id, trip_id, arrival_time, arrival_time_sec_utc, departure_time_sec_utc) => {
    const { error } = await supabase
        .from('trips_times')
        .insert({ id: id, created_at: new Date(), station_id: station_id, trip_id: trip_id, arrival_time: arrival_time, arrival_time_sec_utc: arrival_time_sec_utc, departure_time_sec_utc: departure_time_sec_utc })
}

export const insertTripsWhCodes = async (id, name, desc, accepts_wheelchair) => {
    const { error } = await supabase
        .from('trips_wh_codes')
        .insert({ id: id, created_at: new Date(), name: name, desc: desc, accepts_wheelchair: accepts_wheelchair })
}

export const inserRoutes = async (id, short_name, long_name, type, desc) => {
    const { error } = await supabase
        .from('routes')
        .insert({ id: id, created_at: new Date(), updated_at: new Date(), short_name: short_name, long_name: long_name, type: type, desc: desc })
}

export const insertRoutesStations = async (id, route_id, trip_direction, station_id, order) => {
    const { error } = await supabase
        .from('routes_stations')
        .insert({ id: id, created_at: new Date(), route_id: route_id, trip_direction: trip_direction, station_id: station_id, order: order })
}

export const insertGpsDevices = async (id, name, desc) => {
    const { error } = await supabase
        .from('gps_devices')
        .insert({ id: id, created_at: new Date(), name: name, desc: desc })
}

export const insertGpsPositions = async (gps_id, latitude, longitude) => {
    const { error } = await supabase
        .from('gps_positions')
        .insert({ gps_id: gps_id, updated_at: new Date(), latitude: latitude, longitude: longitude })
}

export const insertStations = async (id, type, code, name, desc, latitude, longitude) => {
    const { error } = await supabase
        .from('stations')
        .insert({ id: id, created_at: new Date(), type: type, code: code, name: name, desc: desc, latitude: latitude, longitude: longitude })
}

export const insertStationsTypes = async (id, short_name, desc) => {
    const { error } = await supabase
        .from('stations_types')
        .insert({ id: id, created_at: new Date(), short_name: short_name, desc: desc })
}

export const insertServiceDays = async (service_id, desc, monday, tuesday, wednesday, thursday, friday, saturday, sunday) => {
    const { error } = await supabase
        .from('service_days')
        .insert({ service_id: service_id, created_at: new Date(), desc: desc, monday: monday, tuesday: tuesday, wednesday: wednesday, thursday: thursday, friday: friday, saturday: saturday, sunday: sunday })
}

export const insertVacCode = async (id, name, desc) => {
    const { error } = await supabase
        .from('v_ac_code')
        .insert({ id: id, created_at: new Date(), name: name, desc: desc })
}

export const insertVwifiCode = async (id, name, desc) => {
    const { error } = await supabase
        .from('v_wifi_code')
        .insert({ id: id, created_at: new Date(), name: name, desc: desc })
}

export const insertVehicle = async (id, type, name, desc, extra_data, wheelchair_max, wifi_code, ac_code) => {
    const { error } = await supabase
        .from('vehicle')
        .insert({
            id: id, created_at: new Date(), type: type, name: name, desc: desc, extra_data: JSON.stringify(extra_data), wheelchair_max: wheelchair_max, wifi_code: wifi_code, ac_code: ac_code
        })
}

export const insertVehicleTypes = async (id, short_name, desc) => {
    const { error } = await supabase
        .from('vehicle_types')
        .insert({ id: id, created_at: new Date(), short_name: short_name, desc: desc })
}

export const insertVehicleGps = async (gps_id, vehicle_id) => {
    const { error } = await supabase
        .from('vehicles_gps')
        .insert({ gps_id: gps_id, vehicle_id: vehicle_id, created_at: new Date() })
}