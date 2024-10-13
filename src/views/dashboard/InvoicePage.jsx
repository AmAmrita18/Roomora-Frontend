import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { Printer } from "lucide-react";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    fontSize: 12,
  },
  value: {
    fontSize: 12,
  },
  total: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
});

const BookingInvoice = ({ user, hotel, room, checkIn, checkOut }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>Hotel Booking Invoice</Text>

      {/* User Details */}
      <View style={styles.section}>
        <Text style={styles.label}>User Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name: </Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Phone: </Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
      </View>

      {/* Hotel Details */}
      <View style={styles.section}>
        <Text style={styles.label}>Hotel Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Hotel Name: </Text>
          <Text style={styles.value}>{hotel.hotel_name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Room Type: </Text>
          <Text style={styles.value}>{room.roomType}</Text>
        </View>
      </View>

      {/* Booking Details */}
      <View style={styles.section}>
        <Text style={styles.label}>Booking Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Check-in: </Text>
          <Text style={styles.value}>{checkIn}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Check-out: </Text>
          <Text style={styles.value}>{checkOut}</Text>
        </View>
      </View>

      {/* Total Cost */}
      <View>
        <Text style={styles.total}>Total Cost: $1000</Text>
      </View>
    </Page>
  </Document>
);

// Parent Component with PDF Download Link
const InvoicePage = ({ bookingDetails }) => {
  return (
    <div>
      <h2>Download Booking Invoice</h2>
      <PDFDownloadLink
        document={
          <BookingInvoice
            user={bookingDetails?.user}
            hotel={bookingDetails?.hotel}
            room={bookingDetails?.room}
            checkIn={bookingDetails?.check_in}
            checkOut={bookingDetails?.check_out}
            // totalCost={bookingDetails.totalCost}
          />
        }
        fileName="booking-invoice.pdf"
      >
        {({ loading }) =>
          loading ? (
            "Loading..."
          ) : (
            <button className="text-red-400 hover:text-red-300">
              <Printer size={18} />
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default InvoicePage;