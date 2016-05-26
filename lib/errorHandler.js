/**
*
*
*/
function errorHandler(error, context, nativeError) {
	// Big object mapping error codes (keys) to error messages (values)
	const errorMap = {
		characteristic_error: 'Error. Characteristic not found',
		connect_gatt: 'Error. Could not connect to GATT. Device might be out of range. Also check to see if filters are vaild',
		connect_server: 'Error. Could not connect to server on device.',
		connect_service: 'Error. Could not find service',
		disconnect_timeout: 'Timed out. Could not disconnect.',
		disconnect_error: 'Error. Could not disconnect from device.',
		no_device: 'Error. No instance of device found.',
		no_filters: 'Error. No filters found on instance of Device',
		no_read_property: 'No read property on this characteristic',
		no_write_property: 'No write property on this characteristic',
		postValue_error: 'Error. Could not post value to device.',
		read_error: 'Error. Cannot read value on the characteristic.'
		start_notifications: 'Error. Service does not have a notify characteristic.',
		start_notifs: 'Error. No notify property found on this characteristic ',
		uuid_error: 'Error. Invalid uuid',
		write_error: 'Error. Could not change value of the characteristic.'
	}

	return console.error(errorMap[error], context, nativeError); // Should we throw a new error, or just log it?
}

module.exports = { errorHandler };
